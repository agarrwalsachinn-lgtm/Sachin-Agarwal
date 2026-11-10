const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = process.env.PORT || 3000;
const dbPath = path.join(__dirname, "data.sqlite");

const db = new sqlite3.Database(dbPath, (error) => {
  if (error) {
    console.error("Could not open SQLite database.", error);
    process.exit(1);
  }

  db.run(
    "CREATE TABLE IF NOT EXISTS storage (key TEXT PRIMARY KEY, value TEXT NOT NULL)",
    (createError) => {
      if (createError) {
        console.error("Could not initialize storage table.", createError);
        process.exit(1);
      }

      app.listen(port, () => {
        console.log(`Backend running on http://localhost:${port}`);
      });
    }
  );
});

app.use(express.json({ limit: "2mb" }));
app.use(express.static(__dirname));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "agrimill-erp-backend" });
});

app.get("/api/storage", (req, res) => {
  const key = typeof req.query.key === "string" ? req.query.key : null;

  if (key) {
    db.get("SELECT value FROM storage WHERE key = ?", [key], (error, row) => {
      if (error) {
        res.status(500).json({ error: "Could not read storage value." });
        return;
      }

      res.json({ key, value: row ? row.value : null });
    });
    return;
  }

  db.all("SELECT key, value FROM storage ORDER BY key", (error, rows) => {
    if (error) {
      res.status(500).json({ error: "Could not read all storage values." });
      return;
    }

    const payload = {};
    rows.forEach(({ key, value }) => {
      payload[key] = value;
    });

    res.json(payload);
  });
});

app.post("/api/storage", (req, res) => {
  const { key, value } = req.body || {};

  if (typeof key !== "string" || key.trim() === "") {
    res.status(400).json({ error: "A non-empty string key is required." });
    return;
  }

  const serialized = typeof value === "string" ? value : JSON.stringify(value);

  db.run(
    "INSERT INTO storage (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
    [key, serialized],
    (error) => {
      if (error) {
        res.status(500).json({ error: "Could not save storage value." });
        return;
      }

      res.json({ ok: true, key, value: serialized });
    }
  );
});

app.delete("/api/storage", (req, res) => {
  const { key } = req.body || req.query || {};

  if (typeof key === "string" && key.trim() !== "") {
    db.run("DELETE FROM storage WHERE key = ?", [key], (error) => {
      if (error) {
        res.status(500).json({ error: "Could not remove storage value." });
        return;
      }

      res.json({ ok: true, key, removed: true });
    });
    return;
  }

  db.run("DELETE FROM storage", (error) => {
    if (error) {
      res.status(500).json({ error: "Could not clear storage." });
      return;
    }

    res.json({ ok: true, cleared: true });
  });
});

app.use((req, res, next) => {
  if (req.path.startsWith("/api/")) {
    res.status(404).json({ error: "Not found" });
    return;
  }

  res.sendFile(path.join(__dirname, "index.html"));
});

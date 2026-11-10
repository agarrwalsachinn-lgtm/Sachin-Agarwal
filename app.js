const departments = {
  admin: { label: "Administrator", modules: ["dashboard", "dailyReview", "editLog", "production", "inventory", "inventoryMovement", "inventoryPurchases", "stores", "storesPurchases", "stockMovement", "purchases", "purchaseOrders", "sales", "salesOrders", "brokerage", "accounting", "employees"] },
  production: { label: "Production", modules: ["dashboard", "production", "inventory", "inventoryMovement"] },
  inventory: { label: "Inventory", modules: ["dashboard", "inventory", "inventoryPurchases", "inventoryMovement"] },
  stores: { label: "Stores", modules: ["dashboard", "stores", "storesPurchases", "stockMovement"] },
  purchase: { label: "Purchase", modules: ["dashboard", "purchases", "purchaseOrders"] },
  sales: { label: "Sales", modules: ["dashboard", "sales", "salesOrders", "brokerage", "inventory"] },
  accounts: { label: "Accounts", modules: ["dashboard", "accounting", "purchases", "sales", "brokerage"] },
  hr: { label: "Human Resources", modules: ["dashboard", "employees"] }
};

const demoAccounts = [
  { email: "admin@agrimill.local", password: "Admin@123", departmentId: "admin", name: "Mill Administrator" },
  { email: "production@agrimill.local", password: "Prod@123", departmentId: "production", name: "Production User" },
  { email: "inventory@agrimill.local", password: "Stock@123", departmentId: "inventory", name: "Inventory User" },
  { email: "stores@agrimill.local", password: "Stores@123", departmentId: "stores", name: "Stores User" },
  { email: "purchase@agrimill.local", password: "Buy@123", departmentId: "purchase", name: "Purchase User" },
  { email: "sales@agrimill.local", password: "Sales@123", departmentId: "sales", name: "Sales User" },
  { email: "accounts@agrimill.local", password: "Ledger@123", departmentId: "accounts", name: "Accounts User" },
  { email: "hr@agrimill.local", password: "People@123", departmentId: "hr", name: "HR User" }
];

const paddyTypeOptions = ["Hybrid Paddy", "Mix Paddy", "Mota Paddy", "Mansoori Paddy"];

const moduleInfo = {
  dashboard: { label: "Dashboard", icon: "⌂", description: "An overview of your mill's operations today." },
  dailyReview: { label: "Daily data review", icon: "▦", description: "Review, print, and edit records entered by every department for a selected date." },
  editLog: { label: "Edited log", icon: "◷", description: "Review the administrator, time, and field-by-field details of every recorded edit.", columns: ["Date and time", "Administrator", "Email", "Department", "Section", "Record ID", "Changes"] },
  production: { label: "Production", icon: "⚙", description: "Manage dryer intake batches and milling conversion into Rice and by-products.", columns: ["Batch Number", "Date", "Dryer No.", "Mill", "Product", "Paddy input", "Rice output", "Yield", "Status"], fields: [], initial: [["PRD-2026-001", "31 Oct 2026", "D1 (INDUSS 32MT)", "Mill 1 (OLD)", "Grade A Raw Rice", "12,500 kg", "8,125 kg", "65.0%", "Completed"], ["PRD-2026-002", "31 Oct 2026", "D2 (DULICHAND 32MT)", "Mill 2 (NEW MILL)", "Grade A Raw Rice", "10,000 kg", "6,420 kg", "64.2%", "Processing"], ["PRD-2026-003", "31 Oct 2026", "D3 (SKF 40MT)", "Mill 2 (NEW MILL)", "Broken Rice", "8,200 kg", "5,300 kg", "64.6%", "Completed"]] },
  dryerBatches: { label: "Dryer batches", icon: "♨", description: "Track Paddy intake, bag count, weighment and dryer details.", columns: ["Dryer batch", "Date", "Dryer", "Paddy type", "Purchase RST", "Bags", "Average kg / bag", "Paddy input (kg)", "Moisture before (%)", "Moisture after (%)", "Remaining for milling (kg)", "Status"], fields: [], initial: [] },
  millingRuns: { label: "Milling runs", icon: "⚙", description: "Convert dryer Paddy into Rice and measured by-products.", columns: ["Milling run", "Date", "Dryer batch", "Paddy type", "Mill", "Paddy input (kg)", "Rice (kg)", "Broken Rice (kg)", "Rejection Rice (kg)", "Nakku (kg)", "Bran (kg)", "Silky Bran (kg)", "Husk (kg)", "Total output (kg)", "Recovery (%)", "Variance (kg)", "Status"], fields: [], initial: [] },
  stores: { label: "Stores", icon: "▤", description: "Dedicated control of spares, consumables, packaging, receipts and issues to staff or departments.", columns: ["SKU", "Product", "Category", "Description / specifications", "Warehouse balances", "Available balance", "Unit", "Minimum level", "Status"], fields: [], initial: [["SKU-0001", "Paddy — Grade A", "Raw material", "", "Main warehouse", "42500", "kg", "10000", "In stock"], ["SKU-0002", "Raw rice — Grade A", "Finished goods", "", "Finished goods", "18240", "kg", "5000", "In stock"], ["SKU-0003", "HDPE bags — 50 kg", "Packaging", "50 kg capacity", "Packaging store", "1240", "pcs", "2000", "Low stock"], ["SKU-0004", "Broken rice", "By-product", "", "Finished goods", "6800", "kg", "1500", "In stock"]] },
  inventory: { label: "Inventory", icon: "▤", description: "Manage business-product stock for paddy, rice, finished goods and by-products, separate from Stores.", columns: ["SKU", "Product", "Category", "Description / specifications", "Warehouse balances", "Available balance", "Unit", "Minimum level", "Status"], fields: [], initial: [] },
  inventoryPurchases: { label: "Inventory Purchases", icon: "⇩", description: "Purchase receipts and supplier prices for paddy, rice and other business inventory.", columns: ["Purchase ID", "Date", "Time", "SKU", "Product", "Category", "Vendor", "Vendor invoice", "Quantity", "Unit", "Unit price", "Tax", "Total", "Warehouse", "Payment status", "Recorded by"], fields: [], initial: [] },
  storesPurchases: { label: "Stores Purchases", icon: "⇩", description: "Vendor invoices, prices and receipts for Stores spares, consumables and packaging.", columns: ["Purchase ID", "Date", "Time", "SKU", "Product", "Category", "Vendor", "Vendor invoice", "Quantity", "Unit", "Unit price", "Tax", "Total", "Warehouse", "Payment status", "Recorded by"], fields: [], initial: [] },
  purchases: { label: "Purchases", icon: "⇩", description: "Manage supplier bills, Paddy weighment receipts and payments.", columns: ["Bill no.", "Supplier", "Date", "Amount", "Due date", "Paddy (Raw Material)", "No. of Bags", "Weight unloaded (kg)", "Average weight / bag (kg)", "RST / weighment slip no.", "Warehouse", "Status"], fields: ["Bill number", "Supplier", "Date", "Amount", "Due date", "Paddy (Raw Material)", "No. of Bags", "Weight unloaded (kg)", "Average weight / bag (kg)", "RST / weighment slip no.", "Warehouse", "Status"], initial: [["PUR-1092", "Kisan Agro Traders", "31 Oct 2026", "₹ 2,45,000", "07 Nov 2026", "Pending"], ["PUR-1091", "Shree Ganesh Farms", "30 Oct 2026", "₹ 1,82,500", "Paid", "Paid"], ["PUR-1090", "Bharat Packaging Co.", "28 Oct 2026", "₹ 48,000", "04 Nov 2026", "Pending"]] },
  purchaseOrders: { label: "Purchase Orders", icon: "▧", description: "Create and track purchase orders from suppliers.", columns: ["PO number", "Supplier", "Order date", "Items", "Total", "Status"], fields: ["PO number", "Supplier", "Order date", "Items", "Total amount", "Status"], initial: [["PO-2026-084", "Kisan Agro Traders", "31 Oct 2026", "Paddy — Grade A", "₹ 3,20,000", "Processing"], ["PO-2026-083", "Bharat Packaging Co.", "29 Oct 2026", "HDPE bags — 50 kg", "₹ 76,000", "In transit"], ["PO-2026-082", "Shree Ganesh Farms", "27 Oct 2026", "Paddy — Grade A", "₹ 2,10,000", "Completed"]] },
  sales: { label: "Sales", icon: "⇧", description: "Record product sales and collections; linked invoices reduce inventory and post stock issues.", columns: ["Invoice no.", "Customer", "Date", "Product", "Quantity sold (kg)", "Warehouse", "Amount", "Due date", "Status"], fields: ["Invoice number", "Customer", "Date", "Product", "Quantity sold (kg)", "Warehouse", "Amount", "Due date", "Status"], initial: [["INV-2478", "Narmada Foods Pvt. Ltd.", "31 Oct 2026", "—", "—", "—", "₹ 4,25,000", "07 Nov 2026", "Pending"], ["INV-2477", "Rajasthan Grain House", "30 Oct 2026", "—", "—", "—", "₹ 2,80,000", "Paid", "Paid"], ["INV-2476", "Metro Wholesale Market", "28 Oct 2026", "—", "—", "—", "₹ 1,65,000", "04 Nov 2026", "Pending"]] },
  salesOrders: { label: "Sales Orders", icon: "▤", description: "Manage customer orders from confirmation to dispatch.", columns: ["Order no.", "Customer", "Order date", "Product", "Total", "Status"], fields: ["Order number", "Customer", "Order date", "Product", "Total amount", "Status"], initial: [["SO-2026-132", "Narmada Foods Pvt. Ltd.", "31 Oct 2026", "Grade A Raw Rice · 5,000 kg", "₹ 4,25,000", "Processing"], ["SO-2026-131", "Rajasthan Grain House", "30 Oct 2026", "Sona Masoori · 3,200 kg", "₹ 2,80,000", "In transit"], ["SO-2026-130", "Metro Wholesale Market", "29 Oct 2026", "Broken Rice · 2,500 kg", "₹ 1,65,000", "Completed"]] },
  brokerage: { label: "Brokerage & Commission", icon: "％", description: "Record broker commissions and sales-linked brokerage.", columns: ["Reference", "Broker", "Transaction", "Rate", "Commission", "Status"], fields: ["Reference", "Broker", "Transaction", "Rate", "Commission amount", "Status"], initial: [["BRK-2026-041", "Amit Trading Agency", "INV-2478", "1.5%", "₹ 6,375", "Pending"], ["BRK-2026-040", "Ravi Commission House", "INV-2477", "1.0%", "₹ 2,800", "Paid"], ["BRK-2026-039", "Amit Trading Agency", "INV-2476", "1.5%", "₹ 2,475", "Pending"]] },
  stockMovement: { label: "Stores Movement Ledger", icon: "⇄", description: "Audit store receipts, issues, transfers and adjustments, including issue recipients.", columns: ["Movement ID", "Date", "Time", "SKU", "Item", "Movement type", "Quantity", "From warehouse", "To warehouse", "Balance after", "Reference", "Notes", "Issued to / department", "Purpose / requisition", "Recorded by"], fields: [], initial: [] },
  inventoryMovement: { label: "Inventory Movement", icon: "⇄", description: "Audit receipts, issues, transfers and adjustments of paddy, rice and by-products.", columns: ["Movement ID", "Date", "Time", "SKU", "Item", "Movement type", "Quantity", "From warehouse", "To warehouse", "Balance after", "Reference", "Notes", "Issued to / department", "Purpose / requisition", "Recorded by"], fields: [], initial: [] },
  accounting: { label: "Accounting", icon: "₹", description: "Review cash flow, income, expenses and ledger activity.", columns: ["Entry ID", "Description", "Account", "Date", "Amount", "Type"], fields: ["Entry ID", "Description", "Account", "Date", "Amount", "Entry type"], initial: [["ACC-5531", "Paddy procurement — Kisan Agro Traders", "Raw material", "31 Oct 2026", "₹ 2,45,000", "Expense"], ["ACC-5530", "Rice sale — Rajasthan Grain House", "Sales revenue", "30 Oct 2026", "₹ 2,80,000", "Income"], ["ACC-5529", "Electricity bill — October", "Utilities", "29 Oct 2026", "₹ 38,400", "Expense"]] },
  employees: { label: "Employees", icon: "♙", description: "Manage employee records, roles and department assignments.", columns: ["Employee ID", "Name", "Department", "Phone", "Join date", "Status"], fields: ["Employee ID", "Full name", "Department", "Phone", "Join date", "Status"], initial: [["EMP-001", "Ramesh Patel", "Production", "+91 98765 43210", "12 Mar 2023", "Active"], ["EMP-002", "Sunita Verma", "Accounts", "+91 98765 43211", "04 Jul 2022", "Active"], ["EMP-003", "Mohan Yadav", "Stores", "+91 98765 43212", "19 Jan 2024", "Active"]] }
};

const icons = { production: "⚙", inventory: "▤", stores: "▤", purchases: "⇩", inventoryPurchases: "⇩", storesPurchases: "⇩", sales: "⇧", purchaseOrders: "▧", salesOrders: "▤", brokerage: "％", stockMovement: "⇄", inventoryMovement: "⇄", accounting: "₹", employees: "♙", dailyReview: "▦", editLog: "◷" };
let currentUser = null;
let currentModule = "dashboard";
let toastTimer;
let inventoryFilters = { search: "", category: "", status: "", warehouse: "", vendor: "", movementType: "", fromDate: "", toDate: "" };
let moduleFilters = {};
let dailyReviewFilters = { date: "", departmentId: "all" };

const businessProductCategories = ["Raw material", "Finished goods", "By-product"];
const storesProductCategories = ["Packaging", "Spare parts", "Consumables"];

(function installBackendStorage() {
  const cache = new Map();

  const syncFromServer = async () => {
    try {
      const response = await fetch("/api/storage");
      if (!response.ok) return;
      const payload = await response.json();
      cache.clear();
      Object.entries(payload || {}).forEach(([key, value]) => cache.set(String(key), String(value)));
    } catch (error) {
      console.warn("Could not sync local storage with backend.", error);
    }
  };

  const localStorageAdapter = {
    get length() {
      return cache.size;
    },
    getItem(key) {
      const actualKey = String(key);
      return cache.has(actualKey) ? cache.get(actualKey) : null;
    },
    setItem(key, value) {
      const actualKey = String(key);
      const actualValue = String(value);
      cache.set(actualKey, actualValue);
      if (typeof fetch === "function") {
        fetch("/api/storage", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key: actualKey, value: actualValue })
        }).catch(() => {});
      }
      return actualValue;
    },
    removeItem(key) {
      const actualKey = String(key);
      if (!cache.has(actualKey)) return;
      cache.delete(actualKey);
      if (typeof fetch === "function") {
        fetch("/api/storage", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key: actualKey })
        }).catch(() => {});
      }
    },
    clear() {
      cache.clear();
      if (typeof fetch === "function") {
        fetch("/api/storage", { method: "DELETE" }).catch(() => {});
      }
    },
    key(index) {
      return Array.from(cache.keys())[Number(index)] ?? null;
    }
  };

  Object.defineProperty(window, "localStorage", {
    value: localStorageAdapter,
    configurable: true,
    writable: true
  });

  syncFromServer();
})();

function readStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch (error) {
    console.error(`Unable to read ${key} from local storage.`, error);
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error(`Unable to save ${key} to local storage.`, error);
    showToast("Unable to save your changes in this browser.");
    return false;
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function parseQuantity(value) {
  const parsed = Number.parseFloat(String(value).replace(/,/g, "").match(/-?\d+(?:\.\d+)?/)?.[0] ?? "");
  return Number.isFinite(parsed) ? parsed : 0;
}

function getInventoryItems() {
  const saved = readStorage("agrimill-inventory-items", null);
  if (Array.isArray(saved)) return saved;
  const legacyRows = readStorage("agrimill-stores", moduleInfo.stores.initial);
  const items = legacyRows.map((row, index) => {
    const isLegacyShape = row.length <= 6;
    const previousInventoryShape = row.length === 8;
    const sku = isLegacyShape ? `SKU-${String(index + 1).padStart(4, "0")}` : row[0];
    const name = isLegacyShape ? row[0] : row[1];
    const category = isLegacyShape ? row[1] : row[2];
    const warehouse = isLegacyShape ? row[4] : previousInventoryShape ? row[3] : row[4];
    const balance = parseQuantity(isLegacyShape ? row[2] : previousInventoryShape ? row[4] : row[5]);
    const unitMatch = String(isLegacyShape ? row[2] : previousInventoryShape ? row[5] : row[6]).match(/[a-zA-Z]+/);
    const unit = isLegacyShape ? unitMatch?.[0] ?? "pcs" : previousInventoryShape ? row[5] : row[6];
    const minLevel = parseQuantity(isLegacyShape ? row[3] : previousInventoryShape ? row[6] : row[7]);
    const description = isLegacyShape || previousInventoryShape ? "" : row[3] || "";
    return { sku, name, category, description, unit, minLevel, balances: { [warehouse || "Main warehouse"]: balance } };
  });
  saveStorage("agrimill-inventory-items", items);
  return items;
}

function inventoryBalance(item) {
  return Object.values(item.balances).reduce((total, balance) => total + Number(balance || 0), 0);
}

function inventoryStatus(item) {
  const balance = inventoryBalance(item);
  if (balance <= 0) return "Out of stock";
  if (balance <= Number(item.minLevel || 0)) return "Low stock";
  return "In stock";
}

function getProductDomain(item) {
  const category = String(item.category || "").trim().toLowerCase();
  if (storesProductCategories.some(value => value.toLowerCase() === category)) return "stores";
  if (businessProductCategories.some(value => value.toLowerCase() === category)
    || ["paddy", "rice", "by-product", "byproduct"].includes(category)
    || /\b(paddy|rice|byproducts?)\b/i.test(item.name || "")) return "inventory";
  return "stores";
}

function canManageStock(domain) {
  return currentUser.departmentId === "admin" || currentUser.departmentId === domain;
}

function getItemsForModule(moduleId) {
  const domain = moduleId === "stores" || moduleId === "stockMovement" || moduleId === "storesPurchases" ? "stores" : "inventory";
  return getInventoryItems().map((item, index) => ({ item, index })).filter(({ item }) => getProductDomain(item) === domain);
}

function getMovementModule(moduleId) {
  return moduleId === "stores" || moduleId === "stockMovement" || moduleId === "storesPurchases"
    ? "stockMovement"
    : "inventoryMovement";
}

function getPurchaseModule(moduleId) {
  return moduleId === "stores" || moduleId === "stockMovement" || moduleId === "storesPurchases"
    ? "storesPurchases"
    : "inventoryPurchases";
}

function getPurchasesForModule(moduleId) {
  const rows = getInventoryPurchaseRows();
  const domain = getPurchaseModule(moduleId) === "storesPurchases" ? "stores" : "inventory";
  return rows.map((record, index) => ({ record, index }))
    .filter(({ record }) => {
      const item = getInventoryItems().find(candidate => candidate.sku === record[3]);
      return item && getProductDomain(item) === domain;
    });
}

function getPaddyPurchases() {
  return getRecords("purchases").filter(record =>
    record[5] && record[9] && Number.isInteger(parseQuantity(record[6])) && parseQuantity(record[6]) > 0
    && parseQuantity(record[7]) > 0 && parseQuantity(record[8]) > 0);
}

function migrateLegacyPaddyPurchases() {
  const rawPurchases = readStorage("agrimill-purchases", moduleInfo.purchases.initial);
  const migratedSlips = readStorage("agrimill-paddy-purchase-migrations", []);
  const migrationKeys = Array.isArray(migratedSlips) ? migratedSlips : [];
  const pending = rawPurchases.filter(record => record.length === 11 && record[5] && record[9]
    && !migrationKeys.includes(record[9]) && Number.isInteger(parseQuantity(record[6]))
    && parseQuantity(record[6]) > 0 && parseQuantity(record[7]) > 0 && parseQuantity(record[8]) > 0);
  if (!pending.length) return true;
  const snapshot = captureStorage(["agrimill-inventory-items", "agrimill-stockMovement", "agrimill-inventory-purchases", "agrimill-paddy-purchase-migrations"]);
  const inventoryPurchases = getInventoryPurchaseRows();
  for (const purchase of pending) {
    const hasExistingPurchase = inventoryPurchases.some(row =>
      String(row[0]).toLowerCase() === String(purchase[9]).toLowerCase()
      || String(row[7]).toLowerCase() === String(purchase[9]).toLowerCase());
    const existingReceipt = getMovementRows().some(row => row[10] === purchase[9] && row[5] === "Receipt");
    const item = ensureInventoryProduct(purchase[5], "Raw material");
    if (!item) {
      restoreStorage(snapshot, "legacy Paddy purchase migration");
      return false;
    }
    if (!hasExistingPurchase && !existingReceipt) {
      const parsedDate = new Date(purchase[2]);
      const movementDate = Number.isNaN(parsedDate.getTime()) ? formatLocalDate(new Date()) : formatLocalDate(parsedDate);
      const error = recordStockMovement(item.sku, "Receipt", parseQuantity(purchase[7]), {
        toWarehouse: "Main warehouse",
        reference: purchase[9],
        notes: `Imported Paddy purchase · ${purchase[1]} · ${purchase[0]}`,
        date: movementDate,
        domain: "inventory"
      });
      if (error) {
        restoreStorage(snapshot, "legacy Paddy purchase migration");
        showToast(`Could not bring legacy RST ${purchase[9]} into inventory: ${error}`);
        return false;
      }
      const parsedAmount = parseQuantity(purchase[3]);
      const timestamp = new Date();
      inventoryPurchases.unshift([
        purchase[9],
        purchase[2],
        timestamp.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
        item.sku,
        item.name,
        item.category,
        purchase[1],
        purchase[0],
        formatQuantity(parseQuantity(purchase[7])),
        "kg",
        (parsedAmount / parseQuantity(purchase[7])).toFixed(2),
        "0% (₹ 0.00)",
        parsedAmount.toFixed(2),
        "Main warehouse",
        purchase[10] === "Paid" ? "Paid" : "Unpaid",
        "System migration"
      ]);
    }
    migrationKeys.push(purchase[9]);
  }
  if (!saveStorage("agrimill-inventory-purchases", inventoryPurchases)
    || !saveStorage("agrimill-paddy-purchase-migrations", migrationKeys)) {
    restoreStorage(snapshot, "legacy Paddy purchase migration");
    return false;
  }
  return true;
}

function getProductionRows(moduleId) {
  const key = `agrimill-${moduleId}`;
  const rows = readStorage(key, moduleInfo[moduleId].initial);
  return Array.isArray(rows) ? rows : moduleInfo[moduleId].initial;
}

function getMillingRuns() {
  return getProductionRows("millingRuns");
}

function getRemainingDryerWeight(batch) {
  const consumed = getMillingRuns()
    .filter(run => run[2] === batch[0])
    .reduce((total, run) => total + parseQuantity(run[5]), 0);
  return Math.max(0, parseQuantity(batch[7]) - consumed);
}

function getRemainingPurchaseBags(purchase) {
  const driedBags = getProductionRows("dryerBatches")
    .filter(batch => batch[4] === purchase[9])
    .reduce((total, batch) => total + parseQuantity(batch[5]), 0);
  return Math.max(0, parseQuantity(purchase[6]) - driedBags);
}

function captureStorage(keys) {
  return Object.fromEntries(keys.map(key => [key, localStorage.getItem(key)]));
}

function restoreStorage(snapshot, context) {
  try {
    Object.entries(snapshot).forEach(([key, value]) => {
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    });
  } catch (error) {
    console.error(`Could not restore ${context} after a failed save.`, error);
    showToast(`${context} could not be rolled back completely. Review stock and movement records.`);
  }
}

function ensureInventoryProduct(name, category) {
  const items = getInventoryItems();
  const existing = items.find(item => item.name.toLowerCase() === name.toLowerCase());
  if (existing) return existing;
  const nextSku = items.reduce((max, item) => {
    const match = String(item.sku).match(/^SKU-(\d+)$/);
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0) + 1;
  const item = {
    sku: `SKU-${String(nextSku).padStart(4, "0")}`,
    name,
    category,
    description: "",
    unit: "kg",
    minLevel: 0,
    balances: { "Finished goods": 0 }
  };
  items.unshift(item);
  if (!saveStorage("agrimill-inventory-items", items)) return null;
  return item;
}

function formatQuantity(quantity) {
  return Number(quantity).toLocaleString("en-IN", { maximumFractionDigits: 3 });
}

function formatLocalDate(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function getInventoryRows() {
  return getInventoryItems().map(item => {
    const balances = Object.entries(item.balances).filter(([, quantity]) => Number(quantity) !== 0)
      .map(([warehouse, quantity]) => `${warehouse}: ${formatQuantity(quantity)}`).join("; ") || "No stock";
    return [item.sku, item.name, item.category, item.description || "", balances, formatQuantity(inventoryBalance(item)), item.unit, formatQuantity(item.minLevel), inventoryStatus(item)];
  });
}

function getMovementRows() {
  const saved = readStorage("agrimill-stockMovement", moduleInfo.stockMovement.initial);
  if (!Array.isArray(saved)) return moduleInfo.stockMovement.initial;
  if (!saved.length) {
    const now = new Date();
    const date = formatLocalDate(now);
    const time = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const openingEntries = getInventoryItems().flatMap(item => Object.entries(item.balances)
      .filter(([, quantity]) => Number(quantity) > 0)
      .map(([warehouse, quantity]) => [
        `MOV-${now.getFullYear()}-${String(saved.length + 1).padStart(5, "0")}`,
        date,
        time,
        item.sku,
        item.name,
        "Opening balance",
        `+${formatQuantity(quantity)} ${item.unit}`,
        "—",
        warehouse,
        `${formatQuantity(inventoryBalance(item))} ${item.unit}`,
        "OPENING",
        "Opening stock at inventory setup",
        "",
        "",
        "System"
      ]));
    if (openingEntries.length) {
      openingEntries.forEach((entry, index) => { entry[0] = `MOV-${now.getFullYear()}-${String(index + 1).padStart(5, "0")}`; });
      saveStorage("agrimill-stockMovement", openingEntries);
      return openingEntries;
    }
    return saved;
  }
  if (!saved.some(record => record.length < moduleInfo.stockMovement.columns.length)) return saved;
  const items = getInventoryItems();
  const migrated = saved.map(record => {
    if (record.length >= moduleInfo.stockMovement.columns.length) return record;
    if (record.length === 13) return [...record.slice(0, 12), "", "", record[12]];
    const itemName = record[1] || "";
    const item = items.find(candidate => candidate.name === itemName);
    const parsedDate = new Date(record[4] || "");
    const date = Number.isNaN(parsedDate.getTime()) ? String(record[4] || "") : parsedDate.toISOString().slice(0, 10);
    const movementType = ({ Received: "Receipt", Dispatched: "Issue", Transferred: "Transfer" })[record[2]] || record[2] || "Historical";
    return [record[0], date, "", item?.sku || "", itemName, movementType, record[3] || "", "", "", "", record[5] || "", "Imported historical movement", "", "", "Previous entry"];
  });
  saveStorage("agrimill-stockMovement", migrated);
  return migrated;
}

function getInventoryPurchaseRows() {
  const rows = readStorage("agrimill-inventory-purchases", moduleInfo.inventoryPurchases.initial);
  return Array.isArray(rows) ? rows : moduleInfo.inventoryPurchases.initial;
}

function getRecords(moduleId) {
  if (moduleId === "dryerBatches") return getProductionRows(moduleId).map(batch => [
    ...batch.slice(0, 10),
    `${formatQuantity(getRemainingDryerWeight(batch))} kg`,
    batch[11]
  ]);
  if (moduleId === "millingRuns") return getProductionRows(moduleId);
  if (moduleId === "stores" || moduleId === "inventory") {
    const domain = moduleId;
    return getInventoryRows().filter((_, index) => getProductDomain(getInventoryItems()[index]) === domain);
  }
  if (moduleId === "stockMovement" || moduleId === "inventoryMovement") {
    const domain = moduleId === "stockMovement" ? "stores" : "inventory";
    return getMovementRows().filter(record => {
      const item = getInventoryItems().find(candidate => candidate.sku === record[3]);
      return item && getProductDomain(item) === domain;
    });
  }
  if (moduleId === "inventoryPurchases" || moduleId === "storesPurchases") return getPurchasesForModule(moduleId).map(entry => entry.record);
  const records = readStorage(`agrimill-${moduleId}`, moduleInfo[moduleId].initial);
  if (moduleId === "employees") return records.map(record => record.map((value, index) => {
    if (index === 2 && value === "Stores & Inventory") return "Stores";
    return index === 5 && value === "In stock" ? "Active" : value;
  }));
  if (moduleId === "purchases") return records.map(record => {
    if (record.length === moduleInfo.purchases.columns.length) return record;
    if (record.length === 11) return [...record.slice(0, 10), "Main warehouse", record[10] || ""];
    return [...record.slice(0, 5), "", "", "", "", "", "", record[5] || ""];
  });
  if (moduleId === "sales") return records.map(record => record.length === moduleInfo.sales.columns.length
    ? record
    : [record[0], record[1], record[2], "—", "—", "—", record[3], record[4], record[5]]);
  if (moduleId !== "production") return records;
  return records.map(record => {
    if (record.length === moduleInfo.production.columns.length) return record;
    if (record.length === 12) return [record[0], record[1], record[2], record[3], record[4], record[8], record[9], record[10], record[11]];
    return [record[0], "—", "—", "—", record[1], record[2], record[3], record[4], record[5]];
  });
}

function statusClass(value) {
  const status = String(value).toLowerCase().replace(/\s+/g, "-");
  if (["completed", "paid", "in-stock", "income", "received", "receipt", "opening-balance"].includes(status)) return "completed";
  if (["processing", "pending", "expense", "transferred", "transfer"].includes(status)) return "processing";
  if (["low-stock", "out-of-stock", "overdue"].includes(status)) return "low-stock";
  if (["in-transit", "dispatched", "issue"].includes(status)) return "in-transit";
  return "pending";
}

function renderLogin() {
  document.getElementById("app").innerHTML = `
    <main class="login-shell">
      <section class="login-art">
        <div class="brand"><div class="brand-mark">❋</div><div><div class="brand-name">RiceMill ERP Solutions</div><div class="brand-caption">Rice mill management</div></div></div>
        <div class="login-hero"><div class="eyebrow">From paddy to prosperity</div><h1>Your mill.<br>In perfect sync.</h1><p>One clear view of production, inventory, orders and accounts — so you can focus on growing your business.</p></div>
        <div class="grain-art" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <div class="login-foot">A simpler way to run your rice mill.</div>
      </section>
      <section class="login-panel">
        <form class="login-card" id="login-form">
          <div class="eyebrow" style="color:#56805d">Welcome to RiceMill ERP Solutions</div><h2>Sign in</h2><p class="login-intro">Access your mill's operations workspace.</p>
          <div class="field"><label for="email">Work email</label><input id="email" type="email" placeholder="you@yourmill.com" autocomplete="username" required></div>
          <div class="field"><label for="password">Password</label><input id="password" type="password" placeholder="Enter your password" autocomplete="current-password" required></div>
          <div class="login-error" id="login-error" role="alert"></div>
          <button class="primary-btn login-submit" type="submit">Sign in to your mill <span aria-hidden="true">→</span></button>
          <details class="demo-note demo-accounts"><summary><strong>Demo logins</strong> · Show account credentials</summary><p>Use one account for each department:</p><ul>${demoAccounts.map(account => `<li><strong>${escapeHtml(departments[account.departmentId].label)}:</strong> <code>${escapeHtml(account.email)}</code> / <code>${escapeHtml(account.password)}</code></li>`).join("")}</ul><p>Demo accounts are for local testing only. Data and sign-in state stay in this browser; this is not production-secure authentication.</p></details>
        </form>
      </section>
    </main>`;
  document.getElementById("login-form").addEventListener("submit", event => {
    event.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const account = demoAccounts.find(candidate => candidate.email === email.toLowerCase() && candidate.password === password);
    if (!account) {
      document.getElementById("login-error").textContent = "Email or password is incorrect. Choose a demo account below and try again.";
      return;
    }
    currentUser = {
      accountId: account.email,
      email: account.email,
      departmentId: account.departmentId,
      name: account.name,
      role: departments[account.departmentId].label
    };
    if (!saveStorage("agrimill-user", currentUser)) return;
    renderApp();
  });
}

function renderSidebar() {
  const nav = departments[currentUser.departmentId].modules;
  const groups = [
    { label: "Overview", modules: ["dashboard"] },
    { label: "Administration", modules: ["dailyReview", "editLog"] },
    { label: "Mill operations · inventory", modules: ["production", "inventory", "inventoryPurchases", "inventoryMovement"] },
    { label: "Stores · maintenance", modules: ["stores", "storesPurchases", "stockMovement"] },
    { label: "Commercial", modules: ["purchases", "purchaseOrders", "sales", "salesOrders", "brokerage"] },
    { label: "Finance & people", modules: ["accounting", "employees"] }
  ].map(group => ({ ...group, modules: group.modules.filter(id => nav.includes(id)) })).filter(group => group.modules.length);
  return `<aside class="sidebar" id="sidebar">
    <div class="brand"><div class="brand-mark">❋</div><div><div class="brand-name">RiceMill ERP Solutions</div><div class="brand-caption">Integrated mill operations</div></div></div>
    <div class="workspace-switch"><span class="workspace-switch-icon">R</span><span><strong>RiceMill ERP Solutions</strong><small>${escapeHtml(currentUser.role)} workspace</small></span><span class="workspace-chevron">⌄</span></div>
    <nav class="nav-list" aria-label="Main navigation">${groups.map(group => `<div class="nav-group"><div class="nav-caption">${group.label}</div>${group.modules.map(id => `<button class="nav-item ${currentModule === id ? "active" : ""}" data-module="${id}"><span class="nav-icon">${moduleInfo[id].icon}</span>${moduleInfo[id].label}${id === "stores" || id === "inventory" ? (() => { const items = getItemsForModule(id).map(entry => entry.item); const alerts = items.filter(item => inventoryStatus(item) !== "In stock").length; return alerts ? `<span class="nav-indicator" title="Stock needs attention">${alerts}</span>` : ""; })() : ""}</button>`).join("")}</div>`).join("")}</nav>
    <div class="sidebar-bottom"><div class="sidebar-status"><span class="live-dot"></span><span><strong>System status</strong><small>Workspace is ready</small></span></div><div class="profile"><div class="avatar">${escapeHtml(currentUser.name.split(" ").map(part => part[0]).slice(0, 2).join(""))}</div><div class="profile-details"><div class="profile-name">${escapeHtml(currentUser.name)}</div><div class="profile-role">${escapeHtml(currentUser.role)}</div></div></div><button class="logout-btn" id="logout">↪ &nbsp; Sign out</button></div>
  </aside>`;
}

function renderTopbar() {
  return `<header class="topbar"><div class="topbar-left"><button class="mobile-menu" id="mobile-menu" aria-label="Open navigation">☰</button><div class="breadcrumb">Workspace <span>/</span> <strong>${moduleInfo[currentModule].label}</strong></div></div><div class="topbar-right"><span class="system-status"><span class="live-dot"></span>Workspace active</span><span class="topbar-divider"></span><span class="date-label">${new Date().toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" })}</span><span class="topbar-user">${escapeHtml(currentUser.name.split(" ").map(part => part[0]).slice(0, 2).join("").toUpperCase())}</span></div></header>`;
}

function getOperationalModules() {
  return departments[currentUser.departmentId].modules.filter(id => !["dashboard", "dailyReview", "editLog"].includes(id));
}

function getDashboardMetrics() {
  const available = getOperationalModules();
  const allRecords = available.flatMap(id => id === "production"
    ? ["production", "dryerBatches", "millingRuns"].flatMap(moduleId => getRecords(moduleId))
    : getRecords(id));
  const isOpen = record => ["pending", "processing", "in transit", "unpaid", "partially paid"].includes(String(record[record.length - 1]).toLowerCase());
  const openCount = allRecords.filter(isOpen).length;
  const stockDomains = [
    ...(available.includes("stores") ? getItemsForModule("stores") : []),
    ...(available.includes("inventory") ? getItemsForModule("inventory") : [])
  ];
  const lowStock = stockDomains.filter(({ item }) => inventoryStatus(item) !== "In stock").length;
  const production = getRecords("millingRuns");
  const dryerBatches = getRecords("dryerBatches");
  const activeBatches = dryerBatches.filter(batch => getRemainingDryerWeight(batch) > 0).length;
  const orders = getRecords("salesOrders");
  const purchaseOrders = getRecords("purchaseOrders");
  const employeeCount = getRecords("employees").length;
  const employees = getRecords("employees");
  const activeEmployeeCount = employees.filter(record => String(record[5]).toLowerCase() === "active").length;
  const employeeContactCount = employees.filter(record => String(record[3] || "").trim()).length;
  const presets = {
    admin: [
      ["Operational records", String(allRecords.length), "Across your authorized departments", "▤"],
      ["Open actions", String(openCount), "Orders and transactions in progress", "◷"],
      ["Stock alerts", String(lowStock), "Products at or below minimum", "!"],
      ["Active batches", String(activeBatches), `${production.length} production batches recorded`, "⚙"]
    ],
    production: [
      ["Dryer batches", String(dryerBatches.length), "Paddy dryer intakes recorded", "♨"],
      ["Paddy ready for milling", String(activeBatches), "Dryer batches with remaining stock", "◷"],
      ["Stock alerts", String(lowStock), "Items to coordinate with stores", "!"],
      ["Milling runs", String(production.length), "Rice and by-product conversions", "⚙"]
    ],
    inventory: [
      ["Business products", String(getItemsForModule("inventory").length), "Paddy, rice, finished goods and by-products", "▤"],
      ["Reorder alerts", String(getItemsForModule("inventory").filter(({ item }) => inventoryStatus(item) !== "In stock").length), "Business products at or below minimum", "!"],
      ["Stock movements", String(getRecords("inventoryMovement").length), "Inventory receipts, issues and adjustments", "⇄"],
      ["Purchase entries", String(getRecords("inventoryPurchases").length), "Business product receipts recorded", "⇩"]
    ],
    stores: [
      ["Store items", String(getItemsForModule("stores").length), "Spares, consumables and packaging", "▤"],
      ["Reorder alerts", String(getItemsForModule("stores").filter(({ item }) => inventoryStatus(item) !== "In stock").length), "Store products at or below reorder level", "!"],
      ["Stock movements", String(getRecords("stockMovement").length), "Store receipts, issues, transfers, adjustments", "⇄"],
      ["Vendor purchases", String(getRecords("storesPurchases").length), "Stores purchases recorded", "⇩"]
    ],
    purchase: [
      ["Purchase orders", String(purchaseOrders.length), "Supplier orders raised", "▧"],
      ["Orders in progress", String(purchaseOrders.filter(isOpen).length), "Awaiting receipt or completion", "◷"],
      ["Supplier bills", String(getRecords("purchases").length), "Purchases registered", "⇩"],
      ["Stock alerts", String(lowStock), "Reorder requests to review", "!"]
    ],
    sales: [
      ["Sales orders", String(orders.length), "Customer orders received", "▤"],
      ["Orders in progress", String(orders.filter(isOpen).length), "Pending fulfilment or dispatch", "◷"],
      ["Customer invoices", String(getRecords("sales").length), "Sales registered", "⇧"],
      ["Brokerage pending", String(getRecords("brokerage").filter(row => String(row[row.length - 1]).toLowerCase() === "pending").length), "Commission settlements due", "％"]
    ],
    accounts: [
      ["Supplier bills", String(getRecords("purchases").length), "Bills in the purchase register", "⇩"],
      ["Customer invoices", String(getRecords("sales").length), "Invoices in the sales register", "⇧"],
      ["Open transactions", String(openCount), "Pending payments and settlements", "◷"],
      ["Ledger entries", String(getRecords("accounting").length), "Accounting records", "₹"]
    ],
    hr: [
      ["Team members", String(employeeCount), "Employee records maintained", "♙"],
      ["Departments", String(new Set(getRecords("employees").map(row => row[2])).size), "Represented in employee records", "▤"],
      ["Active employees", String(activeEmployeeCount), "Employees marked active", "✓"],
      ["Contact records", String(employeeContactCount), "Employees with contact details", "☎"]
    ]
  };
  return presets[currentUser.departmentId] || presets.admin;
}

function getDashboardFocus() {
  const focus = {
    admin: { title: "Management overview", text: "A cross-functional view of today's mill operations." },
    production: { title: "Production control room", text: "Monitor batches, output, and coordinate business-product stock with Inventory." },
    inventory: { title: "Business inventory control", text: "Track paddy, rice, finished goods and by-products independently from store supplies." },
    stores: { title: "Stores control centre", text: "Manage spare parts, consumables, purchases and detailed issues to employees or departments." },
    purchase: { title: "Procurement workspace", text: "Coordinate supplier orders, incoming goods, and purchase records." },
    sales: { title: "Sales & dispatch", text: "Follow customer orders through fulfilment and collection." },
    accounts: { title: "Finance workspace", text: "Review accounting entries, supplier bills, and customer invoices." },
    hr: { title: "People & workforce", text: "Keep employee information and department records organized." }
  };
  return focus[currentUser.departmentId] || focus.admin;
}

function renderDashboard() {
  const metrics = getDashboardMetrics();
  const focus = getDashboardFocus();
  const shortcuts = getOperationalModules();
  const activity = getRecentActivity(shortcuts);
  return `<div class="dashboard-welcome"><div><div class="eyebrow dashboard-eyebrow">${escapeHtml(currentUser.role)} workspace</div><h1>Good ${new Date().getHours() < 12 ? "morning" : new Date().getHours() < 17 ? "afternoon" : "evening"}, ${escapeHtml(currentUser.name.split(" ")[0])}</h1><p>${escapeHtml(focus.text)}</p></div><div class="dashboard-tools"><div class="dashboard-date"><span class="dashboard-date-icon">◷</span><span><small>Today</small><strong>${new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</strong></span></div><div class="dashboard-report-actions"><button class="primary-btn" id="generate-report">▤ &nbsp; Preview report</button></div></div></div>
    <section class="dashboard-focus"><div class="dashboard-focus-icon">${moduleInfo[shortcuts[0]]?.icon || "⌂"}</div><div><span class="dashboard-focus-label">DEPARTMENT OVERVIEW</span><h2>${escapeHtml(focus.title)}</h2><p>Key indicators and quick access for your team.</p></div><div class="dashboard-focus-dept">${escapeHtml(currentUser.role)}</div></section>
    <section class="metrics dashboard-metrics">${metrics.map(([label, value, note, icon]) => `<article class="metric-card dashboard-metric"><div class="metric-top">${escapeHtml(label)}<span class="metric-icon">${icon}</span></div><div class="metric-number">${escapeHtml(value)}</div><div class="metric-foot">${escapeHtml(note)}</div></article>`).join("")}</section>
    <section class="dashboard-section"><div class="section-heading"><div><h2>Department workspace</h2><p>Go directly to the tools your team uses.</p></div><span class="section-count">${shortcuts.length} modules</span></div><div class="module-shortcuts">${shortcuts.map((id, index) => `<button class="module-shortcut" data-module="${id}"><span class="shortcut-icon shortcut-tone-${index % 5}">${moduleInfo[id].icon}</span><span class="shortcut-copy"><strong>${moduleInfo[id].label}</strong><small>${moduleInfo[id].description}</small></span><span class="shortcut-arrow">→</span></button>`).join("")}</div></section>
    <section class="dashboard-bottom"><article class="panel action-panel"><div class="panel-heading"><div><h2>Needs attention</h2><p class="panel-subtitle">Items that may need follow-up.</p></div><span class="panel-heading-icon">◷</span></div>${renderAttentionList(shortcuts)}</article>
    <article class="panel activity-panel"><div class="panel-heading"><div><h2>Latest activity</h2><p class="panel-subtitle">Recent entries from your workspace.</p></div></div>${activity.length ? `<div class="activity-list">${activity.map(item => `<div class="activity-row"><span class="activity-marker">${moduleInfo[item.moduleId].icon}</span><div class="activity-text"><strong>${escapeHtml(item.title)}</strong><div>${escapeHtml(item.detail)}</div><div class="activity-time">${escapeHtml(item.date)} · ${moduleInfo[item.moduleId].label}</div></div></div>`).join("")}</div>` : `<div class="empty-state">New activity will appear here as your team records work.</div>`}</article></section>`;
}

function getRecentActivity(availableModules) {
  const entries = [];
  for (const moduleId of ["stockMovement", "inventoryMovement"]) {
    if (!availableModules.includes(moduleId)) continue;
    getRecords(moduleId).slice(0, 4).forEach(record => entries.push({
      moduleId,
      title: `${record[5]} · ${record[4]}`,
      detail: moduleId === "stockMovement" && record[5] === "Issue"
        ? `${record[6]} · To: ${record[12] || "—"} · Balance: ${record[9]}`
        : `${record[6]} · Balance after: ${record[9]}`,
      date: record[1]
    }));
  }
  for (const moduleId of ["inventoryPurchases", "storesPurchases"]) {
    if (!availableModules.includes(moduleId)) continue;
    getRecords(moduleId).slice(0, 4).forEach(record => entries.push({
      moduleId,
      title: `Purchase ${record[0]} · ${record[4]}`,
      detail: `${record[6]} · ₹ ${record[12]}`,
      date: record[1]
    }));
  }
  for (const moduleId of ["dryerBatches", "millingRuns", "purchaseOrders", "salesOrders", "sales", "purchases", "accounting", "employees"]) {
    if (!availableModules.includes(moduleId) && !(["dryerBatches", "millingRuns"].includes(moduleId) && availableModules.includes("production"))) continue;
    getRecords(moduleId).slice(0, 2).forEach(record => entries.push({
      moduleId,
      title: `${record[0]} · ${record[1]}`,
      detail: record[record.length - 1],
      date: record[1]
    }));
  }
  return entries.slice(0, 5);
}

function renderAttentionList(availableModules) {
  const alerts = [];
  for (const moduleId of ["stores", "inventory"]) {
    if (!availableModules.includes(moduleId)) continue;
    getItemsForModule(moduleId).map(entry => entry.item).filter(item => inventoryStatus(item) !== "In stock").forEach(item => alerts.push({
      moduleId,
      title: item.name,
      detail: `${inventoryStatus(item)} · ${formatQuantity(inventoryBalance(item))} ${item.unit} available; minimum ${formatQuantity(item.minLevel)}`
    }));
  }
  for (const moduleId of ["purchaseOrders", "salesOrders", "purchases", "sales", "brokerage", "inventoryPurchases", "storesPurchases"]) {
    if (!availableModules.includes(moduleId)) continue;
    getRecords(moduleId).filter(record => ["pending", "processing", "in transit", "unpaid", "partially paid"].includes(String(record[record.length - 1]).toLowerCase()))
      .forEach(record => alerts.push({ moduleId, title: `${record[0]} · ${record[1]}`, detail: `${record[record.length - 1]} · ${moduleInfo[moduleId].label}` }));
  }
  if (!alerts.length) return `<div class="empty-state">No open actions right now. New follow-ups will appear here.</div>`;
  return `<div class="attention-list">${alerts.slice(0, 6).map(alert => `<button class="attention-item" data-module="${alert.moduleId}"><span class="attention-dot"></span><span class="attention-copy"><strong>${escapeHtml(alert.title)}</strong><small>${escapeHtml(alert.detail)}</small></span><span class="shortcut-arrow">→</span></button>`).join("")}</div>`;
}

function renderTable(moduleId, records, includeActions = false, recordIndices = []) {
  const info = moduleInfo[moduleId];
  if (!records.length) return `<div class="empty-state">No records yet. Add your first ${escapeHtml(info.label.toLowerCase())} record to get started.</div>`;
  return `<div class="data-wrap"><table class="${includeActions ? "module-table" : ""}"><thead><tr>${info.columns.map(column => `<th>${escapeHtml(column)}</th>`).join("")}${includeActions ? "<th>Actions</th>" : ""}</tr></thead><tbody>${records.map((record, rowIndex) => {
    const recordIndex = recordIndices[rowIndex] ?? getRecords(moduleId).findIndex(candidate => JSON.stringify(candidate) === JSON.stringify(record));
    const cells = record.map((cell, index) => `<td>${index === record.length - 1 ? `<span class="status ${statusClass(cell)}">${escapeHtml(cell)}</span>` : index === 0 ? `<strong>${escapeHtml(cell)}</strong>` : escapeHtml(cell)}</td>`).join("");
    const actions = includeActions ? `<td><div class="row-actions"><button class="row-action-btn" data-record-action="preview" data-record-index="${recordIndex}">Preview</button></div></td>` : "";
    return `<tr>${cells}${actions}</tr>`;
  }).join("")}</tbody></table></div>`;
}

function filterInventoryData(moduleId = currentModule) {
  const search = inventoryFilters.search.toLowerCase();
  const domainItems = getItemsForModule(moduleId);
  const domain = getPurchaseModule(moduleId) === "storesPurchases" ? "stores" : "inventory";
  const items = domainItems
    .filter(({ item }) => {
      const text = [item.sku, item.name, item.category, item.unit, item.minLevel, inventoryStatus(item), ...Object.entries(item.balances).flat()].join(" ").toLowerCase();
      return (!search || text.includes(search))
        && (!inventoryFilters.category || item.category === inventoryFilters.category)
        && (!inventoryFilters.status || inventoryStatus(item) === inventoryFilters.status)
        && (!inventoryFilters.warehouse || Object.hasOwn(item.balances, inventoryFilters.warehouse));
    });
  const movements = getMovementRows().map((record, index) => ({ record, index }))
    .filter(({ record }) => {
      const text = record.join(" ").toLowerCase();
      const date = String(record[1] || "");
      const item = getInventoryItems().find(candidate => candidate.sku === record[3]);
      return (!search || text.includes(search))
        && item && getProductDomain(item) === domain
        && (!inventoryFilters.category || item?.category === inventoryFilters.category)
        && (!inventoryFilters.status || !item || inventoryStatus(item) === inventoryFilters.status)
        && (!inventoryFilters.movementType || record[5] === inventoryFilters.movementType)
        && (!inventoryFilters.warehouse || record[7] === inventoryFilters.warehouse || record[8] === inventoryFilters.warehouse)
        && (!inventoryFilters.fromDate || date >= inventoryFilters.fromDate)
        && (!inventoryFilters.toDate || date <= inventoryFilters.toDate);
    });
  const purchases = getPurchasesForModule(moduleId)
    .filter(({ record }) => {
      const date = String(record[1] || "");
      const requestedStatus = moduleId === "inventoryPurchases" || moduleId === "storesPurchases"
        ? String(record[14] || "")
        : inventoryStatus(getInventoryItems().find(candidate => candidate.sku === record[3]) || { balances: {}, minLevel: 0 });
      return (!search || record.join(" ").toLowerCase().includes(search))
        && (!inventoryFilters.category || record[5] === inventoryFilters.category)
        && (!inventoryFilters.status || requestedStatus === inventoryFilters.status)
        && (!inventoryFilters.warehouse || record[13] === inventoryFilters.warehouse)
        && (!inventoryFilters.vendor || record[6] === inventoryFilters.vendor)
        && (!inventoryFilters.fromDate || date >= inventoryFilters.fromDate)
        && (!inventoryFilters.toDate || date <= inventoryFilters.toDate);
    });
  return { items, movements, purchases };
}

function renderInventoryFilters(moduleId = currentModule) {
  const items = getItemsForModule(moduleId).map(entry => entry.item);
  const categories = [...new Set(items.map(item => item.category))].sort();
  const defaultDomainWarehouses = getPurchaseModule(moduleId) === "storesPurchases"
    ? ["Main warehouse", "Packaging store", "Stores - spares", "Stores - consumables"]
    : ["Main warehouse", "Finished goods", "Production floor", "Mill 1 (OLD)", "Mill 2 (NEW MILL)"];
  const warehouses = [...new Set([...defaultDomainWarehouses, ...items.flatMap(item => Object.keys(item.balances))])].sort();
  const purchaseStatuses = ["Unpaid", "Partially paid", "Paid"];
  const vendors = [...new Set(getPurchasesForModule(moduleId).map(entry => entry.record[6]).filter(Boolean))].sort();
  const isPurchasePage = moduleId === "inventoryPurchases" || moduleId === "storesPurchases";
  return `<div class="inventory-filters">
    <input class="search-input" id="inventory-search" type="search" value="${escapeHtml(inventoryFilters.search)}" placeholder="⌕ Search SKU, product, warehouse..." aria-label="Search stock items and movements">
    <select id="inventory-category" aria-label="Filter by category"><option value="">All categories</option>${categories.map(category => `<option value="${escapeHtml(category)}" ${inventoryFilters.category === category ? "selected" : ""}>${escapeHtml(category)}</option>`).join("")}</select>
    <select id="inventory-status" aria-label="${isPurchasePage ? "Filter by payment status" : "Filter by stock status"}"><option value="">${isPurchasePage ? "All payment statuses" : "All stock statuses"}</option>${(isPurchasePage ? purchaseStatuses : ["In stock", "Low stock", "Out of stock"]).map(status => `<option ${inventoryFilters.status === status ? "selected" : ""}>${status}</option>`).join("")}</select>
    <select id="inventory-warehouse" aria-label="Filter by warehouse"><option value="">All warehouses</option>${warehouses.map(warehouse => `<option value="${escapeHtml(warehouse)}" ${inventoryFilters.warehouse === warehouse ? "selected" : ""}>${escapeHtml(warehouse)}</option>`).join("")}</select>
    ${isPurchasePage ? `<select id="inventory-vendor" aria-label="Filter by vendor"><option value="">All vendors</option>${vendors.map(vendor => `<option value="${escapeHtml(vendor)}" ${inventoryFilters.vendor === vendor ? "selected" : ""}>${escapeHtml(vendor)}</option>`).join("")}</select>` : `<select id="inventory-movement-type" aria-label="Filter by movement type"><option value="">All movement types</option>${["Opening balance", "Receipt", "Issue", "Transfer", "Adjustment"].map(type => `<option ${inventoryFilters.movementType === type ? "selected" : ""}>${type}</option>`).join("")}</select>`}
    <label class="date-filter">From <input id="movement-from" type="date" value="${escapeHtml(inventoryFilters.fromDate)}"></label>
    <label class="date-filter">To <input id="movement-to" type="date" value="${escapeHtml(inventoryFilters.toDate)}"></label>
    <button class="secondary-btn" id="clear-inventory-filters">Clear filters</button>
  </div>`;
}

function renderInventorySection(title, moduleId, filteredRecords, indices, canEditProducts = false) {
  return `<section class="table-panel inventory-table-panel"><div class="table-heading"><div><h2>${escapeHtml(title)}</h2><p class="panel-subtitle">${filteredRecords.length} matching records</p></div></div>${filteredRecords.length
    ? `<div class="data-wrap"><table class="module-table"><thead><tr>${moduleInfo[moduleId].columns.map(column => `<th>${escapeHtml(column)}</th>`).join("")}<th>Actions</th></tr></thead><tbody>${filteredRecords.map((record, index) => {
      const cells = record.map((cell, cellIndex) => {
        const statusCell = moduleId === "stores" || moduleId === "inventory" ? cellIndex === 8 : moduleId === "stockMovement" || moduleId === "inventoryMovement" ? false : cellIndex === 14;
        return `<td>${statusCell ? `<span class="status ${statusClass(cell)}">${escapeHtml(cell)}</span>` : cellIndex === 0 ? `<strong>${escapeHtml(cell)}</strong>` : escapeHtml(cell)}</td>`;
      }).join("");
        const isProduct = moduleId === "stores" || moduleId === "inventory";
        const actionType = isProduct ? "inventory" : moduleId === "inventoryPurchases" || moduleId === "storesPurchases" ? "purchase" : "movement";
        const editAction = isProduct ? `${canEditProducts ? `<button class="row-action-btn" data-inventory-action="edit" data-record-index="${indices[index]}">Edit</button>` : ""}<button class="row-action-btn" data-inventory-action="details" data-record-index="${indices[index]}">Details</button>` : "";
      const actions = `<td><div class="row-actions">${editAction}<button class="row-action-btn" data-${actionType}-action="preview" data-record-index="${indices[index]}">Preview</button></div></td>`;
      return `<tr>${cells}${actions}</tr>`;
    }).join("")}</tbody></table></div>`
    : `<div class="empty-state">No matching records. Adjust the filters or add a new record.</div>`}</section>`;
}

function renderStockModule(moduleId) {
  const isInventory = moduleId === "inventory" || moduleId === "inventoryMovement";
  const productModule = isInventory ? "inventory" : "stores";
  const movementModule = getMovementModule(moduleId);
  const purchaseModule = getPurchaseModule(moduleId);
  const canManage = canManageStock(productModule);
  const allItems = getItemsForModule(productModule).map(entry => entry.item);
  const allMovements = getRecords(movementModule);
  const allPurchases = getRecords(purchaseModule);
  const lowCount = allItems.filter(item => inventoryStatus(item) === "Low stock").length;
  const outCount = allItems.filter(item => inventoryStatus(item) === "Out of stock").length;
  const uniqueUnits = [...new Set(allItems.map(item => item.unit))];
  const balanceSummary = uniqueUnits.map(unit => `${formatQuantity(allItems.filter(item => item.unit === unit).reduce((sum, item) => sum + inventoryBalance(item), 0))} ${unit}`).join(" · ") || "0";
  const totalPurchases = allPurchases.reduce((sum, row) => sum + Number(row[12] || 0), 0);
  const isMovementPage = moduleId === "stockMovement" || moduleId === "inventoryMovement";
  const pageTitle = isMovementPage ? moduleInfo[movementModule].label : moduleInfo[productModule].label;
  const description = isMovementPage ? moduleInfo[movementModule].description : moduleInfo[productModule].description;
  const headingActions = !canManage ? "" : isMovementPage
    ? `<button class="primary-btn" id="record-stock-movement">＋ &nbsp; Record Movement</button>`
    : `<button class="primary-btn" id="add-stock-item">＋ &nbsp; Add Product</button><button class="primary-btn" id="record-inventory-purchase">⇩ &nbsp; Purchase Entry</button><button class="primary-btn" id="record-stock-movement">⇄ &nbsp; Record Movement</button>`;
  const filteredSections = renderInventoryTables(moduleId);
  return `<div class="page-heading"><div><h1>${pageTitle}</h1><p>${description}</p></div><div class="heading-actions"><div class="date-pill">${allItems.length} products · ${allMovements.length} movements</div>${headingActions}</div></div>
    <section class="metrics inventory-metrics">
      <article class="metric-card"><div class="metric-top">${isInventory ? "Business products" : "Store items"} <span class="metric-icon">▤</span></div><div class="metric-number">${allItems.length}</div><div class="metric-foot">${isInventory ? "Paddy, rice, finished goods and by-products" : "Spares, consumables and packaging only"}</div></article>
      <article class="metric-card"><div class="metric-top">Available stock <span class="metric-icon">✓</span></div><div class="metric-number inventory-balance-number">${balanceSummary}</div><div class="metric-foot">Live balance across all locations</div></article>
      <article class="metric-card"><div class="metric-top">At / below minimum <span class="metric-icon">!</span></div><div class="metric-number">${lowCount}</div><div class="metric-foot">Reorder attention required</div></article>
      <article class="metric-card"><div class="metric-top">Out of stock <span class="metric-icon">×</span></div><div class="metric-number">${outCount}</div><div class="metric-foot">Products with zero balance</div></article>
      <article class="metric-card"><div class="metric-top">Recorded purchase value <span class="metric-icon">₹</span></div><div class="metric-number inventory-balance-number">₹ ${formatQuantity(totalPurchases)}</div><div class="metric-foot">${allPurchases.length} ${isInventory ? "inventory" : "stores"} purchases recorded</div></article>
    </section>
    <div class="inventory-report-actions"><span>Reports use visible filters; date range applies to movement history.</span><button class="secondary-btn" id="generate-report">▤ &nbsp; Preview report</button></div>
    ${renderInventoryFilters(moduleId)}<div id="inventory-tables">${filteredSections}</div>`;
}

function renderInventoryTables(moduleId) {
  const { items, movements, purchases } = filterInventoryData(moduleId);
  const movementModule = getMovementModule(moduleId);
  const purchaseModule = getPurchaseModule(moduleId);
  const isMovementPage = moduleId === "stockMovement" || moduleId === "inventoryMovement";
  if (isMovementPage) {
    return renderInventorySection("Movement history", movementModule, movements.map(entry => entry.record), movements.map(entry => entry.index));
  }
  const rows = getInventoryRows();
  return `${renderInventorySection("Product balances", moduleId, items.map(entry => rows[entry.index]), items.map(entry => entry.index), canManageStock(moduleId))}
    ${renderInventorySection("Stock movement history", movementModule, movements.map(entry => entry.record), movements.map(entry => entry.index))}
    ${renderInventorySection(moduleInfo[purchaseModule].label + " register", purchaseModule, purchases.map(entry => entry.record), purchases.map(entry => entry.index))}`;
}

function renderInventoryPurchasesPage(moduleId) {
  const { purchases } = filterInventoryData(moduleId);
  const rows = getRecords(moduleId);
  const isStoresPurchase = moduleId === "storesPurchases";
  const canManage = canManageStock(isStoresPurchase ? "stores" : "inventory");
  const total = rows.reduce((sum, record) => sum + Number(record[12] || 0), 0);
  const unpaid = rows.filter(record => ["unpaid", "partially paid"].includes(String(record[14]).toLowerCase()));
  return `<div class="page-heading"><div><div class="eyebrow module-eyebrow">PROCUREMENT · ${isStoresPurchase ? "STORES" : "INVENTORY"}</div><h1>${moduleInfo[moduleId].label}</h1><p>${moduleInfo[moduleId].description}</p></div><div class="heading-actions"><div class="date-pill">${rows.length} purchase entries</div>${canManage ? `<button class="primary-btn" id="record-inventory-purchase">＋ &nbsp; New purchase entry</button>` : ""}</div></div>
    <section class="metrics inventory-metrics"><article class="metric-card"><div class="metric-top">Purchase entries <span class="metric-icon">⇩</span></div><div class="metric-number">${rows.length}</div><div class="metric-foot">Recorded inventory receipts</div></article><article class="metric-card"><div class="metric-top">Registered value <span class="metric-icon">₹</span></div><div class="metric-number">₹ ${formatQuantity(total)}</div><div class="metric-foot">Including entered purchase taxes</div></article><article class="metric-card"><div class="metric-top">Payment follow-up <span class="metric-icon">◷</span></div><div class="metric-number">${unpaid.length}</div><div class="metric-foot">Unpaid or partially paid purchases</div></article><article class="metric-card"><div class="metric-top">Suppliers <span class="metric-icon">♙</span></div><div class="metric-number">${new Set(rows.map(record => record[6]).filter(Boolean)).size}</div><div class="metric-foot">Unique vendors in this register</div></article></section>
    <div class="inventory-report-actions"><span>Use filters to prepare a vendor, product, payment, or period report.</span><button class="secondary-btn" id="generate-report">▤ &nbsp; Preview report</button></div>
    ${renderInventoryFilters(moduleId)}<div id="inventory-purchase-table">${renderInventorySection("Purchase register", moduleId, purchases.map(entry => entry.record), purchases.map(entry => entry.index))}</div>`;
}

function renderProductionPage() {
  const dryerBatches = getRecords("dryerBatches");
  const millingRuns = getRecords("millingRuns");
  const openBatches = dryerBatches.filter(batch => getRemainingDryerWeight(batch) > 0).length;
  const paddyInput = millingRuns.reduce((total, run) => total + parseQuantity(run[5]), 0);
  const riceOutput = millingRuns.reduce((total, run) => total + parseQuantity(run[6]), 0);
  const reportSources = [
    { moduleId: "dryerBatches", records: dryerBatches },
    { moduleId: "millingRuns", records: millingRuns }
  ];
  return `<div class="page-heading"><div><div class="eyebrow module-eyebrow">MILL OPERATIONS · TWO-STAGE PRODUCTION</div><h1>Production</h1><p>${moduleInfo.production.description}</p></div><div class="heading-actions"><div class="date-pill">${dryerBatches.length} dryer batches · ${millingRuns.length} milling runs</div><button class="primary-btn" id="add-dryer-batch">＋ &nbsp; Dryer intake</button><button class="primary-btn" id="add-milling-run">＋ &nbsp; Record milling</button></div></div>
    <section class="metrics module-metrics"><article class="metric-card"><div class="metric-top">Dryer batches <span class="metric-icon">♨</span></div><div class="metric-number">${dryerBatches.length}</div><div class="metric-foot">${openBatches} with Paddy remaining for milling</div></article><article class="metric-card"><div class="metric-top">Milling runs <span class="metric-icon">⚙</span></div><div class="metric-number">${millingRuns.length}</div><div class="metric-foot">Recorded mill conversions</div></article><article class="metric-card"><div class="metric-top">Paddy milled <span class="metric-icon">▤</span></div><div class="metric-number">${formatQuantity(paddyInput)} kg</div><div class="metric-foot">Across recorded milling runs</div></article><article class="metric-card"><div class="metric-top">Rice produced <span class="metric-icon">✓</span></div><div class="metric-number">${formatQuantity(riceOutput)} kg</div><div class="metric-foot">Rice output; by-products tracked separately</div></article></section>
    <div class="inventory-report-actions"><span>Production entries update Inventory and its movement ledger.</span><button class="secondary-btn" id="generate-report">▤ &nbsp; Preview report</button></div>
    <section class="panel module-workspace production-stage"><div class="module-table-heading"><div><h2>1. Dryer-side Paddy intake</h2><p>Receive purchased Paddy into a dryer batch; bags and purchase weighment calculate the input weight.</p></div></div><div id="dryer-batches-table">${renderTable("dryerBatches", dryerBatches, true)}</div></section>
    <section class="panel module-workspace production-stage"><div class="module-table-heading"><div><h2>2. Milling and by-product output</h2><p>Consume a dryer batch and record Rice, Broken Rice, Rejection Rice, Nakku, Bran, Silky Bran, and Husk separately.</p></div></div><div id="milling-runs-table">${renderTable("millingRuns", millingRuns, true)}</div></section>
    ${getRecords("production").length ? `<section class="panel module-workspace production-stage"><div class="module-table-heading"><div><h2>Historical production entries</h2><p>Existing production records retained for reference.</p></div></div>${renderTable("production", getRecords("production"))}</section>` : ""}`;
}

function wireProductionActions() {
  document.getElementById("add-dryer-batch").addEventListener("click", () => openRecordModal("dryerBatches"));
  document.getElementById("add-milling-run").addEventListener("click", () => openRecordModal("millingRuns"));
  const sources = () => [
    { moduleId: "dryerBatches", records: getRecords("dryerBatches") },
    { moduleId: "millingRuns", records: getRecords("millingRuns") }
  ];
  document.getElementById("generate-report").addEventListener("click", () => openReportPreview(sources(), "Production"));
  [["dryer-batches-table", "dryerBatches"], ["milling-runs-table", "millingRuns"]].forEach(([tableId, moduleId]) => {
    document.getElementById(tableId).addEventListener("click", event => {
      const button = event.target.closest("[data-record-action]");
      if (!button) return;
      const record = getRecords(moduleId)[Number(button.dataset.recordIndex)];
      if (!record) {
        showToast("This production record is no longer available. Refresh and try again.");
        return;
      }
      const reportSources = [{ moduleId, records: [record] }];
      const reportTitle = `${moduleInfo[moduleId].label} - ${record[0]}`;
      if (button.dataset.recordAction === "preview") openReportPreview(reportSources, reportTitle);
    });
  });
}

const dailyReviewSections = [
  { departmentId: "production", label: "Production", modules: ["production", "dryerBatches", "millingRuns"] },
  { departmentId: "inventory", label: "Inventory", modules: ["inventoryPurchases", "inventoryMovement"] },
  { departmentId: "stores", label: "Stores", modules: ["storesPurchases", "stockMovement"] },
  { departmentId: "purchase", label: "Purchase", modules: ["purchases", "purchaseOrders"] },
  { departmentId: "sales", label: "Sales", modules: ["sales", "salesOrders", "brokerage"] },
  { departmentId: "accounts", label: "Accounts", modules: ["accounting"] },
  { departmentId: "hr", label: "Human Resources", modules: ["employees"] }
];

const dailyReviewDateColumns = {
  production: 1,
  dryerBatches: 1,
  millingRuns: 1,
  inventoryPurchases: 1,
  storesPurchases: 1,
  inventoryMovement: 1,
  stockMovement: 1,
  purchases: 2,
  purchaseOrders: 2,
  sales: 2,
  salesOrders: 2,
  brokerage: -1,
  accounting: 3,
  employees: 4
};

function parseAdminDate(value) {
  const dateValue = String(value || "").trim();
  if (!dateValue) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) return dateValue;
  const dayFirst = dateValue.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
  if (dayFirst) {
    const date = new Date(Number(dayFirst[3]), Number(dayFirst[2]) - 1, Number(dayFirst[1]));
    return date.getFullYear() === Number(dayFirst[3]) && date.getMonth() === Number(dayFirst[2]) - 1
      && date.getDate() === Number(dayFirst[1]) ? formatLocalDate(date) : "";
  }
  const parsed = new Date(dateValue);
  return Number.isNaN(parsed.getTime()) ? "" : formatLocalDate(parsed);
}

function getAdminStorageKey(moduleId) {
  if (moduleId === "inventoryMovement" || moduleId === "stockMovement") return "agrimill-stockMovement";
  if (moduleId === "inventoryPurchases" || moduleId === "storesPurchases") return "agrimill-inventory-purchases";
  return `agrimill-${moduleId}`;
}

function getAdminRawRows(moduleId) {
  if (moduleId === "inventoryMovement" || moduleId === "stockMovement") return getMovementRows();
  if (moduleId === "inventoryPurchases" || moduleId === "storesPurchases") return getInventoryPurchaseRows();
  if (moduleId === "dryerBatches" || moduleId === "millingRuns") return getProductionRows(moduleId);
  const rows = readStorage(getAdminStorageKey(moduleId), moduleInfo[moduleId].initial);
  return Array.isArray(rows) ? rows : [];
}

function getAdminRecordDate(moduleId, record) {
  if (moduleId === "brokerage") {
    const sale = getRecords("sales").find(candidate => String(candidate[0]) === String(record[2]));
    return sale ? parseAdminDate(sale[2]) : "";
  }
  const dateColumn = dailyReviewDateColumns[moduleId];
  return dateColumn === undefined ? "" : parseAdminDate(record[dateColumn]);
}

function getDailyReviewRecords(date, departmentId) {
  return dailyReviewSections
    .filter(section => departmentId === "all" || section.departmentId === departmentId)
    .flatMap(section => section.modules.flatMap(moduleId => {
      const rawRows = getAdminRawRows(moduleId);
      return getRecords(moduleId).filter(record => getAdminRecordDate(moduleId, record) === date)
        .map(record => ({
          department: section.label,
          moduleId,
          record,
          recordIndex: rawRows.findIndex(row => String(row[0]) === String(record[0]))
        }));
    }));
}

function renderDailyReviewResults() {
  const date = document.getElementById("daily-review-date").value;
  const departmentId = document.getElementById("daily-review-department").value;
  dailyReviewFilters = { date, departmentId };
  const records = date ? getDailyReviewRecords(date, departmentId) : [];
  document.getElementById("daily-review-count").textContent = `${records.length} ${records.length === 1 ? "record" : "records"}`;
  if (!records.length) {
    document.getElementById("daily-review-results").innerHTML = `<div class="empty-state">No department entries were found for ${escapeHtml(date || "the selected date")}.</div>`;
    return;
  }
  const groups = new Map();
  records.forEach(entry => {
    const key = `${entry.department}:${entry.moduleId}`;
    if (!groups.has(key)) groups.set(key, { department: entry.department, moduleId: entry.moduleId, records: [] });
    groups.get(key).records.push(entry);
  });
  document.getElementById("daily-review-results").innerHTML = [...groups.values()].map(group => {
    const info = moduleInfo[group.moduleId];
    return `<section class="panel admin-review-section"><div class="module-table-heading"><div><span class="eyebrow module-eyebrow">${escapeHtml(group.department)}</span><h2>${escapeHtml(info.label)}</h2></div><span class="date-pill">${group.records.length} entries</span></div>
      <div class="data-wrap"><table class="module-table"><thead><tr>${info.columns.map(column => `<th>${escapeHtml(column)}</th>`).join("")}<th>Actions</th></tr></thead><tbody>${group.records.map(entry => `<tr>${info.columns.map((_, index) => `<td>${index === 0 ? `<strong>${escapeHtml(entry.record[index] ?? "")}</strong>` : escapeHtml(entry.record[index] ?? "")}</td>`).join("")}<td><div class="row-actions"><button class="row-action-btn" data-review-edit="${escapeHtml(group.moduleId)}" data-record-index="${entry.recordIndex}" ${entry.recordIndex < 0 ? "disabled" : ""}>Edit</button><button class="row-action-btn" data-review-preview="${escapeHtml(group.moduleId)}" data-record-index="${entry.recordIndex}">Preview</button></div></td></tr>`).join("")}</tbody></table></div></section>`;
  }).join("");
}

function renderDailyReviewPage() {
  if (currentUser.departmentId !== "admin") return `<div class="empty-state">This administration section is available to administrators only.</div>`;
  if (!dailyReviewFilters.date) dailyReviewFilters.date = formatLocalDate(new Date());
  return `<div class="page-heading"><div><div class="eyebrow module-eyebrow">ADMINISTRATION · DAILY REGISTER</div><h1>Daily data review</h1><p>View, print, and edit records entered by every department for any selected day and year.</p></div><div class="heading-actions"><span class="date-pill" id="daily-review-count">0 records</span></div></div>
    <section class="panel admin-review-filters"><div class="field"><label for="daily-review-date">Entry date</label><input id="daily-review-date" type="date" value="${escapeHtml(dailyReviewFilters.date)}" required></div><div class="field"><label for="daily-review-department">Department</label><select id="daily-review-department"><option value="all" ${dailyReviewFilters.departmentId === "all" ? "selected" : ""}>All departments</option>${dailyReviewSections.map(section => `<option value="${section.departmentId}" ${dailyReviewFilters.departmentId === section.departmentId ? "selected" : ""}>${escapeHtml(section.label)}</option>`).join("")}</select></div>
      <div class="admin-review-actions"><button class="secondary-btn" id="daily-review-preview">▤ &nbsp; Preview report</button></div></section>
    <div id="daily-review-results" class="admin-review-results"></div>`;
}

function wireDailyReviewActions() {
  if (currentUser.departmentId !== "admin") return;
  renderDailyReviewResults();
  document.getElementById("daily-review-date").addEventListener("change", renderDailyReviewResults);
  document.getElementById("daily-review-department").addEventListener("change", renderDailyReviewResults);
  const reportSources = () => {
    const date = document.getElementById("daily-review-date").value;
    const departmentId = document.getElementById("daily-review-department").value;
    const records = date ? getDailyReviewRecords(date, departmentId) : [];
    return [...new Set(records.map(entry => entry.moduleId))]
      .map(moduleId => ({ moduleId, records: records.filter(entry => entry.moduleId === moduleId).map(entry => entry.record) }));
  };
  document.getElementById("daily-review-preview").addEventListener("click", () => {
    const date = document.getElementById("daily-review-date").value;
    if (!date) return showToast("Select a date before preparing the daily report.");
    openReportPreview(reportSources(), `Daily department register · ${date}`);
  });
  document.getElementById("daily-review-results").addEventListener("click", event => {
    const button = event.target.closest("[data-review-edit], [data-review-preview]");
    if (!button) return;
    const moduleId = button.dataset.reviewEdit || button.dataset.reviewPreview;
    const rawIndex = Number(button.dataset.recordIndex);
    const rawRecord = getAdminRawRows(moduleId)[rawIndex];
    const record = getRecords(moduleId).find(candidate => rawRecord && String(candidate[0]) === String(rawRecord[0]));
    if (!record) {
      showToast("This department entry is no longer available. Refresh the daily register and try again.");
      return;
    }
    if (button.hasAttribute("data-review-edit")) {
      openAdminEditModal(moduleId, rawIndex, record);
      return;
    }
    openReportPreview([{ moduleId, records: [record] }], `${moduleInfo[moduleId].label} · ${record[0]}`);
  });
}

function openAdminEditModal(moduleId, rawIndex, record) {
  if (currentUser.departmentId !== "admin") return;
  const info = moduleInfo[moduleId];
  const originalRaw = getAdminRawRows(moduleId)[rawIndex];
  if (!originalRaw || !info?.columns?.length) {
    showToast("This entry cannot be edited because its saved record is unavailable.");
    return;
  }
  const dateColumn = dailyReviewDateColumns[moduleId];
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = `<form class="modal admin-edit-modal" id="admin-edit-form"><div class="modal-header"><h2>Edit ${escapeHtml(info.label)} entry</h2><button type="button" class="close-btn" aria-label="Close">×</button></div>
    <p class="purchase-form-note">Changes are saved with a before-and-after audit entry visible to administrators using this browser.</p>
    <div class="form-grid">${info.columns.map((column, index) => {
      const value = record[index] ?? "";
      const isDate = index === dateColumn;
      const inputValue = isDate ? parseAdminDate(value) : String(value);
      const control = /notes|description|purpose/i.test(column)
        ? `<textarea id="admin-edit-${index}" rows="2">${escapeHtml(inputValue)}</textarea>`
        : `<input id="admin-edit-${index}" type="${isDate ? "date" : "text"}" value="${escapeHtml(inputValue)}">`;
      return `<div class="field ${index === 0 || /notes|description|purpose/i.test(column) ? "full" : ""}"><label for="admin-edit-${index}">${escapeHtml(column)}</label>${control}</div>`;
    }).join("")}</div><div class="form-error" id="admin-edit-error" role="alert"></div>
    <div class="modal-actions"><button type="button" class="secondary-btn" data-close-admin-edit>Cancel</button><button type="submit" class="primary-btn">Save audited changes</button></div></form>`;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  modal.querySelector(".close-btn").addEventListener("click", close);
  modal.querySelector("[data-close-admin-edit]").addEventListener("click", close);
  modal.addEventListener("click", event => { if (event.target === modal) close(); });
  modal.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const updatedRecord = info.columns.map((_, index) => {
      const input = modal.querySelector(`#admin-edit-${index}`);
      const nextValue = input.value.trim();
      const previousValue = String(record[index] ?? "");
      if (index === dateColumn && nextValue === parseAdminDate(previousValue)) return previousValue;
      return nextValue;
    });
    const changes = info.columns.flatMap((column, index) => {
      const before = String(record[index] ?? "");
      const after = String(updatedRecord[index] ?? "");
      return before === after ? [] : [{ field: column, before, after }];
    });
    if (!changes.length) {
      close();
      return;
    }
    const storageKey = getAdminStorageKey(moduleId);
    const auditKey = "agrimill-editLog";
    const snapshot = captureStorage([storageKey, auditKey]);
    const rows = getAdminRawRows(moduleId);
    const currentRawRecord = rows[rawIndex];
    if (JSON.stringify(currentRawRecord) !== JSON.stringify(originalRaw)) {
      modal.querySelector("#admin-edit-error").textContent = "This entry changed while the form was open. Close it and load the latest version before editing.";
      return;
    }
    rows[rawIndex] = updatedRecord;
    if (!saveStorage(storageKey, rows)) {
      restoreStorage(snapshot, "administrator edit");
      return;
    }
    const history = readStorage(auditKey, []);
    const auditEntries = Array.isArray(history) ? history : [];
    auditEntries.unshift({
      timestamp: new Date().toISOString(),
      administrator: currentUser.name,
      email: currentUser.email,
      department: departments[currentUser.departmentId].label,
      moduleId,
      section: info.label,
      recordId: String(record[0] ?? ""),
      changes
    });
    if (!saveStorage(auditKey, auditEntries)) {
      restoreStorage(snapshot, "administrator edit and audit log");
      modal.querySelector("#admin-edit-error").textContent = "The edit could not be completed because its audit entry could not be saved. No data was changed.";
      return;
    }
    close();
    renderApp();
    showToast(`${info.label} entry updated and recorded in the Edited log.`);
  });
}

function renderEditLogPage() {
  if (currentUser.departmentId !== "admin") return `<div class="empty-state">This administration section is available to administrators only.</div>`;
  const history = readStorage("agrimill-editLog", []);
  const entries = Array.isArray(history) ? history : [];
  const rows = entries.map(entry => [
    new Date(entry.timestamp).toLocaleString("en-IN"),
    entry.administrator || "",
    entry.email || "",
    entry.department || "",
    entry.section || moduleInfo[entry.moduleId]?.label || entry.moduleId || "",
    entry.recordId || "",
    (entry.changes || []).map(change => `${change.field}: ${change.before || "—"} → ${change.after || "—"}`).join(" · ")
  ]);
  return `<div class="page-heading"><div><div class="eyebrow module-eyebrow">ADMINISTRATION · AUDIT HISTORY</div><h1>Edited log</h1><p>Every administrator edit is recorded with the editor, timestamp, record, and field-level before-and-after values.</p></div><div class="heading-actions"><span class="date-pill">${entries.length} edits recorded</span></div></div>
    <section class="panel admin-edit-log"><div class="module-table-heading"><div><h2>Administrator edit history</h2><p>Entries are shown newest first and retained in this browser.</p></div></div>
      ${entries.length ? `<div class="data-wrap"><table class="module-table"><thead><tr>${moduleInfo.editLog.columns.map(column => `<th>${escapeHtml(column)}</th>`).join("")}</tr></thead><tbody>${entries.map(entry => `<tr><td>${escapeHtml(new Date(entry.timestamp).toLocaleString("en-IN"))}</td><td>${escapeHtml(entry.administrator || "")}</td><td>${escapeHtml(entry.email || "")}</td><td>${escapeHtml(entry.department || "")}</td><td>${escapeHtml(entry.section || moduleInfo[entry.moduleId]?.label || entry.moduleId || "")}</td><td><strong>${escapeHtml(entry.recordId || "")}</strong></td><td><details><summary>${(entry.changes || []).length} field changes</summary><ul class="edit-log-changes">${(entry.changes || []).map(change => `<li><strong>${escapeHtml(change.field)}:</strong> <span>${escapeHtml(change.before || "—")}</span> → <span>${escapeHtml(change.after || "—")}</span></li>`).join("")}</ul></details></td></tr>`).join("")}</tbody></table></div>` : `<div class="empty-state">No administrator edits have been recorded yet.</div>`}
    </section>`;
}

function wireEditLogActions() {
  if (currentUser.departmentId !== "admin") return;
}

function getInventoryReportSources(moduleId) {
  const { items, movements, purchases } = filterInventoryData(moduleId);
  const movementModule = getMovementModule(moduleId);
  const purchaseModule = getPurchaseModule(moduleId);
  if (moduleId === "stockMovement" || moduleId === "inventoryMovement") return [{ moduleId: movementModule, records: movements.map(entry => entry.record) }];
  if (moduleId === "inventoryPurchases" || moduleId === "storesPurchases") return [{ moduleId, records: purchases.map(entry => entry.record) }];
  const rows = getInventoryRows();
  return [
    { moduleId, records: items.map(entry => rows[entry.index]) },
    { moduleId: movementModule, records: movements.map(entry => entry.record) },
    { moduleId: purchaseModule, records: purchases.map(entry => entry.record) }
  ];
}

function getRecordReportSources(moduleId, record, availableSources = null) {
  if (moduleId === "inventoryPurchases" || moduleId === "storesPurchases") return [
    { moduleId, records: [record] },
    { moduleId: getMovementModule(moduleId), records: getRecords(getMovementModule(moduleId)).filter(movement => movement[10] === record[0]) }
  ];
  if (moduleId !== "stores" && moduleId !== "inventory") return [{ moduleId, records: [record] }];
  const movementModule = getMovementModule(moduleId);
  const purchaseModule = getPurchaseModule(moduleId);
  const movementSources = availableSources?.find(source => source.moduleId === movementModule)?.records
    ?? getRecords(movementModule);
  return [
    { moduleId, records: [record] },
    { moduleId: movementModule, records: movementSources.filter(movement => movement[3] === record[0]) },
    { moduleId: purchaseModule, records: getRecords(purchaseModule).filter(purchase => purchase[3] === record[0]) }
  ];
}

function renderModule(moduleId) {
  if (moduleId === "dailyReview") return renderDailyReviewPage();
  if (moduleId === "editLog") return renderEditLogPage();
  if (moduleId === "production") return renderProductionPage();
  if (["stores", "stockMovement", "inventory", "inventoryMovement"].includes(moduleId)) return renderStockModule(moduleId);
  if (moduleId === "inventoryPurchases" || moduleId === "storesPurchases") return renderInventoryPurchasesPage(moduleId);
  const info = moduleInfo[moduleId];
  const records = filterModuleRecords(moduleId);
  const allRecords = getRecords(moduleId);
  const pendingCount = allRecords.filter(record => ["pending", "processing", "in transit", "unpaid"].includes(String(record[record.length - 1]).toLowerCase())).length;
  const completedCount = allRecords.filter(record => ["completed", "paid"].includes(String(record[record.length - 1]).toLowerCase())).length;
  const statuses = [...new Set(allRecords.map(record => String(record[record.length - 1] || "")).filter(Boolean))].sort();
  return `<div class="page-heading"><div><div class="eyebrow module-eyebrow">${escapeHtml(currentUser.role)} · OPERATIONS</div><h1>${info.label}</h1><p>${info.description}</p></div><div class="date-pill">${allRecords.length} total records</div></div>
    <section class="metrics module-metrics"><article class="metric-card"><div class="metric-top">Total records <span class="metric-icon">${info.icon}</span></div><div class="metric-number">${allRecords.length}</div><div class="metric-foot">Records in this department</div></article><article class="metric-card"><div class="metric-top">Needs follow-up <span class="metric-icon">◷</span></div><div class="metric-number">${pendingCount}</div><div class="metric-foot">Pending or in progress</div></article><article class="metric-card"><div class="metric-top">Completed / settled <span class="metric-icon">✓</span></div><div class="metric-number">${completedCount}</div><div class="metric-foot">Completed or paid records</div></article><article class="metric-card"><div class="metric-top">Currently displayed <span class="metric-icon">⌕</span></div><div class="metric-number" id="displayed-record-count">${records.length}</div><div class="metric-foot">Based on your search and filters</div></article></section>
    <section class="panel module-workspace"><div class="module-toolbar"><div class="module-search"><input class="search-input" id="record-search" type="search" value="${escapeHtml(moduleFilters[moduleId]?.search || "")}" placeholder="⌕  Search by name, reference, status..." aria-label="Search ${info.label}"><select class="status-filter" id="record-status-filter" aria-label="Filter by status"><option value="">All statuses</option>${statuses.map(status => `<option value="${escapeHtml(status)}" ${moduleFilters[moduleId]?.status === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}</select></div>
      <div class="toolbar-actions"><button class="secondary-btn" id="generate-report">▤ &nbsp; Preview</button><button class="primary-btn" id="add-record">＋ &nbsp; Add ${moduleId === "employees" ? "employee" : "record"}</button></div>
    </div><div class="module-table-heading"><div><h2>${info.label} register</h2><p>Search, filter, and export the records available to your department.</p></div><button class="text-action" id="clear-record-filters">Clear filters</button></div><div id="module-table">${renderTable(moduleId, records.map(entry => entry.record), true, records.map(entry => entry.index))}</div></section>`;
}

function filterModuleRecords(moduleId) {
  const filter = { search: "", status: "", ...(moduleFilters[moduleId] || {}) };
  const search = filter.search.toLowerCase();
  return getRecords(moduleId).map((record, index) => ({ record, index }))
    .filter(({ record }) => (!search || record.some(cell => String(cell).toLowerCase().includes(search)))
      && (!filter.status || String(record[record.length - 1]) === filter.status));
}

function renderApp() {
  document.getElementById("app").innerHTML = `<div class="app-shell">${renderSidebar()}<main class="main-area">${renderTopbar()}<div class="content" id="content">${currentModule === "dashboard" ? renderDashboard() : renderModule(currentModule)}</div></main></div>`;
  document.querySelectorAll("[data-module]").forEach(button => button.addEventListener("click", () => {
    currentModule = button.dataset.module;
    document.getElementById("sidebar").classList.remove("open");
    renderApp();
  }));
  document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("agrimill-user");
    currentUser = null;
    currentModule = "dashboard";
    renderLogin();
  });
  document.getElementById("mobile-menu").addEventListener("click", () => document.getElementById("sidebar").classList.toggle("open"));
  if (currentModule === "dashboard") {
    const getDashboardSources = () => getOperationalModules()
      .flatMap(id => id === "production"
        ? ["production", "dryerBatches", "millingRuns"].map(moduleId => ({ moduleId, records: getRecords(moduleId) }))
        : [{ moduleId: id, records: getRecords(id) }]);
    document.getElementById("generate-report").addEventListener("click", () => {
      openReportPreview(getDashboardSources(), `${departments[currentUser.departmentId].label} Overview`);
    });
  } else if (currentModule === "dailyReview") {
    wireDailyReviewActions();
  } else if (currentModule === "editLog") {
    wireEditLogActions();
  } else if (currentModule === "production") {
    wireProductionActions();
  } else if (["stores", "stockMovement", "inventory", "inventoryMovement"].includes(currentModule)) {
    wireInventoryActions(currentModule);
  } else if (currentModule === "inventoryPurchases" || currentModule === "storesPurchases") {
    wireInventoryPurchaseModule(currentModule);
  } else {
    wireModuleActions(currentModule);
  }
}

function wireInventoryActions(moduleId) {
  document.getElementById("inventory-search").addEventListener("input", event => {
    inventoryFilters.search = event.target.value;
    document.getElementById("inventory-tables").innerHTML = renderInventoryTables(moduleId);
  });
  [["inventory-category", "category"], ["inventory-status", "status"], ["inventory-warehouse", "warehouse"], ["inventory-movement-type", "movementType"], ["movement-from", "fromDate"], ["movement-to", "toDate"]]
    .forEach(([elementId, filterKey]) => document.getElementById(elementId).addEventListener("change", event => {
      inventoryFilters[filterKey] = event.target.value;
      document.getElementById("inventory-tables").innerHTML = renderInventoryTables(moduleId);
    }));
  document.getElementById("clear-inventory-filters").addEventListener("click", () => {
    inventoryFilters = { search: "", category: "", status: "", warehouse: "", vendor: "", movementType: "", fromDate: "", toDate: "" };
    renderApp();
  });
  const productModule = moduleId === "stores" || moduleId === "stockMovement" ? "stores" : "inventory";
  const movementModule = getMovementModule(moduleId);
  const purchaseModule = getPurchaseModule(moduleId);
  document.getElementById("record-stock-movement")?.addEventListener("click", () => openStockMovementModal(productModule));
  document.getElementById("add-stock-item")?.addEventListener("click", () => openInventoryItemModal("", productModule));
  document.getElementById("record-inventory-purchase")?.addEventListener("click", () => openInventoryPurchaseModal(purchaseModule));
  document.getElementById("generate-report").addEventListener("click", () => openReportPreview(getInventoryReportSources(moduleId), moduleInfo[moduleId].label));
  document.getElementById("inventory-tables").addEventListener("click", event => {
    const button = event.target.closest("[data-inventory-action], [data-movement-action], [data-purchase-action]");
    if (!button) return;
    const recordModule = button.hasAttribute("data-inventory-action")
      ? productModule
      : button.hasAttribute("data-purchase-action") ? purchaseModule : movementModule;
    const action = button.dataset.inventoryAction || button.dataset.movementAction;
    const rowAction = button.dataset.purchaseAction || action;
    const recordIndex = Number(button.dataset.recordIndex);
    const record = button.hasAttribute("data-inventory-action")
      ? getInventoryRows()[recordIndex]
      : button.hasAttribute("data-purchase-action")
        ? getInventoryPurchaseRows()[recordIndex]
        : getMovementRows()[recordIndex];
    if (!record) {
      showToast("This stock record is no longer available. Refresh and try again.");
      return;
    }
    if (button.dataset.inventoryAction === "edit") {
      openInventoryItemModal(record[0], productModule);
      return;
    }
    if (button.dataset.inventoryAction === "details") {
      openReportPreview(getRecordReportSources(productModule, record, getInventoryReportSources(moduleId)), `Product Details - ${record[1]}`);
      return;
    }
    const source = recordModule === "stores" || recordModule === "inventory"
      ? getRecordReportSources(recordModule, record, getInventoryReportSources(moduleId))
      : getRecordReportSources(recordModule, record);
    const title = `${moduleInfo[recordModule].label} - ${record[0]}`;
    if (rowAction === "preview") openReportPreview(source, title);
  });
}

function wireInventoryPurchaseModule(moduleId) {
  const refresh = () => {
    const { purchases } = filterInventoryData(moduleId);
    document.getElementById("inventory-purchase-table").innerHTML = renderInventorySection("Purchase register", moduleId, purchases.map(entry => entry.record), purchases.map(entry => entry.index));
  };
  document.getElementById("inventory-search").addEventListener("input", event => {
    inventoryFilters.search = event.target.value;
    refresh();
  });
  [["inventory-category", "category"], ["inventory-status", "status"], ["inventory-warehouse", "warehouse"], ["inventory-vendor", "vendor"], ["movement-from", "fromDate"], ["movement-to", "toDate"]]
    .forEach(([elementId, filterKey]) => document.getElementById(elementId).addEventListener("change", event => {
      inventoryFilters[filterKey] = event.target.value;
      refresh();
    }));
  document.getElementById("clear-inventory-filters").addEventListener("click", () => {
    inventoryFilters = { search: "", category: "", status: "", warehouse: "", vendor: "", movementType: "", fromDate: "", toDate: "" };
    renderApp();
  });
  document.getElementById("record-inventory-purchase")?.addEventListener("click", () => openInventoryPurchaseModal(moduleId));
  const sources = () => [{ moduleId, records: filterInventoryData(moduleId).purchases.map(entry => entry.record) }];
  document.getElementById("generate-report").addEventListener("click", () => openReportPreview(sources(), moduleInfo[moduleId].label));
  document.getElementById("inventory-purchase-table").addEventListener("click", event => {
    const button = event.target.closest("[data-purchase-action]");
    if (!button) return;
    const record = getInventoryPurchaseRows()[Number(button.dataset.recordIndex)];
    if (!record) {
      showToast("This purchase entry is no longer available. Refresh and try again.");
      return;
    }
    const reportSources = getRecordReportSources(moduleId, record);
    const reportTitle = `${moduleInfo[moduleId].label} - ${record[0]}`;
    if (button.dataset.purchaseAction === "preview") openReportPreview(reportSources, reportTitle);
  });
}

function wireModuleActions(moduleId) {
  const refresh = () => {
    const filtered = filterModuleRecords(moduleId);
    document.getElementById("module-table").innerHTML = renderTable(moduleId, filtered.map(item => item.record), true, filtered.map(item => item.index));
    document.getElementById("displayed-record-count").textContent = filtered.length;
  };
  document.getElementById("record-search").addEventListener("input", event => {
    moduleFilters[moduleId] = { ...(moduleFilters[moduleId] || {}), search: event.target.value };
    refresh();
  });
  document.getElementById("record-status-filter").addEventListener("change", event => {
    moduleFilters[moduleId] = { ...(moduleFilters[moduleId] || {}), status: event.target.value };
    refresh();
  });
  document.getElementById("clear-record-filters").addEventListener("click", () => {
    moduleFilters[moduleId] = { search: "", status: "" };
    renderApp();
  });
  document.getElementById("add-record").addEventListener("click", () => openRecordModal(moduleId));
  const reportSources = () => [{ moduleId, records: filterModuleRecords(moduleId).map(entry => entry.record) }];
  document.getElementById("generate-report").addEventListener("click", () => openReportPreview(reportSources(), moduleInfo[moduleId].label));
  document.getElementById("module-table").addEventListener("click", event => {
    const button = event.target.closest("[data-record-action]");
    if (!button) return;
    const record = getRecords(moduleId)[Number(button.dataset.recordIndex)];
    if (!record) {
      showToast("This record is no longer available. Refresh the page and try again.");
      return;
    }
    const source = [{ moduleId, records: [record] }];
    const reportName = `${moduleInfo[moduleId].label} - ${record[0]}`;
    if (button.dataset.recordAction === "preview") openReportPreview(source, reportName);
  });
}

function getReportTimestamp() {
  const generatedAt = new Date();
  return [
    generatedAt.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }),
    generatedAt.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })
  ];
}

function renderReportTables(sources, includeActions = false) {
  return sources.map(({ moduleId, records }) => {
    const info = moduleInfo[moduleId];
    return `<section class="report-section"><h3>${escapeHtml(info.label)}</h3>${records.length
      ? `<div class="data-wrap"><table class="report-table"><thead><tr>${info.columns.map(column => `<th>${escapeHtml(column)}</th>`).join("")}${includeActions ? "<th>Actions</th>" : ""}</tr></thead><tbody>${records.map((record, recordIndex) => `<tr>${info.columns.map((_, index) => `<td>${escapeHtml(record[index] ?? "")}</td>`).join("")}${includeActions ? `<td><div class="row-actions"><button class="row-action-btn" data-preview-record="${escapeHtml(moduleId)}:${recordIndex}">Preview</button></div></td>` : ""}</tr>`).join("")}</tbody></table></div>`
      : `<p class="report-empty">No ${escapeHtml(info.label.toLowerCase())} records to report.</p>`}</section>`;
  }).join("");
}

function openReportPreview(sources, reportName) {
  const [dateLabel, timeLabel] = getReportTimestamp();
  const modal = document.createElement("div");
  modal.className = "modal-backdrop report-backdrop";
  modal.id = "report-modal";
  modal.innerHTML = `<section class="report-modal" role="dialog" aria-modal="true" aria-labelledby="report-title">
    <header class="report-toolbar"><div><h2 id="report-title">${escapeHtml(reportName)} Report</h2><p>Preview your report, then choose how to export it if needed.</p></div><div class="report-actions"><button class="secondary-btn" id="close-report">Close</button><select id="report-export-mode" aria-label="Report export format"><option value="pdf">Print / Save PDF</option><option value="excel">Export Excel</option><option value="csv">Export CSV</option></select><button class="primary-btn" id="run-report-export">Apply</button></div></header>
    <div class="report-page"><div class="report-brand"><span class="report-mark">❋</span><div><strong>RiceMill ERP Solutions</strong><small>Rice mill management</small></div></div>
      <div class="report-title"><h1>${escapeHtml(reportName)} Report</h1><p>Generated ${escapeHtml(dateLabel)} at ${escapeHtml(timeLabel)} · Prepared by ${escapeHtml(currentUser.name)}</p></div>
      ${renderReportTables(sources, true)}
      <footer class="report-footer">Generated by RiceMill ERP Solutions · ${escapeHtml(currentUser.role)}</footer>
    </div>
  </section>`;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  modal.querySelector("#close-report").addEventListener("click", close);
  modal.addEventListener("click", event => { if (event.target === modal) close(); });
  modal.querySelector("#run-report-export").addEventListener("click", () => {
    const mode = modal.querySelector("#report-export-mode").value;
    if (mode === "pdf") return printReport(reportName, dateLabel, timeLabel, renderReportTables(sources));
    if (mode === "excel") return exportExcel(sources, reportName);
    sources.forEach(source => exportCsvRecords(source.moduleId, source.records));
  });
  modal.addEventListener("click", event => {
    const button = event.target.closest("[data-preview-record]");
    if (!button) return;
    const [moduleId, recordIndex] = button.dataset.previewRecord.split(":");
    const record = sources.find(source => source.moduleId === moduleId)?.records[Number(recordIndex)];
    if (!record) return;
    const singleSource = getRecordReportSources(moduleId, record, sources);
    const singleTitle = `${moduleInfo[moduleId].label} - ${record[0]}`;
    openReportPreview(singleSource, singleTitle);
  });
}

function exportExcel(sources, reportName) {
  const sheets = sources.map(({ moduleId, records }) => {
    const info = moduleInfo[moduleId];
    return `<h2>${escapeHtml(info.label)}</h2><table><thead><tr>${info.columns.map(column => `<th>${escapeHtml(column)}</th>`).join("")}</tr></thead><tbody>${records.map(record => `<tr>${info.columns.map((_, index) => `<td>${escapeHtml(record[index] ?? "")}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
  }).join("<br>");
  const workbook = `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif}h1{color:#214f39}h2{margin-top:24px;color:#214f39}table{width:100%;border-collapse:collapse;margin-bottom:18px}th,td{border:1px solid #d5ddd6;padding:7px;text-align:left}th{background:#e8f1ea;color:#214f39}</style></head><body><h1>${escapeHtml(reportName)} Report</h1><p>Generated ${escapeHtml(getReportTimestamp().join(" at "))} · ${escapeHtml(currentUser.name)}</p>${sheets}</body></html>`;
  const filename = `${reportName.replace(/[<>:"/\\|?*]+/g, "-").trim() || "agrimill-report"}-${new Date().toISOString().slice(0, 10)}.xls`;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob(["\ufeff", workbook], { type: "application/vnd.ms-excel;charset=utf-8" }));
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("Excel report downloaded.");
}

function getWarehouseOptions(moduleId = currentModule) {
  const defaults = getPurchaseModule(moduleId) === "storesPurchases"
    ? ["Main warehouse", "Packaging store", "Stores - spares", "Stores - consumables"]
    : ["Main warehouse", "Raw paddy yard", "Finished goods", "Production floor", "Mill 1 (OLD)", "Mill 2 (NEW MILL)"];
  const itemWarehouses = getItemsForModule(moduleId).flatMap(({ item }) => Object.keys(item.balances));
  return [...new Set([...defaults, ...itemWarehouses])].sort();
}

function openInventoryItemModal(sku = "", moduleId = currentModule) {
  const items = getInventoryItems();
  const existingItem = items.find(item => item.sku === sku);
  if (sku && !existingItem) {
    showToast("This inventory product could not be found.");
    return;
  }
  const domain = moduleId === "stores" ? "stores" : "inventory";
  if (existingItem && getProductDomain(existingItem) !== domain) {
    showToast("This product belongs to the other stock department and cannot be edited here.");
    return;
  }
  const categories = [...new Set([...(domain === "stores" ? storesProductCategories : businessProductCategories), ...(existingItem ? [existingItem.category] : [])])];
  const units = [...new Set(["kg", "quintal", "MT", "pcs", "bags", "litre", ...(existingItem ? [existingItem.unit] : [])])];
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = `<form class="modal" id="inventory-item-form"><div class="modal-header"><h2>${existingItem ? "Edit inventory product" : "Add inventory product"}</h2><button type="button" class="close-btn" aria-label="Close">×</button></div>
    <div class="form-grid">
      <div class="field full"><label for="item-name">Product name *</label><input id="item-name" value="${escapeHtml(existingItem?.name || "")}" required></div>
      <div class="field"><label for="item-category">Category *</label><select id="item-category" required>${categories.map(category => `<option ${existingItem?.category === category ? "selected" : ""}>${escapeHtml(category)}</option>`).join("")}</select></div>
      <div class="field"><label for="item-unit">${existingItem && inventoryBalance(existingItem) > 0 ? "Unit (locked while stock exists)" : "Unit *"}</label><select id="item-unit" required ${existingItem && inventoryBalance(existingItem) > 0 ? "disabled" : ""}>${units.map(unit => `<option ${existingItem?.unit === unit ? "selected" : ""}>${escapeHtml(unit)}</option>`).join("")}</select></div>
      <div class="field full"><label for="item-description">Description / specifications</label><textarea id="item-description" rows="3" maxlength="500" placeholder="Brand, part number, size, grade, compatibility, warranty...">${escapeHtml(existingItem?.description || "")}</textarea></div>
      ${existingItem ? "" : `<div class="field"><label for="item-warehouse">Opening warehouse *</label><select id="item-warehouse" required>${getWarehouseOptions(moduleId).map(warehouse => `<option>${escapeHtml(warehouse)}</option>`).join("")}</select></div>
      <div class="field"><label for="item-opening">Opening balance</label><input id="item-opening" type="number" min="0" step="0.001" value="0"></div>`}
      <div class="field ${existingItem ? "full" : ""}"><label for="item-minimum">Minimum stock level *</label><input id="item-minimum" type="number" min="0" step="0.001" value="${escapeHtml(existingItem?.minLevel ?? 0)}" required></div>
    </div><div class="form-error" id="inventory-item-error" role="alert"></div>
    <div class="modal-actions"><button type="button" class="secondary-btn" data-close-modal>Cancel</button><button type="submit" class="primary-btn">Save product</button></div></form>`;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  modal.querySelector(".close-btn").addEventListener("click", close);
  modal.querySelector("[data-close-modal]").addEventListener("click", close);
  modal.addEventListener("click", event => { if (event.target === modal) close(); });
  modal.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("item-name").value.trim();
    if (items.some(item => item.sku !== sku && item.name.toLowerCase() === name.toLowerCase())) {
      document.getElementById("inventory-item-error").textContent = "A product with this name already exists.";
      return;
    }
    if (existingItem) {
      existingItem.name = name;
      existingItem.category = document.getElementById("item-category").value;
      existingItem.description = document.getElementById("item-description").value.trim();
      if (inventoryBalance(existingItem) === 0) existingItem.unit = document.getElementById("item-unit").value;
      existingItem.minLevel = Number(document.getElementById("item-minimum").value);
      saveStorage("agrimill-inventory-items", items);
      close();
      renderApp();
      showToast("Product details and minimum stock level updated.");
      return;
    }
    const nextSku = items.reduce((max, item) => {
      const match = String(item.sku).match(/^SKU-(\d+)$/);
      return match ? Math.max(max, Number(match[1])) : max;
    }, 0) + 1;
    const openingBalance = Number(document.getElementById("item-opening").value);
    const item = {
      sku: `SKU-${String(nextSku).padStart(4, "0")}`,
      name,
      category: document.getElementById("item-category").value,
      description: document.getElementById("item-description").value.trim(),
      unit: document.getElementById("item-unit").value,
      minLevel: Number(document.getElementById("item-minimum").value),
      balances: { [document.getElementById("item-warehouse").value]: 0 }
    };
    const previousItems = JSON.stringify(items);
    items.unshift(item);
    if (!saveStorage("agrimill-inventory-items", items)) return;
    if (openingBalance > 0) {
      const errorMessage = recordStockMovement(item.sku, "Opening balance", openingBalance, {
        toWarehouse: document.getElementById("item-warehouse").value,
        reference: "OPENING",
        notes: "Opening stock on product creation",
        domain
      });
      if (errorMessage) {
        try {
          localStorage.setItem("agrimill-inventory-items", previousItems);
        } catch (error) {
          console.error("Could not roll back a product after its opening stock failed.", error);
        }
        document.getElementById("inventory-item-error").textContent = errorMessage;
        return;
      }
    }
    close();
    renderApp();
    showToast("Inventory product saved.");
  });
}

function openInventoryPurchaseModal(moduleId = currentModule) {
  const isStoresPurchase = moduleId === "storesPurchases" || moduleId === "stores";
  const items = getItemsForModule(moduleId).map(entry => entry.item).filter(item =>
    isStoresPurchase || item.category.toLowerCase() !== "raw material" || !/\bpaddy\b/i.test(item.name));
  if (!items.length) {
    showToast(isStoresPurchase
      ? "Add a product to this department before recording a purchase."
      : "Use the Purchases register for Paddy receipts so the RST, bag count, and weighment are linked to dryer production.");
    return;
  }
  const purchaseLabel = isStoresPurchase ? "Stores" : "Inventory";
  const today = formatLocalDate(new Date());
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = `<form class="modal purchase-modal" id="inventory-purchase-form"><div class="modal-header"><h2>Record ${purchaseLabel.toLowerCase()} purchase</h2><button type="button" class="close-btn" aria-label="Close">×</button></div>
    <p class="purchase-form-note">Saving this purchase also adds the received quantity to the selected warehouse and stock movement ledger.${isStoresPurchase ? "" : " For Paddy receipts, use the Purchases register to capture the weighment slip and bag data for production."}</p>
    <div class="form-grid">
      <div class="field full"><label for="purchase-item">Product *</label><select id="purchase-item" required>${items.map(item => `<option value="${escapeHtml(item.sku)}">${escapeHtml(item.sku)} · ${escapeHtml(item.name)} (${escapeHtml(item.category)} · ${escapeHtml(item.unit)})</option>`).join("")}</select></div>
      <div class="field"><label for="purchase-vendor">Vendor / supplier *</label><input id="purchase-vendor" list="inventory-vendor-list" autocomplete="organization" required maxlength="120" placeholder="Vendor's legal / trading name"><datalist id="inventory-vendor-list">${[...new Set(getPurchasesForModule(moduleId).map(entry => entry.record[6]).filter(Boolean))].map(vendor => `<option value="${escapeHtml(vendor)}"></option>`).join("")}</datalist></div>
      <div class="field"><label for="purchase-invoice">Vendor invoice number</label><input id="purchase-invoice" maxlength="60" placeholder="Enter invoice / bill number"></div>
      <div class="field"><label for="purchase-date">Purchase / receipt date *</label><input id="purchase-date" type="date" value="${today}" required></div>
      <div class="field"><label for="purchase-quantity">Quantity received *</label><input id="purchase-quantity" type="number" min="0.001" step="0.001" required></div>
      <div class="field"><label for="purchase-unit-price">Unit price (₹) *</label><input id="purchase-unit-price" type="number" min="0" step="0.01" required></div>
      <div class="field"><label for="purchase-tax-rate">Tax rate (%)</label><input id="purchase-tax-rate" type="number" min="0" max="100" step="0.01" value="0"></div>
      <div class="field"><label for="purchase-tax-amount">Tax amount (₹)</label><input id="purchase-tax-amount" readonly value="₹ 0.00"></div>
      <div class="field"><label for="purchase-total">Invoice total (₹)</label><input id="purchase-total" readonly value="₹ 0.00"></div>
      <div class="field"><label for="purchase-warehouse">Received into warehouse *</label><select id="purchase-warehouse" required>${getWarehouseOptions(moduleId).map(warehouse => `<option>${escapeHtml(warehouse)}</option>`).join("")}</select></div>
      <div class="field"><label for="purchase-payment-status">Payment status *</label><select id="purchase-payment-status" required><option>Unpaid</option><option>Partially paid</option><option>Paid</option></select></div>
      <div class="field"><label for="purchase-order-reference">PO / reference</label><input id="purchase-order-reference" maxlength="80" placeholder="Purchase order or reference"></div>
      <div class="field full"><label for="purchase-notes">Product condition / notes</label><input id="purchase-notes" maxlength="240" placeholder="Optional quality, batch, warranty or other details"></div>
    </div><div class="form-error" id="purchase-error" role="alert"></div>
    <div class="modal-actions"><button type="button" class="secondary-btn" data-close-modal>Cancel</button><button type="submit" class="primary-btn">Save purchase & receive stock</button></div></form>`;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  const recalculateTotals = () => {
    const quantity = Number(modal.querySelector("#purchase-quantity").value);
    const unitPrice = Number(modal.querySelector("#purchase-unit-price").value);
    const taxRate = Number(modal.querySelector("#purchase-tax-rate").value);
    const subtotal = quantity * unitPrice;
    const tax = subtotal * taxRate / 100;
    modal.querySelector("#purchase-tax-amount").value = `₹ ${tax.toFixed(2)}`;
    modal.querySelector("#purchase-total").value = `₹ ${(subtotal + tax).toFixed(2)}`;
  };
  ["purchase-quantity", "purchase-unit-price", "purchase-tax-rate"].forEach(id => modal.querySelector(`#${id}`).addEventListener("input", recalculateTotals));
  modal.querySelector(".close-btn").addEventListener("click", close);
  modal.querySelector("[data-close-modal]").addEventListener("click", close);
  modal.addEventListener("click", event => { if (event.target === modal) close(); });
  modal.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const sku = modal.querySelector("#purchase-item").value;
    const item = items.find(candidate => candidate.sku === sku);
    const vendor = modal.querySelector("#purchase-vendor").value.trim();
    const invoice = modal.querySelector("#purchase-invoice").value.trim();
    const purchaseDate = modal.querySelector("#purchase-date").value;
    const quantity = Number(modal.querySelector("#purchase-quantity").value);
    const unitPrice = Number(modal.querySelector("#purchase-unit-price").value);
    const taxRate = Number(modal.querySelector("#purchase-tax-rate").value);
    const warehouse = modal.querySelector("#purchase-warehouse").value;
    if (!item || !vendor || !purchaseDate || !warehouse || !Number.isFinite(quantity) || quantity <= 0 || !Number.isFinite(unitPrice) || unitPrice < 0 || !Number.isFinite(taxRate) || taxRate < 0 || taxRate > 100) {
      modal.querySelector("#purchase-error").textContent = "Check that product, vendor, date, warehouse, quantity, unit price, and tax rate are valid.";
      return;
    }
    const purchaseRows = getInventoryPurchaseRows();
    if (invoice && purchaseRows.some(row => String(row[7]).toLowerCase() === invoice.toLowerCase() && String(row[6]).toLowerCase() === vendor.toLowerCase())) {
      modal.querySelector("#purchase-error").textContent = "This vendor invoice has already been recorded. Check the vendor and invoice number to avoid duplicate stock.";
      return;
    }
    const nextNumber = purchaseRows.reduce((max, row) => {
      const match = String(row[0]).match(/^STP-\d{4}-(\d+)$/);
      return match ? Math.max(max, Number(match[1])) : max;
    }, 0) + 1;
    const purchaseId = `STP-${new Date(`${purchaseDate}T12:00:00`).getFullYear()}-${String(nextNumber).padStart(5, "0")}`;
    const subtotal = quantity * unitPrice;
    const taxAmount = subtotal * taxRate / 100;
    const total = subtotal + taxAmount;
    const previousItems = JSON.stringify(getInventoryItems());
    const previousMovements = JSON.stringify(getMovementRows());
    const errorMessage = recordStockMovement(sku, "Receipt", quantity, {
      toWarehouse: warehouse,
      reference: purchaseId,
      notes: [vendor, invoice && `Invoice ${invoice}`, modal.querySelector("#purchase-order-reference").value.trim(), modal.querySelector("#purchase-notes").value.trim()].filter(Boolean).join(" · "),
      date: purchaseDate,
      domain: isStoresPurchase ? "stores" : "inventory"
    });
    if (errorMessage) {
      modal.querySelector("#purchase-error").textContent = errorMessage;
      return;
    }
    const now = new Date();
    purchaseRows.unshift([
      purchaseId,
      purchaseDate,
      now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      item.sku,
      item.name,
      item.category,
      vendor,
      invoice || "—",
      formatQuantity(quantity),
      item.unit,
      unitPrice.toFixed(2),
      `${taxRate.toFixed(2)}% (₹ ${taxAmount.toFixed(2)})`,
      total.toFixed(2),
      warehouse,
      modal.querySelector("#purchase-payment-status").value,
      currentUser.name
    ]);
    if (!saveStorage("agrimill-inventory-purchases", purchaseRows)) {
      try {
        localStorage.setItem("agrimill-inventory-items", previousItems);
        localStorage.setItem("agrimill-stockMovement", previousMovements);
      } catch (error) {
        console.error("Could not roll back stock after a failed purchase save.", error);
      }
      modal.querySelector("#purchase-error").textContent = "The purchase register could not be saved, so the inventory receipt was rolled back. Try again.";
      return;
    }
    close();
    renderApp();
    showToast(`Purchase ${purchaseId} recorded. Stock balance updated.`);
  });
}

function recordStockMovement(sku, movementType, quantity, details) {
  const items = getInventoryItems();
  const item = items.find(candidate => candidate.sku === sku);
  if (!item) return "The selected product could not be found.";
  const domain = details.domain || getProductDomain(item);
  if (getProductDomain(item) !== domain) return "This product belongs to the other stock department and cannot be moved here.";
  if (domain === "stores" && movementType === "Issue" && (!String(details.issuedTo || "").trim() || !String(details.purpose || "").trim())) {
    return "For a Stores issue, enter the recipient and issue purpose or requisition.";
  }
  const ledger = getMovementRows();
  const previousItems = JSON.stringify(items);
  if (!Number.isFinite(quantity) || quantity === 0) return "Enter a valid non-zero quantity.";
  const fromWarehouse = details.fromWarehouse || "";
  const toWarehouse = details.toWarehouse || "";
  if (movementType === "Receipt" || movementType === "Opening balance") {
    if (quantity < 0 || !toWarehouse) return "Choose a receiving warehouse and enter a positive quantity.";
  } else if (movementType === "Issue") {
    if (quantity <= 0 || !fromWarehouse) return "Choose an issuing warehouse and enter a positive quantity.";
    if (Number(item.balances[fromWarehouse] || 0) < quantity) return `Insufficient balance in ${fromWarehouse}. Available: ${formatQuantity(item.balances[fromWarehouse] || 0)} ${item.unit}.`;
  } else if (movementType === "Transfer") {
    if (quantity <= 0 || !fromWarehouse || !toWarehouse || fromWarehouse === toWarehouse) return "Choose different source and destination warehouses and enter a positive quantity.";
    if (Number(item.balances[fromWarehouse] || 0) < quantity) return `Insufficient balance in ${fromWarehouse}. Available: ${formatQuantity(item.balances[fromWarehouse] || 0)} ${item.unit}.`;
  } else if (movementType === "Adjustment") {
    if (!fromWarehouse && !toWarehouse) return "Choose the warehouse to adjust.";
    if (quantity < 0 && !fromWarehouse) return "Choose the warehouse to remove adjusted stock from.";
    if (quantity > 0 && !toWarehouse) return "Choose the warehouse to add adjusted stock to.";
    if (quantity < 0 && Number(item.balances[fromWarehouse] || 0) < Math.abs(quantity)) return `Insufficient balance in ${fromWarehouse} for this adjustment.`;
  }

  if (movementType === "Receipt" || movementType === "Opening balance") item.balances[toWarehouse] = Number(item.balances[toWarehouse] || 0) + quantity;
  if (movementType === "Issue") item.balances[fromWarehouse] = Number(item.balances[fromWarehouse] || 0) - quantity;
  if (movementType === "Transfer") {
    item.balances[fromWarehouse] = Number(item.balances[fromWarehouse] || 0) - quantity;
    item.balances[toWarehouse] = Number(item.balances[toWarehouse] || 0) + quantity;
  }
  if (movementType === "Adjustment") {
    const warehouse = quantity < 0 ? fromWarehouse : toWarehouse;
    item.balances[warehouse] = Number(item.balances[warehouse] || 0) + quantity;
  }
  if (!saveStorage("agrimill-inventory-items", items)) return "Stock balances could not be saved. No movement was recorded.";
  const movementNumber = ledger.reduce((max, row) => {
    const match = String(row[0]).match(/^MOV-\d{4}-(\d+)$/);
    return match ? Math.max(max, Number(match[1])) : max;
  }, 0) + 1;
  const now = new Date();
  const quantityLabel = movementType === "Transfer"
    ? formatQuantity(quantity)
    : movementType === "Issue"
      ? `-${formatQuantity(quantity)}`
      : `${quantity > 0 ? "+" : ""}${formatQuantity(quantity)}`;
  const fromLabel = movementType === "Receipt" || movementType === "Opening balance" || (movementType === "Adjustment" && quantity > 0) ? "—" : fromWarehouse;
  const toLabel = movementType === "Issue" || (movementType === "Adjustment" && quantity < 0) ? "—" : toWarehouse;
  ledger.unshift([
    `MOV-${now.getFullYear()}-${String(movementNumber).padStart(5, "0")}`,
    details.date || formatLocalDate(now),
    now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
    item.sku,
    item.name,
    movementType,
    `${quantityLabel} ${item.unit}`,
    fromLabel,
    toLabel,
    `${formatQuantity(inventoryBalance(item))} ${item.unit}`,
    details.reference || "",
    details.notes || "",
    details.issuedTo || "",
    details.purpose || "",
    currentUser.name
  ]);
  if (!saveStorage("agrimill-stockMovement", ledger)) {
    try {
      localStorage.setItem("agrimill-inventory-items", previousItems);
    } catch (error) {
      console.error("Could not roll back inventory after a failed movement save.", error);
    }
    return "The movement ledger could not be saved. The stock balance was rolled back.";
  }
  return "";
}

function openStockMovementModal(moduleId = currentModule) {
  const domain = moduleId === "stores" ? "stores" : "inventory";
  const movementModule = domain === "stores" ? "stockMovement" : "inventoryMovement";
  const items = getItemsForModule(domain).map(entry => entry.item);
  if (!items.length) {
    showToast(`Add a ${domain === "stores" ? "store" : "inventory"} product before recording stock movements.`);
    return;
  }
  const warehouses = getWarehouseOptions(domain);
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = `<form class="modal" id="stock-movement-form"><div class="modal-header"><h2>Record ${domain === "stores" ? "Stores" : "Inventory"} movement</h2><button type="button" class="close-btn" aria-label="Close">×</button></div>
    <div class="form-grid">
      <div class="field full"><label for="movement-item">Product *</label><select id="movement-item" required>${items.map(item => `<option value="${escapeHtml(item.sku)}">${escapeHtml(item.sku)} · ${escapeHtml(item.name)} (${formatQuantity(inventoryBalance(item))} ${escapeHtml(item.unit)} available)</option>`).join("")}</select></div>
      <div class="field"><label for="movement-type">Movement type *</label><select id="movement-type" required><option>Receipt</option><option>Issue</option><option>Transfer</option><option>Adjustment</option></select></div>
      <div class="field"><label for="movement-quantity">Quantity * <span id="quantity-hint">(positive quantity)</span></label><input id="movement-quantity" type="number" step="0.001" min="0.001" required></div>
      <div class="field movement-location" id="from-warehouse-field"><label for="movement-from-warehouse">From warehouse</label><select id="movement-from-warehouse"><option value="">Select source</option>${warehouses.map(warehouse => `<option>${escapeHtml(warehouse)}</option>`).join("")}</select></div>
      <div class="field movement-location" id="to-warehouse-field"><label for="movement-to-warehouse">To warehouse</label><select id="movement-to-warehouse"><option value="">Select destination</option>${warehouses.map(warehouse => `<option>${escapeHtml(warehouse)}</option>`).join("")}</select></div>
      <div class="field"><label for="movement-reference">Reference</label><input id="movement-reference" placeholder="PO, SO, production batch..."></div>
      <div class="field full hidden" id="movement-issue-fields"><label for="movement-issued-to">Issued to (employee / department) *</label><input id="movement-issued-to" maxlength="120" placeholder="Recipient name or department"></div>
      <div class="field full hidden" id="movement-purpose-field"><label for="movement-purpose">Purpose / requisition *</label><input id="movement-purpose" maxlength="240" placeholder="Reason for issue, work order, or requisition number"></div>
      <div class="field"><label for="movement-notes">Notes</label><input id="movement-notes" placeholder="Optional notes"></div>
    </div><div class="form-error" id="movement-error" role="alert"></div>
    <div class="modal-actions"><button type="button" class="secondary-btn" data-close-modal>Cancel</button><button type="submit" class="primary-btn">Save movement</button></div></form>`;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  const typeSelect = modal.querySelector("#movement-type");
  const updateMovementFields = () => {
    const type = typeSelect.value;
    const from = modal.querySelector("#from-warehouse-field");
    const to = modal.querySelector("#to-warehouse-field");
    const fromInput = modal.querySelector("#movement-from-warehouse");
    const toInput = modal.querySelector("#movement-to-warehouse");
    from.classList.toggle("hidden", type === "Receipt" || (type === "Adjustment" && Number(modal.querySelector("#movement-quantity").value) > 0));
    to.classList.toggle("hidden", type === "Issue" || (type === "Adjustment" && Number(modal.querySelector("#movement-quantity").value) < 0));
    fromInput.required = ["Issue", "Transfer"].includes(type);
    toInput.required = ["Receipt", "Transfer"].includes(type);
    const needsIssueDetails = domain === "stores" && type === "Issue";
    modal.querySelector("#movement-issue-fields").classList.toggle("hidden", !needsIssueDetails);
    modal.querySelector("#movement-purpose-field").classList.toggle("hidden", !needsIssueDetails);
    modal.querySelector("#movement-issued-to").required = needsIssueDetails;
    modal.querySelector("#movement-purpose").required = needsIssueDetails;
    const quantity = modal.querySelector("#movement-quantity");
    quantity.min = type === "Adjustment" ? "" : "0.001";
    quantity.placeholder = type === "Adjustment" ? "Use negative to reduce stock" : "Enter quantity";
    modal.querySelector("#quantity-hint").textContent = type === "Adjustment" ? "(negative reduces stock)" : "(positive quantity)";
  };
  typeSelect.addEventListener("change", updateMovementFields);
  modal.querySelector("#movement-quantity").addEventListener("input", updateMovementFields);
  updateMovementFields();
  modal.querySelector(".close-btn").addEventListener("click", close);
  modal.querySelector("[data-close-modal]").addEventListener("click", close);
  modal.addEventListener("click", event => { if (event.target === modal) close(); });
  modal.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const itemSku = modal.querySelector("#movement-item").value;
    const type = typeSelect.value;
    const quantity = Number(modal.querySelector("#movement-quantity").value);
    const errorMessage = recordStockMovement(itemSku, type, quantity, {
      fromWarehouse: modal.querySelector("#movement-from-warehouse").value,
      toWarehouse: modal.querySelector("#movement-to-warehouse").value,
      reference: modal.querySelector("#movement-reference").value.trim(),
      notes: modal.querySelector("#movement-notes").value.trim(),
      issuedTo: modal.querySelector("#movement-issued-to").value.trim(),
      purpose: modal.querySelector("#movement-purpose").value.trim(),
      domain
    });
    if (errorMessage) {
      modal.querySelector("#movement-error").textContent = errorMessage;
      return;
    }
    close();
    renderApp();
    showToast("Stock movement recorded. Balances updated.");
  });
}

function printReport(reportName, dateLabel, timeLabel, reportTables) {
  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    showToast("The report window was blocked. Allow pop-ups and try again.");
    return;
  }
  const title = `${reportName} Report`;
  printWindow.document.open();
  printWindow.document.write(`<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${escapeHtml(title)}</title>
    <style>
      *{box-sizing:border-box}body{margin:0;padding:32px;color:#23332a;font:12px Arial,sans-serif}.brand{display:flex;align-items:center;gap:10px;padding-bottom:18px;border-bottom:2px solid #214f39}.mark{width:34px;height:34px;display:grid;place-items:center;border-radius:9px;color:#214f39;background:#e8f1ea;font-size:21px}.brand strong{display:block;font-size:16px}.brand small{display:block;margin-top:3px;color:#78827a;font-size:10px}.title{margin:23px 0}.title h1{margin:0 0 6px;font-size:22px}.title p,.footer{color:#78827a;font-size:10px}.section{margin:22px 0;break-inside:avoid}.section h2{margin:0 0 10px;font-size:15px}.empty{color:#78827a;font-style:italic}table{width:100%;border-collapse:collapse;font-size:10px}th{padding:9px 8px;color:#526158;background:#f2f5f1;text-align:left;text-transform:uppercase;font-size:9px}td{padding:8px;border-bottom:1px solid #e8ece7;vertical-align:top;overflow-wrap:anywhere}.footer{margin-top:30px;padding-top:10px;border-top:1px solid #e8ece7}
      @page{size:auto;margin:15mm}@media print{body{padding:0}.section{break-inside:avoid}thead{display:table-header-group}tr{break-inside:avoid}}
    </style></head><body><header class="brand"><span class="mark">❋</span><div><strong>RiceMill ERP Solutions</strong><small>Rice mill management</small></div></header>
    <div class="title"><h1>${escapeHtml(title)}</h1><p>Generated ${escapeHtml(dateLabel)} at ${escapeHtml(timeLabel)} · Prepared by ${escapeHtml(currentUser.name)}</p></div>
    ${reportTables.replace(/class="report-section"/g, 'class="section"').replace(/<h3>/g, "<h2>").replace(/<\/h3>/g, "</h2>").replace(/class="report-empty"/g, 'class="empty"')}
    <footer class="footer">Generated by RiceMill ERP Solutions · ${escapeHtml(currentUser.role)}</footer></body></html>`);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function openDryerBatchModal() {
  if (!migrateLegacyPaddyPurchases()) return;
  const purchases = getPaddyPurchases().filter(purchase => getRemainingPurchaseBags(purchase) > 0);
  if (!purchases.length) {
    showToast("Record a Paddy purchase with a unique RST, bag count, and unloaded weight before adding a dryer batch.");
    return;
  }
  const dryers = ["D1 (INDUSS 32MT)", "D2 (DULICHAND 32MT)", "D3 (SKF 40MT)", "D4 (INDUSS 40MT)", "D5 (INDUSS 40MT)"];
  const today = formatLocalDate(new Date());
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = `<form class="modal" id="dryer-batch-form"><div class="modal-header"><h2>Record dryer-side Paddy intake</h2><button type="button" class="close-btn" aria-label="Close">×</button></div><p class="purchase-form-note">Select a purchase weighment slip. Paddy type and average bag weight are fetched from Purchase; entering bag count calculates input weight and transfers stock to Production floor.</p>
    <div class="form-grid">
      <div class="field"><label for="dryer-date">Batch date *</label><input id="dryer-date" type="date" value="${today}" required></div>
      <div class="field"><label for="dryer-number">Dryer *</label><select id="dryer-number" required><option value="" selected disabled>Select dryer</option>${dryers.map(dryer => `<option>${escapeHtml(dryer)}</option>`).join("")}</select></div>
      <div class="field full"><label for="dryer-purchase">Purchase RST / weighment slip *</label><select id="dryer-purchase" required><option value="" selected disabled>Select a purchase slip</option>${purchases.map(purchase => `<option value="${escapeHtml(purchase[9])}">${escapeHtml(purchase[9])} · ${escapeHtml(purchase[5])} · ${formatQuantity(getRemainingPurchaseBags(purchase))} bags remaining</option>`).join("")}</select></div>
      <div class="field"><label for="dryer-paddy-type">Paddy type</label><input id="dryer-paddy-type" readonly placeholder="Fetched from purchase"></div>
      <div class="field"><label for="dryer-average-weight">Average weight / bag (kg)</label><input id="dryer-average-weight" readonly placeholder="Fetched from purchase"></div>
      <div class="field"><label for="dryer-bags">No. of Bags *</label><input id="dryer-bags" type="number" min="1" step="1" required></div>
      <div class="field"><label for="dryer-paddy-weight">Paddy input (kg)</label><input id="dryer-paddy-weight" readonly placeholder="Calculated from bags"></div>
      <div class="field"><label for="dryer-moisture-before">Moisture before drying (%)</label><input id="dryer-moisture-before" type="number" min="0" max="100" step="0.01"></div>
      <div class="field"><label for="dryer-moisture-after">Moisture after drying (%)</label><input id="dryer-moisture-after" type="number" min="0" max="100" step="0.01"></div>
      <div class="field"><label for="dryer-status">Status</label><input id="dryer-status" value="Ready for milling" readonly></div>
    </div><div class="form-error" id="dryer-error" role="alert"></div><div class="modal-actions"><button type="button" class="secondary-btn" data-close-modal>Cancel</button><button type="submit" class="primary-btn">Save dryer batch & transfer Paddy</button></div></form>`;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  const selectedPurchase = () => purchases.find(purchase => purchase[9] === modal.querySelector("#dryer-purchase").value);
  const updateCalculatedFields = () => {
    const purchase = selectedPurchase();
    const average = purchase ? parseQuantity(purchase[8]) : 0;
    const bags = Number(modal.querySelector("#dryer-bags").value);
    modal.querySelector("#dryer-paddy-type").value = purchase ? purchase[5] : "";
    modal.querySelector("#dryer-average-weight").value = average > 0 ? average.toFixed(3) : "";
    modal.querySelector("#dryer-bags").max = purchase ? String(getRemainingPurchaseBags(purchase)) : "";
    modal.querySelector("#dryer-paddy-weight").value = bags > 0 && average > 0 ? (bags * average).toFixed(3) : "";
  };
  modal.querySelector("#dryer-purchase").addEventListener("change", updateCalculatedFields);
  modal.querySelector("#dryer-bags").addEventListener("input", updateCalculatedFields);
  modal.querySelector(".close-btn").addEventListener("click", close);
  modal.querySelector("[data-close-modal]").addEventListener("click", close);
  modal.addEventListener("click", event => { if (event.target === modal) close(); });
  modal.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const purchase = selectedPurchase();
    const bags = Number(modal.querySelector("#dryer-bags").value);
    const average = purchase ? parseQuantity(purchase[8]) : 0;
    const weight = bags * average;
    if (!purchase || !Number.isInteger(bags) || bags < 1 || bags > getRemainingPurchaseBags(purchase) || weight <= 0) {
      modal.querySelector("#dryer-error").textContent = "Choose a valid purchase slip and enter a whole bag count within its remaining purchased quantity.";
      return;
    }
    const itemsSnapshot = JSON.stringify(getInventoryItems());
    const movementSnapshot = JSON.stringify(getMovementRows());
    const storageSnapshot = captureStorage(["agrimill-inventory-items", "agrimill-stockMovement", "agrimill-dryerBatches"]);
    const paddyItem = ensureInventoryProduct(purchase[5], "Raw material");
    if (!paddyItem) return;
    const year = new Date().getFullYear();
    const batches = getRecords("dryerBatches");
    const nextNumber = batches.reduce((max, batch) => {
      const match = String(batch[0]).match(/^DRY-\d{4}-(\d+)$/);
      return match ? Math.max(max, Number(match[1])) : max;
    }, 0) + 1;
    const batchId = `DRY-${year}-${String(nextNumber).padStart(4, "0")}`;
    const dryer = modal.querySelector("#dryer-number").value;
    const error = recordStockMovement(paddyItem.sku, "Transfer", weight, {
      fromWarehouse: purchase[10],
      toWarehouse: "Production floor",
      reference: batchId,
      notes: `Dryer intake · ${purchase[9]} · ${bags} bags`,
      date: modal.querySelector("#dryer-date").value,
      domain: "inventory"
    });
    if (error) {
      modal.querySelector("#dryer-error").textContent = error;
      return;
    }
    batches.unshift([
      batchId,
      modal.querySelector("#dryer-date").value,
      dryer,
      purchase[5],
      purchase[9],
      String(bags),
      average.toFixed(3),
      weight.toFixed(3),
      modal.querySelector("#dryer-moisture-before").value,
      modal.querySelector("#dryer-moisture-after").value,
      weight.toFixed(3),
      modal.querySelector("#dryer-status").value
    ]);
    if (!saveStorage("agrimill-dryerBatches", batches)) {
      restoreStorage({ ...storageSnapshot, "agrimill-inventory-items": itemsSnapshot, "agrimill-stockMovement": movementSnapshot }, "dryer batch");
      modal.querySelector("#dryer-error").textContent = "The dryer batch could not be saved, so its Paddy transfer was rolled back.";
      return;
    }
    close();
    renderApp();
    showToast(`${batchId} recorded. ${formatQuantity(weight)} kg transferred to Production floor.`);
  });
}

function openMillingRunModal() {
  const batches = getRecords("dryerBatches").filter(batch => batch[11] === "Ready for milling" && getRemainingDryerWeight(batch) > 0);
  if (!batches.length) {
    showToast("Record a dryer batch with Paddy remaining before recording a milling run.");
    return;
  }
  const outputs = ["Rice", "Broken Rice", "Rejection Rice", "Nakku", "Bran", "Silky Bran", "Husk"];
  const mills = ["Mill 1 (OLD)", "Mill 2 (NEW MILL)"];
  const today = formatLocalDate(new Date());
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = `<form class="modal" id="milling-run-form"><div class="modal-header"><h2>Record milling conversion</h2><button type="button" class="close-btn" aria-label="Close">×</button></div><p class="purchase-form-note">Choose a dryer batch and enter Paddy processed. Output quantities are stocked separately in Finished goods; total recovery and variance are calculated for analysis.</p>
    <div class="form-grid">
      <div class="field"><label for="milling-date">Milling date *</label><input id="milling-date" type="date" value="${today}" required></div>
      <div class="field"><label for="milling-machine">Mill *</label><select id="milling-machine" required><option value="" selected disabled>Select mill</option>${mills.map(mill => `<option>${escapeHtml(mill)}</option>`).join("")}</select></div>
      <div class="field full"><label for="milling-batch">Dryer batch *</label><select id="milling-batch" required><option value="" selected disabled>Select a dryer batch</option>${batches.map(batch => `<option value="${escapeHtml(batch[0])}">${escapeHtml(batch[0])} · ${escapeHtml(batch[2])} · ${escapeHtml(batch[3])} · ${formatQuantity(getRemainingDryerWeight(batch))} kg remaining</option>`).join("")}</select></div>
      <div class="field"><label for="milling-paddy-type">Paddy type</label><input id="milling-paddy-type" readonly></div>
      <div class="field"><label for="milling-remaining">Remaining in dryer batch (kg)</label><input id="milling-remaining" readonly></div>
      <div class="field"><label for="milling-paddy-input">Paddy input (kg) *</label><input id="milling-paddy-input" type="number" min="0.001" step="0.001" required></div>
      ${outputs.map((name, index) => `<div class="field"><label for="milling-output-${index}">${escapeHtml(name)} (kg) *</label><input id="milling-output-${index}" type="number" min="0" step="0.001" value="0" required></div>`).join("")}
      <div class="field"><label for="milling-total-output">Total output (kg)</label><input id="milling-total-output" readonly></div>
      <div class="field"><label for="milling-recovery">Recovery (%)</label><input id="milling-recovery" readonly></div>
      <div class="field"><label for="milling-variance">Unrecovered / variance (kg)</label><input id="milling-variance" readonly></div>
    </div><div class="form-error" id="milling-error" role="alert"></div><div class="modal-actions"><button type="button" class="secondary-btn" data-close-modal>Cancel</button><button type="submit" class="primary-btn">Save milling run & update stock</button></div></form>`;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  const selectedBatch = () => batches.find(batch => batch[0] === modal.querySelector("#milling-batch").value);
  const recalculate = () => {
    const batch = selectedBatch();
    const remaining = batch ? getRemainingDryerWeight(batch) : 0;
    const input = Number(modal.querySelector("#milling-paddy-input").value);
    const total = outputs.reduce((sum, _, index) => sum + Number(modal.querySelector(`#milling-output-${index}`).value || 0), 0);
    modal.querySelector("#milling-paddy-type").value = batch ? batch[3] : "";
    modal.querySelector("#milling-remaining").value = batch ? remaining.toFixed(3) : "";
    modal.querySelector("#milling-paddy-input").max = batch ? String(remaining) : "";
    modal.querySelector("#milling-total-output").value = total.toFixed(3);
    modal.querySelector("#milling-recovery").value = input > 0 ? `${((total / input) * 100).toFixed(2)}%` : "";
    modal.querySelector("#milling-variance").value = input > 0 ? (input - total).toFixed(3) : "";
  };
  modal.querySelector("#milling-batch").addEventListener("change", recalculate);
  modal.querySelector("#milling-paddy-input").addEventListener("input", recalculate);
  outputs.forEach((_, index) => modal.querySelector(`#milling-output-${index}`).addEventListener("input", recalculate));
  modal.querySelector(".close-btn").addEventListener("click", close);
  modal.querySelector("[data-close-modal]").addEventListener("click", close);
  modal.addEventListener("click", event => { if (event.target === modal) close(); });
  modal.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const batch = selectedBatch();
    const input = Number(modal.querySelector("#milling-paddy-input").value);
    const outputWeights = outputs.map((_, index) => Number(modal.querySelector(`#milling-output-${index}`).value));
    const total = outputWeights.reduce((sum, quantity) => sum + quantity, 0);
    if (!batch || !Number.isFinite(input) || input <= 0 || input > getRemainingDryerWeight(batch) || outputWeights.some(weight => !Number.isFinite(weight) || weight < 0) || total <= 0) {
      modal.querySelector("#milling-error").textContent = "Choose a dryer batch with available Paddy, enter a valid input within its remaining weight, and record at least one valid output.";
      return;
    }
    const snapshot = captureStorage(["agrimill-inventory-items", "agrimill-stockMovement", "agrimill-millingRuns"]);
    const paddyItem = getInventoryItems().find(item => item.name.toLowerCase() === batch[3].toLowerCase());
    if (!paddyItem) {
      modal.querySelector("#milling-error").textContent = `Inventory product for ${batch[3]} could not be found.`;
      return;
    }
    const year = new Date().getFullYear();
    const runs = getMillingRuns();
    const nextNumber = runs.reduce((max, run) => {
      const match = String(run[0]).match(/^MIL-\d{4}-(\d+)$/);
      return match ? Math.max(max, Number(match[1])) : max;
    }, 0) + 1;
    const runId = `MIL-${year}-${String(nextNumber).padStart(4, "0")}`;
    const runDate = modal.querySelector("#milling-date").value;
    const stockError = recordStockMovement(paddyItem.sku, "Issue", input, {
      fromWarehouse: "Production floor",
      reference: runId,
      notes: `Milling consumption · dryer batch ${batch[0]}`,
      date: runDate,
      domain: "inventory"
    });
    if (stockError) {
      modal.querySelector("#milling-error").textContent = stockError;
      return;
    }
    for (let index = 0; index < outputs.length; index += 1) {
      if (outputWeights[index] <= 0) continue;
      const category = index === 0 ? "Finished goods" : "By-product";
      const outputItem = ensureInventoryProduct(outputs[index], category);
      const receiptError = outputItem && recordStockMovement(outputItem.sku, "Receipt", outputWeights[index], {
        toWarehouse: "Finished goods",
        reference: runId,
        notes: `Milling output · dryer batch ${batch[0]}`,
        date: runDate,
        domain: "inventory"
      });
      if (!outputItem || receiptError) {
        restoreStorage(snapshot, "milling stock updates");
        modal.querySelector("#milling-error").textContent = receiptError || `Could not create inventory product ${outputs[index]}.`;
        return;
      }
    }
    const remaining = getRemainingDryerWeight(batch) - input;
    const recovery = (total / input) * 100;
    const run = [
      runId,
      runDate,
      batch[0],
      batch[3],
      modal.querySelector("#milling-machine").value,
      input.toFixed(3),
      ...outputWeights.map(weight => weight.toFixed(3)),
      total.toFixed(3),
      `${recovery.toFixed(2)}%`,
      (input - total).toFixed(3),
      "Completed"
    ];
    runs.unshift(run);
    if (!saveStorage("agrimill-millingRuns", runs)) {
      restoreStorage(snapshot, "milling run");
      modal.querySelector("#milling-error").textContent = "The milling run could not be saved, so its stock movements were rolled back.";
      return;
    }
    const dryerRows = getProductionRows("dryerBatches");
    const updatedBatch = dryerRows.find(row => row[0] === batch[0]);
    if (updatedBatch) {
      updatedBatch[10] = Math.max(0, parseQuantity(updatedBatch[7]) - getMillingRuns().filter(row => row[2] === batch[0]).reduce((sum, row) => sum + parseQuantity(row[5]), 0)).toFixed(3);
      if (!saveStorage("agrimill-dryerBatches", dryerRows)) {
        restoreStorage(snapshot, "milling run");
        modal.querySelector("#milling-error").textContent = "The dryer balance could not be updated, so the milling run and stock movements were rolled back.";
        return;
      }
    }
    close();
    renderApp();
    showToast(`${runId} saved. Milling outputs and stock movements were recorded.`);
  });
}

function openRecordModal(moduleId) {
  if (moduleId === "dryerBatches") return openDryerBatchModal();
  if (moduleId === "millingRuns") return openMillingRunModal();
  const info = moduleInfo[moduleId];
  const salesItems = moduleId === "sales"
    ? getItemsForModule("inventory").map(entry => entry.item).filter(item => inventoryBalance(item) > 0)
    : [];
  const fields = info.fields.map((label, index) => {
      const options = label === "Status"
        ? ["Pending", "Processing", "Completed", "Paid", "In transit", "In stock", "Low stock"]
        : label === "Entry type" ? ["Income", "Expense"]
          : label === "Movement type" ? ["Received", "Dispatched", "Transferred"] : null;
      const isPaddyType = moduleId === "purchases" && label === "Paddy (Raw Material)";
      const isWarehouse = moduleId === "purchases" && label === "Warehouse";
      const isSaleProduct = moduleId === "sales" && label === "Product";
      const isSaleWarehouse = moduleId === "sales" && label === "Warehouse";
      const saleProductOptions = salesItems.map(item => ({ value: item.sku, label: `${item.name} · ${formatQuantity(inventoryBalance(item))} kg available` }));
      const saleWarehouseOptions = [...new Set(salesItems.flatMap(item => Object.keys(item.balances)))].sort();
      return {
        label,
        type: ["No. of Bags", "Weight unloaded (kg)", "Quantity sold (kg)", "Amount"].includes(label)
          ? "number"
          : ["Date", "Order date", "Due date", "Join date"].includes(label) ? "date" : "text",
        min: label === "No. of Bags" ? "1" : label === "Amount" ? "0" : ["Weight unloaded (kg)", "Quantity sold (kg)"].includes(label) ? "0.001" : "",
        step: label === "No. of Bags" ? "1" : label === "Amount" ? "0.01" : "0.001",
        options: isPaddyType ? paddyTypeOptions : isWarehouse ? getWarehouseOptions("inventory") : isSaleProduct ? saleProductOptions : isSaleWarehouse ? saleWarehouseOptions : moduleId === "purchaseOrders" && label === "Items" ? paddyTypeOptions : options,
        paddyType: isPaddyType || moduleId === "purchaseOrders" && label === "Items",
        warehouseSelector: isWarehouse,
        productSelector: isSaleProduct,
        saleWarehouse: isSaleWarehouse,
        computed: moduleId === "purchases" && label === "Average weight / bag (kg)",
        conditionalPaddy: moduleId === "purchases" && ["No. of Bags", "Weight unloaded (kg)", "Average weight / bag (kg)", "RST / weighment slip no.", "Warehouse"].includes(label),
        conditionalSale: moduleId === "sales" && ["Quantity sold (kg)", "Warehouse"].includes(label),
        required: info.fields.indexOf(label) < 2
          || ["Status", "Entry type", "Movement type"].includes(label)
          || ["purchases", "sales"].includes(moduleId) && ["Date", "Amount"].includes(label),
        paddyOptional: isPaddyType,
        saleOptional: isSaleProduct
      };
    });
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.id = "record-modal";
  modal.innerHTML = `<form class="modal" id="record-form"><div class="modal-header"><h2>Add ${moduleId === "employees" ? "employee" : "record"}</h2><button type="button" class="close-btn" aria-label="Close">×</button></div>
    <div class="form-grid">${fields.map((field, index) => {
      const required = field.required ? "required" : "";
      const control = field.options
        ? `<select id="record-field-${index}" ${required}>${field.paddyOptional ? `<option value="" selected>Not a Paddy purchase</option>` : field.saleOptional ? `<option value="" selected>Not linked to inventory</option>` : field.paddyType ? `<option value="" selected disabled>Select Paddy (Raw Material)</option>` : field.saleWarehouse || field.warehouseSelector ? `<option value="" selected disabled>Select ${field.saleWarehouse ? "warehouse" : "receiving warehouse"}</option>` : ""}${field.paddyType ? `<optgroup label="Paddy (Raw Material)">${field.options.map(option => `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>`).join("")}</optgroup><option value="__other__">Specify other type</option>` : field.options.map(option => typeof option === "string" ? `<option value="${escapeHtml(option)}">${escapeHtml(option)}</option>` : `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`).join("")}</select>${field.paddyType ? `<input id="record-field-${index}-other" aria-label="Specify other paddy type" placeholder="Enter other paddy type" maxlength="120" hidden>` : ""}`
        : `<input id="record-field-${index}" type="${field.type || "text"}" ${field.min ? `min="${field.min}"` : ""} ${field.step ? `step="${field.step}"` : ""} ${required} ${field.readonly || field.computed ? "readonly" : ""} placeholder="${field.readonly ? "Calculated automatically" : `Enter ${escapeHtml(field.label.toLowerCase())}`}">`;
      return `<div class="field ${index === 0 || index === 1 ? "full" : ""}" ${field.conditionalPaddy || field.conditionalSale ? "hidden" : ""}><label for="record-field-${index}">${escapeHtml(field.label)}</label>${control}</div>`;
    }).join("")}</div><div class="form-error" id="record-error" role="alert"></div><div class="modal-actions"><button type="button" class="secondary-btn" id="cancel-record">Cancel</button><button type="submit" class="primary-btn">Save record</button></div></form>`;
  document.body.appendChild(modal);
  const close = () => modal.remove();
  fields.forEach((field, index) => {
    if (field.paddyType) {
      const select = modal.querySelector(`#record-field-${index}`);
      const otherInput = modal.querySelector(`#record-field-${index}-other`);
      select.addEventListener("change", () => {
      const specifyOther = select.value === "__other__";
      otherInput.hidden = !specifyOther;
      otherInput.required = specifyOther;
      if (!specifyOther) otherInput.value = "";
      const hasPaddy = Boolean(select.value);
      fields.forEach((dependentField, dependentIndex) => {
        if (!dependentField.conditionalPaddy) return;
        const wrapper = modal.querySelector(`#record-field-${dependentIndex}`).closest(".field");
        const input = modal.querySelector(`#record-field-${dependentIndex}`);
        wrapper.hidden = !hasPaddy;
        input.required = hasPaddy && dependentField.label !== "Average weight / bag (kg)";
        if (!hasPaddy) input.value = "";
      });
      });
    }
    if (field.productSelector) {
      const productSelect = modal.querySelector(`#record-field-${index}`);
      productSelect.addEventListener("change", () => {
        const selectedItem = salesItems.find(item => item.sku === productSelect.value);
        fields.forEach((dependentField, dependentIndex) => {
          if (!dependentField.conditionalSale) return;
          const wrapper = modal.querySelector(`#record-field-${dependentIndex}`).closest(".field");
          const input = modal.querySelector(`#record-field-${dependentIndex}`);
          wrapper.hidden = !selectedItem;
          input.required = Boolean(selectedItem);
          if (!selectedItem) input.value = "";
          if (dependentField.saleWarehouse) {
            const warehouses = selectedItem
              ? Object.entries(selectedItem.balances).filter(([, balance]) => Number(balance) > 0).map(([warehouse]) => warehouse)
              : [];
            input.innerHTML = `<option value="" selected disabled>Select warehouse</option>${warehouses.map(warehouse => `<option value="${escapeHtml(warehouse)}">${escapeHtml(warehouse)} · ${formatQuantity(selectedItem.balances[warehouse])} kg available</option>`).join("")}`;
          }
        });
      });
    }
  });
  if (moduleId === "purchases") {
    const updateAverage = () => {
      const bags = Number(modal.querySelector(`#record-field-${fields.findIndex(field => field.label === "No. of Bags")}`).value);
      const unloadedWeight = Number(modal.querySelector(`#record-field-${fields.findIndex(field => field.label === "Weight unloaded (kg)")}`).value);
      const average = fields.findIndex(field => field.label === "Average weight / bag (kg)");
      modal.querySelector(`#record-field-${average}`).value = bags > 0 && unloadedWeight > 0 ? (unloadedWeight / bags).toFixed(3) : "";
    };
    ["No. of Bags", "Weight unloaded (kg)"].forEach(label =>
      modal.querySelector(`#record-field-${fields.findIndex(field => field.label === label)}`).addEventListener("input", updateAverage));
  }
  modal.querySelector(".close-btn").addEventListener("click", close);
  modal.querySelector("#cancel-record").addEventListener("click", close);
  modal.addEventListener("click", event => { if (event.target === modal) close(); });
  modal.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    const values = fields.map((field, index) => {
      const value = modal.querySelector(`#record-field-${index}`).value.trim();
      return field.paddyType && value === "__other__"
        ? modal.querySelector(`#record-field-${index}-other`).value.trim()
        : value;
    });
    if (values.some((value, index) => fields[index].required && !value)) return;
    if (moduleId === "purchases") {
      const paddyTypeIndex = fields.findIndex(field => field.paddyOptional);
      if (values[paddyTypeIndex]) {
        const bags = Number(values[fields.findIndex(field => field.label === "No. of Bags")]);
        const weight = Number(values[fields.findIndex(field => field.label === "Weight unloaded (kg)")]);
        const rst = values[fields.findIndex(field => field.label === "RST / weighment slip no.")];
        const warehouse = values[fields.findIndex(field => field.label === "Warehouse")];
        if (!Number.isInteger(bags) || bags < 1 || !Number.isFinite(weight) || weight <= 0 || !rst || !warehouse) {
          showToast("For Paddy purchases, enter a valid bag count, unloaded weight, RST slip number, and receiving warehouse.");
          return;
        }
        const duplicateRst = getRecords(moduleId).some(record => String(record[9]).trim().toLowerCase() === rst.toLowerCase());
        if (duplicateRst) {
          showToast("That RST / weighment slip number is already recorded.");
          return;
        }
      }
    }
    const records = getRecords(moduleId);
    let record = values;
    let stockSnapshot = null;
    if (moduleId === "purchases") {
      const paddyTypeIndex = fields.findIndex(field => field.paddyOptional);
      const bagsIndex = fields.findIndex(field => field.label === "No. of Bags");
      const weightIndex = fields.findIndex(field => field.label === "Weight unloaded (kg)");
      const averageIndex = fields.findIndex(field => field.label === "Average weight / bag (kg)");
      const bags = Number(values[bagsIndex]);
      const unloadedWeight = Number(values[weightIndex]);
      values[averageIndex] = values[paddyTypeIndex] ? (unloadedWeight / bags).toFixed(3) : "";
      record = values;
      if (values[paddyTypeIndex]) {
        const warehouseIndex = fields.findIndex(field => field.label === "Warehouse");
        stockSnapshot = captureStorage(["agrimill-inventory-items", "agrimill-stockMovement", "agrimill-inventory-purchases", `agrimill-${moduleId}`]);
        const paddyItem = ensureInventoryProduct(values[paddyTypeIndex], "Raw material");
        const stockError = paddyItem && recordStockMovement(paddyItem.sku, "Receipt", unloadedWeight, {
          toWarehouse: values[warehouseIndex],
          reference: values[fields.findIndex(field => field.label === "RST / weighment slip no.")],
          notes: `Paddy purchase · ${values[1]} · ${values[0]}`,
          date: values[2] || formatLocalDate(new Date()),
          domain: "inventory"
        });
        if (!paddyItem || stockError) {
          if (stockSnapshot) restoreStorage(stockSnapshot, "Paddy purchase stock");
          modal.querySelector("#record-error").textContent = stockError || "The Paddy inventory product could not be saved.";
          return;
        }
        const rst = values[fields.findIndex(field => field.label === "RST / weighment slip no.")];
        const inventoryPurchases = getInventoryPurchaseRows();
        if (inventoryPurchases.some(purchase => String(purchase[0]).trim().toLowerCase() === rst.toLowerCase())) {
          restoreStorage(stockSnapshot, "Paddy purchase stock");
          modal.querySelector("#record-error").textContent = "This RST already exists in the Inventory purchase register.";
          return;
        }
        const amount = Number(values[fields.findIndex(field => field.label === "Amount")]);
        const purchaseStatus = values[fields.findIndex(field => field.label === "Status")];
        const now = new Date();
        inventoryPurchases.unshift([
          rst,
          values[fields.findIndex(field => field.label === "Date")],
          now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
          paddyItem.sku,
          paddyItem.name,
          paddyItem.category,
          values[1],
          values[0],
          formatQuantity(unloadedWeight),
          "kg",
          unloadedWeight > 0 ? (amount / unloadedWeight).toFixed(2) : "0.00",
          "0% (₹ 0.00)",
          amount.toFixed(2),
          values[fields.findIndex(field => field.label === "Warehouse")],
          purchaseStatus === "Paid" ? "Paid" : "Unpaid",
          currentUser.name
        ]);
        if (!saveStorage("agrimill-inventory-purchases", inventoryPurchases)) {
          restoreStorage(stockSnapshot, "Paddy purchase stock");
          modal.querySelector("#record-error").textContent = "The Inventory purchase register could not be saved, so the Paddy receipt was rolled back.";
          return;
        }
      }
    } else if (moduleId === "sales") {
      const productIndex = fields.findIndex(field => field.productSelector);
      const quantityIndex = fields.findIndex(field => field.label === "Quantity sold (kg)");
      const warehouseIndex = fields.findIndex(field => field.saleWarehouse);
      const item = salesItems.find(candidate => candidate.sku === values[productIndex]);
      if (item) {
        const quantity = Number(values[quantityIndex]);
        const warehouse = values[warehouseIndex];
        if (!Number.isFinite(quantity) || quantity <= 0 || !warehouse || Number(item.balances[warehouse] || 0) < quantity) {
          modal.querySelector("#record-error").textContent = "Choose a stock location and enter a positive quantity no greater than the available balance.";
          return;
        }
        stockSnapshot = captureStorage(["agrimill-inventory-items", "agrimill-stockMovement", `agrimill-${moduleId}`]);
        const stockError = recordStockMovement(item.sku, "Issue", quantity, {
          fromWarehouse: warehouse,
          reference: values[0],
          notes: `Sales invoice · ${values[1]}`,
          date: values[2] || formatLocalDate(new Date()),
          domain: "inventory"
        });
        if (stockError) {
          modal.querySelector("#record-error").textContent = stockError;
          return;
        }
        values[productIndex] = item.name;
        values[quantityIndex] = `${formatQuantity(quantity)} kg`;
        record = values;
      } else {
        values[productIndex] = "—";
        values[quantityIndex] = "—";
        values[warehouseIndex] = "—";
        record = values;
      }
    }
    records.unshift(record);
    if (!saveStorage(`agrimill-${moduleId}`, records)) {
      if (stockSnapshot) restoreStorage(stockSnapshot, "stock-linked record");
      return;
    }
    close();
    renderApp();
    showToast("Record saved successfully.");
  });
}

function exportCsv(moduleId) {
  exportCsvRecords(moduleId, getRecords(moduleId));
}

function exportCsvRecords(moduleId, records) {
  const info = moduleInfo[moduleId];
  const rows = [info.columns, ...records];
  const csv = rows.map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\r\n");
  const link = document.createElement("a");
  link.href = URL.createObjectURL(new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" }));
  link.download = `agrimill-${moduleId}-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("CSV export downloaded.");
}

function showToast(message) {
  document.querySelector(".toast")?.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.remove(), 3000);
}

const savedUser = readStorage("agrimill-user", null);
const savedAccount = savedUser && demoAccounts.find(account => account.email === savedUser.accountId && account.departmentId === savedUser.departmentId);
if (savedAccount) {
  currentUser = savedUser;
  renderApp();
} else {
  localStorage.removeItem("agrimill-user");
  renderLogin();
}

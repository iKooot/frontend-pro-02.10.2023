const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

class ItemDataProvider {
  constructor() {
    this._dataFilePath = path.join(__dirname, "..", "..", "data", "todos.json");
    this._cache = null;
  }

  async getItems() {
    if (this._cache) return this._cache;

    try {
      fs.accessSync(this._dataFilePath);
    } catch (error) {
      this._cache = [];
      console.log("file todos.json is not exist", error);
    }

    const file$ = fs.createReadStream(this._dataFilePath, {
      encoding: "utf-8",
    });

    const data = await new Promise((resolve, reject) => {
      let template = "";

      file$.on("data", (chunk) => {
        template += chunk;
      });

      file$.on("end", () => {
        resolve(template);
      });

      file$.on("error", reject);
    });

    this._cache = JSON.parse(data);
    return this._cache;
  }

  async getItem(itemId) {
    if (!this._cache) {
      this._cache = await this.getItems();
    }

    return this._cache.find(({ id }) => id === itemId);
  }

  async setItem(item) {
    if (!this._cache) {
      this._cache = await this.getItems();
    }

    if (item.id) {
      this._cache = this._cache.map((el) => {
        return el.id === item.id ? item : el;
      });
    } else {
      const parseItem = {
        id: uuidv4(),
        ...item,
      };

      this._cache.push(parseItem);
    }

    const file$ = fs.createWriteStream(this._dataFilePath, {
      encoding: "utf-8",
    });

    file$.end(JSON.stringify(this._cache));
    return item;
  }

  async deleteItem(itemId) {
    if (!this._cache) {
      this._cache = await this.getItems();
    }

    this._cache = this._cache.filter(({ id }) => id !== itemId);
    const file$ = fs.createWriteStream(this._dataFilePath, {
      encoding: "utf-8",
    });

    file$.end(JSON.stringify(this._cache));
  }
}

const itemsProvider = new ItemDataProvider();

module.exports = itemsProvider;

export class LocalStorage {
  static USER_KEY = "user";
  static set(key, data) {
    const preparedData = JSON.stringify(data);
    localStorage.setItem(key, preparedData);
  }

  static get(key) {
    const data = localStorage.getItem(key);

    if (!data) console.warn(`local storage has't data with key ${key}`);
    return JSON.parse(data);
  }

  static reset() {
    localStorage.clear()
  }
}

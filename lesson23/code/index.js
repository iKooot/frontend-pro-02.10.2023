// console.log(navigator.cookieEnabled);
//
// function setCookies(key, value, daysToLive) {
//     const date = new Date();
//     date.setTime(date.getTime() + ( daysToLive * 24 * 60 * 60 * 1000 ));
//     const expires = "expires=" + date.toUTCString();
//     document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; ${expires}; path=/`;
// }
//
// function deleteCookies(key) {
//     setCookies(key, null, null)
// }
//
// function getCookies(key) {
//     const cDecode = decodeURIComponent(document.cookie);
//     const cArray = cDecode.split("; ");
//
//     let result = null;
//
//     cArray.forEach( el => {
//         if (el.indexOf(key) === 0) {
//             result = el.substring(key.length + 1)
//         }
//     })
//
//     return result
// }
//
// setCookies('my name', 'Savchuk', 1);
// deleteCookies('my name');

/****************************************
 * localStorage
 ****************************************/

// localStorage.setItem('name', 'Serhii')
// localStorage.setItem('surname', 'Savchuk')
// console.log(localStorage)
// // localStorage.removeItem('surname');
// console.log(localStorage)
// console.log(localStorage.key(1))
// console.log(localStorage.name)
// localStorage.clear()

// localStorage.setItem('key', 1)
// localStorage.setItem('obj', JSON.stringify({key: 'value'}))
// console.log(JSON.parse(localStorage.getItem('obj')))
//
// console.log(localStorage)
//
// for (const key in localStorage) {
//     if (localStorage.hasOwnProperty(key)) console.log(key);
// }
//
// for (const key of Object.keys(localStorage)) {
//     console.log(key);
// }

/****************************************
 * storage
 ****************************************/

// window.addEventListener('storage', (e) => {
//     console.log(e)
// })
//
// localStorage.setItem('name', "Serhii")

/****************************************
 * example
 ****************************************/
//
// const form = document.forms.form;
// const taskList = document.querySelector("[data-tasks]");
// const clearBtn = document.querySelector("[data-clear-tasks]");
// const storageTasks = JSON.parse(localStorage.getItem("tasks"));
//
// let tasks = [];
// // let tasks = [ ...(storageTasks && storageTasks) ];
//
// if (storageTasks) {
//   tasks = tasks.concat(storageTasks);
// }
//
// if (tasks.length) {
//   clearBtn.classList.remove('d-none')
//   tasks.forEach((el) => {
//     addTask(el);
//   });
// }
//
// function addTask(content) {
//   const li = document.createElement("li");
//   li.classList.add(
//     "list-group-item",
//     "d-flex",
//     "justify-content-between",
//     "align-items-center",
//   );
//   li.textContent = content;
//
//   const removeBtn = document.createElement("span");
//   removeBtn.classList.add("delete-icon");
//
//   const icon = document.createElement("i");
//   icon.classList.add("bi", "bi-trash2-fill");
//
//   removeBtn.addEventListener("click", (e) => {
//     tasks = tasks.filter((el) => el !== e.currentTarget.parentNode.textContent);
//     e.currentTarget.parentNode.remove();
//
//     if (!tasks.length) {
//       clearBtn.classList.add("d-none");
//     }
//
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   });
//
//   removeBtn.insertAdjacentElement("beforeend", icon);
//   li.insertAdjacentElement("beforeend", removeBtn);
//   taskList.insertAdjacentElement("beforeend", li);
// }
//
// form.elements.task.addEventListener("change", (e) => {
//   const value = e.currentTarget.value;
//   if (value) tasks.push(value);
// });
//
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//
//   if (tasks.length) {
//     addTask(tasks[tasks.length - 1]);
//     clearBtn.classList.remove("d-none");
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }
//
//   form.elements.task.value = "";
// });
//
// clearBtn.addEventListener("click", (e) => {
//   e.currentTarget.classList.add("d-none");
//   localStorage.clear();
//   tasks.length = 0;
//   while (taskList.firstChild) {
//     taskList.firstChild.remove();
//   }
// });

/****************************************
 * indexDb
 ****************************************/

class IndexedDBManager {
  constructor(databaseName, storeName) {
    this.databaseName = databaseName;
    this.storeName = storeName;
    this.db = null;
  }

  openDatabase() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.databaseName, 1);

      request.onerror = (event) => {
        reject(`Error opening database: ${event.target.error}`);
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onupgradeneeded = (event) => {
        this.db = event.target.result;
        if (!this.db.objectStoreNames.contains(this.storeName)) {
          this.db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
        }
      };
    });
  }

  closeDatabase() {
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }

  addObject(data) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readwrite');
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.add(data);

      request.onsuccess = (event) => {
        resolve(event.target.result);
      };

      request.onerror = (event) => {
        reject(`Error adding object: ${event.target.error}`);
      };
    });
  }

  getObjectById(id) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction([this.storeName], 'readonly');
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.get(id);

      request.onsuccess = (event) => {
        const result = event.target.result;
        if (result) {
          resolve(result);
        } else {
          reject(`Object with ID ${id} not found`);
        }
      };

      request.onerror = (event) => {
        reject(`Error getting object: ${event.target.error}`);
      };
    });
  }
}

// Example usage:
const dbManager = new IndexedDBManager('MyDatabase', 'MyObjectStore');

dbManager.openDatabase().then(() => {
  const data = { name: 'John Doe', age: 30 };
  return dbManager.addObject(data);
}).then((objectId) => {
  console.log(`Object added with ID: ${objectId}`);
  return dbManager.getObjectById(objectId);
}).then((retrievedObject) => {
  console.log('Retrieved object:', retrievedObject);
  dbManager.closeDatabase();
}).catch((error) => {
  console.error(error);
});

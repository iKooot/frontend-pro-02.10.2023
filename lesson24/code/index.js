/****************************************
 * GET
 ****************************************/
// async function getUsers() {
//     const response = await fetch('https://reqres.in/api/users');
//
//     console.log('headers => ', response.headers)
//
//     for (const [key, value] of response.headers ) {
//         console.log(key, ' => ', value)
//     }
//
//     if (!response.ok) {
//         throw new Error('Ups fetch dont work')
//     }
//
//     const data = await response.json()
//
//     console.log(data)
// }
//
// getUsers()

/****************************************
 * POST
 ****************************************/

// async function postUser() {
//   const user = { name: "Jhon", surname: "Doe" };
//   try {
//       const response = await fetch("https://reqres.in/api/users", {
//           method: "POST",
//           body: JSON.stringify(user),
//           headers: { "Content-Type": "application/json" },
//       });
//
//       if (!response.ok) {
//           new Error("Ups fetch dont work");
//       }
//
//       const data = await response.json();
//
//       console.log(data);
//   } catch (e) {
//       console.log(e)
//   }
// }
//
// postUser();

/****************************************
 * FormData
 ****************************************/

// const form = document.forms['add-user-form'];
//
// form.addEventListener('submit', async (e) => {
//     e.preventDefault();
//
//     const requestBody = new FormData(e.currentTarget);
//
//
//     const response = await fetch("https://reqres.in/api/users", {
//         method: "POST",
//         body: requestBody,
//         headers: { "Content-Type": "multipart/form-data" },
//     })
//
//     const reader = response.body.getReader();
//
//     const contentLength = +response.headers.get('Content-Length');
//
//     let recivLength = 0;
//     let chunks = [];
//
//     while (true) {
//         const { done, value } = await reader.read();
//
//         if (done) {
//             break;
//         }
//
//         chunks.push(value);
//         recivLength += value.length;
//
//         console.log(`Recived ${recivLength} from ${contentLength}`)
//     }
//
//     let chunksAll = new Uint8Array(recivLength);
//     let i = 0;
//
//     for (const chunk of chunks) {
//         chunksAll.set(chunk, i)
//         i += chunk.length
//     }
//
//     const data = new TextDecoder('utf-8').decode(chunksAll);
//     const result = JSON.parse(data)
//
//     console.log(result)
//
// })

/****************************************
 * abort
 ****************************************/

// let controller = new AbortController();
// let signal = controller.signal;
//
// signal.addEventListener('abort', () => {
//     console.log('abort!!!!')
//     console.log(signal.aborted);
// })
//
// //.......
//
// // controller.abort()
//
// //.....
//
// console.log(signal.aborted);
//
// //....
//
// setTimeout( () => {
//     controller.abort()
// }, 1000)

/****************************************
 * example
 ****************************************/

const fetchBtn = document.querySelector("[data-fetch]");
const filmsList = document.querySelector("[data-list]");
const loader = document.querySelector("[data-loader]");

class Fetch {
  static convertUrl(basePath, path) {
    return new URL(path, basePath);
  }
  constructor(url) {
    this.url = url;
    this.abortController = null;
  }

  async get(path, headers) {
    this.abortController = new AbortController();

    const resp = await fetch(Fetch.convertUrl(this.url, path), {
      signal: this.abortController.signal,
      ...(headers && { headers }),
    });

    if (!resp.ok) throw new Error("ups .... ");

    return await resp.json();
  }

  get controller() {
    if (this.abortController) {
      return this.abortController;
    }
  }
}

const swapi = new Fetch("https://swapi.dev/api/");

loader.addEventListener("click", () => {
    swapi.controller.abort()
});

function showLoader(status) {
    switch (status) {
        case 'loading': {
            loader.classList.remove('d-none');
            break;
        }
        case 'success': {
            loader.classList.add('d-none');
            break;
        }
        case 'error': {
            loader.classList.add('d-none');
            break;
        }
        default: {
            break;
        }
    }
}

async function fetcFilms() {
    showLoader('loading');

    try {
        const response = await swapi.get('films');
        showLoader('success');

        response.results.forEach( film => {
            addFilm(film.title)
        })
    } catch (e) {
        console.log(e);
        showLoader('error');
        fetchBtn.classList.remove('d-none')
    }
}

function addFilm(content) {
    const li = document.createElement("li");
    li.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center",
    );
    li.textContent = content;

    const button = document.createElement("button");
    button.classList.add("btn", "btn-link");
    button.textContent = "Show info";

    li.insertAdjacentElement("beforeend", button);
    filmsList.insertAdjacentElement("beforeend", li);
}

fetchBtn.addEventListener('click', (e) => {
    filmsList.classList.remove('d-none');
    e.currentTarget.classList.add('d-none');
    fetcFilms()
})
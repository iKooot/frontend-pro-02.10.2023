const smiles = [
  "&#128526;",
  "&#128540;",
  "&#128525;",
  "&#128520;",
  "&#128553;",
];

class Vote {
  constructor(data, root) {
    this._data = data;
    this._root = root;
  }

  createEl({ type, attributes, data }) {
    const container = document.createElement(type);

    if (attributes)
      Object.entries(attributes).forEach(([key, value]) => {
        container.setAttribute(key, value);
      });
    if (data) container.insertAdjacentHTML('beforeend', data);

    return container;
  }

  createVoteEl(data) {
    const el = this.createEl({
      type: "li",
      attributes: {
        class:
          "list-group-item d-flex justify-content-between align-items-center",
      },
      data,
    });
    const counter = this.createEl({
      type: "span",
      attributes: { class: "badge bg-warning rounded-pill" },
      data: 1,
    });

    el.addEventListener('click', () => {
        counter.textContent++
    })

    el.insertAdjacentElement("beforeend", counter);
    return el;
  }

  createVoteBox() {
    const container = this.createEl({
      type: "div",
      attributes: { class: "container" },
    });
    const tableContainer = this.createEl({
      type: "ul",
      attributes: { class: "list-group" },
    });
    const voteFragment = document.createDocumentFragment();

    this._data.forEach((el) => {
      const cail = this.createVoteEl(el);
      voteFragment.append(cail);
    });

    tableContainer.append(voteFragment);
    container.insertAdjacentElement("beforeend", tableContainer);
    return container;
  }

  init() {
    this._root.insertAdjacentElement("beforeend", this.createVoteBox());
  }
}

new Vote(smiles, document.body).init();

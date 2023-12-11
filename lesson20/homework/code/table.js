const data = Array(10)
  .fill("")
  .map((_, i) => i + 1);

class Table {
  constructor(data) {
    this._data = data;
  }
  createEl({ data, type = "div", attributes }) {
    const $el = document.createElement(type);

    if (attributes)
      Object.entries(attributes).forEach(([key, value]) => {
        $el.setAttribute(key, value);
      });
    // data ? $el.textContent = data : $el.textContent = '';
    if (data) $el.textContent = data;

    return $el;
  }
  createTable() {
    const $table = this.createEl({
      type: "table",
      attributes: { class: "table" },
    });
    // $table.classList.add('table')

    $table.insertAdjacentElement("beforeend", this.createTHead());
    $table.insertAdjacentElement("beforeend", this.createTBody());

    return $table;
  }
  createTHead() {
    const $THead = this.createEl({ type: "thead" });
    const $EmptyCell = this.createEl({
      type: "th",
      attributes: { class: "col" },
    });
    const $Row = this.createEl({ type: "tr" });
    const fragment = document.createDocumentFragment();

    fragment.append($EmptyCell);

    this._data.forEach((el) => {
      const $cell = this.createEl({
        type: "th",
        attributes: { class: "col" },
        data: el,
      });
      fragment.append($cell);
    });

    $Row.append(fragment);
    $THead.insertAdjacentElement("beforeend", $Row);

    return $THead;
  }
  createTBody() {
    const $TBody = this.createEl({ type: "tbody" });
    const bodyFragment = document.createDocumentFragment();

    this._data.forEach((el) => {
      const $Row = this.createEl({ type: "tr" });
      const rowFragment = document.createDocumentFragment();

      rowFragment.append(
        this.createEl({ type: "th", attributes: { class: "row" }, data: el }),
      );

      this._data.forEach((innerEl) => {
        const value = el * innerEl;

        rowFragment.append(this.createEl({ data: value, type: "td" }));
        $Row.append(rowFragment);
      });

      bodyFragment.append($Row);
    });

    $TBody.append(bodyFragment);
    return $TBody;
  }
  init() {
    const $container = this.createEl({ attributes: { class: "container" } });

    $container.insertAdjacentElement("beforeend", this.createTable());
    return $container;
  }
}

const table = new Table(data);

document.body.insertAdjacentElement("beforeend", table.init());

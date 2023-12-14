class IShop {
  constructor(data, root) {
    this._data = data;
    this._root = root;
    this.selectedCat = null;
    this.selectedItem = null;
  }

  createEl({ type = "div", content, attrs }) {
    const $el = document.createElement(type);

    if (attrs)
      Object.entries(attrs).forEach(([key, value]) => {
        $el.setAttribute(key, value);
      });
    if (content) $el.textContent = content;

    return $el;
  }

  createNotification({
    type = "danger",
    content = "Ups something went wrong!",
  }) {
    const $container = this.createEl({
      attrs: { class: `alert alert-${type} mt-3`, role: "alert" },
    });
    $container.textContent = content;

    return $container;
  }

  clearContent(el) {
    if (!el && el.nodeType !== 1) return;
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  }

  reset() {
    this.selectedItem = null;
    this.selectedCat = null;
    this.clearContent(document.getElementById("items-container"));
    this.clearContent(document.getElementById("info-container"));
  }

  createCat() {
    const $container = this.createEl({ attrs: { class: "list-group" } });
    const catFragment = document.createDocumentFragment();

    Object.keys(this._data).forEach((cat) => {
      const $button = this.createEl({
        type: "button",
        content: cat,
        attrs: { class: "list-group-item list-group-item-action" },
      });
      $button.dataset.category = cat;
      catFragment.append($button);
    });

    $container.addEventListener("click", (e) => {
      const $itemsContainer = document.getElementById("items-container");
      const $infoContainer = document.getElementById("info-container");

      e.currentTarget.querySelectorAll("[data-category]").forEach((el) => {
        el.classList.remove("active");
      });
      e.target.classList.add("active");
      this.selectedCat = e.target.dataset.category;

      this.clearContent($itemsContainer);
      this.clearContent($infoContainer);

      $itemsContainer.insertAdjacentElement(
        "beforeend",
        this.createItemsList(this._data[this.selectedCat]),
      );
    });
    $container.append(catFragment);
    return $container;
  }

  createItemsList(data) {
    if (!data) return;
    const $container = this.createEl({ attrs: { class: "list-group" } });
    const itemsFragment = document.createDocumentFragment();

    data.forEach((item) => {
      const $button = this.createEl({
        type: "button",
        content: item.name,
        attrs: { class: "list-group-item list-group-item-action" },
      });
      $button.dataset.item = item.id;
      itemsFragment.append($button);
    });

    $container.addEventListener("click", (e) => {
      const $infoContainer = document.getElementById("info-container");

      e.currentTarget.querySelectorAll("[data-item]").forEach((el) => {
        el.classList.remove("active");
      });
      e.target.classList.add("active");
      this.selectedItem = Number(e.target.dataset.item);

      this.clearContent($infoContainer);
      $infoContainer.insertAdjacentElement(
        "beforeend",
        this.createInfo(data.find((el) => el.id === this.selectedItem)),
      );
    });

    $container.append(itemsFragment);
    return $container;
  }

  createInfo(item) {
    if (!item) return;
    const $card = this.createEl({ attrs: { class: "card" } });
    const $cardBody = this.createEl({ attrs: { class: "card-body" } });
    const $title = this.createEl({
      type: "h3",
      attrs: { class: "card-title" },
      content: item.name,
    });

    const bodyFragment = document.createDocumentFragment();
    bodyFragment.append($title);

    const $cardList = this.createEl({
      type: "ul",
      attrs: { class: "list-group list-group-flush" },
    });
    const listFragment = document.createDocumentFragment();

    Object.entries(item).forEach(([key, value]) => {
      if (key !== "name" && key !== "id") {
        listFragment.append(
          this.createEl({
            type: "li",
            attrs: { class: "list-group-item" },
            content: `${key} ${value}`,
          }),
        );
      }
    });
    $cardList.append(listFragment);
    bodyFragment.append($cardList);

    const $button = this.createEl({
      type: "button",
      attrs: { class: "btn btn-primary mt-2" },
      content: "Buy",
    });
    bodyFragment.append($button);

    const $notification = this.createNotification({
      type: "success",
      content: `Your ordered ${item.name}`,
    });

    $button.addEventListener("click", (e) => {
      document.body.insertAdjacentElement("beforeend", $notification);

      setTimeout(() => {
        this.reset();
        $notification.remove();
        document.querySelectorAll("[data-category]").forEach((el) => {
          el.classList.remove("active");
        });
      }, 2000);
    });

    $cardBody.append(bodyFragment);
    $card.insertAdjacentElement("beforeend", $cardBody);

    return $card;
  }

  init() {
    const $container = this.createEl({ attrs: { class: "container mt-3" } });
    const $row = this.createEl({ attrs: { class: "row" } });
    const $catContainer = this.createEl({
      attrs: { class: "col", id: "cat-container" },
    });
    const $itemsContainer = this.createEl({
      attrs: { class: "col", id: "items-container" },
    });
    const $infoContainer = this.createEl({
      attrs: { class: "col", id: "info-container" },
    });

    $catContainer.insertAdjacentElement("beforeend", this.createCat());
    $row.insertAdjacentElement("beforeend", $catContainer);
    $row.insertAdjacentElement("beforeend", $itemsContainer);
    $row.insertAdjacentElement("beforeend", $infoContainer);
    $container.insertAdjacentElement("beforeend", $row);
    this._root.insertAdjacentElement("beforeend", $container);
  }
}

new IShop(dataShop, document.body).init();

class View {
  createEl({ type = "div", content, attributes }) {
    const $el = document.createElement(type);

    if (content) $el.textContent = content;
    if (attributes)
      Object.entries(attributes).forEach(([key, value]) => {
        $el.setAttribute(key, value);
      });

    return $el;
  }

  clearContent(container) {
    if (!container && container.nodeType !== 1) return;
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }

  createInputFeedback($input, content = "Done!", valid = true) {
    const $ValidFeedBack = this.createEl({
      content,
      attributes: { class: "valid-feedback" },
    });
    $ValidFeedBack.dataset.feedback = "valid";
    const $InvalidFeedBack = this.createEl({
      content,
      attributes: { class: "invalid-feedback" },
    });
    $InvalidFeedBack.dataset.feedback = "in-valid";

    if (valid) {
      const $feedBack = $input.parentNode.querySelector("[data-feedback]");
      $input.parentNode.insertBefore($ValidFeedBack, $input.nextSibling);
      if ($feedBack) $feedBack.remove();
    } else {
      const $feedBack = $input.parentNode.querySelector("[data-feedback]");
      $input.parentNode.insertBefore($InvalidFeedBack, $input.nextSibling);
      if ($feedBack) $feedBack.remove();
    }
  }

  createCatList(data) {
    if (!data) return null;

    const $container = this.createEl({
      type: "div",
      attributes: { class: "list-group" },
    });
    const containerFragment = document.createDocumentFragment();

    data.forEach((key) => {
      const $button = this.createEl({
        type: "button",
        content: key,
        attributes: { class: "list-group-item list-group-item-action" },
      });
      $button.dataset.select = "";
      containerFragment.append($button);
    });

    $container.addEventListener("click", (e) => {
      e.currentTarget
        .querySelectorAll("[data-select]")
        .forEach((el) => el.classList.remove("active"));
      e.target.classList.add("active");
    });

    $container.append(containerFragment);
    return $container;
  }

  createInfoList(data) {
    if (!data) return null;

    const $container = this.createEl({
      type: "ul",
      attributes: { class: "list-group" },
    });
    const containerFragment = document.createDocumentFragment();

    Object.entries(data).forEach(([key, value]) => {
      if (key !== "name" && key !== "id") {
        containerFragment.append(
          this.createEl({
            type: "li",
            attributes: { class: "list-group-item" },
            content: `${key}: ${value}`,
          }),
        );
      }
    });

    $container.append(containerFragment);
    return $container;
  }

  showNotification({
    root,
    content = "Something went wrong",
    type = "danger",
  }) {
    if (!root) return;
    const $container = this.createEl({
      attributes: { class: `alert alert-${type} mt-3`, role: "alert" },
    });
    $container.textContent = content;

    root.insertAdjacentElement("beforeend", $container);

    setTimeout(() => {
      $container.remove();
    }, 3000);
  }
}

class FormCreator extends View {
  static FORM_NAME = "user-info";
  constructor(root) {
    super();
    this._root = root;
    this.data = {};
  }

  createInputGroup({
    type = "text",
    placeholder = "example",
    id,
    content = "Example",
    listener = null,
    name = "name",
    invalidFeedback = "Error",
  }) {
    if (!id) id = type + Math.random();

    this.data[name] = {
      value: null,
      valid: false,
    };

    const $container = this.createEl({
      attributes: { class: "form-floating mb-3" },
    });
    const $input = this.createEl({
      type: "input",
      attributes: { class: "form-control", type, placeholder, id, name },
    });
    const $label = this.createEl({
      content,
      type: "label",
      attributes: { htmlFor: id },
    });

    $container.insertAdjacentElement("beforeend", $input);
    $container.insertAdjacentElement("beforeend", $label);

    if (listener && listener.cb) {
      $input.addEventListener(listener.type, (e) => {
        listener.cb(e);

        if (this.data[name]) {
          if (this.data[name].valid) {
            e.currentTarget.classList.add("is-valid");
            if (e.currentTarget.classList.contains("is-invalid"))
              e.currentTarget.classList.remove("is-invalid");
            this.createInputFeedback(e.currentTarget);
          } else {
            e.currentTarget.classList.add("is-invalid");
            if (e.currentTarget.classList.contains("is-valid"))
              e.currentTarget.classList.remove("is-valid");
            this.createInputFeedback(e.currentTarget, invalidFeedback, false);
          }
        }
      });
    }

    return $container;
  }

  createSelectGroup({
    id,
    name = "name",
    content = "Example",
    listener = null,
    options = [],
  }) {
    if (!id) id = type + Math.random();

    const $container = this.createEl({
      attributes: { class: "mb-3" },
    });
    const $label = this.createEl({
      content,
      type: "label",
      attributes: { htmlFor: id, class: "form-label" },
    });

    const $select = this.createEl({
      type: "select",
      attributes: { class: "form-select form-select-sm", id, name },
    });

    const optionsFragment = document.createDocumentFragment();
    options.forEach((el, i) => {
      const option = new Option(el, el);

      if (i === 0)
        this.data[name] = {
          value: el,
          valid: true,
        };

      optionsFragment.append(option);
    });

    $select.append(optionsFragment);

    $container.insertAdjacentElement("beforeend", $label);
    $container.insertAdjacentElement("beforeend", $select);

    if (listener && listener.cb) {
      $select.addEventListener(listener.type, listener.cb);
    }

    return $container;
  }

  createTextAreaGroup({
    id,
    name = "name",
    content = "Example",
    listener = null,
  }) {
    if (!id) id = type + Math.random();

    const $container = this.createEl({
      attributes: { class: "mb-3" },
    });
    const $label = this.createEl({
      content,
      type: "label",
      attributes: { htmlFor: id, class: "form-label" },
    });

    const $textArea = this.createEl({
      type: "textarea",
      attributes: { class: "form-control", id, name, rows: 3 },
    });

    $container.insertAdjacentElement("beforeend", $label);
    $container.insertAdjacentElement("beforeend", $textArea);

    if (listener && listener.cb) {
      $textArea.addEventListener(listener.type, listener.cb);
    }

    return $container;
  }

  createForm() {
    const $form = this.createEl({
      type: "form",
      attributes: { name: FormCreator.FORM_NAME },
    });

    $form.insertAdjacentElement(
      "beforeend",
      this.createInputGroup({
        type: "text",
        placeholder: "Jhon Doe",
        content: "Enter your name and surname",
        id: "name",
        name: "name",
        invalidFeedback:
          "You need enter value with length more then 2 and less then 20",
        listener: {
          type: "change",
          cb: (e) => {
            const value = e.currentTarget.value;

            if (value.length > 2 && value.length < 20) {
              this.data[e.currentTarget.name] = {
                value,
                valid: true,
              };
            } else {
              this.data[e.currentTarget.name] = {
                value,
                valid: false,
              };
            }
          },
        },
      }),
    );

    $form.insertAdjacentElement(
      "beforeend",
      this.createSelectGroup({
        content: "Choose yor city",
        id: "city",
        name: "city",
        options: ["Odessa", "Lviv"],
        listener: {
          type: "change",
          cb: (e) => {
            this.data[e.currentTarget.name] = {
              value: e.currentTarget.value,
              valid: true,
            };
          },
        },
      }),
    );

    $form.insertAdjacentElement(
      "beforeend",
      this.createSelectGroup({
        content: "Choose post office",
        id: "post-office",
        name: "postOffice",
        options: ["#1", "#2"],
        listener: {
          type: "change",
          cb: (e) => {
            this.data[e.currentTarget.name] = {
              value: e.currentTarget.value,
              valid: true,
            };
          },
        },
      }),
    );

    $form.insertAdjacentElement(
      "beforeend",
      this.createSelectGroup({
        content: "Choose payment",
        id: "payment",
        name: "payment",
        options: ["card", "post"],
        listener: {
          type: "change",
          cb: (e) => {
            this.data[e.currentTarget.name] = {
              value: e.currentTarget.value,
              valid: true,
            };
          },
        },
      }),
    );

    $form.insertAdjacentElement(
      "beforeend",
      this.createInputGroup({
        type: "number",
        placeholder: "Count of products",
        content: "Enter count of products",
        id: "count",
        name: "count",
        invalidFeedback: "You need choose more then 0",
        listener: {
          type: "change",
          cb: (e) => {
            const value = e.currentTarget.value;

            if (value > 0) {
              this.data[e.currentTarget.name] = {
                value,
                valid: true,
              };
            } else {
              this.data[e.currentTarget.name] = {
                value,
                valid: false,
              };
            }
          },
        },
      }),
    );

    $form.insertAdjacentElement(
      "beforeend",
      this.createTextAreaGroup({
        content: "Enter some comments",
        id: "comment",
        name: "comment",
        listener: {
          type: "change",
          cb: (e) => {
            const value = e.currentTarget.value;

            this.data[e.currentTarget.name] = {
              value,
              valid: true,
            };
          },
        },
      }),
    );

    return $form;
  }

  submitFormHandler(e) {
    e.preventDefault();
    if (!Object.values(this.data).every((value) => value.valid)) {
      return Object.entries(this.data).filter(([_, value]) => {
        return !value.valid;
      });
    } else {
      return Object.entries(this.data).reduce((acc, [key, value]) => {
        acc[key] = value.value;
        return acc;
      }, {});
    }
  }

  get formData() {
    return this.data;
  }

  init() {
    const $form = this.createForm();
    this._root.insertAdjacentElement("beforeend", $form);
  }
}

class IShop extends View {
  static CAT_ID = "cat-container";
  static ITEMS_ID = "items-container";
  static INFO_ID = "info-container";
  static INFO_MODAL_ID = "info-modal";
  static ORDERS_CONTAINER_ID = "orders-container";
  constructor(data, root) {
    super();
    this._root = root;
    this._data = data;
    this.selectedCat = null;
    this.selectedItem = null;
    this.orders = [];
  }

  resetState() {
    const $itemsContainer = document.getElementById("items-container");
    const $infoContainer = document.getElementById("info-container");
    this.selectedItem = null;
    this.selectedCat = null;
    this.clearContent($itemsContainer);
    this.clearContent($infoContainer);
  }

  createCategories() {
    const $container = this.createEl({ attributes: { class: "list-group" } });
    const $list = this.createCatList(Object.keys(this._data));
    $container.insertAdjacentElement("beforeend", $list);

    // listeners
    $container.addEventListener("click", (e) => {
      this.selectedCat = e.target.outerText;

      this.clearContent(document.getElementById(IShop.INFO_ID));
      this.createItemList(this._data[this.selectedCat]);
    });

    return $container;
  }

  createItemList(data) {
    const $container = document.getElementById(IShop.ITEMS_ID);
    if (!data && !$container) return;
    this.clearContent($container);

    const $list = this.createCatList(data.map((el) => el.name));
    $container.insertAdjacentElement("beforeend", $list);

    // listeners
    $list.addEventListener("click", (e) => {
      const selectedItem = data.find((el) => el.name === e.target.outerText);
      this.selectedItem = selectedItem;
      this.createItemInfo(selectedItem);
    });

    $container.insertAdjacentElement("beforeend", $list);
  }

  createItemInfo(data) {
    const $container = document.getElementById(IShop.INFO_ID);
    if (!data && !$container) return;
    this.clearContent($container);

    const $card = this.createEl({ attributes: { class: "card" } });
    const $cardBody = this.createEl({
      attributes: { class: "card-body" },
    });
    const $title = this.createEl({
      type: "h5",
      attributes: { class: "card-title" },
    });
    $title.textContent = data.name;

    const bodyFragment = document.createDocumentFragment();
    bodyFragment.append($title);

    const $cardList = this.createInfoList(data);
    bodyFragment.append($cardList);

    const $button = this.createEl({
      type: "button",
      content: "Buy",
      attributes: { class: "btn btn-primary mt-2" },
    });
    bodyFragment.append($button);

    // listeners
    $button.addEventListener("click", () => {
      this.modal.show();
    });

    $cardBody.append(bodyFragment);
    $card.insertAdjacentElement("beforeend", $cardBody);

    $container.insertAdjacentElement("beforeend", $card);
  }

  createFormModal() {
    const $container = this.createEl({
      attributes: {
        class: "modal fade",
        tabindex: "-1",
        id: IShop.INFO_MODAL_ID,
        role: "dialog",
      },
    });

    const $modalContainer = this.createEl({
      attributes: { class: "modal-dialog" },
    });
    const $modalContent = this.createEl({
      attributes: { class: "modal-content" },
    });
    const $modalHeader = this.createEl({
      attributes: { class: "modal-header" },
    });
    const $modalBody = this.createEl({
      attributes: { class: "modal-body" },
    });
    const $modalFooter = this.createEl({
      attributes: { class: "modal-footer" },
    });

    const $title = this.createEl({
      type: "modal-title",
      attributes: { class: "modal-header" },
      content: "User info",
    });

    const $closeBtn = this.createEl({
      type: "button",
      attributes: { class: "btn-close" },
    });
    $closeBtn.setAttribute("aria-label", "Close");
    $closeBtn.dataset.bsDismiss = "modal";

    $modalHeader.insertAdjacentElement("beforeend", $title);
    $modalHeader.insertAdjacentElement("beforeend", $closeBtn);

    const form = new FormCreator($modalBody);
    form.init();

    const $submitBtn = this.createEl({
      type: "button",
      content: "Submit",
      attributes: { class: "btn btn-primary" },
    });
    $submitBtn.addEventListener("click", () => {
      const userInfo = form.submitFormHandler(new Event("submit"));

      if (!Array.isArray(userInfo)) {
        this.modal.hide();
        this.orders.push({ user: userInfo, order: this.selectedItem });
        this.resetState();
        this.createOrderList();
      } else {
        const errorMessage = userInfo.reduce((acc, [key, value]) => {
          if (!value.valid) acc += `You need enter valid ${key}. `;
          return acc;
        }, "");
        this.showNotification({ root: $modalBody, content: errorMessage });
      }
    });

    $modalFooter.insertAdjacentElement("beforeend", $submitBtn);

    $modalContent.insertAdjacentElement("beforeend", $modalHeader);
    $modalContent.insertAdjacentElement("beforeend", $modalBody);
    $modalContent.insertAdjacentElement("beforeend", $modalFooter);
    $modalContainer.insertAdjacentElement("beforeend", $modalContent);
    $container.insertAdjacentElement("beforeend", $modalContainer);
    return $container;
  }

  createOrderItem(data) {
    const orderFragment = document.createDocumentFragment();

    Object.entries(data).forEach(([key, value]) => {
      const $title = this.createEl({ type: "h4", content: key });
      orderFragment.append($title);
      const $list = this.createInfoList(value);
      orderFragment.append($list);
    });

    return orderFragment;
  }

  createOrderList() {
    const $container = document.getElementById(IShop.ORDERS_CONTAINER_ID);
    if (!this.orders.length) return;
    this.clearContent($container);

    const $list = this.createEl({
      type: "ul",
      attributes: { class: "list-group" },
    });
    const listFragment = document.createDocumentFragment();

    this.orders.forEach((el) => {
      const $li = this.createEl({
        type: "li",
        attributes: { class: "list-group-item" },
      });
      $li.append(this.createOrderItem(el));
      listFragment.append($li);
    });

    $list.append(listFragment);
    $container.insertAdjacentElement("beforeend", $list);
  }

  init() {
    const $container = this.createEl({
      attributes: { class: "container mt-3" },
    });
    const $row = this.createEl({ attributes: { class: "row" } });
    const $catContainer = this.createEl({
      attributes: { class: "col", id: IShop.CAT_ID },
    });
    const $itemsContainer = this.createEl({
      attributes: { class: "col", id: IShop.ITEMS_ID },
    });
    const $infoContainer = this.createEl({
      attributes: { class: "col", id: IShop.INFO_ID },
    });
    const $ordersContainer = this.createEl({
      attributes: { class: "container mt-3", id: IShop.ORDERS_CONTAINER_ID },
    });

    $catContainer.insertAdjacentElement("beforeend", this.createCategories());
    $row.insertAdjacentElement("beforeend", $catContainer);
    $row.insertAdjacentElement("beforeend", $itemsContainer);
    $row.insertAdjacentElement("beforeend", $infoContainer);
    $container.insertAdjacentElement("beforeend", $row);

    this._root.insertAdjacentElement("beforeend", $container);
    this._root.insertAdjacentElement("beforeend", $ordersContainer);

    this._root.insertAdjacentElement("beforeend", this.createFormModal());
    this.modal = new bootstrap.Modal(
      document.getElementById(IShop.INFO_MODAL_ID),
    );
  }
}

new IShop(dataShop, document.body).init();

const imgSrc = [
  "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
  "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
  "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
];

class Slider {
  constructor(data, root) {
    this._root = root;
    this._data = data;
    this.activeSlide = 0;
  }

  createEl({ type = "div", content, attributes }) {
    const $el = document.createElement(type);

    if (content) $el.textContent = content;
    if (attributes)
      Object.entries(attributes).forEach(([key, value]) => {
        $el.setAttribute(key, value);
      });

    return $el;
  }

  createImg(src, containerAttrs, imgAttrs) {
    const $container = this.createEl({
      attributes: containerAttrs,
    });
    const $img = this.createEl({
      type: "img",
      attributes: imgAttrs,
    });
    $container.dataset.slide = "";

    $img.src = src;

    $container.insertAdjacentElement("beforeend", $img);

    return $container;
  }

  createPrevButton() {
    const $button = this.createEl({
      type: "button",
      attributes: { class: "carousel-control-prev", type: "button" },
    });
    const buttonFragment = document.createDocumentFragment();
    const $icon = this.createEl({
      type: "span",
      attributes: { class: "carousel-control-prev-icon", ariaHidden: true },
    });
    const $content = this.createEl({
      type: "span",
      attributes: { class: "visually-hidden" },
      content: "Previous",
    });

    buttonFragment.append($icon);
    buttonFragment.append($content);
    $button.append(buttonFragment);

    // listeners
    $button.addEventListener("click", () => {
      if (this.activeSlide !== 0) {
        document
          .querySelectorAll("[data-slide]")
          [this.activeSlide].classList.remove("active");
        this.activeSlide--;
        document
          .querySelectorAll("[data-slide]")
          [this.activeSlide].classList.add("active");
      }
    });

    return $button;
  }

  createNextButton() {
    const $button = this.createEl({
      type: "button",
      attributes: { class: "carousel-control-next", type: "button" },
    });
    const buttonFragment = document.createDocumentFragment();
    const $icon = this.createEl({
      type: "span",
      attributes: { class: "carousel-control-next-icon", ariaHidden: true },
    });
    const $content = this.createEl({
      type: "span",
      attributes: { class: "visually-hidden" },
      content: "Next",
    });

    buttonFragment.append($icon);
    buttonFragment.append($content);
    $button.append(buttonFragment);

    // listeners
    $button.addEventListener("click", () => {
      if (this.activeSlide < this._data.length - 1) {
        document
          .querySelectorAll("[data-slide]")
          [this.activeSlide].classList.remove("active");
        this.activeSlide++;
        document
          .querySelectorAll("[data-slide]")
          [this.activeSlide].classList.add("active");
      }
    });

    return $button;
  }

  createInnerCarousel() {
    const $container = this.createEl({
      attributes: { class: "carousel-inner" },
    });

    const fragment = document.createDocumentFragment();

    this._data.forEach((src, i) => {
      const $img = this.createImg(
        src,
        {
          class: `carousel-item ${i === this.activeSlide ? "active" : ""}`,
        },
        { class: "d-block w-100" },
      );

      fragment.append($img);
    });

    $container.append(fragment);

    return $container;
  }

  createCarousel() {
    const $container = this.createEl({
      attributes: { class: "carousel slide" },
    });

    $container.insertAdjacentElement("beforeend", this.createInnerCarousel());
    $container.insertAdjacentElement("beforeend", this.createPrevButton());
    $container.insertAdjacentElement("beforeend", this.createNextButton());

    return $container;
  }

  init() {
    const $container = this.createEl({
      attributes: { class: "container mt-3" },
    });

    $container.insertAdjacentElement("beforeend", this.createCarousel());
    this._root.insertAdjacentElement("beforeend", $container);
  }
}

new Slider(imgSrc, document.body).init();

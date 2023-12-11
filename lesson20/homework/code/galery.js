const $container = document.createElement("div");
$container.classList.add("row");

function createImg(attributes) {
  const $el = document.createElement("img");

  if (attributes)
    Object.entries(attributes).forEach(([key, value]) => {
      $el.setAttribute(key, value);
    });

  return $el;
}

function createBox(attributes, first = true) {
  const verticalPictures = [
    "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp",
  ];

  const horizontalPictures = [
    "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp",
  ];

  const $box = document.createElement("div");
  if (attributes)
    Object.entries(attributes).forEach(([key, value]) => {
      $box.setAttribute(key, value);
    });

  const $img1 = createImg({
    src: verticalPictures[Math.floor(Math.random() * verticalPictures.length)],
    class: "w-100 shadow-1-strong rounded mb-4",
  });
  const $img2 = createImg({
    src: horizontalPictures[Math.floor(Math.random() * horizontalPictures.length)],
    class: "w-100 shadow-1-strong rounded mb-4",
  });

  $box.insertAdjacentElement("beforeend", first ? $img1 : $img2);
  $box.insertAdjacentElement("beforeend", !first ? $img1 : $img2);

  return $box;
}

$container.insertAdjacentElement(
  "beforeend",
    createBox({ class: "col-lg-4 col-md-12 mb-4 mb-lg-0" }),
);
$container.insertAdjacentElement(
    "beforeend",
    createBox({ class: "col-lg-4 mb-4 mb-lg-0" }, false),
);
$container.insertAdjacentElement(
    "beforeend",
    createBox({ class: "col-lg-4 mb-4 mb-lg-0" }),
);

document.body.insertAdjacentElement('beforeend', $container)

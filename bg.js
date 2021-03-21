const body = document.querySelector("body");
const from = document.querySelector(".js-imageFrom");

const IMG_NUM = 6;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  if (imgNumber + 1 === 1) {
    from.innerText = "\uD83D\uDD88 Emerald Bay, United States";
  } else if (imgNumber + 1 === 2) {
    from.innerText =
      "\uD83D\uDD88 El Cap, Yosemite National Park, United States";
  } else if (imgNumber + 1 === 3) {
    from.innerText = "\uD83D\uDD88 Rieserferner-Ahrn Nature Park, Italy";
  } else if (imgNumber + 1 === 4) {
    from.innerText =
      "\uD83D\uDD88 Great Smoky Mountains National Park, United States";
  } else if (imgNumber + 1 === 5) {
    from.innerText = "\uD83D\uDD88 Whangarei Falls, Whangarei, New Zealand";
  } else if (imgNumber + 1 === 6) {
    from.innerText = "\uD83D\uDD88 Bad Pyrmont, Deutschland";
  }
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUM);
  return number;
}

function init() {
  const randomNum = genRandom();
  console.log(randomNum + 1);
  paintImage(randomNum);
}

init();

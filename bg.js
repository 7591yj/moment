const body = document.querySelector("body");
const from = document.querySelector(".js-imageFrom");

const IMG_NUM = 6;

function paintImage(imgNumber) {
  const image = new Image();
  if (imgNumber + 1 === 1) {
    from.innerText = "\uD83D\uDD88 Emerald Bay, United States";
    image.src =
      "https://cdn.discordapp.com/attachments/749147585792573522/823067546626031656/1.jpg";
    image.classList.add("bgImage");
    body.prepend(image);
  } else if (imgNumber + 1 === 2) {
    from.innerText =
      "\uD83D\uDD88 El Cap, Yosemite National Park, United States";
    image.src =
      "https://cdn.discordapp.com/attachments/749147585792573522/823067690615963648/2.jpg";
    image.classList.add("bgImage");
    body.prepend(image);
  } else if (imgNumber + 1 === 3) {
    from.innerText = "\uD83D\uDD88 Rieserferner-Ahrn Nature Park, Italy";
    image.src =
      "https://cdn.discordapp.com/attachments/749147585792573522/823067706709770270/3.jpg";
    image.classList.add("bgImage");
    body.prepend(image);
  } else if (imgNumber + 1 === 4) {
    from.innerText =
      "\uD83D\uDD88 Great Smoky Mountains National Park, United States";
    image.src =
      "https://cdn.discordapp.com/attachments/749147585792573522/823067711600459786/4.jpg";
    image.classList.add("bgImage");
    body.prepend(image);
  } else if (imgNumber + 1 === 5) {
    from.innerText = "\uD83D\uDD88 Whangarei Falls, Whangarei, New Zealand";
    image.src =
      "https://cdn.discordapp.com/attachments/749147585792573522/823067727882878986/5.jpg";
    image.classList.add("bgImage");
    body.prepend(image);
  } else if (imgNumber + 1 === 6) {
    from.innerText = "\uD83D\uDD88 Bad Pyrmont, Deutschland";
    image.src =
      "https://cdn.discordapp.com/attachments/749147585792573522/823067743543885834/6.jpg";
    image.classList.add("bgImage");
    body.prepend(image);
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

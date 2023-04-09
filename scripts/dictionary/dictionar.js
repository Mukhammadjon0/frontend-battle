let signInCheckDictionary = document.getElementById("dictionary");

if (localStorage.getItem("login") !== "true") {
  signInCheckDictionary.style.display = "none";
  window.location.assign(
    "http://www.notiqlik-markazi.uz/pages/signup/signup.html"
  );
}

const wordsEasy = [
  { 1: { en: "apple", uz: "olma" } },
  { 2: { en: "banana", uz: "banan" } },
  { 3: { en: "car", uz: "mashina" } },
  { 4: { en: "home", uz: "uy" } },
  { 5: { en: "city", uz: "shahar" } },
  { 6: { en: "drink", uz: "ichimlik" } },
  { 7: { en: "york", uz: "yo`l" } },
  { 8: { en: "tiger", uz: "yo`lbars" } },
  { 9: { en: "watch", uz: "ko`rmoq" } },
  { 10: { en: "phone", uz: "telefon" } },
];


const wordsMedium = [
  { 1: { en: "know", uz: "bilmoq" } },
  { 2: { en: "learn", uz: "o'rganish" } },
  { 3: { en: "maybe", uz: "balki" } },
  { 4: { en: "future", uz: "kelajak" } },
  { 5: { en: "for", uz: "uchun" } },
  { 6: { en: "drink", uz: "ichimlik" } },
  { 7: { en: "all", uz: "hammasi" } },
  { 8: { en: "bear", uz: "ayiq" } },
  { 9: { en: "month", uz: "oy" } },
  { 10: { en: "power", uz: "kuch" } },
];




const wordsHard = [
  { 1: { en: "mouse", uz: "sichqon" } },
  { 2: { en: "paper", uz: "qog'oz" } },
  { 3: { en: "speed", uz: "tezlik" } },
  { 4: { en: "spring", uz: "bahor" } },
  { 5: { en: "ice", uz: "muz" } },
  { 6: { en: "drink", uz: "ichimlik" } },
  { 7: { en: "bus", uz: "avtobus" } },
  { 8: { en: "health", uz: "sog'lik" } },
  { 9: { en: "heart", uz: "yurak" } },
  { 10: { en: "smart", uz: "aqilliy" } },
];


let wordsContainer = document.getElementById("word-container");

let easyTest = document.getElementById("easy-test");
let mediumTest = document.getElementById("medium-test");
let hardTest = document.getElementById("hard-test");

let choosenWord1 = "";
let choosenWord2 = "";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

easyTest.addEventListener('click', () => {
    wordsContainer.innerHTML = ''
shuffle(wordsEasy).map((word, index) => {
    
  let div = document.createElement("div");

  div.innerHTML = `${word[Object.keys(word)].en}`;

  wordsContainer.appendChild(div);
  div.addEventListener("click", (e) => {
    choosenWord1 = word[Object.keys(word)];
    console.log(word[Object.keys(word)]);
  });
});

shuffle(wordsEasy).map((word, index) => {

  let div = document.createElement("div");

  div.innerHTML = `${word[Object.keys(word)].uz}`;

  wordsContainer.appendChild(div);
  div.addEventListener("click", (e) => {
    console.log(word[Object.keys(word)]);
    choosenWord2 = word[Object.keys(word)];

  });
});

})

mediumTest.addEventListener("click", () => {
     wordsContainer.innerHTML = "";
  shuffle(wordsMedium).map((word, index) => {
    let div = document.createElement("div");

    div.innerHTML = `${word[Object.keys(word)].en}`;

    wordsContainer.appendChild(div);
    div.addEventListener("click", (e) => {
      choosenWord1 = word[Object.keys(word)];
      console.log(word[Object.keys(word)]);
    });
  });

  shuffle(wordsMedium).map((word, index) => {
    
    let div = document.createElement("div");

    div.innerHTML = `${word[Object.keys(word)].uz}`;

    wordsContainer.appendChild(div);
    div.addEventListener("click", (e) => {
      console.log(word[Object.keys(word)]);
      choosenWord2 = word[Object.keys(word)];
    });
  });
});



hardTest.addEventListener("click", () => {
    wordsContainer.innerHTML = "";

  shuffle(wordsHard).map((word, index) => {
    let div = document.createElement("div");


    div.innerHTML = `${word[Object.keys(word)].en}`;

    wordsContainer.appendChild(div);
    div.addEventListener("click", (e) => {
      choosenWord1 = word[Object.keys(word)];
      console.log(word[Object.keys(word)]);
    });
  });

  shuffle(wordsHard).map((word, index) => {
    let div = document.createElement("div");


    div.innerHTML = `${word[Object.keys(word)].uz}`;

    wordsContainer.appendChild(div);
    div.addEventListener("click", (e) => {
      console.log(word[Object.keys(word)]);
      choosenWord2 = word[Object.keys(word)];
    });
  });
});



document.getElementById("checkTestBtn").addEventListener('click', () => {
    if (choosenWord1 !== "" && choosenWord2 !== "" && choosenWord1 == choosenWord2) {
        console.log(true);
       Toastify({
         text: "To'gri topdingiz!",
         duration: 3000,
         destination: "https://github.com/apvarun/toastify-js",
         newWindow: true,
         close: true,
         gravity: "top",
         positionLeft: false,
         backgroundColor:
           "linear-gradient(-90deg, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
       }).showToast();
    } else {
       Toastify({
         text: "Notog'ri!",
         duration: 3000,
         destination: "https://github.com/apvarun/toastify-js",
         newWindow: true,
         close: true,
         gravity: "top",
         positionLeft: false,
         backgroundColor:
           "linear-gradient(-90deg, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
       }).showToast();
    }
});



/// VANILLA JS EFFECTS


VanillaTilt.init(document.querySelectorAll("#word-container div"), {
  max: 25,
  speed: 400,
  glare: true,
});
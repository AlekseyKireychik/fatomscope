// Start custom select
let select = function() {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");
  let selectItemActive = document.querySelectorAll(".tests__select");
  let bigBtn = document.querySelector(".tests__big-btn");

  selectHeader.forEach(item => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach(item => {
    item.addEventListener("click", selectChoose);
  });

  selectItemActive.forEach(item => {
    item.addEventListener("click", selectActive);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }
  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".tests__select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
    select.classList.add("selected");
  }
  function selectActive() {
    selectItemActive.forEach(item => {
      if (item.classList.contains("selected")) {
        bigBtn.classList.remove("disabled");
      } else {
        bigBtn.classList.add("disabled");
      }
    });
  }
};

select();

// End custom select

// Strat works in Api
let zodiacIcon = document.querySelector(".zodiacIcon");
let zodiacTitle = document.querySelector(".zodiacTitle");
let zodiacDate = document.querySelector(".zodiacDate");
let zodiacText = document.querySelector(".zodiacText");
let cardIcon = document.querySelector(".cardIcon");
let cardTitle = document.querySelector(".cardTitle");
let cardText = document.querySelector(".cardText");

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth() + 1;
let day = currentDate.getDate();
let monthName = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
let resultDay = monthName[currentDate.getMonth()] + " " + `${day}` + ", " + `${year}`;

let newDate = year + "-" + ("0" + month).slice(-2) + "-" + ("0" + day).slice(-2);

const url = `http://fatumscope.uly.by/frontend/web/api/search?date=${newDate}&expand=category`;

console.log(url);

async function fetchAsync() {
  const apiResponse = await fetch(url),
    apiData = await apiResponse.json();

  return apiData;
}

let itemTitleElem = document.querySelectorAll(".zodiacTitle");

async function resultFetch() {
  try {
    let fetchResult = await fetchAsync();

    fetchResult.map(apiItem => {
      itemTitleElem.forEach(itemTitleElem => {
        if (apiItem.category.title.toLowerCase() == itemTitleElem.innerHTML.toLowerCase()) {
          zodiacText.innerHTML = apiItem.description;
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
}

resultFetch();

// End works in Api

// Strat Update Daily Horoscope
let zodiacSign = document.querySelectorAll(".sodiac__item");
zodiacSign.forEach(item => {
  item.addEventListener("click", zodiacActive);
});
function zodiacActive() {
  // event.preventDefault();
  let text = this.innerText.toLowerCase();
  console.log(text);
};


let updateDailyHoroscope = function() {};

if (zodiacIcon !== null) {
  let title = zodiacTitle.innerText = "Libra",  
    srcImg = "./images/",
    formatImg = ".svg";  

  zodiacIcon.src = `${srcImg}${title}${formatImg}`;
  zodiacDate.innerText = `${resultDay}`;
}
updateDailyHoroscope();

// End Update Daily Horoscope

// Strat Update Card of The Day

// let zodiacSign = document.querySelectorAll(".sodiac__item");
// zodiacSign.forEach(item => {
//   item.addEventListener("click", zodiacActive);
// });
// function zodiacActive() {
//   // event.preventDefault();
//   let text = this.innerText.toLowerCase();
//   console.log(text);
// };


let updateCardOfTheDay = function() {};

if (cardIcon !== null) {
  let title = cardTitle.innerText = "The High Priestess",
  fixNameImg = title.replace(/ /g, "-"),
    srcImg = "./images/",
    formatImg = ".jpg"; 

    cardIcon.src = `${srcImg}${fixNameImg}${formatImg}`;
}
updateCardOfTheDay();

// End Update Card of The Day

// Strat works myCards

let myCardsArr = [
  {
    id: 1,
    name: "Death",
    text: "text01",
    src: "../images/Death.jpg"
  },
  {
    id: 2,
    name: "Justice",
    text: "text02",
    src: "../images/Justice.jpg"
  },
  {
    id: 3,
    name: "Strength",
    text: "text03",
    src: "../images/Strength.jpg"
  },
  {
    id: 4,
    name: "Temperance",
    text: "text04",
    src: "../images/Temperance.jpg"
  },
  {
    id: 5,
    name: "The Chariot",
    text: "text05",
    src: "../images/The Chariot.jpg"
  },
  {
    id: 6,
    name: "The Devil",
    text: "text06",
    src: "../images/The-Devil.jpg"
  },
  {
    id: 7,
    name: "The Emperor",
    text: "text07",
    src: "../images/The-Emperor.jpg"
  },
  {
    id: 8,
    name: "The Empress",
    text: "text08",
    src: "../images/The-Empress.jpg"
  },
  {
    id: 9,
    name: "The Fool",
    text: "text09",
    src: "../images/The-Fool.jpg"
  },
  {
    id: 10,
    name: "The Hanged Man",
    text: "text10",
    src: "../images/The-Hanged-Man.jpg"
  },
  {
    id: 11,
    name: "The Hermit",
    text: "text11",
    src: "../images/The-Hermit.jpg"
  },
  {
    id: 12,
    name: "The High Priestess",
    text: "text12",
    src: "../images/The-High-Priestess.jpg"
  },
  {
    id: 13,
    name: "The Judgement",
    text: "text13",
    src: "../images/The-Judgement.jpg"
  },
  {
    id: 14,
    name: "The Lovers",
    text: "text14",
    src: "../images/The-Lovers.jpg"
  },
  {
    id: 15,
    name: "The Magician",
    text: "text15",
    src: "../images/The-Magician.jpg"
  },
  {
    id: 16,
    name: "The Moon",
    text: "text16",
    src: "../images/The-Moon.jpg"
  },
  {
    id: 17,
    name: "The Pope",
    text: "text17",
    src: "../images/The-Pope.jpg"
  },
  {
    id: 18,
    name: "The Star",
    text: "text18",
    src: "../images/The-Star.jpg"
  },
  {
    id: 19,
    name: "The Sun",
    text: "text19",
    src: "../images/The-Sun.jpg"
  },
  {
    id: 20,
    name: "The Tower",
    text: "text20",
    src: "../images/The-Tower.jpg"
  },
  {
    id: 21,
    name: "The World",
    text: "text21",
    src: "../images/The-World.jpg"
  },
  {
    id: 22,
    name: "Wheel of Fortune",
    text: "text22",
    src: "../images/Wheel-of-Fortune.jpg"
  }
];
let myCards = myCardsArr.forEach(item => {
  // console.log(item);
});

let cardsDay = document.querySelectorAll(".mycard__frontImg");
let randomCards = function() {
  let x = Math.floor(Math.random() * 22 + 1);
  // console.log(x);
  cardsDay.forEach(item => {
    item.src = "./images/Death.jpg";
  });
};

// console.log(cardsDay);

randomCards();

let cards = function() {
  let card = document.querySelectorAll(".mycard");

  card.forEach(item => {
    item.addEventListener("click", cardActive);
  });

  function cardActive() {
    let btn = document.querySelector(".aboutcard");
    let cardText = document.querySelector(".tests__value");
    let card = document.querySelectorAll(".mycard");

    card.forEach(item => {
      item.classList.add("disabled");
    });

    this.classList.add("is-active");
    cardText.innerText = "your card text";
    // console.log(cardText);
    btn.classList.remove("disabled");
  }
};

cards();

// End works myCards

// Strat questions
let questionsNow = function() {
  let questions = document.querySelectorAll(".questions__item");

  questions.forEach(item => {
    // console.log(item);
  });
};

questionsNow();
// End questions

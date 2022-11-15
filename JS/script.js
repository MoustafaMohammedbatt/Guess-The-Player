//catch HTML elements
let playercard= document.getElementById('img');
let playercard1= document.getElementById('playerCard');
let playerImg= document.getElementById('playerImg');
let frst= document.getElementById('frst');
let scnd= document.getElementById('scnd');
let pos= document.getElementById('pos');
let mic= document.getElementById('mic');
let profile= document.getElementById('profile');
let btn= document.getElementById('btn');
let btn2= document.getElementById('gup');
let good= document.getElementById('good');

//Array of Players (objects)
let Players =[

  {
    "frist":"Cristiano",
    "name": "Ronaldo",
    "img" : "./img/p50352449.png",
    "card": "./img/Berardi (1).png",
    "poss": "ST"
  },
  {
    "frist":"Lionel",
    "name": "Messi",
    "img" : "./img/p50489671.png",
    "card": "./img/m.png",
    "poss": "RW"
  },
  {
    "frist":"Mo",
    "name": "Salah",
    "img" : "./img/p184758707.png",
    "card": "./img/png (2).png",
    "poss": "RW"
  },
  {
    "frist":"Karim",
    "name": "Benzema",
    "img" : "./img/p117605665.png",
    "card": "./img/png (6).png",
    "poss": "CF"
  },
  {
    "frist":"Robert",
    "name": "Lewandowski",
    "img" : "./img/67297409.png",
    "card": "./img/png (5).png",
    "poss": "ST"
  }
  ,
  {
    "frist":"Toni",
    "name": "kroos",
    "img" : "./img/50514169.webp",
    "card": "./img/png (29).png",
    "poss": "CM"
  }
  ,
  {
    "frist":"Erling",
    "name": "Haaland",
    "img" : "./img/67347949.webp",
    "card": "./img/png (3).png",
    "poss": "ST"
  }
  ,
  {
    "frist":"Kevin",
    "name": "De Bruyne",
    "img" : "./img/50524633.webp",
    "card": "./img/png (7).png",
    "poss": "CAM"
  }
  ,
  {
    "frist":"Manuel",
    "name": "Neuer",
    "img" : "./img/100830791.webp",
    "card": "./img/png (8).png",
    "poss": "GK"
  },
  {
    "frist":"Virgil",
    "name": "van dijk",
    "img" : "./img/p50535024.png",
    "card": "./img/png (9).png",
    "poss": "CB"
  }
  ,
  {
    "frist":"Thibaut",
    "name": "courtois",
    "img" : "./img/p151187063.png",
    "card": "./img/png (10).png",
    "poss": "GK"
  }
  ,
  {
    "frist":"Alisson",
    "name": "Becker",
    "img" : "./img/p100876127.png",
    "card": "./img/png (12).png",
    "poss": "GK"
  }
  ,
  {
    "frist":"Jan",
    "name": "oblak",
    "img" : "./img/117640901.webp",
    "card": "./img/png (13).png",
    "poss": "GK"
  }
  ,
  {
    "frist":"Gianluigi",
    "name": "Donnarumma",
    "img" : "./img/67339485.webp",
    "card": "./img/png (16).png",
    "poss": "GK"
  },
  {
    "frist":"Keylor",
    "name": "Navas",
    "img" : "./img/p151187985.png",
    "card": "./img/png (17).png",
    "poss": "GK"
  }
  ,
  {
    "frist":"David",
    "name": "De Gea",
    "img" : "./img/67301944.webp",
    "card": "./img/png (18).png",
    "poss": "GK"
  }
  ,
  {
    "frist":"Hugo",
    "name": "Lloris",
    "img" : "./img/67276812.webp",
    "card": "./img/png (19).png",
    "poss": "GK"
  }
  ,
  {
    "frist":"Casemiro",
    "name": "",
    "img" : "./img/50531793.webp",
    "card": "./img/png (21).png",
    "poss": "CDM"
  }
  ,
  {
    "frist":"sadio",
    "name": "Mane",
    "img" : "./img/p50540370.png",
    "card": "./img/png (25).png",
    "poss": "LW"
  }
  ,
  {
    "frist":"Hong Min",
    "name": "Son",
    "img" : "./img/134417832.webp",
    "card": "./img/png (26).png",
    "poss": "LW"
  }
  ,
  {
    "frist":"Harry",
    "name": "Kane",
    "img" : "./img/151197070.webp",
    "card": "./img/png (27).png",
    "poss": "ST"
  }
  ,
  {
    "frist":"Luka",
    "name": "modric",
    "img" : "./img/p100840299.png",
    "card": "./img/png (28).png",
    "poss": "CM"
  }
  ,
  {
    "frist":"Frenkie",
    "name": "de jong",
    "img" : "./img/p184778078.png",
    "card": "./img/png (11) (1).png",
    "poss": "CM"
  }
  ,
  {
    "frist":"Frenkie",
    "name": "de jong",
    "img" : "./img/p184778078.png",
    "card": "./img/png (11) (1).png",
    "poss": "CM"
  }
]

let randomIndex = Math.floor(Math.random() * Players.length);

//add card info
playercard.src=`${Players[randomIndex].card}`;
playercard1.src=`${Players[randomIndex].card}`;
playerImg.src=`${Players[randomIndex].img}`;
frst.innerHTML=`${Players[randomIndex].frist}`;
scnd.innerHTML=`${Players[randomIndex].name}`;
pos.innerHTML=`${Players[randomIndex].poss}`;
// catch the msg div
let msgDiv = document.getElementById('msg');

// genrate the random number from 1 to 100
let generateRandomNumber = () => {
  return Math.ceil(Math.random() * 25) + 20; // 1 => 100
}

// creating the speech recognition object
const speech = new webkitSpeechRecognition();

// starting listening to the user's speech
speech.start();

// show the input speech after converting it to text
let writeMessage = (msg) => {
  msgDiv.innerHTML = `<h3>You've said: <br><span class="box">${msg}</span>`
}

let validateMsg = (msg) => {
  
  if(String(msg).toLowerCase() == (Players[randomIndex].name).toLocaleLowerCase() || String(msg).toLowerCase() == (Players[randomIndex].frist).toLocaleLowerCase() ||
     String(msg).toLowerCase() == (Players[randomIndex].frist).toLocaleLowerCase()+" " +(Players[randomIndex].name).toLocaleLowerCase()){
    playercard.style.display = 'none';
    mic.style.display = 'none';
    msgDiv.style.display = 'none';
    profile.style.display = 'inline-block';
    btn.style.display = 'block';
    good.innerHTML ="You Got Him"
    good.style.display = 'block';
    btn2.style.display = 'none';
  }
  else{
    msgDiv.innerHTML += `<h2 >Try Again</h2>
    
     `;
    
  }
}

const again = () => {
  location.reload();
};

const giveup = () => {
  playercard.style.display = 'none';
    mic.style.display = 'none';
    msgDiv.style.display = 'none';
    profile.style.display = 'inline-block';
    btn.style.display = 'block';
    good.innerHTML ="Try Again"
    good.style.display = 'block';
    btn2.style.display = 'none';
};

// on recognizing, convert the speech into text
let onSpeak = (e) => {
  let msg = e.results[0][0].transcript;
  writeMessage(msg);
  validateMsg(msg);
}

// fire the onSpeak on recognizing and getting a result
speech.addEventListener('result', onSpeak);

// restart the speech tool after ends it's job 
speech.addEventListener('end', () => speech.start());
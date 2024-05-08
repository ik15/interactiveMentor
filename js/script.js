
let number = document.getElementById('num_list');
number.addEventListener('click', (event)=> {
  event.target.style.backgroundColor = "hsl(210deg 9% 34%)";
});

let one = document.getElementsByTagName('li')[0];
let two = document.getElementsByTagName('li')[1];
let three = document.getElementsByTagName('li')[2];
let four = document.getElementsByTagName('li')[3];
let five = document.getElementsByTagName('li')[4];


let card = document.getElementById('section_card');
let thankyou = document.getElementById('section_thankyou');
let submit = document.getElementById('submit');
submit.addEventListener('click', ()=> {
  card.style.display = "none";
  thankyou.style.display = "block";
});


// You selected 4 out of 5
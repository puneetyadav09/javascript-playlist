# Projects related to DOM

## Project Links
[Click Here](https://stackblitz.com/edit/stackblitz-starters-2c8hts?file=index.html)

# Solution code

## Project 1

```Javascript
console.log('Puneet');

const boxes = document.querySelectorAll('.box');
const body = document.querySelector('body');

boxes.forEach((box) => {
  box.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'green') {
      body.style.backgroundColor = 'green';
    } else if (e.target.id === 'red') {
      body.style.backgroundColor = 'red';
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = 'blue';
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = 'yellow';
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = 'white';
    } else if (e.target.id === 'pink') {
      body.style.backgroundColor = 'pink';
    } else if (e.target.id === 'skyblue') {
      body.style.backgroundColor = 'skyblue';
    } else if (e.target.id === 'alice') {
      body.style.backgroundColor = 'rgb(83, 115, 161)';
    }
  });
});
```

## Project 2

```Javascript
console.log('Puneet');

const result = document.querySelector('.result');
const button = document.querySelector('button');

console.log(result);
console.log(button);

button.addEventListener('click', (e) => {
  e.preventDefault();

  const wgt = parseInt(document.querySelector('#weight').value);
  const hgt = parseInt(document.querySelector('#height').value);

  if (wgt === '' || wgt < 0 || isNaN(wgt)) {
    result.innerHTML = 'Please enter a valid weight';
  } else if (hgt === '' || hgt <= 0 || isNaN(hgt)) {
    result.innerHTML = 'Please enter a valid height';
  } else {
    console.table(wgt, hgt);
    const bmi = (wgt / ((hgt * hgt) / 10000)).toFixed(2);
    result.innerHTML = `Your BMI is: ${bmi}`;
  }
});
```

## Project 3

```Javascript
console.log('Puneet');

const div = document.querySelector('#time');

setInterval(function () {
  //// mydate variable must be inside because at every second we have get new date so that second will be refreshed
  const mydate = new Date();
  div.innerHTML = mydate.toLocaleTimeString();
}, 1000);

// const hours = mydate.getHours();
// const minutes = mydate.getMinutes();
// const seconds = mydate.getSeconds().toPrecision(2);
// div.innerHTML = `<span>${hours}:${minutes}:${seconds}</span>`;
```

## Project 4

```Javascript
console.log('Puneet');

const button = document.querySelector('#submit');
const finalResult = document.querySelector("#finalResult");
const input = document.querySelector('input');
const prevguess = document.querySelector('#prevguess');
const remain = document.querySelector('#remaining');
remain.appendChild(document.createTextNode('10'));
const number = Math.floor(Math.random() * 100 + 1);
let i = 1, prev = "", curr = "";

button.addEventListener('click', (e) => {
  e.preventDefault();
  prev = curr;
  prevguess.innerHTML = prev;
  const inputValue = parseInt(input.value);
  if(inputValue === "" || inputValue < 0 || isNaN(inputValue)){
    finalResult.innerHTML = "Please enter valid number.";
  } else {
    if(inputValue === number){
      finalResult.innerHTML = "You guess correct number. Please refresh to play again";
      input.disabled = true;
    }
    else{
      const value = parseInt(remain.innerHTML);
      if(value === 0){
        finalResult.innerHTML = "You can't guess. Please refresh for more attempts";
        input.disabled = true;
      } else{
        finalResult.innerHTML = "Wrong Guess";
        remain.innerHTML = value - 1;
        curr = inputValue;
      }
    }
  }
});
```

## Project 5

```Javascript
console.log('Puneet');

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="color">
      <table>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});
```

## Project 6

```Javascript
console.log('Puneet');

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeMe = function () {
  const bgcolor = randomColor();
  document.querySelector('body').style.backgroundColor = bgcolor;
};
let changebg;

document.querySelector('#start').addEventListener('click', function () {
  if (!changebg) {
    changebg = setInterval(changeMe, 1000);
  }
});

document.querySelector('#stop').addEventListener('click', function () {
  clearInterval(changebg);
  changebg = null;
});

```

const randomNumber1 = Math.floor(Math.random() * 6 + 1);
const randomImage1 = `dice${randomNumber1}.png`;
const randomImageUrl1 = `./images/${randomImage1}`;

const randomNumber2 = Math.floor(Math.random() * 6 + 1);
const randomImage2 = `dice${randomNumber2}.png`;
const randomImageUrl2 = `./images/${randomImage2}`;

document.querySelector('.img1').setAttribute('src', randomImageUrl1);
document.querySelector('.img2').setAttribute('src', randomImageUrl2);

function dicee() {
  const heading = document.querySelector('h1');
  if (randomImage1 > randomImage2) {
    heading.innerText = '🚩Player 1 Won!';
  } else if (randomNumber2 > randomNumber1) {
    heading.innerText = '🚩Player 2 Won!';
  } else {
    heading.innerText = '🚩DRAW!';
  }
}

dicee();

import getElement from "./getElement.js";
import slideOne from "./slidesArray.js";
import slideTwo from "./slidTwo.js";
import bandMember from "./bendMember.js";

// first slier

const slideOneContainer = getElement(".one_slide");
const slideOnePrevBtn = getElement(".firstLeft");
const slideOneNextBtn = getElement(".firstRight");
const slideOneNumber = getElement(".slideNumber");
let currentSlide = slideOne.length - slideOne.length;
let slideOneLength = slideOne.length;

console.log(currentSlide, slideOneLength);

window.addEventListener("load", () => {
  displayfirstSlider(slideOne, currentSlide);
  displaySecondSlider(slideTwo, currentSlideNumber2);
  displayBandMember(bandMember, currentBand);
});

function displayfirstSlider(slide, num) {
  slideOneNumber.innerHTML = `0${num + 1}/0${slide.length}`;
  slideOneContainer.innerHTML = `<div
  class="first one_slider_item main_text_background_primary_background"
>
  <h2>${slideOne[num].headline}</h2>
  <p>
    <span>${slideOne[num].beginingText}</span>, ${slideOne[num].text}
  </p>
</div>
<div
  class="second one_slider_item main_text_background_primary_background"
>
  <h2></h2>
  <h2>${slideOne[num].headline2}!</h2>
  <p>
    <span>${slideOne[num].beginingText2}</span>, ${slideOne[num].text2}
  </p>`;
}

console.log(slideOne);

slideOneNextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide > slideOne.length - 1) {
    currentSlide = 0;
  }
  if (currentSlide > slideOne.length - 1) {
  }

  displayfirstSlider(slideOne, currentSlide);
});
slideOnePrevBtn.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slideOne.length - 1;
  }
  displayfirstSlider(slideOne, currentSlide);
});

// secons slider
const slideTwoContainer = getElement(".fifth_text");
const prevTwoBtn = getElement(".prev2");
const nextTwoBtn = getElement(".next2");
let currentSlideNumber2 = slideTwo.length - slideTwo.length;

function displaySecondSlider(array, num) {
  slideTwoContainer.innerHTML = `
    <h2>${slideTwo[num].headline}/h2>
    <h2>${slideTwo[num].headline2}</h2>
    <p>
      <span>${slideTwo[num].beginingText}</span>${slideTwo[num].text}
    </p>`;
}
prevTwoBtn.addEventListener("click", () => {
  currentSlideNumber2--;
  if (currentSlideNumber2 < 0) {
    currentSlideNumber2 = slideTwo.length - 1;
  }
  displaySecondSlider(slideTwo, currentSlideNumber2);
});

nextTwoBtn.addEventListener("click", () => {
  currentSlideNumber2++;
  if (currentSlideNumber2 > slideTwo.length - 1) {
    currentSlideNumber2 = 0;
  }
  displaySecondSlider(slideTwo, currentSlideNumber2);
});

//bend member slide
const band = getElement(".eight_one_slide");
const prevBand = getElement(".prevBand");
const nextBand = getElement(".nextBand");
let currentBand = bandMember.length - bandMember.length;

function displayBandMember(arr, num) {
  band.innerHTML = `<div class="eight_img"></div>
  <div class="main_headline_background_primary_background">
    <h1><span>${arr[num].name}</span> ${arr[num].surname}</h1>
  </div>
  <div class="main_text_background_primary_background band">
    <p>
      <span>${arr[num].beginingText}</span>${arr[num].text}
    </p>
  </div>`;
}

prevBand.addEventListener("click", () => {
  currentBand--;
  if (currentBand < 0) {
    currentBand = bandMember.length - 1;
  }
  displayBandMember(bandMember, currentBand);
});
nextBand.addEventListener("click", () => {
  currentBand++;
  if (currentBand > bandMember.length - 1) {
    currentBand = 0;
  }
  displayBandMember(bandMember, currentBand);
});

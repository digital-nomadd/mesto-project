// кладем в переменную контейнер 
const main = document.querySelector('.main'); 

// кладем в переменную кнопку edit-profile
const profileEditButton = main.querySelector('.profile__edit-button');

// кладем в переменную popup-форму
const profileEditPopup = document.querySelector('.popup'); 

// кладем в переменную кнопку закрытия popup-формы
const profileСloseButton = document.querySelector('.popup__close-button');

// функция toggle для popup-формы
function togglePopup() {
  profileEditPopup.classList.toggle('popup_opened');
}

// слушатель событий для кнопки edit-profile
profileEditButton.addEventListener('click', togglePopup);

// слушатель событий для кнопки popup__close-button
profileСloseButton.addEventListener('click', togglePopup);









const cardLikeButton = main.querySelectorAll('.card__button');
console.log(cardLikeButton);

// функция toggle для кнопки лайка на карточках
function toggleLikeButton() {
  cardLikeButton.classList.toggle('card__button_active');
}

cardLikeButton.addEventListener('click', toggleLikeButton);

// ########## Открытие Попапов ##########

// ---------- Открытие Edit popup со значениями----------
const profileEditButtonElement = document.querySelector('.profile__edit-button');
const profileEditPopupElement = document.querySelector('.popup_type_edit'); 

const profileTitleElement = document.querySelector('.profile__title');
const profileSubtitleElement = document.querySelector('.profile__subtitle');

const profileEditPopupFormElement = profileEditPopupElement.querySelector('.popup__form');
const profileEditPopupNameElement = profileEditPopupElement.querySelector('.popup__input_el_name'); 
const profileEditPopupAboutElement = profileEditPopupElement.querySelector('.popup__input_el_about');

profileEditButtonElement.addEventListener('click', function() {              
  openPopup(profileEditPopupElement);                                       
  profileEditPopupNameElement.value = profileTitleElement.textContent;      
  profileEditPopupAboutElement.value = profileSubtitleElement.textContent;
});

// ---------- Открытие Add popup ----------
const profileAddPlaceButtonElement = document.querySelector('.profile__button');
const profileAddPlacePopupElement = document.querySelector('.popup_type_add');
const profileAddPlaceFormElement = profileAddPlacePopupElement.querySelector('.popup__form');
const profileAddPlaceTitleElement = profileAddPlacePopupElement.querySelector('.popup__input_el_place');
const profileAddPlaceLinkElement = profileAddPlacePopupElement.querySelector('.popup__input_el_link');

profileAddPlaceButtonElement.addEventListener('click', function() {
  openPopup(profileAddPlacePopupElement);
});

// ----------Сама Функция открытия ----------
function openPopup(popup) {
  popup.classList.add('popup_opened');
} 

// ########## Закрытие Попапов ##########

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

const closeButtonElements = document.querySelectorAll('.popup__close-button');

closeButtonElements.forEach(closeBtn => {
  const popup = closeBtn.closest('.popup');
  closeBtn.addEventListener('click', () => closePopup(popup));
});


// ########## Сохранение введенных данных Edit-popup ##########

function saveEditPopupData(evt) {
  evt.preventDefault(); // убираем дефолтную перезагрузку страницы
  profileTitleElement.textContent = profileEditPopupNameElement.value;
  profileSubtitleElement.textContent = profileEditPopupAboutElement.value;
  closePopup(profileEditPopupElement);
}

profileEditPopupFormElement.addEventListener('submit', saveEditPopupData);


// ########## Отображение 6 карточек из коробки ##########



const cards = document.querySelector('.cards');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

/* Находим и задаем переменные попапа с отображением картинки на карточке */
const popupPlace = document.querySelector('.popup-place');
const popupPlaceImage = popupPlace.querySelector('.popup-place__image');
const popupPlaceCaption = popupPlace.querySelector('.popup-place__caption');

/*Функция открытия картинки*/
function openImagePopup (image, caption) {
  openPopup(popupPlace);
  popupPlaceImage.setAttribute('src', image);
  popupPlaceCaption.textContent = caption;
  popupPlaceImage.setAttribute('alt', caption);
}

function createCard(src, alt) {
  const cardTemplateElement = document.querySelector('#card-template').content;
  const cardElement = cardTemplateElement.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');

  cardImage.setAttribute('src', src);
  cardImage.setAttribute('alt', alt);
  cardElement.querySelector('.card__title').textContent = alt;
  /*Слушатель событий на иконку лайка на карточке*/
  cardElement.querySelector('.card__button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__button_active');   // реализайция лайка
  });
  cardElement.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });
    /*Слушатель событий на картинку карточки, при клике на которую запускается функция openImagePopup*/
    cardImage.addEventListener('click', function (evt) {
    openImagePopup(src, alt);
  });
  return cardElement;
}

/*Добавление новой карточки*/
function addNewCard(src, alt) {
  const card = createCard(src, alt);
  cards.prepend(card);
}

/*Карточки из коробки*/
initialCards.forEach(function (item) {
  addNewCard(item.link, item.name);
});

/*Добавление карточки вручную*/
function saveCard(evt) {
  evt.preventDefault();
  const title = profileAddPlaceTitleElement.value;
  const link = profileAddPlaceLinkElement.value;
  addNewCard(title, link);
  evt.target.reset();

  closePopup(profileAddPlacePopupElement);
}

profileAddPlaceFormElement.addEventListener('submit', saveCard);
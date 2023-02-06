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


//Кнопки(переменные)
const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const closePopupEditBtn = document.querySelector('.popup__button-close');
const closePopupAddBtn = document.querySelector('.popup__button-close_add');
const likeCardBtn = document.querySelector('.card__like');
//Попапы(переменные)
const editPopup = document.querySelector('.profile-popup');
const addPopup = document.querySelector('.popup_add');
const popups = document.querySelectorAll(".popup");
const popupFullScreen = document.querySelector(".popup-FullScreen");

//Формы
const formElement = document.querySelector('.popup__form-edit');
const formElementAdd = document.querySelector('.popup__form-edit_add');

//Текстконтент и инпуты
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('.popup__input-name');
const inputDescription = document.querySelector('.popup__input-description');
const inputCardName = document.querySelector('.popup__input-name_add');
const inputCardDescription = document.querySelector('.popup__input-description_add');

//Имя и картинка
const cardName = document.querySelector('.card__name');
const cardImage = document.querySelector('.card__image');
const popupName = document.querySelector('.popup__name-FullScreen');
const popupImg = document.querySelector('.popup__img-FullScreen');

//template
const cardTemplate = document.querySelector('#template').content;
const cardsGrid = document.querySelector('.grid-cards');

//Функции открытия закрытия попапов.
const openPopup = (popup) => {
    popup.classList.add('popup_opened');
}

const closePopup = popup => {
  popup.classList.remove('popup_opened');
}

const openEditPopup = () => {
  openPopup(editPopup)
}

const openAddPopup = () => {
  openPopup(addPopup)
}

popups.forEach((popup) => { 
  popup.addEventListener('mousedown', (evt) => { 
    if (evt.target.classList.contains('popup_opened')) { 
      closePopup(popup); 
    }; 
    if (evt.target.classList.contains('popup__close')) { 
      closePopup(popup); 
    }; 
  }); 
});

const handleLike = (evt) => {
    evt.target.classList.toggle('card__like_active');
}

const handleDelete = (evt) => {
    evt.target.closest(".card").remove();
}

const handleOpenFullscreen = (evt) => {
  openPopup(popupFullScreen);
  const target = evt.target;
  const cardName = target.closest('.card').querySelector('.card__name');
  popupImg.src = target.src;
  popupName.textContent = cardName.textContent;
  popupName.alt = cardName.textContent;
}


const createCard = (card) => { 
    const itemCard = cardTemplate.cloneNode(true);
    const imageCard = itemCard.querySelector(".card__image"); 
    itemCard.querySelector(".card__name").textContent = card.name; 
    imageCard.src = card.link; 
    imageCard.alt = card.name; 
    itemCard.querySelector('.card__like').addEventListener('click', handleLike);
    itemCard.querySelector('.card__button-delete').addEventListener('click', handleDelete);
    itemCard.querySelector('.card__open-fullscreen').addEventListener('click', handleOpenFullscreen);
    
    return itemCard; 
  
  }

const renderCards = (cards) => {
    cards.forEach((card) => {
        cardsGrid.prepend(createCard(card));
    });
}

renderCards(initialCards);

const handleFormSubmit = (evt) => {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
}

const handleFormCardSubmit = () => {
    cardTemplate.querySelector('.card__image').src = inputCardDescription.value;
    cardTemplate.querySelector('.card__name').textContent = inputCardName.value;
    cardsGrid.prepend(cardTemplate);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
formElementAdd.addEventListener("submit", (event) => { 
    event.preventDefault();  
    handleFormCardSubmit(); 
});




//Слушатели событий
editBtn.addEventListener('click', openEditPopup);
addBtn.addEventListener('click', openAddPopup);
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
//Попапы(переменные)
const editPopup = document.querySelector('.profile-popup');
const addPopup = document.querySelector('.popup_add');

//Формы
const formElement = document.querySelector('.popup__form-edit');

//Текстконтент и инпуты
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const inputName = document.querySelector('.popup__input-name');
const inputDescription = document.querySelector('.popup__input-description');
const inputCardName = document.querySelector('.popup__input-name_add');
const inputCardDescription = document.querySelector('.popup__input-description_add');

//Функции открытия закрытия попапов.
const openEditPopup = () => {
    editPopup.classList.add('popup_opened');
}

const closeEditPopup = () => {
    editPopup.classList.remove('popup_opened');
}

const openAddPopup = () => {
    addPopup.classList.add('popup_opened');
}

const closeAddPopup = () => {
    addPopup.classList.remove('popup_opened');
}


function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closeEditPopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit); 




//Слушатели событий
editBtn.addEventListener('click', openEditPopup);
addBtn.addEventListener('click', openAddPopup);
closePopupEditBtn.addEventListener('click', closeEditPopup);
closePopupAddBtn.addEventListener('click', closeAddPopup);
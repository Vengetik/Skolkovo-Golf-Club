'use strict';
const sendButton = document.querySelector('.main__button');
const voteModal = document.querySelector('.modal__vote');
const modalLayer = document.querySelectorAll('.modals__layer-around');
const modalForm = document.querySelector('.vote__form');
const modalSubmit = modalForm.querySelector('input[type="submit"]');
const modalHeading = voteModal.querySelector('.vote__heading');
const mainModals = document.querySelector('.main__modals');
const checkbox = document.querySelectorAll('input[type="radio"]');
const voteCard = document.querySelectorAll('.card__image');

const voteButtonMore = document.querySelectorAll('.vote__button--more');

const trainerModals = document.querySelector('.trainer__modals');
const trainerModalsContent = document.querySelectorAll('.trainer__content');

const removeCheck = () => {
  voteCard.forEach( (it, index) => {
    if (it.classList.contains('checked')) {
      it.classList.remove('checked');
      checkbox[index].checked = false;
    }
  })
};

const chooseTrainer = () => {
  for (let i = 0; i < checkbox.length; i++) {
    removeCheck();
    if (checkbox[i].checked) {
      voteCard[i].classList.add('checked');
      break
    }
    // if(document.getElementsByClassName("checked").length>1){
    //   alert("Пожалуйста, выберите только одного тренера.");
    //   checkbox[i].checked = false;
    //   voteCard[i].classList.remove("checked");
    // }
  }
};

const hideTrainerModal = () => {
  trainerModals.classList.add('hidden');
  trainerModalsContent.forEach( (it) => {
    if (!it.classList.contains('hidden')) {
      it.classList.add('hidden');
    }
  })
};

checkbox.forEach( (it) => {
  it.addEventListener('click', chooseTrainer);
});

document.addEventListener('keydown', function onModalClose(evt) {
  if (evt.keyCode === 27) {
    mainModals.classList.add('hidden');
    hideTrainerModal();
  }
});

sendButton.addEventListener('click', function onVoteButtonClick(evt) {
  mainModals.classList.toggle('hidden');
});

modalLayer.forEach((it) => {
  it.addEventListener('click', function onModalLayerClick() {
    if (!mainModals.classList.contains('hidden')) {
      mainModals.classList.add('hidden');
    }
    hideTrainerModal();
})
});
modalSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalHeading.style.display = 'none';
  modalForm.style.display = 'none';
  modalSubmit.style.display = 'none';
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Вы успешно отправили голос!';


  voteModal.insertBefore(h1, voteModal.children[1]);
});

voteButtonMore.forEach((it, index) => {
  it.addEventListener('click', function (evt) {
    evt.preventDefault();
    trainerModals.classList.toggle('hidden');
    trainerModalsContent[index].classList.toggle('hidden');
  })
});
const voteTrainerButton = document.querySelector('.vote__button--trainer');
voteTrainerButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  hideTrainerModal();
  mainModals.classList.toggle('hidden');
});

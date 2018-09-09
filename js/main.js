'use strict';
const sendButton = document.querySelector('.main__button');
const voteModal = document.querySelector('.modal__vote');
const modalLayer = document.querySelector('.modals__layer-around');
const modalForm = document.querySelector('.vote__form');
const modalSubmit = modalForm.querySelector('input[type="submit"]');
const modalHeading = voteModal.querySelector('.vote__heading');
const mainModals = document.querySelector('.main__modals');
const checkbox = document.querySelectorAll('input[type="checkbox"]');
const voteCard = document.querySelectorAll('.card__image');

const voteButtonChoose = document.querySelectorAll('.vote__button--choose');
const voteButtonMore = document.querySelectorAll('.vote__button--more');

const chooseTrainer = () => {
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      voteCard[i].classList.add('checked');
    } else {
      voteCard[i].classList.remove('checked');
    }
    if(document.getElementsByClassName("marked").length>1){
      alert("Please select only one check box");
      checkbox[i].checked=false;
      checkbox[i].classList.remove("checked");
    }
  }
};
checkbox.forEach( (it) => {
  it.addEventListener('click', chooseTrainer);
});

document.addEventListener('keydown', function onModalClose(evt) {
  if (evt.keyCode === 27) {
    mainModals.classList.add('hidden');
    document.removeEventListener('keydown', onModalClose);
  }
});

sendButton.addEventListener('click', function onVoteButtonClick(evt) {
  mainModals.classList.toggle('hidden');
});

modalLayer.addEventListener('click', function onModalLayerClick() {
  mainModals.classList.toggle('hidden');
});
modalSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalHeading.style.display = 'none';
  modalForm.style.display = 'none';
  modalSubmit.style.display = 'none';
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Вы успешно отправили голос!';
  h1.style.marginTop = '20%';

  voteModal.insertBefore(h1, voteModal.children[1]);
});




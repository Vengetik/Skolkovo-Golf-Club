'use strict';
const voteButton = document.querySelector('.main__button');
const voteModal = document.querySelector('.modal__vote');
const modalLayer = document.querySelector('.modals__layer-around');
const modalForm = document.querySelector('.vote__form');
const modalSubmit = modalForm.querySelector('input[type="submit"]');
const modalHeading = voteModal.querySelector('.vote__heading');

const checkbox = document.querySelectorAll('input[type="checkbox"]');

voteButton.addEventListener('click', function onVoteButtonClick(evt) {

  voteModal.classList.toggle('hidden');
  modalLayer.classList.toggle('hidden');
});

modalLayer.addEventListener('click', function onModalLayerClick() {
  voteModal.classList.toggle('hidden');
  modalLayer.classList.toggle('hidden');
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

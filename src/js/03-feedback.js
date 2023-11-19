import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const msg = document.querySelector('textarea[name=message]');

const saveDate = function () {
  const values = {
    email: email.value,
    message: msg.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(values));
};
const getValues = function () {
  const stringValues = localStorage.getItem('feedback-form-state');
  const correctValues = JSON.parse(stringValues);
  email.value = correctValues.email;
  msg.value = correctValues.message;
};

const clearFun = function (event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  msg.value = '';
};
form.addEventListener('input', throttle(saveDate, 1000));
form.addEventListener('submit', throttle(clearFun, 1000));
window.addEventListener('DOMContentLoaded', getValues);

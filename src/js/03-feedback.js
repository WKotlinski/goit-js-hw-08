import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const msg = document.querySelector('textarea[name=message]');
const timerValue = 500;

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
  const values = {
    email: email.value,
    msg: msg.value,
  };
  console.log(values);
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  msg.value = '';
};
form.addEventListener('input', throttle(saveDate, timerValue));
form.addEventListener('submit', throttle(clearFun, timerValue));
window.addEventListener('DOMContentLoaded', getValues);

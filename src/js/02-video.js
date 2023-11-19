import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const video = document.querySelector('#vimeo-player');
const player = new Player(video);
const timerValue = 1000;
player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, timerValue)
);
window.addEventListener('DOMContentLoaded', () => {
  const timer = localStorage.getItem('videoplayer-current-time');
  if (timer !== null) {
    player.setCurrentTime(timer);
  }
});

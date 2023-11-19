import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const video = document.querySelector('#vimeo-player');
const player = new Player(video);
player.on(
  'timeupdate',
  throttle(event => {
    localStorage.setItem('videoplayer-current-time', event.seconds);
  }, 500)
);
window.addEventListener('DOMContentLoaded', () => {
  const timer = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(timer);
});

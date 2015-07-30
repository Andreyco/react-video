"use strict";

// "No operation" function.
export function noop () {};

// Request fullscreen for given element.
export function enterFullscreen (element)
{
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

// Exit fullscreen
export function exitFullscreen ()
{
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if(document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if(document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if(document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

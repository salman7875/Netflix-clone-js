'use strict'

const movieContainer = document.querySelector('.movies-container')

const leftBtn = document.querySelector('.slider-left')
const rightBtn = document.querySelector('.slider-right')

leftBtn.addEventListener('click', function (e) {
  movieContainer.style.transform = `translateX(2px)`
})

rightBtn.addEventListener('click', function (e) {
  movieContainer.style.transform = `translateX(-500px)`
})

'use strict'

// INDEX PAGE
const btnAction = document.querySelectorAll('.btn--action')

const btnOpen = document.querySelectorAll('.btn--open')
const btnClose = document.querySelectorAll('.btn--close')

btnOpen.forEach(btn => {
  btn.addEventListener('click', function (e) {
    const containerItem = document.querySelector('.item')
    btn.style.transform = 'rotate(90deg)'
    containerItem.classList.toggle('open')
  })
})

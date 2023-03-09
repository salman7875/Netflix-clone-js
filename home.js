'use strict'

// API
const BASE_URL = `https://api.themoviedb.org/3/`
const API_KEY = `?api_key=62383ddaefde6ba60f4b5d5c2a7ddf56`

// DOM
const container = document.querySelector('.container')
const movieContainer = document.querySelector('.movies-container')
const labelTitle = document.querySelector('.info-title')
const labelDesc = document.querySelector('.info-desc')

const leftBtn = document.querySelector('.slider-left')
const rightBtn = document.querySelector('.slider-right')

leftBtn.addEventListener('click', function (e) {
  movieContainer.style.transform = `translateX(2px)`
})

rightBtn.addEventListener('click', function (e) {
  movieContainer.style.transform = `translateX(-500px)`
})

// GET SINGLE POSTER MOVIE
const fetchPosterMovie = async () => {
  const res = await fetch(`${BASE_URL}movie/popular${API_KEY}`)
  const data = await res.json()
  const results = data.results
  const resultPoster = results[Math.floor(Math.random() * 10)]
  container.style.backgroundImage = `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://image.tmdb.org/t/p/w500${resultPoster.poster_path})`
  labelTitle.textContent = resultPoster.original_title
  labelDesc.textContent = resultPoster.overview
  return results
}

fetchPosterMovie().then(res => console.log(res[0]))

// GET ALL POPULAR MOVIES
const fetchPopularMovies = async () => {
  const res = await fetch(`${BASE_URL}movie/popular${API_KEY}`)
  const data = await res.json()
  const results = data.results

  results.forEach(result => {
    movieContainer.innerHTML += `
    <div class="movie">
      <img src=${`https://image.tmdb.org/t/p/w500${result.poster_path}`} />
    </div>
    `
  })
  return results
}

fetchPopularMovies().then(res => res.map(r => console.log(r)))

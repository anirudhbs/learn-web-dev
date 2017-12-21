const url = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
const main = document.getElementById('main')
fetch(url).then(function (response) {
  response.text().then(function (text) {
    main.textContent = text
  })
})

const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'

const request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function () {
  const superHeroes = request.response
  populateHeader(superHeroes)
}

function populateHeader(jsonObj) {
  const myH1 = document.createElement('h1')
  const main = document.getElementById('main')
  myH1.textContent = jsonObj.squadName
  main.appendChild(myH1)

  const myPara = document.createElement('p')
  myPara.textContent = `Hometown: ${jsonObj.homeTown}, Formed: ${jsonObj.formed}`
  main.appendChild(myPara)
}

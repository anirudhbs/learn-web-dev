const root = document.querySelector('div')
const two = document.getElementById('two')
root.textContent = 'Hello world!'

root.addEventListener('click', function () {
  two.textContent = 'OCEAN'
  console.log('KKona')
}, {
  once: true
})

const img = document.querySelector('img')
img.addEventListener('click', function () {
  const source = img.getAttribute('src')
  if (source === 'images/profile.jpg') {
    img.setAttribute('src', 'images/childish-g.png')
  } else {
    console.log('.')
  }
})

function setUserName() {
  const name = prompt('Enter your name')
  localStorage.setItem('name', name)
  two.textContent = `Hello, ${name}`
}

window.onload = function () {
  setUserName()
}

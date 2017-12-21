const button = document.getElementById('add')

button.addEventListener('click', function () {
  const value = document.getElementById('content')
  const list = document.querySelector('ul')
  const newItem = document.createElement('li')
  newItem.textContent = value.value
  list.appendChild(newItem)
})

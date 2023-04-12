const userForm = document.querySelector('.form2');
userForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const obj = new FormData(userForm);
  const data = Object.fromEntries(obj)
  fetch('/users/createuser', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(result => result.json())
    .catch(console.log)
})
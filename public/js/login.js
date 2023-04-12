const signin = document.querySelector('.sign');
signin.addEventListener('submit', (e) => {
  e.preventDefault()
  const obj = new FormData(signin);
  const data = Object.fromEntries(obj)
  fetch('/users/signinuser', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(result => result.json())
  .then(data => {
    if(data.message === "Success"){
      window.location.href = "/users/home";
    }
  })
  .catch(console.log)
})
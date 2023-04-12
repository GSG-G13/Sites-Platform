const signin = document.querySelector('.sign');
const email = document.getElementById('email')
const password = document.getElementById('password')

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
      if (data.message === "Success") {
        window.location.href = "/users/home";
      } else if (data.message === "Password is not correct") {
        alert('Password is not correct')
      } else if (data.message === "Please Create Account First") {
        alert('user not found !! Please Create Account First')
      }
      return data;
    })

})

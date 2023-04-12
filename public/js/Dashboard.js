
const form = document.querySelector(".form");
//fetch


const createPost = (data) => {
  for (let i = 0; i < data.length; i++) {

    const container = document.createElement('div');
    container.className = 'friends_post';

    const title = document.createElement('p');
    title.textContent = data[i].title;

    const img = document.createElement('img');
    img.src = data[i].photo_website;

    const info = document.createElement('div');
    info.className = 'info';

    const description = document.createElement('p');
    description.className = 'description';
    description.textContent = data[i].description;

    info.appendChild(description);
    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(info);

    const main = document.querySelector('.main');
    main.appendChild(container);
  }
};
const FetchData = (obj) => {
  fetch(`/users/post`, {
    method: "POST",
    headers: {
      Accept: "application/json text/plain */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((result) => result.json())
    .then((data) => {
      createPost(data)
    });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const newData = Object.fromEntries(data);

  const obj = {
    title: newData.title,
    description: newData.description,
    url: newData.url,
    photo_website: newData.photo_website,
  };
  FetchData(obj)

});

const getDataUser = ()=>{
  fetch('/users/post', {
    method: 'GET',
    headers: {
      Accept: "application/json text/plain */*",
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    createPost(data)
  })
  .catch(error => console.error(error))
  
}
getDataUser();

const form = document.querySelector(".form");
const userName = document.querySelector('.userName')
const imgNav = document.querySelector('.user img');
//fetch


const createPost = (data) => {
  for (let i = 0; i < data.length; i++) {
    const main = document.querySelector('main');
    const container = document.createElement('div');
    container.classList.add('friends_post');

    const friendPostTop = document.createElement('div');
    friendPostTop.classList.add('friend_post_top');


    const imgAndName = document.createElement('div');
    imgAndName.classList.add('img_and_name');

    const img = document.createElement('img');
    img.src = data[i].photo;


    const friendsName = document.createElement('div');
    friendsName.classList.add('friends_name');

    const friendsNamePara = document.createElement('p');
    friendsNamePara.classList.add('friends_name');
    friendsNamePara.textContent = data[i].username;


    const timePara = document.createElement('p');
    timePara.classList.add('time');
    const newData = data[i].created_at;
    timePara.textContent = newData.slice(0, 16).split('T').join(' ');
    const userGroupIcon = document.createElement('i');
    userGroupIcon.classList.add('fa-solid', 'fa-user-group');

    timePara.appendChild(userGroupIcon);
    imgAndName.appendChild(img);
    friendsName.appendChild(friendsNamePara);
    friendsName.appendChild(timePara);
    imgAndName.appendChild(friendsName);

    const mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = data[i].title;

    const link = document.createElement('a');
    link.classList.add('live');
    link.textContent = 'live';
    link.setAttribute('target', "_blank");
    link.href = data[i].url;


    const img2 = document.createElement('img');
    img2.src = data[i].photo_website;


    const info = document.createElement('div');
    info.classList.add('info');
    setTimeout(()=>{
      container.style.transform = 'translateX(0px)'
    },100)

    friendPostTop.appendChild(imgAndName);
    container.appendChild(img2);
    mainContent.appendChild(title);
    mainContent.appendChild(link);
    container.appendChild(mainContent);
    container.appendChild(friendPostTop);
    container.appendChild(info);

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

const getDataUser = () => {
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
fetch('/users/posts').then(res => res.json()).then(data => {
  imgNav.src = data.photo;
  userName.textContent = data.username;
}
);

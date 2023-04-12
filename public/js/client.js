const main = document.querySelector('.main');
const userName = document.querySelector('.userName')
// const searchBar = document.querySelector("#search-form").querySelector("input");
const nav = document.querySelector('.nav');
const user = (data) => {
  const user = document.createElement('div')
  user.classList.add('user')
  const img = document.createElement('img');
  img.src = data.photo;
  const link = document.createElement('a')
  link.setAttribute("href", '/users/dashboard')
  const h2 = document.createElement('h2')
  h2.textContent = data.username
  link.appendChild(h2)
  user.appendChild(link)
  user.appendChild(img)
  nav.appendChild(user)
}
const createPost = (data) => {
  console.log(data.data);
  main.innerHTML = ''
  if(data.data.length === 0){
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('errorDiv');
    const errorPara = document.createElement('p');
    errorPara.classList.add('errorPara');
    errorPara.textContent = "there is no data for this user";
    setTimeout(()=>{
      errorDiv.style.transform = 'scale(1)'
    },100)
    errorDiv.appendChild(errorPara)
    main.appendChild(errorDiv)
    return
  }

  data.data.forEach(post => {
    const container = document.createElement('div');
    container.classList.add('friends_post');


    const friendPostTop = document.createElement('div');
    friendPostTop.classList.add('friend_post_top');


    const imgAndName = document.createElement('div');
    imgAndName.classList.add('img_and_name');

    const img = document.createElement('img');
    img.src = post.photo;


    const friendsName = document.createElement('div');
    friendsName.classList.add('friends_name');

    const friendsNamePara = document.createElement('p');
    friendsNamePara.classList.add('friends_name');
    friendsNamePara.textContent = post.username;


    const timePara = document.createElement('p');
    timePara.classList.add('time');
    const newData = post.created_at;
    // timePara.textContent = newData.slice(0, 16).split('T').join(' ');
    const userGroupIcon = document.createElement('i');
    userGroupIcon.classList.add('fa-solid', 'fa-user-group');

    timePara.appendChild(userGroupIcon);
    friendsName.appendChild(friendsNamePara);
    friendsName.appendChild(timePara);
    imgAndName.appendChild(img);
    imgAndName.appendChild(friendsName);

    const title = document.createElement('p');
    title.textContent = post.title;


    const img2 = document.createElement('img');
    img2.src = post.photo_website;


    const info = document.createElement('div');
    info.classList.add('info');


    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = post.description

    setTimeout(()=>{
      container.style.transform = 'translateX(0px)'
    },100)

    friendPostTop.appendChild(imgAndName);
    container.appendChild(friendPostTop);
    container.appendChild(title);
    container.appendChild(img2);
    info.appendChild(description);
    container.appendChild(info);

    main.appendChild(container);

  })



}


userName.addEventListener('click', () => {
  fetch('/users/Dashboard', {
    method: 'GET',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'text/html'
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data.message);
      if (data.message === "Success") {
        window.location.href = "/users/Dashboard";
      }
    })
    .catch(console.log)
})
fetch('/users/posts').then(res => res.json()).then(data => {
  createPost(data);
  user(data);
}
);

const search = document.querySelector('.input')
const searchbtn = document.querySelector('.btn')
searchbtn.addEventListener('click', () => {

  fetch(`/users/userfilteredposts/${search.value}`).then(result => result.json()).then(data => {

    createPost(data)
  })
})

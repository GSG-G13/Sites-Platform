const main = document.querySelector('.main');
const userName = document.querySelector('.userName')
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
    const container = document.createElement('div');
    container.classList.add('friends_post');

    const friendPostTop = document.createElement('div');
    friendPostTop.classList.add('friend_post_top');


    const imgAndName = document.createElement('div');
    imgAndName.classList.add('img_and_name');

    const img = document.createElement('img');
    img.src = data.photo;


    const friendsName = document.createElement('div');
    friendsName.classList.add('friends_name');

    const friendsNamePara = document.createElement('p');
    friendsNamePara.classList.add('friends_name');
    friendsNamePara.textContent = data.username;


    const timePara = document.createElement('p');
    timePara.classList.add('time');
    const newData = data.created_at;
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
    title.textContent = data.title;

    const link = document.createElement('a');
    link.classList.add('live');
    link.textContent = 'live';
    link.setAttribute('target', "_blank");
    link.href = data.url;


    const img2 = document.createElement('img');
    img2.src = data.photo_website;


    const info = document.createElement('div');
    info.classList.add('info');


    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = data.description

    friendPostTop.appendChild(imgAndName);
    container.appendChild(img2);
    mainContent.appendChild(title);
    mainContent.appendChild(link);
    container.appendChild(mainContent);
    container.appendChild(friendPostTop);
    info.appendChild(description);
    container.appendChild(info);

    main.appendChild(container);


}

fetch('/users/posts').then(res => res.json()).then(data => data.data.forEach(element => {
    createPost(element);
}));

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
    data.data.forEach(element => {
        createPost(element);
    })
    user(data);
}
);

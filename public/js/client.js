const main = document.querySelector('.main');
// const searchBar = document.querySelector("#search-form").querySelector("input");
const createPost = (data) => {
    const container = document.createElement('div');
    container.classList.add('friend_post');


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
    timePara.textContent = data.created_at;
    const userGroupIcon = document.createElement('i');
    userGroupIcon.classList.add('fa-solid', 'fa-user-group');
    timePara.appendChild(userGroupIcon);


    friendsName.appendChild(friendsNamePara);
    friendsName.appendChild(timePara);

    imgAndName.appendChild(img);
    imgAndName.appendChild(friendsName);
    const title = document.createElement('p');
    title.textContent = data.title;


    const img2 = document.createElement('img');
    img2.src = data.photo_website;


    const info = document.createElement('div');
    info.classList.add('info');


    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = data.description

    friendPostTop.appendChild(imgAndName);
    container.appendChild(friendPostTop);
    container.appendChild(title);
    container.appendChild(img2);
    info.appendChild(description);
    container.appendChild(info);

    main.appendChild(container);


}

fetch('/users/posts').then(res => res.json()).then(data => data.data.forEach(element => {
    createPost(element);
}));





// const searchByUsername=(searchTerm, data)=> {
//     // Filter the data array for objects with a matching username
//     const results = data.filter(obj => obj.username.toLowerCase() === searchTerm.toLowerCase());
    
//     // Return the results array
//     return results;
//   }
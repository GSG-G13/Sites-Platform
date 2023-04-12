
// const createPost = (data) => {
//   const container = document.createElement('div');
//   container.classList.add('friend_post');


//   const friendPostTop = document.createElement('div');
//   friendPostTop.classList.add('friend_post_top');


//   const imgAndName = document.createElement('div');
//   imgAndName.classList.add('img_and_name');

//   const img = document.createElement('img');
//   img.src = data.photo;


//   const friendsName = document.createElement('div');
//   friendsName.classList.add('friends_name');

//   const friendsNamePara = document.createElement('p');
//   friendsNamePara.classList.add('friends_name');
//   friendsNamePara.textContent = data.username;


//   const timePara = document.createElement('p');
//   timePara.classList.add('time');
//   timePara.textContent = data.created_at;
//   const userGroupIcon = document.createElement('i');
//   userGroupIcon.classList.add('fa-solid', 'fa-user-group');
//   timePara.appendChild(userGroupIcon);


//   friendsName.appendChild(friendsNamePara);
//   friendsName.appendChild(timePara);

//   imgAndName.appendChild(img);
//   imgAndName.appendChild(friendsName);
//   const title = document.createElement('p');
//   title.textContent = data.title;


//   const img2 = document.createElement('img');
//   img2.src = data.photo_website;


//   const info = document.createElement('div');
//   info.classList.add('info');


//   const description = document.createElement('p');
//   description.classList.add('description');
//   description.textContent = data.description

//   friendPostTop.appendChild(imgAndName);
//   container.appendChild(friendPostTop);
//   container.appendChild(title);
//   container.appendChild(img2);
//   info.appendChild(description);
//   container.appendChild(info);

//   main.appendChild(container);


// }
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const data = new FormData(form);
//   const newData = Object.fromEntries(data);
//   console.log(newData);

//   const obj = {
//     title: newData.title,
//     description: newData.description,
//     url: newData.url,
//     photo_website: newData.photo_website,
//   };
//   fetch("/create-post", {
//     method: "POST",
//     headers: {
//       Accept: "application/json text/plain */*",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(obj),
//   })
//     .then((result) => result.json())
//     .then((data) => createPost(data.data));

//   location.reload();
// });




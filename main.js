
console.log('start')
let divForUser = document.getElementById('divForUsersId');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        console.log(users)
        for (const user of users) {
            let div = document.createElement('div');
            div.className = 'divUsers'
            div.innerText = `${user.name} ${user.id}`;
            let btnForEachUser = document.createElement('a');
            btnForEachUser.innerText = 'Details';
            btnForEachUser.className = 'btnForEachUser';
            btnForEachUser.href = `user-details.html?id=${user.id}`;


            div.appendChild(btnForEachUser);
            divForUser.appendChild(div);
        }
    });
console.log('end');

// new Promise((resolve) => {
//     let x = 0
//     setTimeout(() => {
//         ++x;
//         console.log('log-1', x);
//         resolve(x);
//     }, 500);
// })
//     .then((xx) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 ++xx;
//                 console.log('log-2', xx);
//                 resolve(xx);
//             }, 500)
//         })
//     })
//     .then((xxx) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 ++xxx
//                 if (xxx === 3) {
//                     reject('asdqwe');
//                 }
//                 console.log('log-3', xxx);
//                 resolve(xxx)
//             }, 500)
//         })
//     })
//     .catch(reason => console.log(reason));


// async function fetchPosts0fUser(userId) {
//     let user = await fetch('https://jsonplaceholder.typicode.com/users/' +userId).then(response => response.json());
//     console.log(user);
//     let posts = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' +user.id).then(response => response.json());
//     console.log(posts);
//     return true;
//
// }
//
// fetchPosts0fUser(1);
// fetchPosts0fUser(3)
//
//


// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then((value) => value.json())
//     .then(user => fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id))
//     .then(response => response.json())
//     .then(result => console.log(result))


// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(value => value.json())
//     .then(user => {
//         return new Promise((resolve) => {
//             fetch('https://jsonplaceholder.typicode.com/posts?userId=' + user.id)
//                 .then(value => resolve(value))
//                 console.log(user)
//                 console.log(user.id)
//         })
// })
// .then(response => response.json())
// .then(value => console.log(value));
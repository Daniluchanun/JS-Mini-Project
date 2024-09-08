function getQueryParam() {
    return window.location.search.substring(1);
}
const userId = getQueryParam();
console.log(userId);

let div = document.getElementById('divForFullInfoOfPost')
let blockForComment = document.getElementById('MainDivForUserComments');

fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
    .then(response => response.json())
    .then(fullInfo => {
            div.innerHTML =
                `<p><b>UserId:</b> ${fullInfo.userId}</p>
                <p><b>Id:</b> ${fullInfo.id}</p>
                <p><b>Title:</b> ${fullInfo.title}</p>
                <p><b>Body:</b> ${fullInfo.body}</p>
                `
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=` + fullInfo.id)
                .then(response => response.json())
                .then(usersArray => {
                    console.log(usersArray);
                    for (const item of usersArray) {
                        blockForComment.innerHTML +=
                            `<div class="postComments">
                            <p><b>PostId:</b> ${item.postId}</p>
                            <p><b>Id:</b> ${item.id}</p>
                            <p><b>Name:</b> ${item.name}</p>
                            <p><b>Email:</b> ${item.email}</p>
                            <p><b>Comments:</b> ${item.body}</p>
                            </div>
                            `
                    }
                })
    })


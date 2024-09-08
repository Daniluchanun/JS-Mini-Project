function getQueryParam() {
    let queryString = window.location.search.substring(1);
    let keyValue = queryString.split('=');
    let key = keyValue[0];
    let value = keyValue[1];
    let params = {};
    params[key] = decodeURIComponent(value);
    return params;
}

const params = getQueryParam();
const userId = params['id'];

let divForSpecificUser = document.getElementById('userDetails');
let userPostsTitles = document.getElementById('userTitles');
userPostsTitles.className = 'userPostsTitles';

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        divForSpecificUser.innerHTML =
            `<p><b>Name:</b> ${user.name}</p>
            <p>Username: ${user.username}</p>
            <p>Id: ${user.id}</p>
            <p>Email: ${user.email}</p>
            <p>Phone number: ${user.phone}</p>
            <p>Website: ${user.website}</p>
            <h4>Adress:</h4>
                <p>Street: ${user.address.street}</p>
                <p>Suite: ${user.address.suite}</p>
                <p>City: ${user.address.city}</p>
                <p>Zipcode: ${user.address.zipcode}</p>
            <h4>Geo:</h4>    
                <p>lat: ${user.address.geo.lat}</p>
                <p>lng: ${user.address.geo.lng}</p>
            <h4>Company:</h4>
                <p>Name: ${user.company.name}</p>
                <p>Catch phrase: ${user.company.catchPhrase}</p>
                <p>Bs: ${user.company.bs}</p>
        `;
        let btn = document.createElement('button');
        btn.innerText = 'Post of current user';
        btn.className = 'btnForUserDetails';
        divForSpecificUser.appendChild(btn);

        btn.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=` +userId)
                .then(response => response.json())
                .then(info => {
                    let x = 0;
                    for (const item of info) {
                        let titleDiv = document.createElement('div');
                        titleDiv.className = 'titlesDiv';
                        let buttonForEachTitle = document.createElement('button');
                        buttonForEachTitle.innerText = 'Details';
                        buttonForEachTitle.className = 'btnForEachUserDetails';
                        buttonForEachTitle.onclick = function () {
                            window.location.href = `post-details.html?${item.id}`;
                        }
                        ++x;
                        titleDiv.innerText = `Title ${x}: ${item.title}`
                        titleDiv.appendChild(buttonForEachTitle);
                        userPostsTitles.appendChild(titleDiv);
                    }
                    userPostsTitles = ''
                })
        }
    })

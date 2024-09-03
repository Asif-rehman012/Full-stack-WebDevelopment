const userCardTemplate = document.getElementById('profile-card-template');
const container = document.getElementById('container');

async function fetchData() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    const users = data.users;

    bindData(users); // it gives all users data from API above website link
}

function bindData(users) {
    users.forEach((user) => {
        const userCardClone = userCardTemplate.content.cloneNode(true); //template kai andr wala jaisa clone bna doo

        const userImage = userCardClone.querySelector('#user-img');
        const userName = userCardClone.querySelector('#user-name');
        const userEmail = userCardClone.querySelector('#user-email');

        userImage.src = user.image;
        userName.innerHTML = `${user.firstName} ${user.lastName}`
        userEmail.innerHTML = user.email;

        container.appendChild(userCardClone);
    })
}

fetchData();
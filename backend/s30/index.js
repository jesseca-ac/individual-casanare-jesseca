// console.log('Hello World');

// // to access an element from html, use the following, where '#clicker' is the element ID
// document.querySelector('#clicker');

// // using getElementById() requires us to identify beforehand how we get the elements. With querySelector you can be flexible in how to retrieve the elements
// document.getElementById('clicker');


// Event Listener
// const clicker = document.getElementById('clicker');
// let counter = 0;

// clicker.addEventListener('click', function() {
//     counter++;
//     console.log(`The button has been clicked ${counter} times!`);
// })


// =========

// FETCH
// fetch() has one argument by default which is the source of the data
// .then() are promise chains which allows us to process the data we receive from fetch

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);

        showPost(data);
    })


// SHOW POSTS
const showPost = function (posts) {
    let postEntries = '';

    posts.forEach(function (post) {
        postEntries += `
            <div id="post-${post.id}">
                <h3 id="post-title-${post.id}">${post.title}</h3>
                <p id="post-body-${post.id}">${post.body}</p>
                <button onclick="editPost('${post.id}')" class="btn-edit">Edit</button>
                <button onclick="deletePost('${post.id}')">Delete</button>
            </div>
        `;
    });

    // console.log(postEntries);

    document.querySelector('#div-post-entries').innerHTML = postEntries;
}


// CREATE POST
const form = document.querySelector('#form-add-post');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // this will prevent refreshing the screen

    let titleInput = document.querySelector('#txt-title');
    let bodyInput = document.querySelector('#txt-body');

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            alert('Successfully added!');

            titleInput.value = null;
            bodyInput.value = null;
        })

    console.log('Hello! The form has been submitted!');
})

// EDIT POST

// This function will add the id passed from the button and the deatils from the post to be edited.
const editPost = (id) => {
    let title = document.querySelector(`#post-title-${id}`).innerHTML
    let body = document.querySelector(`#post-body-${id}`).innerHTML

    document.querySelector('#txt-edit-id').value = id;
    document.querySelector('#txt-edit-title').value = title;
    document.querySelector('#txt-edit-body').value = body;
    document.querySelector('#btn-submit-update').removeAttribute('disabled');
}

// Update post. This function will be run when the edit form is submitted.

document.querySelector('#form-edit-post').addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: document.querySelector('#txt-edit-id').value,
            title: document.querySelector('#txt-edit-title').value,
            body: document.querySelector('#txt-edit-body').value,
            userId: 1
        }),
        headers: { 'Content-type': 'application/json' }
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        alert('Successfully updated.')

        document.querySelector('#txt-edit-id').value = null
        document.querySelector('#txt-edit-title').value = null
        document.querySelector('#txt-edit-body').value = null
        document.querySelector('#btn-submit-update').setAttribute('disabled', true);
    });

});

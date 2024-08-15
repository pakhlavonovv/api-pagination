const result = document.getElementById("result")
let pagination = document.getElementById("pagination")
let user_per_page = 10
let current_page = 1
let users = []
document.addEventListener("DOMContentLoaded", function () {
    getUsers();
    displayUsers();
    paginationUsers();
})
async function getUsers() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/comments")
        users = await res.json();
    } catch (error) {
        console.log(error)
    }
    displayUsers();
}
function displayUsers() {
    result.innerHTML = ""
    let start_index = (current_page - 1) * user_per_page
    let end_index = start_index + user_per_page
    let pagination_users = users.slice(start_index, end_index)
    pagination_users.forEach((el, index) => {
        let tr = document.createElement("tr")
        tr.innerHTML = `
        <td>${index + 1}</td>
        <td>${el.postId}</td>
        <td>${el.id}</td>
        <td>${el.name}</td>
        <td>${el.email}</td>
        <td>${el.body}</td>
        `
        result.appendChild(tr)
    })
    paginationUsers()
}
function paginationUsers(){
    pagination.innerHTML = ""
    let page_count = Math.ceil(users.length / user_per_page)
    for(let i = 1; i <= page_count; i++){
        let btn = document.createElement("button")
        btn.innerText = i
        btn.className = current_page === i ? 'btn btn-success mx-2 my-2' : 'btn btn-outline-success mx-2 my-2'
        btn.addEventListener("click", function(){
            current_page = i
            displayUsers()
        })
        pagination.appendChild(btn)
    }
}
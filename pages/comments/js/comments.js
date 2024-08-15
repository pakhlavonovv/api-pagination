const result = document.getElementById("result")
document.addEventListener("DOMContentLoaded", function(){
    getUsers();
})
async function getUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/comments")
    const users = await res.json();
    displayUsers(users);
}
function displayUsers(users){
    result.innerHTML = ""
    users.forEach((el,index) => {
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
}
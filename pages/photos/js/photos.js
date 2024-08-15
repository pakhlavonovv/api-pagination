const result = document.getElementById("result")
let users = []
let page = 1
document.addEventListener("DOMContentLoaded", function(){
    getPhotos();
    document.getElementById("prev").addEventListener("click", function(){
        if(page !== 1){
            page--;
            getPhotos();
        }
    })
    document.getElementById("next").addEventListener("click", function(){
        page++;
        getPhotos();
    })
})
async function getPhotos(){
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=10`)
        users = await res.json();
        displayPhotos();
    } catch (error) {
        console.log(error)
    }
}
function displayPhotos(){
    result.innerHTML = ""
    users.forEach((el) => {
        let div = document.createElement("div")
        div.className = 'div col-md-3 d-flex gap-8'
        div.innerHTML = `
            <div class="card">
            <div class="card-body ">
            <img src='${el.url}' alt='${el.title}' class="w-100 h-100"/>
            </div>
            <div class="card-footer">
            <p class="text-center">${el.title}</p>
            </div>
            </div>
        `
        result.appendChild(div)
    })
}
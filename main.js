let form = document.getElementById("form");
let Do_list = document.getElementById("Do_list");
let lists = document.querySelector("nav");
let list_item = document.querySelector("ul");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    Insert_list();
    console.log("hello")
})
let obj = {
    text:""
}
function Insert_list(){
    obj.text = Do_list.value;
    lists.innerHTML+=
 `
    <nav>
    <ul>
        <li onclick="line_throughs(this)">${obj.text}<button onclick="remove_list(this)" class="btn"><i class="fa-solid fa-xmark"></i></button></li>
    </ul>
</nav>
`
}
function remove_list(e){
    e.parentElement.parentElement.remove();
}

function line_throughs(e){
    e.style.textDecoration ="line-through";
}
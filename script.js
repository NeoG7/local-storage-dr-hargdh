let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", () => {
    let Data = document.getElementById("userData");
    localStorage.setItem("key", Data.value);
});

let x = localStorage.getItem("key");
let para = document.getElementById("test");
para.innerText = x;


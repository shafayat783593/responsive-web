let mnue = document.querySelector(".mune")
let body = document.querySelector("body")
let box = document.querySelector(".box")
let crox = document.querySelector(".crox")
let tage = document.querySelector(".tage")


mnue.addEventListener("click", () => {
    box.classList.add("active")

})
crox.addEventListener("click", () => {
    box.classList.remove("active")
})

// body.addEventListener("click", (e) => {
//     let clickedelm = e.target;
//     if (!clickedelm.classList.contains("mnue") && !clickedelm.classList.contains("tage")) {
//         box.classList.remove("active")
//     }
// })
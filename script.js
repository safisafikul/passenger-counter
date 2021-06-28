let count = 0
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

incrementBtn.addEventListener("click", function () {
    count += 1
    countEl.textContent = count
})

saveBtn.addEventListener("click", function () {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
})


//with onclick also worked.

// function increment() {
//     count += 1
//     countEl.textContent = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     countEl.textContent = 0
//     count = 0
// }
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
function increment(){

  count +=1 
countEl.textContent = count
}
function save(){

console.log(count)

}
function save(){

let countscreen = count + " - "
saveEl.textContent += countscreen
console.log(count)
countEl.textContent =  0
count= 0
}

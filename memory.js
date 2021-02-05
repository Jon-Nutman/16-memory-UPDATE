// make two sets of cards numbered 0-8 that way easier to match in future

const arr = [0,1,2,3,4,5,6,7,8]
.map((number) => `<div class="card">${number}</div>`)

const arr2 = [0,1,2,3,4,5,6,7,8]
.map((number) => `<div class="card">${number}</div>`)

document.querySelector("#cardsContainer").innerHTML = (arr2).join('') + arr.join('')

// listen for click on card

document
  .querySelector("#cardsContainer")
  .addEventListener("click", function (e) {
    e.preventDefault()
let card = e.target.innerHTML
console.log(card)



  })

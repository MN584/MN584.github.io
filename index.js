let valueOne = 0
let valueTwo = 0
let valueThree = 0

slotValueTwo.innerText = valueTwo
slotValueOne.innerText = valueOne
slotValueThree.innerText = valueThree

function spin() {
valueOne = Math.floor(Math.random()*10)
valueTwo = Math.floor(Math.random()*10)
valueThree = Math.floor(Math.random()*10)
slotValueTwo.innerText = valueTwo
slotValueOne.innerText = valueOne
slotValueThree.innerText = valueThree
}

spin()

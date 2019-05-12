var randomTreasure = Math.floor(Math.random()*8)
console.log("treasure" + randomTreasure);
var randomBomb = Math.floor(Math.random()*8)
console.log("bomb" + randomBomb);
var counter = 3


function treasure(location){
if (counter >=1) {
    counter -- }
//when the counter reaches zero, the click button wont work.
document.getElementById("counter").innerHTML = counter

    if (randomTreasure === location && counter >= 1){
        document.getElementById(location).innerHTML = "&#x1f4b0"
        window.setTimeout(()=>{
            alert("You found the treasure!")
        })
    } else if (randomBomb === location && counter >= 1){
        document.getElementById(location).innerHTML = "&#x2620"
        window.setTimeout(()=>{
            alert("Oh no, you lose!")
        })
    } else if (randomBomb === randomTreasure && counter >= 1) {
        window.setTimeout(()=>{
            alert('You & the treasure blow up')
        })
    } else {
         document.getElementById(location).innerHTML = "Try again!"
    }

}

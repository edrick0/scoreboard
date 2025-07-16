let homePoint = document.getElementById("home")
let guestPoint = document.getElementById("guest")
console.log(homePoint)
console.log(guestPoint)

let pointH = 0
let pointG = 0

function homePlus1() {
    pointH += 1
    homePoint.textContent = pointH
}

function homePlus2() {
    pointH += 2
    homePoint.textContent = pointH
}

function homePlus3() {
    pointH +=3
    homePoint.textContent = pointH
}

function guestPlus1() {
    pointG += 1
    guestPoint.textContent = pointG

}

function guestPlus2() {
    pointG += 2
    guestPoint.textContent = pointG
}

function guestPlus3() {
    pointG +=3
    guestPoint.textContent = pointG
}

function reset() {
    pointH = pointG = 0
    homePoint.textContent = pointH
    guestPoint.textContent = pointG
}
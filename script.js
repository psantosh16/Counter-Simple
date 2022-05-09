var data = 0 ;
document.querySelector("p").innerHTML = data;


function countInc() {
    data +=  1;
    var numC = document.querySelector("p").innerText = data;
    console.log("value increased by " + data)
}

function countDec() {
    data -= 1;
    var numC = document.querySelector("p").innerText = data;
    console.log("value decreased by " + data)

}
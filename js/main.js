
var element = document.querySelector(".menu")

function menuH() {

    if (element.classList.contains("active")) {
        element.classList.remove("active")
    } else {
        element.classList.add("active")
    }

}




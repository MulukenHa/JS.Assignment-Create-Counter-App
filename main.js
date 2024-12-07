let counter = 1
const increase = () => {
    counter += 1
    document.getElementById("counter").innerHTML = counter
}

const decrease = () => {
    counter -= 1
    document.getElementById("counter").innerHTML = counter
}
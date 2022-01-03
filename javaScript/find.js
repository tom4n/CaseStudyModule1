let dataOfFind = document.querySelector(".findSomeThing");

function find() {
    window.open(`https://www.google.com/search?q=${dataOfFind.value}`)
}
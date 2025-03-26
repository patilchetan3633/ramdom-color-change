


const colorchange = document.getElementById("color-code");

const getcolor = () => {
    const randomNumber = Math.floor(Math.random()*16777215).toString(16);

    const randomCode = "#" + randomNumber;
    document.body.style.backgroundColor = randomCode;

    colorchange.innerHTML = randomCode;
    navigator.clipboard.writeText(randomCode);
}

document.getElementById("btn").addEventListener(
    "click",
    getcolor
)

getcolor();
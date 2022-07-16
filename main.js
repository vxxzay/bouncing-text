let text = document.querySelector(".bounce").innerHTML;
let wrapText = "";

for (let i = 0; i < text.length; i++) {
    wrapText += "<span>"+text.charAt(i)+"</span>";
}

document.querySelector(".bounce").innerHTML = wrapText;

let letters = document.getElementsByTagName("span");
let j = 0;

Bounce = () => {
    setTimeout(() => {
        letters[j].classList.add("bounce-active");
        j++;
        if (j < letters.length) {
            Bounce();
        }
    }, 200);
}

Bounce();
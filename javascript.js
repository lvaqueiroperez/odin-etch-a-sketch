const squareContainer = document.querySelector("#squareContainer");

for(let i = 0; i < 256; i++) {
    const squareDiv = document.createElement("div");
    squareContainer.appendChild(squareDiv);
}
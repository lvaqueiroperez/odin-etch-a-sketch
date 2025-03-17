const squareContainer = document.querySelector("#squareContainer");

for (let i = 0; i < 256; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.setAttribute("class", "square");
    squareContainer.appendChild(squareDiv);
}
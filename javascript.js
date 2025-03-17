const squaresMainContainer = document.querySelector(".squaresMainContainer");

for (let i = 0; i < 128; i++) {
    const squareContainer = document.createElement("div");
    const squareDiv1 = document.createElement("div");
    const squareDiv2 = document.createElement("div");
    squareContainer.setAttribute("class", "squareContainer");
    squareDiv1.setAttribute("class", "square");
    squareDiv2.setAttribute("class", "square");

    squareContainer.appendChild(squareDiv1);
    squareContainer.appendChild(squareDiv2);

    squaresMainContainer.appendChild(squareContainer);
}
const squaresMainContainer = document.querySelector(".squaresMainContainer");

const resizeButton = document.querySelector("#resizeButton");

resizeButton.addEventListener("click", () => {
    const squaresPerRow = +prompt("Please, enter the number of squares per row that you wish to see (max 100):", "");
});

// 16x16 grid, 256 squares in total
for (let i = 0; i < 16; i++) {

    const squareContainer = document.createElement("div");
    squareContainer.setAttribute("class", "squareContainer");

    for (let j = 0; j < 16; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.setAttribute("class", "square");
        squareContainer.appendChild(squareDiv);
    }

    squaresMainContainer.appendChild(squareContainer);

}
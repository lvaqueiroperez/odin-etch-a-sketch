const squaresMainContainer = document.querySelector(".squaresMainContainer");

const resizeButton = document.querySelector("#resizeButton");

let gridDimensions = 16;

resizeButton.addEventListener("click", () => {
    gridDimensions = +prompt("Please, enter the number of squares per row that you wish to see (max 100):", "");

    if (gridDimensions && gridDimensions >= 0 && gridDimensions <= 100) {



    } else {
        alert("ERROR. Please enter a correct value!");
    }

});

function printGrid(gridDimensions) {
    for (let i = 0; i < gridDimensions; i++) {

        const squareContainer = document.createElement("div");
        squareContainer.setAttribute("class", "squareContainer");

        for (let j = 0; j < gridDimensions; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.setAttribute("class", "square");
            squareContainer.appendChild(squareDiv);
        }

        squaresMainContainer.appendChild(squareContainer);

    }
};
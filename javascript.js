const squaresMainContainer = document.querySelector(".squaresMainContainer");
const squaresMainContainer2 = document.createElement("div");
squaresMainContainer2.setAttribute("class", "squaresMainContainer2");
squaresMainContainer.appendChild(squaresMainContainer2);

const resizeButton = document.querySelector("#resizeButton");

printGrid(16);

resizeButton.addEventListener("click", () => {
    const gridDimensions = +prompt("Please, enter the number of squares per row that you wish to see (max 100):", "");

    if (gridDimensions && gridDimensions >= 0 && gridDimensions <= 100) {

        removeGrid();
        printGrid(gridDimensions);

    } else {
        alert("ERROR. Please enter a correct value!");
    }

});

// use event delegation
squaresMainContainer2.addEventListener("mouseover", (e) => {
    if (e.target.className === "square") {
        e.target.style.backgroundColor = "black";
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

        squaresMainContainer2.appendChild(squareContainer);

    }
};

function removeGrid() {
    const containersToRemove = document.querySelectorAll(".squareContainer");
    containersToRemove.forEach((container) => container.remove());
}
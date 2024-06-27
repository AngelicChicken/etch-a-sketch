let container = document.querySelector("#container");
const content = document.querySelector("#content");
const button = document.querySelector("#dimensionButton");

let gridRowAmount = 0;
let gridColumnAmount = 0;

button.addEventListener("click", buttonPress);

function buttonPress(){
    //if previous column already exist run function to clear it
    if(gridColumnAmount > 0){
        clearGrid();
    }
    buildGrid();
}

function buildGrid(){
    let dimension = prompt("what dimension do you want your grid to be?", 16);
    while(dimension >= 100){
        dimension = prompt("dimension too high please choose anything lower than 100!");
    }

    while(gridColumnAmount < dimension){
        //create place to store the grid
        const gridColumn = document.createElement("div");
        const gridRow = document.createElement("div");

        //if there's less than 16 grid in a row, create more grid
        while(gridRowAmount < dimension){
            const grid = document.createElement("div");
            grid.setAttribute("id", "grid");

            //generate random color that appear when mouse passes over the grid
            grid.addEventListener("mouseover", () => {
                grid.style.backgroundColor = '#' + parseInt(Math.random() * 0xffffff).toString(16);
            });
            
            //add made grid to row
            gridRow.appendChild(grid);
        
            gridRowAmount++
        }

        //reset amount of grid in a row so next row can be generated
        gridRowAmount = 0;

        //add row to the column
        gridColumn.appendChild(gridRow);
        //add column to overall grid container
        container.appendChild(gridColumn);
        gridColumnAmount++
    }
}

function clearGrid(){
    //reset column amount
    gridColumnAmount = 0;

    //delete previous container and make a new one
    container.remove();
    container = document.createElement("div");
    container.setAttribute("id", "container");
    content.appendChild(container);
}

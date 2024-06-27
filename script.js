const container = document.querySelector("#container");

let gridRowAmount = 0;
let gridColumnAmount = 0;

while(gridColumnAmount < 16){
    //create place to store the grid
    const gridColumn = document.createElement("div");
    const gridRow = document.createElement("div");

    //if there's less than 16 grid in a row, create more grid
    while(gridRowAmount < 16){
        const grid = document.createElement("div");
        grid.setAttribute("id", "grid");
        
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

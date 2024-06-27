const container = document.querySelector("#container");

let amountOfGrid = 0;
while(amountOfGrid < 256){
    const grid = document.createElement("div");
    grid.setAttribute("id", "grid")

    container.appendChild(grid);

    amountOfGrid++
}

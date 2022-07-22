
// Create Grid //

let addressbar = document.querySelector('.address-bar');
function init() {
    let toprow = document.querySelector('.top_row');
    let leftcol = document.querySelector('.left_col');
    let grid = document.querySelector('.grid');
    // for colummn
    for (let i = 1; i <= 100; i++) {
        // create cell 
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        div.textContent = i;
        leftcol.appendChild(div);
    }

    // For row 
    for (let i = 1; i <= 26; i++) {
        // create cell 
        let div = document.createElement("div");
        div.setAttribute("class", "cell");
        div.textContent = String.fromCharCode(i + 64)
        toprow.appendChild(div);

    }

    // For Grid

    for (let i = 0; i < 100; i++) {

        let row = document.createElement('div');
        row.setAttribute("class", "row")

        for (let j = 0; j <= 25; j++) {
            let div = document.createElement("div");
            div.setAttribute("class", "cell");
            // div.textContent = `${j} - ${i}`;
            div.setAttribute("contenteditable", "true");
            div.setAttribute("rid", j)
            div.setAttribute("cid", i)
            row.appendChild(div);
        }
        grid.appendChild(row);
    }
}

init();
let cells = document.querySelectorAll('.grid .cell')

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', function (e) {
        let cCell = e.currentTarget;
        let rid = Number(cCell.getAttribute("cid"));
        let cid = Number(cCell.getAttribute("rid"));
        let address = String.fromCharCode(rid + 65) + (cid+1);
        document.querySelector('.address-bar').value = address;
    })
}


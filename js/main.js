elemF = document.getElementById('unvisible');
elemT = document.getElementById('unvisibleT');
elemTh = document.getElementById('view-all');
elemF.style.visibility = 'hidden';
elemT.style.visibility = 'hidden';
function viewAll() {
    elemF.style.visibility = 'visible';
    elemT.style.visibility = 'visible';
    elemTh.style.visibility = 'hidden'
}



const marginBox = document.getElementById('box-container');
let currentIndex = 0;
const boxWidthPercent = 30;
const visibleBoxes = 3; 
const totalBoxes = document.querySelectorAll('.box-n').length; 

function marginLeft() {
    if (currentIndex > 0) {
        currentIndex--; 
        updateBoxPosition();
    }
}

function marginRight() {
    if (currentIndex < (totalBoxes - visibleBoxes)) {
        currentIndex++;
        updateBoxPosition();
    }
}

function updateBoxPosition() {
    marginBox.style.marginLeft = `-${(boxWidthPercent * currentIndex)}%`;
}

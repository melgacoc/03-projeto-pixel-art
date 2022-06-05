// eslint-disable-next-line max-lines-per-function
window.onload = function () {
    function clear(pixelColor) {
        for (index = 0; index < pixelColor.length; index += 1) {
            pixelColor[index].style.backgroundColor = 'white';
        }
    }
    // criando pixel
    let container = document.getElementById('pixel-board');
    function createPixel(classe) {
        let newDiv = document.createElement('div');
        newDiv.className = classe;
        return newDiv;
    };
    function createPixels(number) {
        for (index = 0; index < number; index += 1) {
            function addElementAsChild(local, elemento) {
                local.appendChild(elemento);
            }
            addElementAsChild(container, createPixel('pixel'));
        }
    }
    createPixels(25);

    //escolhendo cor da paleta
    const collor = document.getElementsByClassName('color');
    const collorselect = document.querySelector('.selected');

    function collorSelected(){
        collorselect.classList.remove(collorselect);
        event.target.add(collorselect);
    }
    for(index = 0; index < collor.length; index +1){
        collor[index]addEventListener('click',collorSelected);
    }
    
  
      
    //botão de limpar
    const button = document.getElementById('clear-board');
    const pixelBackground = document.querySelectorAll('.pixel');
    button.addEventListener('click', clearBoard);
    function clearBoard () {
        for (let index = 0; index < pixelBackground.length; index += 1) {
            const pixelColor = pixelBackground[index];
            pixelColor.style.backgroundColor = 'white';
        }
    }

}
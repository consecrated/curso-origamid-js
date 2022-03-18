function Dom (seletor) {
    this.element = function () {
        return document.querySelector(seletor);
    }
    this.active = function (classe) {
        this.element().classList.add(classe);
    }
}


function click () {
    const classList = new Dom('li');
    classList.active('noia');


}


document.querySelector('li').addEventListener('click', click);
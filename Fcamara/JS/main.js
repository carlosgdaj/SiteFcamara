/*Menu Dropdown Nossa Atuação*/
function abrir()
{
    const optionsMenu = document.querySelector(".optionsMenu");
    if (optionsMenu.classList.contains("sumir"))
    {
        optionsMenu.classList.remove("sumir")
    }
}
function fechar()
{
    const optionsMenu = document.querySelector(".optionsMenu");
    if (!optionsMenu.classList.contains("sumir"))
    {
        optionsMenu.classList.add("sumir")
    }
}
function removeUp()
{
    const arrowDown = document.querySelector(".arrowDown");
    const arrowUp = document.querySelector(".arrowUp");
    if(arrowDown.classList.contains("sumir") && !arrowUp.classList.contains("sumir"))
    {
        arrowDown.classList.remove("sumir")
        arrowUp.classList.add("sumir")
    }
}
function removeDown()
{
    const arrowDown = document.querySelector(".arrowDown");
    const arrowUp = document.querySelector(".arrowUp");
    if(!arrowDown.classList.contains("sumir") && arrowUp.classList.contains("sumir"))
    {
        arrowDown.classList.add("sumir")
        arrowUp.classList.remove("sumir")
    }
}

/*Menu Hamburguer*/

function abrirHamburguer(){
    const menuH = document.querySelector(".menuHamburguer")
    const headerH = document.querySelector("header")
    if(menuH.classList.contains("sumir")){
        menuH.classList.remove("sumir")
    }
}
function fecharHamburguer(){
    const menuH = document.querySelector(".menuHamburguer")
    if(!menuH.classList.contains("sumir")){
        menuH.classList.add("sumir")
    }
}
window.addEventListener("DOMContentLoaded", init);

function init(){
    document.querySelector('.introBtn').addEventListener('click', () => {
        location.href = "form_p/form.html";

    })
    document.querySelector('.otherGamesBtn').addEventListener('click', () =>{
        location.href = 'spillejhornet.html';
    })

}
window.addEventListener("DOMContentLoaded", init);

function init(){
    document.querySelector('#choose').addEventListener('click', () => {
        document.querySelector('#frame1').style.display = 'none';
        document.querySelector('#step2').classList.add("is-active");
        document.querySelector('#step1').classList.remove('is-active');
        document.querySelector('#step1').classList.add('is-complete');
        document.querySelector('#frame2').style.display = 'flex';
    })
}
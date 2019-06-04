window.addEventListener("DOMContentLoaded", init);

function init(){
    document.querySelector('#choose').addEventListener('click', () => {
        document.querySelector('#frame1').style.display = 'none';
        document.querySelector('#step2').classList.add("is-active");
        document.querySelector('#step1').classList.remove('is-active');
        document.querySelector('#step1').classList.add('is-complete');
        document.querySelector('#frame2').style.display = 'flex';
    })
    document.querySelector('#backBtn').addEventListener('click', () => {
        document.querySelector('#frame1').style.display = 'flex';
        document.querySelector('#step2').classList.remove("is-active");
        document.querySelector('#step2').classList.remove("is-complete");
        document.querySelector('#step1').classList.add('is-active');
        document.querySelector('#step1').classList.remove('is-complete');
        document.querySelector('#frame2').style.display = 'none';
    })
    document.querySelector('#accept').addEventListener('click', () => {
        document.querySelector('#frame2').style.display = 'none';
        document.querySelector('#frame3').style.display = 'flex';
        document.querySelector('#step3').classList.add("is-active");
        document.querySelector('#step2').classList.remove("is-active");
        document.querySelector('#step2').classList.add('is-complete');
    })
    document.querySelector('#backBtn2').addEventListener('click', () => {
        document.querySelector('#frame2').style.display = 'flex';
        document.querySelector('#frame3').style.display = 'none';
        document.querySelector('#step3').classList.remove("is-active");
        document.querySelector('#step2').classList.add('is-active');
        document.querySelector('#step1').classList.add('is-complete');
    })

}
const save = document.querySelector('#save');

function getData(){
save.addEventListener('submit', (event) => {
    event.preventDefault();

    // get function coming here
    postData();
})
}
function postData(){
    const postUser = JSON.stringify();

        // post function coming here

<<<<<<< HEAD
function screenTest(e) {
  if (e.matches) {
    /* the viewport is 500 pixels wide or less */
    console.log("mobile");
    document.querySelector("#frame0").classList.remove("hidden");
    document.querySelector("#frame0").style.display = "block";
    document.querySelector("#side_nav").classList.add("hidden");
    document.querySelector("#frame1").classList.add("hidden");
    document.querySelector("#inner_div").classList.add("hidden");
  } else {
    /* the viewport is more than than 600 pixels wide */
    // para.textContent = "This is a wide screen — more than 600px wide.";
    console.log("desktop");
  }
=======
>>>>>>> parent of b7493e0... Added media queries for the main form-not finished yet
}


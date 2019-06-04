window.addEventListener("DOMContentLoaded", init);

function init() {
  let status = 1;
  console.log(status)
  document.querySelector("#choose").addEventListener("click", () => {
    document.querySelector("#frame1").style.display = "none";
    document.querySelector("#step2").classList.add("is-active");
    document.querySelector("#step1").classList.remove("is-active");
    document.querySelector("#step1").classList.add("is-complete");
    document.querySelector("#frame2").style.display = "flex";
    status = 2;
    console.log(status)

  });
  document.querySelector("#backBtn").addEventListener("click", () => {
    document.querySelector("#frame1").style.display = "flex";
    document.querySelector("#step2").classList.remove("is-active");
    document.querySelector("#step2").classList.remove("is-complete");
    document.querySelector("#step1").classList.add("is-active");
    document.querySelector("#step1").classList.remove("is-complete");
    document.querySelector("#frame2").style.display = "none";
    status = 1;
    console.log(status)

  });
  document.querySelector("#accept").addEventListener("click", () => {
    document.querySelector("#frame2").style.display = "none";
    document.querySelector("#frame3").style.display = "flex";
    document.querySelector("#step3").classList.add("is-active");
    document.querySelector("#step2").classList.remove("is-active");
    document.querySelector("#step2").classList.add("is-complete");
    status = 3
    console.log(status)

  });
  document.querySelector("#backBtn2").addEventListener("click", () => {
    document.querySelector("#frame2").style.display = "flex";
    document.querySelector("#frame3").style.display = "none";
    document.querySelector("#step3").classList.remove("is-active");
    document.querySelector("#step2").classList.add("is-active");
    document.querySelector("#step1").classList.add("is-complete");
    status = 2;
    console.log(status)
  });

  document.querySelector('#arrow').addEventListener('click', ()=> {
    if (status === 1){
      document.querySelector('#inner_div').style.display = 'none';
      document.querySelector('#side_nav').style.display = 'flex';
    }
    else if ( status === 2){
      document.querySelector("#frame1").style.display = "flex";
      document.querySelector("#step2").classList.remove("is-active");
      document.querySelector("#step2").classList.remove("is-complete");
      document.querySelector("#step1").classList.add("is-active");
      document.querySelector("#step1").classList.remove("is-complete");
      document.querySelector("#frame2").style.display = "none";
      status = 1;
    }
    else if (status === 3){
      document.querySelector("#frame2").style.display = "flex";
      document.querySelector("#frame3").style.display = "none";
      document.querySelector("#step3").classList.remove("is-active");
      document.querySelector("#step2").classList.add("is-active");
      document.querySelector("#step1").classList.add("is-complete");
      status = 2;
    }
  })
}
const save = document.querySelector("#save");

function getData() {
  save.addEventListener("submit", event => {
    event.preventDefault();

    // get function coming here
    postData();
  });
}
function postData() {
  const postUser = JSON.stringify();

  // post function coming here
}



// Media queries 
window.addEventListener("resize", mediaQueires)
let x = window.matchMedia("(max-width: 500px)")
mediaQueires()
function mediaQueires() {
  if (x.matches) { // If media query matches
    console.log('width matches')
    document.querySelector('#account_set').classList.remove('current');
    document.querySelector('#gear').classList.remove('current');
    document.querySelector('#inner_div').style.display = 'none';

    document.querySelector('#account_set').addEventListener('click', ()=> {
      document.querySelector('#side_nav').style.display = 'none';
      document.querySelector('#inner_div').style.display = 'flex';
    })
  } 
  else{
    console.log('width does not match')
    document.querySelector('#side_nav').style.display = 'flex';
    document.querySelector('#inner_div').style.display = 'flex';
    document.querySelector('#account_set').classList.add('current');
    document.querySelector('#gear').classList.add('current');
    document.querySelector('#account_set').removeEventListener
  }
}
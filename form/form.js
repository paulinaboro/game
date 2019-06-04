window.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector("#choose").addEventListener("click", () => {
    document.querySelector("#frame1").style.display = "none";
    document.querySelector("#step2").classList.add("is-active");
    document.querySelector("#step1").classList.remove("is-active");
    document.querySelector("#step1").classList.add("is-complete");
    document.querySelector("#frame2").style.display = "flex";
  });
  document.querySelector("#backBtn").addEventListener("click", () => {
    document.querySelector("#frame1").style.display = "flex";
    document.querySelector("#step2").classList.remove("is-active");
    document.querySelector("#step2").classList.remove("is-complete");
    document.querySelector("#step1").classList.add("is-active");
    document.querySelector("#step1").classList.remove("is-complete");
    document.querySelector("#frame2").style.display = "none";
  });
  document.querySelector("#accept").addEventListener("click", () => {
    document.querySelector("#frame2").style.display = "none";
    document.querySelector("#frame3").style.display = "flex";
    document.querySelector("#step3").classList.add("is-active");
    document.querySelector("#step2").classList.remove("is-active");
    document.querySelector("#step2").classList.add("is-complete");
  });
  document.querySelector("#backBtn2").addEventListener("click", () => {
    document.querySelector("#frame2").style.display = "flex";
    document.querySelector("#frame3").style.display = "none";
    document.querySelector("#step3").classList.remove("is-active");
    document.querySelector("#step2").classList.add("is-active");
    document.querySelector("#step1").classList.add("is-complete");
  });
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

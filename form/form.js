window.addEventListener("DOMContentLoaded", init);

/* Functionality to the form stepper */
function init(){
    document.querySelector('#choose').addEventListener('click', () => {
        document.querySelector('#frame1').style.display = 'none';
        document.querySelector('#step2').classList.add("is-active");
        document.querySelector('#step1').classList.remove('is-active');
        document.querySelector('#step1').classList.add('is-complete');
        document.querySelector('#frame2').style.display = 'flex';
    });
    document.querySelector('#backBtn').addEventListener('click', () => {
        document.querySelector('#frame1').style.display = 'flex';
        document.querySelector('#step2').classList.remove("is-active");
        document.querySelector('#step2').classList.remove("is-complete");
        document.querySelector('#step1').classList.add('is-active');
        document.querySelector('#step1').classList.remove('is-complete');
        document.querySelector('#frame2').style.display = 'none';
    });
    document.querySelector('#accept').addEventListener('click', () => {
        document.querySelector('#frame2').style.display = 'none';
        document.querySelector('#frame3').style.display = 'flex';
        document.querySelector('#step3').classList.add("is-active");
        document.querySelector('#step2').classList.remove("is-active");
        document.querySelector('#step2').classList.add('is-complete');
    });
    document.querySelector('#backBtn2').addEventListener('click', () => {
        document.querySelector('#frame2').style.display = 'flex';
        document.querySelector('#frame3').style.display = 'none';
        document.querySelector('#step3').classList.remove("is-active");
        document.querySelector('#step2').classList.add('is-active');
        document.querySelector('#step1').classList.add('is-complete');
    });

}
/* updating the user in our database */
const form = document.querySelector("#redForm");
const cardSubmit = document.querySelector('#saveAll');

cardSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("working");
    const redInputData = {
        account_type : 'red',
        nemid : form.elements.nemid.value,
        nempassword : form.elements.nempassword.value,
        card_holder : form.elements.card_holder.value,
        car_number : form.elements.card_number.value,
        date: form.elements.date.value
    };
    console.log(redInputData);
    get(redInputData);
})
// First I get the old user data
function get(redInputData){
    const user = JSON.parse(localStorage.getItem("sp.user"));
    fetch('https://examproject-f5d5.restdb.io/rest/signups/' + user._id,{
        method: 'get',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "5ce3e85d780a473c8df5ca43",
            "cache-control": "no-cache",
        }
    }).then(e => e.json())
    .then(currUserData => {
        console.log(currUserData)
        post(currUserData, redInputData);
    });
}

// Then I post the new redInputData to the database using the userId -- not working
function post(currUserData, redInputData) {
    Object.assign(currUserData, redInputData);
    const postRedData = JSON.stringify(currUserData);
    fetch('https://examproject-f5d5.restdb.io/rest/signups/' + currUserData._id, {
        method: 'post',
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "x-apikey": "5ce3e85d780a473c8df5ca43",
            "cache-control": "no-cache",
        },
        body: postRedData
    }).then(e => e.json())
    .then(redData=>{
        console.log(redData)
        localStorage.setItem("sp.user", JSON.stringify(redData));
    });
}
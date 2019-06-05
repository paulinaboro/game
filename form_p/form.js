const form = document.querySelector("#newForm");

form.addEventListener("submit", event => {
  event.preventDefault();
  const inputData = {
    email: form.elements.email.value,
    name: form.elements.name.value,
    password: form.elements.password.value
  };
  post(inputData);
});

function post(submittedData) {
  const postData = JSON.stringify(submittedData);
  fetch("https://examproject-f5d5.restdb.io/rest/signups", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5ce3e85d780a473c8df5ca43",
      "cache-control": "no-cache"
    },
    body: postData

  }).then(e => e.json())
  .then(blueData => {
     if(blueData){
          makeAlert(blueData)}
      })
    console.log(blueData);
    localStorage.setItem("sp.user", JSON.stringify(blueData));
    window.location = "/spillejhornet.html";
  });
}

function makeAlert(data){
  console.log('hi')
  console.log(data);
  if (data.list[0].message[0] === 'Already exists'){
      alert('Email ' + data.list[0].message[0]);
      

       }
       else {
           alert(data.list[0].message[0])
       }
}


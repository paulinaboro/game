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
  })
    .then(e => e.json())
    .then(get);
}
get();

function get() {
  fetch("https://examproject-f5d5.restdb.io/rest/signups", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5ce3e85d780a473c8df5ca43",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(newData => makeList(newData));
}

function makeList(newData) {
  document.querySelector("#list").innerHTML = "";
  console.log(newData);
  newData.forEach((user, i) => {
    let tmpl = document.querySelector("#user_template").content;
    let tmplCopy = tmpl.cloneNode(true);
    tmplCopy.querySelector("#number").innerHTML = [i + 1] + ".";
    tmplCopy.querySelector("#email").innerHTML = "Email: " + user.email;
    tmplCopy.querySelector("#name").innerHTML = "Username: " + user.name;
    tmplCopy.querySelector("#password").innerHTML =
      "Password: " + user.password;
    tmplCopy.querySelector(".delete").addEventListener("click", () => {
      deleteObj(user._id);
      document.querySelector("#user").style.display = "none";
      document.querySelector(".delete").style.display = "none";
    });

    document.querySelector("#list").appendChild(tmplCopy);
  });
}

function deleteObj(id) {
  fetch("https://examproject-f5d5.restdb.io/rest/signups/" + id, {
    method: "delete",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5ce3e85d780a473c8df5ca43",
      "cache-control": "no-cache"
    }
  })
    .then(e => e.json())
    .then(get);
}
// function predict() {
//   pereventDefault();
//   preventreload();
//   preventredirect();
//   var myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");

//   let title = document.getElementById("title").value;
//   let description = document.getElementById("description").value;

//   var raw = JSON.stringify({
//     title: title,
//     description: description,
//   });

//   var requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow",
//   };

//   fetch("http://localhost:8000/article", requestOptions)
//     .then((response) => response.text())
//     .then((result) => setResult(result))
//     .catch((error) => setError(error));
// }

// function setResult(result) {
//   document.getElementById("result").innerHTML = result;
// }

// function setError(error) {
//   document.getElementById("error").innerHTML = error;
// }

// export default predict;

function predict(event) {
  event.preventDefault();
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;

  var raw = JSON.stringify({
    title: title,
    description: description,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8000/article", requestOptions)
    .then((response) => response.text())
    .then((result) => setResult(result))
    .catch((error) => setError(error));
}

function setResult(result) {
  //{"topic":"Technology"} => Technology
  let res = JSON.parse(result).topic;
  let formattedResult = "";
  if (res == "invalid title") {
    formattedResult = "Invalid Title";
  } else if (res == "invalid description") {
    formattedResult = "Invalid Description";
  } else {
    formattedResult = "The topic of the article is " + res;
  }
  document.getElementById("result-text").innerHTML = formattedResult;
}

function setError(error) {
  document.getElementById("error-text").innerHTML = error;
}

const form = document.getElementById("article-form");
form.addEventListener("submit", predict);

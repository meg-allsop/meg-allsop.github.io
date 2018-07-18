console.log("connected");

const URL = "/acme/js/acme.json";
fetch(URL)
  .then(response => response.json())
  .then(function(data) {
    console.log("Json object is put in nav bar:");
    console.log(data);
  });

const dogId = document.getElementById("dogImg");
const dogId2 = document.getElementById("dogImg2");

const apiKey = "api_key=9RR5XFe1V7ykNAWVfIDWJDghEkDeMIra";

function showGiphs() {
  fetch(`https://api.giphy.com/v1/gifs/search?${apiKey}&q=dogs`)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((object) => {
      const dogImg1 = object.data[0].images.original.url;
      const dogImg2 = object.data[1].images.original.url;
      dogId.src = dogImg1;
      dogId2.src = dogImg2;
    })
    .catch((err) => {
      console.log(err);
    });
}

showGiphs();

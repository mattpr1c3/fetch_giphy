const dogId = document.getElementById("dogImg");
const dogId2 = document.getElementById("dogImg2");

const apiKey = "api_key=9RR5XFe1V7ykNAWVfIDWJDghEkDeMIra";

async function showGiphs() {
  try {
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/search?${apiKey}&q=dogs`
    );
    const result = await response.json();
    const dogImg1 = result.data[0].images.original.url;
    const dogImg2 = result.data[1].images.original.url;
    dogId.src = dogImg1;
    dogId2.src = dogImg2;
  } catch (error) {
    console.error(error);
  }
}

showGiphs();

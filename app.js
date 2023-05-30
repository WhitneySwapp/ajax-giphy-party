// // console.log("Let's get this party started!");


const $gifs = $("#gifs");
const $searchInput = $("#searchInput");


function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", );
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url
    });
    $newCol.append($newGif);
    $gifs.append($newCol);
  }
}


$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGif(response.data);
});


$("#remove").on("click", function() {
  $gifs.empty();
});

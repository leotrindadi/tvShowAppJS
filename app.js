const form = document.querySelector("#searchForm");
const imgs = document.querySelector("#imgs");

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const searchTerm = form.elements.query.value;
  const config = { params: {q: searchTerm}}
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    
  makeImages(res.data);
  form.elements.query.value = ' ';
  console.log(res.data);


})

const makeImages = (shows) =>{
    for(let result of shows){
       if(result.show.image){

        const img = document.createElement('IMG');
        img.src = result.show.image.medium;
        img.style.height = "200px"
        imgs.append(img)}

    }

}


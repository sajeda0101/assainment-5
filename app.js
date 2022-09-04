// categorty section
const categoryLoad = () => {
  fetch(`  https://openapi.programming-hero.com/api/news/categories`)
    .then(res => res.json())
    .then(data => displayCategory(data.data.news_category))
    .catch(error=>console.log(error))
}
// display category
const displayCategory = (categorys) => {

  // category container
  // console.log(categorys)
  const categoryContainer = document.getElementById('category-container');


  categorys.forEach(category => {

  
    const catogoryDiv = document.createElement('div');
    catogoryDiv.innerHTML = `
        <h5 class="category py-3" id="news-cat" onclick="newsLoad(${category.category_id});">${category.category_name}</h5>
        `
    categoryContainer.appendChild(catogoryDiv)
  })

}
categoryLoad()

// news section

const newsLoad = (id) =>{
  const url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {newsDisplay(data.data)
      .catch(error=>console.log(error))
      return
    })
};
const newsDisplay = (categoryNews) => {
 
  console.log(categoryNews) 
  // no found message display
  const noFound=document.getElementById('no-found-message ')
  const array=categoryNews.length;
  noFound.innerText=array;
  const noFoundText=array+" Found News";
  noFound.innerText=noFoundText;
  

// news container
  const newsContainer = document.getElementById('news-container');
  newsContainer.textContent='';

  categoryNews.forEach(categoryNew => {

    // modal
    const modalTitle=document.getElementById('newsModalLabel');
    modalTitle.innerHTML=`<h3>Category Id:${categoryNew.category_id}<h3>`;
    const modalDetail=document.getElementById('modal');
    modalDetail.innerHTML=`
    <h5>Total View:${categoryNew.rating.number}<h5>
    <h5>Budget:${categoryNew.rating.badge}<h5>
    <p>Trending:${categoryNew.others_infois_trending}</p>
        
    
    `

    
    const newsDiv = document.createElement('div')
    newsDiv.classList.add('col')
    
    // news display card
    newsDiv.innerHTML = `
    <div class="card h-100 mb-5">
    <img src="${categoryNew.thumbnail_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${categoryNew.title}</h5>
      <p class="card-text ">${categoryNew.details.slice(0,150)}</p>
    </div>
    <div class="d-flex">
    <img src="${categoryNew.author.img?categoryNew.author.img:'no image found'}" class="w-25 rounded-circle me-2 mb-2">
    <div class=" me-2 mt-4">
    <h5>${categoryNew.author.name?categoryNew.author.name:"No found author name"}</h5>
    <p>${categoryNew.author.published_date?categoryNew.author.published_date:'no date found'}<p>
    </div>
   
   <div class="mt-4 ms-1">
   <h5 class="ms-4 mt-2">View:${categoryNew.total_view?categoryNew.total_view:'No views found'}</h5>
   </div>
   </div>
   <div class="mt-5 d-flex ">
  <span class="ms-2"> <i class="fa-solid fa-star-half-stroke"></i>
  <i class="fa-regular fa-star"></i>
  <i class="fa-regular fa-star"></i>
  <i class="fa-regular fa-star"></i>
  <i class="fa-regular fa-star"></i>
  </span>
   <buton class="btn btn-primary p-2 mt-1 mb-3 fs-6 m-auto w-25 text-center" data-bs-toggle="modal" data-bs-target="#newsModal">Details <span class="ms-3"><i class="fa-solid fa-arrow-right"></i></span></button>

   </div>
  </div>
    
    `
    newsContainer.appendChild(newsDiv);

  })

 
}
// toggle display
const toggleSpinner=isLoading=>{

  const loaderSection=document.getElementById('loader');
  if(isLoading){
    loaderSection.classList.remove('d-none')
  }
  else{
    loaderSection.classList.add('d-none')
  }
}


// newsLoad()
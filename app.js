// categorty section
const categoryLoad=()=>{
    fetch(`  https://openapi.programming-hero.com/api/news/categories`)
    .then(res=>res.json())
    .then(data=>displayCategory(data.data.news_category))
}
// display category
const displayCategory=(categorys)=>{

    // category container
    // console.log(categorys) 
    const categoryContainer=document.getElementById('category-container');
    categorys.forEach(category=>{

        const catogoryDiv=document.createElement('div');
        catogoryDiv.innerHTML=`
        <h3 class="category py-2" onclick="newsLoad('')">${category.category_name}</h3>
        `
        categoryContainer.appendChild(catogoryDiv)
        })
}
categoryLoad()

// news section

const newsLoad=()=>{
  const url=`  https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
    .then(res=>res.json())
    .then(data=>newsDisplay(data.data))

}
const newsDisplay=(categoryNews)=>{
    console.log(categoryNews)
    const newsContainer=document.getElementById('news-container');
    categoryNews.forEach(categoryNew=>{
    
    const newsDiv=document.createElement('div')
    newsDiv.classList.add('col')
    newsDiv.innerHTML=`
    <div class="card h-100 mb-5">
    <img src="${categoryNew.thumbnail_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${categoryNew.title}</h5>
      <p class="card-text text-truncate">${categoryNew.details}</p>
    </div>
    <div class="d-flex">
    <img src="${categoryNew.author.img}" class="w-25 rounded-circle ms-2 mb-2">
    <div class=" ms-2 mt-5">
    <h5>${categoryNew.author.name}</h5>
    <p>${categoryNew.author. published_date}<p>
    </div>
   
   <div class="mt-5 d-flex ">
   <span class="ms-5">
   <i class="fa-solid fa-star-half-stroke"></i>
   <i class="fa-regular fa-star"></i>
   <i class="fa-regular fa-star"></i>
   <i class="fa-regular fa-star"></i>
   </span>
   <h3 class="ms-5">${categoryNew.rating.number}M</h3>
   </div>
   </div>
   <buton class="btn btn-primary p-2 fs-6 m-auto w-25 text-center" data-bs-toggle="modal" data-bs-target="#newsModal">Details <span class="ms-3"><i class="fa-solid fa-arrow-right"></i></span></button>
  </div>
    
    `
    newsContainer.appendChild(newsDiv)


  })

}

// news details


newsLoad()
// categorty section
const categoryLoad=()=>{
    fetch(` https://openapi.programming-hero.com/api/news/categories`)
    .then(res=>res.json())
    .then(data=>displayCategory(data.data.news_category))
}
// display category
const displayCategory=(categorys)=>{

    // category container
    const categoryContainer=document.getElementById('category-container');
    categorys.forEach(category=>{
        // console.log(category) 

        const catogoryDiv=document.createElement('div');
        catogoryDiv.innerHTML=`
        <h5 class="bg-secondary text-white p-3" onclick="newsLoad()">${category.category_name}</h5>
        `
        categoryContainer.appendChild(catogoryDiv)
        })
}
categoryLoad()

// news section

const newsLoad=()=>{
    fetch(` https://openapi.programming-hero.com/api/news/category/01`)
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
    <div class="card h-100">
    <img src="${categoryNew.thumbnail_url}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${categoryNew.title}</h5>
      <p class="card-text text-truncate">${categoryNew.details}</p>
    </div>
    <div class="d-flex justify-content-evenly">
    <img src="${categoryNew.author.img}" class="w-25 rounded-circle ms-2 mb-2">
    <div class="ms-2 mt-4">
    <h5>${categoryNew.author.name}</h5>
    <p>${categoryNew.author. published_date}<p>
    </div>
   
    <div class="ms-5">
    <p><i class="fa-regular fa-arrow-right"></i></p>
    <h3>${categoryNew.rating.number}M</h3>
    </div> </div>
  </div>
    
    `
    newsContainer.appendChild(newsDiv)


  })

}
newsLoad()
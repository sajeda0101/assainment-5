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
        <h5 class="bg-secondary text-white p-3">${category.category_name}</h5>
        `
        categoryContainer.appendChild(catogoryDiv)
        })
}
categoryLoad()

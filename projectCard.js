// Thi is json format template for project
// {
//     "projectname" : "",
//     "task": "",
//     "year": 2024,
//     "thumbnail":"",
//     "overview":"",
//     "processwork":""

// }

const projectWrapper = document.querySelector(".projectWrapper")

fetch('projects.json')
.then(data => data.json())
.then(json =>{
    
    
    json.forEach(project => {
        let template = /*html*/ 
        `
        <a href="ProjectDis.html?project=${project.projectname}">
        <div class="projectCard">
        <img src="${project.thumbnail? project.thumbnail : 'Assets/projectPlaceholder.png'}" alt="${project.projectname}">
        <h2 class="inter-bold">${project.projectname}</h2>
        <hr>
        <div class="inter-medium">
        <div>${project.task}</div>
        <div>${project.year}</div>
        </div>
        </div>
        </a>
        `
        
        projectWrapper.innerHTML += template
        addAnime()
    })
})

// projectWrapper.onmouseover = () => {
//     projectWrapper.style.display = "none"
// }

function addAnime(){
    document.querySelectorAll('.projectCard').forEach(item => {
        item.onmouseover = () => {
            gsap.to(item,{duration: 0.3, scale: 0.9})
        }
        item.onmouseout = () => {
            gsap.to(item,{duration: 0.3,scale: 1})
        }
    })
}
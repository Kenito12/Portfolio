// get URL parameter
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const project = urlParams.get('project')
console.log(project)

const projectDisplay = document.querySelector('#projectDisplay')

function projectSearch(projectName){
    return projectName.projectname == project
}

fetch('projects.json')
.then(data => data.json())
.then(json =>{
    let projectDetail = json.filter(projectSearch)
    let template = /*html */
    `
    <h1 class="inter-bold ">${projectDetail[0].projectname}</h1>
        <div class="inter-medium subtext">
            <div>${projectDetail[0].task}</div>
            <div>${projectDetail[0].year}</div>
        </div>
        <img src="${projectDetail[0].thumbnail}" alt="projectPlaceholder">
        <p class="inter-medium">
        ${projectDetail[0].overview}
        </p>
        <div class="buttonWrapper">
            <button type="button" class="defaultButton inter-semiBold" onclick="window.open('${projectDetail[0].site}')">View site</button>
            <button type="button" class="defaultButton inter-semiBold" onclick="window.open('${projectDetail[0].processwork}')">More</button>
        </div>
    `

    projectDisplay.innerHTML = template
    
    console.log(projectDetail)


})
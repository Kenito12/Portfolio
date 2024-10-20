// get URL parameter
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const project = urlParams.get('project')
console.log(project)
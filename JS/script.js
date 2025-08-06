function checkContact(){
    var service = prompt("What service do you want");
    if (service === null) {
        alert("Please enter a valid service.");
    } else if(service === "Web Developer") {
        alert("You have selected: " + service);
    } else if(service === "Data Scientist") {
        alert("You have selected: " + service);
    } else if (service === "Frontend Developer") {
        alert("You have selected: " + service);
    } else {
        alert("Service unrecognized");
    }

    var project = prompt("What type of Project do you want");
    if (project === null) {
        alert("Please enter a valid Project.");
    } else if(Project === "Full Stack Web Developer") {
        alert("You have selected: " + Project);
    } else if(project === "NLP") {
        alert("You have selected: " + project);
    } else if (project === "Data Science") {
        alert("You have selected: " + project);
    } else {
        alert("Service unrecognized");
    }
}
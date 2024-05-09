let students = [
    {
        name: "Daniel Solar",
        group: "App Dev Team", 
        github: "https://github.com/1DanielSolar",
        linkedin: "www.linkedin.com/in/daniel-solar-464357300",
        email: "dsolar@appdev.yearup.org",
        nickname: "Sol Coder",
        imageurl: "img/Avatar_Daniel.jpg",
        gender: "male"
    },
    {
        name: "Alfi AlI",
        group: "App Dev Team",
        github: "https://github.com/ALFI-ALI",
        linkedin: "https://www.linkedin.com/in/alfiali/",
        email: "aali@appdev.yearup.org",
        nickname: "Code Alchemist",
        imageurl: "img/Avatar_AlfI.jpg",
        gender: "male"
    },
    {
        name: "Victor Castaneda",
        group:"App Dev Team",
        github: "https://github.com/Victor-Castaneda",
        linkedin: "https://www.linkedin.com/in/victor-castaneda-529186236/",
        email: "victor.matacastaneda.bhs@gmail.com",
        nickname: "vic.exe",
        imageurl: "img/Avatar_Victor.jpg",
        gender: "male"
    },
    {
        name: "Brett Spokes",
        group:"App Dev Team",
        github: "https://github.com/Victor-Castaneda",
        linkedin: "https://www.linkedin.com/in/brett-spokes-8b758b29b/",
        email: "bspokes@appdev.yearup.org",
        nickname: "any key",
        imageurl: "img/Avatar_brett.jpg",
        gender: "male"
    }
];

function printStudentInfo(index) {
    let student = students[index];
    console.log("Name:", student.name);
    console.log("Github:", student.github);
    console.log("Linkedin:", student.linkedin);
    console.log("Email:", student.email);
    console.log("Nickname:", student.nickname);
    console.log("Gender:", student.gender);
}

// displays the info for one student then continues to run for each student it has info on
for (let i = 0; i < students.length; i++) {
    console.log(`Student ${i + 1}:`);
    printStudentInfo(i);
    console.log("-----------------------------");// adds space between each student displayed
}

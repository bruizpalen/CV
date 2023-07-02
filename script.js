

function generateDiv(){
    var entry=[
                {
                startYear: 2008,
                endYear: 2015,
                degree: 'Bachelor of Technology in Computer Science and Engineering',
                university: 'University Carlos III',
                location: 'Madrid',
                skills: ['Object Oriented Javascript', 'NodeJS', 'AngularJS']
                },

                {
                    startYear: 2011,
                    endYear: 2022,
                    degree: 'Bachelor of Industrial Engineering',
                    university: 'European University of Madrid',
                    location: 'Madrid',
                    skills: ['FEA', 'Fluidomchanics', 'Mathlab']
                    }
    ];
    var container = document.getElementById('educationContainer');
    // container.classList.add('right');
    // container.style.display = 'flex';
    // container.style.flexdirection = 'column';
    // container.classList.add('programming')
    for (entries of entry){

    // container.classList.add('column');


    var years = document.createElement('div');
    // years.style.borderRight = "2px solid grey";
    // years.style.textAlign = "center";
    // years.style.paddingTop = "5px";
    // years.style.paddingRight = "10px";
    // years.style.fontSize = "small";
    years.classList.add('years');

    years.innerHTML = `${entries.startYear}<br>|<br>${entries.endYear}`;

    var educationE = document.createElement('div');
    educationE.innerHTML = `${entries.degree}`
    educationE.classList.add('educationEntry');
    var degree = document.createElement('div');
    degree.innerHTML = `${entries.degree}`
    var miniwrap = document.createElement('div');
    miniwrap.classList.add('wrap');     
    var univer = document.createElement('div');
    univer.innerHTML = `<br><img class="small-image" src="university_icon.png" alt="Image"> ${entries.university}`;
    univer.classList.add('university');

    var place = document.createElement('div');
    place.innerHTML = `<img class="small-image" text-align="right" src="location_icon.png" alt="Image"> ${entries.location}`
    place.classList.add('location')


    var skillslist = document.createElement('ul');
    for (element of entries.skills){
        let skillItem = document.createElement('li')
        skillItem.textContent = `${element}`;
        skillslist.appendChild(skillItem) 
    }
    
    container.appendChild(years);
    container.appendChild(educationE);

    educationE.appendChild(miniwrap);
    miniwrap.appendChild(univer);
    miniwrap.appendChild(place);
    educationE.appendChild(skillslist);

}
}
generateDiv()
// function generateEducationEntries(){
//     let entries=[
//         {
//                           startYear: 2008,
//                           endYear: 2015,
//                           degree: 'Bachelor of Technology in Computer Science and Engineering',
//                           university: 'University Carlos III',
//                           location: 'Madrid',
//                           skills: ['Object Oriented Javascript', 'NodeJS', 'AngularJS']

//         }
//     ];
//     let educationContainer = document.getElementById('educationContainer');
//     const div = document.createElement("div")
//         div.style.marginLeft = "5px";
//         div.style.paddingLeft = "10px";
//         div.style.paddingTop = "10px";
//         div.style.position = "relative";
//         div.style.display = "flex";
//         div.style.flexDirection = "column";

//     let thing = "<div>hello</div>"
//     educationContainer.appendChild(thing);
//     document.body.appendChild(educationContainer);

//     // let thing = "<div>hello</div>";
//     // document.body.innerHTML = thing;
    
// }

// generateEducationEntries()
// function generateEducationEntries() {
//     const entries = [
//         {
//           startYear: 2008,
//           endYear: 2015,
//           degree: 'Bachelor of Technology in Computer Science and Engineering',
//           university: 'University Carlos III',
//           location: 'Madrid',
//           skills: ['Object Oriented Javascript', 'NodeJS', 'AngularJS']
//         },
//         // Add more entries here
//       ];
//     let educationContainer = document.getElementById('educationContainer');
  
//     entries.forEach(entry => {
//       let entryWrapper = document.createElement('div');
//       entryWrapper.className = 'education';
  
//       let years = document.createElement('div');
//       years.className = 'years_js';
//       years.textContent = `${entry.startYear} | ${entry.endYear}`;
  
//       let educationEntry = document.createElement('div');
//       educationEntry.className = 'educationEntry_js';
//       educationEntry.textContent = entry.degree;
  
//       let university = document.createElement('div');
//       university.className = 'university_js';
//       university.innerHTML = `<br><img class="small-image" src="university_icon.png" alt="Image"> ${entry.university}`;
  
//       let location = document.createElement('div');
//       location.className = 'location_js';
//       location.innerHTML = `<img class="small-image" src="location_icon.png" alt="Image"> ${entry.location}`;
  
//       educationEntry.appendChild(university);
//       educationEntry.appendChild(location);
  
//       let skillsList = document.createElement('ul');
//       entry.skills.forEach(skill => {
//         let skillItem = document.createElement('li');
//         skillItem.textContent = skill;
//         skillsList.appendChild(skillItem);
//       });
  
//       entryWrapper.appendChild(years);
//       entryWrapper.appendChild(educationEntry);
//       entryWrapper.appendChild(skillsList);
  
//       educationContainer.appendChild(entryWrapper);
//       document.body.appendChild(years)
//     });
//   }

//   // Usage example
//   const entries = [
//     {
//       startYear: 2008,
//       endYear: 2015,
//       degree: 'Bachelor of Technology in Computer Science and Engineering',
//       university: 'University Carlos III',
//       location: 'Madrid',
//       skills: ['Object Oriented Javascript', 'NodeJS', 'AngularJS']
//     },
//     // Add more entries here
//   ];
  
//   generateEducationEntries(entries);


//   function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed.";
//   }
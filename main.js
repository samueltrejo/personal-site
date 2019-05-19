const projects = [
  {
    title: 'Cool Project 1',
    screenshot: 'https://picsum.photos/400/400?image=777',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
  },
  {
    title: 'Cool Project 2',
    screenshot: 'https://picsum.photos/400/400?image=777',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
  },
  {
    title: 'Cool Project 3',
    screenshot: 'https://picsum.photos/400/400?image=777',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: false,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
  },
  {
    title: 'Cool Project 4',
    screenshot: 'https://picsum.photos/400/400?image=777',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
  },
  {
    title: 'Cool Project 5',
    screenshot: 'https://picsum.photos/400/400?image=777',
    description: 'This is the best project', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed:
      'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/nss-evening-cohort-8/js-part-deux', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/nss-evening-cohort-8/js-part-deux'
  }
];

const displayContent = (event) => {
  const target = event.target.textContent
  console.log(target)
  hideContent();
  document.getElementById(target).style.display = '';
}

const hideContent = (load) => {
  document.getElementById('Bio').style.display = 'none';
  document.getElementById('Technologies').style.display = 'none';
  document.getElementById('Projects').style.display = 'none';
  if(load === true) {
    document.getElementById('Bio').style.display = '';
  }
}

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const createProjectCards = () => {
  let domString = '';
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].available) {
      domString += `<div class="project-cards">`;
      domString += `<h3>${projects[i].title}</h3>`;
      domString += `<img src="${projects[i].screenshot}">`;
      domString += `<p>${projects[i].technologiesUsed}</p>`;
      domString += `<a href="${projects[i].githubUrl}">Project Link</a>`;
      domString += `</div>`;
    }
    printToDom('projectsPage', domString);
  }
};

const eventListeners = () => {
  document.getElementById('home').addEventListener('click', displayContent);
  document.getElementById('nav-bio').addEventListener('click', displayContent);
  document.getElementById('nav-technologies').addEventListener('click', displayContent);
  document.getElementById('nav-projects').addEventListener('click', displayContent);
};

const init = () => {
  createProjectCards();
  eventListeners();
  hideContent(true);
};

init();

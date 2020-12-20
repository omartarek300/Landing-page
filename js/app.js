/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
// navbar global variable
const navigation = document.getElementById('navbar__list');
// sections global variable
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function navbar_builder()
{
  // a variable to append navbar elements into it
  let navlist = '';
  // looping throgh sections
  for(let section of sections)
  {
    const sectionID = section.id;
    const sectiondatanav = section.dataset.nav;
    navlist += `<li><a class = "menu__link" href="#${sectionID}">${sectiondatanav}</a> </li>`
  }
  // add sections to navbar
  navigation.innerHTML = navlist;
}
navbar_builder();
// selecting all items
const items = document.querySelectorAll('li');
// Add class 'active' to section when near top of viewport
// get the top distance of the section
function getoffset(section)
{
  return Math.floor(section.getBoundingClientRect().top)
}
// remove active class
function deleteActive(section)
{
  section.classList.remove('your-active-class');
  // to remove highlight from last item in navbar
  items[section.dataset.nav.toString().split(" ")[1] - 1].classList.remove('highlight');
}
// add active class
function addActive(boolean, section)
{
  if(boolean)
  {
      section.classList.add('your-active-class');
      // to highlight current item in navbar
      items[section.dataset.nav.toString().split(" ")[1] - 1].classList.add('highlight');
  }
}

function sectionActivation()
{
  let condition = false;
  let section;
  for( section of sections)
  {
    const offset = getoffset(section);
    if(offset <= 200 && offset >= -200)
    {
      condition = true;
    }
    else
    {
     condition = false;
    }
    deleteActive(section);
    addActive(condition, section);
    // display go to top button on reaching the footer
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // to hide navbar while scrolling
  document.querySelector('header').style.visibility= "hidden";
  // to show navbar when stop scrolling
  setTimeout( function visiblenav()
  {
    document.querySelector('header').style.visibility= "visible";
  }, 100);
}
let mybutton = document.getElementById("myBtn");
document.addEventListener('scroll',sectionActivation);
mybutton.addEventListener('click',topFunction)
// back to top function
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active

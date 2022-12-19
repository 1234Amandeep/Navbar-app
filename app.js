// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const toggle = document.querySelector('.nav-toggle');
const ul = document.querySelector('.links');

toggle.addEventListener('click', () => {
  if(ul.classList.contains('show-links'))
  {
    ul.classList.remove('show-links');
  }
  else{
    ul.classList.add('show-links')
  }
})

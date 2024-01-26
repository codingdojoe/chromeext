// Ref to buttons
const forkButton = document.getElementById('fork-button');
const pullRequestButton = document.getElementById('pull-requests-tab');
const createNewButton = document.getElementById('global-create-menu-button');

// Function on what to highlight/will be outlined
function highlightElements(selector) {
  const elementsToHighlight = document.querySelectorAll(selector);
  elementsToHighlight.forEach((element) => {
    element.style.border = '2px solid red';
  });
};

//you can add extra functions for adding more functionality using if statements, but this should constantly highlight everytime the ids are located on a page after a user clicks

// Event listeners for button clicks on the pop up
forkButton.addEventListener('click', () => {
  highlightElements('.fork-button');
});

downloadButton.addEventListener('click', () => {
  highlightElements('.pull-requests-tab'); 
});

uploadButton.addEventListener('click', () => {
  highlightElements('.global-create-menu-button'); 
});
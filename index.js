console.log('expect(earth()).toBe(42)');

const projectLink = document.getElementById('project-link');
const projectContainer = document.getElementById('project-container');

projectLink.addEventListener('click', () => {
  const options = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  };
  projectContainer.setAttribute('class', 'fade-in-element')
  projectContainer.scrollIntoView(options);
});

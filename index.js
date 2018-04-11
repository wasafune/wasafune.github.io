console.log('expect(earth()).toBe(42)');

const projectLink = document.getElementById('project-scroll');
const projectContainer = document.getElementById('project-container');

projectLink.addEventListener('click', () => {
  const options = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  };
  if (projectContainer.className.includes('hidden')) {
    projectContainer.setAttribute('class', 'fade-in-element');
  };
  projectContainer.scrollIntoView(options);
});

console.log('expect(earth()).toBe(42);');

const { body } = document;
const style = window.getComputedStyle(body);
const bgSrc = style.backgroundImage;
const bgUrl = bgSrc.match(/\((.*?)\)/)[1].replace(/('|")/g,'');
const img = new Image();
img.onload = () => {
  body.setAttribute('class', 'fade-in-element');
}
img.src = bgUrl;
if (img.complete) {
  img.onload();
};

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

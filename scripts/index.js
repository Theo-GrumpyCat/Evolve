new fullpage('#fullpage', {
  //options here
  autoScrolling:true,
  scrollHorizontally: true,
  slidesNavigation: true,
  scrollingSpeed: 1000,
});

//methods
// fullpage_api.setAllowScrolling(true);
const top_scroll = document.getElementById('top');
const down_scroll = document.getElementById('down');

top_scroll.addEventListener('click', function () {
  fullpage_api.moveSectionUp();  
});

down_scroll.addEventListener('click', function () {
  fullpage_api.moveSectionDown();
});


(function(){
  'use strict';

  const debug = false;

  if(debug){
    document.querySelector('#header-background').style.backgroundImage = "url('/img/header-bg1.jpg')"
  }

  // Portfolio overview
  let portfolioItemList = document.querySelectorAll('.portfolio-item');

  portfolioItemList.forEach(item => {
    item.addEventListener('mouseenter', showPortfolioItemOverlay);
    item.addEventListener('mouseleave', hidePortfolioItemOverlay);
  });

  function showPortfolioItemOverlay(e){
    console.log('mouseenter', e.target);
    let overlay = e.target.querySelector('.portfolio-item-hover');
    if(overlay) overlay.style.display = 'block';
  }
  function hidePortfolioItemOverlay(e){
    console.log('mouseleave', e.target);
    let overlay = e.target.querySelector('.portfolio-item-hover');
    console.log('overlay', overlay);
    if (overlay) overlay.style.display = 'none';
    e.preventDefault();
  }

  // pupulate timeline
  const data = JSON.parse(window.oscarPortfolio.dataStr);
  const timeline = document.querySelector('#timeline');

  let timelineHtml = '';
  data.timelineEvents.forEach((event, index) => {
    let itemClass = index % 2 == 0 ? ' timeline-item-right ' : ' timeline-item-left ';
    let item = timeLineItem(event.year, event.title, event.description);
    
    item = insertStrAtPosition(item, itemClass, item.indexOf('timeline-item">'));
    timelineHtml += item;
  });

  timeline.innerHTML = timelineHtml;

  function timeLineItem(year, title, description){
    return `
    <div class="timeline-item">
      <div class="timeline-item-header">
        <span class="timeline-item-dot"></span>
        <span class="timeline-item-year">${year}</span>
        <span class="timeline-item-title">${title}</span>
      </div>
      <div class="timeline-item-content">
        ${description}
      </div>
    </div>
    `;
  }

  // responsive
  let screenWidth = window.innerWidth;
  if(screenWidth < 576){
    putTimelineItemsToLeft();
  } 

  window.onresize =  function(e){
    console.log('window resized', window.innerWidth);
    screenWidth = window.innerWidth;
    if(screenWidth < 576){
      putTimelineItemsToLeft();
    } 
    if(screenWidth >= 576){
      putTimelineItemsCentered();
    }
  }

  function putTimelineItemsToLeft(){

    let timelineItems = document.querySelectorAll('.timeline-item-right');
    timelineItems.forEach(item => {
      item.classList.remove('timeline-item-right');
      item.classList.add('timeline-item-left');
    })
  };

  function putTimelineItemsCentered(){
    let timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      item.classList.remove('timeline-item-right');
      item.classList.remove('timeline-item-left');
      if(index % 2 == 0) item.classList.add('timeline-item-right');
      else item.classList.add('timeline-item-left');
    });
  };


  // utils

  /* inserts a string in the middle of other string*/
  function insertStrAtPosition(mainStr, strToAdd, pos){
    return mainStr.substring(0, pos) + strToAdd + mainStr.substring(pos);
  }
  
})();
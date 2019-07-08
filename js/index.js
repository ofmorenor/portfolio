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

  // **************************************
  // pupulating timeline
  const data = JSON.parse(window.oscarPortfolio.dataStr);
  const timeline = document.querySelector('#timeline');

  let timelineHtml = '';
  data.timelineEvents.forEach((event, index) => {
    let itemClass = ` timeline-item-${event.type} `;
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

  const allTimelineItems = document.querySelectorAll('.timeline-item');
  recalculateTimelineDisplayProps();

  // ****************************************
  // timeline options
  let timelineCheckboxes = document.querySelectorAll('#timeline-options input');

  timelineCheckboxes.forEach(checkbox =>{
    checkbox.checked = true;
    checkbox.addEventListener('change', (e)=>{
      registerCheckboxEvent(checkbox.checked, checkbox.name);
    });
  });

  function registerCheckboxEvent(checkboxChecked, EventType){
    if(checkboxChecked){
      showTimelineItemsByType(EventType);
      recalculateTimelineDisplayProps();
    }
    else{
      hideTimelineItemsByType(EventType);
      recalculateTimelineDisplayProps();
    }
  }

  function showTimelineItemsByType(type){
    let timelineItems = document.querySelectorAll(`.timeline-item-${type}`);
    timelineItems.forEach(item => {
      if(item.classList.contains('hidden')) item.classList.remove('hidden');
    });
  }
  function hideTimelineItemsByType(type){
    let timelineItems = document.querySelectorAll(`.timeline-item-${type}`);
    timelineItems.forEach(item => {
      item.classList.add('hidden');
    });
  }

  function recalculateTimelineDisplayProps(){
    let DisplayYear = [];
    let visibleItems = 0;
    let currentTimelineItems = [];
    
    let lastItem;
    allTimelineItems.forEach(item => {
      let itemYear = item.querySelector('.timeline-item-year');
      let year = Number(itemYear.innerHTML);
      removeDisplayProps(item);
      
      if (item.classList.contains('hidden')){
        return;
      }
      currentTimelineItems.push(item);

      if(currentTimelineItems.length % 2 == 0){
        item.classList.add('timeline-item-left');
      }
      else{
        item.classList.add('timeline-item-right');
      }

      if (DisplayYear.includes(year)){
        itemYear.classList.add('year-hidden');
      }
      else{
        DisplayYear.push(year);
      }
      lastItem = item;
    });
    
    if(lastItem) lastItem.classList.add('timeline-item-last');
    reorderTimelineForSmallScreens();
  }

  function removeDisplayProps(timelineItem){
    timelineItem.classList.remove('timeline-item-right');
    timelineItem.classList.remove('timeline-item-left');
    timelineItem.classList.remove('timeline-item-last');
    timelineItem.querySelector('.timeline-item-year').classList.remove('year-hidden');
  }

  // responsive
  reorderTimelineForSmallScreens();

  window.onresize =  function(e){
    let screenWidth = window.innerWidth;
    if(screenWidth < 576){
      putTimelineItemsToLeft();
    } 
    if(screenWidth >= 576){
      putTimelineItemsCentered();
    }
  }

  function reorderTimelineForSmallScreens(){
    let screenWidth = window.innerWidth;
    if(screenWidth < 576){
     putTimelineItemsToLeft();
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
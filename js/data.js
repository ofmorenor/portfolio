(function(){

 window.oscarPortfolio = {};
 window.oscarPortfolio.dataStr = "";

 const data = {
   langs: ['HTML', 'CSS', 'Javascript'],
   timelineEvents: [
     {
       year: 2018, 
       title: 'Desarrollador JAVA en Fundación Pascual Bravo', 
       description: `Mantenimiento y desarrollo de nuevas características
       en el sistema de la secretaría de espacio público SISDEP.`
     },
     {
       year: 2019, 
       title: 'Desarrollador JAVA en Fundación Pascual Bravo', 
       description: `Mantenimiento y desarrollo de nuevas características
       en el sistema de la secretaría de espacio público SISDEP.`
     },
     {
       year: 2017, 
       title: 'Desarrollador JAVA en Fundación Pascual Bravo', 
       description: `Mantenimiento y desarrollo de nuevas características
       en el sistema de la secretaría de espacio público SISDEP.`
     }
   ]
 };

data.timelineEvents.sort((a, b) => {
  if (a.year < b.year) return -1;
  if (a.year > b.year) return 1;
  return 0;
});

 window.oscarPortfolio.dataStr = JSON.stringify(data);

})();
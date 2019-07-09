(function(){

 window.oscarPortfolio = {};
 window.oscarPortfolio.dataStr = "";

 const data = {
   langs: ['HTML', 'CSS', 'Javascript'],
   timelineEvents: [
     {
       year: 2019, 
       title: 'Desarrollador .NET en sitio de citas', 
       description: `Mantenimiento general de la plataforma (webforms). Desarrollo, implementación e integracíon de mejoras y nuevas características, tales como: landing pages dinámicos, unificación de formatos de video con AWS Transcoder, entre otros.`,
       type: 'job'
     },
     {
       year: 2018, 
       title: 'Desarrollador JAVA en Fundación Pascual Bravo', 
       description: `Mantenimiento y desarrollo de nuevas características
       en el sistema de la Secretaría De Espacio Público SISDEP.`,
       type: 'job'
     },
     {
       year: 2018, 
       title: 'Desarrollo interfaz gráfica para experiencia Parque Explora', 
       description:`Apoyo en el desarrollo de interfaz gráfica (C++) en experiencia sonora interactiva para la sala MUSICA del Parque Explora`,
       type: 'colaboration'
     },
     {
       year: 2016, 
       title: 'Desarrollador Fullstack en Latitud Zero', 
       description: `Mantenimiento general de la plataforma web. Desarrollo, testing, implementación e integración de servicio web (API REST nodeJS), administración de servidores (EC2/Linux).`,
       type: 'job'
     }, 
     {
       year: 2015, 
       title: 'Joven investigador en ITM', 
       description: `Desarrollo de proyectos de investigación para los semilleros de investigación de arte digital y grabación, enfocados principalmente a la creación de interfaces físicas para la creación e interpretación musical.`,
       type: 'job'
     },
     {
       year: 2015, 
       title: 'Docente de clase Extracurricular de Robótica para niños', 
       description: `Clase de robótica en Institución educativa Nuestra Señora del Rosario de Chiquinquirá. Fundamentos de programación con Scratch y usos básicos de microcontroladores y sensores con Arduino.`,
       type: 'job'
     },
     {
       year: 2014, 
       title: 'Auxiliar de docencia para investigación ITM', 
       description: `Talleres de fundamentos de programación para la creación artística: PureData, Processing, Arduino. Desarrollo de proyecto de investigación con la temática del uso código creativo como medio para la enseñanza de las matemáticas`,
       type: 'job'
     },
     {
       year: 2015, 
       title: 'Ponencia en III Encuentro Nacional De Semilleros De Investigación De Facultades de Ingeniería y Telecomunicaciones', 
       description: `Realizdo en Medellín, Universidad Santo Tomás.`,
       type: 'academic'
     },
     {
       year: 2015, 
       title: 'Participación en concierto telemático en el XIV Festival internacional de la imagen.', 
       description: `Concierto con diferentes intérpretes y audiencias conectados a través de internet.`,
       type: 'colaboration'
     },
     {
       year: 2015, 
       title: 'Curso Estructura del lenguaje de programación c++', 
       description: `Curso virtual SENA`,
       type: 'academic'
     },
     {
       year: 2015, 
       title: 'Curso Metodología de la programación de sistemas informáticos', 
       description: `Curso virtual SENA`,
       type: 'academic'
     },
     {
       year: 2014, 
       title: 'Participación y exposición en el taller Autorretratos Sonoros', 
       description: `Taller de creación y experimentación sonora dirigido por el artista William Engelen.`,
       type: 'colaboration'
     },
     {
       year: 2014, 
       title: 'Participación ponencia en el encuetro anual de maestros de la UPB', 
       description: `Invitado por el profesor Jorge Mario Valencia Upegui`,
       type: 'colaboration'
     },
     {
       year: 2014, 
       title: 'Ponencia en el I encuentro anual de semilleros de investigación', 
       description: `Charla acerca del trabajo del semillero de grabación del ITM en la creación de instrumentos musicales digitales.`,
       type: 'academic'
     },
     {
       year: 2013, 
       title: 'Ponencia en el II encuentro Internacional sobre la enseñaza de las ciencias naturales', 
       description: `Charla acerca del codigo creativo como medio para la enseñanza de las matemáticas realizada en la Universidad Católica de Pereira.`,
       type: 'academic'
     } 


   ]
 };

// order desc by date
data.timelineEvents.sort((a, b) => {
  if (a.year > b.year) return -1;
  if (a.year < b.year) return 1;
  return 0;
});

// add display date property
const yearDisplayed = [];

data.timelineEvents.forEach(event => {
  event.displayYear = true;
  if(yearDisplayed.includes(event.year)){
    event.displayYear = false;
  }
  else{
    yearDisplayed.push(event.year);
  }
});

 window.oscarPortfolio.dataStr = JSON.stringify(data);

})();
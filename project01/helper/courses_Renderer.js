  import Card from '../components/Card';

  export default function renderCourses(coursesData) {

    //se crea los contenedores/tarjetas donde se introduciran los div para imagen y titlo subtitulo
    const coursesContainer = document.createElement('div');
    coursesContainer.classList = 'courses-container';

    //coursesData es una areglo contiene datos sobre los cursos a tomarar

    //bucle forEach que recorrerá cada elemento en el arreglo coursesData
    coursesData.forEach(courseData => {
      const card = Card(courseData);
      coursesContainer.appendChild(card);
    });

    return coursesContainer;
  }   
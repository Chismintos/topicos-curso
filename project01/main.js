import './style.css';
import Header from './components/Header';
import { info } from './helper/data_page';
import { api } from './helper/data_api';
import renderCourses from './helper/courses_Renderer'; // Importa la función para renderizar cursos

document.body.appendChild(Header(info));
document.body.appendChild(renderCourses(api));

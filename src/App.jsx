import React from 'react';
import { ImGithub } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import './App.css';

function App() {
  const experiencia = [
    {
      empresa: 'Grupo ABSA',
      cargo: 'Software Associate',
      fechas: '2022 - Presente',
      descripcion: 'Colaboré como Software Associate en el desarrollo de funcionalidades programadas en Python para proyectos relacionados con el Cómputo en la Nube (Cloud Computing) y el monitoreo de métricas provistas por routers de la marca Cradlepoint junto con otros colegas. Las funcionalidades hechas a la medida eran contenerizadas con Docker para luego ser subidas a los routers y de esta manera aislar los proyectos. Mi puesto también me permitió participar en las juntas en las que los productos y propuestas eran mostradas al cliente por lo que tuve la oportunidad de desarrollar habilidades blandas para entender las necesidades que fueran expuestas. Así mismo, también desarrollé de manera individual una página escrita en PHP cuya función era realizar un cuestionario mediante el cual se calcularía en qué nivel se encontraba el encuestado a nivel de ciberseguridad, una vez terminado la prueba, la página generaría de manera automática un reporte y resumen con base en la puntuación obtenida, para luego este ser mandado vía email tanto al encuestado como al encuestador.'
    },
    // ... más experiencias
  ];

  const habilidades = [
    'C/C++', 'C# .NET', 'Python', 'Typescript', 'Javascript', 'React', 'Nest.js', 'Java', 'PHP', 'Docker', 'PostgreSQL', 'MariaDB', 'HTML', 'CSS', 'Tailwind', 'Bootstrap', 'Linux', 'Git', 'GitHub', 'GitLab'
  ];

  const educacion = [
    {
      institucion: 'Universidad de Guadalajara',
      titulo: 'Licenciatura en Ingeniería Informática',
      fechas: '2022 - Presente',
      desc: 'Actualmente estudio la carrera en ingeniería informática en el CUCEI (Centro Universitario de Ciencias Exactas e Ingenierías).'
    },
    {
      institucion: 'Centro de Enseñanza Técnica Industrial (CETI Colomos)',
      titulo: 'Bachillerato técnico con enfoque en Desarrollo de Software.',
      fechas: '2018 - 2022',
      desc: 'Egresado como Tecnólogo en Desarrollo de Software por el CETI Colomos (Centro de Enseñanza Técnica Industrial).'
    },
  ];

  const redesSociales = [
    {
      nombre: 'GitHub',
      icono: <ImGithub />, // Reemplaza con la clase del icono que elijas
      enlace: 'https://www.github.com/Jaime571'
    },
    {
      nombre: 'LinkedIn',
      icono: <FaLinkedin />,
      enlace: 'https://www.linkedin.com/in/jaime-alberto-g-m/'
    }
  ];

  return (
    <div className="App">
      <h1>Jaime Alberto García Mayorga</h1>
      <h2>Desarrollador Full-Stack</h2>
      <br />
      <section id="redes-sociales">
        <h2>Contacto</h2>
        <ul>
          {redesSociales.map((red, index) => (
            <li key={index}>
              <a href={red.enlace} target="_blank" rel="noopener noreferrer">
                {red.icono}
              </a>
            </li>
          ))}
        </ul>
      </section>


      <section>
        <p>
          Entusiasta de la ingeniería de software y la programación, titulado como tecnólogo en desarrollo de software
          por parte del CETI (Centro de Enseñanza Técnica Industrial). “Compromiso” es la palabra que mejor me
          describe como colaborador, de la misma forma que “Calidad” define mi trabajo.
        </p>
      </section>
      <section id="experiencia">
        <h2>Experiencia</h2>
        <ul>
          {experiencia.map((exp, index) => (
            <li key={index}>
              <h3>{exp.empresa} - {exp.cargo} ({exp.fechas})</h3>
              <p>{exp.descripcion}</p>
            </li>
          ))}
        </ul>
      </section>
      <section id="habilidades">
        <h2>Habilidades</h2>
        {/* <p> */}
        <h3>Técnicas:</h3> <p>C/C++, C# .NET, Python, Typescript, Javascript, React, Nest.js, Java, PHP, Docker, PostgreSQL, MariaDB, HTML, CSS, Tailwind, Bootstrap, Linux, Git, GitHub, GitLab.</p>
        <hr />
        <h3>Idiomas:</h3> <p>Inglés B2.</p>
        <hr />
        <h3>Intereses: </h3> <p>Nunca dejar de aprender mientras ejerzo la carrera que me gusta; así como desarrollar
          habilidades nuevas que me ayuden a desempeñarme de una manera más profesional a cómo lo hacía; conocer
          nuevas personas de mi gremio de las cuales pueda aprender cosas más a fondo de las que ya sabía.</p>
        {/* </p> */}
      </section>
      <section id="educacion">
        <h2>Educación</h2>
        <ul>
          {educacion.map((estudio, index) => (
            <>
              <li key={index}>
                <h3>{estudio.institucion}</h3>
                <p>{estudio.titulo} ({estudio.fechas})</p>
              </li>
            </>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
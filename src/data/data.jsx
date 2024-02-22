import {
  BoUB,
  Drinks,
  GoScrum,
  Grillas,
  InscripcionesUB,
  Logifer,
  LogiferBackoffice,
  Netflix,
  Pickleball,
  Pinasco,
  Tienda,
  Tinder,
} from "../Images";

const data = [
  {
    id: 0,
    alt: "Aplicación de pedidos - Logifer",
    url: `${LogiferBackoffice}`,
    title: "Aplicación de pedidos",
    description: (
      <div>
        App desarrollada para un corralon de materiales en la cual se pueden:
        <br />
        1) Realizar pedidos, editarlos y marcar como enviados
        <br /> 2) Crear productos, editarlos y eliminarlos
        <br /> 3) Guardar clientes, editarlos y tambien eliminarlos. <br />
        La misma esta desarrollada con React Js, Tailwind. Nest Js y MySQL para
        la persistencia de datos.
      </div>
    ),

    link: "https://logifer-backoffice-svoa.vercel.app/ingresar",
  },
  {
    id: 0,
    alt: "Inscripciones Universidad de Belgrano",
    url: `${InscripcionesUB}`,
    title: "Inscripciones Universidad de Belgrano",
    description: (
      <div>
        App de inscripciones para la Universidad de Belgrano, donde el alumno en
        un primero paso debe cargar sus datos personales, como segundo paso
        elegir la carrera, y como tercer paso una pasarela de pago donde puede
        abonar con tarjeta de debito/mercado pago. La misma fue desarrollada con
        Next JS, Bootstrap, Nest Js y SQL Server.
      </div>
    ),
    link: "https://ingreso.ub.edu.ar/",
  },
  {
    id: 0,
    alt: "Backoffice Universidad de Belgrano",
    url: `${BoUB}`,
    title: "Backoffice Universidad de Belgrano",
    description: (
      <div>
        Backoffice para la Universidad de Belgrano, donde se puede editar
        alumnos, mandar alertas en caso de que exista algun dato erroneo,
        configurar turnos, materias y aranceles, etc. La misma esta desarrollada
        con Next JS, Bootstrap, Nest Js y SQL Server
      </div>
    ),
    link: "https://ubingresos.ub.edu.ar/ingresar",
  },
  {
    id: 0,
    alt: "Sistema de grillas escolares",
    url: `${Grillas}`,
    title: "Sistema de grillas escolares",
    description: (
      <div>
        Sistema de grillas para el Gobierno de la ciudad. El mismo consiste en
        diferentes tablas donde los docentes pueden visualizar la carga horaria
        y filtrar por dia, semana o mes. Aparte hay una sección donde se pueden
        crar nuevos docentes y a la vez poder asigarles nuevas materias a
        distintos dias. La misma esta desarollada con React Js, Bootstrap,
        MaterialUI y Laravel.
      </div>
    ),
    link: "http://grilla-escolar.educacion-caba.espinlabs.com.ar/ingresar",
  },
  {
    id: 0,
    alt: "Aplicación de turnos - Pickleball",
    url: `${Pickleball}`,
    title: "Aplicación de turnos - Pickleball",
    description:
      "App para solicitar turnos, en la cual, el frontend se desarrollo en Next js utilizando la libreria Tailwind para dar estilos, la api en Nest js junto con MongoDB",
    link: "https://pickleball-front.vercel.app/",
  },
  {
    id: 1,
    alt: "Web Ferraro Materiales",
    url: `${Logifer}`,
    title: "Web Ferraro Materiales",
    description:
      "Pagina web de Ferraro Materiales desarrollada en React js con redux(filtrado de productos) y styled components para los estilos.",
    link: "https://ferraromateriales.com.ar/",
  },
  {
    id: 3,
    alt: "Maximo Pinasco",
    url: `${Pinasco}`,
    title: "Maximo Pinasco",
    description:
      "Web para el concesionario de autos Maximo Pinasco desarrollada en HTML, CSS y JavaScript, aparte utilicé Node Express junto con nodemailer para el envio de formularios y MySQL para almacenar datos de usuarios que deseen recibir información adicional.",
    link: "https://maximopinasco.com.ar/",
  },
  {
    id: 2,
    alt: "App de tareas - Alkemy",
    url: `${GoScrum}`,
    title: "App de tareas - Alkemy",
    description:
      "App de tareas GoScrum - Alkemy desarrollada en React js con redux(filtrar y editar tareas) y styled components para los estilos.",
    link: "https://go-scrum-alkemy.vercel.app/",
  },

  {
    id: 4,
    alt: "Tienda de productos(API Fake-Store)",
    url: `${Tienda}`,
    title: "Tienda de productos(API Fake-store)",
    description:
      "Tienda de productos desarrollada en React Js con redux(filtrar productos, agregar productos al carrito, eliminarlosy contabilizarlos) y styled components para los estilos.",
    link: "https://franciscof94.github.io/fake-store-react-redux",
  },

  {
    id: 5,
    alt: "Netflix",
    url: `${Netflix}`,
    title: "Clon de Netflix",
    description:
      "Clon de Netflix desarrollado en React Js, utilizando tambien Firebase, Redux y Material UI",
    link: "https://nifty-bhabha-c18f88.netlify.app/",
  },
  {
    id: 6,
    alt: "Tinder",
    url: `${Tinder}`,
    title: "Clon de Tinder",
    description:
      "Clon de Tinder desarrollado en React Js, utilizando tambien Firebase, Redux y Material UI",
    link: "https://clone-tinder-simpsons.netlify.app/",
  },
  {
    id: 8,
    alt: "Drinks",
    url: `${Drinks}`,
    title: "E-commerce de bebidas",
    description:
      "Tienda de bebidas - Proyecto final para el curso de Java Script en Coder House",
    link: "https://franciscof94.github.io/E-commerce/index.html",
  },
];

export default data;

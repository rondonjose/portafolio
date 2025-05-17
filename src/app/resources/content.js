import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Jose",
  lastName: "Rondón",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Desarrollador Web",
  avatar: "/images/projects/project-01/avatar.jpg",
  email: "Nebularondon@gmail.com",
  location: "America/Bogota", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Español"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/profile.php?id=100087678351250",
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: "https://www.youtube.com/@NebulaEmprende", 
  },
  
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    label: "WhatsApp",
    type: "whatsapp",
    // TODO: Add your WhatsApp link here
    url: "https://wa.me/573174910073",
  },
];

const home = {
  path: "/",
  image: "/images/og/Portada.png",
  label: "Home",
  title: `Jose Rondon (Diseñador Web)`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>🚀 Transformo ideas en sitios que venden..</>,
  featured: {
    display: true,
    title: <>Aqui puedes ver mi portafolio: <strong className="ml-4">Proyectos</strong></>,
    href: "/work/",
  },
  subline: (
    <>
      <br />Hola, soy Jose, y creo páginas web con intención: diseño visual atractivo, estructura estratégica y enfoque total en conversión.
Trabajo con emprendedores, negocios y marcas personales que quieren destacar en línea con una presencia que realmente conecte e impulse resultados.
Si tienes una idea, yo la convierto en un sitio que trabaja por ti.
    </>
  ),
};

const about = {
  path: "/about",
  label: "Sobre Mi",
  title: `Sobre Mi – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Diseñador web enfocado en crear experiencias digitales efectivas. Transformo ideas en sitios que combinan diseño atractivo y alto rendimiento para marcas y negocios que quieren destacar online.

      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Proyectos Destacados",
    experiences: [
      {
        company: "Kaxx Real Estate",
        timeframe: "2024 - Present",
        role: "Diseñador Web",
        achievements: [
          <>
            Rediseñé la interfaz y experiencia de usuario, logrando un aumento del 20% en la participación de los usuarios y una reducción del 30% en los tiempos de carga.
          </>,
          <>
            Incorporé herramientas de inteligencia artificial para optimizar los flujos de trabajo de diseño, acelerando la productividad del equipo en un 50%.


          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Clínica Láser Premium",
        timeframe: "2025",
        role: "Diseñador Web",
        achievements: [
          <>
            Rediseñé la experiencia digital del sitio web, mejorando la navegación y presentación de servicios, lo que aumentó las reservas online en un 25%.
          </>,
          <>
           Implementé mejoras en la velocidad y usabilidad, logrando una reducción del 35% en la tasa de rebote y mejorando la conversión de visitantes a clientes.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Conocimientos",
    institutions: [
      {
        name: "Platzi",
        description: <>Aprendizaje enfocado en desarrollo web con WordPress y Shopify, diseño de interfaces, fundamentos de UX/UI, HTML, CSS y herramientas modernas como Figma. .</>,
      },
      {
        name: "Udemy",
        description: <>Cursos aplicados en creación de sitios web profesionales usando código (HTML, CSS, JavaScript, Next.js) y plataformas CMS como WordPress.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Habilidades Técnicas",
    skills: [
      {
        title: "SEO y Marketing Digital",
        description: <>Optimización de contenido, posicionamiento orgánico y estrategias de conversión.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Adobe Photoshop & Illustrator",
        description: <>Edición de imágenes para web y redes sociales.Creación de logotipos, íconos y elementos gráficos.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Escribiendo sobre diseño y tecnología.",
  description: `Lee lo que ${person.name} Ha estado publicando hace poco`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Proyectos", // Cambiado aquí para el menú de navegación
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };

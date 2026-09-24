export const perfil = {
  nombre: "Jasmin Adriana Urrutia Peña",
  corto: "Jasmin",
  rol: "Estudiante de Ingeniería de Software · 8vo ciclo · 20 años",
  titular: "Hola, soy Jasmin. Desarrollo aplicaciones web y móviles que resuelven problemas reales.",
  foto: "/assets/yo.jpeg",
};

export const sobreMi =
  "Tengo 20 años y estoy cursando el 8vo ciclo de Ingeniería de Software. Tengo experiencia en desarrollo front-end y back-end, aplicaciones web y Android, con una base sólida en arquitectura de software y metodologías ágiles. Me distingo por mi responsabilidad, creatividad, trabajo en equipo y aprendizaje continuo.";

export const proyectos = [
  {
    nombre: "Jobsy",
    tipo: "Plataforma de match laboral",
    descripcion:
      "Aplicación web/móvil que optimiza la búsqueda de empleo y la selección de talento mediante un sistema de emparejamiento de perfiles.",
    logro:
      "Diseñé la base de datos relacional y desarrollé los servicios backend para gestionar postulaciones y filtrar candidatos.",
    tecnologias: ["C#", ".NET", "PostgreSQL", "Arquitectura en capas"],
    imagenes: ["/assets/jobsy.png", "/assets/jobsy2.png", "/assets/jobsy3.png"],
    enlace: "",
    color: "var(--coral)",
  },
  {
    nombre: "YakuControl",
    tipo: "Control acuícola móvil",
    descripcion:
      "App móvil para la gestión predictiva de variables críticas en piscigranjas de Huancavelica.",
    logro:
      "Diseñé la interfaz de la app en Figma y contribuí al desarrollo frontend para crear una experiencia intuitiva que ayuda a prevenir pérdidas de producción.",
    tecnologias: ["Flutter", "Dart", "APIs REST", "Analítica de datos"],
    imagenes: ["/assets/acuanode1.png", "/assets/acuanode2.png", "/assets/acuanode3.png"],
    enlace: "",
    color: "var(--mint)",
  },
];

export const skills = [
  { titulo: "Lenguajes", color: "var(--coral)", items: ["Java", "C#", "C++", "Python"] },
  { titulo: "Web", color: "var(--sun)", items: ["HTML", "CSS", "Vue.js"] },
  { titulo: "Bases de datos", color: "var(--mint)", items: ["MySQL", "SQL Server"] },
  { titulo: "Áreas de desarrollo", color: "var(--violet)", items: ["Ingeniería de software", "Arquitectura de software", "Desarrollo de aplicaciones", "Desarrollo Android", "Diseño de aplicaciones web", "Desarrollo front-end", "Desarrollo back-end"] },
  { titulo: "Metodologías y herramientas", color: "var(--sky)", items: ["Scrum", "Jira", "Modelo C4", "Inteligencia artificial", "Microsoft Excel", "Microsoft Word"] },
];

export const blandas = [
  "Trabajo en equipo", "Gestión de equipos", "Comunicación efectiva",
  "Capacidad de asesorar", "Resolución de problemas",
];

export const datos = {
  educacion: { titulo: "Ingeniería de Software", detalle: "Universidad Peruana de Ciencias Aplicadas · 8vo ciclo, en curso" },
  idiomas: [{ nombre: "Inglés", nivel: "Intermedio" }, { nombre: "Español", nivel: "Nativo" }],
};

export const contacto = {
  correo: "jasminurrutia30@gmail.com",
  telefono: "+51 914022435",
  ubicacion: "Lima, Perú",
  github: "https://github.com/SrtaYeis",
};

export type Proyecto = {
  titulo: string;
  descripcion: string;
  tecnologia_principal:string;
  tecnologias: string[];
  link: string;
  repositorio: string;
};

const proyectos: Proyecto[] = [
  {
    titulo: "Shortcad",
    descripcion: "Catálogo de atajos de AutoCAD, desarrollado con Flutter.",
    tecnologia_principal: "flutter",
    tecnologias: ["Flutter", "Dart"],
    link: "",
    repositorio: "https://github.com/miguelclim/shortcad"
  },
  {
    titulo: "Portafolio",
    descripcion: "Portafolio web moderno y responsivo está desarrollado con Astro, y DaisyUI.",
    tecnologia_principal: "astro-icon",
    tecnologias: ["Atro", "Daisyui"],
    link: "https://linkedin.com/in/climdev",
    repositorio: "https://github.com/Miguelclim"
  }
];

export default proyectos;
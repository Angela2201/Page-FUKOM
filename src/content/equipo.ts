export const equipo = {
  hero: {
    titulo: "Personas que hacen posible la transformación",
    descripcion:
      "Somos una organización dedicada a transformar la vida de niños y jóvenes en Soacha y Los Alpes, Ciudad Bolívar.",
  },
  nuestroEquipo: {
    titulo: "Nuestro equipo",
    miembros: [
      {
        nombre: "Karen Lizeth Moreno",
        cargo: "Fundadora, Directora general y estratégica",
        foto: "/images/equipo/miembro-placeholder.png",
      },
      {
        nombre: "Rosmary Patiño Moreno",
        cargo: "Directora del programa FUKOM en la Mesa",
        foto: "/images/equipo/miembro-placeholder.png",
      },
      {
        nombre: "Teresa Cavanzo",
        cargo: "Coordinadora del programa FUKOM en la Mesa",
        foto: "/images/equipo/miembro-placeholder.png",
      },
      {
        nombre: "Nelly Rodriguez",
        cargo: "Coordinadora del programa FUKOM en la Mesa",
        foto: "/images/equipo/miembro-placeholder.png",
      },
      {
        nombre: "Miguel Angel Cruz Cavanzo",
        cargo: "Director de proyectos de arte y relaciones Comerciales",
        foto: "/images/equipo/miembro-placeholder.png",
      },
    ],
  },
  equipoApoyo: {
    etiqueta: "Equipo de apoyo",
    titulo: "Practicantes y voluntarios que suman talento",
    descripcion:
      "Profesores de matemáticas en formación de la Universidad Distrital, practicantes de UNIR y de la Fundación Universitaria Compensar, voluntarios y cocineras acompañan cada sábado nuestros programas.",
    cifras: [
      {
        color: "verde",
        valor: "6",
        descripcion: "Profesores de matemáticas en formación.",
      },
      { color: "naranja", valor: "5", descripcion: "Voluntarios." },
      { color: "rojo", valor: "5", descripcion: "Profesionales" },
    ],
  },
} as const;

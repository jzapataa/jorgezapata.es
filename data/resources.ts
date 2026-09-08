export type ResourceCategory = "Atajo" | "Plantilla" | "Script" | "Herramienta" | "Guía";

export type Resource = {
  slug: string;
  name: string;
  description: string;
  category: ResourceCategory;
  image?: string;
  version: string;
  updatedAt: string;
  platform: string[];
  downloadUrl?: string;
  featured: boolean;
  available: boolean;
  whatItDoes: string[];
  requirements: string[];
  instructions: string[];
  tutorialUrl?: string;
};

export const resources: Resource[] = [
  {
    slug: "registro-gastos",
    name: "Registro de gastos",
    description:
      "Registra un gasto desde el iPhone y envíalo a Notion con una estructura lista para controlar categorías, cuentas y presupuestos.",
    category: "Atajo",
    version: "1.0",
    updatedAt: "2026-09-08",
    platform: ["iPhone", "Shortcuts", "Notion"],
    featured: true,
    available: false,
    whatItDoes: [
      "Pide importe, concepto, categoría y cuenta desde un flujo rápido.",
      "Envía el movimiento a una base de datos de Notion.",
      "Reduce la fricción de registrar gastos en el momento en que ocurren.",
    ],
    requirements: ["iPhone con la app Atajos", "Cuenta de Notion", "Base de datos compatible en Notion"],
    instructions: [
      "Abre el recurso desde tu iPhone.",
      "Añádelo a la app Atajos.",
      "Configura la conexión con tu base de datos de Notion siguiendo las indicaciones del atajo.",
    ],
  },
  {
    slug: "registro-reuniones",
    name: "Reunión Express",
    description:
      "Crea una reunión en Calendario desde el iPhone en pocos segundos, indicando solo los datos que realmente necesitas.",
    category: "Atajo",
    version: "1.0",
    updatedAt: "2026-08-02",
    platform: ["iPhone", "Shortcuts", "Calendario"],
    featured: true,
    available: false,
    whatItDoes: [
      "Pide el título de la reunión y te deja elegir si será hoy, mañana o en otra fecha.",
      "Configura la hora y una duración de 30, 60, 90 minutos o personalizada.",
      "Permite añadir ubicación y notas de forma opcional.",
      "Crea automáticamente el evento en Calendario sin tener que rellenarlo manualmente.",
    ],
    requirements: ["iPhone con la app Atajos", "App Calendario de Apple", "Permiso para que Atajos acceda a Calendario"],
    instructions: [
      "Abre el recurso desde tu iPhone y añádelo a la app Atajos.",
      "Concede acceso a Calendario la primera vez que iOS lo solicite.",
      "Ejecuta Reunión Express e introduce título, fecha, hora y duración.",
      "Añade ubicación o notas si las necesitas y confirma para crear el evento.",
    ],
  },
];

export const featuredResources = resources.filter((resource) => resource.featured);

export const getResourceBySlug = (slug: string) =>
  resources.find((resource) => resource.slug === slug);

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
    name: "Registro de reuniones",
    description:
      "Crea rápidamente una reunión desde el iPhone y deja la información preparada en tu calendario sin repetir tareas manuales.",
    category: "Atajo",
    version: "1.0",
    updatedAt: "2026-09-08",
    platform: ["iPhone", "Shortcuts", "Calendario"],
    featured: true,
    available: false,
    whatItDoes: [
      "Recoge los datos esenciales de una reunión desde un único flujo.",
      "Crea el evento en Calendario con la información ya estructurada.",
      "Sirve como base para automatizar registros y seguimientos posteriores.",
    ],
    requirements: ["iPhone con la app Atajos", "Acceso a Calendario"],
    instructions: [
      "Abre el recurso desde tu iPhone.",
      "Añádelo a la app Atajos.",
      "Selecciona el calendario que quieres utilizar cuando el atajo te lo solicite.",
    ],
  },
];

export const featuredResources = resources.filter((resource) => resource.featured);

export const getResourceBySlug = (slug: string) =>
  resources.find((resource) => resource.slug === slug);

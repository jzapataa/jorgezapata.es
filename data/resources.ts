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
    slug: "modo-bajo-consumo",
    name: "Modo bajo consumo",
    description:
      "Activa automáticamente el modo de bajo consumo cuando la batería del iPhone baja del nivel que configures.",
    category: "Atajo",
    version: "1.0",
    updatedAt: "2026-10-13",
    platform: ["iPhone", "Shortcuts"],
    downloadUrl: "https://www.icloud.com/shortcuts/1067525cd67543df8d61da42696b58e1",
    featured: true,
    available: true,
    whatItDoes: [
      "Activa el modo de bajo consumo para reducir el consumo de batería.",
      "Está pensado para ejecutarse automáticamente cuando la batería baja de un porcentaje concreto.",
      "El disparador de nivel de batería se configura de forma personal en cada iPhone.",
    ],
    requirements: [
      "iPhone con la app Atajos",
      "Permiso para ejecutar automatizaciones personales",
    ],
    instructions: [
      "Abre el recurso desde tu iPhone y añádelo a la app Atajos.",
      "Ve a Automatización y crea una automatización personal basada en Nivel de batería.",
      "Configura, por ejemplo, que se ejecute cuando la batería baje del 25 %.",
      "Selecciona este atajo como acción y activa la ejecución inmediata si iOS te lo permite.",
    ],
  },
  {
    slug: "recordatorio-automatico",
    name: "Recordatorio automático",
    description:
      "Muestra un recordatorio automáticamente al llegar a casa, sin tener que acordarte de abrir ninguna app.",
    category: "Atajo",
    version: "1.0",
    updatedAt: "2026-10-13",
    platform: ["iPhone", "Shortcuts", "Ubicación"],
    downloadUrl: "https://www.icloud.com/shortcuts/24d393e673e84a9aa07dbb816ab294a5",
    featured: true,
    available: true,
    whatItDoes: [
      "Muestra una notificación con el recordatorio que configures.",
      "Está pensado para ejecutarse al llegar a una ubicación, como tu casa.",
      "La ubicación y el radio del disparador se configuran de forma personal en cada iPhone.",
    ],
    requirements: [
      "iPhone con la app Atajos",
      "Permiso de ubicación para Atajos",
      "Permiso para mostrar notificaciones",
    ],
    instructions: [
      "Abre el recurso desde tu iPhone y añádelo a la app Atajos.",
      "Personaliza el texto de la notificación con el recordatorio que quieras recibir.",
      "Ve a Automatización y crea una automatización personal con el disparador Llegar.",
      "Selecciona tu ubicación, ajusta el radio y configura este atajo para ejecutarse al llegar.",
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
    downloadUrl: "https://www.icloud.com/shortcuts/c06319515b254e80b8626c61430972ae",
    featured: true,
    available: true,
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

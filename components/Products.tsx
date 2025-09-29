const products = [
  {
    name: "🌐 Presencia en Internet y Página Web",
    description:
      "Diseño y desarrollo de páginas web profesionales para dar visibilidad online a tu negocio. Incluye opciones desde páginas básicas hasta webs avanzadas con SEO y analítica.",
    packages: ["Starter", "Pro", "Premium"],
    image: "/agente-digitalizador.webp",
  },
  {
    name: "🛒 Comercio Electrónico",
    description:
      "Creación de tiendas online escalables y seguras, con pasarelas de pago, gestión de stock y conexión con marketplaces. Diseñadas para vender desde el primer día.",
    packages: ["Starter", "Pro", "Premium"],
    image: "/e-commerce.webp",
  },
  {
    name: "⚙️ Automatización de Procesos",
    description:
      "Ahorra tiempo y reduce errores implementando automatizaciones en tus procesos. Desde flujos simples hasta RPA y dashboards de control en tiempo real.",
    packages: ["Starter", "Pro", "Premium"],
    image: "/automatizacion.webp",
  },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
          Mis Servicios
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-70 w-full object-cover"
              />
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                <p className="text-gray-700 flex-1">{product.description}</p>

                {/* Paquetes */}
                <ul className="mt-4 space-y-2">
                  {product.packages.map((pkg) => (
                    <li
                      key={pkg}
                      className="text-sm bg-gray-100 px-3 py-1 rounded-lg inline-block mr-2"
                    >
                      {pkg}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-block bg-gradient-to-r from-[#30CDBC] to-[#30CDBC] text-white font-semibold px-4 py-2 rounded-lg text-center hover:opacity-90 transition"
                >
                  Saber más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
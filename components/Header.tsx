const Header: React.FC = () => {
  return (
      <header className="bg-gradient-to-r from-[#45417D] to-[#30CDBC] h-[60vh] flex flex-col justify-center items-center px-6 text-center">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Impulsa tu negocio con digitalización y automatización
          </h1>
          <p className="text-white text-base md:text-lg max-w-xl mb-6 mx-auto text-center">
            Soluciones digitales para hacer crecer tu empresa de forma eficiente.
          </p>
          <a
            href="#prodcuts"
            className="mt-6 bg-white font-semibold px-6 py-3 rounded-2xl shadow-md hover:bg-gray-100 transition"
          >
            Ver productos
          </a>
        </div>
      </header>
    );
};

export default Header;
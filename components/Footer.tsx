const Footer: React.FC = () => {
   return (
      <footer id="contacto" className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-xl font-semibold mb-4 text-white">Contacto</h3>
          <p className="mb-2"><a className= "footer-link" href="mailto:info@jorgezapata.es">📧 info@jorgezapata.es</a></p>
          <p className="mb-2">💼 LinkedIn: <a className="footer-link" href="https://linkedin.com/in/jorgezapatatech" target="_blank" rel="noopener noreferrer">https://linkedin.com/in/jorgezapatatech</a></p>
          <p className="mb-2">🐙 GitHub: <a className="footer-link" href="https://github.com/jzapataa" target="_blank" rel="noopener noreferrer">https://github.com/jzapataa</a></p>
          <p className="mt-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Jorge Zapata Alburquerque. Todos los derechos reservados.
          </p>
        </div>
      </footer>
  );
};

export default Footer;
const Header = () => {
  return (
    <header>
      <div className="hr-logo-container">
        {/* Reemplaza este texto por <img src="/logo.png" alt="Logo" style={{ height: 32 }} /> si tienes tu logo */}
        <span className="hr-logo-span">MiMarca</span>
      </div>

      <nav>
        <ul className="hr-nav-list">
          <li className="hr-nav-li">
            <a className="hr-nav-a" href="#sobre-mi">
              Sobre mi
            </a>
          </li>
          <li className="hr-nav-li">
            <a className="hr-nav-a" href="#habilidades">
              Habilidades
            </a>
          </li>
          <li className="hr-nav-li">
            <a className="hr-nav-a" href="#proyectos">
              Proyectos
            </a>
          </li>
          <li className="hr-nav-li">
            <a className="hr-nav-a" href="#contacto">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

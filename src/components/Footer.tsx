
const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Column */}
          <div>
            <h2 className="text-2xl font-light">
              Energieausweis SZ
            </h2>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-xl mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Hilfe & Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Kundeninfo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-xl mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  AGB
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Stornierungskosten
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm">
          <p>Copyright © 2024 Energieausweis SZ GmbH</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

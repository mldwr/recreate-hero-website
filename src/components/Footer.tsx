
const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Column */}
          <div>
            <h2 className="text-2xl font-light">
              ENERGIE
              <br />
              AUSWEIS<span className="ml-2">48</span>
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
                  Downloads
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API
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

          {/* Reviews Column */}
          <div className="text-right">
            <div className="mb-4">
              <p className="text-lg mb-1">Bewertungen ab 2018</p>
              <div className="flex justify-end items-center gap-2">
                <span className="text-[#FFA41C] text-2xl">4.2</span>
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <svg
                      key={star}
                      className="w-6 h-6 text-[#FFA41C]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <svg
                    className="w-6 h-6 text-[#FFA41C]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" opacity="0.5" />
                  </svg>
                </div>
              </div>
              <p className="text-sm mt-1">
                powered by{" "}
                <span className="text-blue-400">G</span>
                <span className="text-red-400">o</span>
                <span className="text-yellow-400">o</span>
                <span className="text-blue-400">g</span>
                <span className="text-green-400">l</span>
                <span className="text-red-400">e</span>
              </p>
            </div>
            <button className="bg-[#8AB833] text-white px-6 py-2 rounded-md hover:bg-[#729C2A] transition-colors flex items-center gap-2 ml-auto">
              bewerte uns auf
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm">
          <p>Copyright © 2024 Energieausweis48 GmbH</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


const ComparisonSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Energieausweise im Vergleich
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Verbrauchsausweis Column */}
          <div className="space-y-12">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-4h18V3H3v2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Verbrauchsausweis</h3>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <img 
                  src="/lovable-uploads/ced4fdbb-8bcc-4941-924c-8af4646306b8.png"
                  alt="Energy consumption icon"
                  className="w-12 h-12 object-contain"
                />
                <p className="text-gray-700">
                  Nur für <span className="font-semibold">Gebäude</span>, die die{" "}
                  <span className="font-semibold">Wärmeschutzverordnung</span> vom 01.01.1977 einhalten
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-primary">
                    <path
                      fill="currentColor"
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H8v-2h2V9h2v2h2v2h-2v4z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Orientiert sich am <span className="font-semibold">Verbrauch</span> der vergangenen{" "}
                  <span className="font-semibold">drei Jahre</span>
                </p>
              </div>
            </div>

            <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md py-3 font-medium">
              Mehr zum Verbrauchsausweis
            </button>
          </div>

          {/* Bedarfsausweis Column */}
          <div className="space-y-12">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-4h18V3H3v2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Bedarfsausweis</h3>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-primary">
                    <path
                      fill="currentColor"
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H8v-2h2V9h2v2h2v2h-2v4z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Für alle <span className="font-semibold">Wohngebäude</span> jeglicher Baujahre & Zustände
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full text-primary">
                    <path
                      fill="currentColor"
                      d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4H8v-2h2V9h2v2h2v2h-2v4z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Orientiert sich an der <span className="font-semibold">Energieeffizienz</span> vom Gebäude
                </p>
              </div>
            </div>

            <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md py-3 font-medium">
              Mehr zum Bedarfsausweis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;

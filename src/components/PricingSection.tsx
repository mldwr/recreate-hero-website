const PricingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Preisübersicht</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Verbrauchsausweis Card */}
          <div className="border rounded-lg overflow-hidden bg-white transition-shadow hover:shadow-lg h-full flex flex-col">
            <div className="p-6 space-y-4 flex flex-col flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">Verbrauchsausweis</h3>
                <p className="text-gray-600 text-center">Self Service</p>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div className="space-y-3 text-center">
                  <h4 className="font-medium text-gray-800">Einfach und bequem:</h4>
                  <p className="text-sm text-gray-600">
                    Eigenständige Online Dateneingabe mit Unterstützung von unserem Support-Team
                  </p>
                </div>

                <div className="space-y-3 text-center">
                  <h4 className="font-medium text-gray-800">Flexibel und selbstbestimmt:</h4>
                  <p className="text-sm text-gray-600">
                    Energieausweis nach eigenen Zeitplan erstellen
                  </p>
                </div>

                <div className="space-y-3 text-center">
                  <h4 className="font-medium text-gray-800">Qualitätssicherung:</h4>
                  <p className="text-sm text-gray-600">
                    Überprüfung durch unser Expertenteam
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <div className="pt-4 text-center">
                  <p className="text-3xl font-bold text-gray-900">ab 69,95 €</p>
                  <p className="text-sm text-gray-600">inklusive MwSt.</p>
                </div>

                <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md py-2 mt-4">
                  Jetzt bestellen
                </button>
              </div>
            </div>
          </div>

          {/* Bedarfsausweis Card */}
          <div className="border-2 border-primary rounded-lg overflow-hidden bg-white transition-shadow hover:shadow-lg h-full flex flex-col">
          
            <div className="bg-primary text-white text-center py-2">
              <p className="font-medium">Empfehlung</p>
            </div>
            <div className="p-6 space-y-4 flex flex-col flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">Bedarfsausweis</h3>
                <p className="text-gray-600 text-center">Self Service</p>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div className="space-y-3 text-center">
                  <h4 className="font-medium text-gray-800">Einfach und bequem:</h4>
                  <p className="text-sm text-gray-600">
                    Eigenständige Online Dateneingabe mit Unterstützung von unserem Support-Team
                  </p>
                </div>

                <div className="space-y-3 text-center">
                  <h4 className="font-medium text-gray-800">Flexibel und selbstbestimmt:</h4>
                  <p className="text-sm text-gray-600">
                    Energieausweis nach eigenen Zeitplan erstellen
                  </p>
                </div>

                <div className="space-y-3 text-center">
                  <h4 className="font-medium text-gray-800">Präzise Analyse:</h4>
                  <p className="text-sm text-gray-600">
                    Fundierte Bewertung des Energiebedarfs
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <div className="pt-4 text-center">
                  <p className="text-3xl font-bold text-gray-900">ab 99,95 €</p>
                  <p className="text-sm text-gray-600">inklusive MwSt.</p>
                </div>

                <button className="w-full bg-primary text-white hover:bg-primary-dark transition-colors rounded-md py-2 mt-4">
                  Jetzt bestellen
                </button>
              </div>
            </div>
          </div>

          {/* Bedarfsausweis Video Card */}
          <div className="border rounded-lg overflow-hidden bg-white transition-shadow hover:shadow-lg h-full flex flex-col">
            
            <div className="p-6 space-y-4 flex flex-col flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">Bedarfsausweis</h3>
                <p className="text-gray-600 text-center">Full Service im Video-Call</p>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div className="space-y-3 text-center">
                  <h4 className="font-medium text-gray-800">Komfortable Expertenberatung:</h4>
                  <p className="text-sm text-gray-600">
                    Professionelle Unterstützung per Video-Call
                  </p>
                </div>

                <div className="space-y-3 text-center">
                  <h4 className="font-medium text-gray-800">Flexibel:</h4>
                  <p className="text-sm text-gray-600">
                    Termine innerhalb von 24 Stunden – bequem per Smartphone
                  </p>
                </div>

                <div className="space-y-3 text-center">
                  <h4 className="font-medium text-gray-800">Sicher:</h4>
                  <p className="text-sm text-gray-600">
                    Zusätzliche Qualitätssicherung durch Expertenteam
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <div className="pt-4 text-center">
                  <p className="text-3xl font-bold text-gray-900">ab 249,95 €</p>
                  <p className="text-sm text-gray-600">inklusive MwSt.</p>
                </div>

                
                <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md py-2 mt-4">
                  Jetzt bestellen
                </button>

              </div>
            </div>
          </div>

          {/* Bedarfsausweis vor Ort Card */}
          <div className="border rounded-lg overflow-hidden bg-white transition-shadow hover:shadow-lg h-full flex flex-col">
            <div className="p-6 space-y-4 flex flex-col flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 text-center">Bedarfsausweis</h3>
                <p className="text-gray-600 text-center">Full Service vor Ort</p>
              </div>
              
              <div className="space-y-6 flex-grow">
                <div className="space-y-3 text-center">
                  <h4 className="font-medium text-gray-800">Professionelle Vor-Ort-Besichtigung:</h4>
                  <p className="text-sm text-gray-600">
                    Ein geschulter Objektbesichtiger kümmert sich um alles
                  </p>
                </div>

                <div className="space-y-3 text-center">
                  <h4 className="font-medium text-gray-800">Detaillierte Analyse:</h4>
                  <p className="text-sm text-gray-600">
                    Exakte Bewertung durch Experten vor Ort
                  </p>
                </div>

                <div className="space-y-3 text-center">
                  <h4 className="font-medium text-gray-800">Alles inklusive:</h4>
                  <p className="text-sm text-gray-600">
                    Keine versteckten oder zusätzlichen Anfahrtskosten
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <div className="pt-4 text-center">
                  <p className="text-3xl font-bold text-gray-900">ab 349,96 €</p>
                  <p className="text-sm text-gray-600">inklusive MwSt.</p>
                </div>

                <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md py-2 mt-4">
                  Jetzt bestellen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

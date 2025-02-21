
const PricingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Preisübersicht</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Verbrauchsausweis Card */}
          <div className="border rounded-lg overflow-hidden bg-white transition-shadow hover:shadow-lg">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 text-center">Verbrauchsausweis</h3>
              <p className="text-gray-600 text-center">Self Service</p>
              
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

              <div className="pt-4 text-center">
                <p className="text-3xl font-bold text-gray-900">ab 69,95 €</p>
                <p className="text-sm text-gray-600">inklusive MwSt.</p>
              </div>

              <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md py-2 mt-4">
                Jetzt bestellen
              </button>
            </div>
          </div>

          {/* Bedarfsausweis Card */}
          <div className="border rounded-lg overflow-hidden bg-white transition-shadow hover:shadow-lg">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 text-center">Bedarfsausweis</h3>
              <p className="text-gray-600 text-center">Self Service</p>
              
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
                <h4 className="font-medium text-gray-800">Präzise:</h4>
                <p className="text-sm text-gray-600">
                  Erhalten Sie eine fundierte Analyse des Energiebedarfs
                </p>
              </div>

              <div className="pt-4 text-center">
                <p className="text-3xl font-bold text-gray-900">ab 99,95 €</p>
                <p className="text-sm text-gray-600">inklusive MwSt.</p>
              </div>

              <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md py-2 mt-4">
                Jetzt bestellen
              </button>
            </div>
          </div>

          {/* Bedarfsausweis Video Card */}
          <div className="border-2 border-primary rounded-lg overflow-hidden bg-white transition-shadow hover:shadow-lg">
            <div className="bg-primary text-white text-center py-2">
              <p className="font-medium">Empfehlung</p>
            </div>
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 text-center">Bedarfsausweis Video</h3>
              <p className="text-gray-600 text-center">Full Service</p>
              
              <div className="space-y-3 text-center">
                <h4 className="font-medium text-gray-800">Komfortable Expertenberatung:</h4>
                <p className="text-sm text-gray-600">
                  Professionelle Unterstützung per Video-Call.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <h4 className="font-medium text-gray-800">Flexibel:</h4>
                <p className="text-sm text-gray-600">
                  Termine innerhalb von 24 Stunden – bequem per Smartphone.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <h4 className="font-medium text-gray-800">Sicher:</h4>
                <p className="text-sm text-gray-600">
                  Zusätzliche Qualitätssicherung durch Expertenteam
                </p>
              </div>

              <div className="pt-4 text-center">
                <p className="text-3xl font-bold text-gray-900">ab 249,95 €</p>
                <p className="text-sm text-gray-600">inklusive MwSt.</p>
              </div>

              <button className="w-full bg-primary text-white hover:bg-primary-dark transition-colors rounded-md py-2 mt-4">
                Jetzt bestellen
              </button>
            </div>
          </div>

          {/* Bedarfsausweis vor Ort Card */}
          <div className="border rounded-lg overflow-hidden bg-white transition-shadow hover:shadow-lg">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900 text-center">Bedarfsausweis vor Ort</h3>
              <p className="text-gray-600 text-center">Full Service</p>
              
              <div className="space-y-3 text-center">
                <h4 className="font-medium text-gray-800">Professionelle Vor-Ort-Besichtigung:</h4>
                <p className="text-sm text-gray-600">
                  Ein geschulter Objektbesichtiger kümmert sich um alles, damit Sie schnellstmöglich an Ihren Bedarfsausweis kommen.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <h4 className="font-medium text-gray-800">Detaillierte und exakte Analyse:</h4>
                <p className="text-sm text-gray-600">
                  Unsere Experten wissen genau, wo sie die wichtigsten Informationen finden.
                </p>
              </div>

              <div className="space-y-3 text-center">
                <h4 className="font-medium text-gray-800">Transparenz garantiert:</h4>
                <p className="text-sm text-gray-600">
                  • Keine versteckten Kosten
                  <br />
                  • Keine Anfahrtskosten – alles inklusive
                </p>
              </div>

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
    </section>
  );
};

export default PricingSection;

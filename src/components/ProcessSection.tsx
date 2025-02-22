
const ProcessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Drei Vorteile von Energieausweis48
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* No Hidden Costs */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16">
                <svg viewBox="0 0 24 24" className="w-full h-full text-primary">
                  <path
                    fill="currentColor"
                    d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
              Keine versteckten Kosten
            </h3>
            <p className="text-gray-600 text-center">
              Wir garantieren volle Transparenz und eine klare Aufstellung aller anfallenden Gebühren – ohne versteckte Kosten. Sie erhalten Ihren Energieausweis stets zu einem fairen Preis.
            </p>
          </div>

          {/* Professional Support */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16">
                <svg viewBox="0 0 24 24" className="w-full h-full text-primary">
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
              Professionelle Beratung und Unterstützung
            </h3>
            <p className="text-gray-600 text-center">
              Unser engagiertes Serviceteam von Energieausweis48 unterstützt Sie kompetent bei allen Anliegen rund um den Energieausweis und sorgt dafür, dass dieser den gesetzlichen Anforderungen entspricht.
            </p>
          </div>

          {/* Fast Creation */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16">
                <svg viewBox="0 0 24 24" className="w-full h-full text-primary">
                  <path
                    fill="currentColor"
                    d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
              Schnelle und einfache Erstellung von Energie-ausweisen
            </h3>
            <p className="text-gray-600 text-center">
              Erstellen Sie Ihren Energieausweis bei Energieausweis48 schnell und unkompliziert! Nach Prüfung durch einen zertifizierten Energieberater erhalten Sie den amtlichen Ausweis innerhalb von nur 48 Stunden.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md font-medium transition-colors">
            Jetzt beraten lassen
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

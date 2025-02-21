
const StatsSection = () => {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Zahlen, die überzeugen!</h2>
          <p className="text-lg opacity-90 mb-8">
            Mit über 10 Jahren Erfahrung und mehr als 160.000 ausgestellten Ausweisen sind wir Ihr zuverlässiger Partner. Vertrauen Sie auf unsere Expertise und genießen Sie die Zufriedenheit von über 200.000 Kunden!
          </p>
          <button className="bg-white text-secondary hover:bg-gray-100 transition-colors px-6 py-3 rounded-md font-medium">
            Energieausweis Paket bestellen
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {/* Certificate Count */}
          <div className="bg-primary rounded-lg p-6 text-white">
            <div className="text-4xl font-bold mb-2">+160.000</div>
            <div className="text-sm leading-snug">
              Energieausweise
              <br />
              Deutschlandweit
            </div>
          </div>

          {/* Delivery Time */}
          <div className="bg-white rounded-lg p-6 text-secondary">
            <div className="text-4xl font-bold mb-2 text-primary">48 Std.</div>
            <div className="text-sm leading-snug">
              zum
              <br />
              Energieausweis
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white rounded-lg p-6 text-secondary">
            <div className="text-4xl font-bold mb-2 text-primary">+10</div>
            <div className="text-sm leading-snug">
              Jahre Erfahrung
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white rounded-lg p-6 text-secondary">
            <div className="text-4xl font-bold mb-2 text-primary">+200.000</div>
            <div className="text-sm leading-snug">
              Zufriedene Kunden
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

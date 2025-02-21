
import { Info, Smartphone, CheckSquare } from "lucide-react";

const ProcessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <img
              src="/public/lovable-uploads/6eb4d837-8271-494f-839f-17eb1095532f.png"
              alt="Energieausweis Dokument"
              className="w-full h-auto max-w-md mx-auto transform -rotate-12 shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Wie bekomme ich meinen Energieausweis?
              <br />
              Energieausweis in 3 einfachen Schritten.
            </h2>
            <p className="text-lg text-gray-600">
              Mit den notwendigen Unterlagen in der Hand erhalten Sie Ihren Energieausweis{" "}
              <span className="font-semibold">in nur 48 Stunden</span> – schnell und unkompliziert.{" "}
              <a href="#" className="text-primary hover:underline">
                Hier
              </a>{" "}
              finden Sie eine Übersicht der wichtigsten Dokumente für eine einfache Bestellung.
            </p>
            <button className="inline-flex items-center px-6 py-3 border-2 border-gray-200 rounded-md text-gray-700 hover:border-primary hover:text-primary transition-colors">
              Checkliste aufrufen
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* Step 1 */}
          <div className="bg-white rounded-lg p-8 text-center space-y-4 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex justify-center">
              <div className="bg-primary/10 p-4 rounded-full">
                <Info className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Schritt 1:</h3>
            <p className="text-xl font-semibold text-gray-900">Produkt wählen</p>
            <p className="text-gray-600">
              Self-Service, Video-Service oder Full-Service – entscheiden Sie sich je nach Bedarf und
              Komfort!
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-lg p-8 text-center space-y-4 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex justify-center">
              <div className="bg-primary/10 p-4 rounded-full">
                <Smartphone className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Schritt 2:</h3>
            <p className="text-xl font-semibold text-gray-900">Daten eingeben</p>
            <p className="text-gray-600">
              Im Self-Service füllen Sie einfach unser Online-Formular aus. Beim Video- und
              Full-Service übernehmen unsere Experten den gesamten Aufwand für Sie.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-lg p-8 text-center space-y-4 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex justify-center">
              <div className="bg-primary/10 p-4 rounded-full">
                <CheckSquare className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Schritt 3:</h3>
            <p className="text-xl font-semibold text-gray-900">Überprüfung & Erstellung</p>
            <p className="text-gray-600">
              Unsere Energieberater prüfen Ihre Daten und erstellen den Energieausweis gemäß den
              aktuellen gesetzlichen Vorgaben des Gebäudeenergiegesetzes.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 space-y-6">
          <p className="text-xl text-gray-900">
            <span className="font-semibold">Fertig!</span> Sie erhalten Ihren Energieausweis in
            kürzester Zeit digital und einsatzbereit per E-Mail.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
            Jetzt bestellen
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

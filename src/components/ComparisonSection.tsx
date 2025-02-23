
import { BrickWall } from "lucide-react";

const ComparisonSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Energieausweise im Vergleich
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Verbrauchsausweis Column */}
          <div className="space-y-12">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <img
                  src="/verbrauchausweis.png"
                  alt="Energy certificate service"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Verbrauchsausweis</h3>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <BrickWall className="w-full h-full text-primary" />
                </div>
                <p className="text-gray-700">
                  Nur für <span className="font-semibold">Gebäude</span>, die die{" "}
                  <span className="font-semibold">Wärmeschutzverordnung</span> vom 01.01.1977 einhalten
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <BrickWall className="w-full h-full text-primary" />
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
                <img
                  src="/bedarfsausweis.png"
                  alt="Energy certificate service"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Bedarfsausweis</h3>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <BrickWall className="w-full h-full text-primary" />
                </div>
                <p className="text-gray-700">
                  Für alle <span className="font-semibold">Wohngebäude</span> jeglicher Baujahre & Zustände
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <BrickWall className="w-full h-full text-primary" />
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

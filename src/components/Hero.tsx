
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-24 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                {/* <p className="text-lg text-gray-600">
                  In <span className="text-primary font-bold text-2xl">48</span> Stunden
                </p> */}
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  Energieausweis SZ!
                </h1>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Sie benötigen einen rechtssicheren Energieausweis als{" "}
                <a href="/bedarfsausweis" className="text-primary hover:text-white hover:bg-primary cursor-pointer border border-primary rounded-full px-2 transition-colors">Bedarfsausweis</a> oder{" "}
                <a href="/verbrauchsausweis" className="text-primary hover:text-white hover:bg-primary cursor-pointer border border-primary rounded-full px-2 transition-colors">Verbrauchsausweis</a>?
                Wir erstellen Ihren Energieausweis direkt bei Ihnen vor Ort, 
                remote als Video-Call oder im Self-Service direkt hier online.
              </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
                Jetzt bestellen
              </button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/public/energieausweis-hero.jpg"
                alt="Energy certificate service"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">Video-Call</p>
                <p className="text-sm text-gray-500">Direkt und unkompliziert</p>
              </div>
            </div>

            <div className="absolute -top-12 right-4 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900">Energieausweis</p>
                <p className="text-sm text-gray-500">Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

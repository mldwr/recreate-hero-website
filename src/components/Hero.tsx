
import { Star } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen pt-16 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-2">
                {/* <p className="text-lg text-gray-600">
                  In <span className="text-primary font-bold text-2xl">48</span> Stunden
                </p> */}
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                  Energieausweis online bestellen:
                  <br />
                  <span className="text-gray-800">Deutschlandweit!</span>
                </h1>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Wir sind Ihr zuverlässiger Partner für rechtssichere{" "}
                <span className="text-primary hover:underline cursor-pointer">Bedarfsausweise</span> und{" "}
                <span className="text-primary hover:underline cursor-pointer">Verbrauchsausweise</span>.
                Ihren Energieausweis erstellen wir für Sie komfortabel bei einer Vor-Ort-Begehung,
                einer Videobesichtigung oder im Self-Service.
              </p>

              <p className="text-lg text-gray-700 font-medium">
                Nutzen Sie unser Rundum-sorglos-Paket!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-md text-lg font-medium transition-colors">
                Jetzt bestellen
              </button>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600">Bewertungen ab 2018</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4 ? "text-yellow-400 fill-yellow-400" : "text-yellow-400 fill-yellow-400 opacity-50"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-900">4.2</span>
                <img
                  src="/public/energieausweis-hero.jpg"
                  alt="Google"
                  className="h-6 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/public/energieausweis-hero.jpg"
                alt="Energy certificate service"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 right-6 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
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
                <p className="font-medium text-gray-900">Videobesichtigung</p>
                <p className="text-sm text-gray-500">Einfach live</p>
              </div>
            </div>

            <div className="absolute -top-6 right-12 bg-white rounded-xl shadow-lg p-4 flex items-center gap-3">
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
                <p className="text-sm text-gray-500">Deutschlandweit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

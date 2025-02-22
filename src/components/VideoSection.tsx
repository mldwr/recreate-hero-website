
const VideoSection = () => {
  return (
    <section className="py-20 bg-[#F2FCE2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full aspect-square rounded-full bg-[#D6F0B3] flex items-center justify-center">
              <img
                src="/video-call.jpeg"
                alt="Video conferencing interface showing an energy consultation"
                className="w-[70%] h-[70%] object-contain"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-secondary leading-tight">
              Ihr Energieausweis bequem per Videokonferenz – schnell, einfach und zuverlässig!
            </h2>

            <div className="space-y-4 text-lg text-gray-700">
              <p>
                <span className="font-semibold">Sparen Sie Zeit und Aufwand:</span>{" "}
                Unser geschulter Experte begleitet Sie live per Video und erfasst alle Daten direkt im System – inklusive Fotos.
              </p>
              <p>
                Ein <span className="font-semibold">Vor-Ort-Termin</span> ist nicht nötig, Sie bleiben{" "}
                <span className="font-semibold">maximal flexibel und handeln rechtssicher!</span>
              </p>
            </div>

            <button className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded-md font-medium">
              Mehr Infos zum Video-Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

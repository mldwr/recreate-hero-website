
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Energieausweis FAQ
          </h2>
          <h3 className="text-xl text-gray-600 mb-12">
            Mehr zu unseren Produkten und Services
          </h3>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                Wie lange dauert die Bearbeitung einer Energieausweises bis zur Ausstellung?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Die Bearbeitung eines Energieausweises dauert in der Regel 48 Stunden. Nach Eingang aller erforderlichen Unterlagen und der Bezahlung wird Ihr Energieausweis von einem zertifizierten Energieberater erstellt und Ihnen digital zur Verfügung gestellt.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline text-primary">
                Wann ist der Gewerbeanteil wohnungsähnlich und wann nicht?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Ein Gewerbeanteil gilt als wohnungsähnlich, wenn die Nutzung vergleichbar mit einer Wohnnutzung ist. Dies ist beispielsweise bei Büros, Praxen oder Kanzleien der Fall. Nicht wohnungsähnlich sind dagegen Werkstätten, Produktionshallen oder Lagerflächen mit besonderen energetischen Anforderungen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                Warum benötigt man beim Verkauf oder bei der Vermietung eines Gebäudes einen Energieausweis?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Der Energieausweis ist gesetzlich vorgeschrieben und dient der Transparenz des Energieverbrauchs. Er ermöglicht potenziellen Käufern oder Mietern, die energetische Qualität verschiedener Gebäude zu vergleichen und die zu erwartenden Energiekosten abzuschätzen.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                Was muss ich bei Gebäuden mit mehreren Hausnummern beachten?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Bei Gebäuden mit mehreren Hausnummern ist zu prüfen, ob es sich um einen zusammenhängenden Gebäudekomplex handelt. Entscheidend ist die bauliche und energetische Verbundenheit. In der Regel benötigt ein zusammenhängendes Gebäude nur einen Energieausweis, auch wenn es mehrere Hausnummern hat.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                Was ist ein Energieausweis?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Ein Energieausweis ist ein gesetzlich vorgeschriebenes Dokument, das die energetische Qualität eines Gebäudes bewertet. Er gibt Auskunft über den Energieverbrauch oder -bedarf und ermöglicht einen Vergleich verschiedener Immobilien. Der Ausweis enthält wichtige Kennwerte und Empfehlungen zur energetischen Verbesserung.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                Wie lange ist ein Energieausweis gültig?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Ein Energieausweis ist grundsätzlich 10 Jahre gültig. Nach Ablauf dieser Frist muss ein neuer Energieausweis erstellt werden. Bei wesentlichen Änderungen am Gebäude, die den Energiebedarf beeinflussen, sollte auch vor Ablauf der Gültigkeit ein neuer Ausweis erstellt werden.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white rounded-lg">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                Wer stellt einen Energieausweis aus?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Energieausweise dürfen nur von qualifizierten Fachleuten ausgestellt werden. Dazu gehören insbesondere:
                • Architekten und Ingenieure
                • Zertifizierte Energieberater
                • Handwerksmeister bestimmter Fachrichtungen
                Diese Experten müssen ihre Qualifikation nachweisen und sind berechtigt, Energieausweise auszustellen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

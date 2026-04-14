export default function Hero({ art }) {
    if (!art) {
        return <p className="text-gray-400">Hero-Bild "Artist at work" nicht in Strapi gefunden...</p>;
    }

    return (
        <section className="mb-16 text-left">

            {/* Events */}
            <div className="w-[985px] flex gap-4 pt-9 pr-6 pb-5 pl-0 border-b border-gray-200 mb-5">
                <div className="w-1/4">
                    <h2 className="text-[16px] font-normal">
                        Upcoming Events
                    </h2>
                </div>

                <div className="w-1/4 text-left  text-gray-600">
                    <p className="text-sm font-medium mb-1">Produzentengalerie Rotklee</p>
                    <p className="italic text-sm mb-1">20 March 2026, 6 PM</p>
                    <a 
                        href="https://www.atelier-rotklee.de/index/ausstellungen/rotklee-lxi-von-aphrodite-bis-zeus/" 
                        className="text-blue-600 text-sm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View Exhibition
                    </a>
                </div>

                <div className="w-1/4 text-left  text-gray-600">
                    <p className="text-sm font-medium mb-1">KunstOffen MV</p>
                    <p className="italic text-sm mb-1">May 23rd, 11am</p>
                    <a 
                        href="https://www.vorpommern.de/kunst-offen.html" 
                        className="text-blue-600 text-sm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        View Event
                    </a>
                </div>

                <div className="w-1/4 text-left  text-gray-600">
                    <p className="text-sm font-medium mb-1">Summer Atelier Show</p>
                    <p className="italic text-sm mb-1">Jun 14th, 5pm</p>
                    <a 
                        href="#" 
                        className="text-blue-600 text-sm" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Learn More
                    </a>
                </div>
            </div>

            <p className="text-2xl font-sans font-normal text-gray-600 mb-2 pt-6 leading-snug max-w-4xl">
                Painting A Language Beyond Words
            </p>

            <p className="text-2xl font-serif font-normal text-gray-600 mb-8 leading-snug max-w-4xl">
                My paintings explore a symbolic visual language I call Hieros,
                gestural marks that move between writing, drawing, and abstraction.
            </p>

            {/* Hero image */}
            <div className="w-full">
                <img 
                    src={art.image}
                    alt={art.title}
                    className="w-full h-auto object-cover"
                />
            </div>
        </section>
    );
}
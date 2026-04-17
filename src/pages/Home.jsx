import Hero from "../components/Hero";
import { useArtworks } from "../context/ArtworkContext";
import { Link } from "react-router-dom";


export default function Home() {
    const { artworks } = useArtworks();

    if (!artworks || artworks.length === 0) {
        return <p>Loading...</p>;
    }

    const heroArtwork = artworks.find(
        (a) => a.title === "Artist at work"
    );

    const selectedWorks = artworks
        .filter((art) => art.title !== "Artist at work")
        .slice(0, 5);

    const aboutImage = artworks.find(
        (a) => a.title === "About artist"
    );

    const logoImage = artworks.find(
        (a) => a.title === "Logo"
    );
console.log("ARTWORKS:", artworks);
    
  return (
    <>
        <Hero art={heroArtwork} />
        <section className="w-[985px] pt-10 pb-16 border-t border-gray-200">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl font-base">
                    Selected Works
                </h2> 
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                {selectedWorks.slice(0, 2).map((work) => (
                    <div key={work.id} className="text-left">
                        {work.image && (
                            <img
                                src={work.image}
                                alt={work.title}
                                className="w-full h-auto object-cover mb-2"
                            />
                        )}

                        <p className="text-sm font-medium text-gray-800 mb-1">
                        {work.title}
                        </p>

                        <p className="text-xs italic text-gray-500 mb-2">
                        {work.year || "2026"}
                        </p>

                        <a
                        href={`/artwork/${work.id}`}
                        className="text-blue-500 text-xs hover:underline"
                        >
                        View Artwork →
                        </a>
                    </div>
                    )
                )}
            </div>

            <div className="grid grid-cols-3 gap-4">
                {selectedWorks.slice(2, 5).map((work) => (
    
                        <div key={work.id} className="text-left">
                            {work.image && (
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full aspect-[4/5] object-cover mb-2"
                                />
                            )}
                            
                        <p className="text-sm font-medium text-gray-800 mb-1">
                            {work.title}
                        </p>

                        <p className="text-xs italic text-gray-500 mb-2">
                            {work.year || "2026"}
                        </p>

                        <a
                            href={`/artwork/${work.id}`}
                            className="text-blue-500 text-xs hover:underline"
                        >
                            View Artwork →
                        </a>
                    </div>
                ))}
            </div>
        </section>

        <section className="w-[985px] pt-12 pb-20 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-6 items-start">
                <div>
                    {aboutImage?.image && (
                        <img
                            src={aboutImage.image}
                            alt={aboutImage.title}
                            className="w-full h-auto object-cover"
                        />
                    )}
                </div>

                <div>
                    <h2 className="text-base font-normal text-black mb-6">
                        About the Artist
                    </h2>

                    <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        Randolph H. Wolf is a contemporary German painter known for abstract works incorporating gold leaf and mixed media. Member of BBK, works in private collections, exhibited in Germany and Europe.
                    </p>

                    <a href="/about" className="text-blue-600 text-sm">
                        Learn More →
                    </a>
                </div>
            </div>
        </section>

        <section className="w-[985px] pt-12 pb-16 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-6">

                {/* left */}
                <div>
                    <p className="text-sm text-gray-700 mb-2">
                        Atelier Randolph H. Wolf
                    </p>

                    <p className="text-[13px] text-gray-500">
                        Zarrendorf, Germany
                    </p>
                </div>

                {/* right */}
                <div className="text-right">
                    <Link to="/contact" className="text-[13px] text-blue-600">
                        Contact →
                    </Link>
                </div>
            </div>
        </section>

        <section className="w-[985px] py-16 flex justify-center">
            {logoImage && (
                <img
                src={logoImage.image}
                alt="Logo"
                className="w-[80px] h-[80px] object-cover rounded-full"
                />
            )}
        </section>
    </>
  );
}
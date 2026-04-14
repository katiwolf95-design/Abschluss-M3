import { useParams, Link } from "react-router-dom";
import { useArtworks } from "../context/ArtworkContext";


export default function ArtworkDetail() {
    const { artworks } = useArtworks();
    const { id } = useParams();

    const art = artworks.find(
        (item) => item.id === Number(id)
    );

    if (!art) {
        return <h1 className="p-6">Artwork not found</h1>;
    }

    return (
        <div className="max-w-5xl mx-auto px-6 py-16">

            <Link to="/gallery" className="text-sm text-gray-500 mb-10 inline-block">
                ← Back to Gallery
            </Link>
            
            <img
                src={art.image}
                alt={art.title}
                className="w-full max-h-[800px] object-cover mb-12"
            />
        
            <h1 
                className="text-3xl mb-2"
                style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>
                {art.title}
            </h1>

            <p className="text-base text-gray-600 font-sans">
                {art.description}
            </p>

        </div>
    );
}
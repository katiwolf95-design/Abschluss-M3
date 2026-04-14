
import ArtworkGrid from "../components/ArtworkGrid";
import { useArtworks } from "../context/ArtworkContext";


export default function Gallery() {
    const { artworks } = useArtworks();

    const gold = artworks.filter(a => a.category?.trim() === "Gold");
    const hieros = artworks.filter(a => a.category?.trim() === "Hieros");
    const series = artworks.filter(a => a.category?.trim() === "Series");

    return (
        <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-3xl">Gallery</h1>

            <h2 className="text-xl font-semibold mb-4">Gold</h2>
            <ArtworkGrid artworks={gold} />

            <h2 className="text-xl font-semibold mb-4 mt-10">Hieros</h2>
            <ArtworkGrid artworks={hieros} />

            <h2 className="text-xl font-semibold mb-4 mt-10">Series</h2>
            <ArtworkGrid artworks={series} />
        </div>
    );
}
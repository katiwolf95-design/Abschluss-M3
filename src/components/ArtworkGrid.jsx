import ArtworkCard from "./ArtworkCard";

function groupAtrworks(artworks) {
    const pattern = [2, 3];
    const result = [];

    let index = 0;
    let patternIndex = 0;

    while (index < artworks.length) {
        const size = pattern[patternIndex % pattern.length];
        result.push(artworks.slice(index, index + size));
        index += size;
        patternIndex++;
    }

    return result;
}

export default function ArtworkGrid({ artworks = [] }) {
    const groups = groupAtrworks(artworks);
    
    return (
        <div className="space-y-10">
            {groups.map((group, index) => (
                <div 
                    key={index}
                    className={`grid gap-4 ${
                        group.length === 2 ? "grid-cols-2" : "grid-cols-3"
                    }`}
                >
                    {group.map((art) => (
                        <ArtworkCard key={art.id} art={art} />
                    ))}
                </div>
            ))}
        </div>
    );
}
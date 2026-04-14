import { createContext, useContext, useEffect, useState } from "react";

const ArtworkContext = createContext();
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL;

export function ArtworkProvider({ children }) {
    const [artworks, setArtworks] = useState([]);

    
        async function fetchArtworks() {
            try {
                const response = await fetch(`${STRAPI_URL}/api/artworks?populate=*`);
                const json = await response.json();

                const formattedArtworks = json.data.map(item => ({
                    id: item.id,
                    title: item.Title,
                    year: item.Year,
                    category: item.Category,
                    image: item.Image?.url
                        ? `${STRAPI_URL}${item.Image.url}`
                        : ""
                }));

                setArtworks(formattedArtworks);
            } catch (error) {
                console.error(error);
            }
        }
    useEffect(() => {
        fetchArtworks();
    }, []);

    return (
        <ArtworkContext.Provider value={{ artworks, fetchArtworks }}>
            {children}
        </ArtworkContext.Provider>
    );
}

export function useArtworks() {
    return useContext(ArtworkContext);
}
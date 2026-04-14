import { Link } from "react-router-dom";

export default function ArtworkCard({ art }) {
  return (
    <div className="w-full overflow-hidden transition">

        {art.image && (
            <img 
                src={art.image}
                alt={art.title}
                className="w-full h-auto object-cover mb-2"
            />
        )}

        <div>
            <p className="text-sm font-medium text-gray-800 mb-1" >
                {art.title}
            </p>

            <p className="text-xs italic text-gray-500 mb-2">
            {art.description}
            </p>

            <Link
            to={`/artwork/${art.id}`}
            className="text-blue-500 text-xs mb-5"
            >
            View →
            </Link>
        </div>

    </div>
  );
}
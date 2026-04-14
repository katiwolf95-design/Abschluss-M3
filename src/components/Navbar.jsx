import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="
            flex flex-col gap-12 
            bg-white text-left">
            
            <h1 className="font-serif text-xl font-medium tracking-tight">Randolph Art</h1>
           
            <div 
                style={{ fontFamily: "Arial" }}
                className="flex flex-col gap-6 text-sm tracking-[0.08em] text-gray-500">
                <Link to="/" className="hover:text-black transition-colors">Home</Link>
                <Link to="/gallery" className="hover:text-black transition-colors">Gallery</Link>
                <Link to="/about" className="hover:text-black transition-colors">About</Link>
            </div>
        </nav>
    );
}
import { useState } from "react";

export default function AddArtworkForm({ onAdd }) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!title || !image) {
            alert("Please fill all required fields");
            return;
        }

        const newArtwork = {
            id: Date.now(),
            title,
            image,
            description,
        };

        onAdd(newArtwork);

        setTitle("");
        setImage("");
        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full mb-3 p-2 border"
            />

            <input
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="w-full mb-3 p-2 border"
            />
            
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full mb-3 p-2 border"
            />

            <button className="bg-black text-white px-4 py-2">
                Add Artwork
            </button>
        </form>
    );
}
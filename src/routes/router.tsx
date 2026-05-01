import { createBrowserRouter } from "react-router-dom";
import ArtistPage from "../features/artists/pages/ArtistPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div className="text-white">Home - Selecciona un artista</div>
    },
    {
        path: "/artist/:artistSlug",
        element: <ArtistPage />
    }
]);
import { createBrowserRouter } from "react-router-dom";
import ArtistPage from "../features/artists/pages/ArtistPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>
    },
    {
        path: "/artist/kanye",
        element: <ArtistPage />
    }
]);
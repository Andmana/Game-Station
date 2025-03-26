import { Link, useRouteError } from "react-router-dom";

// Define the type for the error object
interface RouteError {
    status?: number;
    statusText: string;
}

export default function ErrorPage() {
    // Use `useRouteError` and cast it to `RouteError` type
    const error = useRouteError() as RouteError;

    return (
        <div
            id="error-page"
            className="bg-dark text-white h-screen flex flex-col items-center justify-center"
        >
            <h1>{error.status}</h1>
            <p>
                <i>{error.statusText}</i>
            </p>
            <h2 className="mt-6">Oops!</h2>

            <p>Sorry, an unexpected error has occurred.</p>
            <Link to="/"> Back</Link>
        </div>
    );
}

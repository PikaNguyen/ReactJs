import { Link, useRouteError } from "react-router-dom";
import imageError from "../assets/error.png"
import "../components/todo/todo.css"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="todo-container">
            <h1>Oops! NOT FOUND 404</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <img src={imageError} className="img-upload" />
            <div>
                <Link to="/">
                    <span>Back to homepage</span>
                </Link>

            </div>
        </div>
    );
} 
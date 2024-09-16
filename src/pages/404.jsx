import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Something went wrong. We couldn't process your request.
        </p>
        <p className="text-sm text-gray-500 italic">
          {error.statusText || error.message}
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

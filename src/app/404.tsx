import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-lg">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="mt-4 text-2xl text-darkColor">Oops! Page Not Foundjkbkjb</p>
        <p className="mt-2 text-lg text-gray-600">The page you're looking for doesn't exist.</p>
        <button
          onClick={() => router.push('/')}
          className="mt-6 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

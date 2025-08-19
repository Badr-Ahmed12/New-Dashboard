export default function Not_Found() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-8xl font-bold mb-6">
          404
        </h1>
        <h2 className="text-4xl font-bold">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg">
          The page you are looking for does not exist.
        </p>
        <div className="mt-8">
          <a href="/" className="text-blue-600 hover:underline">
            Go back to Home
          </a>
        </div>
      </div>
    </div>
  )
}


import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pharmaceutical-50 to-primary-100">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="text-8xl mb-4">🔍</div>
        <h1 className="text-4xl font-bold text-pharmaceutical-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-pharmaceutical-700 mb-4">Page Not Found</h2>
        <p className="text-pharmaceutical-600 mb-6">
          The page you are looking for might have been moved, deleted, or you entered the wrong URL.
        </p>
        <a
          href="/"
          className="inline-block bg-pharmaceutical-600 hover:bg-pharmaceutical-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Return to Home
        </a>
      </div>
    </div>
  )
}
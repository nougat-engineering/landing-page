'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8">
      <h2 className="text-2xl font-bold mb-4">Algo salió mal</h2>
      <p className="text-neutral-400 mb-6 text-center max-w-md">
        {error.message || 'Ocurrió un error inesperado'}
      </p>
      <button
        onClick={reset}
        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors"
      >
        Intentar de nuevo
      </button>
    </div>
  )
}

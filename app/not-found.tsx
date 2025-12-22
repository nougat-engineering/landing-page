export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-8">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="text-xl text-neutral-400 mb-6">Página no encontrada</p>
      <a
        href="/"
        className="px-6 py-3 bg-white text-black rounded-lg hover:bg-neutral-200 transition-colors"
      >
        Volver al inicio
      </a>
    </div>
  )
}


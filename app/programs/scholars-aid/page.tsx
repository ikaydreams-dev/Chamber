export default function ScholarsAidPage() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="bg-slate-900 dark:bg-slate-950 py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-white">Tertiary Scholars&apos; Aid</h1>
          <p className="text-sm text-gray-400 mt-1">
            External Program Website - <a href="https://www.tertiaryscholarsaid.org" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Open in new tab</a>
          </p>
        </div>
      </div>
      <iframe
        src="https://www.tertiaryscholarsaid.org"
        className="w-full flex-1 border-0"
        title="Tertiary Scholars' Aid Website"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      />
    </div>
  )
}

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
            <div className="hidden md:flex space-x-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Hero skeleton */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="h-6 w-24 bg-gray-200 rounded-full mx-auto mb-6 animate-pulse"></div>
          <div className="h-12 w-96 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-80 bg-gray-200 rounded mx-auto mb-8 animate-pulse"></div>
          <div className="h-12 w-full max-w-md bg-gray-200 rounded-lg mx-auto animate-pulse"></div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Search and categories skeleton */}
        <div className="mb-12">
          <div className="h-12 w-full bg-gray-200 rounded-lg mb-6 animate-pulse"></div>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>

        {/* Articles skeleton */}
        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-6">
                <div className="w-48 h-32 bg-gray-200 rounded-lg animate-pulse flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 w-3/4 bg-gray-200 rounded mb-4 animate-pulse"></div>
                  <div className="flex items-center gap-4">
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more button skeleton */}
        <div className="text-center mt-12">
          <div className="h-12 w-32 bg-gray-200 rounded-lg mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

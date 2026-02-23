export default function Loading() {
  return (
    <div className="pt-32 pb-20 bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-6">
        <div className="h-4 w-32 bg-muted rounded animate-pulse mb-10" />

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-muted" />
            <div className="h-3 w-16 bg-muted rounded animate-pulse" />
          </div>
          <div className="h-10 w-80 bg-muted rounded animate-pulse mb-4" />
          <div className="h-5 w-96 max-w-full bg-muted rounded animate-pulse" />
        </div>

        <div className="space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-border p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-3 w-32 bg-muted rounded animate-pulse" />
                <div className="h-3 w-16 bg-muted rounded animate-pulse" />
              </div>
              <div className="h-6 w-full bg-muted rounded animate-pulse mb-3" />
              <div className="h-4 w-3/4 bg-muted rounded animate-pulse mb-4" />
              <div className="h-5 w-24 bg-muted rounded-full animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

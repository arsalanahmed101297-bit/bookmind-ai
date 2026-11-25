export default function AppLoading() {
  return (
    <div className="container-app py-7 sm:py-9" aria-busy="true">
      <div className="space-y-3">
        <div className="shimmer h-2.5 w-28 rounded-full" />
        <div className="shimmer h-9 w-64 max-w-full rounded-xl" />
        <div className="shimmer h-3 w-80 max-w-full rounded-full" />
      </div>

      <div className="mt-7 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5">
          <div className="shimmer h-56 rounded-3xl" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="shimmer h-24 rounded-2xl" />
            ))}
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="shimmer aspect-[3/4] rounded-2xl" />
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <div className="shimmer h-56 rounded-3xl" />
          <div className="shimmer h-40 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

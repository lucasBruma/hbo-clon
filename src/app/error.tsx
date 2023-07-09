'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="h-[550px] flex flex-col justify-center items-center text-white">
      <h2>Something went wrong!</h2>
      <button className="bg-white text-black px-4 py-2 mt-4 rounded-md" onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return   (
      <>
        <div className='flex flex-row gap-5 items-center justify-center h-[550px]'>
        <svg className="animate-spin" width="30px" height="30px" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 12.5C4.5 16.9183 8.08172 20.5 12.5 20.5C16.9183 20.5 20.5 16.9183 20.5 12.5C20.5 8.08172 16.9183 4.5 12.5 4.5" stroke="#fff" stroke-width="1.2"/>
        </svg>
          <div className='text-2xl text-secondary'>Loading..</div>
        </div>
        </>
    )
  }
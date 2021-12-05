export default function Home() {
  return (
    <div className='App relative flex flex-col'>
      {/* Header */}
      <div className='flex justify-between bg-my-p min-w-full py-4 px-4 gap-3 rounded-b-xl'>
        <div className='flex gap-3'>
          <span className='material-icons text-my-s-thin'>drive_eta</span>
          <p className='text-my-s-thin'>Eternal Parking</p>
        </div>
        <span className='material-icons text-my-s-thin'>menu</span>
      </div>
      {/* Map */}
      <div className='flex flex-col h-64'>
        <div className='flex mx-auto my-4'>
          <h3 className='text-my-p font-bold'>Nearest Parking Place</h3>
          <span className='material-icons-outlined text-my-p'>location_on</span>
        </div>
      </div>
      {/* List Places */}
      <div className='flex flex-col gap-1 p-1 px-2 overflow-y-auto max-h-80'>
        <div className='flex justify-between py-6 px-3 bg-my-p rounded-lg'>
          <p className='text-my-s-thin'>Place A</p>
          <div className='flex gap-3 text-my-s-thin'>
            <span className='material-icons-outlined'>near_me</span>
            <span className='material-icons-outlined'>local_parking</span>
            <span className='material-icons-outlined'>bolt</span>
          </div>
        </div>
        <div className='flex justify-between py-6 px-3 bg-my-p rounded-lg'>
          <p className='text-my-s-thin'>Place B</p>
          <div className='flex gap-3 text-my-s-thin'>
            <span className='material-icons-outlined'>near_me</span>
            <span className='material-icons-outlined'>local_parking</span>
            <span className='material-icons-outlined'>bolt</span>
          </div>
        </div>
        <div className='flex justify-between py-6 px-3 bg-my-p rounded-lg'>
          <p className='text-my-s-thin'>Place C</p>
          <div className='flex gap-3 text-my-s-thin'>
            <span className='material-icons-outlined'>near_me</span>
            <span className='material-icons-outlined'>local_parking</span>
            <span className='material-icons-outlined'>bolt</span>
          </div>
        </div>
        <div className='flex justify-between py-6 px-3 bg-my-p rounded-lg'>
          <p className='text-my-s-thin'>Place D</p>
          <div className='flex gap-3 text-my-s-thin'>
            <span className='material-icons-outlined'>near_me</span>
            <span className='material-icons-outlined'>local_parking</span>
            <span className='material-icons-outlined'>bolt</span>
          </div>
        </div>
        <div className='flex justify-between py-6 px-3 bg-my-p rounded-lg'>
          <p className='text-my-s-thin'>Place E</p>
          <div className='flex gap-3 text-my-s-thin'>
            <span className='material-icons-outlined'>near_me</span>
            <span className='material-icons-outlined'>local_parking</span>
            <span className='material-icons-outlined'>bolt</span>
          </div>
        </div>
        <div className='flex flex-wrap-reverse p-2 justify-between gap-2 mb-6 sm:mb-14'>
          <button className='btn text-my-s-thin'>Search by District</button>
          <button className='btn text-my-s-thin'>View More</button>
        </div>
      </div>
      {/* Footer */}
      <div className='flex justify-between bg-my-p min-w-full py-5 px-4 gap-3 rounded-t-xl absolute bottom-0 text-my-s-thin'>
        <span className='material-icons-outlined'>home</span>
        <span className='material-icons-outlined'>explore</span>
        <span className='material-icons-outlined'>location_searching</span>
        <span className='material-icons-outlined'>person_pin_circle</span>
        <span className='material-icons-outlined'>contact_support</span>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className=' relative flex flex-col justify-between'>
      {/* Map */}
      <div className='flex gap-3 flex-col mb-2 p-2'>
        {/* <div className='flex mx-auto my-2'>
            <h3 className='text-my-p font-bold'>Nearest Parking Place</h3>
            <span className='material-icons-outlined text-my-p'>
              location_on
            </span>
          </div> */}
        <center>
          <img
            src='https://wptutsplus.s3.amazonaws.com/310_Give_Your_Customers_Driving_Directions_With_the_Google_Maps_API/wordpress-map-map.jpg'
            alt=''
            // className='max-w-none w-60'
          />
        </center>
      </div>
      {/* List Places */}
      <div className='flex flex-row gap-1 p-1 px-2 overflow-x-scroll md:justify-center'>
        <div className='flex flex-col gap-3 justify-between py-6 px-3 bg-my-p bg-opacity-90 rounded-lg'>
          <p className='text-my-s-thin'>Place A</p>
          <img
            src='https://picsum.photos/300/200?random=1'
            alt=''
            className='max-w-none w-52'
          />
          <div className='flex gap-3 text-my-s-thin'>
            <span className='material-icons-outlined'>near_me</span>
            <span className='material-icons-outlined'>local_parking</span>
            <span className='material-icons-outlined'>bolt</span>
          </div>
        </div>
        <div className='flex flex-col gap-3 justify-between py-6 px-3 bg-my-p bg-opacity-90 rounded-lg'>
          <p className='text-my-s-thin'>Place B</p>
          <img
            src='https://picsum.photos/300/200?random=2'
            alt=''
            className='max-w-none w-52'
          />
          <div className='flex gap-3 text-my-s-thin'>
            <span className='material-icons-outlined'>near_me</span>
            <span className='material-icons-outlined'>local_parking</span>
            <span className='material-icons-outlined'>bolt</span>
          </div>
        </div>
        <div className='flex flex-col gap-3 justify-between py-6 px-3 bg-my-p bg-opacity-90 rounded-lg'>
          <p className='text-my-s-thin'>Place C</p>
          <img
            src='https://picsum.photos/300/200?random=3'
            alt=''
            className='max-w-none w-52'
          />
          <div className='flex gap-3 text-my-s-thin'>
            <span className='material-icons-outlined'>near_me</span>
            <span className='material-icons-outlined'>local_parking</span>
            <span className='material-icons-outlined'>bolt</span>
          </div>
        </div>
        <div className='flex flex-col gap-3 justify-between py-6 px-3 bg-my-p bg-opacity-90 rounded-lg'>
          <p className='text-my-s-thin'>Place D</p>
          <img
            src='https://picsum.photos/300/200?random=4'
            alt=''
            className='max-w-none w-52'
          />
          <div className='flex gap-3 text-my-s-thin'>
            <span className='material-icons-outlined'>near_me</span>
            <span className='material-icons-outlined'>local_parking</span>
            <span className='material-icons-outlined'>bolt</span>
          </div>
        </div>
        <div className='flex flex-col gap-3 justify-between py-6 px-3 bg-my-p bg-opacity-90 rounded-lg'>
          <p className='text-my-s-thin'>Place E</p>
          <img
            src='https://picsum.photos/300/200?random=5'
            alt=''
            className='max-w-none w-48'
          />
          <div className='flex gap-3 text-my-s-thin'>
            <span className='material-icons-outlined'>near_me</span>
            <span className='material-icons-outlined'>local_parking</span>
            <span className='material-icons-outlined'>bolt</span>
          </div>
        </div>
      </div>
      {/* <div className='flex flex-wrap-reverse p-2 justify-between gap-2 mb-6 sm:mb-14'>
          <button className='btn flex-1 text-my-s-thin'>
            Search by District
          </button>
          <button className='btn flex-1 text-my-s-thin'>View More</button>
        </div> */}
    </div>
  )
}

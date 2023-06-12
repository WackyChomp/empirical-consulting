

const Footer = () => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <div className="flex">
            <h1 className='font-bold text-4xl pr-5'>Empirical Consulting</h1>
            <img src="./src/assets/react.svg" alt="logo :P" />
          </div>
          <div className="pt-5">
            <p>Community based on collective experiences and skills</p>
            <p className="pt-4">© Empirical Consulting All Rights Reserved.</p>
          </div>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className='font-bold'>Links</h4>
          <p className='my-3'>Forge George</p>
          <p className='my-3'>Miller Spiller</p>
          <p className='my-3'>Splinter Squinter</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-3'>Business Partners</p>
          <p className='my-3'>Volunteers</p>
          <p className='my-3'>Spotlights</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className='font-bold'>Documentation</h4>
          <p className='my-3'>About Us</p>
          <p className='my-3'>News</p>
          <p className='my-3'>Blog</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
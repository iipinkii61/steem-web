export default function PageMainLayout({ children }) {
  return (
    <>
      <div class='h-80 relative z-0 flex bg-[radial-gradient(at_center_top,_#184353,_#1B2838,_#1B2838)]'>
        <div class='absolute inset-y-0 left-0 z-10 w-screen'>
          
          <div className='flex justify-between'>
            <div className='w-1/3'>{/* side left */}</div>
            <div className='w-full h-screen'>
              {/* body */}
              <div className='h-96'>content</div>
              <div className='h-96'>content</div>
              <div className='h-96'>content</div>
              <div className='h-96'>content</div>
            </div>
            <div className='w-1/3'>{/* side right */}</div>
          </div>
        </div>
      </div>
      
    </>
  )
}

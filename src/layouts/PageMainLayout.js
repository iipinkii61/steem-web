export default function PageMainLayout(props) {
  const { title01, children } = props
  return (
    <>
      {/* <div class='h-80 relative z-0 flex bg-[radial-gradient(at_center_top,_#184353,_#1B2838,_#1B2838)]'>
        <div class='absolute inset-y-0 left-0 z-10 w-screen'> */}
      <div className='flex justify-between '>
        <div className='flex-1'>{/* side left */}</div>
        <div className='w-full h-screen flex-[3_1_0%]'>
          <div className="pt-5 pb-5">{title01}</div>
          {children}
        </div>
        <div className='flex-1'>{/* side right */}</div>
      </div>
      {/* </div>
      </div> */}
    </>
  )
}

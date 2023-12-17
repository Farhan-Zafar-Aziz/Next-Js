import Image from 'next/image'
import logo from '../public/logo.png'
export default function Home() {
  return (
    // <div  className='flex p-4 mx-5 my-7 justify-between bg-gray-300 rounded-full gap-x-2 flex-wrap'>
      
      <div  className='flex p-4 mx-5 my-7 justify-between items-center  bg-gray-300 rounded-full  flex-wrap  '>

      <div className='bg-green-500 p-2 rounded-full order-3'>
        Loremmeroldfwetsdgrtgsgwtsg 
        {/* <div className='w-10 h-10 rounded-full bg-gray-400'>
       O
      </div> */}
      </div>

      {/* How to center a Div? */}
{/* 
    // <div className='w-1/2  h-[200px] bg-gray-300 flex justify-center items-center '>9087
    // <p className=''>Hello</p>
    // </div> */}

      <div className='bg-blue-500  p-2 rounded-full order-3'>
         Loremmerol 
       </div>

       <div className='bg-yellow-500 p-2 rounded-full'>
         Loremmerol
       </div>
     </div>

    // <div className='flex bg-gray-100 justify-between items-center px-4 py4'>

    //   {/* <li><Image className="w-16" src={logo} alt="logo" className='w-14'></Image></li> */}

    //   <ul className='text-xl flex gap-x-4'>
        
    //     <li>Hom</li>
    //     <li>About</li>
    //     <li>Blog</li>
    //     <li>Contact</li>
    //   </ul>
    // </div>


  )
}
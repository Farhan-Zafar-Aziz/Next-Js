import Image from "next/image"
import logo from "../public/scala.png"
export default function Home() {
  return (

    // <div className='flex h-[300px] bg-gray-200 p-3 rounded-full mx-5 my-7 justify-center items-center gap-5'>
    //   <div className="bg-red-300 p-3 rounded-full order-1">
    //     Lorem ipsum  rwe r we re r we rew r we rwe
    //   </div>
    //   <div className="bg-green-300 p-3 rounded-full order-2">
    //     Lorem ipsum dolor sdasjmrjksasdsa as d sad as das 
    //   </div>
    //   <div className="bg-orange-300 p-3 rounded-full order-3">
    //     Lorem ipsum
    //   </div>
    // </div>


    // <div>

    // </div>


//     // <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
//     //   <p className="">Hello world</p>
//     // </div>
// <div>
//     <div className="w-full h-screen  bg-gray-400 flex justify-center items-center ">
//         <p className="text-black font-bold text-2xl">Hello World</p>
//     </div>
//     </div>

    // <div className="p-4 gap-5 bg-gray-400 rounded-2xl py-3 ">
    //   <ul className="flex justify-evenly items-center ">
    //     <li><Image src={logo} alt="logo" className="w-14 h-8"/></li>
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>contact</li>
    //     <li>Blog</li>
    //   </ul>
    // </div>
     
    <div className="flex-wrap ">
      <ul className="flex p-2 m-2 justify-evenly">
        <div className=""><Image src={logo} alt="logo" className="w-16"></Image></div>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
      </ul><hr />
    </div>


    // <div className="flex bg-gray-100 justify-between items-center px-10 py-4 shadow ">
    //   {/* Logo */}
    //   <Image 
    //   className="w-16" 
    //   src={logo} alt="Facebook" />

    //   {/* Button */}
    //   <ul className="text-xl flex  gap-x-4">
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Contact</li>
    //     <li>Blog</li>
    //   </ul>
    // </div>








  )
}
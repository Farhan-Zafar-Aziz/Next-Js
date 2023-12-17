import Image from "next/image"


export default function Navbar() {
  return <div className=" ring flex justify-between flex-wrap p-2 my-5 mx-1 rounded-full">
    
      <div className=" mx-2 ">
      <Image src="/logo3.png" alt="logo3" width={110} height={60} className=''></Image>
      </div>

      <ul className="flex">

      <li className="p-2 px-5 rounded-full">
        Home 
        </li>

      <li className="p-2 px-5 rounded-full">
        About
        </li>

      <li className="p-2 px-5 rounded-full">
        Courses
        </li>
        </ul>
  </div>
}
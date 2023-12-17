export default function Grid() {
    return ( <div>
        <ul className="grid grid-cols-12 h-96 rounded-2xl">
        <li className="bg-pink-600 border border-white col-span-3 text-white font-bold px-6 py-4">Teachers</li>
        <li className="bg-white border border-white col-span-9 text-black font-bold px-6 py-4">Students</li>
        </ul>
        </div> )
}

 <div className="grid  grid-cols-12 grid-rows-5 gap-4"> 
{/*  Top Bar */}
 <div className="col-span-12 h-20 bg-gray-200 row-span-1">
Xeemax
</div> 

{/* Sidebar */}
 <div className="row-span-3 col-span-3 bg-gray-300">
<ul>
  <li>Hello world</li>
  <li>Hello world</li>
  <li>Hello world</li>
  <li>Hello world</li>
</ul>
</div> 

{/* Content */}
 <div className="row-span-3 col-span-9 bg-gray-400">

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio soluta, eos incidunt fugiat voluptas atque dolore repudiandae corporis accusantium quis at pariatur similique deleniti! Delectus, maiores exercitationem. Reiciendis, impedit consequuntur?
</div> 

{/* Footer */}
 <div className="col-span-12 row-span-1 bg-gray-500">
Xeemax
</div>

</div> 


{/* <h1 className="text-lg lg:text-4xl text-red-500 lg:text-blue-500 font-bold ">Hello World, How Are you?</h1> */}

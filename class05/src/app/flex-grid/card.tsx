
export default function Card() {
     return (
    //  <div className='w-1/2 h-[200px] flex bg-white text-black  justify-center  items-center'>
    //  <p className=''>Hello</p>
    //  </div> 

    <div>
     <div className="flex flex-col justify-center items-center border mx-80 p-6 bg-white text-black rounded-2xl">
     <div>Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Architecto doloremque tenetur <br /> eaque ea repellendus est, laborum non ullam et dolores <br /> repudiandae qui perspiciatis, omnis <br /> incidunt, id obcaecati repellat sapiente quam!</div>

     </div>
        <div className="bg-blue-200 p-6 m-80 rounded-2xl" >
        <div className=" flex  flex-row justify-center items-center l">
            <input type="text" className="p-2 " />
            <button className="bg-green-600 p-2 ">Subscribe</button>
        </div>
        </div>
        </div>
    )
}
// mission abort
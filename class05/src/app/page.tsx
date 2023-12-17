
import Navbar from "./navbar/justify-content"
import Card from "./flex-grid/card"

// Display flex 


export default function Quotes() {
  return ( <div className=" flex-wrap w-full h-screen justify-center  p-6">
  <div className="font-serif justify-center items-center  p-4 gap-4 bg-white rounded-2xl flex flex-col text-black">
    <div className="bg-blue-200 p-3  m-2 rounded-2xl">"Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Quo autem, quidem totam consequuntur ab id placeat <br /> possimus alias nihil, cumque quia officiis odit et <br /> molestiae, iste eligendi quibusdam rem. Culpa!"<br />-Raqeeb Machliwala</div>

    <div className="bg-blue-200 p-3 m-2 rounded-2xl">"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Laudantium quam aut corporis sunt laborum quo, <br /> et reprehenderit illo minus, officiis." <br />-Zabi Richard</div>

    <div className="bg-blue-200 p-3 m-2 rounded-2xl">"Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Repudiandae et laborum quaerat commodi totam porro <br />obcaecati nihil, saepe sunt corporis officia iste. <br /> Sed, cum quae iste culpa tenetur rem quis."<br />-Sadiq Dilli</div>    
  </div>
  
  </div> 



  )
}
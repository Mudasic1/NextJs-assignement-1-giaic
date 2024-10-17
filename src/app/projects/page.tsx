function Projects(){
  return (
    <div className="mx-20">
      <h1 className="m-10 text-2xl text-slate-600 font-bold">Projects:</h1>

{/* container */}
      <div className="flex space-x-6 mx-[200px] overflow-auto">

      {/* Project1 */}
        <div className="w-[350px] text-center h-auto border rounded-md bg-blue-400 space-y-6 mx-6">
          <h1 className="text-xl p-5 font-medium ">Project1</h1>
          
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, incidunt.</p>
        </div>

        {/* Project-2 */}
        <div className="w-[350px] text-center h-auto border rounded-md bg-red-400 space-y-6 mx-6">
          <h1 className="text-xl p-5 font-medium ">Project1</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ipsam, totam nulla saepe modi praesentium recusandae possimus asperiores adipisci ea, odit omnis optio itaque aliquam? Voluptatum, illum veniam. Totam doloribus quas voluptatum, ipsam soluta illo quaerat voluptas corporis earum sed?</p>
        </div>

   {/* Project3 */}
   <div className="w-[350px] text-center h-auto border rounded-md bg-violet-400 space-y-6 mx-6">
          <h1 className="text-xl p-5 font-medium ">Project1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis debitis molestiae magni autem ipsum est, iusto deserunt? Hic, ut facere.</p>
        </div>
      </div>
    </div>
  )
}

export default Projects;
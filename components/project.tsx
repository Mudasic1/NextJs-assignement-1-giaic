'use client'



const Projects = () => {
  return (

    <section className="bg-slate-950 py-12 absolute w-screen xl:top-[850px] sm:top-[1405px] space-y-3 xl:flex " id="Projects">
      {/* Project1 */}
      <div className="container mx-auto px-4">
        
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">My Projects</h2>
          <p className="text-gray-600 text-center mb-6">
            Here are some of the projects I&apos;ve worked on recently.
          </p>
          <div className="grid gap-4">
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p className="text-gray-700">Description of project 1.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Project 2</h3>
              <p className="text-gray-700">Description of project 2.</p>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </div>

      {/* Project2 */}
      <div className="container mx-auto px-4">
        
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto">

          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">My Projects</h2>
          <p className="text-gray-600 text-center mb-6">
            Here are some of the projects I&apos;ve worked on recently.
          </p>
          <div className="grid gap-4">
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p className="text-gray-700">Description of project 1.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-xl font-semibold">Project 2</h3>
              <p className="text-gray-700">Description of project 2.</p>
            </div>
            {/* Add more projects as needed */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects

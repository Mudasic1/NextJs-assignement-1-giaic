'use client'


const Hero = () => {
  return (
    <>
    <div className='container absolute top-[300px] xl:left-[200px] sm:flex sm:flex-col sm:left-[100px] pb-[200px] ' id='About'>
      <div className='heroSection absolute mt-[40px] text-center flex flex-col items-center sm:top-[400px] md:top-[100px] lg:top-[500px] xl:top-[0]'>
      <h1 className='text-4xl font-bold tracking-[5px]'>Mudasir Chandio</h1>
      <p className='mt-[20px] text-xl leading-[35px] w-[400px] tracking-[2px]'>I&apos;m a full-stack developer with expertise in building dynamic, user-centric web applications. Skilled in both front-end and back-end technologies like React, Next.js, Tailwind CSS, and JavaScript, I create seamless digital experiences from concept to deployment.</p>
      <button className='h-[50px] w-[200px] border rounded-lg mt-[50px]'><a href="">Download CV</a></button>
      </div>
      <div className="img absolute xl:left-[900px] sm:left-0] sm:flex flex sm:-top-[50px] xl:top-[0]">
        <img src="/man.png" alt="man" height={600} width={600} className="sm:w-[400px]"/>
        {/* <h2 className='text-6xl font-mono absolute top-[180px] font-bold'>Join us</h2> */}
      </div>
    </div>
    </>
  )
}

export default Hero

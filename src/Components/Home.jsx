import React from 'react'

const Home = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Portfolio 
                <span className='bg-gradient-to-r from-blue-200 to-orange-300 text-transparent bg-clip-text'>{" "}Rahul Deopa</span>
            </h1>
            <p className='mt-10 text-lg text-center text-neutral-400 max-w-4xl'>
            Computer Science Engineering graduate with real-world expertise in full-stack development and cloud-based applications. Proficient in Java, Python, SQL, and ReactJS, with experience developing scalable web apps and real-time systems. Notable projects include an AI-powered narrative generator (Tail Weaver) and a face recognition-based attendance management system. Capable of integrating cloud technologies and databases to offer effective, high-performance solutions. Eager to contribute to fresh ideas and broaden technical abilities.
            </p>
        </div>
    )
}

export default Home

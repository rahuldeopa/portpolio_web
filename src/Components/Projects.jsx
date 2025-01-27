import React from 'react'

import { motion } from 'framer-motion'



const Projects = () => {
    return (
        <div className='pb-4'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'>Projects
            </motion.h2>
            <div>
                {PROJECTS.map((projects, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}

                            className='w-full lg:w-1/4'>
                            <img src={projects.image}
                                width={250}
                                height={250}
                                alt={projects.title}
                                className="mb-6 rounded-sm shadow-xl  filter   " />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h3 className='mb-2 font-semibold text-2xl'>{projects.title}</h3>
                            <p className='mb-4 text-stone-400'>{projects.description}</p>
                            <div>
                                {projects.technologies.map((tech, index) => (
                                    <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' key={index}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {projects.github && (
                                <a
                                    href={projects.github}
                                    target="_blank"
                                    rel="noopner noreferrer"
                                    className='mt-4 inline-block rounded bg-stone-500 px-4 py-2 text-white hover:bg-stone-600'
                                >
                                    View On GitHub
                                </a>

                            )}
                        </motion.div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Projects

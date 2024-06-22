import React from 'react'
import { motion } from "framer-motion"
import { EDUCATION } from '../constants'

export const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{opacity: 1, y: 0}}
        initial = {{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Education</motion.h1>
        <div>
            {
                EDUCATION.map((education, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                            whileInView={{opacity: 1, x: 0}}
                            initial = {{opacity: 0, x: -100}}
                            transition={{duration: 1.5}}
                            className="w-full lg:w-1/4">
                            <img 
                                src={education.image} 
                                width={150}
                                height={150}
                                alt={education.college}
                                className="mb-6 rounded"
                            />
                        </motion.div>
                        <motion.div 
                            whileInView={{opacity: 1, x: 0}}
                            initial = {{opacity: 0, x: 100}}
                            transition={{duration: 1.5}}
                            className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-bold">
                                    <span className="text-purple-300">
                                        College: {education.college}
                                    </span>
                                </h6>
                                <h6 className="mb-2 font-bold">
                                    <span className="text-green-300">
                                        Degree: {education.degree}
                                    </span>
                                </h6>
                                <h6 className="mb-2 font-bold">
                                    <span className="text-green-300">
                                        Major: {education.major}
                                    </span>
                                </h6>
                                <h6 className="mb-2 font-bold">
                                    <span className="text-white-100">
                                        CGPA: {education.cgpa}
                                    </span>
                                </h6>
                                <h6 className="mb-2 font-bold">
                                    <span className="text-white-100">
                                        Location: {education.location}
                                    </span>
                                </h6>
                        </motion.div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

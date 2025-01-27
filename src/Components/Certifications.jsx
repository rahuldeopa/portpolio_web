import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../constants';

const Certifications = () => {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl "
            >
                Certifications
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                {CERTIFICATES.map((certification, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ duration: 1 }}
                        className="rounded-lg  p-6 shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className="w-full text-center">
                            <img
                                src={certification.image}
                                alt={certification.title}
                                className="mb-6 rounded-lg mx-auto max-h-64 object-cover"
                            />
                        </motion.div>
                        <h3 className="text-lg font-semibold text-white text-center">
                            {certification.title}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-stone-400 text-center">
                            {certification.organization}
                        </p>
                        <p className="mt-4 text-sm text-stone-300 text-center">
                            {certification.description}
                        </p>
                        {certification.link && (
                            <div className="mt-4 text-center">
                                <a
                                    href={certification.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block rounded bg-stone-400 px-4 py-2 text-sm font-medium text-white hover:bg-stone-600"
                                >
                                    View Certificate
                                </a>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;

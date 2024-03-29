"use client"
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
const About = () => {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });
    return (
        <>
            <motion.div
                animate={{
                    x: 0,
                    backgroundColor: "#000",
                    boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                    position: "fixed",
                    transitionEnd: {
                        display: "none",
                    },
                }}
            />
            <div className="bg-gray-100  p-6 md:mt-28 lg:mt-96 xl:h-auto xl:mt-56  xl:-mb-64  2xl:min-h-screen"
                 id="section-about">
                <div className="w-full mx-auto p-8 rounded shadow-lg text-2xl text-gray-800">
                <h2 className="text-xl md:text-2xl font-bold mb-8 w-full p-2 text-center">Kenya Coffee Events (KCE)</h2>
                <p className="mb-6 text-lg w-full">
                    The Kenya Coffee Events (KCE) is an event management organization
                    registered in Nairobi, Kenya. The Kenya Coffee Events Committee, with
                    the support of the Kenyan government, including but not limited to the
                    AFA-Coffee Directorate, coffee shops, hotels and restaurants, coffee
                    roasters, the Kenya Coffee Traders Association, and Barista Training
                    schools, is responsible for coordinating Kenya&apos;s participation in
                    both national and international coffee events.
                </p>

                <div className="mb-8 w-full">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Committee Functions</h3>
                    <ul className="list-disc text-lg pl-6 w-full">
                        <li>
                            The Official National reference body for Kenya&apos;s
                            participation in both National and International Coffee Events
                        </li>
                        {/* Add similar list items */}
                    </ul>
                </div>

                <div className='w-full'>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">Coffee Events</h3>
                    <ul className="list-disc pl-6 text-lg">
                        <li>
                            <strong>Kenya National Barista Championship</strong>
                            <p className="mb-4">
                                The Kenya National Barista Championship serves a dual function
                                in promoting coffee consumption and improved quality coffee
                                production. It also aims to stimulate domestic consumption of
                                coffee by allowing the public to taste quality coffee and foster
                                improvement in quality in all links of the value chain, from
                                farm to cup.
                            </p>
                            <p>
                                The Kenya National Barista Championship is not only a
                                celebration of Kenya&apos;s top baristas but also a platform for
                                coffee stakeholders to network by exhibiting their products and
                                services. The event&apos;s success is expected to have a
                                positive impact on the country&apos;s coffee industry, and its
                                promotion of sustainable and ethical coffee production practices
                                will ensure that Kenya remains a leader in the global coffee
                                industry.
                            </p>
                        </li>
                        {/* Add similar sections for other events */}
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;

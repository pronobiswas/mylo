'use client'
import React from 'react';
import { motion } from "framer-motion";


const Beforeourupcomingcall = () => {
    return (
        <>
            <section>
                <div className='w-full h-fit'>
                    {/* ===card wrapper=== */}
                    <div
                        className='w-full max-w-5xl mx-auto'>
                        {/* --card heading--- */}
                        <div className='text-center pb-16 text-white'>
                            <motion.h2
                                initial={{
                                    scale: .5,
                                    opacity: .5
                                }}
                                whileInView={{
                                    scale: 1,
                                    opacity: 1
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                }}
                                className='text-5xl text-center font-semibold mb-2'>
                                Before Our <span className='text-emerald-400'>Upcoming Call</span>
                            </motion.h2>
                            <p>Check out what our students say about us!</p>
                        </div>
                        {/* ----card wrapper-- */}
                        <div className='w-full h-fit flex flex-col gap-20 p-5'>
                            {/* --card content-- */}
                            <motion.div
                                initial={{ opacity: 0, y: 300 }}
                                whileInView={{ opacity: 1, y: 0 }}

                                className='rowOne row review-card w-full flex flex-col lg:flex-row gap-8 text-white'>

                                {/* --desc-- */}
                                <div className='w-full max-w-xl text-center lg:text-left'>

                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-2xl bg-emerald-950'>Isaac Bender</h4>

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$8,500 </span> in  His First Month</h3>

                                    <p className='text-neutral-400'>Isaac is 20 years old from Melbourne, Australia. In less than 4 weeks since joining Easy Etsy, he managed to make $8,500 from his Etsy stores. Before joining Takumi’s program, Isaac was working as a salesman full-time. After realising that he was meant for more in life, he decided to give Etsy dropshipping a go. Fast forward just 1 month, he has quit his job and now has the freedom to wake up without an alarm, and work where and when he wants to, all from his laptop. Although Isaac had zero experience with making online prior to joining the mentorship, he was able to achieve the freedom he always wanted because he invested into the right guidance.</p>
                                </div>
                                {/* --video wrapper-- */}
                                <motion.div 
                                initial={{
                                    opacity:.1,
                                    scale:.5
                                }}
                                whileInView={{
                                    opacity:1,
                                    scale:1
                                }}
                                transition={{
                                    duration:.3,
                                    ease:"easeInOut",
                                    delay:.2
                                }}
                                className="w-full aspect-video rounded-3xl overflow-hidden order-1 lg:order-2">
                                    <video
                                        controls
                                        playsInline
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/demo.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </motion.div>
                            </motion.div>
                            {/* --card content 2-- */}
                            <motion.div
                                initial={{ opacity: 0, y: 300 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className='rowTwo row review-card w-full flex flex-col lg:flex-row gap-8 text-white'>
                                {/* --video wrapper-- */}
                                <motion.div 
                                initial={{
                                    opacity:.1,
                                    scale:.5
                                }}
                                whileInView={{
                                    opacity:1,
                                    scale:1
                                }}
                                transition={{
                                    duration:.3,
                                    ease:"easeInOut",
                                    delay:.2
                                }}className="w-full aspect-video rounded-3xl overflow-hidden order-2 lg:order-1">
                                    <video
                                        controls
                                        playsInline
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/demo.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </motion.div>
                                {/* --desc-- */}
                                <div className='rowThree row w-full max-w-xl text-center lg:text-left order-1 lg:order-2'>

                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-2xl bg-emerald-950'>Isaac Bender</h4>

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$8,500 </span> in  His First Month</h3>

                                    <p className='text-neutral-400'>Isaac is 20 years old from Melbourne, Australia. In less than 4 weeks since joining Easy Etsy, he managed to make $8,500 from his Etsy stores. Before joining Takumi’s program, Isaac was working as a salesman full-time. After realising that he was meant for more in life, he decided to give Etsy dropshipping a go. Fast forward just 1 month, he has quit his job and now has the freedom to wake up without an alarm, and work where and when he wants to, all from his laptop. Although Isaac had zero experience with making online prior to joining the mentorship, he was able to achieve the freedom he always wanted because he invested into the right guidance.</p>
                                </div>
                            </motion.div>
                            {/* --card content-- */}
                            <motion.div
                                initial={{ opacity: 0, y: 300 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className='review-card w-full flex flex-col lg:flex-row gap-8 text-white'>

                                {/* --desc-- */}
                                <div className='w-full max-w-xl text-center lg:text-left'>

                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-2xl bg-emerald-950'>Isaac Bender</h4>

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$8,500 </span> in  His First Month</h3>

                                    <p className='text-neutral-400'>Isaac is 20 years old from Melbourne, Australia. In less than 4 weeks since joining Easy Etsy, he managed to make $8,500 from his Etsy stores. Before joining Takumi’s program, Isaac was working as a salesman full-time. After realising that he was meant for more in life, he decided to give Etsy dropshipping a go. Fast forward just 1 month, he has quit his job and now has the freedom to wake up without an alarm, and work where and when he wants to, all from his laptop. Although Isaac had zero experience with making online prior to joining the mentorship, he was able to achieve the freedom he always wanted because he invested into the right guidance.</p>
                                </div>
                                {/* --video wrapper-- */}
                                <motion.div 
                                initial={{
                                    opacity:.1,
                                    scale:.5
                                }}
                                whileInView={{
                                    opacity:1,
                                    scale:1
                                }}
                                transition={{
                                    duration:.3,
                                    ease:"easeInOut",
                                    delay:.2
                                }}
                                className="w-full aspect-video rounded-3xl overflow-hidden order-1 lg:order-2">
                                    <video
                                        controls
                                        playsInline
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/demo.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Beforeourupcomingcall
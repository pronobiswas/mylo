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
                        <div className='w-full h-fit flex flex-col gap-y-32 p-5'>
                            {/* --card content-- */}
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className='review-card '>

                                {/* --desc-- */}
                                <div className='w-full max-w-xl text-center lg:text-left'>

                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-2xl bg-emerald-950'>Krissa Tewari</h4>

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$5,000</span> in One Month</h3>

                                    <p className='text-neutral-400'>Krissa is an 18-year-old full-time university student who was also working long hours as a tutor. After joining Easy Etsy, she generated $5,000 in a single month, allowing her to free up more time to focus on her studies. She now enjoys greater balance and the ability to live life on her own terms.</p>
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
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className='rowTwo row review-card '>
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

                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-2xl bg-emerald-950'>Geonu Paek</h4>

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$7,780</span> in  His First Month</h3>

                                    <p className='text-neutral-400'>Before joining us, Geonu was working two jobs—one as a bartender until 4 a.m., and another starting at 6 a.m.—leaving him with almost no time to rest. Within his first month, he made $7,780 in just 16 days after his first sale. He has since drastically reduced his working hours, giving him the freedom to live life on his own terms.</p>
                                </div>
                            </motion.div>
                            {/* --card content-- */}
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className='review-card  '>

                                {/* --desc-- */}
                                <div className='w-full max-w-xl text-center lg:text-left'>

                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-2xl bg-emerald-950'>David Sokolow</h4>

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$6,000</span> in  His First Month</h3>

                                    <p className='text-neutral-400'>David is a 17-year-old from Sydney, Australia. Before joining Easy Etsy, he was studying full-time in high school while juggling a part-time job. Despite having no prior experience in dropshipping, David generated $6,000 in his very first month—all while preparing for his HSC exams at the same time. After graduating, David has now decided to pursue online business full-time.</p>
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
                            {/* --card content 4-- */}
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className='review-card '>
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

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$8,500</span> in  His First Month</h3>

                                    <p className='text-neutral-400'>Isaac is 20 years old from Melbourne, Australia. In less than 4 weeks since joining Easy Etsy, he managed to make $8,500 from his Etsy stores. Before joining Takumi’s program, Isaac was working as a salesman full-time. After realising that he was meant for more in life, he decided to give Etsy dropshipping a go. Fast forward just 1 month, he has quit his job and now has the freedom to wake up without an alarm, and work where and when he wants to, all from his laptop. Although Isaac had zero experience with making online prior to joining the mentorship, he was able to achieve the freedom he always wanted because he invested into the right guidance.</p>
                                </div>
                            </motion.div>
                            {/* --card content-- */}
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className='review-card '>

                                {/* --desc-- */}
                                <div className='w-full max-w-xl text-center lg:text-left'>

                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-2xl bg-emerald-950'>Kieran</h4>

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$4,600/m</span>in One Month</h3>

                                    <p className='text-neutral-400'>Kieran is a professional rugby player who managed to make $4,600 in his first month and was offered a scholarship to the United States for rugby. Now he plays for the U.S. rugby team and makes money online while only working 10 hours per week.</p>
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
                            {/* --card content 4-- */}
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className=' review-card'>
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

                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-2xl bg-emerald-950'>George</h4>

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'>Over <span className='text-emerald-400'>$6k</span>in His First 45 Days</h3>

                                    <p className='text-neutral-400'>George managed to make $6,600 in his first 45 days while travelling Europe at the same time. This allows George to have the total freedom to travel while making money online.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Beforeourupcomingcall
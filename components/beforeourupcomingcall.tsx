import React from 'react'

const Beforeourupcomingcall = () => {
    return (
        <>
            <section>
                <div className='w-full h-fit'>
                    {/* ===card wrapper=== */}
                    <div className='w-full max-w-5xl mx-auto'>
                        {/* --card heading--- */}
                        <div className='text-center pb-16 text-white'>
                            <h2 className='text-5xl text-center font-semibold mb-2'>Before Our <span className='text-emerald-400'>Upcoming Call</span> </h2>
                            <p>Check out what our students say about us!</p>
                        </div>
                        {/* ----card wrapper-- */}
                        <div className='w-full h-fit flex flex-col gap-20 p-5'>
                            {/* --card content-- */}
                            <div className='w-full flex flex-col lg:flex-row gap-8 text-white'>
                                {/* --video wrapper-- */}
                                <div className='w-full p-5'>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/8I8CiRpR1F8?autoplay=1&mute=1&playsinline=1"
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                {/* --desc-- */}
                                <div className='w-full max-w-xl text-center lg:text-left'>

                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-2xl'>Isaac Bender</h4>

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$8,500 </span> in  His First Month</h3>

                                    <p>Isaac is 20 years old from Melbourne, Australia. In less than 4 weeks since joining Easy Etsy, he managed to make $8,500 from his Etsy stores. Before joining Takumi’s program, Isaac was working as a salesman full-time. After realising that he was meant for more in life, he decided to give Etsy dropshipping a go. Fast forward just 1 month, he has quit his job and now has the freedom to wake up without an alarm, and work where and when he wants to, all from his laptop. Although Isaac had zero experience with making online prior to joining the mentorship, he was able to achieve the freedom he always wanted because he invested into the right guidance.</p>
                                </div>
                            </div>
                            {/* --card content-- */}
                            <div className='w-full flex flex-col lg:flex-row gap-8 text-white'>
                                
                                {/* --desc-- */}
                                <div className='w-full max-w-xl order-2 lg:order-1 text-center lg:text-left'>

                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-xl'>Isaac Bender</h4>

                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$8,500 </span> in  His First Month</h3>

                                    <p>Isaac is 20 years old from Melbourne, Australia. In less than 4 weeks since joining Easy Etsy, he managed to make $8,500 from his Etsy stores. Before joining Takumi’s program, Isaac was working as a salesman full-time. After realising that he was meant for more in life, he decided to give Etsy dropshipping a go. Fast forward just 1 month, he has quit his job and now has the freedom to wake up without an alarm, and work where and when he wants to, all from his laptop. Although Isaac had zero experience with making online prior to joining the mentorship, he was able to achieve the freedom he always wanted because he invested into the right guidance.</p>
                                </div>
                                {/* --video wrapper-- */}
                                <div className="w-full aspect-video rounded-3xl overflow-hidden order-1 lg:order-2">
                                    <video
                                        controls
                                        playsInline
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/demo.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            {/* --card content-- */}
                            <div className='w-full flex flex-col lg:flex-row gap-8 text-white'>
                                {/* --video wrapper-- */}
                                <div className="w-full aspect-video rounded-3xl overflow-hidden">
                                    <video
                                        controls
                                        playsInline
                                        className="w-full h-full object-cover"
                                    >
                                        <source src="/demo.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                {/* --desc-- */}
                                <div className='w-full max-w-xl text-center lg:text-left'>
                                    <h4 className='w-full lg:w-fit text-xl text-emerald-400 border border-emerald-400 px-5 py-2 rounded-2xl'>Isaac Bender</h4>
                                    <h3 className='pt-5 pb-2 text-2xl font-semibold'><span className='text-emerald-400'>$8,500 </span> in  His First Month</h3>
                                    <p>Isaac is 20 years old from Melbourne, Australia. In less than 4 weeks since joining Easy Etsy, he managed to make $8,500 from his Etsy stores. Before joining Takumi’s program, Isaac was working as a salesman full-time. After realising that he was meant for more in life, he decided to give Etsy dropshipping a go. Fast forward just 1 month, he has quit his job and now has the freedom to wake up without an alarm, and work where and when he wants to, all from his laptop. Although Isaac had zero experience with making online prior to joining the mentorship, he was able to achieve the freedom he always wanted because he invested into the right guidance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Beforeourupcomingcall
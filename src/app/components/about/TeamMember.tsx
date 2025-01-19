

const TeamMember = () => {

    return (<>
        <div>
            <section className="py-6 bg-gray-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center flex-col lg:flex-row md:mt-20">
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-xl font-bold text-gray-600 mb-4">Meet Our Team</h2>
                            <h2 className="font-manrope text-5xl text-gray-900 font-bold leading-[4rem] mb-7  lg:text-left">
                                The Driving Force Behind <span className="text-darkColor">Scrapify</span>
                            </h2>
                            <p className="text-lg text-gray-500 mb-16 text-center lg:text-left">
                                At <span >Scrapify</span>, we are proud to have a dedicated team of passionate individuals committed to transforming the way recycling works. Our team brings together expertise in technology, sustainability, and customer service to create a platform that empowers communities and promotes a greener future.
                            </p>
                            <button className="cursor-pointer py-3 px-8 w-60 bg-darkColor text-white text-base font-semibold transition-all duration-500 block text-center rounded-full hover:bg-mutedColor mx-auto lg:mx-0">
                                Join our team
                            </button>
                        </div>
                        <div className="w-full lg:w-1/2 lg:mt-0 md:mt-40 mt-16 max-lg:max-w-2xl ">
                            <div className="grid grid-cols-1 min-[350px]:grid-cols-2 md:grid-cols-3 gap-6">
                                <img
                                    src="https://pagedone.io/asset/uploads/1696238644.png"
                                    alt="Team tailwind section"
                                    className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0"
                                />
                                <img
                                    src="https://pagedone.io/asset/uploads/1696238665.png"
                                    alt="Team tailwind section"
                                    className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mx-auto"
                                />
                                <img
                                    src="https://pagedone.io/asset/uploads/1696238684.png"
                                    alt="Team tailwind section"
                                    className="w-44 h-56 rounded-2xl object-cover md:mt-20 mx-auto min-[450px]:mr-0 md:ml-0"
                                />
                                <img
                                    src="https://pagedone.io/asset/uploads/1696238702.png"
                                    alt="Team tailwind section"
                                    className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0 md:ml-auto"
                                />
                                <img
                                    src="https://pagedone.io/asset/uploads/1696238720.png"
                                    alt="Team tailwind section"
                                    className="w-44 h-56 rounded-2xl object-cover md:-mt-20 mx-auto min-[450px]:mr-0 md:mx-auto"
                                />
                                <img
                                    src="https://pagedone.io/asset/uploads/1696238737.png"
                                    alt="Team tailwind section"
                                    className="w-44 h-56 rounded-2xl object-cover mx-auto min-[450px]:ml-0 md:mr-0"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    </>)
}

export default TeamMember
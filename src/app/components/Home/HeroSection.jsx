const HeroSection = () => {
    return (<>

        <div>
            <section>
                <div className="bg-lightColor">
                    <div className="container mx-auto flex flex-col md:flex-row items-center  md:my-24">
                        <div className="px-10 pt-10 sm:pb-10 lg:pb-10 sm:flex lg:flex  ">
                            <div className="flex flex-col w-full lg:w-1/3 justify-center items-start ">
                                <h1 className="text-3xl md:text-5xl font-bold text-darkColor tracking-loose">
                                    Scrapify
                                </h1>
                                <h2 className=" text-3xl  md:mt-2 md:text-3xl leading-relaxed md:leading-snug mb-2">
                                    Transforming Waste into Value
                                </h2>
                                <p className="text-sm md:text-base mb-4">
                                    Sell your scrap materials and handmade creations or buy second-hand items. Join us to connect with a thriving community and create a sustainable future.
                                </p>
                                <a
                                    href="#"
                                    className=" md:w-auto bg-darkColor text-white py-3 px-6 rounded-md text-center font-medium hover:bg-gray-800 transition-colors duration-300"
                                >
                                    Get Started
                                </a>
                            </div>
                            <div className="p-8 mt-6 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">


                                <div className="flex flex-wrap justify-center items-center h-auto ">

                                    <div className="w-1/2 flex justify-center md:w-1/3">
                                        <img
                                            className="block sm:w-2/3 md:w-full"
                                            src="https://user-images.githubusercontent.com/54521023/116969935-c13d5b00-acd4-11eb-82b1-5ad2ff10fb76.png"
                                            alt="Image 1"
                                        />
                                    </div>


                                    <div className="w-1/2 flex justify-center md:w-1/3">
                                        <img
                                            className="block  sm:w-2/3 md:w-full"
                                            src="https://user-images.githubusercontent.com/54521023/116969931-bedb0100-acd4-11eb-99a9-ff5e0ee9f31f.png"
                                            alt="Image 2"
                                        />
                                    </div>


                                    <div className="w-full flex justify-center md:w-1/3">
                                        <img
                                            className="block w-3/4 sm:w-2/3 md:w-full"
                                            src="https://user-images.githubusercontent.com/54521023/116969939-c1d5f180-acd4-11eb-8ad4-9ab9143bdb50.png"
                                            alt="Image 3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </>)
}



export default HeroSection;
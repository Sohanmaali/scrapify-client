const Introduction = () => {

    return (<>
        <section className="bg-relatedWhite sm:mt-0 lg:mt-0 mt-5">
            <div className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-mutedColor  ">
                        Introduction to <span className="text-darkColor  underline decoration-wavy">Scrapify</span>
                    </h2>
                    <p className="mb-4">
                        Scrapify is your go-to platform for selling scrap materials and handmade products. We empower individuals to declutter their space, earn extra income,
                        and contribute to a sustainable future. Our mission is to simplify the process of connecting sellers with buyers while ensuring secure and transparent transactions.
                    </p>
                    <p>
                    Whether you’re recycling scrap or showcasing your handmade creations, 
                    Scrapify provides a seamless experience for all. Join us in turning waste into value and supporting a greener tomorrow
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img
                        className="w-full rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                        alt="office content 1"
                    />
                    <img
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                        alt="office content 2"
                    />
                </div>
            </div>
        </section>

    </>)
}


export default Introduction
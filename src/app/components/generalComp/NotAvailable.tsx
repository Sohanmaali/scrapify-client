const NotAvalilable = () => {

    return (<>
        <div className="flex flex-col justify-center items-center h-full mb-5">
            {/* Image Section */}
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <img
                    src="/assert/svg/datanotfound.svg"
                    alt="Data Not Found"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Text Section */}
            <div className="text-center mt-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-darkColor tracking-wider drop-shadow-md">
                    Data Not Available!
                </h1>
                {/* <p className="text-gray-500 text-sm md:text-base mt-4">
                    No records found at the moment. Please try again later.
                </p> */}
            </div>
        </div>


    </>)
}

export default NotAvalilable
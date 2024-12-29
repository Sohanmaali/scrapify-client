const NotAvalilable = () => {

    return (<>
        <div>
            <div className="flex justify-center items-center h-full">
                <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                    <img
                        src="/assert/svg/datanotfound.svg"
                        alt="Data Not Found"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center h-full mt-0">
                <div className="flex items-center ">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-darkColor tracking-wider drop-shadow-md">
                        Data Not Available !
                    </h1>
                </div>
                <p className="text-gray-500 text-sm mt-4 mb-5 text-center">
                    No records found at the moment. Please try again later.
                </p>
            </div>
        </div>

    </>)
}

export default NotAvalilable
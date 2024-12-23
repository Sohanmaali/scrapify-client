const DetailsCraft = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Text Content */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 leading-tight">
            It's time to travel with <span className="text-purple-600">DetailsCraft</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Create the route you want to travel with us and explore the amazing destinations.
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
          <div className="w-full md:w-1/3">
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600">
              <option value="new-zealand">New Zealand</option>
              <option value="usa">USA</option>
              <option value="india">India</option>
            </select>
          </div>
          <div className="w-full md:w-1/3">
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input
              type="date"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700 shadow-sm">
            Explore Now
          </button>
        </div>

        {/* Image Grid */}
        <div className="mt-12 relative">
          {/* Curved Line Decoration */}
          <div className="absolute inset-0 transform -translate-y-10">
            <svg
              viewBox="0 0 1440 320"
              className="w-full h-40 text-purple-100"
              fill="currentColor"
            >
              <path d="M0,128L40,160C80,192,160,256,240,240C320,224,400,128,480,112C560,96,640,160,720,176C800,192,880,160,960,133.3C1040,107,1120,85,1200,96C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
          </div>

          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-600">
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-600">
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder 2"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-600">
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder 3"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-600">
              <img
                src="https://via.placeholder.com/150"
                alt="Placeholder 4"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCraft;

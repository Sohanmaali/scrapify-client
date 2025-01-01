
import { FaBox, FaShoppingBag, FaChartLine, FaShoppingCart, FaTags, FaUsers, FaDollarSign, FaPercent, FaWarehouse } from 'react-icons/fa';
import { FaBoxes,  FaChartBar } from 'react-icons/fa';

const DashboardPage = () => {
  return (
    <div className="">
      <div className="w-full flex justify-between aligh-center p-2"><h1 className="text-2xl text-mutedColor font-bold mb-4 border-b-2 border-b border-darkColor ">Dashboard</h1></div>
      <div className=" sm:p-0 lg:p-0 p-2 flex flex-col space-y-6">
        <div className="sm:p-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Primary Sales Card */}
            <div className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all border-l-4 border border-darkColor">
              <p className="flex items-center text-black text-sm font-semibold tracking-wider">
                <FaBox className="text-green-600 text-2xl mr-2" />
                Total Sales
              </p>
              <p className="text-3xl font-bold text-green-600 mt-2">$45,678</p>
              <div className="flex items-center mt-2 text-green-500">
                <FaChartLine className="mr-1" />
                <span className="text-sm">+12.5% growth</span>
              </div>
            </div>

            {/* Items Card */}
            <div className="bg-darkColor rounded-xl p-6 shadow-lg hover:bg-green-700 transform hover:scale-105 transition-all ">
              <p className="flex items-center text-white text-sm font-semibold tracking-wider">
                <FaShoppingCart className="text-2xl mr-2" />
                Items Sold
              </p>
              <p className="text-3xl font-bold text-white mt-2">1,234</p>
              <p className="text-green-100 text-sm mt-2">↑ Trending Up</p>
            </div>

            {/* Revenue Card */}
            <div className="bg-mutedColor rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all">
              <p className="flex items-center text-relatedWhite text-sm font-semibold tracking-wider">
                <FaShoppingBag className="text-2xl mr-2" />
                Purchased Products
              </p>
              <p className="text-3xl font-bold text-relatedWhite mt-2">2,456</p>
              <p className="text-green-400 text-sm mt-2">+15% this month</p>
            </div>

            {/* Orders Card */}
            <div className="bg-darkColor rounded-xl p-6 shadow-lg transform hover:scale-105 hover:bg-green-700 transition-all ">
              <p className="flex items-center text-relatedWhite text-sm font-semibold tracking-wider">
                <FaTags className="text-2xl mr-2" />
                Orders
              </p>
              <p className="text-3xl font-bold text-white mt-2">856</p>
              <p className="bg-lightColor rounded px-2 py-1 text-darkColor text-sm mt-2 inline-block">
                Active Orders
              </p>
            </div>
          </div>
        </div>
        {/* --------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:px-6">

          <div className="bg-green-600/10 rounded-xl p-4 hover:bg-green-600/20 transition-colors border border-darkColor">
            <p className="flex items-center text-darkColor text-sm font-semibold tracking-wider">
              <FaBoxes className="text-darkColor text-2xl mr-2" />
              Stock Level
            </p>
            <p className="text-3xl font-bold text-green-800 mt-2">156</p>
            <p className="text-gray-600 text-sm mt">Items Available</p>
          </div>



          <div className="bg-black/5 rounded-xl p-6 hover:bg-black/10 transition-colors border border-mutedColor">
            <p className="flex items-center text-gray-800 text-sm font-semibold tracking-wider">
              <FaChartBar className="text-green-600 text-2xl mr-2" />
              Growth Rate
            </p>
            <p className="text-3xl font-bold text-green-600 mt-2">23.4%</p>
            <p className="text-gray-600 text-sm mt-2">Year over Year</p>
          </div>


        </div>


      </div>
    </div>
  );
};

export default DashboardPage;

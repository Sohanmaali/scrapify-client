import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";


const ProfilePage = () => {
  const InputField = ({ id, name, label, disabled = false, type = "text", placeholder }) => (
    <div className="relative w-full mt-4">
      <input
        type={type}
        id={id}
        name={name}
        disabled={disabled}
        className={`peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor ${disabled && 'bg-gray-100'}`}
        placeholder={placeholder}
      />
      <label
        htmlFor={id}
        className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );

  const SelectField = ({ id, name, label, options = [], placeholder }) => (
    <div className="relative w-full mt-4">
      <select
        id={id}
        name={name}
        className="peer w-full mt-4 px-3 pt-3.5 pb-0.2 border-b border-gray-300 placeholder-transparent focus:outline-none focus:ring-0 focus:border-darkColor text-mutedColor"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="absolute left-3 top-0 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-darkColor peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );


  return (


    <>
      <div className="bg-gray-100 p-4">
        <div className="flex flex-wrap lg:flex-nowrap lg:gap-6">
          {/* Left Card: Input Fields */}
          <div className="w-full lg:w-9/12 bg-white rounded-lg shadow-lg p-6 mb-4 lg:mb-0">
            <h3 className="font-bold text-xl text-gray-800 mb-4">Profile Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField id="name" name="name" label="Name" placeholder="name" />
              <InputField id="mobile" name="mobile" label="Mobile" disabled placeholder="mobile" />
              <InputField id="email" name="email" label="Email" disabled placeholder="email" />
              <SelectField
                id="gender"
                name="gender"
                label="Gender"
                options={[{ value: "male", label: "Male" }, { value: "female", label: "Female" }, { value: "other", label: "Other" }]}
                placeholder="Select Gender"
              />
              <InputField id="about_us" name="about_us" label="About us" placeholder="about us" type="textarea" />
            </div>
            <hr className="my-4" />

            <h3 className="font-bold text-xl text-gray-800 mt-4">Address Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <SelectField
                id="country"
                name="country"
                label="Country"
                options={[{ value: "india", label: "India" }, { value: "us", label: "USA" }]}
                placeholder="Select Country"
              />
              <SelectField
                id="state"
                name="state"
                label="State"
                options={[{ value: "ka", label: "Karnataka" }, { value: "mh", label: "Maharashtra" }]}
                placeholder="Select State"
              />
              <SelectField
                id="city"
                name="city"
                label="City"
                options={[{ value: "blore", label: "Bangalore" }, { value: "mumbai", label: "Mumbai" }]}
                placeholder="Select City"
              />
              <InputField id="address" name="address" label="Address" placeholder="address" />
            </div>
          </div>

          {/* Right Card: Profile Image */}
          <div className="w-full lg:w-3/12 bg-white rounded-lg shadow-lg p-6 flex flex-col items-center mb-4 lg:mb-0 lg:order-last order-first">
            <div className="relative user-profile-image">
              {/* Profile Image */}
              <img
                className="w-[180px] h-[180px] object-cover rounded-full border-4 border-blue-500"
                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&q=70&fm=webp"
                alt="Profile"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-full">
                {/* Edit Icon */}
                <div className="flex items-center bg-red-500 px-4 py-2 rounded-full shadow-lg">
                  <FaPenToSquare className="text-white mr-2 text-lg" />
                  <label
                    htmlFor="profile-edit"
                    className="text-white cursor-pointer text-sm  rounded-full"
                  >
                    Edit
                  </label>
                  <input
                    // id="profile-edit"
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer border  rounded-full border-gray-300"
                  />
                </div>
              </div>

              {/* Delete Button */}
              <button
                title="Delete"
                className="absolute bottom-0 right-10 flex items-center justify-center w-7 h-7 bg-red-500 text-white rounded shadow-lg transition-transform hover:scale-110"
              >
                <FaTrash className="text-lg" />
              </button>
            </div>

            
            {/* Review Rating Section */}
            <div className="mt-6 w-full text-center">
              <h4 className="text-lg text-gray-800 mb-2">Customer Reviews</h4>
              <div className="flex justify-center items-center">
                {/* Rating */}
                <span className="text-yellow-400">
                  &#9733;&#9733;&#9733;&#9733;&#9734; {/* Star icons for 4 out of 5 rating */}
                </span>
                <span className="text-gray-600 text-sm ml-2">4.0/5</span>
              </div>
              <p className="text-gray-600 text-sm mt-2">Based on 120 reviews</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProfilePage;

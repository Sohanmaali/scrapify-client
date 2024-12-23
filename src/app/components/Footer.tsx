// import { SlSocialInstagram, SlSocialLinkedin, SlSocialFacebook } from "react-icons/sl";
// import { BsTwitterX } from "react-icons/bs";
// import { MdOutlineEmail, MdOutlinePhone,MdOutlineLocationCity } from "react-icons/md";

// import Link from "next/link";

// const Footer = () => {

//     return (<>
//         <footer className="width-full p-0">
//             <div className="bg-mutedColor text-relatedWhite sm:p-10 p-5 ">
//                 {/* Top Section */}
//                 <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//                     {/* Platform Logo and Description */}
//                     <div>
//                         <img
//                             src="./assets/logo.png" // Replace with your logo path
//                             alt="Platform Logo"
//                             className="h-12 mb-4"
//                         />
//                         <p className="text-sm text-gray-400">
//                             Your trusted platform for buying and selling scrap materials and second-hand products. Helping reduce waste and promote sustainability.
//                         </p>
//                     </div>

//                     {/* Quick Links */}
//                     <div className="sm:ml-16">
//                         <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//                         <ul className="space-y-2">
//                             <li>
//                                 <Link href="#" className="hover:text-darkColor">
//                                     About Us
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="hover:text-darkColor">
//                                     Contact Us
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="hover:text-darkColor">
//                                     Products
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="hover:text-darkColor">
//                                     Privacy Policy
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="#" className="hover:text-darkColor">
//                                     FAQs
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>

//                     {/* Contact Information */}
//                     <div className="space-y-3">
//                         <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//                         <p className="text-sm text-gray-400 flex items-center">
//                             <MdOutlineEmail className="inline mr-2" />Email:
//                             <a href="mailto:info@scrapify.com" className="hover:text-darkColor ml-1">info@scrapify.com</a>
//                         </p>

//                         <p className="text-sm text-gray-400">
//                         <MdOutlinePhone className="inline mr-2"/>Phone: <a href="tel:+1234567890" className="hover:text-darkColor">+123 456 7890</a>
//                         </p>
//                         <p className="text-sm text-gray-400"><MdOutlineLocationCity className="inline mr-2"/>Address: 153 Main,mg road, Indore</p>
//                     </div>




//                     {/* Social Media & Newsletter */}
//                     <div>
//                         <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//                         <div className="flex space-x-4 mb-6">
//                             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-darkColor text-relatedWhite p-3 rounded-full hover:bg-lightColor hover:text-darkColor transition duration-300 ease-in-out"
//                             >

//                                 <SlSocialFacebook className="h-6 w-6 hover:opacity-80" />
//                             </a>
//                             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-darkColor text-relatedWhite p-3 rounded-full hover:bg-lightColor hover:text-darkColor transition duration-300 ease-in-out"
//                             >

//                                 <BsTwitterX className="h-6 w-6 hover:opacity-80" />
//                             </a>
//                             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-darkColor text-relatedWhite p-3 rounded-full hover:bg-lightColor hover:text-darkColor transition duration-300 ease-in-out"
//                             >

//                                 <SlSocialInstagram className="h-6 w-6 hover:opacity-80" />
//                             </a>
//                             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-darkColor text-relatedWhite p-3 rounded-full hover:bg-lightColor hover:text-darkColor transition duration-300 ease-in-out"
//                             >

//                                 <SlSocialLinkedin className="h-6 w-6 hover:opacity-80" />
//                             </a>
//                         </div>
//                         <div>
//                             <h3 className="text-lg font-semibold mb-4">Eco-Tip of the Day🌱</h3>
//                             <p className="text-sm text-gray-400">
//                                 <strong>Reuse Before You Recycle: <br /></strong> Always consider reusing items like jars, bottles, or boxes before disposing of them. Every small effort helps the planet!
//                             </p>
//                         </div>

//                     </div>
//                 </div>

//                 {/* Bottom Section */}
//                 <div className="bg-gray-900 py-4 rounded-lg">
//                     <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
//                         <p className="text-sm text-gray-400 text-center sm:text-left">
//                             &copy; 2025 Scrapify. All Rights Reserved.
//                         </p>
//                         <ul className="flex space-x-4 text-sm mt-4 sm:mt-0">
//                             <li>
//                                 <a href="#" className="hover:text-darkColor">
//                                     Terms of Service
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="hover:text-darkColor">
//                                     Privacy Policy
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#" className="hover:text-darkColor">
//                                     Cookie Policy
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     </>)
// }

// export default Footer





import { SlSocialInstagram, SlSocialLinkedin, SlSocialFacebook } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationCity } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full p-0">
            <div className="bg-mutedColor text-relatedWhite sm:p-10 p-5">
                {/* Top Section */}
                <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Platform Logo and Description */}
                    <div>
                        <img
                            src="/assets/logo.png" // Updated with absolute path for Next.js
                            alt="Platform Logo"
                            className="h-12 mb-4"
                        />
                        <p className="text-sm text-gray-400">
                            Your trusted platform for buying and selling scrap materials and second-hand products. Helping reduce waste and promote sustainability.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="sm:ml-16">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="hover:text-darkColor">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-darkColor">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-darkColor">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-darkColor">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-darkColor">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-sm text-gray-400 flex items-center">
                            <MdOutlineEmail className="inline mr-2" />Email:
                            <a href="mailto:info@scrapify.com" className="hover:text-darkColor ml-1">info@scrapify.com</a>
                        </p>
                        <p className="text-sm text-gray-400 flex items-center">
                            <MdOutlinePhone className="inline mr-2" />Phone:
                            <a href="tel:+1234567890" className="hover:text-darkColor">+123 456 7890</a>
                        </p>
                        <p className="text-sm text-gray-400 flex items-center">
                            <MdOutlineLocationCity className="inline mr-2" />Address: 153 Main, MG Road, Indore
                        </p>
                    </div>

                    {/* Social Media & Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-darkColor text-relatedWhite p-3 rounded-full hover:bg-lightColor hover:text-darkColor transition duration-300 ease-in-out">
                                <SlSocialFacebook className="h-6 w-6" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-darkColor text-relatedWhite p-3 rounded-full hover:bg-lightColor hover:text-darkColor transition duration-300 ease-in-out">
                                <BsTwitterX className="h-6 w-6" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-darkColor text-relatedWhite p-3 rounded-full hover:bg-lightColor hover:text-darkColor transition duration-300 ease-in-out">
                                <SlSocialInstagram className="h-6 w-6" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-darkColor text-relatedWhite p-3 rounded-full hover:bg-lightColor hover:text-darkColor transition duration-300 ease-in-out">
                                <SlSocialLinkedin className="h-6 w-6" />
                            </a>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Eco-Tip of the Day 🌱</h3>
                            <p className="text-sm text-gray-400">
                                <strong>Reuse Before You Recycle:</strong> Always consider reusing items like jars, bottles, or boxes before disposing of them. Every small effort helps the planet!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="bg-gray-900 py-4 rounded-lg">
                    <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400 text-center sm:text-left">
                            &copy; 2025 Scrapify. All Rights Reserved.
                        </p>
                        <ul className="flex space-x-4 text-sm mt-4 sm:mt-0">
                            <li>
                                <a href="#" className="hover:text-darkColor">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-darkColor">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-darkColor">
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

"use client";


import { useState } from "react";
import { FaRegUser } from 'react-icons/fa';
import { FaTruck } from 'react-icons/fa';
import { FaRupeeSign } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';

const HowItIsWorkComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <>


      <div>

        <div className="bg-lightColor py-10 sm:py-10 mt-5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-mutedColor sm:text-4xl lg:text-balance">
                How <span className="text-darkColor underline decoration-wavy">Scrapify</span> Works 
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              Selling your scrap materials is quick and hassle-free with Scrapify. From listing your items to receiving payment, we’ve made the process simple, transparent, and secure. Here's how it works
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl sm:mt-12 lg:mt-18 lg:max-w-6xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-darkColor">
                     
                      <FaRegUser className="text-relatedWhite "/>
                    </div>
                    <span className="text-darkColor">Step 1</span> | Register and List Your Scrap
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    Sign up on Scrapify and list the scrap materials you want to sell. Include necessary details like material type, quantity, and location for easy pickup.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-darkColor">
                     <FaCheckCircle className="text-relatedWhite"/>
                    </div>
                    <span className="text-darkColor">Step 2</span> | Admin Review and Approval
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    Once listed, admins will review your submission. If everything checks out, your listing will be approved for further processing.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-darkColor">
                     <FaTruck className="text-relatedWhite"/>
                    </div>
                    <span className="text-darkColor">Step 3</span> | Pickup Scheduling
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    After approval, admins will schedule a pickup for your scrap materials. You’ll receive a notification with the pickup date and time.
                  </dd>
                </div>
                <div className="relative pl-16">
                  <dt className="text-base/7 font-semibold text-gray-900">
                    <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-darkColor">
                      <FaRupeeSign className="text-relatedWhite"/>
                    </div>
                    <span className="text-darkColor">Step 4</span> | Payment Transfer
                  </dt>
                  <dd className="mt-2 text-base/7 text-gray-600">
                    Once the materials are picked up and verified, payment will be processed and sent directly to your registered account using your preferred payment method.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
export default HowItIsWorkComp;
// https://www.hyperui.dev/components/marketing/popups

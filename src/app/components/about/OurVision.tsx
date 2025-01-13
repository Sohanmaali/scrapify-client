import React from 'react';
import { RiLightbulbLine, RiRocketLine, RiLineChartLine, RiEyeLine } from 'react-icons/ri';

const visionData = [
  {
    icon: RiLightbulbLine,
    title: "Innovative Thinking",
    description: "We foster a culture of innovation, constantly seeking new ideas and approaches."
  },
  {
    icon: RiRocketLine,
    title: "Accelerated Progress",
    description: "Our vision is to propel our clients and our company forward, achieving rapid growth."
  },
  {
    icon: RiLineChartLine,
    title: "Continuous Improvement",
    description: "We are committed to ongoing enhancement of our skills and processes."
  }
];

const VisionItem: React.FC<{
  icon: React.ElementType;
  title: string;
  description: string;
}> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="w-16 h-16 bg-[#309255] rounded-full flex items-center justify-center mb-4">
      <Icon className="w-8 h-8 text-[#e7f8ee]" aria-hidden="true" />
    </div>
    <h3 className="text-xl font-bold text-[#309255] mb-2 text-center">{title}</h3>
    <p className="text-[#212832] text-center">{description}</p>
  </div>
);

const OurVisionSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#e7f8ee]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <RiEyeLine className="w-16 h-16 text-[#309255] mb-4" />
          <h2 className="text-4xl font-bold text-center mb-4 text-[#309255]">Our Vision</h2>
          <p className="text-center text-[#212832] text-xl max-w-2xl">
            Guiding principles that shape our approach and drive our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionData.map((item, index) => (
            <VisionItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVisionSection;


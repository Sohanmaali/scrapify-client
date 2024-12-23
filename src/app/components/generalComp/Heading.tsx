import React from 'react';

export const Heading = ({ heading, color } : any) => {
  return <div className='heading-parent'> <span className={`main-heading text-${color} border-b-2 border-mutedColor`}>{heading}</span></div>;
};

export const PrimaryHeading = ({ firstText = "dummy",secondText="text", color } : any) => {
  return <div className='heading-parent'><h2 className="text-3xl md:text-4xl font-bold mb-6">
 {firstText} <span className="text-darkColor underline decoration-wavy">{secondText}</span>
</h2></div>;
};


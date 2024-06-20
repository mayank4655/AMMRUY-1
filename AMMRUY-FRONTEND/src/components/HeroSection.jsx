import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import CountUp from 'react-countup';

const HeroSection = () => {
  // Constants for styles and text sequences
  const heroImageSrc = "https://s3-alpha-sig.figma.com/img/fd63/fa31/b2c04db87065f2bcd1996afeb9fea821?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U5LLKkcvAIVqOnq-uyubJindQ7ZUiszg~rM7XDc7EgNTvVx35GhUT7jyy8uSkm4xOZjrSt9Y2vwLpjbxiNfSxE-r0iV8qFhgeBWDzjqSKYU6EnkgK5B68oXzheQSKq7eopooFcyeAn6uEljVdkJaue3R1GB1--IFBl3w1pOzUef8t4ddLevrguXCuEg3EG6KmYOsNPqa2WhgqO7omujvocIOBWd6x8~Uq~XMTJy0bWmmyHuvF0B-JXUPSZXRjtimklMkn7P6qxx21f0aoe2jwVcBBiyHtl6hY-tVgIBnXxns~oHz0cdCPfxvNN6eMQHmydomQ5Xn4E9hgwtXk~do5A__";
  const textSequences = [
    'We provide AC Repair Service',
    1000,
    'We provide Refrigerator Service',
    1000,
    'We provide Washing Machine Service',
    1000,
    'We provide LED Service',
    1000
  ];

  return (
    <section className="hero-content flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
      <div className="hero-content-left h-[400px] w-[350px] md:w-[508px] m-auto">
        <img
          className='w-full h-full object-cover  rounded-xl'
          src={heroImageSrc}
          alt="Appliance Repair Services"
        />
      </div>
      <div className="hero-content-right w-full md:w-[32rem] p-4 text-center md:text-left text-xl">
        <div className="font-serif">

        <h2 className='py-2'>Efficient and Effective</h2>
        <TypeAnimation
          sequence={textSequences}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block', minHeight: '3em' }}
          repeat={Infinity}
          />
          </div>
        <div className="mt-1">
          <button className="BTN-color px-8 py-2 text-white font-bold rounded-full">Enquire Now</button>
        </div>
        <div className="trustedCustomers my-4 font-bold">
          <CountUp start={0} end={160526} />&nbsp;
          <span>+</span><br />
          <span>Trusted Customers</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

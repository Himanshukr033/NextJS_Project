import React from 'react';
import logo from "../../../../assets/logo.png";
import Image from "next/image";
import { Urbanist } from 'next/font/google';

function Value() {
  const data = [
    {
      label: "Contract",
      value: "0.000",
      altText: "Sol icon",
    },
    {
      label: "Wallet",
      value: "0.000",
      altText: "Sol icon",
    },
    {
      label: "Your Farming",
      value: "0.000",
      altText: "Farming icon",
    },
  ];

  interface Value {
    value: string; 
    altText: string;
  }
  interface LabelValue {
    label: string;
    value: string; 
    altText: string;
  }

  const ValueCard: React.FC<Value> = ({ value, altText }) => (
    <div className="flex flex-col justify-center items-start px-3 py-2 mt-2 text-xl font-semibold whitespace-nowrap rounded-2xl border border-solid border-neutral-600 text-zinc-50 max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-2">
        <Image
          loading="lazy"
          src={logo}
          alt={altText}
          className="shrink-0 w-8 border border-solid aspect-square border-zinc-800"
        />
        <div className="my-auto font-semibold text-xl" style={{ fontFamily: "Urbanist" }}>{value}</div>
      </div>
    </div>
  );

  const LabelValue: React.FC<LabelValue> =({ label, value, altText }) => (
    <>
      <div className="flex gap-0 justify-between mt-3.5 whitespace-nowrap max-md:flex-wrap">
        <div className="flex-1 text-zinc-500 max-md:max-w-full">{label}</div>
        <div className="flex gap-2 font-medium text-right uppercase text-zinc-50">
          <Image
            loading="lazy"
            src={logo}
            alt={altText}
            className="shrink-0 my-auto w-4 aspect-square"
          />
          <div>{value}</div>
        </div>
      </div>
      <ValueCard value={`$${value}`} altText={`${label} ${value}`} />
    </>
  );

  return (
    <div className="flex flex-col grow px-8 py-9 w-full text-base border border-solid backdrop-blur-lg border-neutral-700 rounded-[32px] max-md:px-5 max-md:mt-8 max-md:max-w-full"
    style={{background: "linear-gradient(to bottom, rgba(36, 35, 41, 0.6) , rgba(17, 16, 22, 0.31))",}}>
      <div className="text-zinc-500 max-md:max-w-full">Total Value locked</div>
      <ValueCard value="$0.000" altText="Total value" />
      {data.map((item, index) => (
        <LabelValue key={index} {...item} />
      ))}
      <div className="mt-3.5 text-zinc-500 max-md:max-w-full">Total</div>
      <ValueCard value="$0.000" altText="Total value" />
      <button className="justify-center items-center px-6 py-4 mt-6 text-lg font-medium text-white rounded-xl border border-solid bg-neutral-800 border-zinc-600 max-md:px-5 max-md:max-w-full">
        BUY FSOL
      </button>
      <hr className="shrink-0 mt-7 h-px border border-solid bg-neutral-800 border-neutral-800 max-md:max-w-full" />
      <div className="flex gap-0 justify-between mt-6 max-md:flex-wrap">
        <div className="flex-1 my-auto text-zinc-500 max-md:max-w-full">
          Your Rewards
        </div>
        <div className="flex gap-2 font-medium text-right text-white uppercase whitespace-nowrap">
          <Image
            loading="lazy"
            src={logo}
            alt="Sol icon"
            className="shrink-0 w-6 aspect-square"
          />
          <div className="my-auto">Sol</div>
        </div>
      </div>
      <div className="flex gap-2 mt-2 text-lg font-medium text-white max-md:flex-wrap max-md:max-w-full">
        <button className="flex-1 justify-center items-center px-6 py-4 whitespace-nowrap rounded-xl border border-solid bg-neutral-800 border-zinc-600 max-md:px-5">
          Compound
        </button>
        <button className="flex-1 justify-center px-6 py-4 rounded-xl border border-solid bg-neutral-800 border-zinc-600 max-md:px-5">
          Claim Rewards
        </button>
      </div>
    </div>
  );
}

export default Value;

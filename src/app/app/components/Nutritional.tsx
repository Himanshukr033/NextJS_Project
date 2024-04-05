// nutritional.js
import React from "react";
import Image from "next/image";
import logo from "../../../../assets/logo.png"

const nutritionalValues = [
  { label: "Daily Return :-", value: "8%" },
  { label: "APR :-", value: "8%" },
  { label: "Dev Fee :-", value: "8%" },
];

interface Nutir {
  label: string; 
  value: string;
}

const NutritionalValueItem: React.FC<Nutir> = ({label, value }) => (
  <div className="flex gap-5 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
    <div className="text-zinc-500">{label}</div>
    <div className="text-right text-white">{value}</div>
  </div>
);

const Nutritional = () => {
  return (
    <section style={{background: "linear-gradient(to bottom, rgba(35, 36, 41, 0.7) 70%, rgba(0, 0, 0, 1) 100%)",}}className="flex flex-col justify-center px-8 py-8 text-xl border border-solid backdrop-blur-lg border-neutral-700 rounded-[32px] max-md:px-5 max-md:max-w-full">
      <div style={{
        boxShadow: "1px 2px 0px rgba(5, 5, 6, 0.5), -1px -2px 0px rgba(55, 55, 63, 0.5)", background: "linear-gradient(to bottom, rgba(35, 36, 41, 0.7) 20%, rgba(7, 6, 2, 0.9) 100%)",}}
     className="flex flex-col justify-center px-8 py-8 rounded-3xl  backdrop-blur-lg  max-md:px-5 max-md:max-w-full">
        <header className="flex gap-4 justify-between px-px text-2xl font-bold text-white max-md:flex-wrap max-md:max-w-full">
          <h2>Nutritional Values</h2>
          <Image
            src={logo}
            alt=""
            width={24} 
            height={24} 
            className="shrink-0 my-auto"
            priority 
            
          />
        </header>
        <hr className="shrink-0 mt-4 h-px border border-solid bg-neutral-700 border-neutral-700 max-md:max-w-full" />
        {nutritionalValues.map((item, index) => (
          <React.Fragment key={index}>
            <NutritionalValueItem label={item.label} value={item.value} />
            {index < nutritionalValues.length - 1 && (
              <hr className="shrink-0 mt-4 h-px border border-solid bg-neutral-700 border-neutral-700 max-md:max-w-full" />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Nutritional;

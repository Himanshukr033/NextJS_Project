import React from "react";
import Image from "next/image";
import logo from "../../../../assets/logo.png";
import arrow from "../../../../assets/arrow.png";

const Description = () => {
  return (
    <div className="font-syne justify-between p-6 max-md:px-5" style={{ borderRadius:20,border: '1px solid #3A393F', boxSizing:"border-box"}}>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
          <section className="flex flex-col grow text-white max-md:mt-10 max-md:max-w-full">
            <h1 className="text-5xl font-medium max-md:max-w-full max-md:text-4xl">
              Solana Farming
            </h1>
            <p className="mt-6 text-2xl max-md:max-w-full" style={{color:'#BFBFBF'}}>
              <span>
                The SOL reward pool with the richest daily return and lowest dev fee, daily income of up to{" "}
              </span>
              <span className="font-medium text-white">8%</span>
              <span>, and a referral bonus of up to </span>
              <span className="font-medium text-white">12%</span>
            </p>
            <hr className="shrink-0 mt-4 h-px border border-solid bg-zinc-800 border-zinc-800 max-md:max-w-full" style={{boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2) inset"}} />
            <p className="mt-4 text-stone-300 max-md:max-w-full text-xl">
              The key to maximizing your rewards lies in the quantity of FSOL you hold and how frequently you compound them. The more FSOL you accumulate and the more often you reinvest your rewards, the greater the potential for earning more rewards.
            </p>
          </section>
        </div>
        <aside className="flex flex-col ml-5 max-md:ml-0 " >
          <div className="flex grow gap-3 justify-end px-6 py-4 mt-48 text-lg font-medium text-white whitespace-nowrap backdrop-blur-lg rounded-[32px] max-md:pl-5 max-md:mt-10"
          style={{
            maxHeight: '56px',
            maxWidth:'200px',
            background: "linear-gradient(to bottom, rgba(35, 36, 41, 0.7) 70%, rgba(17, 16, 22, 0.9) 100%)",
            boxShadow: "1px 1px 1px rgba(58, 57, 63, 1)",
          }}>
            <div className="grow my-auto">Documentation</div>
            <button>

            <Image 
              src={arrow} 
              alt="Documentation icon" 
              width={24} 
              height={24} 
              className="shrink-0" 
              />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Description;

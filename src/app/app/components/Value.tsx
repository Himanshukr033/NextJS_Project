import React, { useState,useRef, useEffect } from 'react';
import logo from "../../../../assets/logo.png";
import valueImg from "../../../../assets/value.png";
import info from "../../../../assets/info.png";
import Image from "next/image";
import { Urbanist } from 'next/font/google';
import { Button } from '@mui/material';
import ValueCard from './ValueCard';

function Value() {
  const [farmValues, setFarmValues] = useState();
  const [truValues, setTruValues] = useState();
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

  interface LabelValue {
    label: string;
    value: string; 
    altText: string;
  }
  
  const LabelValue: React.FC<LabelValue> =({ label, value, altText }) => (
    <>
      <div className="flex gap-0 justify-between mt-3.5 whitespace-nowrap max-md:flex-wrap">
        <div className="flex-1 text-zinc-500 max-md:max-w-full">{label}</div>
        <div className="flex gap-2 font-medium text-right uppercase text-zinc-50">
          
          <Image
            loading="lazy"
            src={label==="Your Farming"?logo:valueImg}
            alt={altText}
            className="shrink-0 my-auto w-3 aspect-square"
            style={{borderRadius:'50%'}}
          />
          <div>{label==="Your Farming"?"FARMING":"SOL"}</div>
        </div>
      </div>
      <ValueCard value={value} altText={label} />
    </>
  );

  return (
    <div className="flex flex-col grow px-8 py-9 w-full text-base backdrop-blur-lg rounded-[32px] max-md:px-5 max-md:mt-8 max-md:max-w-full"
    style={{background: "linear-gradient(to bottom, rgba(36, 35, 41, 0.6) , rgba(17, 16, 22, 0.31))",
    border: '1px solid',
    boxShadow:" rgba(255, 255, 255, 0.35) 0px 5px 15px",
    minWidth:'280px',

    borderImageSource:' radial-gradient(79.89% 77.28% at 99.25% 98.16%, #3A393F 0%, rgba(20, 19, 25, 0) 100%)'    
    }}>
      <div className="text-zinc-500 max-md:max-w-full">Total Value locked</div>
      <ValueCard value="$0.000" altText="Total values" />
      {data.map((item, index) => (
        <LabelValue key={index} {...item} />
      ))}
      <div className="mt-3.5 text-zinc-500 max-md:max-w-full">Total</div>
      <ValueCard value="$0.000" altText="Total value" />
      <Button variant="contained"
              sx={{
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                padding:'8px 12px',
                marginTop:6,
                color:'white',
                borderRadius:'5px',
                fontSize:'1.2rem',
                height:'100%',
                boxShadow: "rgba(255, 255, 255, 0.24) 2px 1px 2px, rgba(255, 255, 255, 0.24) -2px -1px 2px",
                backgroundColor:'#1F1E24',
                '&:hover':{
                  backgroundColor:'#1F1E24',
                  boxShadow: "rgba(255, 255, 255, 0.34) 0px 1px 2px"
                }
              }}>
              BUY FSOL
              </Button>
            
      <hr className="shrink-0 mt-7 h-px border border-solid bg-neutral-800 border-neutral-800 max-md:max-w-full" />
      <div className="flex gap-0 justify-between mt-6 max-md:flex-wrap">
        <div className="flex-1 my-auto text-zinc-500 max-md:max-w-full">
          Your Rewards
        </div>
        <div className="flex gap-2 font-medium justify-center items-center text-right text-white uppercase whitespace-nowrap">
          <Image
            loading="lazy"
            src={valueImg}
            alt="Sol icon"
            className="shrink-0 w-4 h-4 aspect-square"
          />
          <div className="my-auto">Sol</div>
        </div>
      </div>
      <div className="flex gap-2 mt-2 text-lg font-medium text-white max-md:flex-wrap max-md:max-w-full">
      <Button variant="contained"
              sx={{
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                padding:'16px 12px',
                marginTop:6,
                color:'white',
                borderRadius:'5px',
                height:'100%',
                boxShadow: "rgba(255, 255, 255, 0.24) 2px 1px 2px, rgba(255, 255, 255, 0.24) -2px -1px 2px",
                backgroundColor:'#1F1E24',
                '&:hover':{
                  backgroundColor:'#1F1E24',
                  boxShadow: "rgba(255, 255, 255, 0.34) 0px 1px 2px"
                }
              }}> Compound
        </Button>
        <Button variant="contained"
              sx={{
                width:'100%',
                justifyContent:'center',
                alignItems:'center',
                padding:'16px 12px',
                marginTop:6,
                color:'white',
                borderRadius:'5px',
                height:'100%',
                // boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                boxShadow: "rgba(255, 255, 255, 0.24) 2px 1px 2px, rgba(255, 255, 255, 0.24) -2px -1px 2px",
                backgroundColor:'#1F1E24',
                '&:hover':{
                  backgroundColor:'#1F1E24',
                  boxShadow: "rgba(255, 255, 255, 0.34) 0px 1px 2px"
                }
              }}> Claim Rewards
        </Button>
      </div>
    </div>
  );
}

export default Value;

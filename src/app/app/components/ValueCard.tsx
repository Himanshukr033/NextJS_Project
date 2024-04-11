import React, { useState,useRef, useEffect } from 'react';
import logo from "../../../../assets/logo.png";
import valueImg from "../../../../assets/value.png";
import info from "../../../../assets/info.png";
import Image from "next/image";

interface Value {
  value: string; 
  altText: string;
}

const ValueCard: React.FC<Value> = ({ value, altText }) => {
  const [values, setValues] = useState("0.000");

  const changeHandler =(event:any)=>{    
    setValues(event.target.value);   
  }

  return(
  <div className="flex flex-col justify-center items-start px-3 py-3 mt-2 text-xl font-semibold whitespace-nowrap rounded-2xl text-zinc-50 max-md:pr-5 max-md:max-w-full"
  style={{
    background: "linear-gradient(89.94deg, rgba(44, 43, 49, 0.6) 0.06%, rgba(34, 33, 39, 0.6) 99.97%)",
    border: '1px solid',
    borderImageSource:" linear-gradient(180deg, rgba(76, 75, 81, 0.6) 0%, rgba(29, 28, 34, 0) 176.62%)",
  }}>
    <div className="flex gap-2 justify-center items-center">
      <Image
        loading="lazy"
        src={altText==="Total values"?logo:altText==="Your Farming"?logo:valueImg}
        alt={altText}
        className="shrink-0 w-5 h-5 border border-solid aspect-square border-zinc-800"
        style={{borderRadius:'50%'}}
      />
      <input type="number" key={altText} value={values} onChange={changeHandler} className="my-auto font-semibold text-xl w-full" style={{backgroundColor:'transparent',outline: "none",
          caretColor: "white", fontFamily: "Urbanist" }}
          name={altText}
          disabled={(altText==="Your Farming")?false:(altText==="Total value")?false:true}/>
    </div>
  </div>
  )
};
export default ValueCard
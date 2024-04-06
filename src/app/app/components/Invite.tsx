import React from "react";
import logo from "../../../../assets/logo.png";
import copy from "../../../../assets/copy.png";
import Image from "next/image";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';



function InviteFriendsSection() {
  return (
    <section className="flex flex-col justify-center px-8 py-8 mt-7 backdrop-blur-lg rounded-[32px] max-md:px-5 max-md:max-w-full"
    style={{boxShadow:'  rgba(255, 255, 255, 0.15) 1.95px 1.95px 1px, rgba(255, 255, 255, 0.15) -1.95px -1.95px 1px,',
    
    background: 'radial-gradient(114.61% 114.61% at 50% 0%, #242329 0%, #111016 100%)'
  }}
    >
      <h2 className="text-xl font-bold text-zinc-300 max-md:max-w-full">
        Invite your friends!
      </h2>
      <p className="mt-4 text-base text-zinc-500 max-md:max-w-full">
        Add your friends email addresses and send them invitations to join!
      </p>
      <form className="flex gap-5 justify-between py-1 pr-2 pl-2.5 mt-4 rounded-xl max-md:flex-wrap max-md:max-w-full" style={{maxHeight:'50px', boxShadow:' rgba(255, 255, 255, 0.25) 0px 2px 2px -1px, rgba(255, 255, 255, 0.3) 0px 1px 3px -1px'
      , background: "linear-gradient(89.94deg, rgba(44, 43, 49, 0.6) 0.06%, rgba(34, 33, 39, 0.6) 99.97%)"
}}>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email address"
          className="my-auto text-sm w-full text-zinc-500"
          aria-label="Email address"
          style={{
            outline: "none",
            caretColor: "white",
          background: "linear-gradient(89.94deg, rgba(44, 43, 49, 0.6) 0.06%, rgba(34, 33, 39, 0.6) 99.97%)"
}}
        />
        <Button variant="contained" endIcon={<SendIcon />} className="justify-center px-6 py-2 text-lg font-medium text-white whitespace-nowrap rounded-3xl bg-gray-700 hover:bg-gray-600 max-md:px-5 max-h-12"
        >
        Send
        </Button>
      </form >
      <h3 className="mt-6 text-xl font-bold text-white max-md:max-w-full">
        Referral Link
      </h3>

      <form className="flex gap-5 justify-between py-1 pr-2 pl-2.5 mt-4 rounded-xl max-md:flex-wrap max-md:max-w-full" style={{height:'50px', boxShadow:' rgba(255, 255, 255, 0.25) 0px 2px 2px -1px, rgba(255, 255, 255, 0.3) 0px 1px 3px -1px'
      , background: "linear-gradient(89.94deg, rgba(44, 43, 49, 0.6) 0.06%, rgba(34, 33, 39, 0.6) 99.97%)"
}}>
        <label htmlFor="email" className="sr-only">
          referral code
        </label>
        <input
        disabled
          type="text"
          id="referral"
          placeholder="Referral"
          className="my-auto text-sm text-zinc-500 w-full"
          aria-label="Referral code"
          style={{
            outline: "none",
            caretColor: "white",
          background: "linear-gradient(89.94deg, rgba(44, 43, 49, 0.6) 0.06%, rgba(34, 33, 39, 0.6) 99.97%)"
}}
        />
        <IconButton>
          <Image
          priority 
          src={copy}
          alt=""
          className="shrink-0 w-8 aspect-square stroke-[1.333px] stroke-neutral-800"
        />
          
        </IconButton>
      </form >
      
      <p className="mt-6 text-base leading-5 text-zinc-500 max-md:max-w-full">
        Earn 12% of the SOL used to compound from anyone who uses your referral
        link
      </p>
    </section>
  );
}

export default InviteFriendsSection;

import Image from "next/image";
import logo from "../../../../assets/logo.png";
import { IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";


function Footer() {
  return (
    <footer className="flex flex-col gap-5 justify-between pr-2 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 justify-between pr-2 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full" >
        <div className="flex gap-4 text-2xl font-medium text-white">
          <Image
            loading="lazy"
            src={logo}
            alt="Solana Farm logo"
            width={56}
            height={56}
          />
          <h2 className="my-auto">Solana Farm</h2>
        </div>
        <div className="flex gap-5 justify-between my-auto">
          <h3 className="my-auto text-2xl font-medium text-neutral-400">
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            <IconButton
              aria-label="Twitter Icon"
              sx={{
                color: "white",
                backgroundColor: "transparent",
                width: 48,
                height: 48,
                background:
                  "radial-gradient(circle, black, rgba(53, 52, 61, 0.7) 30%)",
                boxShadow: "inset 0 0 1px 2px rgba(53, 52, 61, 0.5)",

                "&:hover": {
                  transform: "scale(1.1)",
                  background:
                    "radial-gradient(circle, black, rgba(53, 52, 61, 0.9) 70%)",
                },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="TeleGram Icon"
              sx={{
                color: "white",
                backgroundColor: "transparent",
                width: 48,
                height: 48,
                background:
                  "radial-gradient(circle, black, rgba(53, 52, 61, 0.7) 30%)",
                boxShadow: "inset 0 0 1px 2px rgba(53, 52, 61, 0.5)",
                "&:hover": {
                  transform: "scale(1.1)",
                  background:
                    "radial-gradient(circle, black, rgba(53, 52, 61, 0.9) 70%)",
                },
              }}
            >
              <TelegramIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <hr className="shrink-0 mt-4 h-px border border-solid bg-neutral-800 opacity-50 border-neutral-700 max-md:max-w-full" />
      
     
        <p
        className="mt-6 text-base leading-5 text-zinc-500 max-md:max-w-full mb-0 pb-0"
        style={{ textAlign: "center" }}
      >
        Solana Farm - Copyright © 2024, All rights reserved
      </p>
      <p
        className="text-zinc-500 max-md:max-w-full"
        style={{ margin:0,textAlign: "center", fontSize:'0.55rem' }}
      >
        Disclaimer: Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.
      </p>
    </footer>
  );
}

export default Footer;

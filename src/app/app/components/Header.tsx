import Image from "next/image";
import logo from "../../../../assets/logo.png";
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Button} from "@mui/material";


const LanguageSelector = () => (
  <div className="flex gap-2 my-auto text-base whitespace-nowrap" style={{alignItems:"center",justifyContent:"center"}}>
    <div id="google_translate_element" ></div>
  </div>
);

const ConnectWalletButton = () => (
  <Button
    className="flex items-center justify-center"
    sx={{
      color:"white",
      margin: "auto",
      textAlign: "center",
      alignSelf: "center",
      borderRadius: "25px",
      width: "170px",
      height: "48px",
      boxShadow: "rgba(255, 35, 115, 0.54) 2px 2px 3px",
      backgroundImage: `linear-gradient(to right, rgba(255, 34, 112, 1) 50%, rgba(220, 255, 220, 0.55))`,
      '&:hover':{
        transform:'scale(1.03)',
        boxShadow: "rgba(255, 255, 255, 0.24) 0px 3px 8px"

      },
    }}
  >
    Connect Wallet
  </Button>
);

const Header = () => {

  return (
    <header className="flex gap-5 justify-between pr-2 max-md:flex-col">
      <div className="flex gap-4 text-2xl font-medium text-white items-center">
        <Image src={logo} alt="Solana Farm logo" width={48} height={48} />
        <h1 className="my-auto">Solana Farm</h1>
        <LanguageSelector />
      </div>
      <div className="flex items-center gap-4 max-md:w-screen">
        <IconButton
          aria-label="Twitter Icon" 
          sx={{
            color: "white",
            backgroundColor:'transparent',
            width: 48,
            height: 48,
            background: "radial-gradient(circle, black, rgba(53, 52, 61, 0.7) 30%)",
            boxShadow: "inset 0 0 1px 2px rgba(53, 52, 61, 0.5)",
            '&:hover': {
              transform: 'scale(1.1)',
              background: "radial-gradient(circle, black, rgba(53, 52, 61, 0.9) 70%)",
            },
          }}
          >
          <TwitterIcon /> 
        </IconButton>
        <IconButton
          aria-label="TeleGram Icon" 
          sx={{
            color: "white",
            backgroundColor:'transparent',
            width: 48,
            height: 48,
            background: "radial-gradient(circle, black, rgba(53, 52, 61, 0.7) 30%)",
            boxShadow: "inset 0 0 1px 2px rgba(53, 52, 61, 0.5)",
            '&:hover': {
              transform: 'scale(1.1)',
              background: "radial-gradient(circle, black, rgba(53, 52, 61, 0.9) 70%)",
            },
          }}
          >
           <TelegramIcon />
        </IconButton>
        
        <ConnectWalletButton />
      </div>
    </header>
  );
};
export default Header;

import Image from "next/image";
import logo from "../../../../assets/logo.png";
import twit from "../../../../assets/twitter.png";
import tel from "../../../../assets/telegram.png";
import globe from "../../../../assets/globe.png"

const SocialIcon = ({ src, alt }) => (
  <div className=" flex items-center justify-center" style={{width:48, height:48, borderRadius:"50%", background: "radial-gradient(circle,black, #35343D )", boxShadow: "inset 0 0 1px 2px rgba(53, 52, 61, 0.5)"}}>
    <Image
      src={src}
      alt={alt}
      style={{ width: "20px", height: "18px", aspectRatio: 1 }}
      className="shrink-0"
    />
  </div>
);

const LanguageSelector = () => (
  <div className="flex gap-2 my-auto text-base whitespace-nowrap">
    <Image
      src={globe}
      alt="Language icon"
      width={32}
      height={32}
      className="shrink-0"
    />
    <div className="flex items-center justify-center">EN</div>
 </div>
);

const ConnectWalletButton = () => (
  <button className=" flex items-center justify-center" style={{ margin:'auto',textAlign:"center",alignSelf:"center",borderRadius:"25px", width: '170px', height: '48px', backgroundImage: `linear-gradient(to right, rgba(255, 34, 112, 1) 50%, rgba(220, 255, 220, 0.55))`}}>
    Connect Wallet
  </button>
);

const Header = () => {
  const socialIcons = [
    { src: twit, alt: "Twitter" },
    { src: tel, alt: "twitter" },
  ];

  return (
    <header className="flex gap-5 justify-between pr-2 max-h-48">
      <div className="flex gap-4 text-2xl font-medium text-white">
        <Image
          src={logo}
          alt="Solana Farm logo"
          style={{ width: "48px", height: "48px" }}
          className="shrink-0"
        />
        <h1 className="font-syne my-auto">Solana Farm</h1>
      </div>
      <div>
        <div className="flex gap-4">
          <div className="flex gap-4" style={{alignItems:"center"}}>
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} src={icon.src} alt={icon.alt} />
            ))}
          </div>
          <nav className="flex gap-5 justify-between text-white">
            <LanguageSelector />
            <ConnectWalletButton />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

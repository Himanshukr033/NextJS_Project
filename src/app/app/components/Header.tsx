import Image, { StaticImageData } from "next/image";
import logo from "../../../../assets/logo.png";
import twit from "../../../../assets/twitter.png";
import tel from "../../../../assets/telegram.png";
import globe from "../../../../assets/globe.png";

// TypeScript Interface for props
interface SocialIconProps {
  src: StaticImageData; // Using StaticImageData type for Next.js Image component
  alt: string;
}

const SocialIcon = ({ src, alt }: SocialIconProps) => (
  <div
    className="flex items-center justify-center"
    style={{
      width: 48,
      height: 48,
      borderRadius: "50%",
      background: "radial-gradient(circle, black, #35343D)",
      boxShadow: "inset 0 0 1px 2px rgba(53, 52, 61, 0.5)",
    }}
  >
    <Image src={src} alt={alt} width={20} height={18} objectFit="contain" />
  </div>
);

const LanguageSelector = () => (
  <div className="flex gap-2 my-auto text-base whitespace-nowrap">
    <Image src={globe} alt="Language icon" width={32} height={32} />
    <div className="flex items-center justify-center">EN</div>
  </div>
);

const ConnectWalletButton = () => (
  <button
    className="flex items-center justify-center"
    style={{
      margin: "auto",
      textAlign: "center",
      alignSelf: "center",
      borderRadius: "25px",
      width: "170px",
      height: "48px",
      backgroundImage: `linear-gradient(to right, rgba(255, 34, 112, 1) 50%, rgba(220, 255, 220, 0.55))`,
    }}
  >
    Connect Wallet
  </button>
);

const Header = () => {
  const socialIcons: SocialIconProps[] = [
    { src: twit, alt: "Twitter" },
    { src: tel, alt: "Telegram" }, // Corrected alt text
  ];

  return (
    <header className="flex gap-5 justify-between pr-2">
      <div className="flex gap-4 text-2xl font-medium text-white items-center">
        <Image src={logo} alt="Solana Farm logo" width={48} height={48} />
        <h1 className="my-auto">Solana Farm</h1>
      </div>
      <div className="flex items-center gap-4">
        {socialIcons.map((icon, index) => (
          <SocialIcon key={index} src={icon.src} alt={icon.alt} />
        ))}
        <LanguageSelector />
        <ConnectWalletButton />
      </div>
    </header>
  );
};

export default Header;

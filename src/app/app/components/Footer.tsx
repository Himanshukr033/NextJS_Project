import Image from 'next/image';
import logo from '../../../../assets/logo.png';

// function SocialLink({ src, alt }) {
//   return ;
// }

function Footer() {

  return (
    <footer className="flex gap-5 justify-between pr-2 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-4 text-2xl font-medium text-white">
        <Image loading="lazy" src={logo} alt="Solana Farm logo" width={56} height={56} />
        <h2 className="my-auto">Solana Farm</h2>
      </div>
      <div className="flex gap-5 justify-between my-auto">
        <h3 className="my-auto text-2xl font-medium text-neutral-400">Follow Us</h3>
        <div className="flex gap-4">
          
            <Image loading="lazy" src={logo} alt="link" width={48} height={48} />
            <Image loading="lazy" src={logo} alt="link" width={48} height={48} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

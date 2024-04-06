import Cards from "../app/app/components/CardDisplay";
import Description from "../app/app/components/Description";
import InviteFriendsSection from "../app/app/components/Invite";
import Header from "../app/app/components/Header";
import Nutritional from "../app/app/components/Nutritional";
import Value from "../app/app/components/Value";
import Footer from "../app/app/components/Footer";
import styles from "../app/app/halfCircle.module.css"; 

export default function Home() {
  return (
    <main
      style={{
        height: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        width: "80vw",
        margin: "auto",
        gap:50,
        padding:'30px 0px'
      }}
    >
      <Header />
      <Description />
      <div style={{ display: "flex", flexDirection: "column", padding:'30px 20px', gap:'30px',
      borderRadius:'20px',
      background: "radial-gradient(116.56% 116.56% at 52.31% -19.68%, #232228 0%, rgba(18, 17, 23, 0.31) 100%)",
      }}>
        <Cards />
        <div className="md:flex-row flex-col"style={{ 
          display: "flex", justifyContent:"space-between", gap:'50px', borderRadius:'20px',
          // background: "linear-gradient(to bottom, rgba(36, 35, 41, 0.3) , rgba(17, 16, 22, 0.31))",
          
}}>
          <div style={{ display: "flex flex-1", flexDirection: "column",background: "radial-gradient(114.61% 114.61% at 50% 0%, #242329 0%, #111016 100%)", }}>
            <Nutritional />
            <InviteFriendsSection />
          </div>
          <div className="flex-1">

          <Value />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

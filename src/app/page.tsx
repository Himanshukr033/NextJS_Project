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
        width: "100vw",
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
       background: "linear-gradient(to bottom, rgba(35, 36, 41, 0.7) 20%, rgba(1, 1, 2, 0.9) 100%)",}}>
        <Cards />
        <div className="md:flex-row flex-col"style={{ display: "flex", justifyContent:"space-between", gap:'50px', }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Nutritional />
            <InviteFriendsSection />
          </div>
          <Value />
        </div>
      </div>
      <Footer />
    </main>
  );
}

import React from "react";

interface CardProps {
  number: string; 
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ number, title, description }) => {
  return (
    <div className="flex justify-center w-full max-w-md rounded-3xl backdrop-blur-lg" 
    style={{
      background: "linear-gradient(to bottom, rgba(35, 36, 41, 0.5), rgba(17, 16, 22, 0.4) 100%)",
      textJustify: "inter-word", textDecoration:'justify' ,padding:'40px 24px 17px 24px',boxShadow: "rgba(38, 38, 38, 0.5) 0px 6px 24px 0px, rgba(40, 40, 40, 0.9) 0px 0px 0px 1px"}}>
      
      <div className="flex flex-col justify-center w-full md:flex-row md:items-center" >
      <div className="px-4"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 1) , rgba(47, 30, 55, 0.0))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          width: "fit-content", 
          fontSize:'5rem',
          alignSelf:'flex-start',
          
        }}>
        {number} 
      </div>
        <div className="flex flex-col md:ml-4 pb-4" style={{height:150, overflow:"hidden", textJustify:'inter-word'}}>
          <h3 className="text-2xl font-bold text-zinc-50 pt-4">{title}</h3>
          <p className="mt-2 text-base text-white md:max-h-28  text-zinc-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
    {
      number: "1",
      title: "Buy Solana Farm",
      description: "Start by using your SOL to purchases Solana Farm",
    },
    {
      number: "2",
      title: "Compound",
      description:
        "Maximizing your rewards lies in the quantity of FSOL you hold and how frequently you compound them. The more FSOL you accumulate and the more often you reinvest your rewards, the greater the potential for earning more rewards",
    },
    {
      number: "3",
      title: "Claim Rewards",
      description:
        "This will transfer your accumulated SOL rewards directly into your wallet.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {cardData.map((card, index) => (
          <div key={index}>
            <Card
              number={card.number}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;

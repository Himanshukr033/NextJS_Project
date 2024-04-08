"use client";
import React, { useRef } from "react";
import style from './Component.module.css';
import { motion } from 'framer-motion';
import styles from './Component.module.css';

interface CardProps {
  number: number; 
  title: string;
  description: string;
}
interface OverflowProps {
  text: string; 
}
const Card: React.FC<CardProps> = ({ number, title, description }) => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  return (
    <div className={` ${style.cardContainer} ${style.animate} flex justify-center min-w-60 w-full rounded-3xl ` }
    style={{ animationDelay: `${number* 0.2}s` }} >
      
      <div className="flex flex-col justify-center w-full md:flex-row items-center " >
      <div className="pl-2 pt-3 max-md:p-0 self-center justify-self-center text-8xl max-md:text-7xl"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 1) 20%  , rgba(47, 46, 42, 0.9) 68%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          width: "fit-content", 
          
          
        }}>
        {number} 
      </div>
        <div className="flex flex-col ml-4 max-md:m-0 text-overflow: clip; h-36 max-md:h-28 max-md:justify-start" style={{textJustify:'inter-word'}}>
          <h3 className="text-2xl max-md:text-xl font-bold text-zinc-50">{title}</h3>
          <p className={`mt-2 text-base text-white md:max-h-28  text-zinc-500 pb-4 ${styles.truncateOverflow}`} style={{overflow: "hidden", textOverflow: "ellipsis",}}> {description}</p>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardData = [
    {
      number: 1,
      title: "Buy Solana Farm",
      description: "Start by using your SOL to purchases Solana Farm",
    },
    {
      number: 2,
      title: "Compound",
      description:
        "Maximizing your rewards lies in the quantity of FSOL you hold and how frequently you compound them. The more FSOL you accumulate and the more often you reinvest your rewards, the greater the potential for earning more rewards",
    },
    {
      number: 3,
      title: "Claim Rewards",
      description:
        "This will transfer your accumulated SOL rewards directly into your wallet.",
    },
  ];

  return (
    <section className={`${style.motionDiv} max-w-screen-xl mx-auto px-4`}>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {cardData.map((card, index) => (
          <div key={index} className="mb-5">
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

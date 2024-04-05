import React from "react";
import logo from "../../../../assets/logo.png";
import Image from "next/image";

function InviteFriendsSection() {
  return (
    <section className="flex flex-col justify-center px-8 py-8 mt-7 border border-solid backdrop-blur-lg border-neutral-700 leading-[120%] rounded-[32px] max-md:px-5 max-md:max-w-full">
      <h2 className="text-xl font-bold text-zinc-300 max-md:max-w-full">
        Invite your friends!
      </h2>
      <p className="mt-4 text-base text-zinc-500 max-md:max-w-full">
        Add your friends email addresses and send them invitations to join!
      </p>
      <form className="flex gap-5 justify-between py-1 pr-1 pl-2.5 mt-6 rounded-2xl border border-solid border-neutral-600 max-md:flex-wrap max-md:max-w-full">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email address"
          className="my-auto text-sm text-zinc-500"
          aria-label="Email address"
        />
        <button
          type="submit"
          className="justify-center px-6 py-4 text-lg font-medium text-white whitespace-nowrap rounded-xl bg-neutral-700 max-md:px-5"
        >
          Send
        </button>
      </form>
      <h3 className="mt-6 text-xl font-bold text-white max-md:max-w-full">
        Referral Link
      </h3>
      <div className="flex gap-5 justify-between px-3 py-2 mt-8 text-sm rounded-2xl border border-solid border-neutral-600 text-zinc-500 max-md:flex-wrap max-md:max-w-full">
        <div className="my-auto">referral code</div>
        <Image
          loading="lazy"
          src={logo}
          alt=""
          className="shrink-0 w-8 aspect-square stroke-[1.333px] stroke-neutral-800"
        />
      </div>
      <p className="mt-6 text-base leading-5 text-zinc-500 max-md:max-w-full">
        Earn 12% of the SOL used to compound from anyone who uses your referral
        link
      </p>
    </section>
  );
}

export default InviteFriendsSection;

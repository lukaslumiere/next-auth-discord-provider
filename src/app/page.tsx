"use client"

import { signIn } from "next-auth/react";
import React from "react";

const page = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <button
        onClick={() =>
          signIn("discord", { callbackUrl: "/home", redirect: false })
        }
        className="py-2 px-6 bg-black text-white font-medium rounded-lg"
      >
        logar com discord
      </button>
    </section>
  );
};

export default page;

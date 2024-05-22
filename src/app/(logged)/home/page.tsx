/* eslint-disable jsx-a11y/alt-text */
"use client";

import { SessionProvider, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const ComponentUsingSession = () => {
  const { data: session } = useSession();

  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <hgroup className="flex flex-col items-center gap-2">
            <div className="relative size-20">
              <Image fill src={session?.user?.image as string} alt="imagem" />
            </div>
            <h2>
              você está logado como{" "}
              <span className="font-medium">{session?.user?.name}</span>
            </h2>
          </hgroup>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="py-2 px-6 bg-red-500 text-white font-medium rounded-lg w-fit"
          >
            deslogar
          </button>
        </div>
      </section>
    </>
  );
};

const Page = () => {
  return (
    <SessionProvider>
      <ComponentUsingSession />
    </SessionProvider>
  );
};

export default Page;

import { SignIn, SignUp } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <SignIn />
    </div>
  );
}



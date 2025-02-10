import { UserProfile } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen pt-14 w-full border items-center justify-center">
      <UserProfile />
    </div>
  );
};

export default page;

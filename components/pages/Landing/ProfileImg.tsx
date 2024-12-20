import React from "react";
import Image from "next/image";
import Me from "@/public/img/me.jpg";

export default function ProfileImg() {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="w-32 h-32 rounded-full overflow-hidden bg-red">
        <Image
          src={Me}
          alt="my picture"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

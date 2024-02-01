import Image from "next/image";
import React from "react";
import loading from "@/public/loadinggif.gif";

const Loading = () => {
  return (
    <div>
      <Image width={40} src={loading} alt="Loading..." />
    </div>
  );
};

export default Loading;

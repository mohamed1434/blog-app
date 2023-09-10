import Image from "next/image";
import React from "react";

function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div style={{display: "flex", alignItems: "center" }} className="space-x-2">
      <Image
        src="https://logopond.com/logos/f552bf266653ebe68a5a99113a8989bc.png"
        alt="logo"
        style={{
          height: "50px",
          width: "50px",
          objectFit: "cover",
          borderRadius: "9999px",
        }}
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;

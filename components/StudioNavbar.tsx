import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

function StudioNavbar(props: any) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1.25rem",
        }}
      >
        <Link
          href="/"
          style={{ color: "#F7AB0A", display: "flex", alignItems: "center" }}
        >
          <ArrowUturnLeftIcon
            style={{
              height: "1.5rem",
              width: "1.5rem",
              color: "#F7AB0A",
              marginRight: "0.5rem",
            }}
          />
          Go to website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;

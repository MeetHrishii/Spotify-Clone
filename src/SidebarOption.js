import React from "react";
import "./sidebarOption.css";

export default function sidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      <pre>{title}</pre>
    </div>
  );
}

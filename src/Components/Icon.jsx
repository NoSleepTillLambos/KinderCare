import React, { useState } from "react";
import "./Icon.scss";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Icon({ src }) {
  const { user } = useAuthContext();

  return (
    <div className="icon">
      <img src={src} alt="icon"></img>
    </div>
  );
}

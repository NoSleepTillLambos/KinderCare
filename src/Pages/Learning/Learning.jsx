import React, { useState } from "react";
import "./Learning.scss";
import axios from "axios";
import Friends from "../../Components/Friends";

export default function Learning() {
  return (
    <div className="learningCon">
      <div className="rightDiv">
        <Friends />
      </div>
    </div>
  );
}

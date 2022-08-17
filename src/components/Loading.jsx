import React from "react";
import "./loader.css"

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <span class="spinner spinner-large spinner-blue spinner-slow"></span>
    </div>
  );
};

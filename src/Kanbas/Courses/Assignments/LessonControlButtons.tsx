import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import React from "react";

export default function LessonControlButtons() {
  return (
    <div className="float-end d-flex align-items-center ms-5 ">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4 ms-4" />
    </div>
);}

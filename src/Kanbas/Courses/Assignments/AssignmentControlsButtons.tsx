import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import React from "react";
import { FaPlus } from "react-icons/fa6";

export default function AssignmentControlsButtons() {
  return (
    <div className="float-end ms-2">

      <FaPlus />
      <IoEllipsisVertical className="fs-4 ms-4" />
    </div>
);}

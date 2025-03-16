"use client"
import React from "react";
import { Link, Button } from "@heroui/react";

export default function SideBar() {
  return (
    <>
      <div className="sm:w-[17rem] sm:h-screen bg-red-900">
        <div className="sm:w-full sm:h-[33%] flex flex-col justify-center space-y-1 cursor-pointer">
          <img src="https://i.pinimg.com/736x/f8/84/18/f884185429452b27cb25cdd5cc0ccf51.jpg" className="sm:w-[50%] rounded-[50%] self-center shadow-sm"></img>
          <p className="font-bold text-center text-xl">Yaraa</p>
          <p className="font-normal text-center text-sm text-green-900">Yaraa@gmail.com</p>
        </div>
        <div className="sm:h-[55%] bg-pink-800 p-3 space-y-1">
          <Button
            showAnchorIcon
            as={Link}
            color="primary"
            href="https://github.com/heroui-inc/heroui"
            variant="solid"
          >
            Button Link
          </Button>
        </div>
        <div className="sm:h-[12%]"></div>
      </div>
    </>
  )
}
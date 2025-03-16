"use client"
import { Button, Divider, Link } from "@heroui/react";
import { Card, Image } from "@heroui/react";
import { ArchiveBook } from "iconsax-react";
import { useState } from "react";

export default function HomePageBtn() {
  const card = [
    {
      id: 1,
      title: "Book",
      src: "https://i.pinimg.com/736x/fe/89/42/fe894258fbab81cdf00ff2ec721c620b.jpg",
      href: "http://localhost:3000/book/",
      trailer: "View All Available Books",
    },
    {
      id: 2,
      title: "Cartoon",
      src: "https://i.pinimg.com/736x/c7/04/3f/c7043f34c4a6776880e0751fe4acec5b.jpg",
      href: "http://localhost:3000/cartoon/",
      trailer: "View All Available Cartoons",
    },
  ]

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="sm:w-full sm:h-[100%]">
        <div className="sm:w-full sm:h-[15%]">
          <div className="sm:w-[96%] sm:h-[100%] m-5">
            <Button className="sm:bg-[#cecdcd] pl-5 pr-5">
              <Link href="http://localhost:3000/" className="text-[#087E8B] font-bold">HomePage
              </Link>
            </Button>
            <Divider className="my-4" />
          </div>
        </div>


        <div className="sm:h-[75%] flex justify-center pl-5 pr-5">
          <div className="flex sm:h-fit self-center gap-20">
            {card.map((item) => {
              return (
                <div key={item.id} className="">
                  <Card

                    isHoverable
                    className="border-none relative cursor-pointer"
                    radius="lg"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <Link href={item.href}>

                      <Image
                        alt=""
                        className="object-cover"
                        height={320}
                        src={item.src}
                        width={250}
                      />

                      <div className="justify-between absolute top-1 ml-1 z-10 size-10">
                        {/* <p className="text-tiny text-white/80">Available soon.</p> */}
                        <Button
                          className="text-xs text-[#087E8B] rounded-lg bg-white"
                          color="#087E8B"
                          size="sm"
                        >
                          <ArchiveBook size="15" color="#C81D25" />
                          {item.title}
                        </Button>
                      </div>
                    </Link>
                    
                    {isHovered && (
                      <Link href={item.href} className="absolute inset-0 bg-black/90 flex items-center justify-center text-white px-2">
                        <p className="text-center text-3xl font-bold">{item.trailer}</p>
                      </Link>
                    )}
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
import React, { useState } from "react";
import image from "../assets/Rectangle 2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Import the icon
import type { CollapseProps } from "antd";
import { Collapse } from "antd";
import { Carousel } from "antd";
import { Flex, Rate } from "antd";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <h3 className="font-semibold">This is panel header 1</h3>,
    children: (
      <span className="text-xs pl-[24px]">
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </span>
    ),
  },
  {
    key: "2",
    label: <h3 className="font-semibold">This is panel header 2</h3>,
    children: (
      <span className="text-xs pl-[24px]">
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </span>
    ),
  },
  {
    key: "3",
    label: <h3 className="font-semibold">This is panel header 3</h3>,
    children: (
      <span className="text-xs pl-[24px]">
        A dog is a type of domesticated animal. Known for its loyalty and
        faithfulness, it can be found as a welcome guest in many households
        across the world.
      </span>
    ),
  },
];

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const ProductDetail = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [value, setValue] = useState(3);

  return (
    <>
      <div className="m-12">
        <div className="grid grid-cols-12  gap-8">
          <div className=" grid grid-rows-6 grid-flow-col justify-end rounded-sm ">
            <img src={image} alt="img" className="w-20 rounded-sm" />
            <img src={image} alt="img" className="w-20 rounded-sm" />
            <img src={image} alt="img" className="w-20 rounded-sm" />
            <img src={image} alt="img" className="w-20 rounded-sm" />
            <img src={image} alt="img" className="w-20 rounded-sm" />
            <img src={image} alt="img" className="w-20 rounded-sm" />
          </div>

          <div className=" col-span-5 ">
            <img src={image} alt="img" className="w-110 h-130" />
          </div>

          <div className=" col-span-6  m-10">
            <p className="text-3xl font-poppins font-semibold">
              Double Breasted Full Suit
            </p>
            <div className=" flex gap-10  mt-3">
              <p className="font-medium text-xl">LKR 8500.00</p>
              <p className=" font-light text-lg rounded-sm bg-gray-300 text-black px-2 py-0.5">
                Free Shipping
              </p>
            </div>

            <div className="gap-1 mt-3">
              <Flex gap="middle" vertical>
                <Rate tooltips={desc} onChange={setValue} value={value} />
                {value ? <span>{desc[value - 1]}</span> : null}
              </Flex>
            </div>

        

            <div>
              <p className="mt-14 text-xl">
                CLASSICS:Kaikoura White (White Sole)
              </p>
            </div>
            <div className="flex mt-5 gap-5">
              {/* Outer circle with border */}
              <div className="border border-gray-400 w-14 h-14 rounded-full flex items-center justify-center  hover:visible">
                {/* Inner filled circle */}
                <div className="bg-slate-600 w-12 h-12 rounded-full " />
              </div>
              <div className="border border-gray-400 w-14 h-14 rounded-full flex items-center justify-center">
                {/* Inner filled circle */}
                <div className=" bg-red-800 w-12 h-12 rounded-full" />
              </div>
              <div className="border border-gray-400 w-14 h-14 rounded-full flex items-center justify-center">
                {/* Inner filled circle */}
                <div className=" bg-green-950 w-12 h-12 rounded-full" />
              </div>
              <div className="border border-gray-400 w-14 h-14 rounded-full flex items-center justify-center">
                {/* Inner filled circle */}
                <div className="bg-yellow-500 w-12 h-12 rounded-full" />
              </div>
              <div className="border border-gray-400 w-14 h-14 rounded-full flex items-center justify-center">
                {/* Inner filled circle */}
                <div className="bg-slate-600 w-12 h-12 rounded-full" />
              </div>
            </div>

            <div>
              <p className="mt-10 text-xl">Select a size </p>
            </div>

            <div className=" flex gap-6 mt-10">
              <div className=" border border-gray-700 rounded-sm size-14 ">
                <p className="text-center mt-3.5">M</p>
              </div>
              <div className=" border border-gray-700 rounded-sm size-14">
                <p className="text-center mt-3.5">L</p>
              </div>
              <div className=" border border-gray-700 rounded-sm size-14">
                <p className="text-center mt-3.5">XL</p>
              </div>
              <div className=" border border-gray-700 rounded-sm size-14">
                <p className="text-center mt-3.5">2XL</p>
              </div>
              <div className=" border border-gray-700 rounded-sm size-14">
                <p className="text-center mt-3.5">3XL</p>
              </div>
            </div>

            <div className=" flex mt-10  ">
              <button className="bg-gray-600 p-4 font-poppins font-semibold w-96 rounded-sm hover:bg-slate-400 ">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="poppins-bold text-2xl ml-10 my-3">
        Longines Legend Diver
      </h2>
      <div className="grid grid-cols-4 gap-4 mx-10">
        <div className="col-span-2">
          <span className="text-sm">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
        </div>

        <div className="col-span-2">
          <Collapse items={items} bordered={false} defaultActiveKey={["1"]} />
        </div>
      </div>

      <div className="mt-10 w-3/4 rounded-lg">
        <Carousel afterChange={onChange}>
          <div>
            <h3 style={contentStyle} className="rounded-lg">
              1
            </h3>
          </div>
          <div>
            <h3 style={contentStyle} className="rounded-lg">
              2
            </h3>
          </div>
          <div>
            <h3 style={contentStyle} className="rounded-lg">
              3
            </h3>
          </div>
          <div>
            <h3 style={contentStyle} className="rounded-lg">
              4
            </h3>
          </div>
        </Carousel>
      </div>

      {/* <div className="flex justify-center mt-10">
        <Pagination defaultCurrent={1} total={50} />
      </div> */}
    </>
  );
};

export default ProductDetail;

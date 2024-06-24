import React from "react";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

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

const Test = () => {
  return (
    <>
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
    </>
  );
};

export default Test;

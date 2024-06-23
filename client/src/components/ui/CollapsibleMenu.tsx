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

const CollapsibleMenu: React.FC = () => (
  <Collapse items={items} bordered={false} defaultActiveKey={["1"]} />
);

export default CollapsibleMenu;

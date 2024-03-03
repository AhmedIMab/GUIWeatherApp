import { ElementCloudyClearAt } from ".";

export default {
  title: "Components/ElementCloudyClearAt",
  component: ElementCloudyClearAt,
  argTypes: {
    color: {
      options: ["off", "on"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    color: "off",
    className: {},
    union: "/img/union-11.svg",
    img: "/img/union-10.svg",
    union1: "/img/union-9.svg",
    union2: "/img/union-8.svg",
  },
};

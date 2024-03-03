import { ColorOnWrapper } from ".";

export default {
  title: "Components/ColorOnWrapper",
  component: ColorOnWrapper,
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
    outlineClassName: {},
    outline: "/img/outline-30.svg",
    hasOutline: true,
  },
};

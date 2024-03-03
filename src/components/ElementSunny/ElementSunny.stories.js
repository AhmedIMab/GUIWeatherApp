import { ElementSunny } from ".";

export default {
  title: "Components/ElementSunny",
  component: ElementSunny,
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
    outline: "/img/outline-36.svg",
  },
};

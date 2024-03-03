import { ElementPartlyCloudy } from ".";

export default {
  title: "Components/ElementPartlyCloudy",
  component: ElementPartlyCloudy,
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
    outline: "/img/outline-32.svg",
  },
};

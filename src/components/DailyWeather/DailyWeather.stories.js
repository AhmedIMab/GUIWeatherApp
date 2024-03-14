import { DailyWeather } from ".";

export default {
  title: "Components/DailyWeather",
  component: DailyWeather,
};

export const Default = {
  args: {
    className: {},
    colorOnWrapperOutline: "/img/outline-31.svg",
    day: "MON",
    lowTemp: "22°",
    highTemp: "27°",
    colorOnWrapperHasOutline: true,
  },
};

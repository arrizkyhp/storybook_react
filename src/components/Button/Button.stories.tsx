import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    label: "Continue",
    size: "md",
  },
  argTypes: {
    handleClick: { action: "handleClick" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  backgroundColor: "blue",
};

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
};
Red.argTypes = {
  backgroundColor: {
    control: "select",
    options: ["red", "green"],
  },
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: "green",
};

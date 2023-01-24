import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Click",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

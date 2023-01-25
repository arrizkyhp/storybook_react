import { ComponentMeta, ComponentStory } from "@storybook/react";
import PlusIcon from "~/svg/PlusIcon";
import Button from "./Button";

export default {
  title: "Example/ui/Button",
  component: Button,
  args: {
    children: "Click",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  isPrimary: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  isSecondary: true,
};

export const Success = Template.bind({});
Success.args = {
  isSuccess: true,
};

export const Danger = Template.bind({});
Danger.args = {
  isDanger: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  withIcon: true,
  buttonIcon: "✅",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  isFullWidth: true,
};

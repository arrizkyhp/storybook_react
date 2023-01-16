import { ComponentMeta, ComponentStory } from "@storybook/react";
import Stack from "./Stack";

export default {
  title: "Components/Stack",
  component: Stack,
  argTypes: {
    children: { type: "number", defaultValue: 4 },
  },
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = ({ children, ...args }) => (
  <Stack {...args}>
    {[...Array(children).keys()].map((m) => (
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "red",
          display: "flex",
        }}
      >
        {m + 1}
      </div>
    ))}
  </Stack>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
  spacing: 2,
  wrap: false,
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "column",
  spacing: 1,
  wrap: true,
};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tablr from "./Tablr";

export default {
  title: "Components/Tablr",
  component: Tablr,
  argTypes: {
    rows: { control: "" },
    headers: { control: "" },
  },
} as ComponentMeta<typeof Tablr>;

const Template: ComponentStory<typeof Tablr> = (args) => <Tablr {...args} />;

export const Default = Template.bind({});

Default.args = {
  rows: [
    ["This", "is", "just", "a", "test"],
    ["This", "is", "also", "a", "test"],
    ["Just", "a", "little", "more", "data"],
    ["Row", "number", "four", "right", "here"],
  ],
  headers: ["Col 1", "Col 2", "Col 3", "Col 4", "Col 5"],
};

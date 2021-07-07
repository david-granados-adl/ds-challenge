import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonText } from "./button-text";

export default {
  title: "Atoms/ButtonText",
  component: ButtonText,
  args: {
    disabled: false,
    label: "Button",
  },
  argTypes: {
    variation: { control: "select" },
    size: { control: "select" },
    disabled: { control: "boolean" },
  },
} as ComponentMeta<typeof ButtonText>;

const Template: ComponentStory<typeof ButtonText> = (args) => <ButtonText {...args} />;

export const PrimaryText = Template.bind({});
PrimaryText.args = {
  variation: "primary",
};

export const SecondaryText = Template.bind({});
SecondaryText.args = {
  variation: "secondary",
};

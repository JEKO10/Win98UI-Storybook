import { Meta, StoryObj } from "@storybook/react";
import StartButton from "./StartButton";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof StartButton> = {
  component: StartButton,
  title: "TaskBar/StartButton",
  tags: ["autodocs"],
  args: {
    onClick: action("on-click"),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const StartBtn: Story = {
  args: {},
};

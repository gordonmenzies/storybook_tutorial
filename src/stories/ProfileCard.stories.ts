// Button.stories.ts

import type { Meta, StoryObj } from "@storybook/react";

import ProfileCard from "../Components/ProfileCard/ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "Example/ProfileCard",
  component: ProfileCard,
  // ...
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Germany: Story = {
  args: {
    name: "pablo",
    image: "no image",
    email: "pablo@pablo.com",
    phoneNumber: "01234372826",
    styleVariation: ".profile_card1",
  },
};

export const England: Story = {
  args: {
    name: "Emma",
    image: "no image",
    email: "Emma@Emma.com",
    phoneNumber: "012339873498579",
    styleVariation: ".profile_card2",
  },
};

import RestaurantCard from "./RestaurantCard";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/RestaurantCard", // Title of your component in the sidebar
  component: RestaurantCard, // Component itself
  argTypes: {}, // Optional: Controls component's arguments in SB
} as Meta;

// Template for the Story
const Template: Story = (args) => <RestaurantCard {...args} />;

// Default Story (Primary Story)
export const Primary = Template.bind({});
Primary.args = {
  // Define default props here
};

import { Meta, StoryFn } from '@storybook/react';
import { Chat, ChatProps } from '.';
import { SessionProvider } from 'next-auth/react';

export default {
  title: 'Chat',
  component: Chat,
} as Meta<ChatProps>;

const Template: StoryFn<typeof Chat> = (args) => (
  <SessionProvider>
    <Chat {...args} />
  </SessionProvider>
);

export const Primary = Template.bind({});
//default values
// Primary.args = {
//     title: 'teste',
// }

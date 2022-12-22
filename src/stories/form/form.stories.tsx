// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StudentForm } from './form';

export default {
  title: 'StudentForm',
  component: StudentForm,
} as ComponentMeta<typeof StudentForm>;



const Template: ComponentStory<typeof StudentForm> = (args) => <StudentForm {...args} />;

export const Create = Template.bind({});

Create.args = {
    student:undefined
};

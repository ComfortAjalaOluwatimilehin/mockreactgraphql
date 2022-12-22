// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { studentMock } from '../../mocks/student.mock';
import { Student } from './student';

export default {
  title: 'Student',
  component: Student,
} as ComponentMeta<typeof Student>;



const Template: ComponentStory<typeof Student> = (args) => <Student {...args} />;

export const Default = Template.bind({});

Default.args = {
    student:studentMock
};
export const Empty = Template.bind({});

Empty.args = {
    student:undefined
};

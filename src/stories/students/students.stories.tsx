// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { studentsMock } from '../../mocks/students.mock';
import { TableColumn } from "../../types/interfaces";
import { Students } from './students';

export default {
  title: 'Students',
  component: Students,
} as ComponentMeta<typeof Students>;


const columns: TableColumn[] = Object.keys(studentsMock[0]).map((key)  => ({id:key, label:key }))

const Template: ComponentStory<typeof Students> = (args) => <Students {...args} />;

export const Filled = Template.bind({});

Filled.args = {
    rows:studentsMock,
    columns
};

export const Empty = Template.bind({});

Empty.args = {
    rows:[],
    columns:[]
};
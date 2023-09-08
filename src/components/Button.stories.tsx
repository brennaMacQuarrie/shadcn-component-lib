// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { FaBeer } from 'react-icons/fa';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const SmallButton: Story = {
  render: () => {
    return (
      <div className="flex gap-4 p-6 bg-secondary">
        <Button size='sm' variant='default'>Default</Button>
        <Button size='sm' variant='destructive'>Destructive</Button>
        <Button size='sm' variant='outline'>Outline</Button>
        <Button size='sm' variant='secondary'>Secondary</Button>
        <Button size='sm' variant='ghost'>Ghost</Button>
        <Button size='sm' variant='link'>Link</Button>
      </div>
      )
  }
};

export const LargeButton: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Button size='lg' variant='default'>Default</Button>
        <Button size='lg' variant='destructive'>Destructive</Button>
        <Button size='lg' variant='outline'>Outline</Button>
        <Button size='lg' variant='secondary'>Secondary</Button>
        <Button size='lg' variant='ghost'>Ghost</Button>
        <Button size='lg' variant='link'>Link</Button>
      </div>
      )
  }
};

export const IconButton: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Button size='icon' variant='default'><FaBeer className="w-4 h-4" /></Button>
        <Button size='icon' variant='destructive'><FaBeer /></Button>
        <Button size='icon' variant='outline'><FaBeer /></Button>
        <Button size='icon' variant='secondary'><FaBeer /></Button>
        <Button size='icon' variant='ghost'><FaBeer /></Button>
        <Button size='icon' variant='link'><FaBeer /></Button>
      </div>
      )
  }
};

export const DefaultButton: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Button size='default' variant='default'>Default</Button>
        <Button size='default' variant='destructive'>Destructive</Button>
        <Button size='default' variant='outline'>Outline</Button>
        <Button size='default' variant='secondary'>Secondary</Button>
        <Button size='default' variant='ghost'>Ghost</Button>
        <Button size='default' variant='link'>Link</Button>
      </div>
      )
  }
};

export const CustomButton: Story = {
  render: () => {
    return (
      <div className="flex gap-4">
        <Button className="flex gap-2" size='default' variant='outline'>
          <FaBeer />
          Custom button
        </Button>
      </div>
      )
  }
};

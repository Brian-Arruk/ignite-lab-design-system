import { Button, ButtonProps } from './Button'
import { Meta, StoryObj } from '@storybook/react'
import { Children } from 'react'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create Account',
    },
    argTypes: {}
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

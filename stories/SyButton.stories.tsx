import React from 'react';
import { SyButton } from '../src/components/button/SyButton'

import { boolean, number, text, select } from '@storybook/addon-knobs';

export default {
  title: 'SyButton'
};

export const singleButton = () => {

  const block = boolean('Block', false, 'Basic')
  const active = boolean('Active', false, 'Basic')
  const disabled = boolean('Disabled', false, 'Basic')
  const pressed = boolean('Pressed', false, 'Basic')

  const shapeOptions = ['', 'square', 'pill']
  const shape = select('Shape', shapeOptions, '', 'Other')
  const colorOptions = [
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
    "info",
    "light",
    "dark",
    "link",
  ]
  const color = select('Color', colorOptions, 'primary', 'Other')
  const variantOptions = ['', 'ghost', 'outline']
  const variant = select('Variant', variantOptions, '', 'Other')
  const sizeOptions = ['', 'sm', 'lg']
  const size = select('Size', sizeOptions, '', 'Other')

  return  <>
    <SyButton
      active={active}
      disabled={disabled}
      shape={shape}
      color={color}
    >
      SyButton
    </SyButton>
  </>
}
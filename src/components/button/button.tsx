import clsx from 'clsx';

import { ComponentProps } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { variants } from './button.variants';

export type ButtonVariants = VariantProps<typeof variants>;

export type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({ variant = 'primary', size = 'medium', ...props }: ButtonProps) => (
  <button className={clsx(variants({ variant, size }))} {...props} />
);

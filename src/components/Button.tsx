import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

type Buttonprops = React.DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  React.AriaAttributes &
  PropsWithChildren & {
    isDisabled?: boolean;
    className?: string;
  };

const Button: FC<Buttonprops> = ({
  isDisabled = false,
  className = 'btn-primary gap-2',
  children,
  ...rest
}) => {
  return (
    <button className={`btn ${className} ${isDisabled ? 'btn-disabled' : ''}`} {...rest}>
      {children || 'Button'}
    </button>
  );
};

export default Button;

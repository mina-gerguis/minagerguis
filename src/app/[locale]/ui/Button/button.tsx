import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'ios' | 'iosOutline' | 'iosSecondary' | 'ghost' | 'secondary';
    size?: 'sm' | 'lg' | 'iosLarge' | 'icon';
    fullWidth?: boolean;
}

const Button = ({
    children,
    variant = 'ios',
    size,
    fullWidth,
    className = '',
    ...props
}: ButtonProps) => {
    const classes = [
        styles.button,
        styles[variant],
        size && styles[size],
        fullWidth && styles.fullWidth,
        className
    ].filter(Boolean).join(' ');

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
};

export default Button;

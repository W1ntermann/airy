import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    loading?: boolean;
}

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    loading = false,
    className = '',
    disabled,
    ...props
}: ButtonProps) => {
    const baseStyles = 'font-medium rounded-full transition-all duration-300 flex items-center justify-center';

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-sm',
        lg: 'px-8 py-4 text-base',
    };

    const variantStyles = {
        primary: 'bg-olive-600 text-white hover:bg-olive-700 active:bg-olive-800',
        secondary: 'bg-white text-gray-900 hover:bg-gray-100 active:bg-gray-200',
        outline: 'border border-white/40 text-white hover:bg-white/10 active:bg-white/20',
        ghost: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200',
    };

    const widthStyles = fullWidth ? 'w-full' : '';
    const disabledStyles = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';

    return (
        <button
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${disabledStyles} ${className}`}
            disabled={disabled || loading}
            {...props}
        >
            {loading && (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
            )}
            {children}
        </button>
    );
};

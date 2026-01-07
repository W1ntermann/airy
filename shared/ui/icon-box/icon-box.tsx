import { ReactNode } from 'react';

interface IconBoxProps {
    icon: ReactNode;
    color?: 'blue' | 'green' | 'purple' | 'orange';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const IconBox = ({
                            icon,
                            color = 'blue',
                            size = 'md',
                            className = ''
                        }: IconBoxProps) => {
    const sizeClasses = {
        sm: 'w-10 h-10',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
    };

    const colorClasses = {
        blue: 'bg-blue-100 text-blue-600',
        green: 'bg-green-100 text-green-600',
        purple: 'bg-purple-100 text-purple-600',
        orange: 'bg-orange-100 text-orange-600',
    };

    return (
        <div className={`
      ${sizeClasses[size]} 
      ${colorClasses[color]}
      rounded-xl flex items-center justify-center
      transition-all duration-300
      ${className}
    `}>
            {icon}
        </div>
    );
};
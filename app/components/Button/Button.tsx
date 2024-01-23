'use client'
import { IconType } from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    color: string;
    background: string;
    icon?: IconType;
}
const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    background,
    color,
    icon: Icon
}) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className="group relative inline-block focus:outline-none focus:ring"
        >
            <span
                className={`
                    absolute 
                    inset-0 
                    translate-x-1.5 
                    translate-y-1.5 
                    transition-transform 
                    group-hover:translate-x-0 
                    group-hover:translate-y-0
                    ${background}
                `}
            ></span>

            <span
                className={`
                    relative 
                    inline-block
                    border-2 
                    border-current 
                    px-8 
                    py-3 
                    text-sm 
                    font-bold 
                    uppercase 
                    tracking-widest 
                    group-active:text-opacity-75
                    ${color}
                `}
            >
                <div className="flex items-center">
                    {Icon && (

                        <Icon
                            size={16}
                            className="mr-4"
                        />
                    )}

                    {label}
                </div>
            </span>
        </button>
    )
}

export default Button;
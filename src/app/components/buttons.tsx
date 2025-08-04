'use client'
import { ArrowRightMiniIcon } from "./icons";

interface ButtonProps {
    text: string;
    icon?: React.ReactNode;
    onClick?: () => void;
    width?: string;
}
export const Button = ({ text, icon, onClick, width }: ButtonProps) => {
    return (
        <div className="flex h-12">
            <div className={`bg-[#D60B41] text-white h-14 px-8 py-4  flex items-center cursor-pointer justify-between `}
                style={{ width: width || '100%' }}
                onClick={onClick} >
                <p className="whitespace-nowrap text-2xl font-bold">{text}</p>
                {icon && <ArrowRightMiniIcon />}
            </div>
        </div>
    )
}
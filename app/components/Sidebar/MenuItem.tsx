'use client';

import { useRouter } from "next/navigation";
import { IconType } from "react-icons";

interface MenuItemProps {
    link: string;
    label: string;
    icon?: IconType;

}

const MenuItem: React.FC<MenuItemProps> = ({
    link,
    label,
    icon: Icon,
}) => {

    const router = useRouter();


    return (
        <li>

            <button
                onClick={() => router.push(link)}
                className="
                    w-full
                    pl-10 
                    text-lg 
                    py-3 
                    my-3 
                    flex 
                    flex-row 
                    dark:text-white 
                    text-gray-700 
                    hover:bg-gray-100
                "
            >
                {Icon && (

                    <Icon
                        size={24}
                        className="mr-4"
                    />
                )}

                {label}

            </button>

        </li>
    );
}

export default MenuItem;
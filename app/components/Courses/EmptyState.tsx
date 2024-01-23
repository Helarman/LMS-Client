'use client'

import SectionHeader from "../Header/SectionHeader";
import Button from "../Button/Button";
import { useRouter } from "next/navigation";

interface EmptyStateProps {
    title: string;
    subTitle: string;
    buttonLabel?: string;
    url?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, subTitle, url, buttonLabel }) => {
    const router = useRouter()
    return (
        <div className="w-full">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-left ">
                <SectionHeader title={title} subTitle={subTitle} />
                <div>
                    <h3 className="text-2xl font-bold mb-1 text-gray-800 mt-8 mb-4">No items to display</h3>

                    {url && buttonLabel ? <Button label={buttonLabel} onClick={() => router.push(url)} color={'text-gray-800'} background={'bg-emerald-400'} /> : null}
                </div>
            </div>
        </ div >
    )
};

export default EmptyState;
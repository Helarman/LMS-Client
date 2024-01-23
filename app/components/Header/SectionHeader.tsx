'use client'

interface SectionHeaderProps {
    title: string;
    subTitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subTitle
}) => {
    return (
        <div className="mb-6 flex flex-wrap -mx-4 justify-start ">
            <div  className="px-4 relative w-full lg:w-8/12 text-left">
                <h3  className="text-3xl font-bold mb-1 text-gray-800">{title}</h3>
                <p  className="mt-2 mb-4 text-xl leading-relaxed text-gray-400">
                    {subTitle}
                </p>
            </div>
        </div>
    )
}

export default SectionHeader
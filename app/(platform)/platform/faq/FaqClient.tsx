'use client'

import Accordion from "@/app/components/Accordion/Accordion";
import SectionHeader from "@/app/components/Header/SectionHeader";
import TextElement from "@/app/components/TextElement/TextElement"

interface FaqClientProps {
    faqData: {
        attributes: {
            title: string;
            faq: {
                id: number;
                title: string;
                content: any;
            }[]
        }
    }
}

const FaqClient: React.FC<FaqClientProps> = ({ faqData }) => {
    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 min-h-screen">
                <SectionHeader title={faqData.attributes.title} subTitle="Lorem ipsum dolor sit amet" />


                {faqData.attributes.faq && faqData.attributes.faq.map(({ id, title, content }) => (
                    <div key={id}>
                        <Accordion title={title} >
                            <TextElement content={content} />
                        </Accordion>
                    </div>
                ))}
            </div >

        </>
    )
}

export default FaqClient;
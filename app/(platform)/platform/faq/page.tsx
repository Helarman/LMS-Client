
import getFAQ from "@/app/actions/getFaq";
import FaqClient from "./FaqClient";

const FaqPage = async () => {
    const faqData = await getFAQ();
    
    return (
        <div>
            <FaqClient faqData={faqData}/>
        </div>
    )
}

export default FaqPage;
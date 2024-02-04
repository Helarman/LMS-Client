'use client'

import { ImageType } from "@/app/types";


const ImageArea = ({ image } : {image: ImageType}) => {
    return (
        <img
            className='my-2 w-full'
            src="https://admin.lms.helarman.pro/uploads/cartoon_style_vehicle_illustration_52683_81722_b02cfdbf6a.jpg"
            alt="Picture of the author"
        />
    )
};

export default ImageArea;
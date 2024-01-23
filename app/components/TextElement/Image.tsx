'use client'
import Image from 'next/image'

interface ImageProps {
    image?: any,
}

const ImageArea: React.FC<ImageProps> = ({ image }) => {
    return (
        <img
            className='my-2 w-full'
            src="http://localhost:1337/uploads/cartoon_style_vehicle_illustration_52683_81722_b02cfdbf6a.jpg"
            alt="Picture of the author"
        />
    )
};

export default ImageArea;
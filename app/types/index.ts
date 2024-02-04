export interface FileType {
    data: {
        id: number
        attributes: {
            name: string;
            alternativeText: string | null;
            caption: string | null;
            width: number | null;
            height: number | null;
            formats: string | null;
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: string;
            provider: string;
            provider_metadata: string;
            createdAt: string;
            updatedAt: string;
        }
    }
}


export interface ImageType {
    name: string
    alternativeText: string
    url: string
    caption: string | null,
    width: number,
    height: number,
    formats: {
        thumbnail: ImageFormatType;
        large: ImageFormatType;
        medium: ImageFormatType;
        small: ImageFormatType;
    },
    hash: string;
    ext: string;
    mime: string;
    size: number;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
}

export interface ImageFormatType {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    url: string;
}
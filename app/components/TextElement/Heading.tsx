'use client'

import CodeArea from "./Code"

type ChildrenProps = {
    type: string,
    text?: string,
    size?: number,
    italic?: boolean,
    bold?: boolean,
    strikethrough?: boolean,
    underline?: boolean,
    code?: boolean,
    url?: string,
}

type SizesProps = {
    1: string,
    2: string,
    3: string,
    4: string,
    5: string,
    6: string,
}
type ElementProps = {
    type: string,
    text: string,
    italic: boolean,
    bold: boolean,
    strikethrough: boolean,
    underline: boolean,
    code?: boolean,
    url?: string,
    children?: ChildrenProps[],
}

export interface HeadingProps{
    children: ElementProps[];
    level: number
    type?: string
}

const Heading: React.FC<HeadingProps> = ({ children, level, type }) => {


    const sizes: SizesProps = {
        1: 'text-3xl md:text-4xl',
        2: 'text-2xl md:text-3xl',
        3: 'text-xl md:text-2xl',
        4: 'text-lg md:text-xl',
        5: 'text-base md:text-lg',
        6: 'text-sm md:text-base',
    }

    const size = sizes[level as keyof SizesProps]

    const Element: React.FC<ElementProps> = ({ type, text, children, url, underline, italic, strikethrough, bold, code }) => {

        if (type === 'link' && children) {
            return (
                <a
                    href={url}
                    className={`
                        hover:opacity-75
                        ${size}
                        ${underline ? 'underline' : null}
                        ${italic ? 'italic' : null}
                        ${strikethrough ? 'line-through' : null}
                        ${bold ? 'font-extrabold ' : 'font-bold'}
                        text-gray-900
                        my-2
                    `}
                >
                    <span
                        className={`
                        ${children[0].size}
                        ${children[0].underline ? 'underline' : null}
                        ${children[0].italic ? 'italic' : null}
                        ${children[0].strikethrough ? 'line-through' : null}
                        ${children[0].bold ? 'font-extrabold ' : 'font-bold'}
                        text-gray-900
                        `
                        }>
                        {children[0].text}
                    </span>
                </a>
            )
        }

        return (
            <h3
                className={`
                    ${size}
                    ${underline ? 'underline' : null}
                    ${italic ? 'italic' : null}
                    ${strikethrough ? 'line-through' : null}
                    ${bold ? 'font-extrabold ' : 'font-bold'}
                    text-gray-900
                    my-2
                `
                }>

                {code ?
                    <CodeArea text={text} />
                    :
                    text
                }

            </h3>
        )
    }

    return (
        <>
            {children && children.map(({ type, text, children, url, underline, italic, strikethrough, bold, code }) => (
                <div key={type}>
                    <Element type={type} text={text} children={children} url={url} underline={underline} italic={italic} strikethrough={strikethrough} bold={bold} code={code} />
                </div>
            ))}

        </>
    )
}

export default Heading;
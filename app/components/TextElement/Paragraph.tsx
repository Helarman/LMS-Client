'use client'

type ElementProps = {
    type: string,
    text: string,
    italic: boolean,
    bold: boolean,
    strikethrough: boolean,
    underline: boolean,
    code?: boolean,
}

const Paragraph = ({ children }: { children: ElementProps[] }) => {

    return (
        <p className="my-2">
            {children && children.map(({ type, text, underline, italic, strikethrough, bold }) => (
                <span key={type}
                    className={`
                        ${underline ? 'underline' : null}
                        ${italic ? 'italic' : null}
                        ${strikethrough ? 'line-through' : null}
                        ${bold ? 'font-bold' : null}
                        text-gray-900
                    `}
                >
                    {text}
                </span>
            ))}
        </p>
    )
}

export default Paragraph;
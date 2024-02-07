'use client'

type ListItemProps = {
    type: string,
    text?: string,
    italic?: boolean,
    bold?: boolean,
    strikethrough?: boolean,
    underline?: boolean,
    code?: boolean,
    url?: string,
}

type ElementProps = {
    type: string,
    text?: string,
    italic?: boolean,
    bold?: boolean,
    strikethrough?: boolean,
    underline?: boolean,
    code?: boolean,
    url?: string,
    children?: ListItemProps[]
}

interface ListElementProps {
    children?: ElementProps[],
    format?: string
}


const ListElement: React.FC<ListElementProps> = ({ children, format }) => {

    const Element: React.FC<ElementProps> = ({ type, text, children, url, underline, italic, strikethrough, bold, code }) => {

        if (type === 'link' && children) {
            return (
                <a
                    href={url}
                    className={`
                        hover:opacity-75
                        ${underline ? 'underline' : null}
                        ${italic ? 'italic' : null}
                        ${strikethrough ? 'line-through' : null}
                        ${bold ? 'font-extrabold ' : 'font-bold'}
                        text-gray-900
                    `}
                >
                    <span
                        className={`
                        ${underline ? 'underline' : null}
                        ${italic ? 'italic' : null}
                        ${strikethrough ? 'line-through' : null}
                        ${bold ? 'font-bold ' : null}
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
                    ${underline ? 'underline' : null}
                    ${italic ? 'italic' : null}
                    ${strikethrough ? 'line-through' : null}
                    ${bold ? 'font-bold ' : null}
                    text-gray-900
                `}
            >

                {text}

            </h3>
        )
    }

    const ListItem = ({ children }: { children: ElementProps[] }) => {

        return (
            <>
                {children && children.map(({ type, text, children, url, underline, italic, strikethrough, bold, code }) => (
                    <div key={type}>
                        <Element type={type} text={text} url={url} underline={underline} italic={italic} strikethrough={strikethrough} bold={bold} code={code}>{children}</Element>
                    </div>
                ))}
            </>
        )
    }

    if (format === 'ordered') {
        return (
            <ol className="my-2 ml-5 list-decimal">
                {children && children.map(({ type, children }) => (
                    <li key={type}>
                        <ListItem>{children as ListItemProps[]}</ListItem>
                    </li>
                ))}
            </ol>
        )
    }
    return (
        <ul className="my-2 ml-5 list-disc">
            {children && children.map(({ type, children }) => (
                <li key={type}>
                    <ListItem>{children as ListItemProps[]}</ListItem>
                </li>
            ))}
        </ul>
    )
}

export default ListElement;
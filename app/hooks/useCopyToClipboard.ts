import { useCallback, useState } from 'react'
import toast from 'react-hot-toast'

type CopiedValue = string | null
type CopyFn = (text: string) => Promise<boolean> // Return success

export function useCopyToClipboard(): [CopiedValue, CopyFn] {
    const [copiedText, setCopiedText] = useState<CopiedValue>(null)

    const copy: CopyFn = useCallback(async text => {
        if (!navigator?.clipboard) {
            console.warn('Clipboard not supported')
            return false
        }

        try {
            await navigator.clipboard.writeText(text)
            setCopiedText(text)
            toast.success('Text copied successfully')
            return true
        } catch (error) {
            toast.error(`'Copy failed', ${error}`)
            setCopiedText(null)
            return false
        }
    }, [])

    return [copiedText, copy]
}
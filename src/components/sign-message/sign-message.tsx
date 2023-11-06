import { useSignMessage } from 'aleo-hooks'
import { FC, useCallback, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { cn } from '@bem-react/classname'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import './sign-message.scss'

const CnSignMessage = cn('sign-message')

const Encoder = new TextEncoder()

export const SignMessage: FC = () => {
    const { data, signMessage, error, loading } = useSignMessage()
    const [message, setMessage] = useState('')

    const messageChangeCallback = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }, [])

    const submit = useCallback(() => {
        signMessage(Encoder.encode(message))
    }, [message, signMessage])

    return (
        <div className={CnSignMessage()}>
            <h2>Sign message</h2>

            <div className={CnSignMessage('values')}>
                <div className={CnSignMessage('valuesItem')}>Loading: {String(loading)}</div>
                <div className={CnSignMessage('valuesItem')}>Error: {error?.message}</div>
                <div className={CnSignMessage('valuesItem')}>Data: {data}</div>
            </div>

            <Input placeholder="Message" value={message} onChange={messageChangeCallback} />
            <Button onClick={submit}>Sign message</Button>

            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`import { useSignMessage } from 'aleo-hooks'
import { FC, useCallback, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { cn } from '@bem-react/classname'

import './sign-message.scss'

const CnSignMessage = cn('sign-message')

const Encoder = new TextEncoder()

export const SignMessage: FC = () => {
    const { data, signMessage, error, loading } = useSignMessage()
    const [message, setMessage] = useState('')

    const messageChangeCallback = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }, [])

    const submit = useCallback(() => {
        signMessage(Encoder.encode(message))
    }, [message, signMessage])

    return (
        <div className={CnSignMessage()}>
            <h2>Sign message</h2>

            <div className={CnSignMessage('values')}>
                <div className={CnSignMessage('valuesItem')}>Loading: {String(loading)}</div>
                <div className={CnSignMessage('valuesItem')}>Error: {error?.message}</div>
                <div className={CnSignMessage('valuesItem')}>Data: {data}</div>
            </div>

            <Input placeholder="Message" value={message} onChange={messageChangeCallback} />
            <Button onClick={submit}>Sign message</Button>
        </div>
    )
}
`}
            </SyntaxHighlighter>
        </div>
    )
}

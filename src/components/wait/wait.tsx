import { FC, useCallback, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { cn } from '@bem-react/classname'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useConnect, useWait } from 'aleo-hooks'

import './wait.scss'

const CnWait = cn('wait')

export const Wait: FC = () => {
    const { wait, status } = useWait({})
    const { connected } = useConnect()

    const [transactionId, setTransactionId] = useState('')

    const transactionIdChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTransactionId(e.target.value)
    }, [])

    const submit = useCallback(() => {
        wait(transactionId)
    }, [wait, transactionId])

    return (
        <div className={CnWait()}>
            <h2>Wait for transaction</h2>

            <div className={CnWait('values')}>
                <div className={CnWait('valuesItem')}>Transaction status: {status}</div>
            </div>

            <div>
                <Input
                    value={transactionId}
                    onChange={transactionIdChangeHandler}
                    placeholder={'Enter transaction ID'}
                />

                <Button disabled={!connected} onClick={submit}>
                    {!connected ? 'Connect wallet first' : 'Wait for transaction'}
                </Button>
            </div>

            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`import { FC, useCallback, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { cn } from '@bem-react/classname'
import { useConnect, useWait } from 'aleo-hooks'

import './wait.scss'

const CnWait = cn('wait')

export const Wait: FC = () => {
    const { wait, status } = useWait({})
    const { connected } = useConnect()

    const [transactionId, setTransactionId] = useState('')

    const transactionIdChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTransactionId(e.target.value)
    }, [])

    const submit = useCallback(() => {
        wait(transactionId)
    }, [wait, transactionId])

    return (
        <div className={CnWait()}>
            <h2>Wait for transaction</h2>

            <div className={CnWait('values')}>
                <div className={CnWait('valuesItem')}>Transaction status: {status}</div>
            </div>

            <div>
                <Input
                    value={transactionId}
                    onChange={transactionIdChangeHandler}
                    placeholder={'Enter transaction ID'}
                />

                <Button disabled={!connected} onClick={submit}>
                    {!connected ? 'Connect wallet first' : 'Wait for transaction'}
                </Button>
            </div>
        </div>
    )
}
`}
            </SyntaxHighlighter>
        </div>
    )
}

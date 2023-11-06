import { useTransactionStatus } from 'aleo-hooks'
import { FC, useCallback, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { cn } from '@bem-react/classname'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import './transaction-status.scss'

const CnTransactionStatus = cn('transactionStatus')

export const TransactionStatus: FC = () => {
    const { data, error, loading, requestTransactionStatus } = useTransactionStatus()
    const [transactionId, setTransactionId] = useState('')

    const transactionIdChangeCallback = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTransactionId(e.target.value)
    }, [])

    const submit = useCallback(() => {
        requestTransactionStatus(transactionId)
    }, [transactionId, requestTransactionStatus])

    return (
        <div className={CnTransactionStatus()}>
            <h2>Request transaction status</h2>

            <div className={CnTransactionStatus('values')}>
                <div className={CnTransactionStatus('valuesItem')}>Loading: {String(loading)}</div>
                <div className={CnTransactionStatus('valuesItem')}>Error: {error?.message}</div>
                <div className={CnTransactionStatus('valuesItem')}>Transaction status: {data}</div>
            </div>

            <Input
                placeholder="Transaction ID"
                value={transactionId}
                onChange={transactionIdChangeCallback}
            />
            <Button onClick={submit}>Request transaction status</Button>

            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`import { useTransactionStatus } from 'aleo-hooks'
import { FC, useCallback, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { cn } from '@bem-react/classname'

import './transaction-status.scss'

const CnTransactionStatus = cn('transactionStatus')

export const TransactionStatus: FC = () => {
    const { data, error, loading, requestTransactionStatus } = useTransactionStatus()
    const [transactionId, setTransactionId] = useState('')

    const transactionIdChangeCallback = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setTransactionId(e.target.value)
    }, [])

    const submit = useCallback(() => {
        requestTransactionStatus(transactionId)
    }, [transactionId, requestTransactionStatus])

    return (
        <div className={CnTransactionStatus()}>
            <h2>Request transaction status</h2>

            <div className={CnTransactionStatus('values')}>
                <div className={CnTransactionStatus('valuesItem')}>Loading: {String(loading)}</div>
                <div className={CnTransactionStatus('valuesItem')}>Error: {error?.message}</div>
                <div className={CnTransactionStatus('valuesItem')}>Transaction status: {data}</div>
            </div>

            <Input
                placeholder="Transaction ID"
                value={transactionId}
                onChange={transactionIdChangeCallback}
            />
            <Button onClick={submit}>Request transaction status</Button>
        </div>
    )
}
`}
            </SyntaxHighlighter>
        </div>
    )
}

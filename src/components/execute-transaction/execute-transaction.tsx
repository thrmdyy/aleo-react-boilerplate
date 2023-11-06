import { FC, useCallback, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { cn } from '@bem-react/classname'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTransaction, Transaction, WalletAdapterNetwork, useConnect } from 'aleo-hooks'

import './execute-transaction.scss'

const CnExecuteTransaction = cn('sign-message')

interface IFormData {
    program: string
    function: string
    fee: number
    address: string
    amount: string
}

type IFormDataKeys = keyof IFormData

const placeholderFromFormDataKey: Record<keyof IFormData, string> = {
    program: 'Program',
    function: 'Function',
    fee: 'Fee',
    address: 'address',
    amount: `Amount`,
}

export const ExecuteTransaction: FC = () => {
    const { transactionId, executeTransaction, error, loading } = useTransaction()
    const { address, connected } = useConnect()

    const [formData, setFormData] = useState<IFormData>({
        program: 'credits.aleo',
        function: 'transfer_public',
        fee: 1_000_000,
        amount: `${1 * 10 ** 6}u64`,
        address: '',
    })

    const formChangeHandler = useCallback((key: IFormDataKeys) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({
                ...prev,
                [key]: key === 'fee' ? Number(e.target.value) : e.target.value,
            }))
        }
    }, [])

    const submit = useCallback(() => {
        const inputs: any = [formData.address, formData.amount]

        const aleoTransaction = Transaction.createTransaction(
            address as string,
            WalletAdapterNetwork.Testnet,
            formData.program,
            formData.function,
            inputs,
            1_000_000,
            false,
        )

        executeTransaction(aleoTransaction)
    }, [executeTransaction, address, formData])

    return (
        <div className={CnExecuteTransaction()}>
            <h2>Execute transaction</h2>

            <div className={CnExecuteTransaction('values')}>
                <div className={CnExecuteTransaction('valuesItem')}>Loading: {String(loading)}</div>
                <div className={CnExecuteTransaction('valuesItem')}>Error: {error?.message}</div>
                <div className={CnExecuteTransaction('valuesItem')}>
                    Transaction id: {transactionId}
                </div>
            </div>

            <div>
                {Object.keys(formData).map((key) => {
                    const value = formData[key as IFormDataKeys]

                    return (
                        <Input
                            key={key}
                            type={key === 'fee' ? 'number' : 'text'}
                            value={value}
                            disabled={['program', 'function'].includes(key)}
                            onChange={formChangeHandler(key as IFormDataKeys)}
                            placeholder={placeholderFromFormDataKey[key as IFormDataKeys]}
                        />
                    )
                })}

                <Button disabled={!connected} onClick={submit}>
                    {!connected ? 'Connect wallet first' : 'Execute transaction'}
                </Button>
            </div>

            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`import { FC, useCallback, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { cn } from '@bem-react/classname'
import { useTransaction, Transaction, WalletAdapterNetwork, useConnect } from 'aleo-hooks'

import './execute-transaction.scss'

const CnExecuteTransaction = cn('sign-message')

interface IFormData {
    program: string
    function: string
    fee: number
    address: string
    amount: string
}

type IFormDataKeys = keyof IFormData

const placeholderFromFormDataKey: Record<keyof IFormData, string> = {
    program: 'Program',
    function: 'Function',
    fee: 'Fee',
    address: 'address',
    amount: 'Amount',
}

export const ExecuteTransaction: FC = () => {
    const { transactionId, executeTransaction, error, loading } = useTransaction()
    const { address, connected } = useConnect()

    const [formData, setFormData] = useState<IFormData>({
        program: 'credits.aleo',
        function: 'transfer_public',
        fee: 1_000_000,
        amount: '${1 * 10 ** 6}u64',
        address: '',
    })

    const formChangeHandler = useCallback((key: IFormDataKeys) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({
                ...prev,
                [key]: key === 'fee' ? Number(e.target.value) : e.target.value,
            }))
        }
    }, [])

    const submit = useCallback(() => {
        const inputs: any = [formData.address, formData.amount]

        const aleoTransaction = Transaction.createTransaction(
            address as string,
            WalletAdapterNetwork.Testnet,
            formData.program,
            formData.function,
            inputs,
            1_000_000,
            false,
        )

        executeTransaction(aleoTransaction)
    }, [executeTransaction, address, formData])

    return (
        <div className={CnExecuteTransaction()}>
            <h2>Sign message</h2>

            <div className={CnExecuteTransaction('values')}>
                <div className={CnExecuteTransaction('valuesItem')}>Loading: {String(loading)}</div>
                <div className={CnExecuteTransaction('valuesItem')}>Error: {error?.message}</div>
                <div className={CnExecuteTransaction('valuesItem')}>
                    Transaction id: {transactionId}
                </div>
            </div>

            <div>
                {Object.keys(formData).map((key) => {
                    const value = formData[key as IFormDataKeys]

                    return (
                        <Input
                            key={key}
                            type={key === 'index' ? 'number' : 'text'}
                            value={value}
                            disabled={key !== 'address'}
                            onChange={formChangeHandler(key as IFormDataKeys)}
                            placeholder={placeholderFromFormDataKey[key as IFormDataKeys]}
                        />
                    )
                })}

                <Button disabled={!connected} onClick={submit}>
                    {!connected ? 'Connect wallet first' : 'Execute transaction'}
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

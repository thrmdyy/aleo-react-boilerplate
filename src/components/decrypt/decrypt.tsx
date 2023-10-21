import { cn } from '@bem-react/classname'
import { useConnect, useDecrypt } from 'aleo-hooks'
import { useCallback, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import './decrypt.scss'

SyntaxHighlighter.registerLanguage('jsx', jsx)

const CnDecrypt = cn('decrypt')

interface IFormData {
    cipherText: string
    tpk: string
    programId: string
    functionName: string
    index: number
}

type IFormDataKeys = keyof IFormData

const placeholderFromFormDataKey: Record<keyof IFormData, string> = {
    cipherText: 'Ciphered text',
    tpk: 'TPK',
    programId: 'Program ID',
    functionName: 'Function name',
    index: 'Index',
}

export const Decrypt = () => {
    const [formData, setFormData] = useState<IFormData>({
        cipherText: '',
        tpk: '',
        programId: 'credits.aleo',
        functionName: '',
        index: 0,
    })

    const cipherTextChangeHandler = useCallback((key: IFormDataKeys) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({
                ...prev,
                [key]: key === 'index' ? Number(e.target.value) : e.target.value,
            }))
        }
    }, [])

    const { connected } = useConnect()

    const { decrypt, decryptedText, loading } = useDecrypt({ enabled: false, ...formData })

    return (
        <div className={CnDecrypt()}>
            <h2>Decrypt ciphered text</h2>

            <div className={CnDecrypt('values')}>
                <div className={CnDecrypt('valuesItem')}>Loading: {String(loading)}</div>
                <div className={CnDecrypt('valuesItem')}>Decrypted text: {decryptedText}</div>
            </div>

            <div>
                {Object.keys(formData).map((key) => {
                    const value = formData[key as IFormDataKeys]

                    return (
                        <Input
                            key={key}
                            type={key === 'index' ? 'number' : 'text'}
                            value={value}
                            onChange={cipherTextChangeHandler(key as IFormDataKeys)}
                            placeholder={placeholderFromFormDataKey[key as IFormDataKeys]}
                        />
                    )
                })}

                <Button disabled={!connected} onClick={decrypt}>
                    {!connected ? 'Connect wallet first' : 'Decrypt'}
                </Button>
            </div>

            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`import { cn } from '@bem-react/classname'
import { useConnect, useDecrypt } from 'aleo-hooks'
import { useCallback, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'

import './decrypt.scss'

const CnDecrypt = cn('decrypt')

interface IFormData {
    cipherText: string
    tpk: string
    programId: string
    functionName: string
    index: number
}

type IFormDataKeys = keyof IFormData

const placeholderFromFormDataKey: Record<keyof IFormData, string> = {
    cipherText: 'Ciphered text',
    tpk: 'TPK',
    programId: 'Program ID',
    functionName: 'Function name',
    index: 'Index',
}

export const Decrypt = () => {
    const [formData, setFormData] = useState<IFormData>({
        cipherText: '',
        tpk: '',
        programId: '',
        functionName: '',
        index: 0,
    })

    const cipherTextChangeHandler = useCallback((key: IFormDataKeys) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({
                ...prev,
                [key]: key === 'index' ? Number(e.target.value) : e.target.value,
            }))
        }
    }, [])

    const { connected } = useConnect()

    const { decrypt, decryptedText, loading } = useDecrypt({ enabled: false, ...formData })

    return (
        <div className={CnDecrypt()}>
            <h2>Decrypt ciphered text</h2>

            <div className={CnDecrypt('values')}>
                <div className={CnDecrypt('valuesItem')}>Loading: {String(loading)}</div>
                <div className={CnDecrypt('valuesItem')}>Decrypted text: {decryptedText}</div>
            </div>

            <div>
                {Object.keys(formData).map((key) => {
                    const value = formData[key as IFormDataKeys]

                    return (
                        <Input
                            key={key}
                            type={key === 'index' ? 'number' : 'text'}
                            value={value}
                            onChange={cipherTextChangeHandler(key as IFormDataKeys)}
                            placeholder={placeholderFromFormDataKey[key as IFormDataKeys]}
                        />
                    )
                })}

                <Button disabled={!connected} onClick={decrypt}>
                    {!connected ? 'Connect wallet first' : 'Decrypt'}
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

import { FC, useCallback, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { cn } from '@bem-react/classname'
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useConnect, useRecords } from 'aleo-hooks'

import './records.scss'

const CnRecords = cn('records')

export const Records: FC = () => {
    const [program, setProgram] = useState('credits.aleo')
    const { requestRecords, records, loading, error } = useRecords({ enabled: false, program })
    const { connected } = useConnect()

    const programChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setProgram(e.target.value)
    }, [])

    const submit = useCallback(() => {
        requestRecords()
    }, [requestRecords])

    return (
        <div className={CnRecords()}>
            <h2>Records</h2>

            <div className={CnRecords('values')}>
                <div className={CnRecords('valuesItem')}>Loading: {JSON.stringify(loading)}</div>
                <div className={CnRecords('valuesItem')}>Error: {error?.message}</div>
                <div className={CnRecords('valuesItem')}>Records:</div>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                    {JSON.stringify(records, null, 2)}
                </SyntaxHighlighter>
            </div>

            <div>
                <Input
                    value={program}
                    onChange={programChangeHandler}
                    placeholder={'Enter program'}
                />

                <Button disabled={!connected} onClick={submit}>
                    {!connected ? 'Connect wallet first' : 'Request records'}
                </Button>
            </div>

            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`import { FC, useCallback, useState } from 'react'
import { Button } from '../button'
import { Input } from '../input'
import { cn } from '@bem-react/classname'
import { useConnect, useRecords } from 'aleo-hooks'

import './records.scss'

const CnRecords = cn('records')

export const Records: FC = () => {
    const [program, setProgram] = useState('credits.aleo')
    const { requestRecords, records, loading, error } = useRecords({ enabled: false, program })
    const { connected } = useConnect()

    const programChangeHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setProgram(e.target.value)
    }, [])

    const submit = useCallback(() => {
        requestRecords()
    }, [requestRecords])

    return (
        <div className={CnRecords()}>
            <h2>Records</h2>

            <div className={CnRecords('values')}>
                <div className={CnRecords('valuesItem')}>Loading: {JSON.stringify(loading)}</div>
                <div className={CnRecords('valuesItem')}>Error: {error?.message}</div>
                <div className={CnRecords('valuesItem')}>Records:</div>
                <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                    {JSON.stringify(records, null, 2)}
                </SyntaxHighlighter>
            </div>

            <div>
                <Input
                    value={program}
                    onChange={programChangeHandler}
                    placeholder={'Enter program'}
                />

                <Button disabled={!connected} onClick={submit}>
                    {!connected ? 'Connect wallet first' : 'Request records'}
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

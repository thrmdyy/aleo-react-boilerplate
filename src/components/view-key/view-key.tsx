import { cn } from '@bem-react/classname'
import { useConnect, useViewKey } from 'aleo-hooks'
import { Button } from '../button'

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import './view-key.scss'

SyntaxHighlighter.registerLanguage('jsx', jsx)

const CnViewKey = cn('viewKey')

export const ViewKey = () => {
    const { connected } = useConnect()
    const { viewKey, loading, error, requestViewKey } = useViewKey()

    return (
        <div className={CnViewKey()}>
            <h2>View key</h2>

            <div className={CnViewKey('values')}>
                <div className={CnViewKey('valuesItem')}>View key: {viewKey}</div>
                <div className={CnViewKey('valuesItem')}>Loading: {String(loading)}</div>
                {error && (
                    <div className={CnViewKey('valuesItem')}>Error: {(error as any).message}</div>
                )}
            </div>

            <Button onClick={requestViewKey} disabled={!connected}>
                {!connected ? 'Connect wallet first' : 'Request view key'}
            </Button>

            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                {`import { cn } from '@bem-react/classname'
import { useConnect, useViewKey } from 'aleo-hooks'
import { Button } from '../button'

import './view-key.scss'

const CnViewKey = cn('viewKey')

export const ViewKey = () => {
    const { connected } = useConnect()
    const { viewKey, loading, error, requestViewKey } = useViewKey()

    return (
        <div className={CnViewKey()}>
            <h2>View key</h2>

            <div className={CnViewKey('values')}>
                <div className={CnViewKey('valuesItem')}>View key: {viewKey}</div>
                <div className={CnViewKey('valuesItem')}>Loading: {String(loading)}</div>
                {error && (
                    <div className={CnViewKey('valuesItem')}>Error: {(error as any).message}</div>
                )}
            </div>

            <Button onClick={requestViewKey} disabled={!connected}>
                {!connected ? 'Connect wallet first' : 'Request view key'}
            </Button>
        </div>
    )
}
`}
            </SyntaxHighlighter>
        </div>
    )
}

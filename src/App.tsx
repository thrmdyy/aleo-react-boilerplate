import { useMemo } from 'react'
import { DecryptPermission, WalletProvider } from 'aleo-hooks'
import { LeoWalletAdapter } from '@demox-labs/aleo-wallet-adapter-leo'
import {
    Decrypt,
    ExecuteTransaction,
    Sidebar,
    ViewKey,
    SignMessage,
    Wait,
    Records,
} from './components'
import { Account } from './components/account'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import './App.css'
import { TransactionStatus } from './components/transaction-status'

SyntaxHighlighter.registerLanguage('jsx', jsx)

function App() {
    const wallets = useMemo(() => [new LeoWalletAdapter({ appName: 'Create React App' })], [])

    return (
        <WalletProvider
            decryptPermission={DecryptPermission.AutoDecrypt}
            wallets={wallets}
            autoConnect
        >
            <BrowserRouter>
                <div className="app">
                    <div className="app-left">
                        <Sidebar />
                    </div>
                    <div className="app-right">
                        <Routes>
                            <Route
                                path="/useConnect"
                                element={
                                    <>
                                        <div className="app-block">
                                            <Account />
                                            <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
                                                {`import { FC } from 'react'
import { useConnect, useDisconnect } from 'aleo-hooks'
import { LeoWalletName } from '@demox-labs/aleo-wallet-adapter-leo'
import { Button } from '../button'
import { cn } from '@bem-react/classname'

import './account.scss'

const CnAccount = cn('account')

export const Account: FC = () => {
    const { connect, connected, connecting, address } = useConnect()
    const { disconnect, disconnecting } = useDisconnect()

    const connectHandler = () => {
        connect(LeoWalletName)
    }

    return (
        <div className={CnAccount()}>
            <h2>Connect wallet</h2>
            <div className={CnAccount('status')}>
                {connected ? (
                    <p>
                        Wallet connected: <b>{address}</b>
                    </p>
                ) : (
                    <p>Wallet not connected</p>
                )}
            </div>
            {/* {error && <p>Something went wrong {JSON.stringify(error)}</p>} */}
            {connected ? (
                <Button disabled={disconnecting} onClick={disconnect}>
                    Disconnect
                </Button>
            ) : (
                <Button disabled={connecting} onClick={connectHandler}>
                    Connect Leo wallet
                </Button>
            )}
        </div>
    )
}
`}
                                            </SyntaxHighlighter>
                                        </div>
                                    </>
                                }
                            />
                            <Route
                                path="/"
                                element={
                                    <>
                                        <div className="app-block">
                                            <Account />
                                        </div>
                                        <div className="app-block">
                                            <Decrypt />
                                        </div>
                                    </>
                                }
                            />
                            <Route
                                path="/useWait"
                                element={
                                    <>
                                        <div className="app-block">
                                            <Account />
                                        </div>
                                        <div className="app-block">
                                            <Wait />
                                        </div>
                                    </>
                                }
                            />
                            <Route
                                path="/useRecords"
                                element={
                                    <>
                                        <div className="app-block">
                                            <Account />
                                        </div>
                                        <div className="app-block">
                                            <Records />
                                        </div>
                                    </>
                                }
                            />
                            <Route
                                path="/useSignMessage"
                                element={
                                    <>
                                        <div className="app-block">
                                            <Account />
                                        </div>
                                        <div className="app-block">
                                            <SignMessage />
                                        </div>
                                    </>
                                }
                            />
                            <Route
                                path="/useTransaction"
                                element={
                                    <>
                                        <div className="app-block">
                                            <Account />
                                        </div>
                                        <div className="app-block">
                                            <ExecuteTransaction />
                                        </div>
                                    </>
                                }
                            />
                            <Route
                                path="/useTransactionStatus"
                                element={
                                    <>
                                        <div className="app-block">
                                            <Account />
                                        </div>
                                        <div className="app-block">
                                            <TransactionStatus />
                                        </div>
                                    </>
                                }
                            />
                            <Route
                                path="/useViewKey"
                                element={
                                    <>
                                        <div className="app-block">
                                            <Account />
                                        </div>
                                        <div className="app-block">
                                            <ViewKey />
                                        </div>
                                    </>
                                }
                            />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </WalletProvider>
    )
}

export default App

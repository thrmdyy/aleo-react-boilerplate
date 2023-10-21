import { FC } from 'react'
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

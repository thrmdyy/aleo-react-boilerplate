import { FC } from 'react'
import { useConnect, useDisconnect } from 'aleo-hooks'
import { LeoWalletName } from '@demox-labs/aleo-wallet-adapter-leo'
import { Button } from '../button'
import { cn } from '@bem-react/classname'

const CnUseConnect = cn('useConnect')

export const UseConnect: FC = () => {
    const { connect, connected, connecting, error, address } = useConnect()
    const { disconnect, disconnecting } = useDisconnect()

    const connectHandler = () => {
        connect(LeoWalletName)
    }

    return (
        <div className={CnUseConnect()}>
            <div>
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

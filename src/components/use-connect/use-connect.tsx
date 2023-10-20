import { FC } from 'react'
import { useConnect, useDisconnect } from 'aleo-hooks'
import { LeoWalletName } from '@demox-labs/aleo-wallet-adapter-leo'

export const UseConnect: FC = () => {
    const { connect, connected, connecting, error, address } = useConnect()
    const { disconnect, disconnecting} = useDisconnect()

    const connectHandler = () => {
        connect(LeoWalletName)
    }

    return (
        <div>
            {connected && <p>Successfuly connected: {address}</p>}
            {/* {error && <p>Something went wrong {JSON.stringify(error)}</p>} */}
            {connected ? <button disabled={disconnecting} onClick={disconnect}>Disconnect</button> : <button disabled={connecting} onClick={connectHandler}>Connect Leo wallet</button>}
        </div>
    )
}

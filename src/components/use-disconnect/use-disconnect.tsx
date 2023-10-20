import { FC } from 'react'
import { useDisconnect } from 'aleo-hooks'

export const UseDisconnect: FC = () => {
    const { disconnect, disconnecting, error } = useDisconnect()

    const selectHandler = () => {
        disconnect()
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {error && <p>Something went wrong {JSON.stringify(error)}</p>}
            <button disabled={disconnecting} onClick={selectHandler}>Select Leo wallet</button>
        </div>
    )
}

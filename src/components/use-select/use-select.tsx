import { FC } from 'react'
import { useSelect } from 'aleo-hooks'
import { LeoWalletName } from '@demox-labs/aleo-wallet-adapter-leo'

export const UseSelect: FC = () => {
    const { select } = useSelect()

    const selectHandler = () => {
        select(LeoWalletName)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <button onClick={selectHandler}>Select Leo wallet</button>
        </div>
    )
}

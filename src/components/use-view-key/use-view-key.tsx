import { FC } from 'react'
import { useViewKey } from 'aleo-hooks'

export const UseViewKey: FC = () => {
    const { viewKey, requestViewKey, error, loading } = useViewKey()

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong {JSON.stringify(error)}</p>}
            {viewKey && <p>View key: {viewKey}</p>}
            <button disabled={loading} onClick={requestViewKey}>Request view key</button>
        </div>
    )
}

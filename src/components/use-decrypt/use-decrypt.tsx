import { FC } from 'react'
import { useDecrypt } from 'aleo-hooks'

export const UseDecrypt: FC = () => {
    const { decryptedText, loading, error } = useDecrypt({ cipherText: 'ciphertext1qgqtzwpwj2r0rw0md3zxlnnj9h7azun02f6tdm27u8ywxcsuw4pssp7xsp7edm749l4pd9s47wksc475dkhmjnl7yrzzylgnfyx2kfwkpqlsynj2' })

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong {JSON.stringify(error)}</p>}
            {decryptedText && <p>Decrypted text: {decryptedText}</p>}
        </div>
    )
}

import { FC } from 'react'
import { useDecrypt } from 'aleo-hooks'

export const UseDecrypt: FC = () => {
    const { decryptedText, loading, error } = useDecrypt({ cipherText: 'record1qyqsqca4xunt0wjae0wah6g80uqyvcvg5kw29pkzc4mhazpf6ga4sesfqyxx66trwfhkxun9v35hguerqqpqzqpp0dwpklmjyfgpyn0zzxyh0d028gtasc6wrum6ld4atzykjkzeztnjkz875exnxe4p8ve4ngxc3rgnvqvl85lu5954j27kd2aetygq5tr8l9z', tpk: '3452342847381966337599437632742987221313219365443510001278822273868373037913group', programId: 'credits.aleo', functionName: "transfer_public_to_private", index: 0 })

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {loading && <p>Loading...</p>}
            {error && <p>Something went wrong {JSON.stringify(error)}</p>}
            {decryptedText && <p>Decrypted text: {decryptedText}</p>}
        </div>
    )
}

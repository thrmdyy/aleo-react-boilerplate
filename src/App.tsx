import { useMemo } from 'react';
import { DecryptPermission, WalletProvider } from 'aleo-hooks'
import { LeoWalletAdapter } from '@demox-labs/aleo-wallet-adapter-leo'
import { UseConnect } from './components';
import { UseDecrypt } from './components/use-decrypt';
import { UseViewKey } from './components/use-view-key';

import './App.css';

function App() {
  const wallets = useMemo(() => [new LeoWalletAdapter({ appName: 'Create React App' })], [])
  
  return (
    <WalletProvider decryptPermission={DecryptPermission.AutoDecrypt} wallets={wallets} autoConnect>
      <div className="App">
        <header className="App-header">
          <UseConnect />
          {/* <UseDecrypt />
          <UseViewKey /> */}
        </header>
      </div>
    </WalletProvider>
  );
}

export default App;

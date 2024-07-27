'use client';

import { ClientSideSuspense, LiveblocksProvider} from '@liveblocks/react/suspense'
import Loader from './ui/Loader';

const Provider = ({children}: {children: React.ReactNode}) => {
  return (
    <LiveblocksProvider authEndpoint={"/api/liveblocks-auth"}
    resolveUsers={async ({userIds}) => {

    }}>
      
        <ClientSideSuspense fallback={<Loader />}>
          {children}
        </ClientSideSuspense>
      
    </LiveblocksProvider>
  )
}

export default Provider
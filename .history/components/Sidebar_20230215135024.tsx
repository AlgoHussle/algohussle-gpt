"use client"

import { useSession, signOut } from "next-auth/react";
import { useCollection } from 'react-firebase-hooks/firestore';
import NewChat from "./NewChat";


function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection()

  return (
    <div className="p-2 flex flex-col h-screen ">
      <div className="flex-1">
        <div>
            <NewChat />
            
            <div>
                {/* ModelSelection */}
            </div>

            {/* Map through the chatrows */}

        </div>
      </div>

      {session && (
          <img 
          onClick={() => signOut()}
          src={session.user?.image!} 
          alt="Profile Pic"
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2
      hover:placeholder-opacity-50"
      />
    )}
    </div>
  );
}

export default SideBar;

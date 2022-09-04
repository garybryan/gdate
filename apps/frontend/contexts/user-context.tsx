import { createContext, useContext, useState } from 'react';

import { Profile } from '../types/profile';

// TODO avoid exporting this and find a better way to do tests.
export const UserContext = createContext<{
  user: Profile;
  setUser: (user: Profile) => void;
}>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<Profile | null>(null);
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export { UserProvider, useUser };

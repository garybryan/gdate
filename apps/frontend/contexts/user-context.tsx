import { createContext, useState } from 'react';

import { Profile } from '../types/profile';

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

export { UserProvider };

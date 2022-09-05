import { useEffect } from 'react';

import SwipeInterface from '../../components/swipe-interface/swipe-interface';
import { useUser } from '../../contexts/user-context';
import getProfileQueue from '../../queue/get-profile-queue/get-profile-queue';

import { Profile } from '../../types/profile';

interface SwipeProps {
  profileQueue: Profile[];
}

export function Swipe({ profileQueue }: SwipeProps) {
  const { setUser } = useUser();
  useEffect(() => {
    setUser({
      name: 'Tester',
      age: 22,
      photo: 'richard.jpg',
    });
  });
  return <SwipeInterface profileQueue={profileQueue} />;
}

export async function getServerSideProps() {
  const profileQueue = await getProfileQueue();
  return {
    props: { profileQueue },
  };
}

export default Swipe;

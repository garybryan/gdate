import SwipeInterface from '../../components/swipe-interface/swipe-interface';
import { useFakeUser } from '../../hooks/fake-user/fake-user';
import getProfileQueue from '../../queue/get-profile-queue/get-profile-queue';

import { Profile } from '../../types/profile';

interface SwipeProps {
  profileQueue: Profile[];
}

export function Swipe({ profileQueue }: SwipeProps) {
  useFakeUser();
  return <SwipeInterface profileQueue={profileQueue} />;
}

export async function getServerSideProps() {
  const profileQueue = await getProfileQueue();
  return {
    props: { profileQueue },
  };
}

export default Swipe;

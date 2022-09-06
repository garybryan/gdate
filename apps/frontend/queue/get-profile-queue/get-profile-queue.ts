import getProfiles from '../../api/get-profiles/get-profiles';

import { Profile } from '../../types/profile';

export default async function getProfileQueue(): Promise<Profile[]> {
  const profiles = await getProfiles();

  return profiles;
}

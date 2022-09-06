import getProfiles from '../../api/get-profiles/get-profiles';

import { Profile } from '../../types/profile';

function calculateAttractiveness(profile: Profile): number {
  return (
    profile.height +
    profile.income +
    (profile.name.toUpperCase() === 'GARY' ? 100 : -100)
  );
}

export default async function getProfileQueue(): Promise<Profile[]> {
  const profiles = await getProfiles();

  const scores = new Map(
    profiles.map((profile) => [profile.id, calculateAttractiveness(profile)])
  );

  return profiles.sort((p1, p2) => scores.get(p2.id) - scores.get(p1.id));
}

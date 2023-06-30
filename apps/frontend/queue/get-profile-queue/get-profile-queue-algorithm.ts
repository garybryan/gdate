import getProfiles from '../../api/get-profiles/get-profiles';

import { Profile } from '../../types/profile';

function calculateAttractiveness(profile: Profile): number {
  // This is the live-coding part: implement an algorithm to determine
  // the attractiveness of a profile.
  return profile.id;
}

export default async function getProfileQueue(): Promise<Profile[]> {
  const profiles = await getProfiles();

  const scores = new Map(
    profiles.map((profile) => [profile.id, calculateAttractiveness(profile)])
  );

  return profiles.sort((p1, p2) => scores.get(p2.id) - scores.get(p1.id));
}

import { Profile } from '../../types/profile';

export default async function getProfiles(): Promise<Profile[]> {
  const { profiles } = await import('../../fixtures/test-profiles');
  return profiles;
}

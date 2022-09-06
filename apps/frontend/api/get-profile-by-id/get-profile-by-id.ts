import { Profile } from '../../types/profile';

export default async function getProfileById(id: Profile['id']): Promise<Profile | undefined> {
  const { profiles } = await import('../../fixtures/test-profiles');
  return profiles.find((profile: Profile) => profile.id === id);
}

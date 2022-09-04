export default async function getProfiles() {
  const { profiles } = await import('../../fixtures/test-profiles');
  return profiles;
}

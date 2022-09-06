import getProfileById from './get-profile-by-id';
import testProfiles from '../../fixtures/test-profiles';

describe('getProfileById', () => {
  it('gets test profiles', async () => {
    const id = 'b8bc8926-85c8-4107-a802-403dbfa439a0';
    const profile = await getProfileById(id);

    expect(profile).toStrictEqual(testProfiles.profiles[1]);
  });
});

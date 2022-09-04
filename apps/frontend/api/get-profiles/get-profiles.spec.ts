import getProfiles from './get-profiles';
import testProfiles from '../../fixtures/test-profiles';

describe('getProfiles', () => {
  it('gets test profiles', async () => {
    const profiles = await getProfiles();

    expect(profiles).toStrictEqual(testProfiles.profiles);
  })
});

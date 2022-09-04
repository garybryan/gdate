import getProfileQueue from './get-profile-queue';

describe('getProfileQueue', () => {
  it('gets queue of profiles', async () => {
    const expectedProfileQueue = [
      {
        name: 'Some loser',
        photo: 'richard.jpg',
        age: 29,
      },
      {
        name: 'Elrich',
        photo: 'elrich.jpg',
        age: 37,
      },
      {
        name: 'Gary',
        photo: 'lambo.jpg',
        age: 35,
      },
      {
        name: 'Dinesh',
        photo: 'dinesh.jpg',
        age: 33,
      },
    ];

    const profileQueue = await getProfileQueue();

    expect(profileQueue).toStrictEqual(expectedProfileQueue);
  });
});

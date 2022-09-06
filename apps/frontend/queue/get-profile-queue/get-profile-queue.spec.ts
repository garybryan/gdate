import getProfileQueue from './get-profile-queue';

describe('getProfileQueue', () => {
  it('gets queue of profiles', async () => {
    const expectedProfileQueue = [
      {
        id: '185e62e9-1303-4f49-8056-8b40b0b35bf8',
        name: 'Some loser',
        photo: 'richard.jpg',
        age: 29,
        height: 175,
        income: -20,
      },
      {
        id: 'b8bc8926-85c8-4107-a802-403dbfa439a0',
        name: 'Elrich',
        photo: 'elrich.jpg',
        age: 37,
        height: 180,
        income: 50,
      },
      {
        id: 'f35280d1-499d-41c8-b395-fdbe4f4a5d56',
        name: 'Gary',
        photo: 'lambo.jpg',
        age: 35,
        height: 193,
        income: 1000,
      },
      {
        id: 'f16bc3ab-c36d-4435-bda2-1337bb3f987c',
        name: 'Dinesh',
        photo: 'dinesh.jpg',
        age: 33,
        height: 170,
        income: 200,
      },
    ];

    const profileQueue = await getProfileQueue();

    expect(profileQueue).toStrictEqual(expectedProfileQueue);
  });
});

import getMessages from './get-messages';

describe('getMessages', () => {
  it('gets fake messages', async () => {
    const expectedMessages = [
      {
        isFromUser: false,
        content: "Hey! Lookin' good 😉",
      },
      {
        isFromUser: false,
        content: 'Wanna meet up?!',
      },
    ];

    const messages = await getMessages();

    expect(messages).toStrictEqual(expectedMessages);
  });
});

import { GetServerSideProps } from 'next';

import getProfileById from '../../api/get-profile-by-id/get-profile-by-id';

import FakeMessenger from '../../components/fake-messenger/fake-messenger';

import { Profile } from '../../types/profile';

interface MessagesProps {
  correspondent: Profile;
}

export function Messages({ correspondent: { name, photo } }: MessagesProps) {
  return <FakeMessenger correspondentName={name} correspondentPhoto={photo} />;
}

export default Messages;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { profileId } = context.query;
  const profile = await getProfileById(profileId as string);

  return {
    props: { correspondent: profile } ,
  };
}

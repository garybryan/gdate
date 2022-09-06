import TEST_USER from '../../fixtures/test-user';

import FakeMessenger from '../../components/fake-messenger/fake-messenger';

import { Profile } from '../../types/profile';

interface MessagesProps {
  correspondent: Profile;
}

export function Messages({ correspondent: { name, photo } }: MessagesProps) {
  return <FakeMessenger correspondentName={name} correspondentPhoto={photo} />;
}

export default Messages;

export async function getServerSideProps() {
  // TODO real user based on page
  return {
    props: { correspondent: TEST_USER },
  };
}

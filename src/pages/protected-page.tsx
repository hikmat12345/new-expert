const { getSession } = require("next-auth/client");

import { GetServerSideProps } from "next";

interface Props {
  session: {
    user: {
      id: string;
    };
  };
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default function ProtectedPage({ session }: Props) {
  return (
    <div>
      <p>User ID: {session.user.id}</p>
    </div>
  );
}

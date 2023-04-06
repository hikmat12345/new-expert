import {getSession} from "next-auth/react";

import { GetServerSideProps } from "next";

interface Props {
  session: {
    user: {
      id: string;
    };
  };
}
export const getServerSideProps: GetServerSideProps<any> = async (
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


export default function ProtectedPage({ session }: any) {
  return (
    <div>
      <p>User ID: {session.user.id}</p>
    </div>
  );
}


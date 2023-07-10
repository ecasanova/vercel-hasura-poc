
import styles from '@/styles/Home.module.css'
import {gql, useQuery} from "@apollo/client";
import client from "../apollo-client";

const QUERY = gql`
  query GetUser {
    users {
      id
      email
      password
    }
  }
`;

export async function getStaticProps() {
  const {data} = await client.query({
    query: QUERY,
  });

  return {
    props: {
      users: data.users,
    },
    revalidate: 10,
  };
}

export default function Home({users}: { users: any}) {

  return (
    <table cellPadding={10} cellSpacing={0} border={1} width={"100%"}>
      <tr>
        <th>ID</th>
        <th>Email</th>
        <th>Password</th>
      </tr>
      {users && users.map((user: any) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
        </tr>
      ))}
    </table>
  );
}
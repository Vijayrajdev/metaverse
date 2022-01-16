import Head from "next/head";
import { useMoralis } from "react-moralis";
import Login from "../components/Login";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div>
      <Head>
        <title>Metaverse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="logo.svg" />
      </Head>
      <h1>Welcome</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

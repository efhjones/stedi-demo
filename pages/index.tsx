import type { NextPage } from "next";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { Main, Nav } from "../components";
import SlideOutAvatar from "../components/SlideOutAvatar";

const Home: NextPage = () => {
  return (
    <RecoilRoot>
      <Head>
        <title>Stedi Demo</title>
        <meta
          name="description"
          content="Built to showcase an ABC testing feature I implemented."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <SlideOutAvatar />
      <main>
        <Main />
      </main>
    </RecoilRoot>
  );
};

export default Home;

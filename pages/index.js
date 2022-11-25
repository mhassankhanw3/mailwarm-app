import Head from "next/head";
import AllFiles from "../components/AllFiles";


export default function Home() {
 
  return (
    <div>
      <Head>
        <title>Warmup Your email &amp; Never land in Spam - MailWarm.io</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <AllFiles />
    </div>
  );
}

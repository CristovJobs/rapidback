import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {useAuth} from "../lib/auth";

const  Home = () => {

  const auth = useAuth();
  return <div className={styles.container}>
  <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main className={styles.main}>
    <h1 className={styles.title}>
     RapidBack for life
    </h1>
     <p>
    <small><b>{auth?.user?.displayName}</b></small>
    </p>

    <button onClick={(e) => auth.signWithGithub()}>signIn With Github</button>  {/* logar na sessao */}

    {auth?.user && (
       <button onClick={(e) => auth.signout()}>Sign Out</button> 
    )} {/* deslogar da sessao */}
   
</main>
</div>
};


export default Home

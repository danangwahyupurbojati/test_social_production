/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


export default function Home() {
    const [socialData, setSocialData] = useState(null)

    const responseFacebook = (response) => {
        console.log('fb', response);
        if (response.status !== 'unknown') {
            const data = {
                name: response.name,
                email: response.email,
                userId: response.id,
                token: response.accessToken,
                method: 'facebook',
            }
            setSocialData(data);
        }
    }

    const responseGoogle = (response) => {
        console.log('gg', response);
        if (!response.error) {
            const data = {
                name: response.profileObj.name,
                email: response.profileObj.email,
                userId: response.profileObj.googleId,
                token: response.accessToken,
                method: 'google',
            }
            setSocialData(data);
        }
    }

    return (
        <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <div style={{ border: '1px solid red', padding: '8px 16px', borderRadius: '6px', color: 'red' }}>
                <a href="/">Dev</a>
                <a href="/production">prod Dev</a>
                <a href="/local">local Dev</a>
            </div>
            <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
            </p>

            <div style={{ border: '1px solid red', padding: '8px 16px', borderRadius: '6px', color: 'red' }}>
                <a href="/">Refresh Dev</a>
            </div>

            {
                socialData ? (
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h2>Name: {socialData.name}</h2>
                            <p>Email: {socialData.email}</p>
                            <p>UserId: {socialData.userId}</p>
                            <p>Token: {socialData.token}</p>
                            <p>Method: {socialData.method}</p>
                        </div>
                    </div>
                ) : (
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <h2>Google Login senheng dev live mode &rarr;</h2>
                            <div>
                            <GoogleLogin
                                clientId="707295419452-2q4t3cicr5fus4amd7cfe7ibv8knmk6b.apps.googleusercontent.com"
                                buttonText="Login with Google"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                            </div>
                        </div>
                        <div className={styles.card}>
                            <h2>facebook live test</h2>
                            <div>
                                <FacebookLogin
                                    appId="378702040579164"
                                    fields="name,email"
                                    callback={responseFacebook} 
                                />
                            </div>
                        </div>
                    </div>

                )
            }
        </main>

        <footer className={styles.footer}>
            <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            Powered by{' '}
            <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
            </a>
        </footer>
        </div>
    )
}

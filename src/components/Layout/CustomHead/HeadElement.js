import Head from 'next/head'
import React from 'react'

const HeadElement = ({ subTitle }) => {
    return (
        <Head>
            <title key="title">
                {subTitle
                    ? `E-Commerce ${subTitle && ' - ' + subTitle}`
                    : 'E-Commerce'}
            </title>

            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default HeadElement
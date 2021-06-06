import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Avatar, Button, Grid, Typography } from '@material-ui/core'
import { Person } from '@material-ui/icons'
import { useRouter } from 'next/router'
import { useAuth } from '../../contexts/AuthContext'
import Layout from '../Layout/Layout'

export default function Profile() {
    const { currentUser, logout } = useAuth()
    const [error, setError] = useState()
    const router = useRouter()

    useEffect(() => {
        if (!currentUser) {
            router.push("/")
        }
    }, [])

    async function handlelogout() {
        setError('')

        try {
            await logout()
            await router.push("/login")
        } catch {
            setError('Fail to log out')
        }
    }

    if (currentUser) {
        return (
            <Layout>
                <Head>
                    <title>{currentUser.email}</title>
                </Head>
                {error && <Alert severity="error" style={{ width: '100%', marginBottom: '10px' }}>{error}</Alert>}
                <Grid container alignItems="center" justify="center" style={{ margin: '10px 0' }}>
                    <Avatar>
                        <Person />
                    </Avatar>
                </Grid>
                <Typography align="center">
                    <Button>CURRENT USER: {currentUser.email}</Button>
                </Typography>
                <Grid container justify="center">
                    <Button
                        onClick={handlelogout}
                        size="small"
                        variant="contained"
                        color="secondary"
                        style={{ width: '300px', marginTop: '8px' }}
                    >
                        Sign Out
                    </Button>
                </Grid>
            </Layout >
        )
    }
    return <></>
}

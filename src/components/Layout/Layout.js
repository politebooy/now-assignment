import { AppBar, Button, Grid, Toolbar } from '@material-ui/core'
import React from 'react'
import Link from 'next/link'
import styles from './layout.module.css'
import { useAuth } from '../../contexts/AuthContext'
import { Person } from '@material-ui/icons'

export default function Layout({ children }) {
    const { currentUser } = useAuth()

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <Link href="/">
                                <a><Button color="inherit">now shop</Button></a>
                            </Link>
                        </Grid>
                        <Grid item className={styles.navItem}>
                            {currentUser ? (
                                <>
                                    <Link href="/profile">
                                        <a><Button color="inherit">Profile</Button></a>
                                    </Link>
                                    <Link href="/profile">
                                        <a><Button startIcon={<Person />} color="inherit">{ }</Button></a>
                                    </Link>
                                </>
                            ) : (
                                <Link href="/login">
                                    <a><Button color="inherit">Log In</Button></a>
                                </Link>
                            )}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {children}
        </>
    )
}

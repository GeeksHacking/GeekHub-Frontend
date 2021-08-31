import * as React from "react";
import {ReactElement} from "react";
import type {NextPage} from "next";
import Link from "next/link"

import {UserProfile, useUser} from '@auth0/nextjs-auth0';

import {Box, Button, Flex, Heading, Spacer, Spinner, useToast} from "@chakra-ui/react";

const UserBox = ({user}: { user?: UserProfile }): ReactElement => {
    if (user) {
        return (
            <Link href={"/app"}>
                <Button colorScheme={"teal"}>Web app</Button>
            </Link>
        )
    }

    return (
        <>
            <Link href={"/api/auth/login"}>
                <Button mr={4}>Log in</Button>
            </Link>
            <Link href={"/api/auth/login"}>
                <Button colorScheme={"teal"}>
                    Sign Up
                </Button>
            </Link>
        </>
    )
}

const LandingNavBar: NextPage = () => {
    const toast = useToast()
    const {user, error, isLoading} = useUser()

    if (error) {
        toast({
            title: "An error occurred"
        })
    }

    return (
        <Flex p={"3"} align="center">
            <Box>
                <Heading size={"md"}>GeekHub</Heading>
            </Box>
            <Spacer/>
            <Box>
                {isLoading ? (
                    <Spinner/>
                ) : (
                    <UserBox user={user}/>
                )}
            </Box>
        </Flex>
    );
};

export default LandingNavBar;

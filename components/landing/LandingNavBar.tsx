import * as React from "react";
import type {NextPage} from "next";
import Link from "next/link"

import {useAuth0} from '@auth0/auth0-react';

import {Box, Button, Flex, Heading, Spacer} from "@chakra-ui/react";
import {useToken} from "../app/TokenContext";

const LandingNavBar: NextPage = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0()

    return (
        <Flex p={"3"} align="center">
            <Box>
                <Heading size={"md"}>GeekHub</Heading>
            </Box>
            <Spacer/>
            <Box>
                {isAuthenticated ? (
                    <Link href={"/app"} passHref>
                        <Button colorScheme={"teal"}>Web app</Button>
                    </Link>
                ) : (
                    <>
                        <Button mr={4} onClick={loginWithRedirect}>Log in</Button>
                        <Button colorScheme={"teal"} onClick={loginWithRedirect}>
                            Sign Up
                        </Button>
                    </>
                )}
            </Box>
        </Flex>
    );
};

export default LandingNavBar;

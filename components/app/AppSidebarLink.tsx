import * as React from "react";
import {ReactElement} from "react";

import Link from "next/link"
import {useRouter} from "next/router";

import {Box, Text, useColorModeValue} from "@chakra-ui/react";

export interface AppSidebarLinkProps {
    children: string;
    to: string;
}

export default function AppSidebarLink(props: AppSidebarLinkProps): ReactElement {
    const {to, children} = props;

    const matchBg = useColorModeValue("teal.100", "teal.700");
    const {pathname} = useRouter();

    return (
        <Link href={to} passHref>
            <Box bg={pathname === to ? matchBg : "transparent"} py={2} px={3} mt={2} rounded={"base"}
                 transition={"0.2s"}>
                <Text>{children}</Text>
            </Box>
        </Link>
    );
}

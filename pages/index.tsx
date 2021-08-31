import * as React from "react";
import type {NextPage} from 'next'

import {Flex} from "@chakra-ui/react";
import LandingNavBar from "../components/landing/LandingNavBar";

const Index: NextPage = () => {
    return (
        <Flex direction={"column"}>
            <LandingNavBar/>
        </Flex>
    );
};

export default Index

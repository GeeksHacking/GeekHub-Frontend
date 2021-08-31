import * as React from "react";
import { ReactElement, useState } from "react";

import Link from "next/link"

import {
    Box,
    Button,
    Flex,
    Heading,
    IconButton,
    Spacer,
    useColorMode,
    useColorModeValue
} from "@chakra-ui/react";
import { ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

import CreateProjectModal from "./project/CreateProjectModal";

const AppNavBar = (): ReactElement => {
    const { colorMode, toggleColorMode } = useColorMode();
    const borderBottom = useColorModeValue("gray.300", "gray.700");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <Flex p={"3"} align="center" borderBottomStyle={"solid"} borderBottomColor={borderBottom} borderBottomWidth={2}>
            <CreateProjectModal isOpen={isModalOpen} onClose={closeModal}/>
            <Box>
                <Heading size={"md"}>GeekHub</Heading>
            </Box>
            <Spacer/>
            <Box>
                <IconButton
                    mr={3}
                    aria-label={"toggle"}

                    icon={colorMode === "dark" ? <SunIcon/> : <MoonIcon/>}
                    onClick={toggleColorMode}
                />
                <Button mr={3} colorScheme={"teal"} onClick={openModal}>
                    Create project
                </Button>
            </Box>
        </Flex>
    );
};

export default AppNavBar;

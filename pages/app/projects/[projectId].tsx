import * as React from "react";
import type {NextPage} from "next";

import {Flex, Spinner, useToast} from "@chakra-ui/react";
import {useRouter} from "next/router"

import useProjects from "../../../api/swr/projects/useProjects";
import AppNavBar from "../../../components/app/AppNavBar";
import AppSidebar from "../../../components/app/AppSidebar";
import ProjectTabBar from "../../../components/app/project/ProjectTabBar";
import ProjectOverview from "../../../components/app/project/ProjectOverview";
import TicketList from "../../../components/app/ticket/TicketList";

const Project: NextPage = () => {
    const {query: {projectId}} = useRouter();

    const toast = useToast();
    const {data, error} = useProjects();

    if (error) {
        toast({
            status: "error",
            isClosable: true,
            title: "Error",
            description: "An error occurred while fetching your projects"
        });
        return null;
    }

    if (!data) {
        return <Spinner/>;
    }

    const project = data.data.find(p => p.id.toString() === projectId);

    if (!project) {
        toast({
            status: "error",
            isClosable: true,
            title: "Error",
            description: "An error occurred while fetching your projects"
        });
        return null;
    }

    return (
        <>
            <AppNavBar/>
            <Flex style={{flex: 1}}>
                <AppSidebar/>
                <ProjectTabBar
                    overview={<ProjectOverview project={project}/>}
                    lists={<TicketList project={project}/>}
                    kanban={<div/>}
                    calendar={<div/>}
                />
            </Flex>
        </>
    )
}

export default Project

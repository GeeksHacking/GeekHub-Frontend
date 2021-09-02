import Project from "../../models/project";
import apiClient from "./base";

import {CreateProjectRequest} from "../dtos/projects";

export async function create(project: CreateProjectRequest, token: string): Promise<Project> {
    return await apiClient.post("Projects", {
        json: project,
        headers: {Authorization: `Bearer ${token}`}
    }).json<Project>();
}

import * as projects from '../helper/ProjectsWrapper';

export const GET_PROJECT = 'GET_PROJECT';
export const GET_PROJECTS = 'GET_PROJECTS';

export function getProject(pathParam) {
    let project;
    if (pathParam === 'africa') {
        project = projects.africa;
    } else if (pathParam === 'caribbean') {
        project = projects.caribbean;
    } else if (pathParam === 'asia') {
        project = projects.asia;
    } else {
        project = projects.baltic;
    }

    return {
        type: GET_PROJECT,
        project: project
    };
}

export function getProjects() {
    let allProjects = [projects.baltic, projects.africa, projects.caribbean, projects.asia];

    return {
        type: GET_PROJECTS,
        projects: allProjects
    };
}

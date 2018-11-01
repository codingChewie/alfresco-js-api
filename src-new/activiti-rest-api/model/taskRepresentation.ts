/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { LightGroupRepresentation } from './lightGroupRepresentation';
import { LightUserRepresentation } from './lightUserRepresentation';
import { RestVariable } from './restVariable';

export class TaskRepresentation {
    adhocTaskCanBeReassigned?: boolean;
    assignee?: LightUserRepresentation;
    category?: string;
    created?: Date;
    description?: string;
    dueDate?: Date;
    duration?: number;
    endDate?: Date;
    executionId?: string;
    formKey?: string;
    id?: string;
    initiatorCanCompleteTask?: boolean;
    involvedGroups?: any;
    involvedPeople?: any;
    managerOfCandidateGroup?: boolean;
    memberOfCandidateGroup?: boolean;
    memberOfCandidateUsers?: boolean;
    name?: string;
    parentTaskId?: string;
    parentTaskName?: string;
    priority?: number;
    processDefinitionCategory?: string;
    processDefinitionDeploymentId?: string;
    processDefinitionDescription?: string;
    processDefinitionId?: string;
    processDefinitionKey?: string;
    processDefinitionName?: string;
    processDefinitionVersion?: number;
    processInstanceId?: string;
    processInstanceName?: string;
    processInstanceStartUserId?: string;
    taskDefinitionKey?: string;
    variables?: any;
}
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

import { ResultListDataRepresentationLightGroupRepresentation } from '../model/resultListDataRepresentationLightGroupRepresentation';
import { ResultListDataRepresentationLightUserRepresentation } from '../model/resultListDataRepresentationLightUserRepresentation';
import { BaseApi } from './base.api';

/**
* Groups service.
* @module GroupsApi
*/
export class GroupsApi extends BaseApi {
    /**
    * Query groups
    * 
    * 
    * @param filter filter
    * @param groupId groupId
    * @param externalId externalId
    * @param externalIdCaseInsensitive externalIdCaseInsensitive
    * @param tenantId tenantId
    */
    getGroupsUsingGET(opts: any): Promise<ResultListDataRepresentationLightGroupRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };
        let queryParams = {
            'filter': opts['filter'],
            'groupId': opts['groupId'],
            'externalId': opts['externalId'],
            'externalIdCaseInsensitive': opts['externalIdCaseInsensitive'],
            'tenantId': opts['tenantId'],
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/groups', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List members of a group
        * 
        * 
        * @param groupId groupId
        */
    getUsersForGroupUsingGET(groupId: number): Promise<ResultListDataRepresentationLightUserRepresentation> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in getUsersForGroupUsingGET");
        }

        let pathParams = {
            'groupId': groupId
        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/enterprise/groups/{groupId}/users', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}

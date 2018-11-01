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

import { DiscoveryEntry } from '../model/discoveryEntry';
import { ModelError } from '../model/modelError';
import { BaseApi } from './base.api';

/**
* Discovery service.
* @module DiscoveryApi
*/
export class DiscoveryApi extends BaseApi {
    /**
    * Get repository information
    * 
    * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Retrieves the capabilities and detailed version information from the repository.

    */
    getRepositoryInformation(): Promise<DiscoveryEntry> {

        let postBody = null;

        let pathParams = {

        };
        let queryParams = {
        };
        let collectionQueryParams = {
        };
        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = [];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/discovery', 'GET',
            pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}

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

import { AlfrescoApiClient } from '../../../../alfrescoApiClient';
import { Error } from '../model/Error';
import { FilePlanComponentBodyUpdate } from '../model/FilePlanComponentBodyUpdate';
import { RMNodeBodyCreateWithRelativePath } from '../model/RMNodeBodyCreateWithRelativePath';
import { RecordCategoryChildEntry } from '../model/RecordCategoryChildEntry';
import { RecordCategoryChildPaging } from '../model/RecordCategoryChildPaging';
import { RecordCategoryEntry } from '../model/RecordCategoryEntry';

/**
 * Recordcategories service.
 * @module api/RecordCategoriesApi
 * @version 0.1.0
 */

/**
 * Constructs a new RecordCategoriesApi.
 * @alias :api/RecordCategoriesApi
 * @class
 * @param {:ApiClient} apiClient Optional API client implementation to use,
 * default to {@link module:ApiClient#instance} if unspecified.
 */
export class RecordCategoriesApi {

    apiClient: AlfrescoApiClient;

    constructor(apiClient?: AlfrescoApiClient) {
        this.apiClient = apiClient || new AlfrescoApiClient();
    }

    /**
     * Create a record category or a record folder
     * Create a record category or a record folder as a primary child of **recordCategoryId**.  You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then the API method tries to create a unique name using an integer suffix.  This API method also supports record category or record folder creation using application/json.  You must specify at least a **name** and **nodeType**.  You can create a category like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Record Category\&quot;,   \&quot;nodeType\&quot;:\&quot;rma:recordCategory\&quot; } &#x60;&#x60;&#x60;  You can create a record folder like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Record Folder\&quot;,   \&quot;nodeType\&quot;:\&quot;rma:recordFolder\&quot; } &#x60;&#x60;&#x60;  You can create a record folder inside a container hierarchy (applies to record categories as well): &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Fileplan Component\&quot;,   \&quot;nodeType\&quot;:\&quot;rma:recordFolder\&quot;,   \&quot;relativePath\&quot;:\&quot;X/Y/Z\&quot; } &#x60;&#x60;&#x60; The **relativePath** specifies the container structure to create relative to the node (record category or record folder). Containers in the **relativePath** that do not exist are created before the node is created. The container type is decided considering the type of the parent container and the type of the node to be created.  You can set properties when creating a record category (applies to record folders as well): &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Record Category\&quot;,   \&quot;nodeType\&quot;:\&quot;rma:recordCategory\&quot;,   \&quot;properties\&quot;:   {     \&quot;rma:vitalRecordIndicator\&quot;:\&quot;true\&quot;,     \&quot;rma:reviewPeriod\&quot;:\&quot;month|1\&quot;   } } &#x60;&#x60;&#x60;  Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.  **Note:** You can create more than one child by specifying a list of nodes in the JSON body. For example, the following JSON body creates a record category and a record folder inside the specified **categoryId**: &#x60;&#x60;&#x60;JSON [   {     \&quot;name\&quot;:\&quot;My Record Category\&quot;,     \&quot;nodeType\&quot;:\&quot;rma:recordCategory\&quot;   },   {     \&quot;name\&quot;:\&quot;My Record Folder\&quot;,     \&quot;nodeType\&quot;:\&quot;rma:recordFolder\&quot;   } ] &#x60;&#x60;&#x60; If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60;
     * @param {string} recordCategoryId The identifier of a record category.
     * @param {RMNodeBodyCreateWithRelativePath} nodeBodyCreate The node information to create.
     * @param {Object} opts Optional parameters
     * @param {boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
     * @param {string[]} opts.include Returns additional information about the record category. Any optional field from the response model can be requested. For example: * allowableOperations * hasRetentionSchedule * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordCategoryChildEntry} and HTTP response
     */
    createRecordCategoryChild = function(recordCategoryId, nodeBodyCreate, opts) {
        opts = opts || {};
        let postBody = nodeBodyCreate;

        // verify the required parameter 'recordCategoryId' is set
        if (recordCategoryId === undefined || recordCategoryId === null) {
            throw new Error("Missing param 'recordCategoryId' in createRecordCategoryChild");
        }

        // verify the required parameter 'nodeBodyCreate' is set
        if (nodeBodyCreate === undefined || nodeBodyCreate === null) {
            throw new Error("Missing param 'nodeBodyCreate' in createRecordCategoryChild");
        }

        let pathParams = {
            'recordCategoryId': recordCategoryId
        };
        let queryParams = {
            'autoRename': opts['autoRename'],
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json', 'multipart/form-data'];
        let accepts = ['application/json'];
        let returnType = RecordCategoryChildEntry;

        return this.apiClient.callApi(
            '/record-categories/{recordCategoryId}/children', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Delete a record category
     * Deletes record category **recordCategoryId**.
     * @param {string} recordCategoryId The identifier of a record category.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteRecordCategory = function(recordCategoryId) {
        let postBody = null;

        // verify the required parameter 'recordCategoryId' is set
        if (recordCategoryId === undefined || recordCategoryId === null) {
            throw new Error("Missing param 'recordCategoryId' in deleteRecordCategory");
        }

        let pathParams = {
            'recordCategoryId': recordCategoryId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/record-categories/{recordCategoryId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Get a record category
     * Gets information for record category **recordCategoryId**  Mandatory fields and the record category&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} recordCategoryId The identifier of a record category.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the record category. Any optional field from the response model can be requested. For example: * allowableOperations * hasRetentionSchedule * path
     * @param {string} opts.relativePath Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordCategoryEntry} and HTTP response
     */
    getRecordCategory = function(recordCategoryId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'recordCategoryId' is set
        if (recordCategoryId === undefined || recordCategoryId === null) {
            throw new Error("Missing param 'recordCategoryId' in getRecordCategory");
        }

        let pathParams = {
            'recordCategoryId': recordCategoryId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'relativePath': opts['relativePath'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = RecordCategoryEntry;

        return this.apiClient.callApi(
            '/record-categories/{recordCategoryId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * List record category&#39;s children
     * Returns a list of record categories and/or record folders.  Minimal information for each child is returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.  The list of child nodes includes primary children and secondary children, if there are any.
     * @param {string} recordCategoryId The identifier of a record category.
     * @param {Object} opts Optional parameters
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @param {string} opts.where Optionally filter the list. Here are some examples:  *   &#x60;&#x60;&#x60;where&#x3D;(nodeType&#x3D;&#39;rma:recordFolder&#39;)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(nodeType&#x3D;&#39;rma:recordCategory&#39;)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(isRecordFolder&#x3D;true AND isClosed&#x3D;false)&#x60;&#x60;&#x60;
     * @param {string[]} opts.include Returns additional information about the record category child. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * hasRetentionSchedule * isClosed * isRecordCategory * isRecordFolder * path * properties
     * @param {string} opts.relativePath Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.
     * @param {boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **recordCategoryId**, or as resolved by **relativePath**.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordCategoryChildPaging} and HTTP response
     */
    listRecordCategoryChildren = function(recordCategoryId, opts) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'recordCategoryId' is set
        if (recordCategoryId === undefined || recordCategoryId === null) {
            throw new Error("Missing param 'recordCategoryId' in listRecordCategoryChildren");
        }

        let pathParams = {
            'recordCategoryId': recordCategoryId
        };
        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'where': opts['where'],
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'relativePath': opts['relativePath'],
            'includeSource': opts['includeSource'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = RecordCategoryChildPaging;

        return this.apiClient.callApi(
            '/record-categories/{recordCategoryId}/children', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };

    /**
     * Update a record category
     * Updates record category **recordCategoryId**. For example, you can rename a record category: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My new name\&quot; } &#x60;&#x60;&#x60; You can also set or update one or more properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;rma:vitalRecordIndicator\&quot;: true,        \&quot;rma:reviewPeriod\&quot;:\&quot;month|6\&quot;     } } &#x60;&#x60;&#x60; **Note:** If you want to add or remove aspects, then you must use **GET /record-categories/{recordCategoryId}** first to get the complete set of *aspectNames*.  **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.
     * @param {string} recordCategoryId The identifier of a record category.
     * @param {FilePlanComponentBodyUpdate} recordCategoryBodyUpdate The record category information to update.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the record category. Any optional field from the response model can be requested. For example: * allowableOperations * hasRetentionSchedule * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordCategoryEntry} and HTTP response
     */
    updateRecordCategory = function(recordCategoryId, recordCategoryBodyUpdate, opts) {
        opts = opts || {};
        let postBody = recordCategoryBodyUpdate;

        // verify the required parameter 'recordCategoryId' is set
        if (recordCategoryId === undefined || recordCategoryId === null) {
            throw new Error("Missing param 'recordCategoryId' in updateRecordCategory");
        }

        // verify the required parameter 'recordCategoryBodyUpdate' is set
        if (recordCategoryBodyUpdate === undefined || recordCategoryBodyUpdate === null) {
            throw new Error("Missing param 'recordCategoryBodyUpdate' in updateRecordCategory");
        }

        let pathParams = {
            'recordCategoryId': recordCategoryId
        };
        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };
        let headerParams = {};
        let formParams = {};

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = RecordCategoryEntry;

        return this.apiClient.callApi(
            '/record-categories/{recordCategoryId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    };
}

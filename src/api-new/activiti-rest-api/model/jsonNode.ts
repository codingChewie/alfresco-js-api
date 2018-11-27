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

export class JsonNode {
    array?: boolean;
    bigDecimal?: boolean;
    bigInteger?: boolean;
    binary?: boolean;
    boolean?: boolean;
    containerNode?: boolean;
    double?: boolean;
    float?: boolean;
    floatingPointNumber?: boolean;
    int?: boolean;
    integralNumber?: boolean;
    long?: boolean;
    missingNode?: boolean;
    nodeType?: JsonNode.NodeTypeEnum;
    null?: boolean;
    number?: boolean;
    object?: boolean;
    pojo?: boolean;
    short?: boolean;
    textual?: boolean;
    valueNode?: boolean;
}

export namespace JsonNode {
    export enum NodeTypeEnum {
        ARRAY = 'ARRAY',
        BINARY = 'BINARY',
        BOOLEAN = 'BOOLEAN',
        MISSING = 'MISSING',
        NULL = 'NULL',
        NUMBER = 'NUMBER',
        OBJECT = 'OBJECT',
        POJO = 'POJO',
        STRING = 'STRING'
    }
}

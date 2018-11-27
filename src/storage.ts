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

export class Storage {

    _storage: any;

    constructor() {
        if (this.supportsStorage()) {
            this._storage = window.localStorage;
        }
    }

    supportsStorage() {
        try {
            return 'sessionStorage' in window && window.sessionStorage !== null;
        } catch (e) {
            return false;
        }
    }

    setStorage(storage: any) {
        this._storage = storage;
    }

    setItem(key: string, value: any) {
        if (this.supportsStorage()) {
            this._storage.setItem(key, value);
        }
    }

    removeItem(key: string) {
        if (this.supportsStorage()) {
            this._storage.removeItem(key);
        }
    }

    getItem(key: string) {
        if (this.supportsStorage()) {
            return this._storage.getItem(key);
        }
    }
}

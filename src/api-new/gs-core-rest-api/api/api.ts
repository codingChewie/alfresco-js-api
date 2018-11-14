export * from './fileplans.api';
import { FileplansApi } from './fileplans.api';
export * from './files.api';
import { FilesApi } from './files.api';
export * from './gssites.api';
import { GssitesApi } from './gssites.api';
export * from './recordcategories.api';
import { RecordcategoriesApi } from './recordcategories.api';
export * from './recordfolders.api';
import { RecordfoldersApi } from './recordfolders.api';
export * from './records.api';
import { RecordsApi } from './records.api';
export * from './transfercontainers.api';
import { TransfercontainersApi } from './transfercontainers.api';
export * from './transfers.api';
import { TransfersApi } from './transfers.api';
export * from './unfiledcontainers.api';
import { UnfiledcontainersApi } from './unfiledcontainers.api';
export * from './unfiledrecordfolders.api';
import { UnfiledrecordfoldersApi } from './unfiledrecordfolders.api';
export const GS_CORE_APIS = [FileplansApi, FilesApi, GssitesApi, RecordcategoriesApi, RecordfoldersApi, RecordsApi, TransfercontainersApi, TransfersApi, UnfiledcontainersApi, UnfiledrecordfoldersApi];

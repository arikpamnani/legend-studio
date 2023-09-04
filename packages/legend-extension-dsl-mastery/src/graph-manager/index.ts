/**
 * Copyright (c) 2020-present, Goldman Sachs
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

export * from './DSL_Mastery_GraphManagerPreset.js';

// ---------- PACKAGEABLE ELEMENT ----------

// metamodels
export { MasterRecordDefinition } from '../graph/metamodel/pure/model/packageableElements/mastery/DSL_Mastery_MasterRecordDefinition.js';
export { DataProvider } from '../graph/metamodel/pure/model/packageableElements/mastery/DSL_Mastery_DataProvider.js';
export {
  KafkaConnection,
  FTPConnection,
  HTTPConnection,
} from '../graph/metamodel/pure/model/packageableElements/mastery/DSL_Mastery_Connection.js';

// v1 protocols
export { V1_MasterRecordDefinition } from './protocol/pure/v1/model/packageableElements/mastery/V1_DSL_Mastery_MasterRecordDefinition.js';
export { V1_DataProvider } from './protocol/pure/v1/model/packageableElements/mastery/V1_DSL_Mastery_DataProvider.js';
export {
  V1_KafkaConnection,
  V1_FTPConnection,
  V1_HTTPConnection,
} from './protocol/pure/v1/model/packageableElements/mastery/V1_DSL_Mastery_Connection.js';

// ---------- TRANSFORMATION ----------

export {
  V1_transformMasterRecordDefinition,
  V1_transformDataProvider,
  V1_transformKafkaConnection,
  V1_transformFTPConnection,
  V1_transformHTTPConnection,
} from './protocol/pure/v1/transformation/pureGraph/from/V1_DSL_Mastery_TransformerHelper.js';

export {
  V1_buildMasterRecordDefinition,
  V1_buildDataProvider,
  V1_buildKafkaConnection,
  V1_buildFTPConnection,
  V1_buildHTTPConnection,
} from './protocol/pure/v1/transformation/pureGraph/to/V1_DSL_Mastery_BuilderHelper.js';

// extension
export * from './protocol/pure/DSL_Mastery_PureProtocolProcessorPlugin_Extension.js';

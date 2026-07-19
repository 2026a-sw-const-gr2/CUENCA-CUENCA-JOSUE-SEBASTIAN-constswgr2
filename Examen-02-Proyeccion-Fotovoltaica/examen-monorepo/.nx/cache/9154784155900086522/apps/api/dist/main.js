/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(__webpack_require__(4));


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(5);
__exportStar(__webpack_require__(6), exports);
__exportStar(__webpack_require__(35), exports);
__exportStar(__webpack_require__(38), exports);
__exportStar(__webpack_require__(41), exports);
__exportStar(__webpack_require__(113), exports);
__exportStar(__webpack_require__(72), exports);


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiResponseProperty = exports.ApiPropertyOptional = exports.ApiProperty = void 0;
__exportStar(__webpack_require__(7), exports);
__exportStar(__webpack_require__(12), exports);
__exportStar(__webpack_require__(13), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(20), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(22), exports);
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(25), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(28), exports);
__exportStar(__webpack_require__(29), exports);
var api_property_decorator_1 = __webpack_require__(30);
Object.defineProperty(exports, "ApiProperty", ({ enumerable: true, get: function () { return api_property_decorator_1.ApiProperty; } }));
Object.defineProperty(exports, "ApiPropertyOptional", ({ enumerable: true, get: function () { return api_property_decorator_1.ApiPropertyOptional; } }));
Object.defineProperty(exports, "ApiResponseProperty", ({ enumerable: true, get: function () { return api_property_decorator_1.ApiResponseProperty; } }));
__exportStar(__webpack_require__(31), exports);
__exportStar(__webpack_require__(32), exports);
__exportStar(__webpack_require__(8), exports);
__exportStar(__webpack_require__(33), exports);
__exportStar(__webpack_require__(34), exports);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiBasicAuth = void 0;
const api_security_decorator_1 = __webpack_require__(8);
function ApiBasicAuth(name = 'basic') {
    return (0, api_security_decorator_1.ApiSecurity)(name);
}
exports.ApiBasicAuth = ApiBasicAuth;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiSecurity = void 0;
const lodash_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(10);
const extend_metadata_util_1 = __webpack_require__(11);
function ApiSecurity(name, requirements = []) {
    let metadata;
    if ((0, lodash_1.isString)(name)) {
        metadata = [{ [name]: requirements }];
    }
    else {
        metadata = [name];
    }
    return (target, key, descriptor) => {
        if (descriptor) {
            metadata = (0, extend_metadata_util_1.extendMetadata)(metadata, constants_1.DECORATORS.API_SECURITY, descriptor.value);
            Reflect.defineMetadata(constants_1.DECORATORS.API_SECURITY, metadata, descriptor.value);
            return descriptor;
        }
        metadata = (0, extend_metadata_util_1.extendMetadata)(metadata, constants_1.DECORATORS.API_SECURITY, target);
        Reflect.defineMetadata(constants_1.DECORATORS.API_SECURITY, metadata, target);
        return target;
    };
}
exports.ApiSecurity = ApiSecurity;


/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DECORATORS = exports.DECORATORS_PREFIX = void 0;
exports.DECORATORS_PREFIX = 'swagger';
exports.DECORATORS = {
    API_OPERATION: `${exports.DECORATORS_PREFIX}/apiOperation`,
    API_RESPONSE: `${exports.DECORATORS_PREFIX}/apiResponse`,
    API_PRODUCES: `${exports.DECORATORS_PREFIX}/apiProduces`,
    API_CONSUMES: `${exports.DECORATORS_PREFIX}/apiConsumes`,
    API_TAGS: `${exports.DECORATORS_PREFIX}/apiUseTags`,
    API_PARAMETERS: `${exports.DECORATORS_PREFIX}/apiParameters`,
    API_HEADERS: `${exports.DECORATORS_PREFIX}/apiHeaders`,
    API_MODEL_PROPERTIES: `${exports.DECORATORS_PREFIX}/apiModelProperties`,
    API_MODEL_PROPERTIES_ARRAY: `${exports.DECORATORS_PREFIX}/apiModelPropertiesArray`,
    API_SECURITY: `${exports.DECORATORS_PREFIX}/apiSecurity`,
    API_EXCLUDE_ENDPOINT: `${exports.DECORATORS_PREFIX}/apiExcludeEndpoint`,
    API_EXCLUDE_CONTROLLER: `${exports.DECORATORS_PREFIX}/apiExcludeController`,
    API_EXTRA_MODELS: `${exports.DECORATORS_PREFIX}/apiExtraModels`,
    API_EXTENSION: `${exports.DECORATORS_PREFIX}/apiExtension`
};


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extendMetadata = void 0;
__webpack_require__(5);
function extendMetadata(metadata, metakey, target) {
    const existingMetadata = Reflect.getMetadata(metakey, target);
    if (!existingMetadata) {
        return metadata;
    }
    return existingMetadata.concat(metadata);
}
exports.extendMetadata = extendMetadata;


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiBearerAuth = void 0;
const api_security_decorator_1 = __webpack_require__(8);
function ApiBearerAuth(name = 'bearer') {
    return (0, api_security_decorator_1.ApiSecurity)(name);
}
exports.ApiBearerAuth = ApiBearerAuth;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiBody = void 0;
const lodash_1 = __webpack_require__(9);
const enum_utils_1 = __webpack_require__(14);
const helpers_1 = __webpack_require__(15);
const defaultBodyMetadata = {
    type: String,
    required: true
};
function ApiBody(options) {
    const [type, isArray] = (0, helpers_1.getTypeIsArrayTuple)(options.type, options.isArray);
    const param = Object.assign(Object.assign({ in: 'body' }, (0, lodash_1.omit)(options, 'enum')), { type,
        isArray });
    if ((0, enum_utils_1.isEnumArray)(options)) {
        (0, enum_utils_1.addEnumArraySchema)(param, options);
    }
    else if ((0, enum_utils_1.isEnumDefined)(options)) {
        (0, enum_utils_1.addEnumSchema)(param, options);
    }
    return (0, helpers_1.createParamDecorator)(param, defaultBodyMetadata);
}
exports.ApiBody = ApiBody;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isEnumMetadata = exports.isEnumDefined = exports.isEnumArray = exports.addEnumSchema = exports.addEnumArraySchema = exports.getEnumType = exports.getEnumValues = void 0;
const lodash_1 = __webpack_require__(9);
function getEnumValues(enumType) {
    if (typeof enumType === 'function') {
        return getEnumValues(enumType());
    }
    if (Array.isArray(enumType)) {
        return enumType;
    }
    if (typeof enumType !== 'object') {
        return [];
    }
    const numericValues = Object.values(enumType)
        .filter((value) => typeof value === 'number')
        .map((value) => value.toString());
    return Object.keys(enumType)
        .filter((key) => !numericValues.includes(key))
        .map((key) => enumType[key]);
}
exports.getEnumValues = getEnumValues;
function getEnumType(values) {
    const hasString = values.filter(lodash_1.isString).length > 0;
    return hasString ? 'string' : 'number';
}
exports.getEnumType = getEnumType;
function addEnumArraySchema(paramDefinition, decoratorOptions) {
    const paramSchema = paramDefinition.schema || {};
    paramDefinition.schema = paramSchema;
    paramSchema.type = 'array';
    delete paramDefinition.isArray;
    const enumValues = getEnumValues(decoratorOptions.enum);
    paramSchema.items = {
        type: getEnumType(enumValues),
        enum: enumValues
    };
    if (decoratorOptions.enumName) {
        paramDefinition.enumName = decoratorOptions.enumName;
    }
}
exports.addEnumArraySchema = addEnumArraySchema;
function addEnumSchema(paramDefinition, decoratorOptions) {
    const paramSchema = paramDefinition.schema || {};
    const enumValues = getEnumValues(decoratorOptions.enum);
    paramDefinition.schema = paramSchema;
    paramSchema.enum = enumValues;
    paramSchema.type = getEnumType(enumValues);
    if (decoratorOptions.enumName) {
        paramDefinition.enumName = decoratorOptions.enumName;
    }
}
exports.addEnumSchema = addEnumSchema;
const isEnumArray = (obj) => obj.isArray && obj.enum;
exports.isEnumArray = isEnumArray;
const isEnumDefined = (obj) => obj.enum;
exports.isEnumDefined = isEnumDefined;
const isEnumMetadata = (metadata) => { var _a; return metadata.enum || (metadata.isArray && ((_a = metadata.items) === null || _a === void 0 ? void 0 : _a['enum'])); };
exports.isEnumMetadata = isEnumMetadata;


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getTypeIsArrayTuple = exports.createParamDecorator = exports.createMixedDecorator = exports.createPropertyDecorator = exports.createClassDecorator = exports.createMethodDecorator = void 0;
const lodash_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(10);
const plugin_constants_1 = __webpack_require__(16);
const constants_2 = __webpack_require__(17);
const shared_utils_1 = __webpack_require__(18);
function createMethodDecorator(metakey, metadata, { overrideExisting } = { overrideExisting: true }) {
    return (target, key, descriptor) => {
        if (typeof metadata === 'object') {
            const prevValue = Reflect.getMetadata(metakey, descriptor.value);
            if (prevValue && !overrideExisting) {
                return descriptor;
            }
            Reflect.defineMetadata(metakey, Object.assign(Object.assign({}, prevValue), metadata), descriptor.value);
            return descriptor;
        }
        Reflect.defineMetadata(metakey, metadata, descriptor.value);
        return descriptor;
    };
}
exports.createMethodDecorator = createMethodDecorator;
function createClassDecorator(metakey, metadata = []) {
    return (target) => {
        const prevValue = Reflect.getMetadata(metakey, target) || [];
        Reflect.defineMetadata(metakey, [...prevValue, ...metadata], target);
        return target;
    };
}
exports.createClassDecorator = createClassDecorator;
function createPropertyDecorator(metakey, metadata, overrideExisting = true) {
    return (target, propertyKey) => {
        var _a, _b, _c, _d;
        const properties = Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES_ARRAY, target) || [];
        const key = `:${propertyKey}`;
        if (!properties.includes(key)) {
            Reflect.defineMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES_ARRAY, [...properties, `:${propertyKey}`], target);
        }
        const existingMetadata = Reflect.getMetadata(metakey, target, propertyKey);
        if (existingMetadata) {
            const newMetadata = (0, lodash_1.pickBy)(metadata, (0, lodash_1.negate)(lodash_1.isUndefined));
            const metadataToSave = overrideExisting
                ? Object.assign(Object.assign({}, existingMetadata), newMetadata) : Object.assign(Object.assign({}, newMetadata), existingMetadata);
            Reflect.defineMetadata(metakey, metadataToSave, target, propertyKey);
        }
        else {
            const type = (_d = (_c = (_b = (_a = target === null || target === void 0 ? void 0 : target.constructor) === null || _a === void 0 ? void 0 : _a[plugin_constants_1.METADATA_FACTORY_NAME]) === null || _b === void 0 ? void 0 : _b.call(_a)[propertyKey]) === null || _c === void 0 ? void 0 : _c.type) !== null && _d !== void 0 ? _d : Reflect.getMetadata('design:type', target, propertyKey);
            Reflect.defineMetadata(metakey, Object.assign({ type }, (0, lodash_1.pickBy)(metadata, (0, lodash_1.negate)(lodash_1.isUndefined))), target, propertyKey);
        }
    };
}
exports.createPropertyDecorator = createPropertyDecorator;
function createMixedDecorator(metakey, metadata) {
    return (target, key, descriptor) => {
        if (descriptor) {
            let metadatas;
            if (Array.isArray(metadata)) {
                const previousMetadata = Reflect.getMetadata(metakey, descriptor.value) || [];
                metadatas = [...previousMetadata, ...metadata];
            }
            else {
                const previousMetadata = Reflect.getMetadata(metakey, descriptor.value) || {};
                metadatas = Object.assign(Object.assign({}, previousMetadata), metadata);
            }
            Reflect.defineMetadata(metakey, metadatas, descriptor.value);
            return descriptor;
        }
        Reflect.defineMetadata(metakey, metadata, target);
        return target;
    };
}
exports.createMixedDecorator = createMixedDecorator;
function createParamDecorator(metadata, initial) {
    return (target, key, descriptor) => {
        const paramOptions = Object.assign(Object.assign({}, initial), (0, lodash_1.pickBy)(metadata, (0, lodash_1.negate)(lodash_1.isUndefined)));
        if (descriptor) {
            const parameters = Reflect.getMetadata(constants_1.DECORATORS.API_PARAMETERS, descriptor.value) || [];
            Reflect.defineMetadata(constants_1.DECORATORS.API_PARAMETERS, [...parameters, paramOptions], descriptor.value);
            return descriptor;
        }
        if (typeof target === 'object') {
            return target;
        }
        const propertyKeys = Object.getOwnPropertyNames(target.prototype);
        for (const propertyKey of propertyKeys) {
            if ((0, shared_utils_1.isConstructor)(propertyKey)) {
                continue;
            }
            const methodDescriptor = Object.getOwnPropertyDescriptor(target.prototype, propertyKey);
            if (!methodDescriptor) {
                continue;
            }
            const isApiMethod = Reflect.hasMetadata(constants_2.METHOD_METADATA, methodDescriptor.value);
            if (!isApiMethod) {
                continue;
            }
            const parameters = Reflect.getMetadata(constants_1.DECORATORS.API_PARAMETERS, methodDescriptor.value) || [];
            Reflect.defineMetadata(constants_1.DECORATORS.API_PARAMETERS, [...parameters, paramOptions], methodDescriptor.value);
        }
    };
}
exports.createParamDecorator = createParamDecorator;
function getTypeIsArrayTuple(input, isArrayFlag) {
    if (!input) {
        return [input, isArrayFlag];
    }
    if (isArrayFlag) {
        return [input, isArrayFlag];
    }
    const isInputArray = (0, lodash_1.isArray)(input);
    const type = isInputArray ? input[0] : input;
    return [type, isInputArray];
}
exports.getTypeIsArrayTuple = getTypeIsArrayTuple;


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.METADATA_FACTORY_NAME = exports.OPENAPI_PACKAGE_NAME = exports.OPENAPI_NAMESPACE = void 0;
exports.OPENAPI_NAMESPACE = 'openapi';
exports.OPENAPI_PACKAGE_NAME = '@nestjs/swagger';
exports.METADATA_FACTORY_NAME = '_OPENAPI_METADATA_FACTORY';


/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("@nestjs/common/constants");

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("@nestjs/common/utils/shared.utils");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiConsumes = void 0;
const constants_1 = __webpack_require__(10);
const helpers_1 = __webpack_require__(15);
function ApiConsumes(...mimeTypes) {
    return (0, helpers_1.createMixedDecorator)(constants_1.DECORATORS.API_CONSUMES, mimeTypes);
}
exports.ApiConsumes = ApiConsumes;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiCookieAuth = void 0;
const api_security_decorator_1 = __webpack_require__(8);
function ApiCookieAuth(name = 'cookie') {
    return (0, api_security_decorator_1.ApiSecurity)(name);
}
exports.ApiCookieAuth = ApiCookieAuth;


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiExcludeEndpoint = void 0;
const constants_1 = __webpack_require__(10);
const helpers_1 = __webpack_require__(15);
function ApiExcludeEndpoint(disable = true) {
    return (0, helpers_1.createMethodDecorator)(constants_1.DECORATORS.API_EXCLUDE_ENDPOINT, {
        disable
    });
}
exports.ApiExcludeEndpoint = ApiExcludeEndpoint;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiExcludeController = void 0;
const constants_1 = __webpack_require__(10);
const helpers_1 = __webpack_require__(15);
function ApiExcludeController(disable = true) {
    return (0, helpers_1.createClassDecorator)(constants_1.DECORATORS.API_EXCLUDE_CONTROLLER, [disable]);
}
exports.ApiExcludeController = ApiExcludeController;


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiExtraModels = void 0;
const constants_1 = __webpack_require__(10);
function ApiExtraModels(...models) {
    return (target, key, descriptor) => {
        if (descriptor) {
            const extraModels = Reflect.getMetadata(constants_1.DECORATORS.API_EXTRA_MODELS, descriptor.value) ||
                [];
            Reflect.defineMetadata(constants_1.DECORATORS.API_EXTRA_MODELS, [...extraModels, ...models], descriptor.value);
            return descriptor;
        }
        const extraModels = Reflect.getMetadata(constants_1.DECORATORS.API_EXTRA_MODELS, target) || [];
        Reflect.defineMetadata(constants_1.DECORATORS.API_EXTRA_MODELS, [...extraModels, ...models], target);
        return target;
    };
}
exports.ApiExtraModels = ApiExtraModels;


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiHeaders = exports.ApiHeader = void 0;
const lodash_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(10);
const enum_utils_1 = __webpack_require__(14);
const helpers_1 = __webpack_require__(15);
const defaultHeaderOptions = {
    name: ''
};
function ApiHeader(options) {
    const param = (0, lodash_1.pickBy)({
        name: (0, lodash_1.isNil)(options.name) ? defaultHeaderOptions.name : options.name,
        in: 'header',
        description: options.description,
        required: options.required,
        examples: options.examples,
        schema: Object.assign({ type: 'string' }, (options.schema || {}))
    }, (0, lodash_1.negate)(lodash_1.isUndefined));
    if (options.enum) {
        const enumValues = (0, enum_utils_1.getEnumValues)(options.enum);
        param.schema = {
            enum: enumValues,
            type: (0, enum_utils_1.getEnumType)(enumValues)
        };
    }
    return (target, key, descriptor) => {
        if (descriptor) {
            return (0, helpers_1.createParamDecorator)(param, defaultHeaderOptions)(target, key, descriptor);
        }
        return (0, helpers_1.createClassDecorator)(constants_1.DECORATORS.API_HEADERS, [param])(target);
    };
}
exports.ApiHeader = ApiHeader;
const ApiHeaders = (headers) => {
    return (target, key, descriptor) => {
        headers.forEach((options) => ApiHeader(options)(target, key, descriptor));
    };
};
exports.ApiHeaders = ApiHeaders;


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiHideProperty = void 0;
function ApiHideProperty() {
    return (target, propertyKey) => { };
}
exports.ApiHideProperty = ApiHideProperty;


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiOAuth2 = void 0;
const api_security_decorator_1 = __webpack_require__(8);
function ApiOAuth2(scopes, name = 'oauth2') {
    return (0, api_security_decorator_1.ApiSecurity)(name, scopes);
}
exports.ApiOAuth2 = ApiOAuth2;


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiOperation = void 0;
const lodash_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(10);
const helpers_1 = __webpack_require__(15);
const defaultOperationOptions = {
    summary: ''
};
function ApiOperation(options, { overrideExisting } = { overrideExisting: true }) {
    return (0, helpers_1.createMethodDecorator)(constants_1.DECORATORS.API_OPERATION, (0, lodash_1.pickBy)(Object.assign(Object.assign({}, defaultOperationOptions), options), (0, lodash_1.negate)(lodash_1.isUndefined)), { overrideExisting });
}
exports.ApiOperation = ApiOperation;


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiParam = void 0;
const lodash_1 = __webpack_require__(9);
const enum_utils_1 = __webpack_require__(14);
const helpers_1 = __webpack_require__(15);
const defaultParamOptions = {
    name: '',
    required: true
};
function ApiParam(options) {
    const param = Object.assign({ name: (0, lodash_1.isNil)(options.name) ? defaultParamOptions.name : options.name, in: 'path' }, (0, lodash_1.omit)(options, 'enum'));
    if ((0, enum_utils_1.isEnumDefined)(options)) {
        (0, enum_utils_1.addEnumSchema)(param, options);
    }
    return (0, helpers_1.createParamDecorator)(param, defaultParamOptions);
}
exports.ApiParam = ApiParam;


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiProduces = void 0;
const constants_1 = __webpack_require__(10);
const helpers_1 = __webpack_require__(15);
function ApiProduces(...mimeTypes) {
    return (0, helpers_1.createMixedDecorator)(constants_1.DECORATORS.API_PRODUCES, mimeTypes);
}
exports.ApiProduces = ApiProduces;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiResponseProperty = exports.ApiPropertyOptional = exports.createApiPropertyDecorator = exports.ApiProperty = void 0;
const constants_1 = __webpack_require__(10);
const enum_utils_1 = __webpack_require__(14);
const helpers_1 = __webpack_require__(15);
const isEnumArray = (obj) => obj.isArray && !!obj.enum;
function ApiProperty(options = {}) {
    return createApiPropertyDecorator(options);
}
exports.ApiProperty = ApiProperty;
function createApiPropertyDecorator(options = {}, overrideExisting = true) {
    const [type, isArray] = (0, helpers_1.getTypeIsArrayTuple)(options.type, options.isArray);
    options = Object.assign(Object.assign({}, options), { type,
        isArray });
    if (isEnumArray(options)) {
        options.type = 'array';
        const enumValues = (0, enum_utils_1.getEnumValues)(options.enum);
        options.items = {
            type: (0, enum_utils_1.getEnumType)(enumValues),
            enum: enumValues
        };
        delete options.enum;
    }
    else if (options.enum) {
        const enumValues = (0, enum_utils_1.getEnumValues)(options.enum);
        options.enum = enumValues;
        options.type = (0, enum_utils_1.getEnumType)(enumValues);
    }
    if (Array.isArray(options.type)) {
        options.type = 'array';
        options.items = {
            type: 'array',
            items: {
                type: options.type[0]
            }
        };
    }
    return (0, helpers_1.createPropertyDecorator)(constants_1.DECORATORS.API_MODEL_PROPERTIES, options, overrideExisting);
}
exports.createApiPropertyDecorator = createApiPropertyDecorator;
function ApiPropertyOptional(options = {}) {
    return ApiProperty(Object.assign(Object.assign({}, options), { required: false }));
}
exports.ApiPropertyOptional = ApiPropertyOptional;
function ApiResponseProperty(options = {}) {
    return ApiProperty(Object.assign({ readOnly: true }, options));
}
exports.ApiResponseProperty = ApiResponseProperty;


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiQuery = void 0;
const lodash_1 = __webpack_require__(9);
const enum_utils_1 = __webpack_require__(14);
const helpers_1 = __webpack_require__(15);
const defaultQueryOptions = {
    name: '',
    required: true
};
function ApiQuery(options) {
    const apiQueryMetadata = options;
    const [type, isArray] = (0, helpers_1.getTypeIsArrayTuple)(apiQueryMetadata.type, apiQueryMetadata.isArray);
    const param = Object.assign(Object.assign({ name: (0, lodash_1.isNil)(options.name) ? defaultQueryOptions.name : options.name, in: 'query' }, (0, lodash_1.omit)(options, 'enum')), { type });
    if ((0, enum_utils_1.isEnumArray)(options)) {
        (0, enum_utils_1.addEnumArraySchema)(param, options);
    }
    else if ((0, enum_utils_1.isEnumDefined)(options)) {
        (0, enum_utils_1.addEnumSchema)(param, options);
    }
    if (isArray) {
        param.isArray = isArray;
    }
    return (0, helpers_1.createParamDecorator)(param, defaultQueryOptions);
}
exports.ApiQuery = ApiQuery;


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiDefaultResponse = exports.ApiHttpVersionNotSupportedResponse = exports.ApiGatewayTimeoutResponse = exports.ApiServiceUnavailableResponse = exports.ApiBadGatewayResponse = exports.ApiNotImplementedResponse = exports.ApiInternalServerErrorResponse = exports.ApiTooManyRequestsResponse = exports.ApiPreconditionRequiredResponse = exports.ApiFailedDependencyResponse = exports.ApiUnprocessableEntityResponse = exports.ApiMisdirectedResponse = exports.ApiIAmATeapotResponse = exports.ApiExpectationFailedResponse = exports.ApiRequestedRangeNotSatisfiableResponse = exports.ApiUnsupportedMediaTypeResponse = exports.ApiUriTooLongResponse = exports.ApiPayloadTooLargeResponse = exports.ApiPreconditionFailedResponse = exports.ApiLengthRequiredResponse = exports.ApiGoneResponse = exports.ApiConflictResponse = exports.ApiRequestTimeoutResponse = exports.ApiProxyAuthenticationRequiredResponse = exports.ApiNotAcceptableResponse = exports.ApiMethodNotAllowedResponse = exports.ApiNotFoundResponse = exports.ApiForbiddenResponse = exports.ApiPaymentRequiredResponse = exports.ApiUnauthorizedResponse = exports.ApiBadRequestResponse = exports.ApiPermanentRedirectResponse = exports.ApiTemporaryRedirectResponse = exports.ApiNotModifiedResponse = exports.ApiSeeOtherResponse = exports.ApiFoundResponse = exports.ApiMovedPermanentlyResponse = exports.ApiAmbiguousResponse = exports.ApiPartialContentResponse = exports.ApiResetContentResponse = exports.ApiNoContentResponse = exports.ApiNonAuthoritativeInformationResponse = exports.ApiAcceptedResponse = exports.ApiCreatedResponse = exports.ApiOkResponse = exports.ApiEarlyhintsResponse = exports.ApiProcessingResponse = exports.ApiSwitchingProtocolsResponse = exports.ApiContinueResponse = exports.ApiResponse = void 0;
const common_1 = __webpack_require__(1);
const lodash_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(10);
const helpers_1 = __webpack_require__(15);
function ApiResponse(options, { overrideExisting } = { overrideExisting: true }) {
    const [type, isArray] = (0, helpers_1.getTypeIsArrayTuple)(options.type, options.isArray);
    options.type = type;
    options.isArray = isArray;
    options.description = options.description ? options.description : '';
    const groupedMetadata = {
        [options.status || 'default']: (0, lodash_1.omit)(options, 'status')
    };
    return (target, key, descriptor) => {
        if (descriptor) {
            const responses = Reflect.getMetadata(constants_1.DECORATORS.API_RESPONSE, descriptor.value);
            if (responses && !overrideExisting) {
                return descriptor;
            }
            Reflect.defineMetadata(constants_1.DECORATORS.API_RESPONSE, Object.assign(Object.assign({}, responses), groupedMetadata), descriptor.value);
            return descriptor;
        }
        const responses = Reflect.getMetadata(constants_1.DECORATORS.API_RESPONSE, target);
        if (responses && !overrideExisting) {
            return descriptor;
        }
        Reflect.defineMetadata(constants_1.DECORATORS.API_RESPONSE, Object.assign(Object.assign({}, responses), groupedMetadata), target);
        return target;
    };
}
exports.ApiResponse = ApiResponse;
const decorators = {};
const statusList = Object.keys(common_1.HttpStatus)
    .filter((key) => !isNaN(Number(common_1.HttpStatus[key])))
    .map((key) => {
    const functionName = key
        .split('_')
        .map((strToken) => `${strToken[0].toUpperCase()}${strToken.slice(1).toLowerCase()}`)
        .join('');
    return {
        code: Number(common_1.HttpStatus[key]),
        functionName: `Api${functionName}Response`
    };
});
statusList.forEach(({ code, functionName }) => {
    decorators[functionName] = function (options = {}) {
        return ApiResponse(Object.assign(Object.assign({}, options), { status: code }));
    };
});
exports.ApiContinueResponse = decorators.ApiContinueResponse, exports.ApiSwitchingProtocolsResponse = decorators.ApiSwitchingProtocolsResponse, exports.ApiProcessingResponse = decorators.ApiProcessingResponse, exports.ApiEarlyhintsResponse = decorators.ApiEarlyhintsResponse, exports.ApiOkResponse = decorators.ApiOkResponse, exports.ApiCreatedResponse = decorators.ApiCreatedResponse, exports.ApiAcceptedResponse = decorators.ApiAcceptedResponse, exports.ApiNonAuthoritativeInformationResponse = decorators.ApiNonAuthoritativeInformationResponse, exports.ApiNoContentResponse = decorators.ApiNoContentResponse, exports.ApiResetContentResponse = decorators.ApiResetContentResponse, exports.ApiPartialContentResponse = decorators.ApiPartialContentResponse, exports.ApiAmbiguousResponse = decorators.ApiAmbiguousResponse, exports.ApiMovedPermanentlyResponse = decorators.ApiMovedPermanentlyResponse, exports.ApiFoundResponse = decorators.ApiFoundResponse, exports.ApiSeeOtherResponse = decorators.ApiSeeOtherResponse, exports.ApiNotModifiedResponse = decorators.ApiNotModifiedResponse, exports.ApiTemporaryRedirectResponse = decorators.ApiTemporaryRedirectResponse, exports.ApiPermanentRedirectResponse = decorators.ApiPermanentRedirectResponse, exports.ApiBadRequestResponse = decorators.ApiBadRequestResponse, exports.ApiUnauthorizedResponse = decorators.ApiUnauthorizedResponse, exports.ApiPaymentRequiredResponse = decorators.ApiPaymentRequiredResponse, exports.ApiForbiddenResponse = decorators.ApiForbiddenResponse, exports.ApiNotFoundResponse = decorators.ApiNotFoundResponse, exports.ApiMethodNotAllowedResponse = decorators.ApiMethodNotAllowedResponse, exports.ApiNotAcceptableResponse = decorators.ApiNotAcceptableResponse, exports.ApiProxyAuthenticationRequiredResponse = decorators.ApiProxyAuthenticationRequiredResponse, exports.ApiRequestTimeoutResponse = decorators.ApiRequestTimeoutResponse, exports.ApiConflictResponse = decorators.ApiConflictResponse, exports.ApiGoneResponse = decorators.ApiGoneResponse, exports.ApiLengthRequiredResponse = decorators.ApiLengthRequiredResponse, exports.ApiPreconditionFailedResponse = decorators.ApiPreconditionFailedResponse, exports.ApiPayloadTooLargeResponse = decorators.ApiPayloadTooLargeResponse, exports.ApiUriTooLongResponse = decorators.ApiUriTooLongResponse, exports.ApiUnsupportedMediaTypeResponse = decorators.ApiUnsupportedMediaTypeResponse, exports.ApiRequestedRangeNotSatisfiableResponse = decorators.ApiRequestedRangeNotSatisfiableResponse, exports.ApiExpectationFailedResponse = decorators.ApiExpectationFailedResponse, exports.ApiIAmATeapotResponse = decorators.ApiIAmATeapotResponse, exports.ApiMisdirectedResponse = decorators.ApiMisdirectedResponse, exports.ApiUnprocessableEntityResponse = decorators.ApiUnprocessableEntityResponse, exports.ApiFailedDependencyResponse = decorators.ApiFailedDependencyResponse, exports.ApiPreconditionRequiredResponse = decorators.ApiPreconditionRequiredResponse, exports.ApiTooManyRequestsResponse = decorators.ApiTooManyRequestsResponse, exports.ApiInternalServerErrorResponse = decorators.ApiInternalServerErrorResponse, exports.ApiNotImplementedResponse = decorators.ApiNotImplementedResponse, exports.ApiBadGatewayResponse = decorators.ApiBadGatewayResponse, exports.ApiServiceUnavailableResponse = decorators.ApiServiceUnavailableResponse, exports.ApiGatewayTimeoutResponse = decorators.ApiGatewayTimeoutResponse, exports.ApiHttpVersionNotSupportedResponse = decorators.ApiHttpVersionNotSupportedResponse;
const ApiDefaultResponse = (options = {}) => ApiResponse(Object.assign(Object.assign({}, options), { status: 'default' }));
exports.ApiDefaultResponse = ApiDefaultResponse;


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiTags = void 0;
const constants_1 = __webpack_require__(10);
const helpers_1 = __webpack_require__(15);
function ApiTags(...tags) {
    return (0, helpers_1.createMixedDecorator)(constants_1.DECORATORS.API_TAGS, tags);
}
exports.ApiTags = ApiTags;


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiExtension = void 0;
const constants_1 = __webpack_require__(10);
const helpers_1 = __webpack_require__(15);
const lodash_1 = __webpack_require__(9);
function ApiExtension(extensionKey, extensionProperties) {
    if (!extensionKey.startsWith('x-')) {
        throw new Error('Extension key is not prefixed. Please ensure you prefix it with `x-`.');
    }
    const extensionObject = {
        [extensionKey]: (0, lodash_1.clone)(extensionProperties)
    };
    return (0, helpers_1.createMixedDecorator)(constants_1.DECORATORS.API_EXTENSION, extensionObject);
}
exports.ApiExtension = ApiExtension;


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentBuilder = void 0;
const common_1 = __webpack_require__(1);
const lodash_1 = __webpack_require__(9);
const document_base_1 = __webpack_require__(36);
const global_parameters_storage_1 = __webpack_require__(37);
class DocumentBuilder {
    constructor() {
        this.logger = new common_1.Logger(DocumentBuilder.name);
        this.document = (0, document_base_1.buildDocumentBase)();
    }
    setTitle(title) {
        this.document.info.title = title;
        return this;
    }
    setDescription(description) {
        this.document.info.description = description;
        return this;
    }
    setVersion(version) {
        this.document.info.version = version;
        return this;
    }
    setTermsOfService(termsOfService) {
        this.document.info.termsOfService = termsOfService;
        return this;
    }
    setContact(name, url, email) {
        this.document.info.contact = { name, url, email };
        return this;
    }
    setLicense(name, url) {
        this.document.info.license = { name, url };
        return this;
    }
    addServer(url, description, variables) {
        this.document.servers.push({ url, description, variables });
        return this;
    }
    setExternalDoc(description, url) {
        this.document.externalDocs = { description, url };
        return this;
    }
    setBasePath(path) {
        this.logger.warn('The "setBasePath" method has been deprecated. Now, a global prefix is populated automatically. If you want to ignore it, take a look here: https://docs.nestjs.com/recipes/swagger#global-prefix. Alternatively, you can use "addServer" method to set up multiple different paths.');
        return this;
    }
    addTag(name, description = '', externalDocs) {
        this.document.tags = this.document.tags.concat((0, lodash_1.pickBy)({
            name,
            description,
            externalDocs
        }, (0, lodash_1.negate)(lodash_1.isUndefined)));
        return this;
    }
    addExtension(extensionKey, extensionProperties) {
        if (!extensionKey.startsWith('x-')) {
            throw new Error('Extension key is not prefixed. Please ensure you prefix it with `x-`.');
        }
        this.document[extensionKey] = (0, lodash_1.clone)(extensionProperties);
        return this;
    }
    addSecurity(name, options) {
        this.document.components.securitySchemes = Object.assign(Object.assign({}, (this.document.components.securitySchemes || {})), { [name]: options });
        return this;
    }
    addGlobalParameters(...parameters) {
        global_parameters_storage_1.GlobalParametersStorage.add(...parameters);
        return this;
    }
    addSecurityRequirements(name, requirements = []) {
        let securityRequirement;
        if ((0, lodash_1.isString)(name)) {
            securityRequirement = { [name]: requirements };
        }
        else {
            securityRequirement = name;
        }
        this.document.security = (this.document.security || []).concat(Object.assign({}, securityRequirement));
        return this;
    }
    addBearerAuth(options = {
        type: 'http'
    }, name = 'bearer') {
        this.addSecurity(name, Object.assign({ scheme: 'bearer', bearerFormat: 'JWT' }, options));
        return this;
    }
    addOAuth2(options = {
        type: 'oauth2'
    }, name = 'oauth2') {
        this.addSecurity(name, Object.assign({ type: 'oauth2', flows: {} }, options));
        return this;
    }
    addApiKey(options = {
        type: 'apiKey'
    }, name = 'api_key') {
        this.addSecurity(name, Object.assign({ type: 'apiKey', in: 'header', name }, options));
        return this;
    }
    addBasicAuth(options = {
        type: 'http'
    }, name = 'basic') {
        this.addSecurity(name, Object.assign({ type: 'http', scheme: 'basic' }, options));
        return this;
    }
    addCookieAuth(cookieName = 'connect.sid', options = {
        type: 'apiKey'
    }, securityName = 'cookie') {
        this.addSecurity(securityName, Object.assign({ type: 'apiKey', in: 'cookie', name: cookieName }, options));
        return this;
    }
    build() {
        return this.document;
    }
}
exports.DocumentBuilder = DocumentBuilder;


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildDocumentBase = void 0;
const buildDocumentBase = () => ({
    openapi: '3.0.0',
    info: {
        title: '',
        description: '',
        version: '1.0.0',
        contact: {}
    },
    tags: [],
    servers: [],
    components: {}
});
exports.buildDocumentBase = buildDocumentBase;


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalParametersStorage = exports.GlobalParametersStorageHost = void 0;
class GlobalParametersStorageHost {
    constructor() {
        this.parameters = new Array();
    }
    add(...parameters) {
        this.parameters.push(...parameters);
    }
    getAll() {
        return this.parameters;
    }
    clear() {
        this.parameters = [];
    }
}
exports.GlobalParametersStorageHost = GlobalParametersStorageHost;
const globalRef = global;
exports.GlobalParametersStorage = globalRef.SwaggerGlobalParametersStorage ||
    (globalRef.SwaggerGlobalParametersStorage =
        new GlobalParametersStorageHost());


/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(39), exports);
__exportStar(__webpack_require__(40), exports);


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwaggerModule = void 0;
const jsyaml = __webpack_require__(42);
const metadata_loader_1 = __webpack_require__(67);
const swagger_scanner_1 = __webpack_require__(68);
const swagger_ui_1 = __webpack_require__(102);
const assign_two_levels_deep_1 = __webpack_require__(107);
const get_global_prefix_1 = __webpack_require__(100);
const normalize_rel_path_1 = __webpack_require__(108);
const resolve_path_util_1 = __webpack_require__(109);
const validate_global_prefix_util_1 = __webpack_require__(111);
const validate_path_util_1 = __webpack_require__(112);
class SwaggerModule {
    static createDocument(app, config, options = {}) {
        const swaggerScanner = new swagger_scanner_1.SwaggerScanner();
        const document = swaggerScanner.scanApplication(app, options);
        document.components = (0, assign_two_levels_deep_1.assignTwoLevelsDeep)({}, config.components, document.components);
        return Object.assign(Object.assign({ openapi: '3.0.0', paths: {} }, config), document);
    }
    static loadPluginMetadata(metadataFn) {
        return __awaiter(this, void 0, void 0, function* () {
            const metadata = yield metadataFn();
            return this.metadataLoader.load(metadata);
        });
    }
    static serveStatic(finalPath, app, customStaticPath) {
        const httpAdapter = app.getHttpAdapter();
        const swaggerAssetsPath = customStaticPath
            ? (0, resolve_path_util_1.resolvePath)(customStaticPath)
            : (0, swagger_ui_1.getSwaggerAssetsAbsoluteFSPath)();
        if (httpAdapter && httpAdapter.getType() === 'fastify') {
            app.useStaticAssets({
                root: swaggerAssetsPath,
                prefix: finalPath,
                decorateReply: false
            });
        }
        else {
            app.useStaticAssets(swaggerAssetsPath, {
                prefix: finalPath
            });
        }
    }
    static serveDocuments(finalPath, urlLastSubdirectory, httpAdapter, documentOrFactory, options) {
        let document;
        const getBuiltDocument = () => {
            if (!document) {
                document =
                    typeof documentOrFactory === 'function'
                        ? documentOrFactory()
                        : documentOrFactory;
            }
            return document;
        };
        if (options.swaggerUiEnabled) {
            this.serveSwaggerUi(finalPath, urlLastSubdirectory, httpAdapter, getBuiltDocument, options.swaggerOptions);
        }
        this.serveDefinitions(httpAdapter, getBuiltDocument, options);
    }
    static serveSwaggerUi(finalPath, urlLastSubdirectory, httpAdapter, getBuiltDocument, swaggerOptions) {
        const baseUrlForSwaggerUI = (0, normalize_rel_path_1.normalizeRelPath)(`./${urlLastSubdirectory}/`);
        let swaggerUiHtml;
        let swaggerUiInitJS;
        httpAdapter.get((0, normalize_rel_path_1.normalizeRelPath)(`${finalPath}/swagger-ui-init.js`), (req, res) => {
            res.type('application/javascript');
            const document = getBuiltDocument();
            if (swaggerOptions.patchDocumentOnRequest) {
                const documentToSerialize = swaggerOptions.patchDocumentOnRequest(req, res, document);
                const swaggerInitJsPerRequest = (0, swagger_ui_1.buildSwaggerInitJS)(documentToSerialize, swaggerOptions);
                return res.send(swaggerInitJsPerRequest);
            }
            if (!swaggerUiInitJS) {
                swaggerUiInitJS = (0, swagger_ui_1.buildSwaggerInitJS)(document, swaggerOptions);
            }
            res.send(swaggerUiInitJS);
        });
        try {
            httpAdapter.get((0, normalize_rel_path_1.normalizeRelPath)(`${finalPath}/${urlLastSubdirectory}/swagger-ui-init.js`), (req, res) => {
                res.type('application/javascript');
                const document = getBuiltDocument();
                if (swaggerOptions.patchDocumentOnRequest) {
                    const documentToSerialize = swaggerOptions.patchDocumentOnRequest(req, res, document);
                    const swaggerInitJsPerRequest = (0, swagger_ui_1.buildSwaggerInitJS)(documentToSerialize, swaggerOptions);
                    return res.send(swaggerInitJsPerRequest);
                }
                if (!swaggerUiInitJS) {
                    swaggerUiInitJS = (0, swagger_ui_1.buildSwaggerInitJS)(document, swaggerOptions);
                }
                res.send(swaggerUiInitJS);
            });
        }
        catch (err) {
        }
        httpAdapter.get(finalPath, (_, res) => {
            res.type('text/html');
            if (!swaggerUiHtml) {
                swaggerUiHtml = (0, swagger_ui_1.buildSwaggerHTML)(baseUrlForSwaggerUI, swaggerOptions);
            }
            res.send(swaggerUiHtml);
        });
        try {
            httpAdapter.get((0, normalize_rel_path_1.normalizeRelPath)(`${finalPath}/`), (_, res) => {
                res.type('text/html');
                if (!swaggerUiHtml) {
                    swaggerUiHtml = (0, swagger_ui_1.buildSwaggerHTML)(baseUrlForSwaggerUI, swaggerOptions);
                }
                res.send(swaggerUiHtml);
            });
        }
        catch (err) {
        }
    }
    static serveDefinitions(httpAdapter, getBuiltDocument, options) {
        httpAdapter.get((0, normalize_rel_path_1.normalizeRelPath)(options.jsonDocumentUrl), (req, res) => {
            res.type('application/json');
            const document = getBuiltDocument();
            const documentToSerialize = options.swaggerOptions.patchDocumentOnRequest
                ? options.swaggerOptions.patchDocumentOnRequest(req, res, document)
                : document;
            res.send(JSON.stringify(documentToSerialize));
        });
        httpAdapter.get((0, normalize_rel_path_1.normalizeRelPath)(options.yamlDocumentUrl), (req, res) => {
            res.type('text/yaml');
            const document = getBuiltDocument();
            const documentToSerialize = options.swaggerOptions.patchDocumentOnRequest
                ? options.swaggerOptions.patchDocumentOnRequest(req, res, document)
                : document;
            const yamlDocument = jsyaml.dump(documentToSerialize, {
                skipInvalid: true,
                noRefs: true
            });
            res.send(yamlDocument);
        });
    }
    static setup(path, app, documentOrFactory, options) {
        var _a;
        const globalPrefix = (0, get_global_prefix_1.getGlobalPrefix)(app);
        const finalPath = (0, validate_path_util_1.validatePath)((options === null || options === void 0 ? void 0 : options.useGlobalPrefix) && (0, validate_global_prefix_util_1.validateGlobalPrefix)(globalPrefix)
            ? `${globalPrefix}${(0, validate_path_util_1.validatePath)(path)}`
            : path);
        const urlLastSubdirectory = finalPath.split('/').slice(-1).pop() || '';
        const validatedGlobalPrefix = (options === null || options === void 0 ? void 0 : options.useGlobalPrefix) && (0, validate_global_prefix_util_1.validateGlobalPrefix)(globalPrefix)
            ? (0, validate_path_util_1.validatePath)(globalPrefix)
            : '';
        const finalJSONDocumentPath = (options === null || options === void 0 ? void 0 : options.jsonDocumentUrl)
            ? `${validatedGlobalPrefix}${(0, validate_path_util_1.validatePath)(options.jsonDocumentUrl)}`
            : `${finalPath}-json`;
        const finalYAMLDocumentPath = (options === null || options === void 0 ? void 0 : options.yamlDocumentUrl)
            ? `${validatedGlobalPrefix}${(0, validate_path_util_1.validatePath)(options.yamlDocumentUrl)}`
            : `${finalPath}-yaml`;
        const swaggerUiEnabled = (_a = options === null || options === void 0 ? void 0 : options.swaggerUiEnabled) !== null && _a !== void 0 ? _a : true;
        const httpAdapter = app.getHttpAdapter();
        SwaggerModule.serveDocuments(finalPath, urlLastSubdirectory, httpAdapter, documentOrFactory, {
            swaggerUiEnabled,
            jsonDocumentUrl: finalJSONDocumentPath,
            yamlDocumentUrl: finalYAMLDocumentPath,
            swaggerOptions: options || {}
        });
        if (swaggerUiEnabled) {
            SwaggerModule.serveStatic(finalPath, app, options === null || options === void 0 ? void 0 : options.customSwaggerUiPath);
            const serveStaticSlashEndingPath = `${finalPath}/${urlLastSubdirectory}`;
            if (serveStaticSlashEndingPath !== finalPath) {
                SwaggerModule.serveStatic(serveStaticSlashEndingPath, app);
            }
        }
    }
}
exports.SwaggerModule = SwaggerModule;
SwaggerModule.metadataLoader = new metadata_loader_1.MetadataLoader();


/***/ }),
/* 42 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {




var loader = __webpack_require__(43);
var dumper = __webpack_require__(66);


function renamed(from, to) {
  return function () {
    throw new Error('Function yaml.' + from + ' is removed in js-yaml 4. ' +
      'Use yaml.' + to + ' instead, which is now safe by default.');
  };
}


module.exports.Type = __webpack_require__(52);
module.exports.Schema = __webpack_require__(51);
module.exports.FAILSAFE_SCHEMA = __webpack_require__(50);
module.exports.JSON_SCHEMA = __webpack_require__(49);
module.exports.CORE_SCHEMA = __webpack_require__(48);
module.exports.DEFAULT_SCHEMA = __webpack_require__(47);
module.exports.load                = loader.load;
module.exports.loadAll             = loader.loadAll;
module.exports.dump                = dumper.dump;
module.exports.YAMLException = __webpack_require__(45);

// Re-export all types in case user wants to create custom schema
module.exports.types = {
  binary:    __webpack_require__(62),
  float:     __webpack_require__(59),
  map:       __webpack_require__(55),
  null:      __webpack_require__(56),
  pairs:     __webpack_require__(64),
  set:       __webpack_require__(65),
  timestamp: __webpack_require__(60),
  bool:      __webpack_require__(57),
  int:       __webpack_require__(58),
  merge:     __webpack_require__(61),
  omap:      __webpack_require__(63),
  seq:       __webpack_require__(54),
  str:       __webpack_require__(53)
};

// Removed functions from JS-YAML 3.0.x
module.exports.safeLoad            = renamed('safeLoad', 'load');
module.exports.safeLoadAll         = renamed('safeLoadAll', 'loadAll');
module.exports.safeDump            = renamed('safeDump', 'dump');


/***/ }),
/* 43 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/*eslint-disable max-len,no-use-before-define*/

var common              = __webpack_require__(44);
var YAMLException       = __webpack_require__(45);
var makeSnippet         = __webpack_require__(46);
var DEFAULT_SCHEMA      = __webpack_require__(47);


var _hasOwnProperty = Object.prototype.hasOwnProperty;


var CONTEXT_FLOW_IN   = 1;
var CONTEXT_FLOW_OUT  = 2;
var CONTEXT_BLOCK_IN  = 3;
var CONTEXT_BLOCK_OUT = 4;


var CHOMPING_CLIP  = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP  = 3;


var PATTERN_NON_PRINTABLE         = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS       = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE            = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI               = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;


function _class(obj) { return Object.prototype.toString.call(obj); }

function is_EOL(c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */);
}

function is_WHITE_SPACE(c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */);
}

function is_WS_OR_EOL(c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */);
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */;
}

function fromHexCode(c) {
  var lc;

  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  /*eslint-disable no-bitwise*/
  lc = c | 0x20;

  if ((0x61/* a */ <= lc) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78/* x */) { return 2; }
  if (c === 0x75/* u */) { return 4; }
  if (c === 0x55/* U */) { return 8; }
  return 0;
}

function fromDecimalCode(c) {
  if ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  /* eslint-disable indent */
  return (c === 0x30/* 0 */) ? '\x00' :
        (c === 0x61/* a */) ? '\x07' :
        (c === 0x62/* b */) ? '\x08' :
        (c === 0x74/* t */) ? '\x09' :
        (c === 0x09/* Tab */) ? '\x09' :
        (c === 0x6E/* n */) ? '\x0A' :
        (c === 0x76/* v */) ? '\x0B' :
        (c === 0x66/* f */) ? '\x0C' :
        (c === 0x72/* r */) ? '\x0D' :
        (c === 0x65/* e */) ? '\x1B' :
        (c === 0x20/* Space */) ? ' ' :
        (c === 0x22/* " */) ? '\x22' :
        (c === 0x2F/* / */) ? '/' :
        (c === 0x5C/* \ */) ? '\x5C' :
        (c === 0x4E/* N */) ? '\x85' :
        (c === 0x5F/* _ */) ? '\xA0' :
        (c === 0x4C/* L */) ? '\u2028' :
        (c === 0x50/* P */) ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  );
}

var simpleEscapeCheck = new Array(256); // integer, for fast access
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}


function State(input, options) {
  this.input = input;

  this.filename  = options['filename']  || null;
  this.schema    = options['schema']    || DEFAULT_SCHEMA;
  this.onWarning = options['onWarning'] || null;
  // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
  // if such documents have no explicit %YAML directive
  this.legacy    = options['legacy']    || false;

  this.json      = options['json']      || false;
  this.listener  = options['listener']  || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap       = this.schema.compiledTypeMap;

  this.length     = input.length;
  this.position   = 0;
  this.line       = 0;
  this.lineStart  = 0;
  this.lineIndent = 0;

  // position of first leading tab in the current line,
  // used to make sure there are no tabs in the indentation
  this.firstTabInLine = -1;

  this.documents = [];

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result;*/

}


function generateError(state, message) {
  var mark = {
    name:     state.filename,
    buffer:   state.input.slice(0, -1), // omit trailing \0
    position: state.position,
    line:     state.line,
    column:   state.position - state.lineStart
  };

  mark.snippet = makeSnippet(mark);

  return new YAMLException(message, mark);
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}


var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = (minor < 2);

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix);
    }

    state.tagMap[handle] = prefix;
  }
};


function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 ||
              (0x20 <= _character && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode,
  startLine, startLineStart, startPos) {

  var index, quantity;

  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);

    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys');
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]';
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]';
  }


  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty.call(overridableKeys, keyNode) &&
        _hasOwnProperty.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }

    // used for this specific key only because Object.defineProperty is slow
    if (keyNode === '__proto__') {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A/* LF */) {
    state.position++;
  } else if (ch === 0x0D/* CR */) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++;
    }
  } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 0x09/* Tab */ && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0);
    }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20/* Space */) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}


function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch)      ||
      is_FLOW_INDICATOR(ch) ||
      ch === 0x23/* # */    ||
      ch === 0x26/* & */    ||
      ch === 0x2A/* * */    ||
      ch === 0x21/* ! */    ||
      ch === 0x7C/* | */    ||
      ch === 0x3E/* > */    ||
      ch === 0x27/* ' */    ||
      ch === 0x22/* " */    ||
      ch === 0x25/* % */    ||
      ch === 0x40/* @ */    ||
      ch === 0x60/* ` */) {
    return false;
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    following = state.input.charCodeAt(state.position + 1);

    if (is_WS_OR_EOL(following) ||
        withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) ||
          withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }

    } else if (ch === 0x23/* # */) {
      preceding = state.input.charCodeAt(state.position - 1);

      if (is_WS_OR_EOL(preceding)) {
        break;
      }

    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;

    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch,
      captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27/* ' */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (ch === 0x27/* ' */) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart,
      captureEnd,
      hexLength,
      hexResult,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22/* " */) {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;

    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);

      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;

      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;

          } else {
            throwError(state, 'expected hexadecimal character');
          }
        }

        state.result += charFromCodepoint(hexResult);

        state.position++;

      } else {
        throwError(state, 'unknown escape sequence');
      }

      captureStart = captureEnd = state.position;

    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;

    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');

    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _lineStart,
      _pos,
      _tag     = state.tag,
      _result,
      _anchor  = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = Object.create(null),
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D;/* ] */
    isMapping = false;
    _result = [];
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D;/* } */
    isMapping = true;
    _result = {};
  } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    } else if (ch === 0x2C/* , */) {
      // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
      throwError(state, "expected the node content, but found ','");
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F/* ? */) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }

    _line = state.line; // Save the current line.
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C/* , */) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping       = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent     = nodeIndent,
      emptyLines     = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C/* | */) {
    folding = false;
  } else if (ch === 0x3E/* > */) {
    folding = true;
  } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, 'repeat of a chomping mode identifier');
      }

    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }

    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (is_WHITE_SPACE(ch));

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position); }
      while (!is_EOL(ch) && (ch !== 0));
    }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {

      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n';
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break;
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {

      // Lines starting with white space characters (more-indented lines) are not folded.
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' ';
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines);
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag      = state.tag,
      _anchor   = state.anchor,
      _result   = [],
      following,
      detected  = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    if (ch !== 0x2D/* - */) {
      break;
    }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _keyLine,
      _keyLineStart,
      _keyPos,
      _tag          = state.tag,
      _anchor       = state.anchor,
      _result       = {},
      overridableKeys = Object.create(null),
      keyTag        = null,
      keyNode       = null,
      valueNode     = null,
      atExplicitKey = false,
      detected      = false,
      ch;

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, 'tab characters must not be used in indentation');
    }

    following = state.input.charCodeAt(state.position + 1);
    _line = state.line; // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }

        detected = true;
        atExplicitKey = true;
        allowCompact = true;

      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false;
        allowCompact = true;

      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        // Neither implicit nor explicit notation.
        // Reading is done. Go to the epilogue.
        break;
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position);

          if (!is_WS_OR_EOL(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;

        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');

        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true; // Keep the result of `composeNode`.
        }

      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');

      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true; // Keep the result of `composeNode`.
      }
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }

      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed    = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21/* ! */) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C/* < */) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);

  } else if (ch === 0x21/* ! */) {
    isNamed = true;
    tagHandle = '!!';
    ch = state.input.charCodeAt(++state.position);

  } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position); }
    while (ch !== 0 && ch !== 0x3E/* > */);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters');
          }

          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks');
        }
      }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;

  } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;

  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;

  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;

  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26/* & */) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A/* * */) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!_hasOwnProperty.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1, // 1: this>parent, 0: this=parent, -1: this<parent
      atNewLine  = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      typeList,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag    = null;
  state.anchor = null;
  state.kind   = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN  === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections &&
          (readBlockSequence(state, blockIndent) ||
           readBlockMapping(state, blockIndent, flowIndent)) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;

        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }

        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }

  } else if (state.tag === '?') {
    // Implicit resolving is not allowed for non-scalar types, and '?'
    // non-specific tag is only automatically assigned to plain scalars.
    //
    // We only need to check kind conformity in case user explicitly assigns '?'
    // tag, for example like this: "!<?> [0]"
    //
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }

    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex];

      if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
        state.result = type.construct(state.result);
        state.tag = type.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];
    } else {
      // looking for multi type
      type = null;
      typeList = state.typeMap.multi[state.kind || 'fallback'];

      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex];
          break;
        }
      }
    }

    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }

    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
    }

    if (!type.resolve(state.result, state.tag)) { // `state.result` updated in resolver if matched
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
    } else {
      state.result = type.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null ||  state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = Object.create(null);
  state.anchorMap = Object.create(null);

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break;
    }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position); }
        while (ch !== 0 && !is_EOL(ch));
        break;
      }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position)     === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);

  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}


function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {

    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n';
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State(input, options);

  var nullpos = input.indexOf('\0');

  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, 'null byte is not allowed in input');
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < (state.length - 1)) {
    readDocument(state);
  }

  return state.documents;
}


function loadAll(input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator;
    iterator = null;
  }

  var documents = loadDocuments(input, options);

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}


function load(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    /*eslint-disable no-undefined*/
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new YAMLException('expected a single document in the stream, but found more');
}


module.exports.loadAll = loadAll;
module.exports.load    = load;


/***/ }),
/* 44 */
/***/ ((module) => {




function isNothing(subject) {
  return (typeof subject === 'undefined') || (subject === null);
}


function isObject(subject) {
  return (typeof subject === 'object') && (subject !== null);
}


function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];

  return [ sequence ];
}


function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}


function repeat(string, count) {
  var result = '', cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}


function isNegativeZero(number) {
  return (number === 0) && (Number.NEGATIVE_INFINITY === 1 / number);
}


module.exports.isNothing      = isNothing;
module.exports.isObject       = isObject;
module.exports.toArray        = toArray;
module.exports.repeat         = repeat;
module.exports.isNegativeZero = isNegativeZero;
module.exports.extend         = extend;


/***/ }),
/* 45 */
/***/ ((module) => {

// YAML error class. http://stackoverflow.com/questions/8458984
//



function formatError(exception, compact) {
  var where = '', message = exception.reason || '(unknown reason)';

  if (!exception.mark) return message;

  if (exception.mark.name) {
    where += 'in "' + exception.mark.name + '" ';
  }

  where += '(' + (exception.mark.line + 1) + ':' + (exception.mark.column + 1) + ')';

  if (!compact && exception.mark.snippet) {
    where += '\n\n' + exception.mark.snippet;
  }

  return message + ' ' + where;
}


function YAMLException(reason, mark) {
  // Super constructor
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);

  // Include stack trace in error object
  if (Error.captureStackTrace) {
    // Chrome and NodeJS
    Error.captureStackTrace(this, this.constructor);
  } else {
    // FF, IE 10+ and Safari 6+. Fallback for others
    this.stack = (new Error()).stack || '';
  }
}


// Inherit from Error
YAMLException.prototype = Object.create(Error.prototype);
YAMLException.prototype.constructor = YAMLException;


YAMLException.prototype.toString = function toString(compact) {
  return this.name + ': ' + formatError(this, compact);
};


module.exports = YAMLException;


/***/ }),
/* 46 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {




var common = __webpack_require__(44);


// get snippet for a single line, respecting maxLength
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = '';
  var tail = '';
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;

  if (position - lineStart > maxHalfLength) {
    head = ' ... ';
    lineStart = position - maxHalfLength + head.length;
  }

  if (lineEnd - position > maxHalfLength) {
    tail = ' ...';
    lineEnd = position + maxHalfLength - tail.length;
  }

  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, '→') + tail,
    pos: position - lineStart + head.length // relative position
  };
}


function padStart(string, max) {
  return common.repeat(' ', max - string.length) + string;
}


function makeSnippet(mark, options) {
  options = Object.create(options || null);

  if (!mark.buffer) return null;

  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent      !== 'number') options.indent      = 1;
  if (typeof options.linesBefore !== 'number') options.linesBefore = 3;
  if (typeof options.linesAfter  !== 'number') options.linesAfter  = 2;

  var re = /\r?\n|\r|\0/g;
  var lineStarts = [ 0 ];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;

  while ((match = re.exec(mark.buffer))) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);

    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }

  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;

  var result = '', i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);

  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(' ', options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n' + result;
  }

  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(' ', options.indent) + padStart((mark.line + 1).toString(), lineNoLength) +
    ' | ' + line.str + '\n';
  result += common.repeat('-', options.indent + lineNoLength + 3 + line.pos) + '^' + '\n';

  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(' ', options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) +
      ' | ' + line.str + '\n';
  }

  return result.replace(/\n$/, '');
}


module.exports = makeSnippet;


/***/ }),
/* 47 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// JS-YAML's default schema for `safeLoad` function.
// It is not described in the YAML specification.
//
// This schema is based on standard YAML's Core schema and includes most of
// extra types described at YAML tag repository. (http://yaml.org/type/)





module.exports = (__webpack_require__(48).extend)({
  implicit: [
    __webpack_require__(60),
    __webpack_require__(61)
  ],
  explicit: [
    __webpack_require__(62),
    __webpack_require__(63),
    __webpack_require__(64),
    __webpack_require__(65)
  ]
});


/***/ }),
/* 48 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Standard YAML's Core schema.
// http://www.yaml.org/spec/1.2/spec.html#id2804923
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, Core schema has no distinctions from JSON schema is JS-YAML.





module.exports = __webpack_require__(49);


/***/ }),
/* 49 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Standard YAML's JSON schema.
// http://www.yaml.org/spec/1.2/spec.html#id2803231
//
// NOTE: JS-YAML does not support schema-specific tag resolution restrictions.
// So, this schema is not such strict as defined in the YAML specification.
// It allows numbers in binary notaion, use `Null` and `NULL` as `null`, etc.





module.exports = (__webpack_require__(50).extend)({
  implicit: [
    __webpack_require__(56),
    __webpack_require__(57),
    __webpack_require__(58),
    __webpack_require__(59)
  ]
});


/***/ }),
/* 50 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Standard YAML's Failsafe schema.
// http://www.yaml.org/spec/1.2/spec.html#id2802346





var Schema = __webpack_require__(51);


module.exports = new Schema({
  explicit: [
    __webpack_require__(53),
    __webpack_require__(54),
    __webpack_require__(55)
  ]
});


/***/ }),
/* 51 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/*eslint-disable max-len*/

var YAMLException = __webpack_require__(45);
var Type          = __webpack_require__(52);


function compileList(schema, name) {
  var result = [];

  schema[name].forEach(function (currentType) {
    var newIndex = result.length;

    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag &&
          previousType.kind === currentType.kind &&
          previousType.multi === currentType.multi) {

        newIndex = previousIndex;
      }
    });

    result[newIndex] = currentType;
  });

  return result;
}


function compileMap(/* lists... */) {
  var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {},
        multi: {
          scalar: [],
          sequence: [],
          mapping: [],
          fallback: []
        }
      }, index, length;

  function collectType(type) {
    if (type.multi) {
      result.multi[type.kind].push(type);
      result.multi['fallback'].push(type);
    } else {
      result[type.kind][type.tag] = result['fallback'][type.tag] = type;
    }
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}


function Schema(definition) {
  return this.extend(definition);
}


Schema.prototype.extend = function extend(definition) {
  var implicit = [];
  var explicit = [];

  if (definition instanceof Type) {
    // Schema.extend(type)
    explicit.push(definition);

  } else if (Array.isArray(definition)) {
    // Schema.extend([ type1, type2, ... ])
    explicit = explicit.concat(definition);

  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    // Schema.extend({ explicit: [ type1, type2, ... ], implicit: [ type1, type2, ... ] })
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);

  } else {
    throw new YAMLException('Schema.extend argument should be a Type, [ Type ], ' +
      'or a schema definition ({ implicit: [...], explicit: [...] })');
  }

  implicit.forEach(function (type) {
    if (!(type instanceof Type)) {
      throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }

    if (type.loadKind && type.loadKind !== 'scalar') {
      throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }

    if (type.multi) {
      throw new YAMLException('There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.');
    }
  });

  explicit.forEach(function (type) {
    if (!(type instanceof Type)) {
      throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
    }
  });

  var result = Object.create(Schema.prototype);

  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);

  result.compiledImplicit = compileList(result, 'implicit');
  result.compiledExplicit = compileList(result, 'explicit');
  result.compiledTypeMap  = compileMap(result.compiledImplicit, result.compiledExplicit);

  return result;
};


module.exports = Schema;


/***/ }),
/* 52 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var YAMLException = __webpack_require__(45);

var TYPE_CONSTRUCTOR_OPTIONS = [
  'kind',
  'multi',
  'resolve',
  'construct',
  'instanceOf',
  'predicate',
  'represent',
  'representName',
  'defaultStyle',
  'styleAliases'
];

var YAML_NODE_KINDS = [
  'scalar',
  'sequence',
  'mapping'
];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  // TODO: Add tag format check.
  this.options       = options; // keep original options in case user wants to extend this type later
  this.tag           = tag;
  this.kind          = options['kind']          || null;
  this.resolve       = options['resolve']       || function () { return true; };
  this.construct     = options['construct']     || function (data) { return data; };
  this.instanceOf    = options['instanceOf']    || null;
  this.predicate     = options['predicate']     || null;
  this.represent     = options['represent']     || null;
  this.representName = options['representName'] || null;
  this.defaultStyle  = options['defaultStyle']  || null;
  this.multi         = options['multi']         || false;
  this.styleAliases  = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

module.exports = Type;


/***/ }),
/* 53 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Type = __webpack_require__(52);

module.exports = new Type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function (data) { return data !== null ? data : ''; }
});


/***/ }),
/* 54 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Type = __webpack_require__(52);

module.exports = new Type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function (data) { return data !== null ? data : []; }
});


/***/ }),
/* 55 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Type = __webpack_require__(52);

module.exports = new Type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function (data) { return data !== null ? data : {}; }
});


/***/ }),
/* 56 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Type = __webpack_require__(52);

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return (max === 1 && data === '~') ||
         (max === 4 && (data === 'null' || data === 'Null' || data === 'NULL'));
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

module.exports = new Type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function () { return '~';    },
    lowercase: function () { return 'null'; },
    uppercase: function () { return 'NULL'; },
    camelcase: function () { return 'Null'; },
    empty:     function () { return '';     }
  },
  defaultStyle: 'lowercase'
});


/***/ }),
/* 57 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Type = __webpack_require__(52);

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return (max === 4 && (data === 'true' || data === 'True' || data === 'TRUE')) ||
         (max === 5 && (data === 'false' || data === 'False' || data === 'FALSE'));
}

function constructYamlBoolean(data) {
  return data === 'true' ||
         data === 'True' ||
         data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

module.exports = new Type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function (object) { return object ? 'true' : 'false'; },
    uppercase: function (object) { return object ? 'TRUE' : 'FALSE'; },
    camelcase: function (object) { return object ? 'True' : 'False'; }
  },
  defaultStyle: 'lowercase'
});


/***/ }),
/* 58 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var common = __webpack_require__(44);
var Type   = __webpack_require__(52);

function isHexCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */)) ||
         ((0x41/* A */ <= c) && (c <= 0x46/* F */)) ||
         ((0x61/* a */ <= c) && (c <= 0x66/* f */));
}

function isOctCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x37/* 7 */));
}

function isDecCode(c) {
  return ((0x30/* 0 */ <= c) && (c <= 0x39/* 9 */));
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  // sign
  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    // 0
    if (index + 1 === max) return true;
    ch = data[++index];

    // base 2, base 8, base 16

    if (ch === 'b') {
      // base 2
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'x') {
      // base 16
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }


    if (ch === 'o') {
      // base 8
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isOctCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }
  }

  // base 10 (except 0)

  // value should not start with `_`;
  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  // Should have digits and should not end with `_`
  if (!hasDigits || ch === '_') return false;

  return true;
}

function constructYamlInteger(data) {
  var value = data, sign = 1, ch;

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value.slice(2), 16);
    if (value[1] === 'o') return sign * parseInt(value.slice(2), 8);
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return (Object.prototype.toString.call(object)) === '[object Number]' &&
         (object % 1 === 0 && !common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary:      function (obj) { return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1); },
    octal:       function (obj) { return obj >= 0 ? '0o'  + obj.toString(8) : '-0o'  + obj.toString(8).slice(1); },
    decimal:     function (obj) { return obj.toString(10); },
    /* eslint-disable max-len */
    hexadecimal: function (obj) { return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() :  '-0x' + obj.toString(16).toUpperCase().slice(1); }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary:      [ 2,  'bin' ],
    octal:       [ 8,  'oct' ],
    decimal:     [ 10, 'dec' ],
    hexadecimal: [ 16, 'hex' ]
  }
});


/***/ }),
/* 59 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var common = __webpack_require__(44);
var Type   = __webpack_require__(52);

var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  '^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' +
  // .2e4, .2
  // special case, seems not from spec
  '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' +
  // .inf
  '|[-+]?\\.(?:inf|Inf|INF)' +
  // .nan
  '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) ||
      // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign;

  value  = data.replace(/_/g, '').toLowerCase();
  sign   = value[0] === '-' ? -1 : 1;

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return (sign === 1) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;

  } else if (value === '.nan') {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}


var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase': return '.nan';
      case 'uppercase': return '.NAN';
      case 'camelcase': return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '.inf';
      case 'uppercase': return '.INF';
      case 'camelcase': return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase': return '-.inf';
      case 'uppercase': return '-.INF';
      case 'camelcase': return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  // JS stringifier can build scientific format without dots: 5e-100,
  // while YAML requres dot: 5.e-100. Fix it with simple hack

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return (Object.prototype.toString.call(object) === '[object Number]') &&
         (object % 1 !== 0 || common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});


/***/ }),
/* 60 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Type = __webpack_require__(52);

var YAML_DATE_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9])'                    + // [2] month
  '-([0-9][0-9])$');                   // [3] day

var YAML_TIMESTAMP_REGEXP = new RegExp(
  '^([0-9][0-9][0-9][0-9])'          + // [1] year
  '-([0-9][0-9]?)'                   + // [2] month
  '-([0-9][0-9]?)'                   + // [3] day
  '(?:[Tt]|[ \\t]+)'                 + // ...
  '([0-9][0-9]?)'                    + // [4] hour
  ':([0-9][0-9])'                    + // [5] minute
  ':([0-9][0-9])'                    + // [6] second
  '(?:\\.([0-9]*))?'                 + // [7] fraction
  '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + // [8] tz [9] tz_sign [10] tz_hour
  '(?::([0-9][0-9]))?))?$');           // [11] tz_minute

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0,
      delta = null, tz_hour, tz_minute, date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  // match: [1] year [2] month [3] day

  year = +(match[1]);
  month = +(match[2]) - 1; // JS month starts with 0
  day = +(match[3]);

  if (!match[4]) { // no hour
    return new Date(Date.UTC(year, month, day));
  }

  // match: [4] hour [5] minute [6] second [7] fraction

  hour = +(match[4]);
  minute = +(match[5]);
  second = +(match[6]);

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) { // milli-seconds
      fraction += '0';
    }
    fraction = +fraction;
  }

  // match: [8] tz [9] tz_sign [10] tz_hour [11] tz_minute

  if (match[9]) {
    tz_hour = +(match[10]);
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000; // delta in mili-seconds
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object /*, style*/) {
  return object.toISOString();
}

module.exports = new Type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});


/***/ }),
/* 61 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Type = __webpack_require__(52);

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

module.exports = new Type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});


/***/ }),
/* 62 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/*eslint-disable no-bitwise*/


var Type = __webpack_require__(52);


// [ 64, 65, 66 ] -> [ padding, CR, LF ]
var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';


function resolveYamlBinary(data) {
  if (data === null) return false;

  var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;

  // Convert one by one.
  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    // Skip CR/LF
    if (code > 64) continue;

    // Fail on illegal characters
    if (code < 0) return false;

    bitlen += 6;
  }

  // If there are any bits left, source was corrupted
  return (bitlen % 8) === 0;
}

function constructYamlBinary(data) {
  var idx, tailbits,
      input = data.replace(/[\r\n=]/g, ''), // remove CR/LF & padding to simplify scan
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  // Collect by 6*4 bits (3 bytes)

  for (idx = 0; idx < max; idx++) {
    if ((idx % 4 === 0) && idx) {
      result.push((bits >> 16) & 0xFF);
      result.push((bits >> 8) & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = (bits << 6) | map.indexOf(input.charAt(idx));
  }

  // Dump tail

  tailbits = (max % 4) * 6;

  if (tailbits === 0) {
    result.push((bits >> 16) & 0xFF);
    result.push((bits >> 8) & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push((bits >> 10) & 0xFF);
    result.push((bits >> 2) & 0xFF);
  } else if (tailbits === 12) {
    result.push((bits >> 4) & 0xFF);
  }

  return new Uint8Array(result);
}

function representYamlBinary(object /*, style*/) {
  var result = '', bits = 0, idx, tail,
      max = object.length,
      map = BASE64_MAP;

  // Convert every three bytes to 4 ASCII characters.

  for (idx = 0; idx < max; idx++) {
    if ((idx % 3 === 0) && idx) {
      result += map[(bits >> 18) & 0x3F];
      result += map[(bits >> 12) & 0x3F];
      result += map[(bits >> 6) & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  // Dump tail

  tail = max % 3;

  if (tail === 0) {
    result += map[(bits >> 18) & 0x3F];
    result += map[(bits >> 12) & 0x3F];
    result += map[(bits >> 6) & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[(bits >> 10) & 0x3F];
    result += map[(bits >> 4) & 0x3F];
    result += map[(bits << 2) & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[(bits >> 2) & 0x3F];
    result += map[(bits << 4) & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(obj) {
  return Object.prototype.toString.call(obj) ===  '[object Uint8Array]';
}

module.exports = new Type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});


/***/ }),
/* 63 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Type = __webpack_require__(52);

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString       = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [], index, length, pair, pairKey, pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

module.exports = new Type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});


/***/ }),
/* 64 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Type = __webpack_require__(52);

var _toString = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index, length, pair, keys, result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [ keys[0], pair[keys[0]] ];
  }

  return result;
}

module.exports = new Type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});


/***/ }),
/* 65 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Type = __webpack_require__(52);

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key, object = data;

  for (key in object) {
    if (_hasOwnProperty.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

module.exports = new Type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});


/***/ }),
/* 66 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/*eslint-disable no-use-before-define*/

var common              = __webpack_require__(44);
var YAMLException       = __webpack_require__(45);
var DEFAULT_SCHEMA      = __webpack_require__(47);

var _toString       = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_BOM                  = 0xFEFF;
var CHAR_TAB                  = 0x09; /* Tab */
var CHAR_LINE_FEED            = 0x0A; /* LF */
var CHAR_CARRIAGE_RETURN      = 0x0D; /* CR */
var CHAR_SPACE                = 0x20; /* Space */
var CHAR_EXCLAMATION          = 0x21; /* ! */
var CHAR_DOUBLE_QUOTE         = 0x22; /* " */
var CHAR_SHARP                = 0x23; /* # */
var CHAR_PERCENT              = 0x25; /* % */
var CHAR_AMPERSAND            = 0x26; /* & */
var CHAR_SINGLE_QUOTE         = 0x27; /* ' */
var CHAR_ASTERISK             = 0x2A; /* * */
var CHAR_COMMA                = 0x2C; /* , */
var CHAR_MINUS                = 0x2D; /* - */
var CHAR_COLON                = 0x3A; /* : */
var CHAR_EQUALS               = 0x3D; /* = */
var CHAR_GREATER_THAN         = 0x3E; /* > */
var CHAR_QUESTION             = 0x3F; /* ? */
var CHAR_COMMERCIAL_AT        = 0x40; /* @ */
var CHAR_LEFT_SQUARE_BRACKET  = 0x5B; /* [ */
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D; /* ] */
var CHAR_GRAVE_ACCENT         = 0x60; /* ` */
var CHAR_LEFT_CURLY_BRACKET   = 0x7B; /* { */
var CHAR_VERTICAL_LINE        = 0x7C; /* | */
var CHAR_RIGHT_CURLY_BRACKET  = 0x7D; /* } */

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00]   = '\\0';
ESCAPE_SEQUENCES[0x07]   = '\\a';
ESCAPE_SEQUENCES[0x08]   = '\\b';
ESCAPE_SEQUENCES[0x09]   = '\\t';
ESCAPE_SEQUENCES[0x0A]   = '\\n';
ESCAPE_SEQUENCES[0x0B]   = '\\v';
ESCAPE_SEQUENCES[0x0C]   = '\\f';
ESCAPE_SEQUENCES[0x0D]   = '\\r';
ESCAPE_SEQUENCES[0x1B]   = '\\e';
ESCAPE_SEQUENCES[0x22]   = '\\"';
ESCAPE_SEQUENCES[0x5C]   = '\\\\';
ESCAPE_SEQUENCES[0x85]   = '\\N';
ESCAPE_SEQUENCES[0xA0]   = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = [
  'y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON',
  'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'
];

var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}


var QUOTING_TYPE_SINGLE = 1,
    QUOTING_TYPE_DOUBLE = 2;

function State(options) {
  this.schema        = options['schema'] || DEFAULT_SCHEMA;
  this.indent        = Math.max(1, (options['indent'] || 2));
  this.noArrayIndent = options['noArrayIndent'] || false;
  this.skipInvalid   = options['skipInvalid'] || false;
  this.flowLevel     = (common.isNothing(options['flowLevel']) ? -1 : options['flowLevel']);
  this.styleMap      = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys      = options['sortKeys'] || false;
  this.lineWidth     = options['lineWidth'] || 80;
  this.noRefs        = options['noRefs'] || false;
  this.noCompatMode  = options['noCompatMode'] || false;
  this.condenseFlow  = options['condenseFlow'] || false;
  this.quotingType   = options['quotingType'] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes   = options['forceQuotes'] || false;
  this.replacer      = typeof options['replacer'] === 'function' ? options['replacer'] : null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

// Indents every line in a string. Empty lines (\n only) are not indented.
function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

// [33] s-white ::= s-space | s-tab
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

// Returns true if the character can be printed without escaping.
// From YAML 1.2: "any allowed characters known to be non-printable
// should also be escaped. [However,] This isn’t mandatory"
// Derived from nb-char - \t - #x85 - #xA0 - #x2028 - #x2029.
function isPrintable(c) {
  return  (0x00020 <= c && c <= 0x00007E)
      || ((0x000A1 <= c && c <= 0x00D7FF) && c !== 0x2028 && c !== 0x2029)
      || ((0x0E000 <= c && c <= 0x00FFFD) && c !== CHAR_BOM)
      ||  (0x10000 <= c && c <= 0x10FFFF);
}

// [34] ns-char ::= nb-char - s-white
// [27] nb-char ::= c-printable - b-char - c-byte-order-mark
// [26] b-char  ::= b-line-feed | b-carriage-return
// Including s-white (for some reason, examples doesn't match specs in this aspect)
// ns-char ::= c-printable - b-line-feed - b-carriage-return - c-byte-order-mark
function isNsCharOrWhitespace(c) {
  return isPrintable(c)
    && c !== CHAR_BOM
    // - b-char
    && c !== CHAR_CARRIAGE_RETURN
    && c !== CHAR_LINE_FEED;
}

// [127]  ns-plain-safe(c) ::= c = flow-out  ⇒ ns-plain-safe-out
//                             c = flow-in   ⇒ ns-plain-safe-in
//                             c = block-key ⇒ ns-plain-safe-out
//                             c = flow-key  ⇒ ns-plain-safe-in
// [128] ns-plain-safe-out ::= ns-char
// [129]  ns-plain-safe-in ::= ns-char - c-flow-indicator
// [130]  ns-plain-char(c) ::=  ( ns-plain-safe(c) - “:” - “#” )
//                            | ( /* An ns-char preceding */ “#” )
//                            | ( “:” /* Followed by an ns-plain-safe(c) */ )
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    inblock ? // c = flow-in
      cIsNsCharOrWhitespace
      : cIsNsCharOrWhitespace
        // - c-flow-indicator
        && c !== CHAR_COMMA
        && c !== CHAR_LEFT_SQUARE_BRACKET
        && c !== CHAR_RIGHT_SQUARE_BRACKET
        && c !== CHAR_LEFT_CURLY_BRACKET
        && c !== CHAR_RIGHT_CURLY_BRACKET
  )
    // ns-plain-char
    && c !== CHAR_SHARP // false on '#'
    && !(prev === CHAR_COLON && !cIsNsChar) // false on ': '
    || (isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP) // change to true on '[^ ]#'
    || (prev === CHAR_COLON && cIsNsChar); // change to true on ':[^ ]'
}

// Simplified test for values allowed as the first character in plain style.
function isPlainSafeFirst(c) {
  // Uses a subset of ns-char - c-indicator
  // where ns-char = nb-char - s-white.
  // No support of ( ( “?” | “:” | “-” ) /* Followed by an ns-plain-safe(c)) */ ) part
  return isPrintable(c) && c !== CHAR_BOM
    && !isWhitespace(c) // - s-white
    // - (c-indicator ::=
    // “-” | “?” | “:” | “,” | “[” | “]” | “{” | “}”
    && c !== CHAR_MINUS
    && c !== CHAR_QUESTION
    && c !== CHAR_COLON
    && c !== CHAR_COMMA
    && c !== CHAR_LEFT_SQUARE_BRACKET
    && c !== CHAR_RIGHT_SQUARE_BRACKET
    && c !== CHAR_LEFT_CURLY_BRACKET
    && c !== CHAR_RIGHT_CURLY_BRACKET
    // | “#” | “&” | “*” | “!” | “|” | “=” | “>” | “'” | “"”
    && c !== CHAR_SHARP
    && c !== CHAR_AMPERSAND
    && c !== CHAR_ASTERISK
    && c !== CHAR_EXCLAMATION
    && c !== CHAR_VERTICAL_LINE
    && c !== CHAR_EQUALS
    && c !== CHAR_GREATER_THAN
    && c !== CHAR_SINGLE_QUOTE
    && c !== CHAR_DOUBLE_QUOTE
    // | “%” | “@” | “`”)
    && c !== CHAR_PERCENT
    && c !== CHAR_COMMERCIAL_AT
    && c !== CHAR_GRAVE_ACCENT;
}

// Simplified test for values allowed as the last character in plain style.
function isPlainSafeLast(c) {
  // just not whitespace or colon, it will be checked to be plain character later
  return !isWhitespace(c) && c !== CHAR_COLON;
}

// Same as 'string'.codePointAt(pos), but works in older browsers.
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 0xD800 && first <= 0xDBFF && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 0xDC00 && second <= 0xDFFF) {
      // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
    }
  }
  return first;
}

// Determines whether block indentation indicator is required.
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}

var STYLE_PLAIN   = 1,
    STYLE_SINGLE  = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED  = 4,
    STYLE_DOUBLE  = 5;

// Determines which scalar styles are possible and returns the preferred style.
// lineWidth = -1 => no limit.
// Pre-conditions: str.length > 0.
// Post-conditions:
//    STYLE_PLAIN or STYLE_SINGLE => no \n are in the string.
//    STYLE_LITERAL => no lines are suitable for folding (or lineWidth is -1).
//    STYLE_FOLDED => a line > lineWidth and can be folded (and lineWidth != -1).
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth,
  testAmbiguousType, quotingType, forceQuotes, inblock) {

  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false; // only checked if shouldTrackWidth
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1; // count the first line correctly
  var plain = isPlainSafeFirst(codePointAt(string, 0))
          && isPlainSafeLast(codePointAt(string, string.length - 1));

  if (singleLineOnly || forceQuotes) {
    // Case: no block styles.
    // Check for disallowed characters to rule out plain and single.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    // Case: block styles permitted.
    for (i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        // Check if any line can be folded.
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine ||
            // Foldable line = too long, and not more-indented.
            (i - previousLineBreak - 1 > lineWidth &&
             string[previousLineBreak + 1] !== ' ');
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    // in case the end is missing a \n
    hasFoldableLine = hasFoldableLine || (shouldTrackWidth &&
      (i - previousLineBreak - 1 > lineWidth &&
       string[previousLineBreak + 1] !== ' '));
  }
  // Although every style can represent \n without escaping, prefer block styles
  // for multiline, since they're more readable and they don't add empty lines.
  // Also prefer folding a super-long line.
  if (!hasLineBreak && !hasFoldableLine) {
    // Strings interpretable as another type have to be quoted;
    // e.g. the string 'true' vs. the boolean true.
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  // Edge case: block indentation indicator can only have one digit.
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  // At this point we know block styles are valid.
  // Prefer literal style unless we want to fold.
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}

// Note: line breaking/folding is implemented for only the folded style.
// NB. We drop the last trailing newline (if any) of a returned block scalar
//  since the dumper adds its own newline. This always works:
//    • No ending newline => unaffected; already using strip "-" chomping.
//    • Ending newline    => removed then restored.
//  Importantly, this keeps the "+" chomp indicator from gaining an extra line.
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function () {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? ('"' + string + '"') : ("'" + string + "'");
      }
    }

    var indent = state.indent * Math.max(1, level); // no 0-indent scalars
    // As indentation gets deeper, let the width decrease monotonically
    // to the lower bound min(state.lineWidth, 40).
    // Note that this implies
    //  state.lineWidth ≤ 40 + state.indent: width is fixed at the lower bound.
    //  state.lineWidth > 40 + state.indent: width decreases until the lower bound.
    // This behaves better than a constant minimum width which disallows narrower options,
    // or an indent threshold which causes the width to suddenly increase.
    var lineWidth = state.lineWidth === -1
      ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    // Without knowing if keys are implicit/explicit, assume implicit for safety.
    var singleLineOnly = iskey
      // No block styles in flow mode.
      || (state.flowLevel > -1 && level >= state.flowLevel);
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth,
      testAmbiguity, state.quotingType, state.forceQuotes && !iskey, inblock)) {

      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent)
          + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string, lineWidth) + '"';
      default:
        throw new YAMLException('impossible error: invalid scalar style');
    }
  }());
}

// Pre-conditions: string is valid for a block scalar, 1 <= indentPerLevel <= 9.
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : '';

  // note the special case: the string '\n' counts as a "trailing" empty line.
  var clip =          string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : (clip ? '' : '-');

  return indentIndicator + chomp + '\n';
}

// (See the note for writeScalar.)
function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

// Note: a long line without a suitable break point will exceed the width limit.
// Pre-conditions: every char in str isPrintable, str.length > 0, width > 0.
function foldString(string, width) {
  // In folded style, $k$ consecutive newlines output as $k+1$ newlines—
  // unless they're before or after a more-indented line, or at the very
  // beginning or end, in which case $k$ maps to $k$.
  // Therefore, parse each chunk as newline(s) followed by a content line.
  var lineRe = /(\n+)([^\n]*)/g;

  // first line (possibly an empty line)
  var result = (function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }());
  // If we haven't reached the first content line yet, don't add an extra \n.
  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  // rest of the lines
  var match;
  while ((match = lineRe.exec(string))) {
    var prefix = match[1], line = match[2];
    moreIndented = (line[0] === ' ');
    result += prefix
      + (!prevMoreIndented && !moreIndented && line !== ''
        ? '\n' : '')
      + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

// Greedy line breaking.
// Picks the longest line under the limit each time,
// otherwise settles for the shortest line over the limit.
// NB. More-indented lines *cannot* be folded, as that would add an extra \n.
function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  // Since a more-indented line adds a \n, breaks can't be followed by a space.
  var breakRe = / [^ ]/g; // note: the match index will always be <= length-2.
  var match;
  // start is an inclusive index. end, curr, and next are exclusive.
  var start = 0, end, curr = 0, next = 0;
  var result = '';

  // Invariants: 0 <= start <= length-1.
  //   0 <= curr <= next <= max(0, length-2). curr - start <= width.
  // Inside the loop:
  //   A match implies length >= 2, so curr and next are <= length-2.
  while ((match = breakRe.exec(line))) {
    next = match.index;
    // maintain invariant: curr - start <= width
    if (next - start > width) {
      end = (curr > start) ? curr : next; // derive end <= length-2
      result += '\n' + line.slice(start, end);
      // skip the space that was output as \n
      start = end + 1;                    // derive start <= length-1
    }
    curr = next;
  }

  // By the invariants, start <= length-1, so there is something left over.
  // It is either the whole string or a part starting from non-whitespace.
  result += '\n';
  // Insert a break if the remainder is too long and there is a break available.
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1); // drop extra \n joiner
}

// Escapes a double-quoted string.
function escapeString(string) {
  var result = '';
  var char = 0;
  var escapeSeq;

  for (var i = 0; i < string.length; char >= 0x10000 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];

    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 0x10000) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level, value, false, false) ||
        (typeof value === 'undefined' &&
         writeNode(state, level, null, false, false))) {

      if (_result !== '') _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag    = state.tag,
      index,
      length,
      value;

  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];

    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }

    // Write only valid elements, put null instead of invalid elements.
    if (writeNode(state, level + 1, value, true, true, false, true) ||
        (typeof value === 'undefined' &&
         writeNode(state, level + 1, null, true, true, false, true))) {

      if (!compact || _result !== '') {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]'; // Empty sequence if no valid values.
}

function writeFlowMapping(state, level, object) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {

    pairBuffer = '';
    if (_result !== '') pairBuffer += ', ';

    if (state.condenseFlow) pairBuffer += '"';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level, objectKey, false, false)) {
      continue; // Skip this pair because of invalid key;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue; // Skip this pair because of invalid value.
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result       = '',
      _tag          = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  // Allow sorting keys so that the output file is deterministic
  if (state.sortKeys === true) {
    // Default sorting
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    // Custom sort function
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    // Something is wrong
    throw new YAMLException('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || _result !== '') {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue; // Skip this pair because of invalid key.
    }

    explicitPair = (state.tag !== null && state.tag !== '?') ||
                   (state.dump && state.dump.length > 1024);

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue; // Skip this pair because of invalid value.
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    // Both key and value are valid.
    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}'; // Empty mapping if no valid pairs.
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf  || type.predicate) &&
        (!type.instanceOf || ((typeof object === 'object') && (object instanceof type.instanceOf))) &&
        (!type.predicate  || type.predicate(object))) {

      if (explicit) {
        if (type.multi && type.representName) {
          state.tag = type.representName(object);
        } else {
          state.tag = type.tag;
        }
      } else {
        state.tag = '?';
      }

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

// Serializes `object` and writes it to global `result`.
// Returns true on success, or false on invalid object.
//
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);
  var inblock = block;
  var tagStr;

  if (block) {
    block = (state.flowLevel < 0 || state.flowLevel > level);
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if ((state.tag !== null && state.tag !== '?') || duplicate || (state.indent !== 2 && level > 0)) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && (Object.keys(state.dump).length !== 0)) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && (state.dump.length !== 0)) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type === '[object Undefined]') {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new YAMLException('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      // Need to encode all characters except those allowed by the spec:
      //
      // [35] ns-dec-digit    ::=  [#x30-#x39] /* 0-9 */
      // [36] ns-hex-digit    ::=  ns-dec-digit
      //                         | [#x41-#x46] /* A-F */ | [#x61-#x66] /* a-f */
      // [37] ns-ascii-letter ::=  [#x41-#x5A] /* A-Z */ | [#x61-#x7A] /* a-z */
      // [38] ns-word-char    ::=  ns-dec-digit | ns-ascii-letter | “-”
      // [39] ns-uri-char     ::=  “%” ns-hex-digit ns-hex-digit | ns-word-char | “#”
      //                         | “;” | “/” | “?” | “:” | “@” | “&” | “=” | “+” | “$” | “,”
      //                         | “_” | “.” | “!” | “~” | “*” | “'” | “(” | “)” | “[” | “]”
      //
      // Also need to encode '!' because it has special meaning (end of tag prefix).
      //
      tagStr = encodeURI(
        state.tag[0] === '!' ? state.tag.slice(1) : state.tag
      ).replace(/!/g, '%21');

      if (state.tag[0] === '!') {
        tagStr = '!' + tagStr;
      } else if (tagStr.slice(0, 18) === 'tag:yaml.org,2002:') {
        tagStr = '!!' + tagStr.slice(18);
      } else {
        tagStr = '!<' + tagStr + '>';
      }

      state.dump = tagStr + ' ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList,
      index,
      length;

  if (object !== null && typeof object === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  var value = input;

  if (state.replacer) {
    value = state.replacer.call({ '': value }, '', value);
  }

  if (writeNode(state, 0, value, true, true)) return state.dump + '\n';

  return '';
}

module.exports.dump = dump;


/***/ }),
/* 67 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MetadataLoader = void 0;
const plugin_constants_1 = __webpack_require__(16);
class MetadataLoader {
    static addRefreshHook(hook) {
        return MetadataLoader.refreshHooks.push(hook);
    }
    load(metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            const pkgMetadata = metadata['@nestjs/swagger'];
            if (!pkgMetadata) {
                return;
            }
            const { models, controllers } = pkgMetadata;
            if (models) {
                yield this.applyMetadata(models);
            }
            if (controllers) {
                yield this.applyMetadata(controllers);
            }
            this.runHooks();
        });
    }
    applyMetadata(meta) {
        return __awaiter(this, void 0, void 0, function* () {
            const loadPromises = meta.map(([fileImport, fileMeta]) => __awaiter(this, void 0, void 0, function* () {
                const fileRef = yield fileImport;
                Object.keys(fileMeta).map((key) => {
                    const clsRef = fileRef[key];
                    clsRef[plugin_constants_1.METADATA_FACTORY_NAME] = () => fileMeta[key];
                });
            }));
            yield Promise.all(loadPromises);
        });
    }
    runHooks() {
        MetadataLoader.refreshHooks.forEach((hook) => hook());
    }
}
exports.MetadataLoader = MetadataLoader;
MetadataLoader.refreshHooks = new Array();


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwaggerScanner = void 0;
const constants_1 = __webpack_require__(17);
const lodash_1 = __webpack_require__(9);
const model_properties_accessor_1 = __webpack_require__(69);
const schema_object_factory_1 = __webpack_require__(70);
const swagger_types_mapper_1 = __webpack_require__(78);
const swagger_explorer_1 = __webpack_require__(79);
const swagger_transformer_1 = __webpack_require__(99);
const get_global_prefix_1 = __webpack_require__(100);
const strip_last_slash_util_1 = __webpack_require__(101);
class SwaggerScanner {
    constructor() {
        this.transformer = new swagger_transformer_1.SwaggerTransformer();
        this.schemaObjectFactory = new schema_object_factory_1.SchemaObjectFactory(new model_properties_accessor_1.ModelPropertiesAccessor(), new swagger_types_mapper_1.SwaggerTypesMapper());
        this.explorer = new swagger_explorer_1.SwaggerExplorer(this.schemaObjectFactory);
    }
    scanApplication(app, options) {
        const { deepScanRoutes, include: includedModules = [], extraModels = [], ignoreGlobalPrefix = false, operationIdFactory } = options;
        const container = app.container;
        const internalConfigRef = app.config;
        const modules = this.getModules(container.getModules(), includedModules);
        const globalPrefix = !ignoreGlobalPrefix
            ? (0, strip_last_slash_util_1.stripLastSlash)((0, get_global_prefix_1.getGlobalPrefix)(app))
            : '';
        const denormalizedPaths = modules.map(({ controllers, metatype, imports }) => {
            let result = [];
            if (deepScanRoutes) {
                const isGlobal = (module) => !container.isGlobalModule(module);
                Array.from(imports.values())
                    .filter(isGlobal)
                    .forEach(({ metatype, controllers }) => {
                    const modulePath = this.getModulePathMetadata(container, metatype);
                    result = result.concat(this.scanModuleControllers(controllers, modulePath, globalPrefix, internalConfigRef, operationIdFactory));
                });
            }
            const modulePath = this.getModulePathMetadata(container, metatype);
            result = result.concat(this.scanModuleControllers(controllers, modulePath, globalPrefix, internalConfigRef, operationIdFactory));
            return this.transformer.unescapeColonsInPath(app, result);
        });
        const schemas = this.explorer.getSchemas();
        this.addExtraModels(schemas, extraModels);
        return Object.assign(Object.assign({}, this.transformer.normalizePaths((0, lodash_1.flatten)(denormalizedPaths))), { components: {
                schemas: schemas
            } });
    }
    scanModuleControllers(controller, modulePath, globalPrefix, applicationConfig, operationIdFactory) {
        const denormalizedArray = [...controller.values()].map((ctrl) => this.explorer.exploreController(ctrl, applicationConfig, modulePath, globalPrefix, operationIdFactory));
        return (0, lodash_1.flatten)(denormalizedArray);
    }
    getModules(modulesContainer, include) {
        if (!include || (0, lodash_1.isEmpty)(include)) {
            return [...modulesContainer.values()];
        }
        return [...modulesContainer.values()].filter(({ metatype }) => include.some((item) => item === metatype));
    }
    addExtraModels(schemas, extraModels) {
        extraModels.forEach((item) => {
            this.schemaObjectFactory.exploreModelSchema(item, schemas);
        });
    }
    getModulePathMetadata(container, metatype) {
        const modulesContainer = container.getModules();
        const modulePath = Reflect.getMetadata(constants_1.MODULE_PATH + modulesContainer.applicationId, metatype);
        return modulePath !== null && modulePath !== void 0 ? modulePath : Reflect.getMetadata(constants_1.MODULE_PATH, metatype);
    }
}
exports.SwaggerScanner = SwaggerScanner;


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModelPropertiesAccessor = void 0;
const shared_utils_1 = __webpack_require__(18);
__webpack_require__(5);
const constants_1 = __webpack_require__(10);
const api_property_decorator_1 = __webpack_require__(30);
const plugin_constants_1 = __webpack_require__(16);
class ModelPropertiesAccessor {
    getModelProperties(prototype) {
        const properties = Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES_ARRAY, prototype) ||
            [];
        return properties
            .filter(shared_utils_1.isString)
            .filter((key) => key.charAt(0) === ':' && !(0, shared_utils_1.isFunction)(prototype[key]))
            .map((key) => key.slice(1));
    }
    applyMetadataFactory(prototype) {
        const classPrototype = prototype;
        do {
            if (!prototype.constructor) {
                return;
            }
            if (!prototype.constructor[plugin_constants_1.METADATA_FACTORY_NAME]) {
                continue;
            }
            const metadata = prototype.constructor[plugin_constants_1.METADATA_FACTORY_NAME]();
            const properties = Object.keys(metadata);
            properties.forEach((key) => {
                (0, api_property_decorator_1.createApiPropertyDecorator)(metadata[key], false)(classPrototype, key);
            });
        } while ((prototype = Reflect.getPrototypeOf(prototype)) &&
            prototype !== Object.prototype &&
            prototype);
    }
}
exports.ModelPropertiesAccessor = ModelPropertiesAccessor;


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SchemaObjectFactory = void 0;
const shared_utils_1 = __webpack_require__(18);
const lodash_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(10);
const helpers_1 = __webpack_require__(15);
const api_extra_models_explorer_1 = __webpack_require__(71);
const utils_1 = __webpack_require__(72);
const enum_utils_1 = __webpack_require__(14);
const is_body_parameter_util_1 = __webpack_require__(74);
const is_built_in_type_util_1 = __webpack_require__(75);
const is_date_ctor_util_1 = __webpack_require__(77);
class SchemaObjectFactory {
    constructor(modelPropertiesAccessor, swaggerTypesMapper) {
        this.modelPropertiesAccessor = modelPropertiesAccessor;
        this.swaggerTypesMapper = swaggerTypesMapper;
    }
    createFromModel(parameters, schemas) {
        const parameterObjects = parameters.map((param) => {
            if (this.isLazyTypeFunc(param.type)) {
                [param.type, param.isArray] = (0, helpers_1.getTypeIsArrayTuple)(param.type(), undefined);
            }
            if (!(0, is_body_parameter_util_1.isBodyParameter)(param) && param.enumName) {
                return this.createEnumParam(param, schemas);
            }
            if (this.isPrimitiveType(param.type)) {
                return param;
            }
            if (this.isArrayCtor(param.type)) {
                return this.mapArrayCtorParam(param);
            }
            if (!(0, is_body_parameter_util_1.isBodyParameter)(param)) {
                return this.createQueryOrParamSchema(param, schemas);
            }
            const modelName = this.exploreModelSchema(param.type, schemas);
            const name = param.name || modelName;
            const schema = Object.assign(Object.assign({}, (param.schema || {})), { $ref: (0, utils_1.getSchemaPath)(modelName) });
            const isArray = param.isArray;
            param = (0, lodash_1.omit)(param, 'isArray');
            if (isArray) {
                return Object.assign(Object.assign({}, param), { name, schema: {
                        type: 'array',
                        items: schema
                    } });
            }
            return Object.assign(Object.assign({}, param), { name,
                schema });
        });
        return (0, lodash_1.flatten)(parameterObjects);
    }
    createQueryOrParamSchema(param, schemas) {
        if ((0, is_date_ctor_util_1.isDateCtor)(param.type)) {
            return Object.assign(Object.assign({ format: 'date-time' }, param), { type: 'string' });
        }
        if (this.isBigInt(param.type)) {
            return Object.assign(Object.assign({ format: 'int64' }, param), { type: 'integer' });
        }
        if ((0, lodash_1.isFunction)(param.type)) {
            const propertiesWithType = this.extractPropertiesFromType(param.type, schemas);
            if (!propertiesWithType) {
                return param;
            }
            return propertiesWithType.map((property) => {
                var _a, _b;
                const parameterObject = Object.assign(Object.assign({}, (0, lodash_1.omit)(property, 'enumName')), { in: (_a = param.in) !== null && _a !== void 0 ? _a : 'query', required: (_b = property.required) !== null && _b !== void 0 ? _b : true });
                return parameterObject;
            });
        }
        return param;
    }
    extractPropertiesFromType(type, schemas, pendingSchemasRefs = []) {
        const { prototype } = type;
        if (!prototype) {
            return;
        }
        const extraModels = (0, api_extra_models_explorer_1.exploreGlobalApiExtraModelsMetadata)(type);
        extraModels.forEach((item) => this.exploreModelSchema(item, schemas, pendingSchemasRefs));
        this.modelPropertiesAccessor.applyMetadataFactory(prototype);
        const modelProperties = this.modelPropertiesAccessor.getModelProperties(prototype);
        const propertiesWithType = modelProperties.map((key) => {
            const property = this.mergePropertyWithMetadata(key, prototype, schemas, pendingSchemasRefs);
            const schemaCombinators = ['oneOf', 'anyOf', 'allOf'];
            let keyOfCombinators = '';
            if (schemaCombinators.some((_key) => {
                keyOfCombinators = _key;
                return _key in property;
            })) {
                if (((property === null || property === void 0 ? void 0 : property.type) === 'array' ||
                    property.isArray) &&
                    keyOfCombinators) {
                    property.items = {};
                    property.items[keyOfCombinators] =
                        property[keyOfCombinators];
                    delete property[keyOfCombinators];
                }
                else {
                    delete property.type;
                }
            }
            return property;
        });
        return propertiesWithType;
    }
    exploreModelSchema(type, schemas, pendingSchemasRefs = []) {
        if (this.isLazyTypeFunc(type)) {
            type = type();
        }
        const propertiesWithType = this.extractPropertiesFromType(type, schemas, pendingSchemasRefs);
        if (!propertiesWithType) {
            return '';
        }
        const extensionProperties = Reflect.getMetadata(constants_1.DECORATORS.API_EXTENSION, type) || {};
        const typeDefinition = Object.assign({ type: 'object', properties: (0, lodash_1.mapValues)((0, lodash_1.keyBy)(propertiesWithType, 'name'), (property) => (0, lodash_1.omit)(property, ['name', 'isArray', 'required', 'enumName'])) }, extensionProperties);
        const typeDefinitionRequiredFields = propertiesWithType
            .filter((property) => property.required != false)
            .map((property) => property.name);
        if (typeDefinitionRequiredFields.length > 0) {
            typeDefinition['required'] = typeDefinitionRequiredFields;
        }
        schemas[type.name] = typeDefinition;
        return type.name;
    }
    mergePropertyWithMetadata(key, prototype, schemas, pendingSchemaRefs, metadata) {
        if (!metadata) {
            metadata =
                Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES, prototype, key) ||
                    {};
        }
        if (this.isLazyTypeFunc(metadata.type)) {
            metadata.type = metadata.type();
            [metadata.type, metadata.isArray] = (0, helpers_1.getTypeIsArrayTuple)(metadata.type, metadata.isArray);
        }
        if (Array.isArray(metadata.type)) {
            return this.createFromNestedArray(key, metadata, schemas, pendingSchemaRefs);
        }
        return this.createSchemaMetadata(key, metadata, schemas, pendingSchemaRefs);
    }
    createEnumParam(param, schemas) {
        var _a, _b, _c, _d, _e;
        const enumName = param.enumName;
        const $ref = (0, utils_1.getSchemaPath)(enumName);
        if (!(enumName in schemas)) {
            const _enum = param.enum
                ? param.enum
                : param.schema
                    ? param.schema['items']
                        ? param.schema['items']['enum']
                        : param.schema['enum']
                    : param.isArray && param.items
                        ? param.items.enum
                        : undefined;
            schemas[enumName] = Object.assign({ type: (_d = (param.isArray
                    ? (_b = (_a = param.schema) === null || _a === void 0 ? void 0 : _a['items']) === null || _b === void 0 ? void 0 : _b['type']
                    : (_c = param.schema) === null || _c === void 0 ? void 0 : _c['type'])) !== null && _d !== void 0 ? _d : 'string', enum: _enum }, (param['x-enumNames'] ? { 'x-enumNames': param['x-enumNames'] } : {}));
        }
        param.schema =
            param.isArray || ((_e = param.schema) === null || _e === void 0 ? void 0 : _e['items'])
                ? { type: 'array', items: { $ref } }
                : { $ref };
        return (0, lodash_1.omit)(param, ['isArray', 'items', 'enumName', 'enum', 'x-enumNames']);
    }
    createEnumSchemaType(key, metadata, schemas) {
        var _a;
        if (!metadata.enumName) {
            return Object.assign(Object.assign({}, metadata), { name: metadata.name || key });
        }
        const enumName = metadata.enumName;
        const $ref = (0, utils_1.getSchemaPath)(enumName);
        const additionalParams = ['description', 'deprecated', 'default'];
        const additionalFields = additionalParams.reduce((acc, param) => (Object.assign(Object.assign({}, acc), (metadata[param] && { [param]: metadata[param] }))), {});
        const enumType = (_a = (metadata.isArray ? metadata.items['type'] : metadata.type)) !== null && _a !== void 0 ? _a : 'string';
        schemas[enumName] = Object.assign(Object.assign({ type: enumType }, additionalFields), { enum: metadata.isArray && metadata.items
                ? metadata.items['enum']
                : metadata.enum });
        const _schemaObject = Object.assign(Object.assign({}, metadata), { name: metadata.name || key, type: metadata.isArray ? 'array' : 'string' });
        const refHost = metadata.isArray ? { items: { $ref } } : { $ref };
        const paramObject = Object.assign(Object.assign({}, _schemaObject), refHost);
        const pathsToOmit = ['enum', 'enumName', ...additionalParams];
        if (!metadata.isArray) {
            pathsToOmit.push('type');
        }
        return (0, lodash_1.omit)(paramObject, pathsToOmit);
    }
    createNotBuiltInTypeReference(key, metadata, trueMetadataType, schemas, pendingSchemaRefs) {
        if ((0, shared_utils_1.isUndefined)(trueMetadataType)) {
            throw new Error(`A circular dependency has been detected (property key: "${key}"). Please, make sure that each side of a bidirectional relationships are using lazy resolvers ("type: () => ClassType").`);
        }
        let schemaObjectName = trueMetadataType.name;
        if (!(schemaObjectName in schemas) &&
            !pendingSchemaRefs.includes(schemaObjectName)) {
            schemaObjectName = this.exploreModelSchema(trueMetadataType, schemas, [...pendingSchemaRefs, schemaObjectName]);
        }
        const $ref = (0, utils_1.getSchemaPath)(schemaObjectName);
        if (metadata.isArray) {
            return this.transformToArraySchemaProperty(metadata, key, { $ref });
        }
        const keysToRemove = ['type', 'isArray', 'required', 'name'];
        const validMetadataObject = (0, lodash_1.omit)(metadata, keysToRemove);
        const extraMetadataKeys = Object.keys(validMetadataObject);
        if (extraMetadataKeys.length > 0) {
            return Object.assign(Object.assign({ name: metadata.name || key, required: metadata.required }, validMetadataObject), { allOf: [{ $ref }] });
        }
        return {
            name: metadata.name || key,
            required: metadata.required,
            $ref
        };
    }
    transformToArraySchemaProperty(metadata, key, type) {
        const keysToRemove = ['type', 'enum'];
        const [movedProperties, keysToMove] = this.extractPropertyModifiers(metadata);
        const schemaHost = Object.assign(Object.assign({}, (0, lodash_1.omit)(metadata, [...keysToRemove, ...keysToMove])), { name: metadata.name || key, type: 'array', items: (0, lodash_1.isString)(type)
                ? Object.assign({ type }, movedProperties) : Object.assign(Object.assign({}, type), movedProperties) });
        schemaHost.items = (0, lodash_1.omitBy)(schemaHost.items, shared_utils_1.isUndefined);
        return schemaHost;
    }
    mapArrayCtorParam(param) {
        return Object.assign(Object.assign({}, (0, lodash_1.omit)(param, 'type')), { schema: {
                type: 'array',
                items: {
                    type: 'string'
                }
            } });
    }
    createFromObjectLiteral(key, literalObj, schemas) {
        const objLiteralKeys = Object.keys(literalObj);
        const properties = {};
        objLiteralKeys.forEach((key) => {
            const propertyCompilerMetadata = literalObj[key];
            if ((0, enum_utils_1.isEnumArray)(propertyCompilerMetadata)) {
                propertyCompilerMetadata.type = 'array';
                const enumValues = (0, enum_utils_1.getEnumValues)(propertyCompilerMetadata.enum);
                propertyCompilerMetadata.items = {
                    type: (0, enum_utils_1.getEnumType)(enumValues),
                    enum: enumValues
                };
                delete propertyCompilerMetadata.enum;
            }
            else if (propertyCompilerMetadata.enum) {
                const enumValues = (0, enum_utils_1.getEnumValues)(propertyCompilerMetadata.enum);
                propertyCompilerMetadata.enum = enumValues;
                propertyCompilerMetadata.type = (0, enum_utils_1.getEnumType)(enumValues);
            }
            const propertyMetadata = this.mergePropertyWithMetadata(key, Object, schemas, [], propertyCompilerMetadata);
            const keysToRemove = ['isArray', 'name'];
            const validMetadataObject = (0, lodash_1.omit)(propertyMetadata, keysToRemove);
            properties[key] = validMetadataObject;
        });
        return {
            name: key,
            type: 'object',
            properties
        };
    }
    createFromNestedArray(key, metadata, schemas, pendingSchemaRefs) {
        const recurse = (type) => {
            if (!Array.isArray(type)) {
                const schemaMetadata = this.createSchemaMetadata(key, metadata, schemas, pendingSchemaRefs, type);
                return (0, lodash_1.omit)(schemaMetadata, ['isArray', 'name']);
            }
            return {
                name: key,
                type: 'array',
                items: recurse(type[0])
            };
        };
        return recurse(metadata.type);
    }
    createSchemaMetadata(key, metadata, schemas, pendingSchemaRefs, nestedArrayType) {
        const typeRef = nestedArrayType || metadata.type;
        if (this.isObjectLiteral(typeRef)) {
            return this.createFromObjectLiteral(key, typeRef, schemas);
        }
        if ((0, lodash_1.isString)(typeRef)) {
            if ((0, enum_utils_1.isEnumMetadata)(metadata)) {
                return this.createEnumSchemaType(key, metadata, schemas);
            }
            if (metadata.isArray) {
                return this.transformToArraySchemaProperty(metadata, key, typeRef);
            }
            return Object.assign(Object.assign({}, metadata), { name: metadata.name || key });
        }
        if ((0, is_date_ctor_util_1.isDateCtor)(typeRef)) {
            if (metadata.isArray) {
                return this.transformToArraySchemaProperty(metadata, key, {
                    format: metadata.format || 'date-time',
                    type: 'string'
                });
            }
            return Object.assign(Object.assign({ format: 'date-time' }, metadata), { type: 'string', name: metadata.name || key });
        }
        if (this.isBigInt(typeRef)) {
            return Object.assign(Object.assign({ format: 'int64' }, metadata), { type: 'integer', name: metadata.name || key });
        }
        if (!(0, is_built_in_type_util_1.isBuiltInType)(typeRef)) {
            return this.createNotBuiltInTypeReference(key, metadata, typeRef, schemas, pendingSchemaRefs);
        }
        const typeName = this.getTypeName(typeRef);
        const itemType = this.swaggerTypesMapper.mapTypeToOpenAPIType(typeName);
        if (metadata.isArray) {
            return this.transformToArraySchemaProperty(metadata, key, {
                type: itemType
            });
        }
        else if (itemType === 'array') {
            const defaultOnArray = 'string';
            return this.transformToArraySchemaProperty(metadata, key, {
                type: defaultOnArray
            });
        }
        return Object.assign(Object.assign({}, metadata), { name: metadata.name || key, type: itemType });
    }
    isArrayCtor(type) {
        return type === Array;
    }
    isPrimitiveType(type) {
        return ((0, lodash_1.isFunction)(type) &&
            [String, Boolean, Number].some((item) => item === type));
    }
    isLazyTypeFunc(type) {
        return (0, lodash_1.isFunction)(type) && type.name == 'type';
    }
    getTypeName(type) {
        return type && (0, lodash_1.isFunction)(type) ? type.name : type;
    }
    isObjectLiteral(obj) {
        if (typeof obj !== 'object' || !obj) {
            return false;
        }
        const hasOwnProp = Object.prototype.hasOwnProperty;
        let objPrototype = obj;
        while (Object.getPrototypeOf((objPrototype = Object.getPrototypeOf(objPrototype))) !== null)
            ;
        for (const prop in obj) {
            if (!hasOwnProp.call(obj, prop) && !hasOwnProp.call(objPrototype, prop)) {
                return false;
            }
        }
        return Object.getPrototypeOf(obj) === objPrototype;
    }
    isBigInt(type) {
        return type === BigInt;
    }
    extractPropertyModifiers(metadata) {
        const modifierKeys = [
            'format',
            'maximum',
            'maxLength',
            'minimum',
            'minLength',
            'pattern'
        ];
        return [(0, lodash_1.pick)(metadata, modifierKeys), modifierKeys];
    }
}
exports.SchemaObjectFactory = SchemaObjectFactory;


/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exploreApiExtraModelsMetadata = exports.exploreGlobalApiExtraModelsMetadata = void 0;
const constants_1 = __webpack_require__(10);
const exploreGlobalApiExtraModelsMetadata = (metatype) => {
    const extraModels = Reflect.getMetadata(constants_1.DECORATORS.API_EXTRA_MODELS, metatype);
    return extraModels || [];
};
exports.exploreGlobalApiExtraModelsMetadata = exploreGlobalApiExtraModelsMetadata;
const exploreApiExtraModelsMetadata = (instance, prototype, method) => Reflect.getMetadata(constants_1.DECORATORS.API_EXTRA_MODELS, method) || [];
exports.exploreApiExtraModelsMetadata = exploreApiExtraModelsMetadata;


/***/ }),
/* 72 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(73), exports);


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.refs = exports.getSchemaPath = void 0;
const shared_utils_1 = __webpack_require__(18);
function getSchemaPath(model) {
    const modelName = (0, shared_utils_1.isString)(model) ? model : model && model.name;
    return `#/components/schemas/${modelName}`;
}
exports.getSchemaPath = getSchemaPath;
function refs(...models) {
    return models.map((item) => ({
        $ref: getSchemaPath(item.name)
    }));
}
exports.refs = refs;


/***/ }),
/* 74 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBodyParameter = void 0;
function isBodyParameter(param) {
    return param.in === 'body';
}
exports.isBodyParameter = isBodyParameter;


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isBuiltInType = void 0;
const lodash_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(76);
function isBuiltInType(type) {
    return (0, lodash_1.isFunction)(type) && constants_1.BUILT_IN_TYPES.some((item) => item === type);
}
exports.isBuiltInType = isBuiltInType;


/***/ }),
/* 76 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BUILT_IN_TYPES = void 0;
exports.BUILT_IN_TYPES = [String, Boolean, Number, Object, Array];


/***/ }),
/* 77 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isDateCtor = void 0;
function isDateCtor(type) {
    return type === Date;
}
exports.isDateCtor = isDateCtor;


/***/ }),
/* 78 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwaggerTypesMapper = void 0;
const lodash_1 = __webpack_require__(9);
class SwaggerTypesMapper {
    constructor() {
        this.keysToRemove = [
            'type',
            'isArray',
            'enum',
            'enumName',
            'items',
            '$ref',
            ...this.getSchemaOptionsKeys()
        ];
    }
    mapParamTypes(parameters) {
        return parameters.map((param) => {
            if (this.hasSchemaDefinition(param)) {
                return this.omitParamKeys(param);
            }
            const { type } = param;
            const typeName = type && (0, lodash_1.isFunction)(type)
                ? this.mapTypeToOpenAPIType(type.name)
                : this.mapTypeToOpenAPIType(type);
            const paramWithTypeMetadata = (0, lodash_1.omitBy)(Object.assign(Object.assign({}, param), { type: typeName }), lodash_1.isUndefined);
            if (this.isEnumArrayType(paramWithTypeMetadata)) {
                return this.mapEnumArrayType(paramWithTypeMetadata, this.keysToRemove);
            }
            else if (paramWithTypeMetadata.isArray) {
                return this.mapArrayType(paramWithTypeMetadata, this.keysToRemove);
            }
            return Object.assign(Object.assign({}, (0, lodash_1.omit)(param, this.keysToRemove)), { schema: (0, lodash_1.omitBy)(Object.assign(Object.assign(Object.assign({}, this.getSchemaOptions(param)), (param.schema || {})), { enum: paramWithTypeMetadata.enum, type: paramWithTypeMetadata.type, $ref: paramWithTypeMetadata.$ref }), lodash_1.isUndefined) });
        });
    }
    mapTypeToOpenAPIType(type) {
        if (!(type && type.charAt)) {
            return;
        }
        return type.charAt(0).toLowerCase() + type.slice(1);
    }
    mapEnumArrayType(param, keysToRemove) {
        return Object.assign(Object.assign({}, (0, lodash_1.omit)(param, keysToRemove)), { schema: Object.assign(Object.assign({}, this.getSchemaOptions(param)), { type: 'array', items: param.items }) });
    }
    mapArrayType(param, keysToRemove) {
        const items = param.items ||
            (0, lodash_1.omitBy)(Object.assign(Object.assign({}, (param.schema || {})), { enum: param.enum, type: this.mapTypeToOpenAPIType(param.type) }), lodash_1.isUndefined);
        return Object.assign(Object.assign({}, (0, lodash_1.omit)(param, keysToRemove)), { schema: Object.assign(Object.assign({}, this.getSchemaOptions(param)), { type: 'array', items }) });
    }
    getSchemaOptions(param) {
        const schemaKeys = this.getSchemaOptionsKeys();
        const optionsObject = schemaKeys.reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: param[key] })), {});
        return (0, lodash_1.omitBy)(optionsObject, lodash_1.isUndefined);
    }
    isEnumArrayType(param) {
        return param.isArray && param.items && param.items.enum;
    }
    hasSchemaDefinition(param) {
        return !!param.schema;
    }
    omitParamKeys(param) {
        return (0, lodash_1.omit)(param, this.keysToRemove);
    }
    getSchemaOptionsKeys() {
        return [
            'properties',
            'patternProperties',
            'additionalProperties',
            'minimum',
            'maximum',
            'maxProperties',
            'minItems',
            'minProperties',
            'maxItems',
            'minLength',
            'maxLength',
            'exclusiveMaximum',
            'exclusiveMinimum',
            'uniqueItems',
            'title',
            'format',
            'pattern',
            'nullable',
            'default',
            'example'
        ];
    }
}
exports.SwaggerTypesMapper = SwaggerTypesMapper;


/***/ }),
/* 79 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwaggerExplorer = void 0;
const common_1 = __webpack_require__(1);
const constants_1 = __webpack_require__(17);
const interfaces_1 = __webpack_require__(80);
const shared_utils_1 = __webpack_require__(18);
const core_1 = __webpack_require__(2);
const route_path_factory_1 = __webpack_require__(81);
const lodash_1 = __webpack_require__(9);
const pathToRegexp = __webpack_require__(82);
const constants_2 = __webpack_require__(10);
const api_exclude_controller_explorer_1 = __webpack_require__(83);
const api_exclude_endpoint_explorer_1 = __webpack_require__(84);
const api_extra_models_explorer_1 = __webpack_require__(71);
const api_headers_explorer_1 = __webpack_require__(85);
const api_operation_explorer_1 = __webpack_require__(86);
const api_parameters_explorer_1 = __webpack_require__(87);
const api_response_explorer_1 = __webpack_require__(92);
const api_security_explorer_1 = __webpack_require__(97);
const api_use_tags_explorer_1 = __webpack_require__(98);
const mimetype_content_wrapper_1 = __webpack_require__(94);
const is_body_parameter_util_1 = __webpack_require__(74);
const merge_and_uniq_util_1 = __webpack_require__(96);
class SwaggerExplorer {
    constructor(schemaObjectFactory) {
        this.schemaObjectFactory = schemaObjectFactory;
        this.mimetypeContentWrapper = new mimetype_content_wrapper_1.MimetypeContentWrapper();
        this.metadataScanner = new core_1.MetadataScanner();
        this.schemas = {};
        this.operationIdFactory = (controllerKey, methodKey) => (controllerKey ? `${controllerKey}_${methodKey}` : methodKey);
    }
    exploreController(wrapper, applicationConfig, modulePath, globalPrefix, operationIdFactory) {
        this.routePathFactory = new route_path_factory_1.RoutePathFactory(applicationConfig);
        if (operationIdFactory) {
            this.operationIdFactory = operationIdFactory;
        }
        const { instance, metatype } = wrapper;
        const prototype = Object.getPrototypeOf(instance);
        const documentResolvers = {
            root: [
                this.exploreRoutePathAndMethod,
                api_operation_explorer_1.exploreApiOperationMetadata,
                api_parameters_explorer_1.exploreApiParametersMetadata.bind(null, this.schemas)
            ],
            security: [api_security_explorer_1.exploreApiSecurityMetadata],
            tags: [api_use_tags_explorer_1.exploreApiTagsMetadata],
            responses: [api_response_explorer_1.exploreApiResponseMetadata.bind(null, this.schemas)]
        };
        return this.generateDenormalizedDocument(metatype, prototype, instance, documentResolvers, applicationConfig, modulePath, globalPrefix);
    }
    getSchemas() {
        return this.schemas;
    }
    generateDenormalizedDocument(metatype, prototype, instance, documentResolvers, applicationConfig, modulePath, globalPrefix) {
        const self = this;
        const excludeController = (0, api_exclude_controller_explorer_1.exploreApiExcludeControllerMetadata)(metatype);
        if (excludeController) {
            return [];
        }
        const globalMetadata = this.exploreGlobalMetadata(metatype);
        const ctrlExtraModels = (0, api_extra_models_explorer_1.exploreGlobalApiExtraModelsMetadata)(metatype);
        this.registerExtraModels(ctrlExtraModels);
        const denormalizedPaths = this.metadataScanner.scanFromPrototype(instance, prototype, (name) => {
            const targetCallback = prototype[name];
            const excludeEndpoint = (0, api_exclude_endpoint_explorer_1.exploreApiExcludeEndpointMetadata)(instance, prototype, targetCallback);
            if (excludeEndpoint && excludeEndpoint.disable) {
                return;
            }
            const ctrlExtraModels = (0, api_extra_models_explorer_1.exploreApiExtraModelsMetadata)(instance, prototype, targetCallback);
            this.registerExtraModels(ctrlExtraModels);
            const methodMetadata = (0, lodash_1.mapValues)(documentResolvers, (explorers) => explorers.reduce((metadata, fn) => {
                const exploredMetadata = fn.call(self, instance, prototype, targetCallback, metatype, globalPrefix, modulePath, applicationConfig);
                if (!exploredMetadata) {
                    return metadata;
                }
                if (!(0, lodash_1.isArray)(exploredMetadata)) {
                    if (Array.isArray(metadata)) {
                        return metadata.map((item) => (Object.assign(Object.assign({}, item), exploredMetadata)));
                    }
                    return Object.assign(Object.assign({}, metadata), exploredMetadata);
                }
                return (0, lodash_1.isArray)(metadata)
                    ? [...metadata, ...exploredMetadata]
                    : exploredMetadata;
            }, {}));
            if (Array.isArray(methodMetadata.root)) {
                return methodMetadata.root.map((endpointMetadata) => {
                    endpointMetadata = (0, lodash_1.cloneDeep)(Object.assign(Object.assign({}, methodMetadata), { root: endpointMetadata }));
                    const mergedMethodMetadata = this.mergeMetadata(globalMetadata, (0, lodash_1.omitBy)(endpointMetadata, lodash_1.isEmpty));
                    return this.migrateOperationSchema(Object.assign(Object.assign({ responses: {} }, (0, lodash_1.omit)(globalMetadata, 'chunks')), mergedMethodMetadata), prototype, targetCallback);
                });
            }
            const mergedMethodMetadata = this.mergeMetadata(globalMetadata, (0, lodash_1.omitBy)(methodMetadata, lodash_1.isEmpty));
            return [
                this.migrateOperationSchema(Object.assign(Object.assign({ responses: {} }, (0, lodash_1.omit)(globalMetadata, 'chunks')), mergedMethodMetadata), prototype, targetCallback)
            ];
        });
        return (0, lodash_1.flatten)(denormalizedPaths).filter((path) => { var _a; return (_a = path.root) === null || _a === void 0 ? void 0 : _a.path; });
    }
    exploreGlobalMetadata(metatype) {
        const globalExplorers = [
            api_use_tags_explorer_1.exploreGlobalApiTagsMetadata,
            api_security_explorer_1.exploreGlobalApiSecurityMetadata,
            api_response_explorer_1.exploreGlobalApiResponseMetadata.bind(null, this.schemas),
            api_headers_explorer_1.exploreGlobalApiHeaderMetadata
        ];
        const globalMetadata = globalExplorers
            .map((explorer) => explorer.call(explorer, metatype))
            .filter((val) => !(0, shared_utils_1.isUndefined)(val))
            .reduce((curr, next) => {
            if (next.depth) {
                return Object.assign(Object.assign({}, curr), { chunks: (curr.chunks || []).concat(next) });
            }
            return Object.assign(Object.assign({}, curr), next);
        }, {});
        return globalMetadata;
    }
    exploreRoutePathAndMethod(instance, prototype, method, metatype, globalPrefix, modulePath, applicationConfig) {
        const methodPath = Reflect.getMetadata(constants_1.PATH_METADATA, method);
        if ((0, shared_utils_1.isUndefined)(methodPath)) {
            return undefined;
        }
        const requestMethod = Reflect.getMetadata(constants_1.METHOD_METADATA, method);
        const methodVersion = Reflect.getMetadata(constants_1.VERSION_METADATA, method);
        const versioningOptions = applicationConfig.getVersioning();
        const controllerVersion = this.getVersionMetadata(metatype, versioningOptions);
        const versionOrVersions = methodVersion !== null && methodVersion !== void 0 ? methodVersion : controllerVersion;
        const versions = this.getRoutePathVersions(versionOrVersions, versioningOptions);
        const allRoutePaths = this.routePathFactory.create({
            methodPath,
            methodVersion,
            modulePath,
            globalPrefix,
            controllerVersion,
            ctrlPath: this.reflectControllerPath(metatype),
            versioningOptions: applicationConfig.getVersioning()
        }, requestMethod);
        return (0, lodash_1.flatten)(allRoutePaths.map((routePath) => {
            const fullPath = this.validateRoutePath(routePath);
            const apiExtension = Reflect.getMetadata(constants_2.DECORATORS.API_EXTENSION, method);
            if (requestMethod === common_1.RequestMethod.ALL) {
                const validMethods = Object.values(common_1.RequestMethod).filter((meth) => meth !== 'ALL' && typeof meth === 'string');
                return validMethods.map((meth) => (Object.assign({ method: meth.toLowerCase(), path: fullPath === '' ? '/' : fullPath, operationId: `${this.getOperationId(instance, method)}_${meth.toLowerCase()}` }, apiExtension)));
            }
            const pathVersion = versions.find((v) => fullPath.includes(`/${v}/`));
            return Object.assign({ method: common_1.RequestMethod[requestMethod].toLowerCase(), path: fullPath === '' ? '/' : fullPath, operationId: this.getOperationId(instance, method, pathVersion) }, apiExtension);
        }));
    }
    getOperationId(instance, method, version) {
        var _a;
        return this.operationIdFactory(((_a = instance.constructor) === null || _a === void 0 ? void 0 : _a.name) || '', method.name, version);
    }
    getRoutePathVersions(versionValue, versioningOptions) {
        let versions = [];
        if (!versionValue || (versioningOptions === null || versioningOptions === void 0 ? void 0 : versioningOptions.type) !== common_1.VersioningType.URI) {
            return versions;
        }
        if (Array.isArray(versionValue)) {
            versions = versionValue.filter((v) => v !== interfaces_1.VERSION_NEUTRAL);
        }
        else if (versionValue !== interfaces_1.VERSION_NEUTRAL) {
            versions = [versionValue];
        }
        const prefix = this.routePathFactory.getVersionPrefix(versioningOptions);
        versions = versions.map((v) => `${prefix}${v}`);
        return versions;
    }
    reflectControllerPath(metatype) {
        return Reflect.getMetadata(constants_1.PATH_METADATA, metatype);
    }
    validateRoutePath(path) {
        if ((0, shared_utils_1.isUndefined)(path)) {
            return '';
        }
        if (Array.isArray(path)) {
            path = (0, lodash_1.head)(path);
        }
        let pathWithParams = '';
        for (const item of pathToRegexp.parse(path)) {
            pathWithParams += (0, shared_utils_1.isString)(item) ? item : `${item.prefix}{${item.name}}`;
        }
        return pathWithParams === '/' ? '' : (0, shared_utils_1.addLeadingSlash)(pathWithParams);
    }
    mergeMetadata(globalMetadata, methodMetadata) {
        if (methodMetadata.root && !methodMetadata.root.parameters) {
            methodMetadata.root.parameters = [];
        }
        const deepMerge = (metadata) => (value, key) => {
            if (!metadata[key]) {
                return value;
            }
            const globalValue = metadata[key];
            if (metadata.depth) {
                return this.deepMergeMetadata(globalValue, value, metadata.depth);
            }
            return this.mergeValues(globalValue, value);
        };
        if (globalMetadata.chunks) {
            const { chunks } = globalMetadata;
            chunks.forEach((chunk) => {
                methodMetadata = (0, lodash_1.mapValues)(methodMetadata, deepMerge(chunk));
            });
        }
        return (0, lodash_1.mapValues)(methodMetadata, deepMerge(globalMetadata));
    }
    deepMergeMetadata(globalValue, methodValue, maxDepth, currentDepthLevel = 0) {
        if (currentDepthLevel === maxDepth) {
            return this.mergeValues(globalValue, methodValue);
        }
        return (0, lodash_1.mapValues)(methodValue, (value, key) => {
            if (key in globalValue) {
                return this.deepMergeMetadata(globalValue[key], methodValue[key], maxDepth, currentDepthLevel + 1);
            }
            return value;
        });
    }
    mergeValues(globalValue, methodValue) {
        if (!(0, lodash_1.isArray)(globalValue)) {
            return Object.assign(Object.assign({}, globalValue), methodValue);
        }
        return [...globalValue, ...methodValue];
    }
    migrateOperationSchema(document, prototype, method) {
        const parametersObject = (0, lodash_1.get)(document, 'root.parameters');
        const requestBodyIndex = (parametersObject || []).findIndex(is_body_parameter_util_1.isBodyParameter);
        if (requestBodyIndex < 0) {
            return document;
        }
        const requestBody = parametersObject[requestBodyIndex];
        parametersObject.splice(requestBodyIndex, 1);
        const classConsumes = Reflect.getMetadata(constants_2.DECORATORS.API_CONSUMES, prototype);
        const methodConsumes = Reflect.getMetadata(constants_2.DECORATORS.API_CONSUMES, method);
        let consumes = (0, merge_and_uniq_util_1.mergeAndUniq)(classConsumes, methodConsumes);
        consumes = (0, lodash_1.isEmpty)(consumes) ? ['application/json'] : consumes;
        const keysToRemove = ['schema', 'in', 'name', 'examples'];
        document.root.requestBody = Object.assign(Object.assign({}, (0, lodash_1.omit)(requestBody, keysToRemove)), this.mimetypeContentWrapper.wrap(consumes, (0, lodash_1.pick)(requestBody, ['schema', 'examples'])));
        return document;
    }
    registerExtraModels(extraModels) {
        extraModels.forEach((item) => this.schemaObjectFactory.exploreModelSchema(item, this.schemas));
    }
    getVersionMetadata(metatype, versioningOptions) {
        var _a;
        if ((versioningOptions === null || versioningOptions === void 0 ? void 0 : versioningOptions.type) === common_1.VersioningType.URI) {
            return ((_a = Reflect.getMetadata(constants_1.VERSION_METADATA, metatype)) !== null && _a !== void 0 ? _a : versioningOptions.defaultVersion);
        }
    }
}
exports.SwaggerExplorer = SwaggerExplorer;


/***/ }),
/* 80 */
/***/ ((module) => {

module.exports = require("@nestjs/common/interfaces");

/***/ }),
/* 81 */
/***/ ((module) => {

module.exports = require("@nestjs/core/router/route-path-factory");

/***/ }),
/* 82 */
/***/ ((module) => {

module.exports = require("path-to-regexp");

/***/ }),
/* 83 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exploreApiExcludeControllerMetadata = void 0;
const constants_1 = __webpack_require__(10);
const exploreApiExcludeControllerMetadata = (metatype) => {
    var _a;
    return ((_a = Reflect.getMetadata(constants_1.DECORATORS.API_EXCLUDE_CONTROLLER, metatype)) === null || _a === void 0 ? void 0 : _a[0]) ===
        true;
};
exports.exploreApiExcludeControllerMetadata = exploreApiExcludeControllerMetadata;


/***/ }),
/* 84 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exploreApiExcludeEndpointMetadata = void 0;
const constants_1 = __webpack_require__(10);
const exploreApiExcludeEndpointMetadata = (instance, prototype, method) => Reflect.getMetadata(constants_1.DECORATORS.API_EXCLUDE_ENDPOINT, method);
exports.exploreApiExcludeEndpointMetadata = exploreApiExcludeEndpointMetadata;


/***/ }),
/* 85 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exploreGlobalApiHeaderMetadata = void 0;
const constants_1 = __webpack_require__(10);
const exploreGlobalApiHeaderMetadata = (metatype) => {
    const headers = Reflect.getMetadata(constants_1.DECORATORS.API_HEADERS, metatype);
    return headers ? { root: { parameters: headers }, depth: 1 } : undefined;
};
exports.exploreGlobalApiHeaderMetadata = exploreGlobalApiHeaderMetadata;


/***/ }),
/* 86 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exploreApiOperationMetadata = void 0;
const constants_1 = __webpack_require__(10);
const api_operation_decorator_1 = __webpack_require__(27);
const plugin_constants_1 = __webpack_require__(16);
const exploreApiOperationMetadata = (instance, prototype, method) => {
    applyMetadataFactory(prototype, instance);
    return Reflect.getMetadata(constants_1.DECORATORS.API_OPERATION, method);
};
exports.exploreApiOperationMetadata = exploreApiOperationMetadata;
function applyMetadataFactory(prototype, instance) {
    const classPrototype = prototype;
    do {
        if (!prototype.constructor) {
            return;
        }
        if (!prototype.constructor[plugin_constants_1.METADATA_FACTORY_NAME]) {
            continue;
        }
        const metadata = prototype.constructor[plugin_constants_1.METADATA_FACTORY_NAME]();
        const methodKeys = Object.keys(metadata).filter((key) => typeof instance[key] === 'function');
        methodKeys.forEach((key) => {
            const operationMeta = {};
            const { summary, deprecated, tags } = metadata[key];
            applyIfNotNil(operationMeta, 'summary', summary);
            applyIfNotNil(operationMeta, 'deprecated', deprecated);
            applyIfNotNil(operationMeta, 'tags', tags);
            if (Object.keys(operationMeta).length === 0) {
                return;
            }
            (0, api_operation_decorator_1.ApiOperation)(operationMeta, { overrideExisting: false })(classPrototype, key, Object.getOwnPropertyDescriptor(classPrototype, key));
        });
    } while ((prototype = Reflect.getPrototypeOf(prototype)) &&
        prototype !== Object.prototype &&
        prototype);
}
function applyIfNotNil(target, key, value) {
    if (value !== undefined && value !== null) {
        target[key] = value;
    }
}


/***/ }),
/* 87 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exploreApiParametersMetadata = void 0;
const lodash_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(10);
const model_properties_accessor_1 = __webpack_require__(69);
const parameter_metadata_accessor_1 = __webpack_require__(88);
const parameters_metadata_mapper_1 = __webpack_require__(91);
const schema_object_factory_1 = __webpack_require__(70);
const swagger_types_mapper_1 = __webpack_require__(78);
const global_parameters_storage_1 = __webpack_require__(37);
const parameterMetadataAccessor = new parameter_metadata_accessor_1.ParameterMetadataAccessor();
const modelPropertiesAccessor = new model_properties_accessor_1.ModelPropertiesAccessor();
const parametersMetadataMapper = new parameters_metadata_mapper_1.ParametersMetadataMapper(modelPropertiesAccessor);
const swaggerTypesMapper = new swagger_types_mapper_1.SwaggerTypesMapper();
const schemaObjectFactory = new schema_object_factory_1.SchemaObjectFactory(modelPropertiesAccessor, swaggerTypesMapper);
const exploreApiParametersMetadata = (schemas, instance, prototype, method) => {
    const explicitParameters = Reflect.getMetadata(constants_1.DECORATORS.API_PARAMETERS, method);
    const globalParameters = global_parameters_storage_1.GlobalParametersStorage.getAll();
    const parametersMetadata = parameterMetadataAccessor.explore(instance, prototype, method);
    const noExplicitAndGlobalMetadata = (0, lodash_1.isNil)(explicitParameters) && (0, lodash_1.isNil)(globalParameters);
    if (noExplicitAndGlobalMetadata && (0, lodash_1.isNil)(parametersMetadata)) {
        return undefined;
    }
    const reflectedParametersAsProperties = parametersMetadataMapper.transformModelToProperties(parametersMetadata || {});
    let properties = reflectedParametersAsProperties;
    if (!noExplicitAndGlobalMetadata) {
        const mergeImplicitAndExplicit = (item) => (0, lodash_1.assign)(item, (0, lodash_1.find)(explicitParameters, ['name', item.name]));
        properties = removeBodyMetadataIfExplicitExists(properties, explicitParameters);
        properties = (0, lodash_1.map)(properties, mergeImplicitAndExplicit);
        properties = (0, lodash_1.unionWith)(properties, explicitParameters, globalParameters, (arrVal, othVal) => {
            return arrVal.name === othVal.name && arrVal.in === othVal.in;
        });
    }
    const paramsWithDefinitions = schemaObjectFactory.createFromModel(properties, schemas);
    const parameters = swaggerTypesMapper.mapParamTypes(paramsWithDefinitions);
    return parameters ? { parameters } : undefined;
};
exports.exploreApiParametersMetadata = exploreApiParametersMetadata;
function removeBodyMetadataIfExplicitExists(properties, explicitParams) {
    const isBodyReflected = (0, lodash_1.some)(properties, (p) => p.in === 'body');
    const isBodyDefinedExplicitly = (0, lodash_1.some)(explicitParams, (p) => p.in === 'body');
    if (isBodyReflected && isBodyDefinedExplicitly) {
        return (0, lodash_1.omitBy)(properties, (p) => p.in === 'body');
    }
    return properties;
}


/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParameterMetadataAccessor = void 0;
const constants_1 = __webpack_require__(17);
const route_paramtypes_enum_1 = __webpack_require__(89);
const lodash_1 = __webpack_require__(9);
const reverse_object_keys_util_1 = __webpack_require__(90);
const PARAM_TOKEN_PLACEHOLDER = 'placeholder';
class ParameterMetadataAccessor {
    explore(instance, prototype, method) {
        const types = Reflect.getMetadata(constants_1.PARAMTYPES_METADATA, instance, method.name);
        const routeArgsMetadata = Reflect.getMetadata(constants_1.ROUTE_ARGS_METADATA, instance.constructor, method.name) || {};
        const parametersWithType = (0, lodash_1.mapValues)((0, reverse_object_keys_util_1.reverseObjectKeys)(routeArgsMetadata), (param) => ({
            type: types[param.index],
            name: param.data,
            required: true
        }));
        const excludePredicate = (val) => val.in === PARAM_TOKEN_PLACEHOLDER || (val.name && val.in === 'body');
        const parameters = (0, lodash_1.omitBy)((0, lodash_1.mapValues)(parametersWithType, (val, key) => (Object.assign(Object.assign({}, val), { in: this.mapParamType(key) }))), excludePredicate);
        return !(0, lodash_1.isEmpty)(parameters) ? parameters : undefined;
    }
    mapParamType(key) {
        const keyPair = key.split(':');
        switch (Number(keyPair[0])) {
            case route_paramtypes_enum_1.RouteParamtypes.BODY:
                return 'body';
            case route_paramtypes_enum_1.RouteParamtypes.PARAM:
                return 'path';
            case route_paramtypes_enum_1.RouteParamtypes.QUERY:
                return 'query';
            case route_paramtypes_enum_1.RouteParamtypes.HEADERS:
                return 'header';
            default:
                return PARAM_TOKEN_PLACEHOLDER;
        }
    }
}
exports.ParameterMetadataAccessor = ParameterMetadataAccessor;


/***/ }),
/* 89 */
/***/ ((module) => {

module.exports = require("@nestjs/common/enums/route-paramtypes.enum");

/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.reverseObjectKeys = void 0;
function reverseObjectKeys(originalObject) {
    const reversedObject = {};
    const keys = Object.keys(originalObject).reverse();
    for (const key of keys) {
        reversedObject[key] = originalObject[key];
    }
    return reversedObject;
}
exports.reverseObjectKeys = reverseObjectKeys;


/***/ }),
/* 91 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParametersMetadataMapper = void 0;
const shared_utils_1 = __webpack_require__(18);
const lodash_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(10);
const is_body_parameter_util_1 = __webpack_require__(74);
class ParametersMetadataMapper {
    constructor(modelPropertiesAccessor) {
        this.modelPropertiesAccessor = modelPropertiesAccessor;
    }
    transformModelToProperties(parameters) {
        const properties = (0, lodash_1.flatMap)(parameters, (param) => {
            if (!param || param.type === Object || !param.type) {
                return undefined;
            }
            if (param.name) {
                return param;
            }
            if ((0, is_body_parameter_util_1.isBodyParameter)(param)) {
                const isCtor = param.type && (0, shared_utils_1.isFunction)(param.type);
                const name = isCtor ? param.type.name : param.type;
                return Object.assign(Object.assign({}, param), { name });
            }
            const { prototype } = param.type;
            this.modelPropertiesAccessor.applyMetadataFactory(prototype);
            const modelProperties = this.modelPropertiesAccessor.getModelProperties(prototype);
            return modelProperties.map((key) => this.mergeImplicitWithExplicit(key, prototype, param));
        });
        return properties.filter(lodash_1.identity);
    }
    mergeImplicitWithExplicit(key, prototype, param) {
        const reflectedParam = Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES, prototype, key) ||
            {};
        return Object.assign(Object.assign(Object.assign({}, param), reflectedParam), { name: reflectedParam.name || key });
    }
}
exports.ParametersMetadataMapper = ParametersMetadataMapper;


/***/ }),
/* 92 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exploreApiResponseMetadata = exports.exploreGlobalApiResponseMetadata = void 0;
const common_1 = __webpack_require__(1);
const constants_1 = __webpack_require__(17);
const shared_utils_1 = __webpack_require__(18);
const lodash_1 = __webpack_require__(9);
const constants_2 = __webpack_require__(10);
const decorators_1 = __webpack_require__(6);
const plugin_constants_1 = __webpack_require__(16);
const response_object_factory_1 = __webpack_require__(93);
const merge_and_uniq_util_1 = __webpack_require__(96);
const responseObjectFactory = new response_object_factory_1.ResponseObjectFactory();
const exploreGlobalApiResponseMetadata = (schemas, metatype) => {
    const responses = Reflect.getMetadata(constants_2.DECORATORS.API_RESPONSE, metatype);
    const produces = Reflect.getMetadata(constants_2.DECORATORS.API_PRODUCES, metatype);
    return responses
        ? {
            responses: mapResponsesToSwaggerResponses(responses, schemas, produces)
        }
        : undefined;
};
exports.exploreGlobalApiResponseMetadata = exploreGlobalApiResponseMetadata;
const exploreApiResponseMetadata = (schemas, instance, prototype, method) => {
    applyMetadataFactory(prototype, instance);
    const responses = Reflect.getMetadata(constants_2.DECORATORS.API_RESPONSE, method);
    if (responses) {
        const classProduces = Reflect.getMetadata(constants_2.DECORATORS.API_PRODUCES, prototype);
        const methodProduces = Reflect.getMetadata(constants_2.DECORATORS.API_PRODUCES, method);
        const produces = (0, merge_and_uniq_util_1.mergeAndUniq)((0, lodash_1.get)(classProduces, 'produces'), methodProduces);
        return mapResponsesToSwaggerResponses(responses, schemas, produces);
    }
    const status = getStatusCode(method);
    if (status) {
        return { [status]: { description: '' } };
    }
    return undefined;
};
exports.exploreApiResponseMetadata = exploreApiResponseMetadata;
const getStatusCode = (method) => {
    const status = Reflect.getMetadata(constants_1.HTTP_CODE_METADATA, method);
    if (status) {
        return status;
    }
    const requestMethod = Reflect.getMetadata(constants_1.METHOD_METADATA, method);
    switch (requestMethod) {
        case common_1.RequestMethod.POST:
            return common_1.HttpStatus.CREATED;
        default:
            return common_1.HttpStatus.OK;
    }
};
const omitParamType = (param) => (0, lodash_1.omit)(param, 'type');
const mapResponsesToSwaggerResponses = (responses, schemas, produces = ['application/json']) => {
    produces = (0, shared_utils_1.isEmpty)(produces) ? ['application/json'] : produces;
    const openApiResponses = (0, lodash_1.mapValues)(responses, (response) => responseObjectFactory.create(response, produces, schemas));
    return (0, lodash_1.mapValues)(openApiResponses, omitParamType);
};
function applyMetadataFactory(prototype, instance) {
    const classPrototype = prototype;
    do {
        if (!prototype.constructor) {
            return;
        }
        if (!prototype.constructor[plugin_constants_1.METADATA_FACTORY_NAME]) {
            continue;
        }
        const metadata = prototype.constructor[plugin_constants_1.METADATA_FACTORY_NAME]();
        const methodKeys = Object.keys(metadata).filter((key) => typeof instance[key] === 'function');
        methodKeys.forEach((key) => {
            const _a = metadata[key], { summary, deprecated, tags } = _a, meta = __rest(_a, ["summary", "deprecated", "tags"]);
            if (Object.keys(meta).length === 0) {
                return;
            }
            if (meta.status === undefined) {
                meta.status = getStatusCode(instance[key]);
            }
            (0, decorators_1.ApiResponse)(meta, { overrideExisting: false })(classPrototype, key, Object.getOwnPropertyDescriptor(classPrototype, key));
        });
    } while ((prototype = Reflect.getPrototypeOf(prototype)) &&
        prototype !== Object.prototype &&
        prototype);
}


/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseObjectFactory = void 0;
const lodash_1 = __webpack_require__(9);
const is_built_in_type_util_1 = __webpack_require__(75);
const mimetype_content_wrapper_1 = __webpack_require__(94);
const model_properties_accessor_1 = __webpack_require__(69);
const response_object_mapper_1 = __webpack_require__(95);
const schema_object_factory_1 = __webpack_require__(70);
const swagger_types_mapper_1 = __webpack_require__(78);
class ResponseObjectFactory {
    constructor() {
        this.mimetypeContentWrapper = new mimetype_content_wrapper_1.MimetypeContentWrapper();
        this.modelPropertiesAccessor = new model_properties_accessor_1.ModelPropertiesAccessor();
        this.swaggerTypesMapper = new swagger_types_mapper_1.SwaggerTypesMapper();
        this.schemaObjectFactory = new schema_object_factory_1.SchemaObjectFactory(this.modelPropertiesAccessor, this.swaggerTypesMapper);
        this.responseObjectMapper = new response_object_mapper_1.ResponseObjectMapper();
    }
    create(response, produces, schemas) {
        const { type, isArray } = response;
        response = (0, lodash_1.omit)(response, ['isArray']);
        if (!type) {
            return this.responseObjectMapper.wrapSchemaWithContent(response, produces);
        }
        if ((0, is_built_in_type_util_1.isBuiltInType)(type)) {
            const typeName = type && (0, lodash_1.isFunction)(type) ? type.name : type;
            const swaggerType = this.swaggerTypesMapper.mapTypeToOpenAPIType(typeName);
            if (isArray) {
                const content = this.mimetypeContentWrapper.wrap(produces, {
                    schema: {
                        type: 'array',
                        items: {
                            type: swaggerType
                        }
                    }
                });
                return Object.assign(Object.assign({}, response), content);
            }
            const content = this.mimetypeContentWrapper.wrap(produces, {
                schema: {
                    type: swaggerType
                }
            });
            return Object.assign(Object.assign({}, response), content);
        }
        const name = this.schemaObjectFactory.exploreModelSchema(type, schemas);
        if (isArray) {
            return this.responseObjectMapper.toArrayRefObject(response, name, produces);
        }
        return this.responseObjectMapper.toRefObject(response, name, produces);
    }
}
exports.ResponseObjectFactory = ResponseObjectFactory;


/***/ }),
/* 94 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MimetypeContentWrapper = void 0;
function removeUndefinedKeys(obj) {
    Object.entries(obj).forEach(([key, value]) => {
        if (value === undefined) {
            delete obj[key];
        }
    });
    return obj;
}
class MimetypeContentWrapper {
    wrap(mimetype, obj) {
        const content = mimetype.reduce((acc, item) => (Object.assign(Object.assign({}, acc), { [item]: removeUndefinedKeys(obj) })), {});
        return { content };
    }
}
exports.MimetypeContentWrapper = MimetypeContentWrapper;


/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseObjectMapper = void 0;
const lodash_1 = __webpack_require__(9);
const utils_1 = __webpack_require__(72);
const mimetype_content_wrapper_1 = __webpack_require__(94);
class ResponseObjectMapper {
    constructor() {
        this.mimetypeContentWrapper = new mimetype_content_wrapper_1.MimetypeContentWrapper();
    }
    toArrayRefObject(response, name, produces) {
        return Object.assign(Object.assign({}, response), this.mimetypeContentWrapper.wrap(produces, {
            schema: {
                type: 'array',
                items: {
                    $ref: (0, utils_1.getSchemaPath)(name)
                }
            },
            example: response.example
        }));
    }
    toRefObject(response, name, produces) {
        return Object.assign(Object.assign({}, response), this.mimetypeContentWrapper.wrap(produces, {
            schema: {
                $ref: (0, utils_1.getSchemaPath)(name)
            },
            example: response.example
        }));
    }
    wrapSchemaWithContent(response, produces) {
        if (!response.schema && !response.example) {
            return response;
        }
        const content = this.mimetypeContentWrapper.wrap(produces, {
            schema: response.schema,
            example: response.example
        });
        return Object.assign(Object.assign({}, (0, lodash_1.omit)(response, ['schema', 'example'])), content);
    }
}
exports.ResponseObjectMapper = ResponseObjectMapper;


/***/ }),
/* 96 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeAndUniq = void 0;
const lodash_1 = __webpack_require__(9);
function mergeAndUniq(a = [], b = []) {
    return (0, lodash_1.uniq)((0, lodash_1.merge)(a, b));
}
exports.mergeAndUniq = mergeAndUniq;


/***/ }),
/* 97 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exploreApiSecurityMetadata = exports.exploreGlobalApiSecurityMetadata = void 0;
const constants_1 = __webpack_require__(10);
const exploreGlobalApiSecurityMetadata = (metatype) => {
    const security = Reflect.getMetadata(constants_1.DECORATORS.API_SECURITY, metatype);
    return security ? { security } : undefined;
};
exports.exploreGlobalApiSecurityMetadata = exploreGlobalApiSecurityMetadata;
const exploreApiSecurityMetadata = (instance, prototype, method) => {
    return Reflect.getMetadata(constants_1.DECORATORS.API_SECURITY, method);
};
exports.exploreApiSecurityMetadata = exploreApiSecurityMetadata;


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exploreApiTagsMetadata = exports.exploreGlobalApiTagsMetadata = void 0;
const constants_1 = __webpack_require__(10);
const exploreGlobalApiTagsMetadata = (metatype) => {
    const tags = Reflect.getMetadata(constants_1.DECORATORS.API_TAGS, metatype);
    return tags ? { tags } : undefined;
};
exports.exploreGlobalApiTagsMetadata = exploreGlobalApiTagsMetadata;
const exploreApiTagsMetadata = (instance, prototype, method) => Reflect.getMetadata(constants_1.DECORATORS.API_TAGS, method);
exports.exploreApiTagsMetadata = exploreApiTagsMetadata;


/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwaggerTransformer = void 0;
const lodash_1 = __webpack_require__(9);
class SwaggerTransformer {
    normalizePaths(denormalizedDoc) {
        const roots = (0, lodash_1.filter)(denormalizedDoc, (r) => r.root);
        const groupedByPath = (0, lodash_1.groupBy)(roots, ({ root }) => root.path);
        const paths = (0, lodash_1.mapValues)(groupedByPath, (routes) => {
            const keyByMethod = (0, lodash_1.keyBy)(routes, ({ root }) => root.method);
            return (0, lodash_1.mapValues)(keyByMethod, (route) => {
                return Object.assign(Object.assign({}, (0, lodash_1.omit)(route.root, ['method', 'path'])), (0, lodash_1.omit)(route, 'root'));
            });
        });
        return {
            paths
        };
    }
    unescapeColonsInPath(app, moduleRoutes) {
        const httpAdapter = app.getHttpAdapter();
        const usingFastify = httpAdapter && httpAdapter.getType() === 'fastify';
        const unescapeColon = usingFastify
            ? (path) => path.replace(/:\{([^}]+)\}/g, ':$1')
            : (path) => path.replace(/\[:\]/g, ':');
        return moduleRoutes.map((moduleRoute) => (Object.assign(Object.assign({}, moduleRoute), { root: Object.assign(Object.assign({}, moduleRoute.root), { path: unescapeColon(moduleRoute.root.path) }) })));
    }
}
exports.SwaggerTransformer = SwaggerTransformer;


/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getGlobalPrefix = void 0;
function getGlobalPrefix(app) {
    const internalConfigRef = app.config;
    return (internalConfigRef && internalConfigRef.getGlobalPrefix()) || '';
}
exports.getGlobalPrefix = getGlobalPrefix;


/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stripLastSlash = void 0;
function stripLastSlash(path) {
    return path && path[path.length - 1] === '/'
        ? path.slice(0, path.length - 1)
        : path;
}
exports.stripLastSlash = stripLastSlash;


/***/ }),
/* 102 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(103), exports);


/***/ }),
/* 103 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildSwaggerHTML = exports.getSwaggerAssetsAbsoluteFSPath = exports.buildSwaggerInitJS = void 0;
const constants_1 = __webpack_require__(104);
const helpers_1 = __webpack_require__(105);
function buildSwaggerInitJS(swaggerDoc, customOptions = {}) {
    const { swaggerOptions = {}, swaggerUrl } = customOptions;
    const swaggerInitOptions = {
        swaggerDoc,
        swaggerUrl,
        customOptions: swaggerOptions
    };
    const jsInitOptions = (0, helpers_1.buildJSInitOptions)(swaggerInitOptions);
    return constants_1.jsTemplateString.replace('<% swaggerOptions %>', jsInitOptions);
}
exports.buildSwaggerInitJS = buildSwaggerInitJS;
let swaggerAssetsAbsoluteFSPath;
function getSwaggerAssetsAbsoluteFSPath() {
    if (!swaggerAssetsAbsoluteFSPath) {
        swaggerAssetsAbsoluteFSPath = __webpack_require__(106)();
    }
    return swaggerAssetsAbsoluteFSPath;
}
exports.getSwaggerAssetsAbsoluteFSPath = getSwaggerAssetsAbsoluteFSPath;
function toExternalScriptTag(url) {
    return `<script src='${url}'></script>`;
}
function toInlineScriptTag(jsCode) {
    return `<script>${jsCode}</script>`;
}
function toExternalStylesheetTag(url) {
    return `<link href='${url}' rel='stylesheet'>`;
}
function toTags(customCode, toScript) {
    if (!customCode) {
        return '';
    }
    if (typeof customCode === 'string') {
        return toScript(customCode);
    }
    else {
        return customCode.map(toScript).join('\n');
    }
}
function buildSwaggerHTML(baseUrl, customOptions = {}) {
    const { customCss = '', customJs = '', customJsStr = '', customfavIcon = false, customSiteTitle = 'Swagger UI', customCssUrl = '', explorer = false } = customOptions;
    const favIconString = customfavIcon
        ? `<link rel='icon' href='${customfavIcon}' />`
        : constants_1.favIconHtml;
    const explorerCss = explorer
        ? ''
        : '.swagger-ui .topbar .download-url-wrapper { display: none }';
    return constants_1.htmlTemplateString
        .replace('<% customCss %>', customCss)
        .replace('<% explorerCss %>', explorerCss)
        .replace('<% favIconString %>', favIconString)
        .replace(/<% baseUrl %>/g, baseUrl)
        .replace('<% customJs %>', toTags(customJs, toExternalScriptTag))
        .replace('<% customJsStr %>', toTags(customJsStr, toInlineScriptTag))
        .replace('<% customCssUrl %>', toTags(customCssUrl, toExternalStylesheetTag))
        .replace('<% title %>', customSiteTitle);
}
exports.buildSwaggerHTML = buildSwaggerHTML;


/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.jsTemplateString = exports.htmlTemplateString = exports.favIconHtml = void 0;
exports.favIconHtml = '<link rel="icon" type="image/png" href="<% baseUrl %>favicon-32x32.png" sizes="32x32" />' +
    '<link rel="icon" type="image/png" href="<% baseUrl %>favicon-16x16.png" sizes="16x16" />';
exports.htmlTemplateString = `
<!-- HTML for static distribution bundle build -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><% title %></title>
  <link rel="stylesheet" type="text/css" href="<% baseUrl %>swagger-ui.css" >
  <% favIconString %>
  <style>
    html
    {
      box-sizing: border-box;
      overflow: -moz-scrollbars-vertical;
      overflow-y: scroll;
    }
    *,
    *:before,
    *:after
    {
      box-sizing: inherit;
    }

    body {
      margin:0;
      background: #fafafa;
    }
  </style>
</head>

<body>

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position:absolute;width:0;height:0">
  <defs>
    <symbol viewBox="0 0 20 20" id="unlocked">
      <path d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V6h2v-.801C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8z"></path>
    </symbol>

    <symbol viewBox="0 0 20 20" id="locked">
      <path d="M15.8 8H14V5.6C14 2.703 12.665 1 10 1 7.334 1 6 2.703 6 5.6V8H4c-.553 0-1 .646-1 1.199V17c0 .549.428 1.139.951 1.307l1.197.387C5.672 18.861 6.55 19 7.1 19h5.8c.549 0 1.428-.139 1.951-.307l1.196-.387c.524-.167.953-.757.953-1.306V9.199C17 8.646 16.352 8 15.8 8zM12 8H8V5.199C8 3.754 8.797 3 10 3c1.203 0 2 .754 2 2.199V8z"/>
    </symbol>

    <symbol viewBox="0 0 20 20" id="close">
      <path d="M14.348 14.849c-.469.469-1.229.469-1.697 0L10 11.819l-2.651 3.029c-.469.469-1.229.469-1.697 0-.469-.469-.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-.469-.469-.469-1.228 0-1.697.469-.469 1.228-.469 1.697 0L10 8.183l2.651-3.031c.469-.469 1.228-.469 1.697 0 .469.469.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c.469.469.469 1.229 0 1.698z"/>
    </symbol>

    <symbol viewBox="0 0 20 20" id="large-arrow">
      <path d="M13.25 10L6.109 2.58c-.268-.27-.268-.707 0-.979.268-.27.701-.27.969 0l7.83 7.908c.268.271.268.709 0 .979l-7.83 7.908c-.268.271-.701.27-.969 0-.268-.269-.268-.707 0-.979L13.25 10z"/>
    </symbol>

    <symbol viewBox="0 0 20 20" id="large-arrow-down">
      <path d="M17.418 6.109c.272-.268.709-.268.979 0s.271.701 0 .969l-7.908 7.83c-.27.268-.707.268-.979 0l-7.908-7.83c-.27-.268-.27-.701 0-.969.271-.268.709-.268.979 0L10 13.25l7.418-7.141z"/>
    </symbol>


    <symbol viewBox="0 0 24 24" id="jump-to">
      <path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7z"/>
    </symbol>

    <symbol viewBox="0 0 24 24" id="expand">
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
    </symbol>

  </defs>
</svg>

<div id="swagger-ui"></div>

<script src="<% baseUrl %>swagger-ui-bundle.js"> </script>
<script src="<% baseUrl %>swagger-ui-standalone-preset.js"> </script>
<script src="<% baseUrl %>swagger-ui-init.js"> </script>
<% customJs %>
<% customJsStr %>
<% customCssUrl %>
<style>
  <% customCss %>
  <% explorerCss %>
</style>
</body>

</html>
`;
exports.jsTemplateString = `
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  <% swaggerOptions %>
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
`;


/***/ }),
/* 105 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.buildJSInitOptions = void 0;
function buildJSInitOptions(initOptions) {
    const functionPlaceholder = '____FUNCTION_PLACEHOLDER____';
    const fns = [];
    let json = JSON.stringify(initOptions, (key, value) => {
        if (typeof value === 'function') {
            fns.push(value);
            return functionPlaceholder;
        }
        return value;
    }, 2);
    json = json.replace(new RegExp('"' + functionPlaceholder + '"', 'g'), () => fns.shift());
    return `let options = ${json};`;
}
exports.buildJSInitOptions = buildJSInitOptions;


/***/ }),
/* 106 */
/***/ ((module) => {

module.exports = require("swagger-ui-dist/absolute-path.js");

/***/ }),
/* 107 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assignTwoLevelsDeep = void 0;
function assignTwoLevelsDeep(_dest, ...args) {
    const dest = _dest;
    for (const arg of args) {
        for (const [key, value] of Object.entries(arg !== null && arg !== void 0 ? arg : {})) {
            dest[key] = Object.assign(Object.assign({}, dest[key]), value);
        }
    }
    return dest;
}
exports.assignTwoLevelsDeep = assignTwoLevelsDeep;


/***/ }),
/* 108 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.normalizeRelPath = void 0;
function normalizeRelPath(input) {
    const output = input.replace(/\/\/+/g, '/');
    return output;
}
exports.normalizeRelPath = normalizeRelPath;


/***/ }),
/* 109 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolvePath = void 0;
const pathLib = __webpack_require__(110);
function resolvePath(path) {
    return path ? pathLib.resolve(path) : path;
}
exports.resolvePath = resolvePath;


/***/ }),
/* 110 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 111 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateGlobalPrefix = void 0;
const validateGlobalPrefix = (globalPrefix) => globalPrefix && !globalPrefix.match(/^(\/?)$/);
exports.validateGlobalPrefix = validateGlobalPrefix;


/***/ }),
/* 112 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validatePath = void 0;
const validatePath = (inputPath) => inputPath.charAt(0) !== '/' ? '/' + inputPath : inputPath;
exports.validatePath = validatePath;


/***/ }),
/* 113 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(114), exports);
__exportStar(__webpack_require__(128), exports);
__exportStar(__webpack_require__(129), exports);
__exportStar(__webpack_require__(130), exports);


/***/ }),
/* 114 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntersectionType = void 0;
const mapped_types_1 = __webpack_require__(115);
const constants_1 = __webpack_require__(10);
const decorators_1 = __webpack_require__(6);
const metadata_loader_1 = __webpack_require__(67);
const model_properties_accessor_1 = __webpack_require__(69);
const mapped_types_utils_1 = __webpack_require__(127);
const modelPropertiesAccessor = new model_properties_accessor_1.ModelPropertiesAccessor();
function IntersectionType(...classRefs) {
    class IntersectionClassType {
        constructor() {
            classRefs.forEach((classRef) => {
                (0, mapped_types_1.inheritPropertyInitializers)(this, classRef);
            });
        }
    }
    classRefs.forEach((classRef) => {
        const fields = modelPropertiesAccessor.getModelProperties(classRef.prototype);
        (0, mapped_types_1.inheritValidationMetadata)(classRef, IntersectionClassType);
        (0, mapped_types_1.inheritTransformationMetadata)(classRef, IntersectionClassType);
        function applyFields(fields) {
            (0, mapped_types_utils_1.clonePluginMetadataFactory)(IntersectionClassType, classRef.prototype);
            fields.forEach((propertyKey) => {
                const metadata = Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES, classRef.prototype, propertyKey);
                const decoratorFactory = (0, decorators_1.ApiProperty)(metadata);
                decoratorFactory(IntersectionClassType.prototype, propertyKey);
            });
        }
        applyFields(fields);
        metadata_loader_1.MetadataLoader.addRefreshHook(() => {
            const fields = modelPropertiesAccessor.getModelProperties(classRef.prototype);
            applyFields(fields);
        });
    });
    const intersectedNames = classRefs.reduce((prev, ref) => prev + ref.name, '');
    Object.defineProperty(IntersectionClassType, 'name', {
        value: `Intersection${intersectedNames}`
    });
    return IntersectionClassType;
}
exports.IntersectionType = IntersectionType;


/***/ }),
/* 115 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(__webpack_require__(116));


/***/ }),
/* 116 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.inheritValidationMetadata = exports.inheritTransformationMetadata = exports.inheritPropertyInitializers = exports.applyValidateIfDefinedDecorator = exports.applyIsOptionalDecorator = void 0;
__exportStar(__webpack_require__(117), exports);
__exportStar(__webpack_require__(123), exports);
__exportStar(__webpack_require__(124), exports);
__exportStar(__webpack_require__(125), exports);
__exportStar(__webpack_require__(126), exports);
var type_helpers_utils_1 = __webpack_require__(118);
Object.defineProperty(exports, "applyIsOptionalDecorator", ({ enumerable: true, get: function () { return type_helpers_utils_1.applyIsOptionalDecorator; } }));
Object.defineProperty(exports, "applyValidateIfDefinedDecorator", ({ enumerable: true, get: function () { return type_helpers_utils_1.applyValidateIfDefinedDecorator; } }));
Object.defineProperty(exports, "inheritPropertyInitializers", ({ enumerable: true, get: function () { return type_helpers_utils_1.inheritPropertyInitializers; } }));
Object.defineProperty(exports, "inheritTransformationMetadata", ({ enumerable: true, get: function () { return type_helpers_utils_1.inheritTransformationMetadata; } }));
Object.defineProperty(exports, "inheritValidationMetadata", ({ enumerable: true, get: function () { return type_helpers_utils_1.inheritValidationMetadata; } }));


/***/ }),
/* 117 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntersectionType = void 0;
const type_helpers_utils_1 = __webpack_require__(118);
function IntersectionType(...classRefs) {
    class IntersectionClassType {
        constructor() {
            classRefs.forEach((classRef) => {
                (0, type_helpers_utils_1.inheritPropertyInitializers)(this, classRef);
            });
        }
    }
    classRefs.forEach((classRef) => {
        (0, type_helpers_utils_1.inheritValidationMetadata)(classRef, IntersectionClassType);
        (0, type_helpers_utils_1.inheritTransformationMetadata)(classRef, IntersectionClassType);
    });
    const intersectedNames = classRefs.reduce((prev, ref) => prev + ref.name, '');
    Object.defineProperty(IntersectionClassType, 'name', {
        value: `Intersection${intersectedNames}`,
    });
    return IntersectionClassType;
}
exports.IntersectionType = IntersectionType;


/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.inheritPropertyInitializers = exports.inheritTransformationMetadata = exports.inheritValidationMetadata = exports.applyValidateIfDefinedDecorator = exports.applyIsOptionalDecorator = void 0;
const common_1 = __webpack_require__(1);
const logger = new common_1.Logger('MappedTypes');
function applyIsOptionalDecorator(targetClass, propertyKey) {
    if (!isClassValidatorAvailable()) {
        return;
    }
    const classValidator = __webpack_require__(119);
    const decoratorFactory = classValidator.IsOptional();
    decoratorFactory(targetClass.prototype, propertyKey);
}
exports.applyIsOptionalDecorator = applyIsOptionalDecorator;
function applyValidateIfDefinedDecorator(targetClass, propertyKey) {
    if (!isClassValidatorAvailable()) {
        return;
    }
    const classValidator = __webpack_require__(119);
    const decoratorFactory = classValidator.ValidateIf((_, value) => value !== undefined);
    decoratorFactory(targetClass.prototype, propertyKey);
}
exports.applyValidateIfDefinedDecorator = applyValidateIfDefinedDecorator;
function inheritValidationMetadata(parentClass, targetClass, isPropertyInherited) {
    if (!isClassValidatorAvailable()) {
        return;
    }
    try {
        const classValidator = __webpack_require__(119);
        const metadataStorage = classValidator.getMetadataStorage
            ? classValidator.getMetadataStorage()
            : classValidator.getFromContainer(classValidator.MetadataStorage);
        const getTargetValidationMetadatasArgs = [parentClass, null, false, false];
        const targetMetadata = metadataStorage.getTargetValidationMetadatas(...getTargetValidationMetadatasArgs);
        return targetMetadata
            .filter(({ propertyName }) => !isPropertyInherited || isPropertyInherited(propertyName))
            .map((value) => {
            const originalType = Reflect.getMetadata('design:type', parentClass.prototype, value.propertyName);
            if (originalType) {
                Reflect.defineMetadata('design:type', originalType, targetClass.prototype, value.propertyName);
            }
            metadataStorage.addValidationMetadata({
                ...value,
                target: targetClass,
            });
            return value.propertyName;
        });
    }
    catch (err) {
        logger.error(`Validation ("class-validator") metadata cannot be inherited for "${parentClass.name}" class.`);
        logger.error(err);
    }
}
exports.inheritValidationMetadata = inheritValidationMetadata;
function inheritTransformationMetadata(parentClass, targetClass, isPropertyInherited) {
    if (!isClassTransformerAvailable()) {
        return;
    }
    try {
        const transformMetadataKeys = [
            '_excludeMetadatas',
            '_exposeMetadatas',
            '_transformMetadatas',
            '_typeMetadatas',
        ];
        transformMetadataKeys.forEach((key) => inheritTransformerMetadata(key, parentClass, targetClass, isPropertyInherited));
    }
    catch (err) {
        logger.error(`Transformer ("class-transformer") metadata cannot be inherited for "${parentClass.name}" class.`);
        logger.error(err);
    }
}
exports.inheritTransformationMetadata = inheritTransformationMetadata;
function inheritTransformerMetadata(key, parentClass, targetClass, isPropertyInherited) {
    let classTransformer;
    try {
        classTransformer = __webpack_require__(120);
    }
    catch {
        classTransformer = __webpack_require__(121);
    }
    const metadataStorage = classTransformer.defaultMetadataStorage;
    while (parentClass && parentClass !== Object) {
        if (metadataStorage[key].has(parentClass)) {
            const metadataMap = metadataStorage[key];
            const parentMetadata = metadataMap.get(parentClass);
            const targetMetadataEntries = Array.from(parentMetadata.entries())
                .filter(([key]) => !isPropertyInherited || isPropertyInherited(key))
                .map(([key, metadata]) => {
                if (Array.isArray(metadata)) {
                    const targetMetadata = metadata.map((item) => ({
                        ...item,
                        target: targetClass,
                    }));
                    return [key, targetMetadata];
                }
                return [key, { ...metadata, target: targetClass }];
            });
            if (metadataMap.has(targetClass)) {
                const existingRules = metadataMap.get(targetClass).entries();
                const mergeMap = new Map();
                [existingRules, targetMetadataEntries].forEach((entries) => {
                    for (const [valueKey, value] of entries) {
                        if (mergeMap.has(valueKey)) {
                            const parentValue = mergeMap.get(valueKey);
                            if (Array.isArray(parentValue)) {
                                parentValue.push(...(Array.isArray(value) ? value : [value]));
                            }
                        }
                        else {
                            mergeMap.set(valueKey, value);
                        }
                    }
                });
                metadataMap.set(targetClass, mergeMap);
            }
            else {
                metadataMap.set(targetClass, new Map(targetMetadataEntries));
            }
        }
        parentClass = Object.getPrototypeOf(parentClass);
    }
}
function isClassValidatorAvailable() {
    try {
        __webpack_require__(119);
        return true;
    }
    catch {
        return false;
    }
}
function isClassTransformerAvailable() {
    try {
        __webpack_require__(122);
        return true;
    }
    catch {
        return false;
    }
}
function inheritPropertyInitializers(target, sourceClass, isPropertyInherited = (key) => true) {
    try {
        const tempInstance = new sourceClass();
        const propertyNames = Object.getOwnPropertyNames(tempInstance);
        propertyNames
            .filter((propertyName) => typeof tempInstance[propertyName] !== 'undefined' &&
            typeof target[propertyName] === 'undefined')
            .filter((propertyName) => isPropertyInherited(propertyName))
            .forEach((propertyName) => {
            target[propertyName] = tempInstance[propertyName];
        });
    }
    catch { }
}
exports.inheritPropertyInitializers = inheritPropertyInitializers;


/***/ }),
/* 119 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 120 */
/***/ ((module) => {

module.exports = require("class-transformer/cjs/storage");

/***/ }),
/* 121 */
/***/ ((module) => {

module.exports = require("class-transformer/storage");

/***/ }),
/* 122 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OmitType = void 0;
const type_helpers_utils_1 = __webpack_require__(118);
function OmitType(classRef, keys) {
    const isInheritedPredicate = (propertyKey) => !keys.includes(propertyKey);
    class OmitClassType {
        constructor() {
            (0, type_helpers_utils_1.inheritPropertyInitializers)(this, classRef, isInheritedPredicate);
        }
    }
    (0, type_helpers_utils_1.inheritValidationMetadata)(classRef, OmitClassType, isInheritedPredicate);
    (0, type_helpers_utils_1.inheritTransformationMetadata)(classRef, OmitClassType, isInheritedPredicate);
    return OmitClassType;
}
exports.OmitType = OmitType;


/***/ }),
/* 125 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PartialType = void 0;
const type_helpers_utils_1 = __webpack_require__(118);
function PartialType(classRef, options = {}) {
    class PartialClassType {
        constructor() {
            (0, type_helpers_utils_1.inheritPropertyInitializers)(this, classRef);
        }
    }
    const propertyKeys = (0, type_helpers_utils_1.inheritValidationMetadata)(classRef, PartialClassType);
    (0, type_helpers_utils_1.inheritTransformationMetadata)(classRef, PartialClassType);
    if (propertyKeys) {
        propertyKeys.forEach((key) => {
            options.skipNullProperties === false
                ? (0, type_helpers_utils_1.applyValidateIfDefinedDecorator)(PartialClassType, key)
                : (0, type_helpers_utils_1.applyIsOptionalDecorator)(PartialClassType, key);
        });
    }
    Object.defineProperty(PartialClassType, 'name', {
        value: `Partial${classRef.name}`,
    });
    return PartialClassType;
}
exports.PartialType = PartialType;


/***/ }),
/* 126 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PickType = void 0;
const type_helpers_utils_1 = __webpack_require__(118);
function PickType(classRef, keys) {
    const isInheritedPredicate = (propertyKey) => keys.includes(propertyKey);
    class PickClassType {
        constructor() {
            (0, type_helpers_utils_1.inheritPropertyInitializers)(this, classRef, isInheritedPredicate);
        }
    }
    (0, type_helpers_utils_1.inheritValidationMetadata)(classRef, PickClassType, isInheritedPredicate);
    (0, type_helpers_utils_1.inheritTransformationMetadata)(classRef, PickClassType, isInheritedPredicate);
    return PickClassType;
}
exports.PickType = PickType;


/***/ }),
/* 127 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clonePluginMetadataFactory = void 0;
const lodash_1 = __webpack_require__(9);
const plugin_constants_1 = __webpack_require__(16);
function clonePluginMetadataFactory(target, parent, transformFn = lodash_1.identity) {
    let targetMetadata = {};
    do {
        if (!parent.constructor) {
            return;
        }
        if (!parent.constructor[plugin_constants_1.METADATA_FACTORY_NAME]) {
            continue;
        }
        const parentMetadata = parent.constructor[plugin_constants_1.METADATA_FACTORY_NAME]();
        targetMetadata = Object.assign(Object.assign({}, parentMetadata), targetMetadata);
    } while ((parent = Reflect.getPrototypeOf(parent)) &&
        parent !== Object.prototype &&
        parent);
    targetMetadata = transformFn(targetMetadata);
    if (target[plugin_constants_1.METADATA_FACTORY_NAME]) {
        const originalFactory = target[plugin_constants_1.METADATA_FACTORY_NAME];
        target[plugin_constants_1.METADATA_FACTORY_NAME] = () => {
            const originalMetadata = originalFactory();
            return Object.assign(Object.assign({}, originalMetadata), targetMetadata);
        };
    }
    else {
        target[plugin_constants_1.METADATA_FACTORY_NAME] = () => targetMetadata;
    }
}
exports.clonePluginMetadataFactory = clonePluginMetadataFactory;


/***/ }),
/* 128 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OmitType = void 0;
const mapped_types_1 = __webpack_require__(115);
const lodash_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(10);
const decorators_1 = __webpack_require__(6);
const metadata_loader_1 = __webpack_require__(67);
const model_properties_accessor_1 = __webpack_require__(69);
const mapped_types_utils_1 = __webpack_require__(127);
const modelPropertiesAccessor = new model_properties_accessor_1.ModelPropertiesAccessor();
function OmitType(classRef, keys) {
    const fields = modelPropertiesAccessor
        .getModelProperties(classRef.prototype)
        .filter((item) => !keys.includes(item));
    const isInheritedPredicate = (propertyKey) => !keys.includes(propertyKey);
    class OmitTypeClass {
        constructor() {
            (0, mapped_types_1.inheritPropertyInitializers)(this, classRef, isInheritedPredicate);
        }
    }
    (0, mapped_types_1.inheritValidationMetadata)(classRef, OmitTypeClass, isInheritedPredicate);
    (0, mapped_types_1.inheritTransformationMetadata)(classRef, OmitTypeClass, isInheritedPredicate);
    function applyFields(fields) {
        (0, mapped_types_utils_1.clonePluginMetadataFactory)(OmitTypeClass, classRef.prototype, (metadata) => (0, lodash_1.omit)(metadata, keys));
        fields.forEach((propertyKey) => {
            const metadata = Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES, classRef.prototype, propertyKey);
            const decoratorFactory = (0, decorators_1.ApiProperty)(metadata);
            decoratorFactory(OmitTypeClass.prototype, propertyKey);
        });
    }
    applyFields(fields);
    metadata_loader_1.MetadataLoader.addRefreshHook(() => {
        const fields = modelPropertiesAccessor
            .getModelProperties(classRef.prototype)
            .filter((item) => !keys.includes(item));
        applyFields(fields);
    });
    return OmitTypeClass;
}
exports.OmitType = OmitType;


/***/ }),
/* 129 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PartialType = void 0;
const mapped_types_1 = __webpack_require__(115);
const lodash_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(10);
const decorators_1 = __webpack_require__(6);
const metadata_loader_1 = __webpack_require__(67);
const plugin_constants_1 = __webpack_require__(16);
const model_properties_accessor_1 = __webpack_require__(69);
const mapped_types_utils_1 = __webpack_require__(127);
const modelPropertiesAccessor = new model_properties_accessor_1.ModelPropertiesAccessor();
function PartialType(classRef, options = {}) {
    const applyPartialDecoratorFn = options.skipNullProperties === false
        ? mapped_types_1.applyValidateIfDefinedDecorator
        : mapped_types_1.applyIsOptionalDecorator;
    const fields = modelPropertiesAccessor.getModelProperties(classRef.prototype);
    class PartialTypeClass {
        constructor() {
            (0, mapped_types_1.inheritPropertyInitializers)(this, classRef);
        }
    }
    const keysWithValidationConstraints = (0, mapped_types_1.inheritValidationMetadata)(classRef, PartialTypeClass);
    if (keysWithValidationConstraints) {
        keysWithValidationConstraints
            .filter((key) => !fields.includes(key))
            .forEach((key) => applyPartialDecoratorFn(PartialTypeClass, key));
    }
    (0, mapped_types_1.inheritTransformationMetadata)(classRef, PartialTypeClass);
    function applyFields(fields) {
        (0, mapped_types_utils_1.clonePluginMetadataFactory)(PartialTypeClass, classRef.prototype, (metadata) => (0, lodash_1.mapValues)(metadata, (item) => (Object.assign(Object.assign({}, item), { required: false }))));
        if (PartialTypeClass[plugin_constants_1.METADATA_FACTORY_NAME]) {
            const pluginFields = Object.keys(PartialTypeClass[plugin_constants_1.METADATA_FACTORY_NAME]());
            pluginFields.forEach((key) => applyPartialDecoratorFn(PartialTypeClass, key));
        }
        fields.forEach((key) => {
            const metadata = Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES, classRef.prototype, key) || {};
            const decoratorFactory = (0, decorators_1.ApiProperty)(Object.assign(Object.assign({}, metadata), { required: false }));
            decoratorFactory(PartialTypeClass.prototype, key);
            applyPartialDecoratorFn(PartialTypeClass, key);
        });
    }
    applyFields(fields);
    metadata_loader_1.MetadataLoader.addRefreshHook(() => {
        const fields = modelPropertiesAccessor.getModelProperties(classRef.prototype);
        applyFields(fields);
    });
    return PartialTypeClass;
}
exports.PartialType = PartialType;


/***/ }),
/* 130 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PickType = void 0;
const mapped_types_1 = __webpack_require__(115);
const lodash_1 = __webpack_require__(9);
const constants_1 = __webpack_require__(10);
const decorators_1 = __webpack_require__(6);
const metadata_loader_1 = __webpack_require__(67);
const model_properties_accessor_1 = __webpack_require__(69);
const mapped_types_utils_1 = __webpack_require__(127);
const modelPropertiesAccessor = new model_properties_accessor_1.ModelPropertiesAccessor();
function PickType(classRef, keys) {
    const fields = modelPropertiesAccessor
        .getModelProperties(classRef.prototype)
        .filter((item) => keys.includes(item));
    const isInheritedPredicate = (propertyKey) => keys.includes(propertyKey);
    class PickTypeClass {
        constructor() {
            (0, mapped_types_1.inheritPropertyInitializers)(this, classRef, isInheritedPredicate);
        }
    }
    (0, mapped_types_1.inheritValidationMetadata)(classRef, PickTypeClass, isInheritedPredicate);
    (0, mapped_types_1.inheritTransformationMetadata)(classRef, PickTypeClass, isInheritedPredicate);
    function applyFields(fields) {
        (0, mapped_types_utils_1.clonePluginMetadataFactory)(PickTypeClass, classRef.prototype, (metadata) => (0, lodash_1.pick)(metadata, keys));
        fields.forEach((propertyKey) => {
            const metadata = Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES, classRef.prototype, propertyKey);
            const decoratorFactory = (0, decorators_1.ApiProperty)(metadata);
            decoratorFactory(PickTypeClass.prototype, propertyKey);
        });
    }
    applyFields(fields);
    metadata_loader_1.MetadataLoader.addRefreshHook(() => {
        const fields = modelPropertiesAccessor
            .getModelProperties(classRef.prototype)
            .filter((item) => keys.includes(item));
        applyFields(fields);
    });
    return PickTypeClass;
}
exports.PickType = PickType;


/***/ }),
/* 131 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(132);
const common_1 = __webpack_require__(1);
const api_key_guard_js_1 = __webpack_require__(133);
const solar_controller_js_1 = __webpack_require__(134);
const solar_service_js_1 = __webpack_require__(136);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [solar_controller_js_1.SolarController],
        providers: [solar_service_js_1.SolarService, api_key_guard_js_1.ApiKeyGuard],
    })
], AppModule);


/***/ }),
/* 132 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 133 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ApiKeyGuard = void 0;
const tslib_1 = __webpack_require__(132);
const common_1 = __webpack_require__(1);
let ApiKeyGuard = class ApiKeyGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const receivedApiKey = request.headers['x-api-key'];
        const expectedApiKey = process.env['SOLAR_API_KEY'] ?? 'epn-solar-2026';
        if (receivedApiKey !== expectedApiKey) {
            throw new common_1.UnauthorizedException('API Key inválida o ausente. Utilice el encabezado x-api-key.');
        }
        return true;
    }
};
exports.ApiKeyGuard = ApiKeyGuard;
exports.ApiKeyGuard = ApiKeyGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], ApiKeyGuard);


/***/ }),
/* 134 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SolarController = void 0;
const tslib_1 = __webpack_require__(132);
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(3);
const api_key_guard_js_1 = __webpack_require__(133);
const solar_dto_js_1 = __webpack_require__(135);
const solar_service_js_1 = __webpack_require__(136);
let SolarController = class SolarController {
    constructor(solarService) {
        this.solarService = solarService;
    }
    calculateV1(input) {
        return {
            version: 'v1',
            data: this.solarService.calculateRaw(input),
        };
    }
    calculateV2(input) {
        return {
            version: 'v2',
            data: this.solarService.calculateFormatted(input),
        };
    }
};
exports.SolarController = SolarController;
tslib_1.__decorate([
    (0, common_1.Post)('v1/solar/calculate'),
    (0, swagger_1.ApiOperation)({
        summary: 'Calcular producción solar mediante la API pública v1',
        description: 'Devuelve los resultados numéricos crudos para que el cliente los formatee.',
    }),
    (0, swagger_1.ApiBody)({ type: solar_dto_js_1.SolarCalculationDto }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Cálculo realizado correctamente en formato crudo.',
        schema: {
            example: {
                version: 'v1',
                data: {
                    installedPowerKw: 4,
                    dailyEnergyKwh: 20,
                    monthlyEnergyKwh: 600,
                    annualEnergyKwh: 7300,
                },
            },
        },
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Los datos ingresados no cumplen los rangos permitidos.',
    }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof solar_dto_js_1.SolarCalculationDto !== "undefined" && solar_dto_js_1.SolarCalculationDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Object)
], SolarController.prototype, "calculateV1", null);
tslib_1.__decorate([
    (0, common_1.Post)('v2/solar/calculate'),
    (0, common_1.UseGuards)(api_key_guard_js_1.ApiKeyGuard),
    (0, swagger_1.ApiSecurity)('x-api-key'),
    (0, swagger_1.ApiOperation)({
        summary: 'Calcular producción solar mediante la API segura v2',
        description: 'Requiere el encabezado x-api-key y devuelve resultados formateados.',
    }),
    (0, swagger_1.ApiBody)({ type: solar_dto_js_1.SolarCalculationDto }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Cálculo realizado y formateado por el backend.',
        schema: {
            example: {
                version: 'v2',
                data: {
                    installedPower: '4.00 kW',
                    dailyEnergy: '20.00 kWh/día',
                    monthlyEnergy: '600.00 kWh/mes',
                    annualEnergy: '7300.00 kWh/año',
                },
            },
        },
    }),
    (0, swagger_1.ApiUnauthorizedResponse)({
        description: 'API Key inválida o ausente.',
    }),
    (0, swagger_1.ApiBadRequestResponse)({
        description: 'Los datos ingresados no cumplen los rangos permitidos.',
    }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof solar_dto_js_1.SolarCalculationDto !== "undefined" && solar_dto_js_1.SolarCalculationDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Object)
], SolarController.prototype, "calculateV2", null);
exports.SolarController = SolarController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('Proyección fotovoltaica'),
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof solar_service_js_1.SolarService !== "undefined" && solar_service_js_1.SolarService) === "function" ? _a : Object])
], SolarController);


/***/ }),
/* 135 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SolarCalculationDto = void 0;
const tslib_1 = __webpack_require__(132);
const swagger_1 = __webpack_require__(3);
const class_validator_1 = __webpack_require__(119);
class SolarCalculationDto {
}
exports.SolarCalculationDto = SolarCalculationDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Área total ocupada por los paneles solares en metros cuadrados',
        example: 20,
        minimum: 0.01,
        maximum: 10000,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.01),
    (0, class_validator_1.Max)(10000),
    tslib_1.__metadata("design:type", Number)
], SolarCalculationDto.prototype, "areaM2", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Porcentaje de eficiencia de los paneles solares',
        example: 20,
        minimum: 0.01,
        maximum: 100,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.01),
    (0, class_validator_1.Max)(100),
    tslib_1.__metadata("design:type", Number)
], SolarCalculationDto.prototype, "efficiencyPercent", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Horas de sol pico disponibles diariamente',
        example: 5,
        minimum: 0.01,
        maximum: 24,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.01),
    (0, class_validator_1.Max)(24),
    tslib_1.__metadata("design:type", Number)
], SolarCalculationDto.prototype, "peakSunHours", void 0);


/***/ }),
/* 136 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SolarService = void 0;
const tslib_1 = __webpack_require__(132);
const common_1 = __webpack_require__(1);
const shared_1 = __webpack_require__(137);
let SolarService = class SolarService {
    calculateRaw(input) {
        const validation = (0, shared_1.validateSolarInput)(input);
        if (!validation.isValid) {
            throw new common_1.BadRequestException({
                message: 'Los datos ingresados no son válidos.',
                errors: validation.errors,
            });
        }
        // Se considera una irradiancia estándar de 1 kW por metro cuadrado.
        const installedPowerKw = input.areaM2 * (input.efficiencyPercent / 100);
        const dailyEnergyKwh = installedPowerKw * input.peakSunHours;
        const monthlyEnergyKwh = dailyEnergyKwh * 30;
        const annualEnergyKwh = dailyEnergyKwh * 365;
        return {
            installedPowerKw: this.round(installedPowerKw),
            dailyEnergyKwh: this.round(dailyEnergyKwh),
            monthlyEnergyKwh: this.round(monthlyEnergyKwh),
            annualEnergyKwh: this.round(annualEnergyKwh),
        };
    }
    calculateFormatted(input) {
        const rawResult = this.calculateRaw(input);
        return (0, shared_1.formatSolarResult)(rawResult);
    }
    round(value) {
        return Number(value.toFixed(4));
    }
};
exports.SolarService = SolarService;
exports.SolarService = SolarService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], SolarService);


/***/ }),
/* 137 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(132);
tslib_1.__exportStar(__webpack_require__(138), exports);


/***/ }),
/* 138 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateSolarInput = validateSolarInput;
exports.formatSolarResult = formatSolarResult;
exports.isSolarV2Response = isSolarV2Response;
function isFiniteNumber(value) {
    return typeof value === 'number' && Number.isFinite(value);
}
function validateSolarInput(input) {
    const errors = [];
    if (!input) {
        return {
            isValid: false,
            errors: ['Debe proporcionar los datos para realizar el cálculo.'],
        };
    }
    if (!isFiniteNumber(input.areaM2) ||
        input.areaM2 <= 0 ||
        input.areaM2 > 10000) {
        errors.push('El área debe ser mayor que 0 y menor o igual a 10000 m².');
    }
    if (!isFiniteNumber(input.efficiencyPercent) ||
        input.efficiencyPercent <= 0 ||
        input.efficiencyPercent > 100) {
        errors.push('La eficiencia debe estar entre 0 y 100%.');
    }
    if (!isFiniteNumber(input.peakSunHours) ||
        input.peakSunHours <= 0 ||
        input.peakSunHours > 24) {
        errors.push('Las horas de sol pico deben estar entre 0 y 24.');
    }
    return {
        isValid: errors.length === 0,
        errors,
    };
}
function formatSolarResult(result) {
    return {
        installedPower: `${result.installedPowerKw.toFixed(2)} kW`,
        dailyEnergy: `${result.dailyEnergyKwh.toFixed(2)} kWh/día`,
        monthlyEnergy: `${result.monthlyEnergyKwh.toFixed(2)} kWh/mes`,
        annualEnergy: `${result.annualEnergyKwh.toFixed(2)} kWh/año`,
    };
}
function isRecord(value) {
    return typeof value === 'object' && value !== null;
}
function isSolarV2Response(value) {
    if (!isRecord(value) || value['version'] !== 'v2') {
        return false;
    }
    const data = value['data'];
    return (isRecord(data) &&
        typeof data['installedPower'] === 'string' &&
        typeof data['dailyEnergy'] === 'string' &&
        typeof data['monthlyEnergy'] === 'string' &&
        typeof data['annualEnergy'] === 'string');
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(3);
const app_module_js_1 = __webpack_require__(131);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_js_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    app.enableCors({
        origin: 'http://localhost:4200',
        methods: ['GET', 'POST', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'x-api-key'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('API de Proyección Fotovoltaica')
        .setDescription('API versionada para calcular la energía producida por paneles solares.')
        .setVersion('2.0')
        .addApiKey({
        type: 'apiKey',
        name: 'x-api-key',
        in: 'header',
        description: 'Clave de acceso para utilizar la API v2.',
    }, 'x-api-key')
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup(`${globalPrefix}/docs`, app, swaggerDocument, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
    const port = process.env['PORT'] ?? 3000;
    await app.listen(port);
    common_1.Logger.log(`API disponible en http://localhost:${port}/${globalPrefix}`);
    common_1.Logger.log(`Swagger disponible en http://localhost:${port}/${globalPrefix}/docs`);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map
import * as React from 'react';
import * as WebAssembly from 'react-native-webassembly';
import { TextDecoder } from 'text-encoding';

import { useWasmUri } from './useWasmUri';

type EZKL = {
    readonly init_logger: () => number;
    readonly vecU64ToFelt: (a: number, b: number, c: number) => number;
    readonly vecU64ToInt: (a: number, b: number, c: number) => number;
    readonly vecU64ToFloat: (a: number, b: number, c: number, d: number) => number;
    readonly floatToVecU64: (a: number, b: number, c: number) => number;
    readonly bufferToVecOfVecU64: (a: number, b: number, c: number) => number;
    readonly poseidonHash: (a: number, b: number, c: number) => number;
    readonly elgamalGenRandom: (a: number, b: number, c: number) => number;
    readonly elgamalEncrypt: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
    readonly elgamalDecrypt: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly genWitness: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly verify: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
    readonly prove: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => number;
    readonly init_panic_hook: () => number;
    readonly rustsecp256k1_v0_8_1_context_create: (a: number) => number;
    readonly rustsecp256k1_v0_8_1_context_destroy: (a: number) => void;
    readonly rustsecp256k1_v0_8_1_default_illegal_callback_fn: (a: number, b: number) => void;
    readonly rustsecp256k1_v0_8_1_default_error_callback_fn: (a: number, b: number) => void;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    // readonly allocate_buffer_u8: (a: number) => number;
    // readonly deallocate_buffer_u8: (a: number, b: number) => void;
    memory: WebAssembly.Memory;

};

let wasm: EZKL;
let cachedUint8Memory0: Uint8Array | null = null;
let cachedInt32Memory0: Int32Array | null = null;
let cachedUint8ClampedMemory0: Uint8ClampedArray | null = null;
let cachedFloat64Memory0: Float64Array | null = null;

const heap = new Array(128).fill(undefined);
heap.push(undefined, null, true, false);
let heap_next = heap.length;

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8') : { decode: () => { throw Error('TextDecoder not available') } });
if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

let WASM_VECTOR_LEN = 0;




function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        // @ts-expect-error
        const memory: ArrayBuffer | undefined = wasm.memory;
        console.log('memory 2', memory);
         // @ts-expect-error
        console.log('byteLength 2', memory.byteLength);
        cachedUint8Memory0 = new Uint8Array(wasm.memory);

        console.log('cachedUint8Memory0 not set, setting to size', cachedUint8Memory0.byteLength);
    }
    return cachedUint8Memory0;
}

// @ts-ignore */
function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    console.log('getStringFromWasm0 ptr', ptr);
    console.log('td.decode', getUint8Memory0().subarray(ptr, ptr + len));



    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

// @ts-ignore */
function addHeapObject(obj) {
    console.log('addHeapObject', obj);
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    console.log('added heap object', idx, obj);
    console.log('heap', heap);
    return idx;
}
// @ts-ignore */
function getObject(idx) { return heap[idx]; }
// @ts-ignore */
function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}
// @ts-ignore */
function takeObject(idx) {
    console.log('takeObject', idx);
    const ret = getObject(idx);
    console.log('ret', ret);
    dropObject(idx);
    return ret;
}
/**
* Initialize logger for wasm
*/
export function init_logger() {
    wasm.init_logger();
}

/**
* Initialize panic hook for wasm
*/
export function init_panic_hook() {
    wasm.init_panic_hook();
}

// @ts-ignore */
function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    console.log('ptr', ptr);
    console.log('arg', arg);
    console.log('ptr / 1', ptr / 1);



    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}



function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        // @ts-expect-error
        cachedInt32Memory0 = new Int32Array(wasm.memory);
    }
    return cachedInt32Memory0;
}
/**
* Converts 4 u64s to a field element
* @param {Uint8ClampedArray} array
* @returns {string}
*/
export function vecU64ToFelt(array: Uint8ClampedArray): string {
    let deferred3_0;
    let deferred3_1;
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(array, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.vecU64ToFelt(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        var ptr2 = r0;
        var len2 = r1;
        if (r3) {
            ptr2 = 0; len2 = 0;
            throw takeObject(r2);
        }
        deferred3_0 = ptr2;
        deferred3_1 = len2;
        return getStringFromWasm0(ptr2, len2);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        // @ts-expect-error
        wasm.__wbindgen_free(deferred3_0, deferred3_1, 1);
    }
}



function getUint8ClampedMemory0() {
    if (cachedUint8ClampedMemory0 === null || cachedUint8ClampedMemory0.byteLength === 0) {
        // @ts-expect-error
        cachedUint8ClampedMemory0 = new Uint8ClampedArray(wasm.memory);
    }
    return cachedUint8ClampedMemory0;
}

// @ts-ignore */
function getClampedArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ClampedMemory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* Converts 4 u64s representing a field element directly to an integer
* @param {Uint8ClampedArray} array
* @returns {Uint8ClampedArray}
*/
export function vecU64ToInt(array: Uint8ClampedArray): Uint8ClampedArray {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(array, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.vecU64ToInt(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
            throw takeObject(r2);
        }
        var v2 = getClampedArrayU8FromWasm0(r0, r1).slice();
        // @ts-expect-error
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}


function getFloat64Memory0() {
    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
        // @ts-expect-error
        cachedFloat64Memory0 = new Float64Array(wasm.memory);
    }
    return cachedFloat64Memory0;
}
/**
* Converts 4 u64s representing a field element directly to a (rescaled from fixed point scaling) floating point
* @param {Uint8ClampedArray} array
* @param {number} scale
* @returns {number}
*/
export function vecU64ToFloat(array: Uint8ClampedArray, scale: number): number {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(array, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.vecU64ToFloat(retptr, ptr0, len0, scale);
        var r0 = getFloat64Memory0()[retptr / 8 + 0];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
            throw takeObject(r2);
        }
        return r0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* Converts a floating point element to 4 u64s representing a fixed point field element
* @param {number} input
* @param {number} scale
* @returns {Uint8ClampedArray}
*/
export function floatToVecU64(input: number, scale: number): Uint8ClampedArray {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.floatToVecU64(retptr, input, scale);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
            throw takeObject(r2);
        }
        var v1 = getClampedArrayU8FromWasm0(r0, r1).slice();
        // @ts-expect-error
        wasm.__wbindgen_free(r0, r1 * 1);
        return v1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* Converts a buffer to vector of 4 u64s representing a fixed point field element
* @param {Uint8ClampedArray} buffer
* @returns {Uint8ClampedArray}
*/
export function bufferToVecOfVecU64(buffer: Uint8ClampedArray) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(buffer, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.bufferToVecOfVecU64(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
            throw takeObject(r2);
        }
        var v2 = getClampedArrayU8FromWasm0(r0, r1).slice();
        // @ts-expect-error
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* Generate a poseidon hash in browser. Input message
* @param {Uint8ClampedArray} message
* @returns {Uint8ClampedArray}
*/
// @ts-ignore */
export function poseidonHash(message: Uint8ClampedArray) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        console.log('retptr', retptr);
        const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.poseidonHash(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        console.log('r0', r0);
        console.log('r1', r1);
        console.log('r2', r2);
        console.log('r3', r3);

        if (r3) {
            throw takeObject(r2);
        }
        var v2 = getClampedArrayU8FromWasm0(r0, r1).slice();
        // @ts-expect-error
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}
// @ts-ignore */
function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
* Generates random elgamal variables from a random seed value in browser.
* Make sure input seed comes a secure source of randomness
* @param {Uint8ClampedArray} rng
* @returns {Uint8Array}
*/

export function elgamalGenRandom(rng: Uint8ClampedArray) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(rng, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.elgamalGenRandom(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
            throw takeObject(r2);
        }
        var v2 = getArrayU8FromWasm0(r0, r1).slice();
        // @ts-expect-error
        wasm.__wbindgen_free(r0, r1 * 1);
        return v2;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* Encrypt using elgamal in browser. Input message
* @param {Uint8ClampedArray} pk
* @param {Uint8ClampedArray} message
* @param {Uint8ClampedArray} r
* @returns {Uint8Array}
*/
export function elgamalEncrypt(pk: Uint8ClampedArray, message: Uint8ClampedArray, r: Uint8ClampedArray): Uint8Array {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(pk, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passArray8ToWasm0(r, wasm.__wbindgen_malloc);
        const len2 = WASM_VECTOR_LEN;
        wasm.elgamalEncrypt(retptr, ptr0, len0, ptr1, len1, ptr2, len2);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
            throw takeObject(r2);
        }
        var v4 = getArrayU8FromWasm0(r0, r1).slice();
        // @ts-expect-error
        wasm.__wbindgen_free(r0, r1 * 1);
        return v4;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* Decrypt using elgamal in browser. Input message
* @param {Uint8ClampedArray} cipher
* @param {Uint8ClampedArray} sk
* @returns {Uint8Array}
*/
export function elgamalDecrypt(cipher: Uint8ClampedArray, sk: Uint8ClampedArray): Uint8Array {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(cipher, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(sk, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.elgamalDecrypt(retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
            throw takeObject(r2);
        }
        var v3 = getArrayU8FromWasm0(r0, r1).slice();
        // @ts-expect-error
        wasm.__wbindgen_free(r0, r1 * 1);
        return v3;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* Generate a witness file from input.json, compiled model and a settings.json file.
* @param {Uint8ClampedArray} compiled_circuit
* @param {Uint8ClampedArray} input
* @returns {Uint8Array}
*/
export function genWitness(compiled_circuit: Uint8ClampedArray, input: Uint8ClampedArray): Uint8Array {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(compiled_circuit, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(input, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        wasm.genWitness(retptr, ptr0, len0, ptr1, len1);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
            throw takeObject(r2);
        }
        var v3 = getArrayU8FromWasm0(r0, r1).slice();
        // @ts-expect-error
        wasm.__wbindgen_free(r0, r1 * 1);
        return v3;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

/**
* Verify proof in browser using wasm
* @param {Uint8ClampedArray} proof_js
* @param {Uint8ClampedArray} vk
* @param {Uint8ClampedArray} settings
* @param {Uint8ClampedArray} srs
* @returns {boolean}
*/
export function verify(proof_js: Uint8ClampedArray, vk: Uint8ClampedArray, settings: Uint8ClampedArray, srs: Uint8ClampedArray): boolean {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(proof_js, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(vk, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passArray8ToWasm0(settings, wasm.__wbindgen_malloc);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = passArray8ToWasm0(srs, wasm.__wbindgen_malloc);
        const len3 = WASM_VECTOR_LEN;
        wasm.verify(retptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 !== 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}



const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder() : { encode: () => { throw Error('TextEncoder not available') } });
// @ts-ignore */
const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg: any, view: any) {
        // @ts-ignore */
        return cachedTextEncoder.encodeInto(arg, view);
    }
    : function (arg: any, view: any) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    });

// @ts-ignore */
function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}
// @ts-ignore */
function handleError(f, args) {
    try {
        return f(...args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}







function __wbg_get_imports() {
    const imports: any = {};
    imports.wbg = {};
    // @ts-ignore */
    imports.wbg.__wbindgen_error_new = function (arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        console.log('error', ret);
        return addHeapObject(ret);
    };
    // @ts-ignore */
    imports.wbg.__wbindgen_object_drop_ref = function (arg0) {
        takeObject(arg0);
    };
    imports.wbg.__wbg_new_abda76e883ba8a5f = function () {
        const ret = new Error();
        return addHeapObject(ret);
    };
    // @ts-ignore */
    imports.wbg.__wbg_stack_658279fe44541cf6 = function (arg0, arg1) {
        const ret = getObject(arg1).stack;
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getInt32Memory0()[arg0 / 4 + 1] = len1;
        getInt32Memory0()[arg0 / 4 + 0] = ptr1;
    };
    // @ts-ignore */
    imports.wbg.__wbg_error_f851667af71bcfc6 = function (arg0, arg1) {
        let deferred0_0;
        let deferred0_1;
        try {
            deferred0_0 = arg0;
            deferred0_1 = arg1;
            console.error(getStringFromWasm0(arg0, arg1));
        } finally {
            wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
        }
    };
    // @ts-ignore */
    imports.wbg.__wbg_log_53ed96ea72ace5e9 = function (arg0, arg1) {
        console.log(getStringFromWasm0(arg0, arg1));
    };
    // @ts-ignore */
    imports.wbg.__wbg_error_93b671ae91baaee7 = function (arg0, arg1) {
        console.error(getStringFromWasm0(arg0, arg1));
    };
    // @ts-ignore */
    imports.wbg.__wbg_warn_52c5b3e773c3a056 = function (arg0, arg1) {
        console.warn(getStringFromWasm0(arg0, arg1));
    };
    // @ts-ignore */
    imports.wbg.__wbg_crypto_c48a774b022d20ac = function (arg0) {
        const ret = getObject(arg0).crypto;
        return addHeapObject(ret);
    };
    // @ts-ignore */
    imports.wbg.__wbindgen_is_object = function (arg0) {
        const val = getObject(arg0);
        const ret = typeof (val) === 'object' && val !== null;
        return ret;
    };
    // @ts-ignore */
    imports.wbg.__wbg_process_298734cf255a885d = function (arg0) {
        const ret = getObject(arg0).process;
        return addHeapObject(ret);
    };
    // @ts-ignore */
    imports.wbg.__wbg_versions_e2e78e134e3e5d01 = function (arg0) {
        const ret = getObject(arg0).versions;
        return addHeapObject(ret);
    };
    // @ts-ignore */
    imports.wbg.__wbg_node_1cd7a5d853dbea79 = function (arg0) {
        const ret = getObject(arg0).node;
        return addHeapObject(ret);
    };
    // @ts-ignore */
    imports.wbg.__wbindgen_is_string = function (arg0) {
        const ret = typeof (getObject(arg0)) === 'string';
        return ret;
    };
    // @ts-ignore */
    imports.wbg.__wbg_msCrypto_bcb970640f50a1e8 = function (arg0) {
        const ret = getObject(arg0).msCrypto;
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_require_8f08ceecec0f4fee = function () {
        return handleError(function () {
            const ret = module.require;
            return addHeapObject(ret);
        }, arguments)
    };
    // @ts-ignore */
    imports.wbg.__wbindgen_is_function = function (arg0) {
        const ret = typeof (getObject(arg0)) === 'function';
        return ret;
    };
    // @ts-ignore */
    imports.wbg.__wbindgen_string_new = function (arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return addHeapObject(ret);
    };
    // @ts-ignore */
    imports.wbg.__wbg_getRandomValues_37fa2ca9e4e07fab = function () {
        return handleError(function (arg0, arg1) {
            getObject(arg0).getRandomValues(getObject(arg1));
        }, arguments)
    };
    // @ts-ignore */
    imports.wbg.__wbg_randomFillSync_dc1e9a60c158336d = function () {
        return handleError(function (arg0, arg1) {
            getObject(arg0).randomFillSync(takeObject(arg1));
        }, arguments)
    };
    // @ts-ignore */
    imports.wbg.__wbg_newnoargs_581967eacc0e2604 = function (arg0, arg1) {
        const ret = new Function(getStringFromWasm0(arg0, arg1));
        return addHeapObject(ret);
    };
    // @ts-ignore */
    imports.wbg.__wbg_call_cb65541d95d71282 = function () {
        return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).call(getObject(arg1));
            return addHeapObject(ret);
        }, arguments)
    };
    // @ts-ignore */
    imports.wbg.__wbindgen_object_clone_ref = function (arg0) {
        const ret = getObject(arg0);
        return addHeapObject(ret);
    };
    imports.wbg.__wbg_self_1ff1d729e9aae938 = function () {
        return handleError(function () {
            const ret = self.self;
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_window_5f4faef6c12b79ec = function () {
        return handleError(function () {
            const ret = window.window;
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_globalThis_1d39714405582d3c = function () {
        return handleError(function () {
            const ret = globalThis.globalThis;
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_global_651f05c6a0944d1c = function () {
        return handleError(function () {
            const ret = global.global;
            return addHeapObject(ret);
        }, arguments)
    };
    // @ts-ignore */
    imports.wbg.__wbindgen_is_undefined = function (arg0) {
        const ret = getObject(arg0) === undefined;
        return ret;
    };
    // @ts-ignore */
    imports.wbg.__wbg_call_01734de55d61e11d = function () {
        return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        }, arguments)
    };
    imports.wbg.__wbg_now_9c5990bda04c7e53 = function () {
        const ret = Date.now();
        return ret;
    };
    // @ts-ignore */
    imports.wbg.__wbg_buffer_085ec1f694018c4f = function (arg0) {
        const ret = getObject(arg0).buffer;
        return addHeapObject(ret);
    };
    // @ts-ignore */
    imports.wbg.__wbg_newwithbyteoffsetandlength_6da8e527659b86aa = function (arg0, arg1, arg2) {
        const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    // @ts-ignore */
    imports.wbg.__wbg_new_8125e318e6245eed = function (arg0) {
        const ret = new Uint8Array(getObject(arg0));
        return addHeapObject(ret);
    };
    // @ts-ignore */
    imports.wbg.__wbg_set_5cf90238115182c3 = function (arg0, arg1, arg2) {
        getObject(arg0).set(getObject(arg1), arg2 >>> 0);
    };
    // @ts-ignore */
    imports.wbg.__wbg_newwithlength_e5d69174d6984cd7 = function (arg0) {
        const ret = new Uint8Array(arg0 >>> 0);
        return addHeapObject(ret);
    };
    // @ts-ignore */
    imports.wbg.__wbg_subarray_13db269f57aa838d = function (arg0, arg1, arg2) {
        const ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
        return addHeapObject(ret);
    };
    // @ts-ignore */
    imports.wbg.__wbindgen_throw = function (arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    imports.wbg.__wbindgen_memory = function () {
        console.log('wbg.__wbindgen_memory');
        const ret = wasm.memory;
        return addHeapObject(ret);
    };

    return imports;
}




/**
* Prove in browser using wasm
* @param {Uint8ClampedArray} witness
* @param {Uint8ClampedArray} pk
* @param {Uint8ClampedArray} compiled_circuit
* @param {Uint8ClampedArray} srs
* @returns {Uint8Array}
*/
export function prove(witness: Uint8ClampedArray, pk: Uint8ClampedArray, compiled_circuit: Uint8ClampedArray, srs: Uint8ClampedArray): Uint8Array {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray8ToWasm0(witness, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passArray8ToWasm0(pk, wasm.__wbindgen_malloc);
        const len1 = WASM_VECTOR_LEN;
        const ptr2 = passArray8ToWasm0(compiled_circuit, wasm.__wbindgen_malloc);
        const len2 = WASM_VECTOR_LEN;
        const ptr3 = passArray8ToWasm0(srs, wasm.__wbindgen_malloc);
        const len3 = WASM_VECTOR_LEN;
        wasm.prove(retptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
            throw takeObject(r2);
        }
        var v5 = getArrayU8FromWasm0(r0, r1).slice();
        // @ts-expect-error
        wasm.__wbindgen_free(r0, r1 * 1);
        return v5;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

export function useWasmEZKLRuntime() {

    console.log('useWasmEZKLRuntime');

    let im = __wbg_get_imports().wbg;
    // im.memory = new WebAssembly.Memory({ initial: 65536 });
    const module = useWasmUri<EZKL>(
        'https://github.com/TheLukaDragar/ezkl_expo_test/raw/main/app/sources/ezkl_bg_node.wasm',
        React.useMemo(
            () => ({

                __wbindgen_placeholder__: im,
                // env: {
                //   // https://github.com/iden3/circom_runtime/blob/f9de6f7d6efe521b5df6775258779ec9032b5830/js/witness_calculator.js#L27
                //   memory: new WebAssembly.Memory({ initial: 32767 }),
                // },
                // runtime: {
                //   exceptionHandler(value: number) {
                //     console.warn('got exception', value);
                //   },
                // },
            }),
            []
        )
    );

    const result = 'result' in module ? module.result : undefined;
    const error = 'error' in module ? module.error : undefined;

    // use effect for wasm variable
    React.useEffect(() => {
        if (result) {
            wasm = result.instance.exports;
            init_panic_hook();
            init_logger();
            const memory: ArrayBuffer | undefined = result.instance.exports.memory;
            console.log('memory', memory);
            console.log('byrheleng', memory.byteLength);




        }
    }
        , [result]);






    const test = React.useCallback(
        (input: number) => {
            if (!result) throw new Error('Not ready to calculate.');

            wasm = result.instance.exports;



            return 0;
        },
        [result]
    );

    const get_poseidonHash = React.useCallback(
        (input: Uint8ClampedArray) => {
            if (!result) throw new Error('Not ready to calculate.');

            wasm = result.instance.exports;

            return poseidonHash(input);
        },
        [result]
    );



    return { test, get_poseidonHash, error };
}

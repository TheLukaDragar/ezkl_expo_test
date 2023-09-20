import * as React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import * as WebAssembly from 'react-native-webassembly';

import LocalHello from './sources/Local.Hello.wasm';
import LocalEzkl from './sources/ezkl_bg.wasm';

import { __wbg_get_imports, poseidonHash, setWasm,init_panic_hook,init_logger } from './sources/ezkl.js';

import { useWasmCircomRuntime, useWasmHelloWorld } from './hooks';



export default function App() {
  const helloWorld = useWasmHelloWorld();
  const helloWorldResult =
    'result' in helloWorld ? helloWorld.result : undefined;
  const helloWorldError = 'error' in helloWorld ? helloWorld.error : undefined;

  const { calculateWTNSBin, error: circomError } = useWasmCircomRuntime();

  /* Hook I/O. */
  React.useEffect(
    () => void (helloWorldError && console.error(helloWorldError)),
    [helloWorldError]
  );

  /* ZK Snark */
  React.useEffect(
    () => void (circomError && console.error(circomError)),
    [circomError]
  );

  /* Add. */
  React.useEffect(() => {
    if (!helloWorldResult) return;

    const result = helloWorldResult.instance.exports.add(103, 202);

    if (result !== 305) throw new Error('Failed to add.');
  }, [helloWorldResult]);

  /* Local imports. */
  React.useEffect(
    () =>
      void (async () => {
        try {
          const localModule = await WebAssembly.instantiate<{
            readonly add: (a: number, b: number) => number;
          }>(LocalHello);

          const result = localModule.instance.exports.add(1000, 2000);

          if (result !== 3000) throw new Error('Failed to add. (Local)');
        } catch (e) {
          console.error(e);
        }
      })(),
    []
  );



  // React.useEffect(
  //   () =>
  //     void (async () => {
  //       try {













  //         let imports: any = __wbg_get_imports();
  //         console.log("imports", imports);
  //         imports.wbg.memory = new WebAssembly.Memory({ initial: 20 });
  //         // __wbg_init_memory(imports, new WebAssembly.Memory({ initial: 65536 })); //new WebAssembly.Memory({initial:20,maximum:65536,shared:true});

  //         console.log("imports2", imports.wbg.__wbg_log_53ed96ea72ace5e9.toString());
  //         console.log("imports3", imports.wbg.__wbg_call_01734de55d61e11d.toString());
  //         console.log("imports3", imports.wbg.memory);



  //         const localModule = await WebAssembly.instantiate<{
  //           // readonly add: (a: number, b: number) => number;
  //           init_logger: () => void;





  //         }>(LocalEzkl, {
  //           wbg: imports.wbg,



  //         });

  //         console.log("ezkl", localModule);



  //       } catch (e) {
  //         console.error("ezkl", e);

  //       }
  //     })(),
  //   []
  // );

  /* complex allocation */
  // React.useEffect(
  //   () =>
  //     void (async () => {
  //       try {
  //         /* complex */
  //         await WebAssembly.instantiate(
  //           await fetchWasm(
  //             'https://github.com/tact-lang/ton-wasm/raw/main/output/wasm/emulator-emscripten.wasm'
  //           ),
  //           {}
  //         );
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     })(),
  //   []
  // );

  // /* callback e2e */
  // React.useEffect(
  //   () =>
  //     void (async () => {
  //       try {
  //         const localCallback = await WebAssembly.instantiate<{
  //           readonly callBackFunction: (a: number) => number;
  //         }>(LocalCallback, {
  //           runtime: {
  //             callback: (a: number): number => a * 2,
  //           },
  //         });

  //         const result = localCallback.instance.exports.callBackFunction(25);

  //         if (result !== 50) throw new Error('Callback failure.');
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     })(),
  //   []
  // );

  // /* Simple memory. */
  // React.useEffect(
  //   () =>
  //     void (async () => {
  //       try {
  //         const localSimpleMemory = await WebAssembly.instantiate<{
  //           readonly write_byte_to_memory: (value: number) => void;
  //           readonly read_byte_from_memory: () => number;
  //         }>(LocalSimpleMemory);

  //         const testMemory = (withValue: number) => {
  //           localSimpleMemory.instance.exports.write_byte_to_memory(withValue);

  //           const wasmResult =
  //             localSimpleMemory.instance.exports.read_byte_from_memory();

  //           if (wasmResult !== withValue)
  //             throw new Error(
  //               `Expected ${withValue}, encountered wasm ${wasmResult}.`
  //             );

  //           const ab: ArrayBuffer = localSimpleMemory.instance.exports.memory!;

  //           const jsResult = new Uint8Array(ab.slice(0, 1))[0];

  //           // Ensure the JavaScript buffer is up-to-date.
  //           if (jsResult !== withValue)
  //             throw new Error(
  //               `Expected ${withValue}, encountered js ${jsResult}.`
  //             );
  //         };

  //         for (let i = 0; i < 255; i += 1) testMemory(i);
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     })(),
  //   []
  // );


  return (
    <View style={styles.container}>
      <Button
        title="Cirom"
        onPress={() => {
          try {
            // https://github.com/cawfree/zk-starter
            const witnessBuffer = calculateWTNSBin({ a: 3, b: 11 });
            console.log(JSON.stringify(witnessBuffer));
          } catch (e) {
            // Ignore instantiation errors.
            if (String(e) === 'Not ready to calculate.') return;

            console.error(e);
          }
        }}
      />

      <Button
        title='ALERT'
        onPress={() => {
          alert("ezkl");
        }}
      />






      <Button


        title="terfst"
        onPress={async () => {
          try {

            console.log("ezkl going to instantiate");
            // alert("ezkl going to instantiate");


            let imports: any = __wbg_get_imports();
            console.log("imports", imports);
            imports.wbg.memory = new WebAssembly.Memory({initial:1245192*2});
            // __wbg_init_memory(imports, new WebAssembly.Memory({ initial: 65536 })); //new WebAssembly.Memory({initial:20,maximum:65536,shared:true});

            console.log("imports2", imports.wbg.__wbg_log_53ed96ea72ace5e9.toString());
            console.log("imports3", imports.wbg.__wbg_call_01734de55d61e11d.toString());
            console.log("imports3", imports.wbg.memory);

            console.log("ezkl going to instantiate");

            const localModule = await WebAssembly.instantiate<{
              // readonly add: (a: number, b: number) => number;

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


            }>(LocalEzkl, {
              // env: {
              //   // https://github.com/iden3/circom_runtime/blob/f9de6f7d6efe521b5df6775258779ec9032b5830/js/witness_calculator.js#L27
              //   memory: new WebAssembly.Memory({ initial: 20 }),
              // },
              // runtime: {
              //   wbg: imports.wbg,
              // },
              wbg: imports.wbg,



            });

            console.log("ezkl done instantiate");

            const arr = new Uint8ClampedArray(10);
            console.log("ezkl aeat", arr);

            // console.log("ezkl", localModule.instance.exports.init_logger());
            // console.log("ezkl", localModule.instance.exports.init_panic_hook());
            // console.log("ezkl", localModule.instance);
            setWasm(localModule.instance.exports);

            init_panic_hook();
            init_logger();




            console.log("ezkl", poseidonHash(arr));

          } catch (e) {
            console.error("ezkl", e);

          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

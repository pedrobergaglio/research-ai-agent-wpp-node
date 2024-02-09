import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
export default {
    input: ['src/index.ts'],
    output: [
        {
            dir: 'dist',
            entryFileNames: '[name].cjs',
            format: 'cjs',
            exports: 'named',
        },
    ],
    plugins: [
        nodeResolve({
            resolveOnly: (module) => !/@google-cloud|@bot-whatsapp\/bot/i.test(module),
        }),
        typescript(),
    ],
}

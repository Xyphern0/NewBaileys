  GNU nano 8.6           index.ts
// --- Banner Log ---
// \x1b[33m = kuning, \x1b[0m = reset warna
console.log("\x1b[33m%s\x1b[0m", "Thanks you for usin>

import pino from 'pino'
import makeWASocketOriginal from './Socket'

// re-export biar tetap kompatibel dengan repo asli
export * from '../WAProto/index.js'
export * from './Utils/index'
export * from './Types/index'
export * from './Defaults/index'
export * from './WABinary/index'
export * from './WAM/index'
export * from './WAUSync/index'

// bikin logger custom
const logger = pino({ level: 'info' })

// wrapper fungsi utama supaya tiap kali dipanggil ad>
function makeWASocket(...args: Parameters<typeof make>
    logger.info("📲 Someone started a Baileys session>
    return makeWASocketOriginal(...args)
}

// tipe bawaan dari socket
export type WASocket = ReturnType<typeof makeWASocket>

// export ulang fungsi
export { makeWASocket }
export default makeWASocket

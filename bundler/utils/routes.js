/*
*   I create and export every path needed 
*   for webpack in this file. 🚀 
*/

import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const dirRoot = path.join(__dirname, '../../')
export const dirDist = path.join(__dirname, '../../dist/')
export const dirSrc = path.join(__dirname, '../../src/')
export const dirBundler = path.join(__dirname, '../../bundler/')
export const dirNode = 'node_modules'

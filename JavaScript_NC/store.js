import { createStore } from './core.js'
import reducer from './reducer.js'
import witLogger from './logger.js'

const { attach, connect, dispatch } = createStore(witLogger(reducer))

window.dispatch = dispatch

export {
    attach,
    connect,
}
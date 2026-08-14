import {contexts as windowsContext} from '../cmd/windows.js'
import {contexts as linuxContext, machines as linuxMachines} from '../cmd/linux.js'
import {os} from "@davidkhala/light/devOps.js";
import assert from 'assert'

describe('podman cli', function () {
    this.timeout(0)
    it('context', async () => {
        let contexts
        switch (os.platform) {
            case 'win32':
                contexts = windowsContext()
                assert.equal(contexts.length, 2)
                break
            case 'linux': {
                contexts = linuxContext()
                const machines = linuxMachines()
                // 每个 podman machine 固定注册 2条 connections（podman-machine-default rootless + podman-machine-default-root
                assert.equal(contexts.length, machines.length * 2)
                break
            }
        }
        console.debug('contexts', contexts)
    })
})
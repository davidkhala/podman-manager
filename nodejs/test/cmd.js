import {contexts as windowsContext} from '../cmd/windows.js'
import {contexts as linuxContext} from '../cmd/linux.js'
import {os} from "@davidkhala/light/devOps.js";
import assert from 'assert'
describe('podman cli', function () {
    this.timeout(0)
    it('context', async () => {
        let contexts
        switch (os.platform) {
            case 'win32':
                contexts = windowsContext()
                break
            case 'linux':
                contexts = linuxContext()
        }

        console.debug(contexts)
        assert.equal(contexts.length, 2)
    })
})
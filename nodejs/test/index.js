import assert from 'assert';
import {ContainerManager} from '../index.js';
import {path} from '../socket.js'
import {os} from "@davidkhala/light/devOps.js";

describe('podman', function () {
    this.timeout(0);

    it('ping', async () => {
        const podman = new ContainerManager();
        const ok = await podman.ping();
        assert.strictEqual(ok, 'OK');
        const info = await podman.info();
        console.info(info);
    });
    it('test socket', async () => {
        if (os.platform === 'win32') {
            assert.equal(path(), path(true))
        }
    })

});


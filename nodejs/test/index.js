import assert from 'assert';
import {ContainerManager} from '../podman.js';
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

    it('windows socket', async () => {
        if (os.platform !== 'win32') {
            return
        }
        const socketPath = 'ssh://user@127.0.0.1:53034/run/user/1000/podman/podman.sock'
        const podman = new ContainerManager(socketPath);
        const ok = await podman.ping()
        assert.strictEqual(ok, 'OK');
    })

});


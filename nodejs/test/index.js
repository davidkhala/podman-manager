import assert from 'assert';
import {ContainerManager} from '../index.js';

describe('podman', function () {
    this.timeout(0);

    it('ping', async () => {
        const podman = new ContainerManager();
        const ok = await podman.ping();
        assert.strictEqual(ok, 'OK');
        const info = await podman.info();
        console.info(info);
    });

});


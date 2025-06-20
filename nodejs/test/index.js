import assert from 'assert';
import {ContainerManager} from '../podman.js';
import {filedirname} from '@davidkhala/light/es6.mjs';

filedirname(import.meta);

describe('podman', function () {
	this.timeout(0);
	const podman = new ContainerManager();
	it('ping', async () => {
		const ok = await podman.ping();
		assert.strictEqual(ok, 'OK');
		const info = await podman.info();
		console.info(info);
	});

	it('windows socket', async()=>{
		'ssh://user@127.0.0.1:53034/run/user/1000/podman/podman.sock'
	})

});


import {os, uid} from '@davidkhala/light/devOps.js';
import {ContainerStatus} from '@davidkhala/container/constants.js';
import OCI from '@davidkhala/container/oci.js';
import OCIContainerOptsBuilder from '@davidkhala/container/options.js';
import OCIContainer from '@davidkhala/container/container.js';

const {initialized, created, running, exited} = ContainerStatus;

export const socketPath = () => {
	switch (os.platform) {
		case 'win32':
			return '\\\\.\\pipe\\docker_engine'; // conflict with Docker Desktop
		case 'linux':
			return `/run/user/${uid}/podman/podman.sock`;
	}
};

export class ContainerManager extends OCI {

	/**
	 *
	 * @param {DockerodeOpts} [opts]
	 * @param [logger]
	 */
	constructor(opts = {socketPath: socketPath()}, logger) {
		super(opts, logger);
	}

	async networkCreate({Name}, rootless) {
		const network = await this.client.createNetwork({
			Name,
			Driver: rootless ? 'macvlan' : 'bridge',
		});
		return await network.inspect();
	}

	async volumeCreateIfNotExist({Name}) {
		return this.client.createVolume({
			Name, Driver: 'local'
		});
	}

	async imagePull(name) {

		const onProgress = (event) => {
			const {status, progressDetail, id} = event;
			// Podman event
			this.logger.debug(status, name, progressDetail, id);
		};

		return this.image.pullIfNotExist(name, onProgress);

	}


}
export class Container extends OCIContainer {
	_afterCreate() {

		return [initialized, created];
	}
}

export class ContainerOptsBuilder extends OCIContainerOptsBuilder {
	/**
	 * TODO
	 * @param {string} network
	 * @returns {ContainerOptsBuilder}
	 */
	setNetwork(network) {

		this.opts.HostConfig.NetworkMode = network;

		return this;
	}
}
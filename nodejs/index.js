import {ContainerStatus} from '@davidkhala/container/constants.js';
import OCI from '@davidkhala/container/oci.js';
import OCIContainerOptsBuilder from '@davidkhala/container/options.js';
import OCIContainer from '@davidkhala/container/container.js';
import {path} from './socket.js'

const {initialized, created, running, exited, stopped} = ContainerStatus;

export class ContainerManager extends OCI {

    /**
     *
     * @param {DockerodeOpts} [opts]
     * @param [logger]
     */
    constructor(opts = {socketPath: path()}, logger) {
        super(opts, logger);
    }

    /**
     *
     * @param Name
     * @param [rootless]
     */
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
            const {status, progress, id} = event;
            this.logger.debug(name, status, id, progress || '');
        };
        if(!name.includes('/')){
            name = `docker.io/library/${name}`;
        }
        return this.image.pullIfNotExist(name, onProgress);

    }

    get container() {
        return new Container(this.client, this.logger);
    }

}

export class Container extends OCIContainer {
    _afterCreate() {

        return [initialized, created];
    }

    _afterStart() {
        return [running, exited, stopped];
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
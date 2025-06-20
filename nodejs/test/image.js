import {ContainerManager} from "../podman.js";

describe('', function () {
    this.timeout(0)
    const socketPath = 'ssh://user@127.0.0.1:53034/run/user/1000/podman/podman.sock'
    const podman = new ContainerManager(socketPath)
    it('pull', async () => {
        const image = 'couchdb:3.1.1';
        await podman.imagePull(image);
        await podman.image.delete(image);
    });
})
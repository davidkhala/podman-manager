import {ContainerManager} from "../index.js";

describe('image', function () {
    this.timeout(0)
    const podman = new ContainerManager()
    it('pull', async () => {
        const image = 'couchdb';
        await podman.image.pullIfNotExist(image);
        await podman.image.delete(image);
    });
})
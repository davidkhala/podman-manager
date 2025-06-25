import {ContainerManager} from "../index.js";

describe('image', function () {
    this.timeout(0)
    const podman = new ContainerManager()
    it('pull', async () => {
        const image = 'couchdb';
        await podman.imagePull(image);
        await podman.image.delete(image);
    });
})
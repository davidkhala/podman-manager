import {ContainerManager} from "../podman.js";

describe('', function (){
    this.timeout(0)
    const podman = new ContainerManager()
    it('pull', async () => {
		const image = 'couchdb:3.1.1';
		await podman.imageDelete(image);
		await podman.imagePull(image);
		await podman.imageDelete(image);
	});
})
import {ContainerManager, ContainerOptsBuilder, socketPath} from "../index.js";


describe('podman volume', function (){
	this.timeout(0)
	const podman = new ContainerManager({socketPath})
	// Ref: https://docs.oracle.com/zh-tw/learn/storage_podman_containers/#use-a-bind-mount-for-webserver-data-storage
	const containerName = 'ubuntuV'
	const volumeName = 'vol'
	it('volume create and mount', async () => {


		const image = 'ubuntu'
		await podman.imagePull(image);

		await podman.volumeCreateIfNotExist({Name: volumeName})
		const containerOptsBuilder = new ContainerOptsBuilder(image);
		containerOptsBuilder.setVolume(volumeName, '/web')
		containerOptsBuilder.setName(containerName)
		await podman.containerStart(containerOptsBuilder.opts)
	})
	after(async ()=>{
		await podman.containerDelete(containerName);
		await podman.volumeRemove(volumeName)
	})
})
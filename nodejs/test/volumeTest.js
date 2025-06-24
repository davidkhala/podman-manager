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
		await podman.container.delete(containerName);
		const containerOptsBuilder = new ContainerOptsBuilder(image);
		containerOptsBuilder.setVolume(volumeName, '/web')
		containerOptsBuilder.name = containerName
		await podman.containerStart(containerOptsBuilder.opts)
	})
	after(async ()=>{
		await podman.container.delete(containerName);
		await podman.volume.delete(volumeName)
	})
})
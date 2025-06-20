import {ContainerOptsBuilder, ContainerManager} from '../podman.js';

describe('podman container start', function () {
    this.timeout(0);
    const manager = new ContainerManager();

    it('postgre', async () => {
        const Image = 'postgres';
        const name = Image
        const opts = new ContainerOptsBuilder(Image);
        opts.setPortBind(`${6432}:5432`);
        opts.name = name;
        opts.env = [`POSTGRES_PASSWORD=${'password'}`];
        await manager.containerStart(opts.opts, true);
        await manager.container.delete(name);
    });

});
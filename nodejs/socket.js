import {os, uid} from "@davidkhala/light/devOps.js";
import {contexts, userServiceStart} from "./cmd/linux.js";
import * as fs from "node:fs";
import assert from "assert";

/**
 * get rootless socket
 * @param {boolean} fromMachine from Podman machine
 * @return {string}
 */
export const path = (fromMachine) => {
    switch (os.platform) {
        case 'win32':
            `/./pipe/podman-machine-default`// TODO validate AI
            return '\\\\.\\pipe\\docker_engine'; // API forwarding listening on: npipe:////./pipe/docker_engine
        case 'linux':
            if (fromMachine) {
                const defaultCtx = contexts().find(({Default}) => Default === true)
                return defaultCtx.URI;
            } else {
                const servicePath = `/run/user/${uid}/podman/podman.sock`
                if (!fs.existsSync(servicePath)) {
                    userServiceStart()
                    assert.ok(fs.existsSync(servicePath))
                }
                return servicePath
            }
    }
};
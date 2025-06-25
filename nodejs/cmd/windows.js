import {execSync} from "@davidkhala/light/devOps.js";
import {contextsfmt} from "./common.js";

export const podman = '"C:\\Program Files\\RedHat\\Podman\\podman.exe"'
export const contexts = () => contextsfmt(execSync(`${podman} system connection list --format=json`))
export const machines = () => JSON.parse(execSync(`${podman} machine inspect`))
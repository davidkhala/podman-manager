import {execSync} from '@davidkhala/light/devOps.js';
import {contextsfmt} from "./common.js";

export const userServiceStart = () => execSync('systemctl --user enable --now podman.socket');
export const rootServiceStart = () => execSync(`sudo systemctl enable --now podman.socket`)
export const contexts = () => contextsfmt(execSync(`podman context ls --format '{{json .}}' | jq -s`))
export const serviceSocket = () => execSync(`podman info --format '{{.Host.RemoteSocket.Path}}'`)
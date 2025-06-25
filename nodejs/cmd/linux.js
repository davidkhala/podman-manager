import {execSync} from '@davidkhala/light/devOps.js';
import {contextsfmt} from "./common.js";

export const serviceStart = () => execSync('systemctl --user enable --now podman.socket');
export const contexts = () => contextsfmt(execSync(`podman context ls --format '{{json .}}' | jq -s`))
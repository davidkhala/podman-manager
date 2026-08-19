# [podman-compose](https://github.com/containers/podman-compose)


## install
With internet available
```
pip3 install podman-compose
```
Without internet
```
pip3 install https://github.com/containers/podman-compose/archive/devel.tar.gz
```

os specific
- on linux as binary
  - rootful: `curl https://raw.githubusercontent.com/davidkhala/linux-utils/refs/heads/main/apps/podman.sh | bash -s install-compose`
  - rootless: 
- on debian: `sudo apt install podman-compose`
- on centos: `sudo dnf install podman-compose`


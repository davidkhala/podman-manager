
# network in podman machine

## [User mode networking](https://docs.podman.io/en/latest/markdown/podman-machine-init.1.html#user-mode-networking)

`--user-mode-networking`: When `true`, VPNs observe all podman machine traffic as coming from the host

- By a user-space process running on the host
- When the qemu backend is used (Linux, Mac), this is not configurable and always true
- The Windows/WSL backend defaults to false and allows it to be configured
  - **Global**: Since WSL shares the same kernel across distributions(podman machines), all other running distributions reuses this network.

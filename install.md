# [On Windows](https://podman.io/docs/installation#windows)

- On Windows, each Podman machine is backed by a virtualized Windows System for Linux (WSLv2) distribution.
  - Internally, WSL uses virtualization, so your system must support and have hardware virtualization enabled.
- Once installed, the podman command can be run in your Windows PowerShell or CMD (by remotely communicates with the podman service in WSL environment)
  - or directly from the WSL instance 

## Windows desktop
- Since Podman uses WSL, you need a recent release of Windows 10 or Windows 11. On x64, WSL requires build 18362 or later
## Windows server
- If you are running Windows on a VM, you must have a VM that supports nested virtualization.


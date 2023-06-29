# [On Windows](https://podman.io/docs/installation#windows)
Current LTS 4.1
- On Windows, each Podman machine is backed by a virtualized Windows System for Linux (WSLv2) distribution.
- Once installed, the podman command can be run directly from your Windows PowerShell (or CMD) prompt, where it remotely communicates with the podman service running in the WSL environment.
- Alternatively, you can access Podman directly from the WSL instance if you prefer a Linux prompt and Linux tooling.
- Internally, WSL uses virtualization, so your system must support and have hardware virtualization enabled.
## Windows desktop
- Since Podman uses WSL, you need a recent release of Windows 10 or Windows 11. On x64, WSL requires build 18362 or later
## Windows on Cloud
- If you are running Windows on a VM, you must have a VM that supports nested virtualization.


$ErrorActionPreference = "Stop"
function delete{
    podman machine rm
}
function create{
    podman machine init --user-mode-networking --now
}
if ($args.Count -gt 0) {
    Invoke-Expression ($args -join " ")
}

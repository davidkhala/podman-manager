volume-create(){
  # https://docs.podman.io/en/latest/markdown/podman-volume-create.1.html
  podman volume create
}
sock-list(){
  podman system connection list
}
$@

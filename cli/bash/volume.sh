set -e
create(){
  # https://docs.podman.io/en/latest/markdown/podman-volume-create.1.html
  podman volume create
}
$@
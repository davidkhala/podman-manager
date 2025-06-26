set -e
list(){
  podman machine inspect
}
$@

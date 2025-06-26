set -e
build(){
  podman image build $@
}
$@
systemctl daemon-reload :start docker
docker image ls: list all image
docker image rm -f hello-world : remove image named hello-world
docker container stop $(docker container ls -aq): stop all container

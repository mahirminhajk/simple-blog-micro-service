### DOCKER BUILD

```warp-runnable-command
sudo docker build -t mahirminhajk/{{name}} .
```
### Push Docker to hub
```warp-runnable-command
docker push mahirminhajk/{{image_name}}:{{tag}}
```
### RUN DOCKER 

```warp-runnable-command
sudo docker run mahirminhajk/{{name}}

```
### OPEN DOCKER DIR \(\)

```warp-runnable-command
sudo docker run -it mahirminhajk/{{name}}  sh

```
### DOCKER PS

```warp-runnable-command
sudo docker ps

```
### DOCKER LOGS

```warp-runnable-command
sudo docker logs c

```
### EXECUTE COMMAND IN DOCKER

```warp-runnable-command
sudo docker exec -it {{name}} sh
```

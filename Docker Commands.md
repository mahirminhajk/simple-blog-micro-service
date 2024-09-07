### DOCKER BUILD

```warp-runnable-command
sudo docker build -t mahirminhajk/{{name}} .
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

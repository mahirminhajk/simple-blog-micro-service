### Apply yaml file
```warp-runnable-command
kubectl apply -f {{file_path}}
```
### List Service
```warp-runnable-command
kubectl get services
```
### get miniube ip
```warp-runnable-command
minikube ip
```
### Describe service
To get more information of the pod for debuggin
```warp-runnable-command
kubectl describe service {{deployment_name}}
```
### Run Service (NODE_PORT)
```warp-runnable-command
minikube_ip:random_port
```

### Apply yaml file
```warp-runnable-command
kubectl apply -f {{file_path}}
```
### List Deployments
```warp-runnable-command
kubectl get deployments
```
### Delete deployment
```warp-runnable-command
kubectl delete deployment {{deployment_name}}
```
### Describe deployment
To get more information of the pod for debuggin
```warp-runnable-command
kubectl describe deployment {{deployment_name}}
```
### Restart \(rollout\)
```warp-runnable-command
kubectl rollout restart deployment {{deployment_name}}
```

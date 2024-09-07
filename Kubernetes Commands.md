### Apply yaml file
```warp-runnable-command
kubectl apply -f {{file_path}}
```
### List Pods
```warp-runnable-command
kubectl get pods
```
### Get Logs
```warp-runnable-command
kubectl logs {{pod_names}}
```
### Execute a command in a Kubernetes pod
```warp-runnable-command
kubectl exec {{pod_name}} -- {{command}}
```
### Delete pod
```warp-runnable-command
kubectl delete pod {{pod_name}}
```
### Restart a Pod
```warp-runnable-command
# delete the pod and recreate the pod to restar the pod
kubectl delete pod {{pod_name}}
kubectl apply -f {{file_path}}
```
### Describe pod
To get more information of the pod for debuggin
```warp-runnable-command
kubectl describe pod {{pod_name}}
```

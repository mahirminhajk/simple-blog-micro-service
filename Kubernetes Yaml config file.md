```yaml
apiVersion: v1 # K8s is extensible - We can add in our own customer objects. This specifies the set of objects we want k8s to look at
kind: Pod # The type of object we want to create
metadata: # Config options for the object we are about to create
  name: posts # a name for the pod
spec: # The exact attributes we want to apply to the object we are about to create
  containers: # We can create many containers in a single pod
    - name: posts # give the container a name
      image: mahirminhajk/posts:0.0.1 # the exact image we want to use

```

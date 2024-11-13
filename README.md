# nodejs-service-deployment

The code in the repo is used to create an AWS EC2 instance,
install nodejs and npm, and deploy nodejs app to the instance.
It also includes github actions workflow for deploying code
from the ```node_app``` folder to the EC2 instance whenever files
in the folder are changed.


### 1. Create EC2 instance with terraform
  ```
  cd terraform
  terraform init
  terraform apply
  ```
### 2. Install node, npm and deploy initial app to the server
  ```
  cd ansible
  ansible-playbook node_service.yml -i inventory
  ```

### Addidional info

  - You need to have AWS credentials in ~/.aws/credentials for terraform to work.
  - Your AWS role should have all the necessary permissions to create EC2 instances.
  - You need to add SSH key created by terraform to the secrets in github repo for workflow to work.
  Workflow uses ```secrets.SSH_EC2_KEY``` variable as SSH key for ansible.


### Link to the project details: [https://roadmap.sh/projects/nodejs-service-deployment](https://roadmap.sh/projects/nodejs-service-deployment).
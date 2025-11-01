# 🚀 Node.js on Kubernetes (Docker Desktop / Minikube)

This project demonstrates how to deploy a Node.js web application on a local Kubernetes cluster using Docker Desktop or Minikube.  
It includes load balancing, replication, and self-healing features.

---

## 🧱 Stack
- **Node.js / Express** — Web app
- **Docker** — Containerization
- **Kubernetes (K8s)** — Orchestration
- **kubectl** — CLI management

---

## ⚙️ Deployment Steps
1. Build Docker image  
   ```bash
   docker build -t my-webapp:latest .
Apply Kubernetes configuration


kubectl apply -f k8s/app.yaml
Verify

bash
Копировать код
kubectl get pods
kubectl get services
Access app

Docker Desktop: http://localhost

Minikube: minikube service my-webapp-service --url

🎯 Features
3 replicas of Node.js app

Built-in load balancing

Auto-healing if pods crash

Easy scaling up/down:

bash
Копировать код
kubectl scale deployment my-webapp --replicas=5

import { applicationCategories, applicationCommands } from "./application-commands.js";

export const categories = [
  {
    "name": "Linux",
    "icon": "🐧",
    "description": "Linux & Unix"
  },
  {
    "name": "Git",
    "icon": "🌿",
    "description": "Version control"
  },
  {
    "name": "Docker",
    "icon": "🐳",
    "description": "Containers"
  },
  {
    "name": "Kubernetes",
    "icon": "☸️",
    "description": "Kubernetes"
  },
  {
    "name": "AKS",
    "icon": "☁️",
    "description": "Azure Kubernetes Service"
  },
  {
    "name": "Azure CLI",
    "icon": "🔷",
    "description": "Microsoft Azure"
  },
  {
    "name": "Terraform",
    "icon": "🏗️",
    "description": "Infrastructure as code"
  },
  {
    "name": "Helm",
    "icon": "⎈",
    "description": "Kubernetes packages"
  },
  {
    "name": "Ansible",
    "icon": "⚙️",
    "description": "Configuration automation"
  },
  {
    "name": "GitHub Actions",
    "icon": "🚀",
    "description": "CI/CD"
  },
  {
    "name": "Azure DevOps",
    "icon": "🔁",
    "description": "CI/CD"
  },
  {
    "name": "Jenkins",
    "icon": "🔨",
    "description": "CI/CD"
  },
  {
    "name": "AWS CLI",
    "icon": "🟠",
    "description": "Amazon Web Services"
  },
  {
    "name": "GCP CLI",
    "icon": "🔵",
    "description": "Google Cloud"
  },
  {
    "name": "Networking",
    "icon": "🌐",
    "description": "Network troubleshooting"
  },
  {
    "name": "Nginx",
    "icon": "🟢",
    "description": "Web server"
  },
  {
    "name": "SSH",
    "icon": "🔐",
    "description": "Remote access"
  },
  {
    "name": "TLS/OpenSSL",
    "icon": "🔒",
    "description": "Certificates & TLS"
  },
  {
    "name": "Prometheus",
    "icon": "📈",
    "description": "Metrics"
  },
  {
    "name": "Grafana",
    "icon": "📊",
    "description": "Dashboards"
  },
  {
    "name": "PostgreSQL",
    "icon": "🐘",
    "description": "Database"
  },
  {
    "name": "MySQL",
    "icon": "🗄️",
    "description": "Database"
  },
  {
    "name": "Redis",
    "icon": "⚡",
    "description": "Caching"
  },
  {
    "name": "Container Registries",
    "icon": "📦",
    "description": "Images & registries"
  },
  {
    "name": "CI/CD Troubleshooting",
    "icon": "🧯",
    "description": "Pipeline troubleshooting"
  },
  {
    "name": "Kubernetes Troubleshooting",
    "icon": "🚨",
    "description": "Cluster troubleshooting"
  },
  {
    "name": "Production Incident Playbooks",
    "icon": "🔥",
    "description": "Incident response"
  },
  ...applicationCategories
];

export const commands = [
  ...applicationCommands,
  {
    "id": "linux-pwd",
    "category": "Linux",
    "subcategory": "Filesystem",
    "level": "beginner",
    "command": "pwd",
    "description": "Show the current working directory.",
    "useCase": "Confirm where you are before running path-sensitive commands.",
    "example": "pwd",
    "keywords": [
      "where am i",
      "current directory"
    ],
    "tags": [
      "linux",
      "path"
    ]
  },
  {
    "id": "linux-ls",
    "category": "Linux",
    "subcategory": "Filesystem",
    "level": "beginner",
    "command": "ls -lah",
    "description": "List files with permissions, ownership and human-readable sizes.",
    "useCase": "Inspect a directory including hidden files.",
    "example": "ls -lah /var/log",
    "keywords": [
      "list files",
      "hidden files",
      "directory"
    ],
    "tags": [
      "linux",
      "files"
    ]
  },
  {
    "id": "linux-cd",
    "category": "Linux",
    "subcategory": "Filesystem",
    "level": "beginner",
    "command": "cd /path/to/dir",
    "description": "Change the current shell directory.",
    "useCase": "Move into a project or system directory.",
    "example": "cd /var/log",
    "keywords": [
      "change directory",
      "navigate"
    ],
    "tags": [
      "linux",
      "shell"
    ]
  },
  {
    "id": "linux-find",
    "category": "Linux",
    "subcategory": "Filesystem",
    "level": "intermediate",
    "command": "find /var/log -type f -name '*.log'",
    "description": "Find files matching a pattern.",
    "useCase": "Locate logs, configs or artifacts.",
    "example": "find /var/log -type f -name '*.log'",
    "keywords": [
      "find file",
      "search files",
      "logs"
    ],
    "tags": [
      "linux",
      "files"
    ]
  },
  {
    "id": "linux-grep",
    "category": "Linux",
    "subcategory": "Text",
    "level": "beginner",
    "command": "grep -Rni 'error' /var/log",
    "description": "Search recursively for matching text.",
    "useCase": "Find errors or configuration values in files.",
    "example": "grep -Rni 'error' /var/log",
    "keywords": [
      "search text",
      "find error",
      "log search"
    ],
    "tags": [
      "linux",
      "grep"
    ]
  },
  {
    "id": "linux-tail",
    "category": "Linux",
    "subcategory": "Logs",
    "level": "beginner",
    "command": "tail -f /var/log/app.log",
    "description": "Follow a log file as new lines arrive.",
    "useCase": "Watch application logs during troubleshooting.",
    "example": "tail -f /var/log/app.log",
    "keywords": [
      "follow logs",
      "live logs",
      "tail"
    ],
    "tags": [
      "linux",
      "logs"
    ]
  },
  {
    "id": "linux-journalctl",
    "category": "Linux",
    "subcategory": "Services",
    "level": "intermediate",
    "command": "journalctl -u nginx -f",
    "description": "Follow systemd logs for a service.",
    "useCase": "Troubleshoot a systemd-managed service.",
    "example": "journalctl -u nginx -f",
    "keywords": [
      "systemd logs",
      "service logs",
      "live logs"
    ],
    "tags": [
      "linux",
      "systemd"
    ]
  },
  {
    "id": "linux-systemctl-status",
    "category": "Linux",
    "subcategory": "Services",
    "level": "beginner",
    "command": "systemctl status nginx",
    "description": "Show service status and recent service logs.",
    "useCase": "Check whether a system service is running.",
    "example": "systemctl status nginx",
    "keywords": [
      "service status",
      "systemd",
      "nginx status"
    ],
    "tags": [
      "linux",
      "systemd"
    ]
  },
  {
    "id": "linux-systemctl-restart",
    "category": "Linux",
    "subcategory": "Services",
    "level": "beginner",
    "command": "sudo systemctl restart nginx",
    "description": "Restart a systemd service.",
    "useCase": "Apply a service configuration change or recover a stuck service.",
    "example": "sudo systemctl restart nginx",
    "keywords": [
      "restart service",
      "reload service",
      "systemd restart"
    ],
    "tags": [
      "linux",
      "systemd"
    ],
    "warning": true
  },
  {
    "id": "linux-free",
    "category": "Linux",
    "subcategory": "Resources",
    "level": "beginner",
    "command": "free -h",
    "description": "Show RAM and swap usage in human-readable units.",
    "useCase": "Investigate memory pressure.",
    "example": "free -h",
    "keywords": [
      "memory",
      "ram",
      "swap",
      "linux memory"
    ],
    "tags": [
      "linux",
      "memory"
    ]
  },
  {
    "id": "linux-top",
    "category": "Linux",
    "subcategory": "Processes",
    "level": "beginner",
    "command": "top",
    "description": "Interactive view of CPU, memory and processes.",
    "useCase": "Identify processes consuming resources.",
    "example": "top",
    "keywords": [
      "cpu",
      "memory",
      "processes",
      "high cpu"
    ],
    "tags": [
      "linux",
      "process"
    ]
  },
  {
    "id": "linux-ps",
    "category": "Linux",
    "subcategory": "Processes",
    "level": "beginner",
    "command": "ps aux --sort=-%cpu | head",
    "description": "Show the highest CPU-consuming processes.",
    "useCase": "Quickly find CPU-heavy processes.",
    "example": "ps aux --sort=-%cpu | head",
    "keywords": [
      "process cpu",
      "high cpu",
      "process list"
    ],
    "tags": [
      "linux",
      "process"
    ]
  },
  {
    "id": "linux-kill",
    "category": "Linux",
    "subcategory": "Processes",
    "level": "intermediate",
    "command": "kill <PID>",
    "description": "Send a signal to a process.",
    "useCase": "Gracefully stop a process that needs to exit.",
    "example": "kill 1234",
    "keywords": [
      "kill process",
      "stop process",
      "pid"
    ],
    "tags": [
      "linux",
      "process"
    ],
    "warning": true
  },
  {
    "id": "linux-df",
    "category": "Linux",
    "subcategory": "Storage",
    "level": "beginner",
    "command": "df -h",
    "description": "Show filesystem disk usage.",
    "useCase": "Diagnose a full disk.",
    "example": "df -h",
    "keywords": [
      "disk full",
      "disk usage",
      "filesystem"
    ],
    "tags": [
      "linux",
      "storage"
    ]
  },
  {
    "id": "linux-du",
    "category": "Linux",
    "subcategory": "Storage",
    "level": "beginner",
    "command": "du -sh * | sort -h",
    "description": "Find which entries consume the most space.",
    "useCase": "Locate large directories/files.",
    "example": "du -sh /var/* | sort -h",
    "keywords": [
      "large files",
      "disk usage",
      "directory size"
    ],
    "tags": [
      "linux",
      "storage"
    ]
  },
  {
    "id": "linux-ss",
    "category": "Linux",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "ss -lntp",
    "description": "Show listening TCP sockets and owning processes.",
    "useCase": "Find which process is listening on a port.",
    "example": "ss -lntp",
    "keywords": [
      "listening ports",
      "ports",
      "network sockets"
    ],
    "tags": [
      "linux",
      "network"
    ]
  },
  {
    "id": "linux-curl",
    "category": "Linux",
    "subcategory": "Networking",
    "level": "beginner",
    "command": "curl -I https://example.com",
    "description": "Fetch HTTP headers.",
    "useCase": "Test HTTP reachability and response headers.",
    "example": "curl -I https://example.com",
    "keywords": [
      "http test",
      "endpoint test",
      "curl"
    ],
    "tags": [
      "linux",
      "http"
    ]
  },
  {
    "id": "linux-tar",
    "category": "Linux",
    "subcategory": "Archives",
    "level": "beginner",
    "command": "tar -czf backup.tar.gz ./dir",
    "description": "Create a gzip-compressed tar archive.",
    "useCase": "Package logs or files for transfer.",
    "example": "tar -czf backup.tar.gz ./dir",
    "keywords": [
      "compress",
      "archive",
      "tar"
    ],
    "tags": [
      "linux",
      "archive"
    ]
  },
  {
    "id": "git-status",
    "category": "Git",
    "subcategory": "Everyday",
    "level": "beginner",
    "command": "git status",
    "description": "Show working tree and staging status.",
    "useCase": "Check what changed before committing.",
    "example": "git status",
    "keywords": [
      "status",
      "changes",
      "working tree"
    ],
    "tags": [
      "git"
    ]
  },
  {
    "id": "git-log",
    "category": "Git",
    "subcategory": "History",
    "level": "beginner",
    "command": "git log --oneline --graph --decorate -20",
    "description": "View compact commit history.",
    "useCase": "Understand recent branch history.",
    "example": "git log --oneline --graph --decorate -20",
    "keywords": [
      "history",
      "commits",
      "log"
    ],
    "tags": [
      "git"
    ]
  },
  {
    "id": "git-branch",
    "category": "Git",
    "subcategory": "Branches",
    "level": "beginner",
    "command": "git branch -a",
    "description": "List local and remote branches.",
    "useCase": "Discover available branches.",
    "example": "git branch -a",
    "keywords": [
      "branches",
      "remote branches"
    ],
    "tags": [
      "git"
    ]
  },
  {
    "id": "git-switch",
    "category": "Git",
    "subcategory": "Branches",
    "level": "beginner",
    "command": "git switch <branch>",
    "description": "Switch branches.",
    "useCase": "Move to an existing branch.",
    "example": "git switch develop",
    "keywords": [
      "checkout branch",
      "switch branch"
    ],
    "tags": [
      "git"
    ]
  },
  {
    "id": "git-create-branch",
    "category": "Git",
    "subcategory": "Branches",
    "level": "beginner",
    "command": "git switch -c <branch>",
    "description": "Create and switch to a new branch.",
    "useCase": "Start isolated work.",
    "example": "git switch -c feature/api",
    "keywords": [
      "new branch",
      "create branch"
    ],
    "tags": [
      "git"
    ]
  },
  {
    "id": "git-fetch",
    "category": "Git",
    "subcategory": "Remote",
    "level": "beginner",
    "command": "git fetch --all --prune",
    "description": "Fetch remote refs and remove stale remote-tracking refs.",
    "useCase": "Refresh remote branch information.",
    "example": "git fetch --all --prune",
    "keywords": [
      "sync remote",
      "refresh branches"
    ],
    "tags": [
      "git"
    ]
  },
  {
    "id": "git-pull",
    "category": "Git",
    "subcategory": "Remote",
    "level": "beginner",
    "command": "git pull --rebase",
    "description": "Update the current branch using rebase.",
    "useCase": "Keep local work current with remote changes.",
    "example": "git pull --rebase",
    "keywords": [
      "update branch",
      "sync branch"
    ],
    "tags": [
      "git"
    ]
  },
  {
    "id": "git-diff",
    "category": "Git",
    "subcategory": "Changes",
    "level": "beginner",
    "command": "git diff",
    "description": "Show unstaged changes.",
    "useCase": "Review modifications before staging.",
    "example": "git diff",
    "keywords": [
      "changes",
      "diff",
      "review"
    ],
    "tags": [
      "git"
    ]
  },
  {
    "id": "git-stash",
    "category": "Git",
    "subcategory": "Changes",
    "level": "beginner",
    "command": "git stash push -m 'work in progress'",
    "description": "Temporarily store uncommitted changes.",
    "useCase": "Switch context without committing unfinished work.",
    "example": "git stash push -m 'wip'",
    "keywords": [
      "stash",
      "save changes",
      "wip"
    ],
    "tags": [
      "git"
    ]
  },
  {
    "id": "git-reset",
    "category": "Git",
    "subcategory": "Recovery",
    "level": "advanced",
    "command": "git reset --hard HEAD",
    "description": "Discard tracked working-tree changes.",
    "useCase": "Reset a local branch to the current commit.",
    "example": "git reset --hard HEAD",
    "keywords": [
      "discard changes",
      "reset",
      "undo"
    ],
    "tags": [
      "git"
    ],
    "warning": true
  },
  {
    "id": "git-revert",
    "category": "Git",
    "subcategory": "Recovery",
    "level": "intermediate",
    "command": "git revert <commit>",
    "description": "Create a new commit that reverses a previous commit.",
    "useCase": "Safely undo a change already shared.",
    "example": "git revert abc1234",
    "keywords": [
      "undo commit",
      "rollback commit"
    ],
    "tags": [
      "git"
    ]
  },
  {
    "id": "git-cherry-pick",
    "category": "Git",
    "subcategory": "Advanced",
    "level": "advanced",
    "command": "git cherry-pick <commit>",
    "description": "Apply a specific commit onto the current branch.",
    "useCase": "Move one targeted fix between branches.",
    "example": "git cherry-pick abc1234",
    "keywords": [
      "pick commit",
      "move commit"
    ],
    "tags": [
      "git"
    ]
  },
  {
    "id": "git-blame",
    "category": "Git",
    "subcategory": "Debugging",
    "level": "intermediate",
    "command": "git blame <file>",
    "description": "Show which commit last changed each line.",
    "useCase": "Trace ownership and change history.",
    "example": "git blame app.py",
    "keywords": [
      "who changed",
      "line history",
      "debug"
    ],
    "tags": [
      "git"
    ]
  },
  {
    "id": "docker-ps",
    "category": "Docker",
    "subcategory": "Containers",
    "level": "beginner",
    "command": "docker ps",
    "description": "List running containers.",
    "useCase": "See currently running containers.",
    "example": "docker ps",
    "keywords": [
      "list containers",
      "running containers"
    ],
    "tags": [
      "docker"
    ]
  },
  {
    "id": "docker-ps-all",
    "category": "Docker",
    "subcategory": "Containers",
    "level": "beginner",
    "command": "docker ps -a",
    "description": "List all containers.",
    "useCase": "Find stopped or exited containers.",
    "example": "docker ps -a",
    "keywords": [
      "all containers",
      "stopped containers",
      "exited"
    ],
    "tags": [
      "docker"
    ]
  },
  {
    "id": "docker-images",
    "category": "Docker",
    "subcategory": "Images",
    "level": "beginner",
    "command": "docker images",
    "description": "List local images.",
    "useCase": "Inspect cached images and tags.",
    "example": "docker images",
    "keywords": [
      "list images",
      "docker image"
    ],
    "tags": [
      "docker"
    ]
  },
  {
    "id": "docker-run",
    "category": "Docker",
    "subcategory": "Containers",
    "level": "beginner",
    "command": "docker run -d --name <name> <image>",
    "description": "Run a container in the background.",
    "useCase": "Start a service container.",
    "example": "docker run -d --name web nginx",
    "keywords": [
      "run container",
      "start container"
    ],
    "tags": [
      "docker"
    ]
  },
  {
    "id": "docker-logs",
    "category": "Docker",
    "subcategory": "Debugging",
    "level": "beginner",
    "command": "docker logs -f <container>",
    "description": "Follow container logs.",
    "useCase": "Troubleshoot application startup and runtime issues.",
    "example": "docker logs -f web",
    "keywords": [
      "container logs",
      "logs",
      "debug"
    ],
    "tags": [
      "docker"
    ]
  },
  {
    "id": "docker-exec",
    "category": "Docker",
    "subcategory": "Debugging",
    "level": "beginner",
    "command": "docker exec -it <container> /bin/sh",
    "description": "Open a shell inside a running container.",
    "useCase": "Inspect files, environment and processes inside a container.",
    "example": "docker exec -it web /bin/sh",
    "keywords": [
      "shell container",
      "exec",
      "debug container"
    ],
    "tags": [
      "docker"
    ]
  },
  {
    "id": "docker-inspect",
    "category": "Docker",
    "subcategory": "Debugging",
    "level": "intermediate",
    "command": "docker inspect <container>",
    "description": "Show detailed container metadata.",
    "useCase": "Inspect networking, mounts, environment and configuration.",
    "example": "docker inspect web",
    "keywords": [
      "inspect container",
      "container config"
    ],
    "tags": [
      "docker"
    ]
  },
  {
    "id": "docker-build",
    "category": "Docker",
    "subcategory": "Images",
    "level": "beginner",
    "command": "docker build -t <image>:<tag> .",
    "description": "Build an image from a Dockerfile.",
    "useCase": "Create an application image.",
    "example": "docker build -t myapp:1.0 .",
    "keywords": [
      "build image",
      "dockerfile"
    ],
    "tags": [
      "docker"
    ]
  },
  {
    "id": "docker-push",
    "category": "Docker",
    "subcategory": "Registry",
    "level": "beginner",
    "command": "docker push <registry>/<image>:<tag>",
    "description": "Push an image to a registry.",
    "useCase": "Publish an image for deployment.",
    "example": "docker push ghcr.io/acme/myapp:1.0",
    "keywords": [
      "push image",
      "registry"
    ],
    "tags": [
      "docker"
    ]
  },
  {
    "id": "docker-system-prune",
    "category": "Docker",
    "subcategory": "Cleanup",
    "level": "intermediate",
    "command": "docker system prune",
    "description": "Remove unused Docker data.",
    "useCase": "Recover disk space from unused objects.",
    "example": "docker system prune",
    "keywords": [
      "clean docker",
      "cleanup",
      "free disk",
      "prune"
    ],
    "tags": [
      "docker",
      "cleanup"
    ],
    "warning": true
  },
  {
    "id": "docker-image-prune",
    "category": "Docker",
    "subcategory": "Cleanup",
    "level": "intermediate",
    "command": "docker image prune -a",
    "description": "Remove unused images.",
    "useCase": "Recover space from unused image layers.",
    "example": "docker image prune -a",
    "keywords": [
      "clean images",
      "remove images"
    ],
    "tags": [
      "docker",
      "cleanup"
    ],
    "warning": true
  },
  {
    "id": "docker-compose-up",
    "category": "Docker",
    "subcategory": "Compose",
    "level": "beginner",
    "command": "docker compose up -d",
    "description": "Start services defined in Compose.",
    "useCase": "Bring up a local multi-container stack.",
    "example": "docker compose up -d",
    "keywords": [
      "compose up",
      "start stack",
      "docker compose"
    ],
    "tags": [
      "docker",
      "compose"
    ]
  },
  {
    "id": "docker-compose-logs",
    "category": "Docker",
    "subcategory": "Compose",
    "level": "beginner",
    "command": "docker compose logs -f <service>",
    "description": "Follow logs for a Compose service.",
    "useCase": "Troubleshoot one service in a local stack.",
    "example": "docker compose logs -f api",
    "keywords": [
      "compose logs",
      "service logs"
    ],
    "tags": [
      "docker",
      "compose"
    ]
  },
  {
    "id": "k8s-get-pods",
    "category": "Kubernetes",
    "subcategory": "Pods",
    "level": "beginner",
    "command": "kubectl get pods -A -o wide",
    "description": "List pods across namespaces with node placement.",
    "useCase": "Quickly inspect cluster workload state.",
    "example": "kubectl get pods -A -o wide",
    "keywords": [
      "pods",
      "list pods",
      "k8s",
      "kubernetes",
      "pod"
    ],
    "tags": [
      "kubectl",
      "pods"
    ]
  },
  {
    "id": "k8s-describe-pod",
    "category": "Kubernetes",
    "subcategory": "Troubleshooting",
    "level": "beginner",
    "command": "kubectl describe pod <pod> -n <namespace>",
    "description": "Show pod events, probes, volumes and scheduling details.",
    "useCase": "Diagnose Pending, CrashLoopBackOff and startup issues.",
    "example": "kubectl describe pod api-7d9 -n production",
    "keywords": [
      "pod crash",
      "crashloop",
      "describe pod",
      "events",
      "k8s"
    ],
    "tags": [
      "kubectl",
      "troubleshooting"
    ]
  },
  {
    "id": "k8s-logs",
    "category": "Kubernetes",
    "subcategory": "Troubleshooting",
    "level": "beginner",
    "command": "kubectl logs <pod> -n <namespace>",
    "description": "Show current container logs.",
    "useCase": "Inspect application errors and startup output.",
    "example": "kubectl logs api-7d9 -n production",
    "keywords": [
      "pod logs",
      "logs",
      "crash",
      "k8s logs"
    ],
    "tags": [
      "kubectl",
      "logs"
    ]
  },
  {
    "id": "k8s-previous-logs",
    "category": "Kubernetes",
    "subcategory": "Troubleshooting",
    "level": "intermediate",
    "command": "kubectl logs <pod> -n <namespace> --previous",
    "description": "Show logs from the previous container instance.",
    "useCase": "Investigate CrashLoopBackOff when the current container restarts quickly.",
    "example": "kubectl logs api-7d9 -n production --previous",
    "keywords": [
      "previous logs",
      "crashloop",
      "pod crash",
      "restart"
    ],
    "tags": [
      "kubectl",
      "logs",
      "troubleshooting"
    ]
  },
  {
    "id": "k8s-exec",
    "category": "Kubernetes",
    "subcategory": "Debugging",
    "level": "beginner",
    "command": "kubectl exec -it <pod> -n <namespace> -- /bin/sh",
    "description": "Open a shell in a running container.",
    "useCase": "Inspect runtime state from inside a pod.",
    "example": "kubectl exec -it api-7d9 -n production -- /bin/sh",
    "keywords": [
      "shell pod",
      "exec pod",
      "debug pod"
    ],
    "tags": [
      "kubectl"
    ]
  },
  {
    "id": "k8s-get-deploy",
    "category": "Kubernetes",
    "subcategory": "Workloads",
    "level": "beginner",
    "command": "kubectl get deployments -A",
    "description": "List deployments across namespaces.",
    "useCase": "Inspect desired and available replicas.",
    "example": "kubectl get deployments -A",
    "keywords": [
      "deployments",
      "replicas",
      "workloads"
    ],
    "tags": [
      "kubectl"
    ]
  },
  {
    "id": "k8s-rollout-status",
    "category": "Kubernetes",
    "subcategory": "Rollouts",
    "level": "beginner",
    "command": "kubectl rollout status deployment/<name> -n <namespace>",
    "description": "Wait for a deployment rollout to complete.",
    "useCase": "Verify a deployment update.",
    "example": "kubectl rollout status deployment/api -n production",
    "keywords": [
      "rollout",
      "deployment status",
      "deploy"
    ],
    "tags": [
      "kubectl"
    ]
  },
  {
    "id": "k8s-rollout-restart",
    "category": "Kubernetes",
    "subcategory": "Rollouts",
    "level": "beginner",
    "command": "kubectl rollout restart deployment/<name> -n <namespace>",
    "description": "Restart all pods managed by a deployment.",
    "useCase": "Force pods to restart without changing the image.",
    "example": "kubectl rollout restart deployment/api -n production",
    "keywords": [
      "restart pod",
      "restart deployment",
      "rollout restart",
      "reload"
    ],
    "tags": [
      "kubectl"
    ]
  },
  {
    "id": "k8s-rollout-undo",
    "category": "Kubernetes",
    "subcategory": "Rollouts",
    "level": "intermediate",
    "command": "kubectl rollout undo deployment/<name> -n <namespace>",
    "description": "Roll back a deployment to its previous revision.",
    "useCase": "Recover from a bad deployment.",
    "example": "kubectl rollout undo deployment/api -n production",
    "keywords": [
      "rollback",
      "rollback deployment",
      "undo deploy"
    ],
    "tags": [
      "kubectl"
    ],
    "warning": true
  },
  {
    "id": "k8s-get-svc",
    "category": "Kubernetes",
    "subcategory": "Networking",
    "level": "beginner",
    "command": "kubectl get svc -A",
    "description": "List Kubernetes services.",
    "useCase": "Inspect service exposure and cluster networking.",
    "example": "kubectl get svc -A",
    "keywords": [
      "services",
      "svc",
      "k8s networking"
    ],
    "tags": [
      "kubectl",
      "networking"
    ]
  },
  {
    "id": "k8s-get-ingress",
    "category": "Kubernetes",
    "subcategory": "Networking",
    "level": "beginner",
    "command": "kubectl get ingress -A",
    "description": "List ingress resources.",
    "useCase": "Inspect HTTP routing configuration.",
    "example": "kubectl get ingress -A",
    "keywords": [
      "ingress",
      "http routing",
      "routes"
    ],
    "tags": [
      "kubectl",
      "ingress"
    ]
  },
  {
    "id": "k8s-get-events",
    "category": "Kubernetes",
    "subcategory": "Troubleshooting",
    "level": "beginner",
    "command": "kubectl get events -A --sort-by=.lastTimestamp",
    "description": "List recent cluster events in chronological order.",
    "useCase": "Find scheduling, image-pull and probe failures.",
    "example": "kubectl get events -A --sort-by=.lastTimestamp",
    "keywords": [
      "events",
      "cluster errors",
      "imagepull",
      "pending"
    ],
    "tags": [
      "kubectl",
      "events"
    ]
  },
  {
    "id": "k8s-top",
    "category": "Kubernetes",
    "subcategory": "Resources",
    "level": "intermediate",
    "command": "kubectl top pods -A",
    "description": "Show pod CPU and memory usage.",
    "useCase": "Find workloads consuming cluster resources.",
    "example": "kubectl top pods -A",
    "keywords": [
      "pod cpu",
      "pod memory",
      "resource usage"
    ],
    "tags": [
      "kubectl",
      "metrics"
    ]
  },
  {
    "id": "k8s-nodes",
    "category": "Kubernetes",
    "subcategory": "Cluster",
    "level": "beginner",
    "command": "kubectl get nodes -o wide",
    "description": "List cluster nodes and versions/IPs.",
    "useCase": "Inspect node health and placement.",
    "example": "kubectl get nodes -o wide",
    "keywords": [
      "nodes",
      "node status",
      "k8s nodes"
    ],
    "tags": [
      "kubectl",
      "nodes"
    ]
  },
  {
    "id": "k8s-cordon",
    "category": "Kubernetes",
    "subcategory": "Cluster",
    "level": "intermediate",
    "command": "kubectl cordon <node>",
    "description": "Mark a node unschedulable.",
    "useCase": "Prepare a node for maintenance.",
    "example": "kubectl cordon worker-01",
    "keywords": [
      "cordon",
      "maintenance",
      "unschedulable"
    ],
    "tags": [
      "kubectl",
      "nodes"
    ]
  },
  {
    "id": "k8s-drain",
    "category": "Kubernetes",
    "subcategory": "Cluster",
    "level": "advanced",
    "command": "kubectl drain <node> --ignore-daemonsets --delete-emptydir-data",
    "description": "Evict workloads from a node for maintenance.",
    "useCase": "Safely prepare a node for maintenance.",
    "example": "kubectl drain worker-01 --ignore-daemonsets --delete-emptydir-data",
    "keywords": [
      "drain node",
      "maintenance",
      "evict pods"
    ],
    "tags": [
      "kubectl",
      "nodes"
    ],
    "warning": true
  },
  {
    "id": "k8s-configmaps",
    "category": "Kubernetes",
    "subcategory": "Configuration",
    "level": "beginner",
    "command": "kubectl get configmaps -A",
    "description": "List ConfigMaps.",
    "useCase": "Inspect non-secret configuration objects.",
    "example": "kubectl get configmaps -A",
    "keywords": [
      "configmap",
      "config"
    ],
    "tags": [
      "kubectl"
    ]
  },
  {
    "id": "k8s-secrets",
    "category": "Kubernetes",
    "subcategory": "Security",
    "level": "beginner",
    "command": "kubectl get secrets -A",
    "description": "List Kubernetes Secret objects without printing their values.",
    "useCase": "Discover whether expected secrets exist.",
    "example": "kubectl get secrets -A",
    "keywords": [
      "secrets",
      "secret",
      "credentials"
    ],
    "tags": [
      "kubectl",
      "security"
    ]
  },
  {
    "id": "k8s-pvc",
    "category": "Kubernetes",
    "subcategory": "Storage",
    "level": "beginner",
    "command": "kubectl get pvc -A",
    "description": "List persistent volume claims.",
    "useCase": "Diagnose storage binding and application persistence issues.",
    "example": "kubectl get pvc -A",
    "keywords": [
      "pvc",
      "storage",
      "persistent volume"
    ],
    "tags": [
      "kubectl",
      "storage"
    ]
  },
  {
    "id": "aks-get-credentials",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "beginner",
    "command": "az aks get-credentials --resource-group <rg> --name <cluster>",
    "description": "Configure kubectl access to an AKS cluster.",
    "useCase": "Connect your local kubeconfig to an AKS cluster.",
    "example": "az aks get-credentials -g platform-rg -n prod-aks",
    "keywords": [
      "aks connect",
      "aks credentials",
      "kubectl aks",
      "aks"
    ],
    "tags": [
      "azure",
      "aks"
    ]
  },
  {
    "id": "aks-show",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "beginner",
    "command": "az aks show -g <rg> -n <cluster>",
    "description": "Show AKS cluster configuration.",
    "useCase": "Inspect Kubernetes version, networking and identity settings.",
    "example": "az aks show -g platform-rg -n prod-aks",
    "keywords": [
      "aks info",
      "aks details",
      "cluster info"
    ],
    "tags": [
      "azure",
      "aks"
    ]
  },
  {
    "id": "aks-nodepool-list",
    "category": "AKS",
    "subcategory": "Node pools",
    "level": "beginner",
    "command": "az aks nodepool list -g <rg> --cluster-name <cluster> -o table",
    "description": "List AKS node pools.",
    "useCase": "Inspect node pool state, mode and scaling configuration.",
    "example": "az aks nodepool list -g platform-rg --cluster-name prod-aks -o table",
    "keywords": [
      "aks nodes",
      "nodepool",
      "node pools",
      "aks"
    ],
    "tags": [
      "azure",
      "aks"
    ]
  },
  {
    "id": "aks-nodepool-scale",
    "category": "AKS",
    "subcategory": "Node pools",
    "level": "intermediate",
    "command": "az aks nodepool scale -g <rg> --cluster-name <cluster> -n <pool> --node-count <count>",
    "description": "Set the node count for an AKS node pool.",
    "useCase": "Scale capacity for a workload or maintenance operation.",
    "example": "az aks nodepool scale -g platform-rg --cluster-name prod-aks -n system --node-count 5",
    "keywords": [
      "aks scale",
      "scale nodes",
      "nodepool scale"
    ],
    "tags": [
      "azure",
      "aks"
    ],
    "warning": true
  },
  {
    "id": "aks-upgrade",
    "category": "AKS",
    "subcategory": "Cluster",
    "level": "advanced",
    "command": "az aks upgrade -g <rg> -n <cluster> --kubernetes-version <version>",
    "description": "Upgrade an AKS cluster Kubernetes version.",
    "useCase": "Perform a controlled Kubernetes version upgrade.",
    "example": "az aks upgrade -g platform-rg -n prod-aks --kubernetes-version 1.34",
    "keywords": [
      "aks upgrade",
      "kubernetes upgrade"
    ],
    "tags": [
      "azure",
      "aks"
    ],
    "warning": true
  },
  {
    "id": "az-group-list",
    "category": "Azure CLI",
    "subcategory": "Resource groups",
    "level": "beginner",
    "command": "az group list -o table",
    "description": "List Azure resource groups.",
    "useCase": "Discover resource groups in the subscription.",
    "example": "az group list -o table",
    "keywords": [
      "resource groups",
      "azure groups"
    ],
    "tags": [
      "azure",
      "az"
    ]
  },
  {
    "id": "az-vm-list",
    "category": "Azure CLI",
    "subcategory": "Compute",
    "level": "beginner",
    "command": "az vm list -d -o table",
    "description": "List Azure VMs with instance details.",
    "useCase": "Inspect VM state and public/private addresses.",
    "example": "az vm list -d -o table",
    "keywords": [
      "azure vm",
      "vm list"
    ],
    "tags": [
      "azure",
      "az"
    ]
  },
  {
    "id": "az-acr-login",
    "category": "Azure CLI",
    "subcategory": "Registry",
    "level": "beginner",
    "command": "az acr login --name <registry>",
    "description": "Authenticate Docker to an Azure Container Registry.",
    "useCase": "Push or pull images from ACR.",
    "example": "az acr login --name myregistry",
    "keywords": [
      "acr login",
      "azure registry",
      "docker acr"
    ],
    "tags": [
      "azure",
      "acr",
      "docker"
    ]
  },
  {
    "id": "az-keyvault-secret",
    "category": "Azure CLI",
    "subcategory": "Key Vault",
    "level": "intermediate",
    "command": "az keyvault secret show --vault-name <vault> --name <secret>",
    "description": "Read a Key Vault secret value.",
    "useCase": "Validate secret access during controlled troubleshooting.",
    "example": "az keyvault secret show --vault-name prod-kv --name database-url",
    "keywords": [
      "key vault",
      "secret",
      "azure secret"
    ],
    "tags": [
      "azure",
      "security"
    ],
    "warning": true
  },
  {
    "id": "tf-init",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "beginner",
    "command": "terraform init",
    "description": "Initialize a Terraform working directory.",
    "useCase": "Download providers and initialize state/backend configuration.",
    "example": "terraform init",
    "keywords": [
      "terraform initialize",
      "init"
    ],
    "tags": [
      "terraform"
    ]
  },
  {
    "id": "tf-plan",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "beginner",
    "command": "terraform plan",
    "description": "Preview Terraform changes.",
    "useCase": "Review infrastructure changes before applying them.",
    "example": "terraform plan",
    "keywords": [
      "terraform plan",
      "preview changes"
    ],
    "tags": [
      "terraform"
    ]
  },
  {
    "id": "tf-apply",
    "category": "Terraform",
    "subcategory": "General",
    "level": "beginner",
    "command": "terraform apply",
    "description": "Apply the Terraform execution plan.",
    "useCase": "Create or modify infrastructure.",
    "example": "terraform apply",
    "keywords": [
      "terraform apply",
      "deploy infrastructure"
    ],
    "tags": [
      "terraform"
    ],
    "warning": true
  },
  {
    "id": "tf-state-list",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform state list",
    "description": "List resources tracked in Terraform state.",
    "useCase": "Find the Terraform address of a resource.",
    "example": "terraform state list",
    "keywords": [
      "terraform state",
      "state resources"
    ],
    "tags": [
      "terraform"
    ]
  },
  {
    "id": "tf-state-show",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform state show <address>",
    "description": "Show state details for one resource.",
    "useCase": "Inspect attributes stored in Terraform state.",
    "example": "terraform state show azurerm_resource_group.main",
    "keywords": [
      "terraform state show",
      "state details"
    ],
    "tags": [
      "terraform"
    ]
  },
  {
    "id": "tf-import",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "advanced",
    "command": "terraform import <address> <id>",
    "description": "Import an existing resource into Terraform state.",
    "useCase": "Adopt an existing resource into infrastructure as code.",
    "example": "terraform import azurerm_resource_group.main /subscriptions/.../resourceGroups/prod",
    "keywords": [
      "terraform import",
      "existing resource"
    ],
    "tags": [
      "terraform"
    ]
  },
  {
    "id": "helm-list",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "beginner",
    "command": "helm list -A",
    "description": "List Helm releases across namespaces.",
    "useCase": "Discover deployed Helm applications.",
    "example": "helm list -A",
    "keywords": [
      "helm releases",
      "list helm",
      "kubernetes packages"
    ],
    "tags": [
      "helm"
    ]
  },
  {
    "id": "helm-status",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "beginner",
    "command": "helm status <release> -n <namespace>",
    "description": "Show Helm release status and notes.",
    "useCase": "Inspect a release after deployment.",
    "example": "helm status api -n production",
    "keywords": [
      "helm status",
      "release status"
    ],
    "tags": [
      "helm"
    ]
  },
  {
    "id": "helm-history",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm history <release> -n <namespace>",
    "description": "Show Helm release revisions.",
    "useCase": "Identify a revision to roll back to.",
    "example": "helm history api -n production",
    "keywords": [
      "helm history",
      "helm rollback"
    ],
    "tags": [
      "helm"
    ]
  },
  {
    "id": "helm-rollback",
    "category": "Helm",
    "subcategory": "General",
    "level": "advanced",
    "command": "helm rollback <release> <revision> -n <namespace>",
    "description": "Roll a Helm release back to a previous revision.",
    "useCase": "Recover from a bad chart deployment.",
    "example": "helm rollback api 12 -n production",
    "keywords": [
      "helm rollback",
      "rollback chart"
    ],
    "tags": [
      "helm"
    ],
    "warning": true
  },
  {
    "id": "ansible-ping",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "beginner",
    "command": "ansible all -m ping",
    "description": "Test Ansible connectivity to managed hosts.",
    "useCase": "Verify SSH/inventory access.",
    "example": "ansible all -m ping",
    "keywords": [
      "ansible ping",
      "connectivity"
    ],
    "tags": [
      "ansible"
    ]
  },
  {
    "id": "ansible-playbook-check",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible-playbook site.yml --check",
    "description": "Run a playbook in check mode.",
    "useCase": "Preview configuration changes without applying them.",
    "example": "ansible-playbook site.yml --check",
    "keywords": [
      "ansible dry run",
      "check mode"
    ],
    "tags": [
      "ansible"
    ]
  },
  {
    "id": "gha-run-local",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "beginner",
    "command": "gh workflow run <workflow.yml>",
    "description": "Trigger a GitHub Actions workflow with the GitHub CLI.",
    "useCase": "Start a manual deployment or operational workflow.",
    "example": "gh workflow run deploy.yml",
    "keywords": [
      "github actions",
      "workflow run",
      "gha"
    ],
    "tags": [
      "github",
      "ci"
    ]
  },
  {
    "id": "gha-runs",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "beginner",
    "command": "gh run list --limit 20",
    "description": "List recent GitHub Actions workflow runs.",
    "useCase": "Inspect recent CI/CD execution.",
    "example": "gh run list --limit 20",
    "keywords": [
      "gha runs",
      "github actions logs"
    ],
    "tags": [
      "github",
      "ci"
    ]
  },
  {
    "id": "az-pipelines-list",
    "category": "Azure CLI",
    "subcategory": "Azure DevOps",
    "level": "beginner",
    "command": "az pipelines list -o table",
    "description": "List Azure DevOps pipelines.",
    "useCase": "Discover pipeline definitions.",
    "example": "az pipelines list -o table",
    "keywords": [
      "azure pipeline",
      "pipelines",
      "az devops"
    ],
    "tags": [
      "azure devops",
      "ci"
    ]
  },
  {
    "id": "jenkins-cli",
    "category": "Jenkins",
    "subcategory": "Jenkins",
    "level": "beginner",
    "command": "curl -fsSL https://jenkins.example.com/api/json",
    "description": "Query Jenkins JSON API endpoint.",
    "useCase": "Inspect Jenkins availability/API responses.",
    "example": "curl -fsSL https://jenkins.example.com/api/json",
    "keywords": [
      "jenkins api",
      "jenkins status"
    ],
    "tags": [
      "jenkins",
      "ci"
    ]
  },
  {
    "id": "aws-identity",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "beginner",
    "command": "aws sts get-caller-identity",
    "description": "Show the AWS identity currently used by the CLI.",
    "useCase": "Verify credentials/account before changing resources.",
    "example": "aws sts get-caller-identity",
    "keywords": [
      "aws account",
      "aws credentials",
      "identity"
    ],
    "tags": [
      "aws"
    ]
  },
  {
    "id": "aws-ec2",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "beginner",
    "command": "aws ec2 describe-instances --output table",
    "description": "List EC2 instances.",
    "useCase": "Inspect instance state and IDs.",
    "example": "aws ec2 describe-instances --output table",
    "keywords": [
      "aws ec2",
      "instances"
    ],
    "tags": [
      "aws"
    ]
  },
  {
    "id": "gcp-projects",
    "category": "GCP CLI",
    "subcategory": "GCP CLI",
    "level": "beginner",
    "command": "gcloud projects list",
    "description": "List accessible Google Cloud projects.",
    "useCase": "Discover project IDs.",
    "example": "gcloud projects list",
    "keywords": [
      "gcp projects",
      "google cloud"
    ],
    "tags": [
      "gcp"
    ]
  },
  {
    "id": "net-dns",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "beginner",
    "command": "dig +short example.com",
    "description": "Resolve a DNS name.",
    "useCase": "Troubleshoot DNS resolution.",
    "example": "dig +short example.com",
    "keywords": [
      "dns",
      "resolve hostname",
      "network"
    ],
    "tags": [
      "networking",
      "dns"
    ]
  },
  {
    "id": "net-route",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "ip route",
    "description": "Show the Linux routing table.",
    "useCase": "Diagnose routing and default-gateway issues.",
    "example": "ip route",
    "keywords": [
      "routing",
      "route table",
      "network"
    ],
    "tags": [
      "networking",
      "linux"
    ]
  },
  {
    "id": "net-port",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "beginner",
    "command": "nc -vz <host> <port>",
    "description": "Test TCP connectivity to a host and port.",
    "useCase": "Check whether a service is reachable.",
    "example": "nc -vz example.com 443",
    "keywords": [
      "test port",
      "tcp connection",
      "port check"
    ],
    "tags": [
      "networking"
    ]
  },
  {
    "id": "nginx-test",
    "category": "Nginx",
    "subcategory": "Nginx",
    "level": "beginner",
    "command": "sudo nginx -t",
    "description": "Validate Nginx configuration syntax.",
    "useCase": "Check configuration before reloading Nginx.",
    "example": "sudo nginx -t",
    "keywords": [
      "nginx config",
      "nginx test",
      "config validation"
    ],
    "tags": [
      "nginx"
    ]
  },
  {
    "id": "nginx-reload",
    "category": "Nginx",
    "subcategory": "Nginx",
    "level": "beginner",
    "command": "sudo systemctl reload nginx",
    "description": "Reload Nginx configuration without a full restart.",
    "useCase": "Apply a validated config change.",
    "example": "sudo systemctl reload nginx",
    "keywords": [
      "nginx reload",
      "reload web server"
    ],
    "tags": [
      "nginx",
      "linux"
    ]
  },
  {
    "id": "ssh-verbose",
    "category": "SSH",
    "subcategory": "SSH",
    "level": "beginner",
    "command": "ssh -vvv user@host",
    "description": "Connect with verbose SSH diagnostics.",
    "useCase": "Troubleshoot authentication and connection issues.",
    "example": "ssh -vvv user@host",
    "keywords": [
      "ssh debug",
      "ssh connection",
      "verbose ssh"
    ],
    "tags": [
      "ssh"
    ]
  },
  {
    "id": "openssl-cert",
    "category": "TLS/OpenSSL",
    "subcategory": "TLS/OpenSSL",
    "level": "beginner",
    "command": "openssl s_client -connect example.com:443 -servername example.com",
    "description": "Inspect a remote TLS certificate and handshake.",
    "useCase": "Troubleshoot HTTPS certificate and TLS problems.",
    "example": "openssl s_client -connect example.com:443 -servername example.com",
    "keywords": [
      "tls",
      "ssl",
      "certificate",
      "https"
    ],
    "tags": [
      "openssl",
      "tls"
    ]
  },
  {
    "id": "prometheus-query",
    "category": "Prometheus",
    "subcategory": "Prometheus",
    "level": "intermediate",
    "command": "curl -G 'http://prometheus:9090/api/v1/query' --data-urlencode 'query=up'",
    "description": "Query Prometheus for a metric expression.",
    "useCase": "Quickly validate metric availability from the API.",
    "example": "curl -G 'http://prometheus:9090/api/v1/query' --data-urlencode 'query=up'",
    "keywords": [
      "prometheus query",
      "metrics",
      "up"
    ],
    "tags": [
      "prometheus",
      "observability"
    ]
  },
  {
    "id": "grafana-health",
    "category": "Grafana",
    "subcategory": "Grafana",
    "level": "beginner",
    "command": "curl -fsS http://grafana:3000/api/health",
    "description": "Check Grafana API health.",
    "useCase": "Verify Grafana availability.",
    "example": "curl -fsS http://grafana:3000/api/health",
    "keywords": [
      "grafana health",
      "dashboard health"
    ],
    "tags": [
      "grafana",
      "observability"
    ]
  },
  {
    "id": "pg-connect",
    "category": "PostgreSQL",
    "subcategory": "PostgreSQL",
    "level": "beginner",
    "command": "psql -h <host> -U <user> -d <database>",
    "description": "Connect to PostgreSQL.",
    "useCase": "Test database connectivity and inspect data.",
    "example": "psql -h db.example.com -U app -d production",
    "keywords": [
      "postgres connect",
      "postgresql",
      "database"
    ],
    "tags": [
      "postgresql",
      "database"
    ]
  },
  {
    "id": "pg-active",
    "category": "PostgreSQL",
    "subcategory": "PostgreSQL",
    "level": "intermediate",
    "command": "SELECT pid, usename, state, query FROM pg_stat_activity;",
    "description": "Show active PostgreSQL sessions and queries.",
    "useCase": "Investigate long-running or blocked queries.",
    "example": "SELECT pid, usename, state, query FROM pg_stat_activity;",
    "keywords": [
      "postgres active queries",
      "database sessions",
      "slow query"
    ],
    "tags": [
      "postgresql",
      "database"
    ]
  },
  {
    "id": "mysql-processlist",
    "category": "MySQL",
    "subcategory": "MySQL",
    "level": "beginner",
    "command": "SHOW FULL PROCESSLIST;",
    "description": "Show MySQL connections and running queries.",
    "useCase": "Investigate active sessions and slow queries.",
    "example": "SHOW FULL PROCESSLIST;",
    "keywords": [
      "mysql queries",
      "mysql sessions",
      "processlist"
    ],
    "tags": [
      "mysql",
      "database"
    ]
  },
  {
    "id": "redis-cli",
    "category": "Redis",
    "subcategory": "Redis",
    "level": "beginner",
    "command": "redis-cli -h <host> ping",
    "description": "Test Redis connectivity.",
    "useCase": "Verify Redis availability.",
    "example": "redis-cli -h cache.example.com ping",
    "keywords": [
      "redis ping",
      "redis connectivity",
      "cache"
    ],
    "tags": [
      "redis",
      "database"
    ]
  },
  {
    "id": "docker-registry-login",
    "category": "Docker",
    "subcategory": "Container Registries",
    "level": "beginner",
    "command": "docker login <registry>",
    "description": "Authenticate Docker to a container registry.",
    "useCase": "Prepare to push or pull private images.",
    "example": "docker login ghcr.io",
    "keywords": [
      "docker registry login",
      "registry auth"
    ],
    "tags": [
      "docker",
      "registry"
    ]
  },
  {
    "id": "ci-docker-build",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "beginner",
    "command": "docker build --progress=plain -t test-image .",
    "description": "Build with verbose output for CI debugging.",
    "useCase": "Expose hidden build-step failures.",
    "example": "docker build --progress=plain -t test-image .",
    "keywords": [
      "ci docker error",
      "build logs",
      "pipeline docker"
    ],
    "tags": [
      "ci",
      "docker"
    ]
  },
  {
    "id": "ci-gitlab",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "beginner",
    "command": "git status && git diff --check",
    "description": "Check repository state and whitespace errors before CI.",
    "useCase": "Catch simple repository problems locally.",
    "example": "git status && git diff --check",
    "keywords": [
      "ci failure",
      "pipeline",
      "git check"
    ],
    "tags": [
      "ci",
      "git"
    ]
  },
  {
    "id": "k8s-imagepull",
    "category": "Kubernetes",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "beginner",
    "command": "kubectl describe pod <pod> -n <namespace> | grep -i -A5 'Events'",
    "description": "Inspect pod events for image-pull failures.",
    "useCase": "Diagnose ImagePullBackOff and ErrImagePull.",
    "example": "kubectl describe pod api -n production | grep -i -A5 'Events'",
    "keywords": [
      "imagepullbackoff",
      "errimagepull",
      "image pull"
    ],
    "tags": [
      "kubernetes",
      "troubleshooting"
    ]
  },
  {
    "id": "k8s-pending",
    "category": "Kubernetes",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "beginner",
    "command": "kubectl describe pod <pod> -n <namespace>",
    "description": "Inspect scheduling events for a Pending pod.",
    "useCase": "Find resource, affinity, taint or scheduling issues.",
    "example": "kubectl describe pod api -n production",
    "keywords": [
      "pending pod",
      "scheduling",
      "pod pending"
    ],
    "tags": [
      "kubernetes",
      "troubleshooting"
    ]
  },
  {
    "id": "incident-logs",
    "category": "Production Incident Playbooks",
    "subcategory": "Production Incident Playbooks",
    "level": "beginner",
    "command": "kubectl logs -n <namespace> <pod> --since=15m",
    "description": "Collect recent application logs during an incident.",
    "useCase": "Limit evidence to the incident window.",
    "example": "kubectl logs -n production api-7d9 --since=15m",
    "keywords": [
      "incident logs",
      "production logs",
      "last 15 minutes"
    ],
    "tags": [
      "incident",
      "logs"
    ]
  },
  {
    "id": "incident-events",
    "category": "Production Incident Playbooks",
    "subcategory": "Production Incident Playbooks",
    "level": "beginner",
    "command": "kubectl get events -A --sort-by=.lastTimestamp | tail -50",
    "description": "Review the most recent cluster events.",
    "useCase": "Look for a cluster-wide signal during an outage.",
    "example": "kubectl get events -A --sort-by=.lastTimestamp | tail -50",
    "keywords": [
      "incident events",
      "outage",
      "cluster incident"
    ],
    "tags": [
      "incident",
      "kubernetes"
    ]
  },
  {
    "id": "incident-resources",
    "category": "Production Incident Playbooks",
    "subcategory": "Production Incident Playbooks",
    "level": "intermediate",
    "command": "kubectl top pods -A | sort -k4 -h",
    "description": "Review pod resource usage.",
    "useCase": "Spot resource saturation during an incident.",
    "example": "kubectl top pods -A | sort -k4 -h",
    "keywords": [
      "incident cpu",
      "incident memory",
      "resource saturation"
    ],
    "tags": [
      "incident",
      "kubernetes"
    ]
  },
  {
    "id": "extended-001",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "cat /etc/os-release",
    "description": "Check Linux distribution and version",
    "useCase": "check Linux distribution and version",
    "example": "cat /etc/os-release",
    "keywords": [
      "linux",
      "release",
      "check",
      "distribution",
      "version"
    ],
    "tags": [
      "release",
      "check",
      "linux",
      "distribution",
      "version"
    ]
  },
  {
    "id": "extended-002",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "uname -a",
    "description": "Show kernel and architecture information",
    "useCase": "show kernel and architecture information",
    "example": "uname -a",
    "keywords": [
      "linux",
      "uname",
      "show",
      "kernel",
      "architecture",
      "information"
    ],
    "tags": [
      "uname",
      "show",
      "kernel",
      "architecture",
      "information"
    ]
  },
  {
    "id": "extended-003",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "hostnamectl",
    "description": "Inspect host identity information",
    "useCase": "inspect host identity information",
    "example": "hostnamectl",
    "keywords": [
      "linux",
      "hostnamectl",
      "inspect",
      "host",
      "identity",
      "information"
    ],
    "tags": [
      "hostnamectl",
      "inspect",
      "host",
      "identity",
      "information"
    ]
  },
  {
    "id": "extended-004",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "whoami",
    "description": "Show the current user",
    "useCase": "show the current user",
    "example": "whoami",
    "keywords": [
      "linux",
      "whoami",
      "show",
      "current",
      "user"
    ],
    "tags": [
      "whoami",
      "show",
      "current",
      "user"
    ]
  },
  {
    "id": "extended-005",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "id",
    "description": "Show current user and group IDs",
    "useCase": "show current user and group IDs",
    "example": "id",
    "keywords": [
      "linux",
      "show",
      "current",
      "user",
      "group"
    ],
    "tags": [
      "show",
      "current",
      "user",
      "group"
    ]
  },
  {
    "id": "extended-006",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "uptime",
    "description": "Check uptime and load average",
    "useCase": "check uptime and load average",
    "example": "uptime",
    "keywords": [
      "linux",
      "uptime",
      "check",
      "load",
      "average"
    ],
    "tags": [
      "uptime",
      "check",
      "load",
      "average"
    ]
  },
  {
    "id": "extended-007",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "w",
    "description": "See logged-in users and activity",
    "useCase": "see logged-in users and activity",
    "example": "w",
    "keywords": [
      "linux",
      "logged",
      "users",
      "activity"
    ],
    "tags": [
      "logged",
      "users",
      "activity"
    ]
  },
  {
    "id": "extended-008",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "last -20",
    "description": "Review recent login history",
    "useCase": "review recent login history",
    "example": "last -20",
    "keywords": [
      "linux",
      "last",
      "review",
      "recent",
      "login",
      "history"
    ],
    "tags": [
      "last",
      "review",
      "recent",
      "login",
      "history"
    ]
  },
  {
    "id": "extended-009",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "env | sort",
    "description": "Inspect environment variables",
    "useCase": "inspect environment variables",
    "example": "env | sort",
    "keywords": [
      "linux",
      "sort",
      "inspect",
      "environment",
      "variables"
    ],
    "tags": [
      "sort",
      "inspect",
      "environment",
      "variables"
    ]
  },
  {
    "id": "extended-010",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "which kubectl",
    "description": "Find the executable used by a command",
    "useCase": "find the executable used by a command",
    "example": "which kubectl",
    "keywords": [
      "linux",
      "which",
      "kubectl",
      "find",
      "executable",
      "used",
      "command"
    ],
    "tags": [
      "which",
      "kubectl",
      "find",
      "executable",
      "used",
      "command"
    ]
  },
  {
    "id": "extended-011",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "stat <file>",
    "description": "Inspect file metadata",
    "useCase": "inspect file metadata",
    "example": "stat <file>",
    "keywords": [
      "linux",
      "stat",
      "file",
      "inspect",
      "metadata"
    ],
    "tags": [
      "stat",
      "file",
      "inspect",
      "metadata"
    ]
  },
  {
    "id": "extended-012",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "file <file>",
    "description": "Identify a file type",
    "useCase": "identify a file type",
    "example": "file <file>",
    "keywords": [
      "linux",
      "file",
      "identify",
      "type"
    ],
    "tags": [
      "file",
      "identify",
      "type"
    ]
  },
  {
    "id": "extended-013",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "ln -s <target> <link>",
    "description": "Create a symbolic link",
    "useCase": "create a symbolic link",
    "example": "ln -s <target> <link>",
    "keywords": [
      "linux",
      "target",
      "link",
      "create",
      "symbolic"
    ],
    "tags": [
      "target",
      "link",
      "create",
      "symbolic"
    ]
  },
  {
    "id": "extended-014",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "cp -a <src> <dst>",
    "description": "Copy files while preserving attributes",
    "useCase": "copy files while preserving attributes",
    "example": "cp -a <src> <dst>",
    "keywords": [
      "linux",
      "copy",
      "files",
      "while",
      "preserving",
      "attributes"
    ],
    "tags": [
      "copy",
      "files",
      "while",
      "preserving",
      "attributes"
    ]
  },
  {
    "id": "extended-015",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "mv <src> <dst>",
    "description": "Move or rename files",
    "useCase": "move or rename files",
    "example": "mv <src> <dst>",
    "keywords": [
      "linux",
      "move",
      "rename",
      "files"
    ],
    "tags": [
      "move",
      "rename",
      "files"
    ]
  },
  {
    "id": "extended-016",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "rm -i <file>",
    "description": "Interactively remove a file",
    "useCase": "interactively remove a file",
    "example": "rm -i <file>",
    "keywords": [
      "linux",
      "file",
      "interactively",
      "remove"
    ],
    "tags": [
      "file",
      "interactively",
      "remove"
    ]
  },
  {
    "id": "extended-017",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "mkdir -p <dir>",
    "description": "Create a directory tree",
    "useCase": "create a directory tree",
    "example": "mkdir -p <dir>",
    "keywords": [
      "linux",
      "mkdir",
      "create",
      "directory",
      "tree"
    ],
    "tags": [
      "mkdir",
      "create",
      "directory",
      "tree"
    ]
  },
  {
    "id": "extended-018",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "touch <file>",
    "description": "Create or update a file timestamp",
    "useCase": "create or update a file timestamp",
    "example": "touch <file>",
    "keywords": [
      "linux",
      "touch",
      "file",
      "create",
      "update",
      "timestamp"
    ],
    "tags": [
      "touch",
      "file",
      "create",
      "update",
      "timestamp"
    ]
  },
  {
    "id": "extended-019",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "sort <file>",
    "description": "Sort text records",
    "useCase": "sort text records",
    "example": "sort <file>",
    "keywords": [
      "linux",
      "sort",
      "file",
      "text",
      "records"
    ],
    "tags": [
      "sort",
      "file",
      "text",
      "records"
    ]
  },
  {
    "id": "extended-020",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "uniq -c <file>",
    "description": "Count repeated adjacent lines",
    "useCase": "count repeated adjacent lines",
    "example": "uniq -c <file>",
    "keywords": [
      "linux",
      "uniq",
      "file",
      "count",
      "repeated",
      "adjacent",
      "lines"
    ],
    "tags": [
      "uniq",
      "file",
      "count",
      "repeated",
      "adjacent",
      "lines"
    ]
  },
  {
    "id": "extended-021",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "cut -d: -f1 /etc/passwd",
    "description": "Extract delimited fields",
    "useCase": "extract delimited fields",
    "example": "cut -d: -f1 /etc/passwd",
    "keywords": [
      "linux",
      "passwd",
      "extract",
      "delimited",
      "fields"
    ],
    "tags": [
      "passwd",
      "extract",
      "delimited",
      "fields"
    ]
  },
  {
    "id": "extended-022",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "awk '{print $1}' <file>",
    "description": "Extract columns from text",
    "useCase": "extract columns from text",
    "example": "awk '{print $1}' <file>",
    "keywords": [
      "linux",
      "print",
      "file",
      "extract",
      "columns",
      "from",
      "text"
    ],
    "tags": [
      "print",
      "file",
      "extract",
      "columns",
      "from",
      "text"
    ]
  },
  {
    "id": "extended-023",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "sed -n '1,80p' <file>",
    "description": "Print selected lines",
    "useCase": "print selected lines",
    "example": "sed -n '1,80p' <file>",
    "keywords": [
      "linux",
      "file",
      "print",
      "selected",
      "lines"
    ],
    "tags": [
      "file",
      "print",
      "selected",
      "lines"
    ]
  },
  {
    "id": "extended-024",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "xargs -n1 echo",
    "description": "Run a command per input item",
    "useCase": "run a command per input item",
    "example": "xargs -n1 echo",
    "keywords": [
      "linux",
      "xargs",
      "echo",
      "command",
      "input",
      "item"
    ],
    "tags": [
      "xargs",
      "echo",
      "command",
      "input",
      "item"
    ]
  },
  {
    "id": "extended-025",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "watch -n 2 'kubectl get pods -A'",
    "description": "Repeat a command while troubleshooting",
    "useCase": "repeat a command while troubleshooting",
    "example": "watch -n 2 'kubectl get pods -A'",
    "keywords": [
      "linux",
      "watch",
      "kubectl",
      "pods",
      "repeat",
      "command",
      "while",
      "troubleshooting"
    ],
    "tags": [
      "watch",
      "kubectl",
      "pods",
      "repeat",
      "command",
      "while",
      "troubleshooting"
    ]
  },
  {
    "id": "extended-026",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "vmstat 1 5",
    "description": "Inspect CPU memory and IO pressure",
    "useCase": "inspect CPU memory and IO pressure",
    "example": "vmstat 1 5",
    "keywords": [
      "linux",
      "vmstat",
      "inspect",
      "memory",
      "pressure"
    ],
    "tags": [
      "vmstat",
      "inspect",
      "memory",
      "pressure"
    ]
  },
  {
    "id": "extended-027",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "iostat -xz 1 5",
    "description": "Inspect disk IO latency",
    "useCase": "inspect disk IO latency",
    "example": "iostat -xz 1 5",
    "keywords": [
      "linux",
      "iostat",
      "inspect",
      "disk",
      "latency"
    ],
    "tags": [
      "iostat",
      "inspect",
      "disk",
      "latency"
    ]
  },
  {
    "id": "extended-028",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "mpstat -P ALL 1 5",
    "description": "Inspect per-CPU utilization",
    "useCase": "inspect per-CPU utilization",
    "example": "mpstat -P ALL 1 5",
    "keywords": [
      "linux",
      "mpstat",
      "inspect",
      "utilization"
    ],
    "tags": [
      "mpstat",
      "inspect",
      "utilization"
    ]
  },
  {
    "id": "extended-029",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "lsof -i :8080",
    "description": "Find the process listening on a port",
    "useCase": "find the process listening on a port",
    "example": "lsof -i :8080",
    "keywords": [
      "linux",
      "lsof",
      "8080",
      "find",
      "process",
      "listening",
      "port"
    ],
    "tags": [
      "lsof",
      "8080",
      "find",
      "process",
      "listening",
      "port"
    ]
  },
  {
    "id": "extended-030",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "lsof <file>",
    "description": "Find processes using a file",
    "useCase": "find processes using a file",
    "example": "lsof <file>",
    "keywords": [
      "linux",
      "lsof",
      "file",
      "find",
      "processes",
      "using"
    ],
    "tags": [
      "lsof",
      "file",
      "find",
      "processes",
      "using"
    ]
  },
  {
    "id": "extended-031",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "fuser -v 8080/tcp",
    "description": "Identify processes using a TCP port",
    "useCase": "identify processes using a TCP port",
    "example": "fuser -v 8080/tcp",
    "keywords": [
      "linux",
      "fuser",
      "8080",
      "identify",
      "processes",
      "using",
      "port"
    ],
    "tags": [
      "fuser",
      "8080",
      "identify",
      "processes",
      "using",
      "port"
    ]
  },
  {
    "id": "extended-032",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "ncdu /",
    "description": "Find large directories interactively",
    "useCase": "find large directories interactively",
    "example": "ncdu /",
    "keywords": [
      "linux",
      "ncdu",
      "find",
      "large",
      "directories",
      "interactively"
    ],
    "tags": [
      "ncdu",
      "find",
      "large",
      "directories",
      "interactively"
    ]
  },
  {
    "id": "extended-033",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "find /var/log -type f -size +500M",
    "description": "Find large log files",
    "useCase": "find large log files",
    "example": "find /var/log -type f -size +500M",
    "keywords": [
      "linux",
      "find",
      "type",
      "size",
      "500m",
      "large",
      "files"
    ],
    "tags": [
      "find",
      "type",
      "size",
      "500m",
      "large",
      "files"
    ]
  },
  {
    "id": "extended-034",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "grep -R \"ERROR\" /var/log",
    "description": "Search logs recursively for errors",
    "useCase": "search logs recursively for errors",
    "example": "grep -R \"ERROR\" /var/log",
    "keywords": [
      "linux",
      "grep",
      "error",
      "search",
      "logs",
      "recursively",
      "errors"
    ],
    "tags": [
      "grep",
      "error",
      "search",
      "logs",
      "recursively",
      "errors"
    ]
  },
  {
    "id": "extended-035",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "grep -nEi \"timeout|failed|error\" <file>",
    "description": "Search a log for failure terms",
    "useCase": "search a log for failure terms",
    "example": "grep -nEi \"timeout|failed|error\" <file>",
    "keywords": [
      "linux",
      "grep",
      "timeout",
      "failed",
      "error",
      "file",
      "search",
      "failure"
    ],
    "tags": [
      "grep",
      "timeout",
      "failed",
      "error",
      "file",
      "search",
      "failure"
    ]
  },
  {
    "id": "extended-036",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "journalctl -b -1",
    "description": "Inspect logs from the previous boot",
    "useCase": "inspect logs from the previous boot",
    "example": "journalctl -b -1",
    "keywords": [
      "linux",
      "journalctl",
      "inspect",
      "logs",
      "from",
      "previous",
      "boot"
    ],
    "tags": [
      "journalctl",
      "inspect",
      "logs",
      "from",
      "previous",
      "boot"
    ]
  },
  {
    "id": "extended-037",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "journalctl -u <service> --since \"1 hour ago\"",
    "description": "Inspect recent service logs",
    "useCase": "inspect recent service logs",
    "example": "journalctl -u <service> --since \"1 hour ago\"",
    "keywords": [
      "linux",
      "journalctl",
      "service",
      "since",
      "hour",
      "inspect",
      "recent"
    ],
    "tags": [
      "journalctl",
      "service",
      "since",
      "hour",
      "inspect",
      "recent"
    ]
  },
  {
    "id": "extended-038",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "journalctl --disk-usage",
    "description": "Check journal disk consumption",
    "useCase": "check journal disk consumption",
    "example": "journalctl --disk-usage",
    "keywords": [
      "linux",
      "journalctl",
      "disk",
      "usage",
      "check",
      "journal",
      "consumption"
    ],
    "tags": [
      "journalctl",
      "disk",
      "usage",
      "check",
      "journal",
      "consumption"
    ]
  },
  {
    "id": "extended-039",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "systemctl is-enabled <service>",
    "description": "Check whether a service starts at boot",
    "useCase": "check whether a service starts at boot",
    "example": "systemctl is-enabled <service>",
    "keywords": [
      "linux",
      "systemctl",
      "enabled",
      "service",
      "check",
      "whether",
      "starts"
    ],
    "tags": [
      "systemctl",
      "enabled",
      "service",
      "check",
      "whether",
      "starts"
    ]
  },
  {
    "id": "extended-040",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "systemctl show <service> --no-pager",
    "description": "Inspect service properties",
    "useCase": "inspect service properties",
    "example": "systemctl show <service> --no-pager",
    "keywords": [
      "linux",
      "systemctl",
      "show",
      "service",
      "pager",
      "inspect",
      "properties"
    ],
    "tags": [
      "systemctl",
      "show",
      "service",
      "pager",
      "inspect",
      "properties"
    ]
  },
  {
    "id": "extended-041",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "systemctl reset-failed <service>",
    "description": "Clear a failed service state",
    "useCase": "clear a failed service state",
    "example": "systemctl reset-failed <service>",
    "keywords": [
      "linux",
      "systemctl",
      "reset",
      "failed",
      "service",
      "clear"
    ],
    "tags": [
      "systemctl",
      "reset",
      "failed",
      "service",
      "clear"
    ]
  },
  {
    "id": "extended-042",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "df -ih",
    "description": "Check inode exhaustion",
    "useCase": "check inode exhaustion",
    "example": "df -ih",
    "keywords": [
      "linux",
      "check",
      "inode",
      "exhaustion"
    ],
    "tags": [
      "check",
      "inode",
      "exhaustion"
    ]
  },
  {
    "id": "extended-043",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "du -xhd1 /var | sort -h",
    "description": "Find large directories",
    "useCase": "find large directories",
    "example": "du -xhd1 /var | sort -h",
    "keywords": [
      "linux",
      "xhd1",
      "sort",
      "find",
      "large",
      "directories"
    ],
    "tags": [
      "xhd1",
      "sort",
      "find",
      "large",
      "directories"
    ]
  },
  {
    "id": "extended-044",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "mount | column -t",
    "description": "Review mounted filesystems",
    "useCase": "review mounted filesystems",
    "example": "mount | column -t",
    "keywords": [
      "linux",
      "mount",
      "column",
      "review",
      "mounted",
      "filesystems"
    ],
    "tags": [
      "mount",
      "column",
      "review",
      "mounted",
      "filesystems"
    ]
  },
  {
    "id": "extended-045",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "lsblk -f",
    "description": "Inspect disks and filesystems",
    "useCase": "inspect disks and filesystems",
    "example": "lsblk -f",
    "keywords": [
      "linux",
      "lsblk",
      "inspect",
      "disks",
      "filesystems"
    ],
    "tags": [
      "lsblk",
      "inspect",
      "disks",
      "filesystems"
    ]
  },
  {
    "id": "extended-046",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "blkid",
    "description": "Show filesystem identifiers",
    "useCase": "show filesystem identifiers",
    "example": "blkid",
    "keywords": [
      "linux",
      "blkid",
      "show",
      "filesystem",
      "identifiers"
    ],
    "tags": [
      "blkid",
      "show",
      "filesystem",
      "identifiers"
    ]
  },
  {
    "id": "extended-047",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "free -m",
    "description": "Show memory in MB",
    "useCase": "show memory in MB",
    "example": "free -m",
    "keywords": [
      "linux",
      "free",
      "show",
      "memory"
    ],
    "tags": [
      "free",
      "show",
      "memory"
    ]
  },
  {
    "id": "extended-048",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "ps aux --sort=-%mem | head",
    "description": "Find top memory consumers",
    "useCase": "find top memory consumers",
    "example": "ps aux --sort=-%mem | head",
    "keywords": [
      "linux",
      "sort",
      "head",
      "find",
      "memory",
      "consumers"
    ],
    "tags": [
      "sort",
      "head",
      "find",
      "memory",
      "consumers"
    ]
  },
  {
    "id": "extended-049",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "advanced",
    "command": "kill -TERM <pid>",
    "description": "Gracefully stop a process",
    "useCase": "gracefully stop a process",
    "example": "kill -TERM <pid>",
    "keywords": [
      "linux",
      "kill",
      "term",
      "gracefully",
      "stop",
      "process"
    ],
    "tags": [
      "kill",
      "term",
      "gracefully",
      "stop",
      "process"
    ]
  },
  {
    "id": "extended-050",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "advanced",
    "command": "kill -KILL <pid>",
    "description": "Force-stop an unresponsive process",
    "useCase": "force-stop an unresponsive process",
    "example": "kill -KILL <pid>",
    "keywords": [
      "linux",
      "kill",
      "force",
      "stop",
      "unresponsive",
      "process"
    ],
    "tags": [
      "kill",
      "force",
      "stop",
      "unresponsive",
      "process"
    ]
  },
  {
    "id": "extended-051",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "tar -czf backup.tgz <dir>",
    "description": "Create a compressed archive",
    "useCase": "create a compressed archive",
    "example": "tar -czf backup.tgz <dir>",
    "keywords": [
      "linux",
      "backup",
      "create",
      "compressed",
      "archive"
    ],
    "tags": [
      "backup",
      "create",
      "compressed",
      "archive"
    ]
  },
  {
    "id": "extended-052",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "tar -xzf backup.tgz",
    "description": "Extract a gzip archive",
    "useCase": "extract a gzip archive",
    "example": "tar -xzf backup.tgz",
    "keywords": [
      "linux",
      "backup",
      "extract",
      "gzip",
      "archive"
    ],
    "tags": [
      "backup",
      "extract",
      "gzip",
      "archive"
    ]
  },
  {
    "id": "extended-053",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "sha256sum <file>",
    "description": "Verify a file checksum",
    "useCase": "verify a file checksum",
    "example": "sha256sum <file>",
    "keywords": [
      "linux",
      "sha256sum",
      "file",
      "verify",
      "checksum"
    ],
    "tags": [
      "sha256sum",
      "file",
      "verify",
      "checksum"
    ]
  },
  {
    "id": "extended-054",
    "category": "Linux",
    "subcategory": "Linux",
    "level": "intermediate",
    "command": "date -u",
    "description": "Show current UTC time",
    "useCase": "show current UTC time",
    "example": "date -u",
    "keywords": [
      "linux",
      "date",
      "show",
      "current",
      "time"
    ],
    "tags": [
      "date",
      "show",
      "current",
      "time"
    ]
  },
  {
    "id": "extended-055",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git remote -v",
    "description": "Show configured remotes",
    "useCase": "show configured remotes",
    "example": "git remote -v",
    "keywords": [
      "git",
      "remote",
      "show",
      "configured",
      "remotes"
    ],
    "tags": [
      "remote",
      "show",
      "configured",
      "remotes"
    ]
  },
  {
    "id": "extended-056",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git remote show origin",
    "description": "Inspect the origin remote",
    "useCase": "inspect the origin remote",
    "example": "git remote show origin",
    "keywords": [
      "git",
      "remote",
      "show",
      "origin",
      "inspect"
    ],
    "tags": [
      "remote",
      "show",
      "origin",
      "inspect"
    ]
  },
  {
    "id": "extended-057",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git branch --merged",
    "description": "List merged branches",
    "useCase": "list merged branches",
    "example": "git branch --merged",
    "keywords": [
      "git",
      "branch",
      "merged",
      "list",
      "branches"
    ],
    "tags": [
      "branch",
      "merged",
      "list",
      "branches"
    ]
  },
  {
    "id": "extended-058",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git branch --no-merged",
    "description": "List unmerged branches",
    "useCase": "list unmerged branches",
    "example": "git branch --no-merged",
    "keywords": [
      "git",
      "branch",
      "merged",
      "list",
      "unmerged",
      "branches"
    ],
    "tags": [
      "branch",
      "merged",
      "list",
      "unmerged",
      "branches"
    ]
  },
  {
    "id": "extended-059",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git branch -vv",
    "description": "Show branch tracking state",
    "useCase": "show branch tracking state",
    "example": "git branch -vv",
    "keywords": [
      "git",
      "branch",
      "show",
      "tracking",
      "state"
    ],
    "tags": [
      "branch",
      "show",
      "tracking",
      "state"
    ]
  },
  {
    "id": "extended-060",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git switch -",
    "description": "Switch to the previous branch",
    "useCase": "switch to the previous branch",
    "example": "git switch -",
    "keywords": [
      "git",
      "switch",
      "previous",
      "branch"
    ],
    "tags": [
      "switch",
      "previous",
      "branch"
    ]
  },
  {
    "id": "extended-061",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git restore <file>",
    "description": "Discard working-tree changes",
    "useCase": "discard working-tree changes",
    "example": "git restore <file>",
    "keywords": [
      "git",
      "restore",
      "file",
      "discard",
      "working",
      "tree",
      "changes"
    ],
    "tags": [
      "restore",
      "file",
      "discard",
      "working",
      "tree",
      "changes"
    ]
  },
  {
    "id": "extended-062",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git restore --staged <file>",
    "description": "Unstage a file",
    "useCase": "unstage a file",
    "example": "git restore --staged <file>",
    "keywords": [
      "git",
      "restore",
      "staged",
      "file",
      "unstage"
    ],
    "tags": [
      "restore",
      "staged",
      "file",
      "unstage"
    ]
  },
  {
    "id": "extended-063",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git add -p",
    "description": "Stage selected hunks",
    "useCase": "stage selected hunks",
    "example": "git add -p",
    "keywords": [
      "git",
      "stage",
      "selected",
      "hunks"
    ],
    "tags": [
      "stage",
      "selected",
      "hunks"
    ]
  },
  {
    "id": "extended-064",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git diff --stat",
    "description": "Summarize working-tree changes",
    "useCase": "summarize working-tree changes",
    "example": "git diff --stat",
    "keywords": [
      "git",
      "diff",
      "stat",
      "summarize",
      "working",
      "tree",
      "changes"
    ],
    "tags": [
      "diff",
      "stat",
      "summarize",
      "working",
      "tree",
      "changes"
    ]
  },
  {
    "id": "extended-065",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git diff --cached",
    "description": "Review staged changes",
    "useCase": "review staged changes",
    "example": "git diff --cached",
    "keywords": [
      "git",
      "diff",
      "cached",
      "review",
      "staged",
      "changes"
    ],
    "tags": [
      "diff",
      "cached",
      "review",
      "staged",
      "changes"
    ]
  },
  {
    "id": "extended-066",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git diff <branch>...HEAD",
    "description": "Compare current work with a branch",
    "useCase": "compare current work with a branch",
    "example": "git diff <branch>...HEAD",
    "keywords": [
      "git",
      "diff",
      "branch",
      "head",
      "compare",
      "current",
      "work",
      "with"
    ],
    "tags": [
      "diff",
      "branch",
      "head",
      "compare",
      "current",
      "work",
      "with"
    ]
  },
  {
    "id": "extended-067",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git log --oneline --decorate --graph --all",
    "description": "Visualize repository history",
    "useCase": "visualize repository history",
    "example": "git log --oneline --decorate --graph --all",
    "keywords": [
      "git",
      "oneline",
      "decorate",
      "graph",
      "visualize",
      "repository",
      "history"
    ],
    "tags": [
      "oneline",
      "decorate",
      "graph",
      "visualize",
      "repository",
      "history"
    ]
  },
  {
    "id": "extended-068",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git log -S\"<text>\" --oneline",
    "description": "Find commits that changed text",
    "useCase": "find commits that changed text",
    "example": "git log -S\"<text>\" --oneline",
    "keywords": [
      "git",
      "text",
      "oneline",
      "find",
      "commits",
      "that",
      "changed"
    ],
    "tags": [
      "text",
      "oneline",
      "find",
      "commits",
      "that",
      "changed"
    ]
  },
  {
    "id": "extended-069",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git log -G\"<regex>\" --oneline",
    "description": "Find commits matching a regex",
    "useCase": "find commits matching a regex",
    "example": "git log -G\"<regex>\" --oneline",
    "keywords": [
      "git",
      "regex",
      "oneline",
      "find",
      "commits",
      "matching"
    ],
    "tags": [
      "regex",
      "oneline",
      "find",
      "commits",
      "matching"
    ]
  },
  {
    "id": "extended-070",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git show <commit>",
    "description": "Inspect a commit",
    "useCase": "inspect a commit",
    "example": "git show <commit>",
    "keywords": [
      "git",
      "show",
      "commit",
      "inspect"
    ],
    "tags": [
      "show",
      "commit",
      "inspect"
    ]
  },
  {
    "id": "extended-071",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git reflog --date=local",
    "description": "Recover recent HEAD movements",
    "useCase": "recover recent HEAD movements",
    "example": "git reflog --date=local",
    "keywords": [
      "git",
      "reflog",
      "date",
      "local",
      "recover",
      "recent",
      "head",
      "movements"
    ],
    "tags": [
      "reflog",
      "date",
      "local",
      "recover",
      "recent",
      "head",
      "movements"
    ]
  },
  {
    "id": "extended-072",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git clean -nd",
    "description": "Preview untracked cleanup",
    "useCase": "preview untracked cleanup",
    "example": "git clean -nd",
    "keywords": [
      "git",
      "clean",
      "preview",
      "untracked",
      "cleanup"
    ],
    "tags": [
      "clean",
      "preview",
      "untracked",
      "cleanup"
    ]
  },
  {
    "id": "extended-073",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git tag --sort=-creatordate | head",
    "description": "List recent tags",
    "useCase": "list recent tags",
    "example": "git tag --sort=-creatordate | head",
    "keywords": [
      "git",
      "sort",
      "creatordate",
      "head",
      "list",
      "recent",
      "tags"
    ],
    "tags": [
      "sort",
      "creatordate",
      "head",
      "list",
      "recent",
      "tags"
    ]
  },
  {
    "id": "extended-074",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git describe --tags --always",
    "description": "Identify the current revision",
    "useCase": "identify the current revision",
    "example": "git describe --tags --always",
    "keywords": [
      "git",
      "describe",
      "tags",
      "always",
      "identify",
      "current",
      "revision"
    ],
    "tags": [
      "describe",
      "tags",
      "always",
      "identify",
      "current",
      "revision"
    ]
  },
  {
    "id": "extended-075",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git fetch origin <branch>",
    "description": "Fetch one remote branch",
    "useCase": "fetch one remote branch",
    "example": "git fetch origin <branch>",
    "keywords": [
      "git",
      "fetch",
      "origin",
      "branch",
      "remote"
    ],
    "tags": [
      "fetch",
      "origin",
      "branch",
      "remote"
    ]
  },
  {
    "id": "extended-076",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git pull --ff-only",
    "description": "Fast-forward-only pull",
    "useCase": "fast-forward-only pull",
    "example": "git pull --ff-only",
    "keywords": [
      "git",
      "pull",
      "only",
      "fast",
      "forward"
    ],
    "tags": [
      "pull",
      "only",
      "fast",
      "forward"
    ]
  },
  {
    "id": "extended-077",
    "category": "Git",
    "subcategory": "Git",
    "level": "advanced",
    "command": "git push -u origin <branch>",
    "description": "Push and set upstream",
    "useCase": "push and set upstream",
    "example": "git push -u origin <branch>",
    "keywords": [
      "git",
      "push",
      "origin",
      "branch",
      "upstream"
    ],
    "tags": [
      "push",
      "origin",
      "branch",
      "upstream"
    ]
  },
  {
    "id": "extended-078",
    "category": "Git",
    "subcategory": "Git",
    "level": "advanced",
    "command": "git push --delete origin <branch>",
    "description": "Delete a remote branch",
    "useCase": "delete a remote branch",
    "example": "git push --delete origin <branch>",
    "keywords": [
      "git",
      "push",
      "delete",
      "origin",
      "branch",
      "remote"
    ],
    "tags": [
      "push",
      "delete",
      "origin",
      "branch",
      "remote"
    ]
  },
  {
    "id": "extended-079",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git rebase --abort",
    "description": "Abort a rebase",
    "useCase": "abort a rebase",
    "example": "git rebase --abort",
    "keywords": [
      "git",
      "rebase",
      "abort"
    ],
    "tags": [
      "rebase",
      "abort"
    ]
  },
  {
    "id": "extended-080",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git merge --abort",
    "description": "Abort a merge",
    "useCase": "abort a merge",
    "example": "git merge --abort",
    "keywords": [
      "git",
      "merge",
      "abort"
    ],
    "tags": [
      "merge",
      "abort"
    ]
  },
  {
    "id": "extended-081",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git cherry-pick --abort",
    "description": "Abort a cherry-pick",
    "useCase": "abort a cherry-pick",
    "example": "git cherry-pick --abort",
    "keywords": [
      "git",
      "cherry",
      "pick",
      "abort"
    ],
    "tags": [
      "cherry",
      "pick",
      "abort"
    ]
  },
  {
    "id": "extended-082",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git bisect start",
    "description": "Start binary-search debugging",
    "useCase": "start binary-search debugging",
    "example": "git bisect start",
    "keywords": [
      "git",
      "bisect",
      "start",
      "binary",
      "search",
      "debugging"
    ],
    "tags": [
      "bisect",
      "start",
      "binary",
      "search",
      "debugging"
    ]
  },
  {
    "id": "extended-083",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git bisect bad",
    "description": "Mark a revision as bad",
    "useCase": "mark a revision as bad",
    "example": "git bisect bad",
    "keywords": [
      "git",
      "bisect",
      "mark",
      "revision"
    ],
    "tags": [
      "bisect",
      "mark",
      "revision"
    ]
  },
  {
    "id": "extended-084",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git bisect good <commit>",
    "description": "Mark a known-good revision",
    "useCase": "mark a known-good revision",
    "example": "git bisect good <commit>",
    "keywords": [
      "git",
      "bisect",
      "good",
      "commit",
      "mark",
      "known",
      "revision"
    ],
    "tags": [
      "bisect",
      "good",
      "commit",
      "mark",
      "known",
      "revision"
    ]
  },
  {
    "id": "extended-085",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git worktree list",
    "description": "List linked worktrees",
    "useCase": "list linked worktrees",
    "example": "git worktree list",
    "keywords": [
      "git",
      "worktree",
      "list",
      "linked",
      "worktrees"
    ],
    "tags": [
      "worktree",
      "list",
      "linked",
      "worktrees"
    ]
  },
  {
    "id": "extended-086",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git worktree add ../<dir> <branch>",
    "description": "Create a separate worktree",
    "useCase": "create a separate worktree",
    "example": "git worktree add ../<dir> <branch>",
    "keywords": [
      "git",
      "worktree",
      "branch",
      "create",
      "separate"
    ],
    "tags": [
      "worktree",
      "branch",
      "create",
      "separate"
    ]
  },
  {
    "id": "extended-087",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git archive --format=tar HEAD | gzip > source.tgz",
    "description": "Export source without Git metadata",
    "useCase": "export source without Git metadata",
    "example": "git archive --format=tar HEAD | gzip > source.tgz",
    "keywords": [
      "git",
      "archive",
      "format",
      "head",
      "gzip",
      "source",
      "export"
    ],
    "tags": [
      "archive",
      "format",
      "head",
      "gzip",
      "source",
      "export"
    ]
  },
  {
    "id": "extended-088",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git config --global --list",
    "description": "Review global Git configuration",
    "useCase": "review global Git configuration",
    "example": "git config --global --list",
    "keywords": [
      "git",
      "config",
      "global",
      "list",
      "review",
      "configuration"
    ],
    "tags": [
      "config",
      "global",
      "list",
      "review",
      "configuration"
    ]
  },
  {
    "id": "extended-089",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git config --get-regexp alias",
    "description": "List Git aliases",
    "useCase": "list Git aliases",
    "example": "git config --get-regexp alias",
    "keywords": [
      "git",
      "config",
      "regexp",
      "alias",
      "list",
      "aliases"
    ],
    "tags": [
      "config",
      "regexp",
      "alias",
      "list",
      "aliases"
    ]
  },
  {
    "id": "extended-090",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git verify-commit <commit>",
    "description": "Verify a signed commit",
    "useCase": "verify a signed commit",
    "example": "git verify-commit <commit>",
    "keywords": [
      "git",
      "verify",
      "commit",
      "signed"
    ],
    "tags": [
      "verify",
      "commit",
      "signed"
    ]
  },
  {
    "id": "extended-091",
    "category": "Git",
    "subcategory": "Git",
    "level": "intermediate",
    "command": "git verify-tag <tag>",
    "description": "Verify a signed tag",
    "useCase": "verify a signed tag",
    "example": "git verify-tag <tag>",
    "keywords": [
      "git",
      "verify",
      "signed"
    ],
    "tags": [
      "verify",
      "signed"
    ]
  },
  {
    "id": "extended-092",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker version",
    "description": "Show Docker client and server versions",
    "useCase": "show Docker client and server versions",
    "example": "docker version",
    "keywords": [
      "docker",
      "version",
      "show",
      "client",
      "server",
      "versions"
    ],
    "tags": [
      "docker",
      "version",
      "show",
      "client",
      "server",
      "versions"
    ]
  },
  {
    "id": "extended-093",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker info",
    "description": "Inspect Docker daemon configuration",
    "useCase": "inspect Docker daemon configuration",
    "example": "docker info",
    "keywords": [
      "docker",
      "info",
      "inspect",
      "daemon",
      "configuration"
    ],
    "tags": [
      "docker",
      "info",
      "inspect",
      "daemon",
      "configuration"
    ]
  },
  {
    "id": "extended-094",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker ps --format \"table {{.Names}}\\t{{.Status}}\"",
    "description": "Show concise container status",
    "useCase": "show concise container status",
    "example": "docker ps --format \"table {{.Names}}\\t{{.Status}}\"",
    "keywords": [
      "docker",
      "format",
      "table",
      "names",
      "status",
      "show",
      "concise"
    ],
    "tags": [
      "docker",
      "format",
      "table",
      "names",
      "status",
      "show",
      "concise"
    ]
  },
  {
    "id": "extended-095",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker stats --no-stream",
    "description": "Snapshot container resource usage",
    "useCase": "snapshot container resource usage",
    "example": "docker stats --no-stream",
    "keywords": [
      "docker",
      "stats",
      "stream",
      "snapshot",
      "container",
      "resource",
      "usage"
    ],
    "tags": [
      "docker",
      "stats",
      "stream",
      "snapshot",
      "container",
      "resource",
      "usage"
    ]
  },
  {
    "id": "extended-096",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker top <container>",
    "description": "Inspect container processes",
    "useCase": "inspect container processes",
    "example": "docker top <container>",
    "keywords": [
      "docker",
      "container",
      "inspect",
      "processes"
    ],
    "tags": [
      "docker",
      "container",
      "inspect",
      "processes"
    ]
  },
  {
    "id": "extended-097",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker port <container>",
    "description": "Show published ports",
    "useCase": "show published ports",
    "example": "docker port <container>",
    "keywords": [
      "docker",
      "port",
      "container",
      "show",
      "published",
      "ports"
    ],
    "tags": [
      "docker",
      "port",
      "container",
      "show",
      "published",
      "ports"
    ]
  },
  {
    "id": "extended-098",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker rename <old> <new>",
    "description": "Rename a container",
    "useCase": "rename a container",
    "example": "docker rename <old> <new>",
    "keywords": [
      "docker",
      "rename",
      "container"
    ],
    "tags": [
      "docker",
      "rename",
      "container"
    ]
  },
  {
    "id": "extended-099",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker start <container>",
    "description": "Start a stopped container",
    "useCase": "start a stopped container",
    "example": "docker start <container>",
    "keywords": [
      "docker",
      "start",
      "container",
      "stopped"
    ],
    "tags": [
      "docker",
      "start",
      "container",
      "stopped"
    ]
  },
  {
    "id": "extended-100",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "advanced",
    "command": "docker stop <container>",
    "description": "Stop a container gracefully",
    "useCase": "stop a container gracefully",
    "example": "docker stop <container>",
    "keywords": [
      "docker",
      "stop",
      "container",
      "gracefully"
    ],
    "tags": [
      "docker",
      "stop",
      "container",
      "gracefully"
    ]
  },
  {
    "id": "extended-101",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "advanced",
    "command": "docker restart <container>",
    "description": "Restart a container",
    "useCase": "restart a container",
    "example": "docker restart <container>",
    "keywords": [
      "docker",
      "restart",
      "container"
    ],
    "tags": [
      "docker",
      "restart",
      "container"
    ]
  },
  {
    "id": "extended-102",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker pause <container>",
    "description": "Pause container processes",
    "useCase": "pause container processes",
    "example": "docker pause <container>",
    "keywords": [
      "docker",
      "pause",
      "container",
      "processes"
    ],
    "tags": [
      "docker",
      "pause",
      "container",
      "processes"
    ]
  },
  {
    "id": "extended-103",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker unpause <container>",
    "description": "Resume a paused container",
    "useCase": "resume a paused container",
    "example": "docker unpause <container>",
    "keywords": [
      "docker",
      "unpause",
      "container",
      "resume",
      "paused"
    ],
    "tags": [
      "docker",
      "unpause",
      "container",
      "resume",
      "paused"
    ]
  },
  {
    "id": "extended-104",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker cp <container>:/path ./",
    "description": "Copy files out of a container",
    "useCase": "copy files out of a container",
    "example": "docker cp <container>:/path ./",
    "keywords": [
      "docker",
      "container",
      "path",
      "copy",
      "files"
    ],
    "tags": [
      "docker",
      "container",
      "path",
      "copy",
      "files"
    ]
  },
  {
    "id": "extended-105",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker cp ./file <container>:/path",
    "description": "Copy files into a container",
    "useCase": "copy files into a container",
    "example": "docker cp ./file <container>:/path",
    "keywords": [
      "docker",
      "file",
      "container",
      "path",
      "copy",
      "files",
      "into"
    ],
    "tags": [
      "docker",
      "file",
      "container",
      "path",
      "copy",
      "files",
      "into"
    ]
  },
  {
    "id": "extended-106",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker history <image>",
    "description": "Inspect image layers",
    "useCase": "inspect image layers",
    "example": "docker history <image>",
    "keywords": [
      "docker",
      "history",
      "image",
      "inspect",
      "layers"
    ],
    "tags": [
      "docker",
      "history",
      "image",
      "inspect",
      "layers"
    ]
  },
  {
    "id": "extended-107",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker image inspect <image>",
    "description": "Inspect image metadata",
    "useCase": "inspect image metadata",
    "example": "docker image inspect <image>",
    "keywords": [
      "docker",
      "image",
      "inspect",
      "metadata"
    ],
    "tags": [
      "docker",
      "image",
      "inspect",
      "metadata"
    ]
  },
  {
    "id": "extended-108",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker image ls --filter dangling=true",
    "description": "List dangling images",
    "useCase": "list dangling images",
    "example": "docker image ls --filter dangling=true",
    "keywords": [
      "docker",
      "image",
      "filter",
      "dangling",
      "true",
      "list"
    ],
    "tags": [
      "docker",
      "image",
      "filter",
      "dangling",
      "true",
      "list"
    ]
  },
  {
    "id": "extended-109",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "advanced",
    "command": "docker container prune",
    "description": "Remove stopped containers",
    "useCase": "remove stopped containers",
    "example": "docker container prune",
    "keywords": [
      "docker",
      "container",
      "prune",
      "remove",
      "stopped",
      "containers"
    ],
    "tags": [
      "docker",
      "container",
      "prune",
      "remove",
      "stopped",
      "containers"
    ]
  },
  {
    "id": "extended-110",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker volume ls",
    "description": "List Docker volumes",
    "useCase": "list Docker volumes",
    "example": "docker volume ls",
    "keywords": [
      "docker",
      "volume",
      "list",
      "volumes"
    ],
    "tags": [
      "docker",
      "volume",
      "list",
      "volumes"
    ]
  },
  {
    "id": "extended-111",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker volume inspect <volume>",
    "description": "Inspect a volume",
    "useCase": "inspect a volume",
    "example": "docker volume inspect <volume>",
    "keywords": [
      "docker",
      "volume",
      "inspect"
    ],
    "tags": [
      "docker",
      "volume",
      "inspect"
    ]
  },
  {
    "id": "extended-112",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "advanced",
    "command": "docker volume prune",
    "description": "Remove unused volumes",
    "useCase": "remove unused volumes",
    "example": "docker volume prune",
    "keywords": [
      "docker",
      "volume",
      "prune",
      "remove",
      "unused",
      "volumes"
    ],
    "tags": [
      "docker",
      "volume",
      "prune",
      "remove",
      "unused",
      "volumes"
    ]
  },
  {
    "id": "extended-113",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker network ls",
    "description": "List Docker networks",
    "useCase": "list Docker networks",
    "example": "docker network ls",
    "keywords": [
      "docker",
      "network",
      "list",
      "networks"
    ],
    "tags": [
      "docker",
      "network",
      "list",
      "networks"
    ]
  },
  {
    "id": "extended-114",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker network inspect <network>",
    "description": "Inspect network configuration",
    "useCase": "inspect network configuration",
    "example": "docker network inspect <network>",
    "keywords": [
      "docker",
      "network",
      "inspect",
      "configuration"
    ],
    "tags": [
      "docker",
      "network",
      "inspect",
      "configuration"
    ]
  },
  {
    "id": "extended-115",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker network create <network>",
    "description": "Create a Docker network",
    "useCase": "create a Docker network",
    "example": "docker network create <network>",
    "keywords": [
      "docker",
      "network",
      "create"
    ],
    "tags": [
      "docker",
      "network",
      "create"
    ]
  },
  {
    "id": "extended-116",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker network connect <network> <container>",
    "description": "Attach a container to a network",
    "useCase": "attach a container to a network",
    "example": "docker network connect <network> <container>",
    "keywords": [
      "docker",
      "network",
      "connect",
      "container",
      "attach"
    ],
    "tags": [
      "docker",
      "network",
      "connect",
      "container",
      "attach"
    ]
  },
  {
    "id": "extended-117",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker network disconnect <network> <container>",
    "description": "Detach a container from a network",
    "useCase": "detach a container from a network",
    "example": "docker network disconnect <network> <container>",
    "keywords": [
      "docker",
      "network",
      "disconnect",
      "container",
      "detach"
    ],
    "tags": [
      "docker",
      "network",
      "disconnect",
      "container",
      "detach"
    ]
  },
  {
    "id": "extended-118",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker build --no-cache -t <image>:<tag> .",
    "description": "Build without cached layers",
    "useCase": "build without cached layers",
    "example": "docker build --no-cache -t <image>:<tag> .",
    "keywords": [
      "docker",
      "build",
      "cache",
      "image",
      "without",
      "cached"
    ],
    "tags": [
      "docker",
      "build",
      "cache",
      "image",
      "without",
      "cached"
    ]
  },
  {
    "id": "extended-119",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker buildx ls",
    "description": "List BuildKit builders",
    "useCase": "list BuildKit builders",
    "example": "docker buildx ls",
    "keywords": [
      "docker",
      "buildx",
      "list",
      "buildkit",
      "builders"
    ],
    "tags": [
      "docker",
      "buildx",
      "list",
      "buildkit",
      "builders"
    ]
  },
  {
    "id": "extended-120",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker buildx inspect --bootstrap",
    "description": "Inspect and initialize a builder",
    "useCase": "inspect and initialize a builder",
    "example": "docker buildx inspect --bootstrap",
    "keywords": [
      "docker",
      "buildx",
      "inspect",
      "bootstrap",
      "initialize",
      "builder"
    ],
    "tags": [
      "docker",
      "buildx",
      "inspect",
      "bootstrap",
      "initialize",
      "builder"
    ]
  },
  {
    "id": "extended-121",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker compose ps",
    "description": "Show Compose service status",
    "useCase": "show Compose service status",
    "example": "docker compose ps",
    "keywords": [
      "docker",
      "compose",
      "show",
      "service",
      "status"
    ],
    "tags": [
      "docker",
      "compose",
      "show",
      "service",
      "status"
    ]
  },
  {
    "id": "extended-122",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker compose logs -f --tail=200 <service>",
    "description": "Follow Compose logs",
    "useCase": "follow Compose logs",
    "example": "docker compose logs -f --tail=200 <service>",
    "keywords": [
      "docker",
      "compose",
      "logs",
      "tail",
      "service",
      "follow"
    ],
    "tags": [
      "docker",
      "compose",
      "logs",
      "tail",
      "service",
      "follow"
    ]
  },
  {
    "id": "extended-123",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "advanced",
    "command": "docker compose restart <service>",
    "description": "Restart one Compose service",
    "useCase": "restart one Compose service",
    "example": "docker compose restart <service>",
    "keywords": [
      "docker",
      "compose",
      "restart",
      "service"
    ],
    "tags": [
      "docker",
      "compose",
      "restart",
      "service"
    ]
  },
  {
    "id": "extended-124",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker compose pull",
    "description": "Pull Compose images",
    "useCase": "pull Compose images",
    "example": "docker compose pull",
    "keywords": [
      "docker",
      "compose",
      "pull",
      "images"
    ],
    "tags": [
      "docker",
      "compose",
      "pull",
      "images"
    ]
  },
  {
    "id": "extended-125",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker compose config",
    "description": "Validate Compose configuration",
    "useCase": "validate Compose configuration",
    "example": "docker compose config",
    "keywords": [
      "docker",
      "compose",
      "config",
      "validate",
      "configuration"
    ],
    "tags": [
      "docker",
      "compose",
      "config",
      "validate",
      "configuration"
    ]
  },
  {
    "id": "extended-126",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "advanced",
    "command": "docker compose down --remove-orphans",
    "description": "Stop Compose and remove orphans",
    "useCase": "stop Compose and remove orphans",
    "example": "docker compose down --remove-orphans",
    "keywords": [
      "docker",
      "compose",
      "down",
      "remove",
      "orphans",
      "stop"
    ],
    "tags": [
      "docker",
      "compose",
      "down",
      "remove",
      "orphans",
      "stop"
    ]
  },
  {
    "id": "extended-127",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker system df",
    "description": "Show Docker disk usage",
    "useCase": "show Docker disk usage",
    "example": "docker system df",
    "keywords": [
      "docker",
      "system",
      "show",
      "disk",
      "usage"
    ],
    "tags": [
      "docker",
      "system",
      "show",
      "disk",
      "usage"
    ]
  },
  {
    "id": "extended-128",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "advanced",
    "command": "docker image prune",
    "description": "Remove dangling images",
    "useCase": "remove dangling images",
    "example": "docker image prune",
    "keywords": [
      "docker",
      "image",
      "prune",
      "remove",
      "dangling",
      "images"
    ],
    "tags": [
      "docker",
      "image",
      "prune",
      "remove",
      "dangling",
      "images"
    ]
  },
  {
    "id": "extended-129",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "advanced",
    "command": "docker builder prune",
    "description": "Remove unused build cache",
    "useCase": "remove unused build cache",
    "example": "docker builder prune",
    "keywords": [
      "docker",
      "builder",
      "prune",
      "remove",
      "unused",
      "build",
      "cache"
    ],
    "tags": [
      "docker",
      "builder",
      "prune",
      "remove",
      "unused",
      "build",
      "cache"
    ]
  },
  {
    "id": "extended-130",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker context ls",
    "description": "List Docker contexts",
    "useCase": "list Docker contexts",
    "example": "docker context ls",
    "keywords": [
      "docker",
      "context",
      "list",
      "contexts"
    ],
    "tags": [
      "docker",
      "context",
      "list",
      "contexts"
    ]
  },
  {
    "id": "extended-131",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker context use <context>",
    "description": "Switch Docker context",
    "useCase": "switch Docker context",
    "example": "docker context use <context>",
    "keywords": [
      "docker",
      "context",
      "switch"
    ],
    "tags": [
      "docker",
      "context",
      "switch"
    ]
  },
  {
    "id": "extended-132",
    "category": "Docker",
    "subcategory": "Docker",
    "level": "intermediate",
    "command": "docker logout <registry>",
    "description": "Remove registry credentials",
    "useCase": "remove registry credentials",
    "example": "docker logout <registry>",
    "keywords": [
      "docker",
      "logout",
      "registry",
      "remove",
      "credentials"
    ],
    "tags": [
      "docker",
      "logout",
      "registry",
      "remove",
      "credentials"
    ]
  },
  {
    "id": "extended-133",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl version --short",
    "description": "Show Kubernetes versions",
    "useCase": "show Kubernetes versions",
    "example": "kubectl version --short",
    "keywords": [
      "kubernetes",
      "kubectl",
      "version",
      "short",
      "show",
      "versions"
    ],
    "tags": [
      "kubectl",
      "version",
      "short",
      "show",
      "kubernetes",
      "versions"
    ]
  },
  {
    "id": "extended-134",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl config current-context",
    "description": "Show the active context",
    "useCase": "show the active context",
    "example": "kubectl config current-context",
    "keywords": [
      "kubernetes",
      "kubectl",
      "config",
      "current",
      "context",
      "show",
      "active"
    ],
    "tags": [
      "kubectl",
      "config",
      "current",
      "context",
      "show",
      "active"
    ]
  },
  {
    "id": "extended-135",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl config get-contexts",
    "description": "List Kubernetes contexts",
    "useCase": "list Kubernetes contexts",
    "example": "kubectl config get-contexts",
    "keywords": [
      "kubernetes",
      "kubectl",
      "config",
      "contexts",
      "list"
    ],
    "tags": [
      "kubectl",
      "config",
      "contexts",
      "list",
      "kubernetes"
    ]
  },
  {
    "id": "extended-136",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl config use-context <context>",
    "description": "Switch Kubernetes context",
    "useCase": "switch Kubernetes context",
    "example": "kubectl config use-context <context>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "config",
      "context",
      "switch"
    ],
    "tags": [
      "kubectl",
      "config",
      "context",
      "switch",
      "kubernetes"
    ]
  },
  {
    "id": "extended-137",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl cluster-info",
    "description": "Show cluster endpoints",
    "useCase": "show cluster endpoints",
    "example": "kubectl cluster-info",
    "keywords": [
      "kubernetes",
      "kubectl",
      "cluster",
      "info",
      "show",
      "endpoints"
    ],
    "tags": [
      "kubectl",
      "cluster",
      "info",
      "show",
      "endpoints"
    ]
  },
  {
    "id": "extended-138",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl api-resources",
    "description": "List supported resource types",
    "useCase": "list supported resource types",
    "example": "kubectl api-resources",
    "keywords": [
      "kubernetes",
      "kubectl",
      "resources",
      "list",
      "supported",
      "resource",
      "types"
    ],
    "tags": [
      "kubectl",
      "resources",
      "list",
      "supported",
      "resource",
      "types"
    ]
  },
  {
    "id": "extended-139",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl explain pod.spec.containers",
    "description": "Read Kubernetes field documentation",
    "useCase": "read Kubernetes field documentation",
    "example": "kubectl explain pod.spec.containers",
    "keywords": [
      "kubernetes",
      "kubectl",
      "explain",
      "spec",
      "containers",
      "read",
      "field"
    ],
    "tags": [
      "kubectl",
      "explain",
      "spec",
      "containers",
      "read",
      "kubernetes",
      "field"
    ]
  },
  {
    "id": "extended-140",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get pods -A --show-labels",
    "description": "List pods with labels",
    "useCase": "list pods with labels",
    "example": "kubectl get pods -A --show-labels",
    "keywords": [
      "kubernetes",
      "kubectl",
      "pods",
      "show",
      "labels",
      "list",
      "with"
    ],
    "tags": [
      "kubectl",
      "pods",
      "show",
      "labels",
      "list",
      "with"
    ]
  },
  {
    "id": "extended-141",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get pods -A --field-selector=status.phase=Failed",
    "description": "Find failed pods",
    "useCase": "find failed pods",
    "example": "kubectl get pods -A --field-selector=status.phase=Failed",
    "keywords": [
      "kubernetes",
      "kubectl",
      "pods",
      "field",
      "selector",
      "status",
      "phase",
      "failed"
    ],
    "tags": [
      "kubectl",
      "pods",
      "field",
      "selector",
      "status",
      "phase",
      "failed"
    ]
  },
  {
    "id": "extended-142",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get pods -A -o json",
    "description": "Export pod data as JSON",
    "useCase": "export pod data as JSON",
    "example": "kubectl get pods -A -o json",
    "keywords": [
      "kubernetes",
      "kubectl",
      "pods",
      "json",
      "export",
      "data"
    ],
    "tags": [
      "kubectl",
      "pods",
      "json",
      "export",
      "data"
    ]
  },
  {
    "id": "extended-143",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get deploy -A",
    "description": "List deployments",
    "useCase": "list deployments",
    "example": "kubectl get deploy -A",
    "keywords": [
      "kubernetes",
      "kubectl",
      "deploy",
      "list",
      "deployments"
    ],
    "tags": [
      "kubectl",
      "deploy",
      "list",
      "deployments"
    ]
  },
  {
    "id": "extended-144",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get sts -A",
    "description": "List StatefulSets",
    "useCase": "list StatefulSets",
    "example": "kubectl get sts -A",
    "keywords": [
      "kubernetes",
      "kubectl",
      "list",
      "statefulsets"
    ],
    "tags": [
      "kubectl",
      "list",
      "statefulsets"
    ]
  },
  {
    "id": "extended-145",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get ds -A",
    "description": "List DaemonSets",
    "useCase": "list DaemonSets",
    "example": "kubectl get ds -A",
    "keywords": [
      "kubernetes",
      "kubectl",
      "list",
      "daemonsets"
    ],
    "tags": [
      "kubectl",
      "list",
      "daemonsets"
    ]
  },
  {
    "id": "extended-146",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get pv",
    "description": "List persistent volumes",
    "useCase": "list persistent volumes",
    "example": "kubectl get pv",
    "keywords": [
      "kubernetes",
      "kubectl",
      "list",
      "persistent",
      "volumes"
    ],
    "tags": [
      "kubectl",
      "list",
      "persistent",
      "volumes"
    ]
  },
  {
    "id": "extended-147",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get configmap -A",
    "description": "List ConfigMaps",
    "useCase": "list ConfigMaps",
    "example": "kubectl get configmap -A",
    "keywords": [
      "kubernetes",
      "kubectl",
      "configmap",
      "list",
      "configmaps"
    ],
    "tags": [
      "kubectl",
      "configmap",
      "list",
      "configmaps"
    ]
  },
  {
    "id": "extended-148",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get secret -A",
    "description": "List Secrets without values",
    "useCase": "list Secrets without values",
    "example": "kubectl get secret -A",
    "keywords": [
      "kubernetes",
      "kubectl",
      "secret",
      "list",
      "secrets",
      "without",
      "values"
    ],
    "tags": [
      "kubectl",
      "secret",
      "list",
      "secrets",
      "without",
      "values"
    ]
  },
  {
    "id": "extended-149",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get serviceaccount -A",
    "description": "List service accounts",
    "useCase": "list service accounts",
    "example": "kubectl get serviceaccount -A",
    "keywords": [
      "kubernetes",
      "kubectl",
      "serviceaccount",
      "list",
      "service",
      "accounts"
    ],
    "tags": [
      "kubectl",
      "serviceaccount",
      "list",
      "service",
      "accounts"
    ]
  },
  {
    "id": "extended-150",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get namespaces",
    "description": "List namespaces",
    "useCase": "list namespaces",
    "example": "kubectl get namespaces",
    "keywords": [
      "kubernetes",
      "kubectl",
      "namespaces",
      "list"
    ],
    "tags": [
      "kubectl",
      "namespaces",
      "list"
    ]
  },
  {
    "id": "extended-151",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl create namespace <namespace>",
    "description": "Create a namespace",
    "useCase": "create a namespace",
    "example": "kubectl create namespace <namespace>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "create",
      "namespace"
    ],
    "tags": [
      "kubectl",
      "create",
      "namespace"
    ]
  },
  {
    "id": "extended-152",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "advanced",
    "command": "kubectl delete pod <pod> -n <namespace>",
    "description": "Delete a pod for controller recreation",
    "useCase": "delete a pod for controller recreation",
    "example": "kubectl delete pod <pod> -n <namespace>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "delete",
      "namespace",
      "controller",
      "recreation"
    ],
    "tags": [
      "kubectl",
      "delete",
      "namespace",
      "controller",
      "recreation"
    ]
  },
  {
    "id": "extended-153",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "advanced",
    "command": "kubectl scale deployment/<name> --replicas=0 -n <namespace>",
    "description": "Scale down a deployment",
    "useCase": "scale down a deployment",
    "example": "kubectl scale deployment/<name> --replicas=0 -n <namespace>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "scale",
      "deployment",
      "name",
      "replicas",
      "namespace"
    ],
    "tags": [
      "kubectl",
      "scale",
      "deployment",
      "name",
      "replicas",
      "namespace"
    ]
  },
  {
    "id": "extended-154",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "advanced",
    "command": "kubectl scale deployment/<name> --replicas=3 -n <namespace>",
    "description": "Scale up a deployment",
    "useCase": "scale up a deployment",
    "example": "kubectl scale deployment/<name> --replicas=3 -n <namespace>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "scale",
      "deployment",
      "name",
      "replicas",
      "namespace"
    ],
    "tags": [
      "kubectl",
      "scale",
      "deployment",
      "name",
      "replicas",
      "namespace"
    ]
  },
  {
    "id": "extended-155",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl set image deployment/<name> <container>=<image>:<tag> -n <namespace>",
    "description": "Update a deployment image",
    "useCase": "update a deployment image",
    "example": "kubectl set image deployment/<name> <container>=<image>:<tag> -n <namespace>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "image",
      "deployment",
      "name",
      "container",
      "namespace"
    ],
    "tags": [
      "kubectl",
      "image",
      "deployment",
      "name",
      "container",
      "namespace"
    ]
  },
  {
    "id": "extended-156",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl set env deployment/<name> KEY=value -n <namespace>",
    "description": "Update deployment environment",
    "useCase": "update deployment environment",
    "example": "kubectl set env deployment/<name> KEY=value -n <namespace>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "deployment",
      "name",
      "value",
      "namespace",
      "update"
    ],
    "tags": [
      "kubectl",
      "deployment",
      "name",
      "value",
      "namespace",
      "update"
    ]
  },
  {
    "id": "extended-157",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl rollout pause deployment/<name> -n <namespace>",
    "description": "Pause a rollout",
    "useCase": "pause a rollout",
    "example": "kubectl rollout pause deployment/<name> -n <namespace>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "rollout",
      "pause",
      "deployment",
      "name",
      "namespace"
    ],
    "tags": [
      "kubectl",
      "rollout",
      "pause",
      "deployment",
      "name",
      "namespace"
    ]
  },
  {
    "id": "extended-158",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl rollout resume deployment/<name> -n <namespace>",
    "description": "Resume a rollout",
    "useCase": "resume a rollout",
    "example": "kubectl rollout resume deployment/<name> -n <namespace>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "rollout",
      "resume",
      "deployment",
      "name",
      "namespace"
    ],
    "tags": [
      "kubectl",
      "rollout",
      "resume",
      "deployment",
      "name",
      "namespace"
    ]
  },
  {
    "id": "extended-159",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl rollout history deployment/<name> -n <namespace>",
    "description": "Review deployment revisions",
    "useCase": "review deployment revisions",
    "example": "kubectl rollout history deployment/<name> -n <namespace>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "rollout",
      "history",
      "deployment",
      "name",
      "namespace",
      "review"
    ],
    "tags": [
      "kubectl",
      "rollout",
      "history",
      "deployment",
      "name",
      "namespace",
      "review"
    ]
  },
  {
    "id": "extended-160",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl wait --for=condition=available deployment/<name> -n <namespace> --timeout=120s",
    "description": "Wait for deployment availability",
    "useCase": "wait for deployment availability",
    "example": "kubectl wait --for=condition=available deployment/<name> -n <namespace> --timeout=120s",
    "keywords": [
      "kubernetes",
      "kubectl",
      "wait",
      "condition",
      "available",
      "deployment",
      "name",
      "namespace"
    ],
    "tags": [
      "kubectl",
      "wait",
      "condition",
      "available",
      "deployment",
      "name",
      "namespace"
    ]
  },
  {
    "id": "extended-161",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl wait --for=condition=ready pod/<pod> -n <namespace> --timeout=120s",
    "description": "Wait for a pod to be ready",
    "useCase": "wait for a pod to be ready",
    "example": "kubectl wait --for=condition=ready pod/<pod> -n <namespace> --timeout=120s",
    "keywords": [
      "kubernetes",
      "kubectl",
      "wait",
      "condition",
      "ready",
      "namespace",
      "timeout",
      "120s"
    ],
    "tags": [
      "kubectl",
      "wait",
      "condition",
      "ready",
      "namespace",
      "timeout",
      "120s"
    ]
  },
  {
    "id": "extended-162",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl auth can-i get pods -n <namespace>",
    "description": "Check RBAC permissions",
    "useCase": "check RBAC permissions",
    "example": "kubectl auth can-i get pods -n <namespace>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "auth",
      "pods",
      "namespace",
      "check",
      "rbac",
      "permissions"
    ],
    "tags": [
      "kubectl",
      "auth",
      "pods",
      "namespace",
      "check",
      "rbac",
      "permissions"
    ]
  },
  {
    "id": "extended-163",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl auth can-i --list -n <namespace>",
    "description": "List RBAC permissions",
    "useCase": "list RBAC permissions",
    "example": "kubectl auth can-i --list -n <namespace>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "auth",
      "list",
      "namespace",
      "rbac",
      "permissions"
    ],
    "tags": [
      "kubectl",
      "auth",
      "list",
      "namespace",
      "rbac",
      "permissions"
    ]
  },
  {
    "id": "extended-164",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get role -A",
    "description": "List namespace roles",
    "useCase": "list namespace roles",
    "example": "kubectl get role -A",
    "keywords": [
      "kubernetes",
      "kubectl",
      "role",
      "list",
      "namespace",
      "roles"
    ],
    "tags": [
      "kubectl",
      "role",
      "list",
      "namespace",
      "roles"
    ]
  },
  {
    "id": "extended-165",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get rolebinding -A",
    "description": "List role bindings",
    "useCase": "list role bindings",
    "example": "kubectl get rolebinding -A",
    "keywords": [
      "kubernetes",
      "kubectl",
      "rolebinding",
      "list",
      "role",
      "bindings"
    ],
    "tags": [
      "kubectl",
      "rolebinding",
      "list",
      "role",
      "bindings"
    ]
  },
  {
    "id": "extended-166",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get clusterrole",
    "description": "List cluster roles",
    "useCase": "list cluster roles",
    "example": "kubectl get clusterrole",
    "keywords": [
      "kubernetes",
      "kubectl",
      "clusterrole",
      "list",
      "cluster",
      "roles"
    ],
    "tags": [
      "kubectl",
      "clusterrole",
      "list",
      "cluster",
      "roles"
    ]
  },
  {
    "id": "extended-167",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get clusterrolebinding",
    "description": "List cluster role bindings",
    "useCase": "list cluster role bindings",
    "example": "kubectl get clusterrolebinding",
    "keywords": [
      "kubernetes",
      "kubectl",
      "clusterrolebinding",
      "list",
      "cluster",
      "role",
      "bindings"
    ],
    "tags": [
      "kubectl",
      "clusterrolebinding",
      "list",
      "cluster",
      "role",
      "bindings"
    ]
  },
  {
    "id": "extended-168",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl port-forward svc/<service> 8080:80 -n <namespace>",
    "description": "Access a service locally",
    "useCase": "access a service locally",
    "example": "kubectl port-forward svc/<service> 8080:80 -n <namespace>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "port",
      "forward",
      "service",
      "8080",
      "namespace",
      "access"
    ],
    "tags": [
      "kubectl",
      "port",
      "forward",
      "service",
      "8080",
      "namespace",
      "access"
    ]
  },
  {
    "id": "extended-169",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl proxy",
    "description": "Start a local API proxy",
    "useCase": "start a local API proxy",
    "example": "kubectl proxy",
    "keywords": [
      "kubernetes",
      "kubectl",
      "proxy",
      "start",
      "local"
    ],
    "tags": [
      "kubectl",
      "proxy",
      "start",
      "local"
    ]
  },
  {
    "id": "extended-170",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl cp <namespace>/<pod>:/path ./path",
    "description": "Copy files from a pod",
    "useCase": "copy files from a pod",
    "example": "kubectl cp <namespace>/<pod>:/path ./path",
    "keywords": [
      "kubernetes",
      "kubectl",
      "namespace",
      "path",
      "copy",
      "files",
      "from"
    ],
    "tags": [
      "kubectl",
      "namespace",
      "path",
      "copy",
      "files",
      "from"
    ]
  },
  {
    "id": "extended-171",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl top nodes",
    "description": "Check node resource usage",
    "useCase": "check node resource usage",
    "example": "kubectl top nodes",
    "keywords": [
      "kubernetes",
      "kubectl",
      "nodes",
      "check",
      "node",
      "resource",
      "usage"
    ],
    "tags": [
      "kubectl",
      "nodes",
      "check",
      "node",
      "resource",
      "usage"
    ]
  },
  {
    "id": "extended-172",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl top pod -n <namespace> --containers",
    "description": "Inspect container resource usage",
    "useCase": "inspect container resource usage",
    "example": "kubectl top pod -n <namespace> --containers",
    "keywords": [
      "kubernetes",
      "kubectl",
      "namespace",
      "containers",
      "inspect",
      "container",
      "resource",
      "usage"
    ],
    "tags": [
      "kubectl",
      "namespace",
      "containers",
      "inspect",
      "container",
      "resource",
      "usage"
    ]
  },
  {
    "id": "extended-173",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl get nodes -o json",
    "description": "Export node details",
    "useCase": "export node details",
    "example": "kubectl get nodes -o json",
    "keywords": [
      "kubernetes",
      "kubectl",
      "nodes",
      "json",
      "export",
      "node",
      "details"
    ],
    "tags": [
      "kubectl",
      "nodes",
      "json",
      "export",
      "node",
      "details"
    ]
  },
  {
    "id": "extended-174",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl describe node <node>",
    "description": "Inspect node conditions",
    "useCase": "inspect node conditions",
    "example": "kubectl describe node <node>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "describe",
      "node",
      "inspect",
      "conditions"
    ],
    "tags": [
      "kubectl",
      "describe",
      "node",
      "inspect",
      "conditions"
    ]
  },
  {
    "id": "extended-175",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl taint nodes <node> key=value:NoSchedule",
    "description": "Add a scheduling taint",
    "useCase": "add a scheduling taint",
    "example": "kubectl taint nodes <node> key=value:NoSchedule",
    "keywords": [
      "kubernetes",
      "kubectl",
      "taint",
      "nodes",
      "node",
      "value",
      "noschedule",
      "scheduling"
    ],
    "tags": [
      "kubectl",
      "taint",
      "nodes",
      "node",
      "value",
      "noschedule",
      "scheduling"
    ]
  },
  {
    "id": "extended-176",
    "category": "Kubernetes",
    "subcategory": "Kubernetes",
    "level": "intermediate",
    "command": "kubectl label pod <pod> app=<value> -n <namespace>",
    "description": "Add or change a label",
    "useCase": "add or change a label",
    "example": "kubectl label pod <pod> app=<value> -n <namespace>",
    "keywords": [
      "kubernetes",
      "kubectl",
      "label",
      "value",
      "namespace",
      "change"
    ],
    "tags": [
      "kubectl",
      "label",
      "value",
      "namespace",
      "change"
    ]
  },
  {
    "id": "extended-177",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "intermediate",
    "command": "az aks show -g <rg> -n <cluster> -o table",
    "description": "Inspect AKS cluster configuration",
    "useCase": "inspect AKS cluster configuration",
    "example": "az aks show -g <rg> -n <cluster> -o table",
    "keywords": [
      "aks",
      "show",
      "cluster",
      "table",
      "inspect",
      "configuration"
    ],
    "tags": [
      "show",
      "cluster",
      "table",
      "inspect",
      "configuration"
    ]
  },
  {
    "id": "extended-178",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "intermediate",
    "command": "az aks get-credentials -g <rg> -n <cluster> --overwrite-existing",
    "description": "Refresh AKS kubeconfig",
    "useCase": "refresh AKS kubeconfig",
    "example": "az aks get-credentials -g <rg> -n <cluster> --overwrite-existing",
    "keywords": [
      "aks",
      "credentials",
      "cluster",
      "overwrite",
      "existing",
      "refresh",
      "kubeconfig"
    ],
    "tags": [
      "credentials",
      "cluster",
      "overwrite",
      "existing",
      "refresh",
      "kubeconfig"
    ]
  },
  {
    "id": "extended-179",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "intermediate",
    "command": "az aks nodepool show -g <rg> --cluster-name <cluster> -n <pool> -o table",
    "description": "Inspect an AKS node pool",
    "useCase": "inspect an AKS node pool",
    "example": "az aks nodepool show -g <rg> --cluster-name <cluster> -n <pool> -o table",
    "keywords": [
      "aks",
      "nodepool",
      "show",
      "cluster",
      "name",
      "pool",
      "table"
    ],
    "tags": [
      "nodepool",
      "show",
      "cluster",
      "name",
      "pool",
      "table"
    ]
  },
  {
    "id": "extended-180",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "intermediate",
    "command": "az aks nodepool get-upgrades -g <rg> --cluster-name <cluster> -n <pool> -o table",
    "description": "Check node pool upgrade options",
    "useCase": "check node pool upgrade options",
    "example": "az aks nodepool get-upgrades -g <rg> --cluster-name <cluster> -n <pool> -o table",
    "keywords": [
      "aks",
      "nodepool",
      "upgrades",
      "cluster",
      "name",
      "pool",
      "table"
    ],
    "tags": [
      "nodepool",
      "upgrades",
      "cluster",
      "name",
      "pool",
      "table"
    ]
  },
  {
    "id": "extended-181",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "advanced",
    "command": "az aks nodepool upgrade-versions -g <rg> --cluster-name <cluster> -n <pool> -o table",
    "description": "Review node pool upgrade versions",
    "useCase": "review node pool upgrade versions",
    "example": "az aks nodepool upgrade-versions -g <rg> --cluster-name <cluster> -n <pool> -o table",
    "keywords": [
      "aks",
      "nodepool",
      "upgrade",
      "versions",
      "cluster",
      "name",
      "pool"
    ],
    "tags": [
      "nodepool",
      "upgrade",
      "versions",
      "cluster",
      "name",
      "pool"
    ]
  },
  {
    "id": "extended-182",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "intermediate",
    "command": "az aks nodepool update -g <rg> --cluster-name <cluster> -n <pool> --enable-cluster-autoscaler --min-count 1 --max-count 5",
    "description": "Enable node pool autoscaling",
    "useCase": "enable node pool autoscaling",
    "example": "az aks nodepool update -g <rg> --cluster-name <cluster> -n <pool> --enable-cluster-autoscaler --min-count 1 --max-count 5",
    "keywords": [
      "aks",
      "nodepool",
      "update",
      "cluster",
      "name",
      "pool",
      "enable"
    ],
    "tags": [
      "nodepool",
      "update",
      "cluster",
      "name",
      "pool",
      "enable"
    ]
  },
  {
    "id": "extended-183",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "advanced",
    "command": "az aks nodepool scale -g <rg> --cluster-name <cluster> -n <pool> --node-count 3",
    "description": "Scale an AKS node pool",
    "useCase": "scale an AKS node pool",
    "example": "az aks nodepool scale -g <rg> --cluster-name <cluster> -n <pool> --node-count 3",
    "keywords": [
      "aks",
      "nodepool",
      "scale",
      "cluster",
      "name",
      "pool",
      "node"
    ],
    "tags": [
      "nodepool",
      "scale",
      "cluster",
      "name",
      "pool",
      "node"
    ]
  },
  {
    "id": "extended-184",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "advanced",
    "command": "az aks nodepool stop -g <rg> --cluster-name <cluster> -n <pool>",
    "description": "Stop an AKS node pool",
    "useCase": "stop an AKS node pool",
    "example": "az aks nodepool stop -g <rg> --cluster-name <cluster> -n <pool>",
    "keywords": [
      "aks",
      "nodepool",
      "stop",
      "cluster",
      "name",
      "pool"
    ],
    "tags": [
      "nodepool",
      "stop",
      "cluster",
      "name",
      "pool"
    ]
  },
  {
    "id": "extended-185",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "intermediate",
    "command": "az aks nodepool start -g <rg> --cluster-name <cluster> -n <pool>",
    "description": "Start an AKS node pool",
    "useCase": "start an AKS node pool",
    "example": "az aks nodepool start -g <rg> --cluster-name <cluster> -n <pool>",
    "keywords": [
      "aks",
      "nodepool",
      "start",
      "cluster",
      "name",
      "pool"
    ],
    "tags": [
      "nodepool",
      "start",
      "cluster",
      "name",
      "pool"
    ]
  },
  {
    "id": "extended-186",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "intermediate",
    "command": "az aks check-acr -g <rg> -n <cluster> --acr <registry>",
    "description": "Test AKS access to ACR",
    "useCase": "test AKS access to ACR",
    "example": "az aks check-acr -g <rg> -n <cluster> --acr <registry>",
    "keywords": [
      "aks",
      "check",
      "cluster",
      "registry",
      "test",
      "access"
    ],
    "tags": [
      "check",
      "cluster",
      "registry",
      "test",
      "access"
    ]
  },
  {
    "id": "extended-187",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "intermediate",
    "command": "az aks command invoke -g <rg> -n <cluster> --command \"kubectl get nodes\"",
    "description": "Run a diagnostic command through AKS",
    "useCase": "run a diagnostic command through AKS",
    "example": "az aks command invoke -g <rg> -n <cluster> --command \"kubectl get nodes\"",
    "keywords": [
      "aks",
      "command",
      "invoke",
      "cluster",
      "kubectl",
      "nodes",
      "diagnostic"
    ],
    "tags": [
      "command",
      "invoke",
      "cluster",
      "kubectl",
      "nodes",
      "diagnostic"
    ]
  },
  {
    "id": "extended-188",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "intermediate",
    "command": "az aks nodepool list -g <rg> --cluster-name <cluster> --query \"[].{name:name,count:count,mode:mode}\" -o table",
    "description": "Summarize AKS node pools",
    "useCase": "summarize AKS node pools",
    "example": "az aks nodepool list -g <rg> --cluster-name <cluster> --query \"[].{name:name,count:count,mode:mode}\" -o table",
    "keywords": [
      "aks",
      "nodepool",
      "list",
      "cluster",
      "name",
      "query"
    ],
    "tags": [
      "nodepool",
      "list",
      "cluster",
      "name",
      "query"
    ]
  },
  {
    "id": "extended-189",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "intermediate",
    "command": "az aks show -g <rg> -n <cluster> --query \"{version:kubernetesVersion,provisioning:provisioningState}\"",
    "description": "Check AKS version and provisioning state",
    "useCase": "check AKS version and provisioning state",
    "example": "az aks show -g <rg> -n <cluster> --query \"{version:kubernetesVersion,provisioning:provisioningState}\"",
    "keywords": [
      "aks",
      "show",
      "cluster",
      "query",
      "version",
      "kubernetesversion",
      "provisioning",
      "provisioningstate"
    ],
    "tags": [
      "show",
      "cluster",
      "query",
      "version",
      "kubernetesversion",
      "provisioning",
      "provisioningstate"
    ]
  },
  {
    "id": "extended-190",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "intermediate",
    "command": "az aks get-credentials -g <rg> -n <cluster> --admin",
    "description": "Fetch admin kubeconfig for break-glass troubleshooting",
    "useCase": "fetch admin kubeconfig for break-glass troubleshooting",
    "example": "az aks get-credentials -g <rg> -n <cluster> --admin",
    "keywords": [
      "aks",
      "credentials",
      "cluster",
      "admin",
      "fetch",
      "kubeconfig",
      "break"
    ],
    "tags": [
      "credentials",
      "cluster",
      "admin",
      "fetch",
      "kubeconfig",
      "break"
    ]
  },
  {
    "id": "extended-191",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "advanced",
    "command": "az aks upgrade -g <rg> -n <cluster> --kubernetes-version <version> --control-plane-only",
    "description": "Upgrade the AKS control plane",
    "useCase": "upgrade the AKS control plane",
    "example": "az aks upgrade -g <rg> -n <cluster> --kubernetes-version <version> --control-plane-only",
    "keywords": [
      "aks",
      "upgrade",
      "cluster",
      "kubernetes",
      "version",
      "control",
      "plane"
    ],
    "tags": [
      "upgrade",
      "cluster",
      "kubernetes",
      "version",
      "control",
      "plane"
    ]
  },
  {
    "id": "extended-192",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "advanced",
    "command": "az aks nodepool upgrade -g <rg> --cluster-name <cluster> -n <pool> --kubernetes-version <version>",
    "description": "Upgrade an AKS node pool",
    "useCase": "upgrade an AKS node pool",
    "example": "az aks nodepool upgrade -g <rg> --cluster-name <cluster> -n <pool> --kubernetes-version <version>",
    "keywords": [
      "aks",
      "nodepool",
      "upgrade",
      "cluster",
      "name",
      "pool",
      "kubernetes"
    ],
    "tags": [
      "nodepool",
      "upgrade",
      "cluster",
      "name",
      "pool",
      "kubernetes"
    ]
  },
  {
    "id": "extended-193",
    "category": "AKS",
    "subcategory": "AKS",
    "level": "intermediate",
    "command": "az aks browse -g <rg> -n <cluster>",
    "description": "Open the AKS dashboard endpoint where supported",
    "useCase": "open the AKS dashboard endpoint where supported",
    "example": "az aks browse -g <rg> -n <cluster>",
    "keywords": [
      "aks",
      "browse",
      "cluster",
      "open",
      "dashboard",
      "endpoint",
      "where",
      "supported"
    ],
    "tags": [
      "browse",
      "cluster",
      "open",
      "dashboard",
      "endpoint",
      "where",
      "supported"
    ]
  },
  {
    "id": "extended-194",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az account show -o table",
    "description": "Show the active Azure subscription",
    "useCase": "show the active Azure subscription",
    "example": "az account show -o table",
    "keywords": [
      "azure cli",
      "account",
      "show",
      "table",
      "active",
      "azure",
      "subscription"
    ],
    "tags": [
      "account",
      "show",
      "table",
      "active",
      "azure",
      "subscription"
    ]
  },
  {
    "id": "extended-195",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az account list -o table",
    "description": "List Azure subscriptions",
    "useCase": "list Azure subscriptions",
    "example": "az account list -o table",
    "keywords": [
      "azure cli",
      "account",
      "list",
      "table",
      "azure",
      "subscriptions"
    ],
    "tags": [
      "account",
      "list",
      "table",
      "azure",
      "subscriptions"
    ]
  },
  {
    "id": "extended-196",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az account set --subscription <subscription>",
    "description": "Switch Azure subscription context",
    "useCase": "switch Azure subscription context",
    "example": "az account set --subscription <subscription>",
    "keywords": [
      "azure cli",
      "account",
      "subscription",
      "switch",
      "azure",
      "context"
    ],
    "tags": [
      "account",
      "subscription",
      "switch",
      "azure",
      "context"
    ]
  },
  {
    "id": "extended-197",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az group show -n <rg> -o json",
    "description": "Inspect a resource group",
    "useCase": "inspect a resource group",
    "example": "az group show -n <rg> -o json",
    "keywords": [
      "azure cli",
      "group",
      "show",
      "json",
      "inspect",
      "resource"
    ],
    "tags": [
      "group",
      "show",
      "json",
      "inspect",
      "resource"
    ]
  },
  {
    "id": "extended-198",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az resource list -g <rg> -o table",
    "description": "List resources in a resource group",
    "useCase": "list resources in a resource group",
    "example": "az resource list -g <rg> -o table",
    "keywords": [
      "azure cli",
      "resource",
      "list",
      "table",
      "resources",
      "group"
    ],
    "tags": [
      "resource",
      "list",
      "table",
      "resources",
      "group"
    ]
  },
  {
    "id": "extended-199",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az resource show --ids <resource-id>",
    "description": "Inspect a resource by ID",
    "useCase": "inspect a resource by ID",
    "example": "az resource show --ids <resource-id>",
    "keywords": [
      "azure cli",
      "resource",
      "show",
      "inspect"
    ],
    "tags": [
      "resource",
      "show",
      "inspect"
    ]
  },
  {
    "id": "extended-200",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "advanced",
    "command": "az resource invoke-action --action restart --ids <resource-id>",
    "description": "Invoke a supported resource action",
    "useCase": "invoke a supported resource action",
    "example": "az resource invoke-action --action restart --ids <resource-id>",
    "keywords": [
      "azure cli",
      "resource",
      "invoke",
      "action",
      "restart"
    ],
    "tags": [
      "resource",
      "invoke",
      "action",
      "restart"
    ]
  },
  {
    "id": "extended-201",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az vm show -g <rg> -n <vm> -d -o table",
    "description": "Inspect VM runtime state",
    "useCase": "inspect VM runtime state",
    "example": "az vm show -g <rg> -n <vm> -d -o table",
    "keywords": [
      "azure cli",
      "show",
      "table",
      "inspect",
      "runtime",
      "state"
    ],
    "tags": [
      "show",
      "table",
      "inspect",
      "runtime",
      "state"
    ]
  },
  {
    "id": "extended-202",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az vm start -g <rg> -n <vm>",
    "description": "Start an Azure VM",
    "useCase": "start an Azure VM",
    "example": "az vm start -g <rg> -n <vm>",
    "keywords": [
      "azure cli",
      "start",
      "azure"
    ],
    "tags": [
      "start",
      "azure"
    ]
  },
  {
    "id": "extended-203",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "advanced",
    "command": "az vm stop -g <rg> -n <vm>",
    "description": "Stop an Azure VM",
    "useCase": "stop an Azure VM",
    "example": "az vm stop -g <rg> -n <vm>",
    "keywords": [
      "azure cli",
      "stop",
      "azure"
    ],
    "tags": [
      "stop",
      "azure"
    ]
  },
  {
    "id": "extended-204",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "advanced",
    "command": "az vm restart -g <rg> -n <vm>",
    "description": "Restart an Azure VM",
    "useCase": "restart an Azure VM",
    "example": "az vm restart -g <rg> -n <vm>",
    "keywords": [
      "azure cli",
      "restart",
      "azure"
    ],
    "tags": [
      "restart",
      "azure"
    ]
  },
  {
    "id": "extended-205",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az network public-ip list -o table",
    "description": "List public IPs",
    "useCase": "list public IPs",
    "example": "az network public-ip list -o table",
    "keywords": [
      "azure cli",
      "network",
      "public",
      "list",
      "table"
    ],
    "tags": [
      "network",
      "public",
      "list",
      "table"
    ]
  },
  {
    "id": "extended-206",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az network nic list -o table",
    "description": "List network interfaces",
    "useCase": "list network interfaces",
    "example": "az network nic list -o table",
    "keywords": [
      "azure cli",
      "network",
      "list",
      "table",
      "interfaces"
    ],
    "tags": [
      "network",
      "list",
      "table",
      "interfaces"
    ]
  },
  {
    "id": "extended-207",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az network nsg list -o table",
    "description": "List network security groups",
    "useCase": "list network security groups",
    "example": "az network nsg list -o table",
    "keywords": [
      "azure cli",
      "network",
      "list",
      "table",
      "security",
      "groups"
    ],
    "tags": [
      "network",
      "list",
      "table",
      "security",
      "groups"
    ]
  },
  {
    "id": "extended-208",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az network nsg rule list -g <rg> --nsg-name <nsg> -o table",
    "description": "Inspect NSG rules",
    "useCase": "inspect NSG rules",
    "example": "az network nsg rule list -g <rg> --nsg-name <nsg> -o table",
    "keywords": [
      "azure cli",
      "network",
      "rule",
      "list",
      "name",
      "table",
      "inspect",
      "rules"
    ],
    "tags": [
      "network",
      "rule",
      "list",
      "name",
      "table",
      "inspect",
      "rules"
    ]
  },
  {
    "id": "extended-209",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az storage account list -o table",
    "description": "List storage accounts",
    "useCase": "list storage accounts",
    "example": "az storage account list -o table",
    "keywords": [
      "azure cli",
      "storage",
      "account",
      "list",
      "table",
      "accounts"
    ],
    "tags": [
      "storage",
      "account",
      "list",
      "table",
      "accounts"
    ]
  },
  {
    "id": "extended-210",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az keyvault list -o table",
    "description": "List Key Vaults",
    "useCase": "list Key Vaults",
    "example": "az keyvault list -o table",
    "keywords": [
      "azure cli",
      "keyvault",
      "list",
      "table",
      "vaults"
    ],
    "tags": [
      "keyvault",
      "list",
      "table",
      "vaults"
    ]
  },
  {
    "id": "extended-211",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az monitor activity-log list --max-events 20 -o table",
    "description": "Review recent Azure events",
    "useCase": "review recent Azure events",
    "example": "az monitor activity-log list --max-events 20 -o table",
    "keywords": [
      "azure cli",
      "monitor",
      "activity",
      "list",
      "events",
      "table",
      "review",
      "recent"
    ],
    "tags": [
      "monitor",
      "activity",
      "list",
      "events",
      "table",
      "review",
      "recent"
    ]
  },
  {
    "id": "extended-212",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az monitor metrics list --resource <resource-id> --metric CPU",
    "description": "Query Azure Monitor metrics",
    "useCase": "query Azure Monitor metrics",
    "example": "az monitor metrics list --resource <resource-id> --metric CPU",
    "keywords": [
      "azure cli",
      "monitor",
      "metrics",
      "list",
      "resource",
      "metric",
      "query"
    ],
    "tags": [
      "monitor",
      "metrics",
      "list",
      "resource",
      "metric",
      "query"
    ]
  },
  {
    "id": "extended-213",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az role assignment list --assignee <object-id> -o table",
    "description": "Inspect Azure RBAC assignments",
    "useCase": "inspect Azure RBAC assignments",
    "example": "az role assignment list --assignee <object-id> -o table",
    "keywords": [
      "azure cli",
      "role",
      "assignment",
      "list",
      "assignee",
      "object",
      "table",
      "inspect"
    ],
    "tags": [
      "role",
      "assignment",
      "list",
      "assignee",
      "object",
      "table",
      "inspect"
    ]
  },
  {
    "id": "extended-214",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az ad signed-in-user show",
    "description": "Show signed-in Entra ID user",
    "useCase": "show signed-in Entra ID user",
    "example": "az ad signed-in-user show",
    "keywords": [
      "azure cli",
      "signed",
      "user",
      "show",
      "entra"
    ],
    "tags": [
      "signed",
      "user",
      "show",
      "entra"
    ]
  },
  {
    "id": "extended-215",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az extension list -o table",
    "description": "List Azure CLI extensions",
    "useCase": "list Azure CLI extensions",
    "example": "az extension list -o table",
    "keywords": [
      "azure cli",
      "extension",
      "list",
      "table",
      "azure",
      "extensions"
    ],
    "tags": [
      "extension",
      "list",
      "table",
      "azure",
      "extensions"
    ]
  },
  {
    "id": "extended-216",
    "category": "Azure CLI",
    "subcategory": "Azure CLI",
    "level": "intermediate",
    "command": "az configure --list-defaults",
    "description": "Review Azure CLI defaults",
    "useCase": "review Azure CLI defaults",
    "example": "az configure --list-defaults",
    "keywords": [
      "azure cli",
      "configure",
      "list",
      "defaults",
      "review",
      "azure"
    ],
    "tags": [
      "configure",
      "list",
      "defaults",
      "review",
      "azure"
    ]
  },
  {
    "id": "extended-217",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform version",
    "description": "Show Terraform version",
    "useCase": "show Terraform version",
    "example": "terraform version",
    "keywords": [
      "terraform",
      "version",
      "show"
    ],
    "tags": [
      "terraform",
      "version",
      "show"
    ]
  },
  {
    "id": "extended-218",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform providers",
    "description": "List providers",
    "useCase": "list providers",
    "example": "terraform providers",
    "keywords": [
      "terraform",
      "providers",
      "list"
    ],
    "tags": [
      "terraform",
      "providers",
      "list"
    ]
  },
  {
    "id": "extended-219",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform validate",
    "description": "Validate Terraform configuration",
    "useCase": "validate Terraform configuration",
    "example": "terraform validate",
    "keywords": [
      "terraform",
      "validate",
      "configuration"
    ],
    "tags": [
      "terraform",
      "validate",
      "configuration"
    ]
  },
  {
    "id": "extended-220",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform fmt -check -recursive",
    "description": "Check Terraform formatting",
    "useCase": "check Terraform formatting",
    "example": "terraform fmt -check -recursive",
    "keywords": [
      "terraform",
      "check",
      "recursive",
      "formatting"
    ],
    "tags": [
      "terraform",
      "check",
      "recursive",
      "formatting"
    ]
  },
  {
    "id": "extended-221",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform fmt -recursive",
    "description": "Format Terraform files",
    "useCase": "format Terraform files",
    "example": "terraform fmt -recursive",
    "keywords": [
      "terraform",
      "recursive",
      "format",
      "files"
    ],
    "tags": [
      "terraform",
      "recursive",
      "format",
      "files"
    ]
  },
  {
    "id": "extended-222",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform plan -out=tfplan",
    "description": "Create a saved execution plan",
    "useCase": "create a saved execution plan",
    "example": "terraform plan -out=tfplan",
    "keywords": [
      "terraform",
      "plan",
      "tfplan",
      "create",
      "saved",
      "execution"
    ],
    "tags": [
      "terraform",
      "plan",
      "tfplan",
      "create",
      "saved",
      "execution"
    ]
  },
  {
    "id": "extended-223",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform show tfplan",
    "description": "Inspect a saved plan",
    "useCase": "inspect a saved plan",
    "example": "terraform show tfplan",
    "keywords": [
      "terraform",
      "show",
      "tfplan",
      "inspect",
      "saved",
      "plan"
    ],
    "tags": [
      "terraform",
      "show",
      "tfplan",
      "inspect",
      "saved",
      "plan"
    ]
  },
  {
    "id": "extended-224",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "advanced",
    "command": "terraform apply tfplan",
    "description": "Apply a saved plan",
    "useCase": "apply a saved plan",
    "example": "terraform apply tfplan",
    "keywords": [
      "terraform",
      "apply",
      "tfplan",
      "saved",
      "plan"
    ],
    "tags": [
      "terraform",
      "apply",
      "tfplan",
      "saved",
      "plan"
    ]
  },
  {
    "id": "extended-225",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "advanced",
    "command": "terraform apply -refresh-only",
    "description": "Reconcile state with remote objects",
    "useCase": "reconcile state with remote objects",
    "example": "terraform apply -refresh-only",
    "keywords": [
      "terraform",
      "apply",
      "refresh",
      "only",
      "reconcile",
      "state",
      "with"
    ],
    "tags": [
      "terraform",
      "apply",
      "refresh",
      "only",
      "reconcile",
      "state",
      "with"
    ]
  },
  {
    "id": "extended-226",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform state pull",
    "description": "Export current state",
    "useCase": "export current state",
    "example": "terraform state pull",
    "keywords": [
      "terraform",
      "state",
      "pull",
      "export",
      "current"
    ],
    "tags": [
      "terraform",
      "state",
      "pull",
      "export",
      "current"
    ]
  },
  {
    "id": "extended-227",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform state rm <address>",
    "description": "Remove an object from state",
    "useCase": "remove an object from state",
    "example": "terraform state rm <address>",
    "keywords": [
      "terraform",
      "state",
      "address",
      "remove",
      "object",
      "from"
    ],
    "tags": [
      "terraform",
      "state",
      "address",
      "remove",
      "object",
      "from"
    ]
  },
  {
    "id": "extended-228",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform state mv <src> <dst>",
    "description": "Move a state address",
    "useCase": "move a state address",
    "example": "terraform state mv <src> <dst>",
    "keywords": [
      "terraform",
      "state",
      "move",
      "address"
    ],
    "tags": [
      "terraform",
      "state",
      "move",
      "address"
    ]
  },
  {
    "id": "extended-229",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform graph",
    "description": "Generate a resource dependency graph",
    "useCase": "generate a resource dependency graph",
    "example": "terraform graph",
    "keywords": [
      "terraform",
      "graph",
      "generate",
      "resource",
      "dependency"
    ],
    "tags": [
      "terraform",
      "graph",
      "generate",
      "resource",
      "dependency"
    ]
  },
  {
    "id": "extended-230",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform output",
    "description": "Show module outputs",
    "useCase": "show module outputs",
    "example": "terraform output",
    "keywords": [
      "terraform",
      "output",
      "show",
      "module",
      "outputs"
    ],
    "tags": [
      "terraform",
      "output",
      "show",
      "module",
      "outputs"
    ]
  },
  {
    "id": "extended-231",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform output -json",
    "description": "Export outputs as JSON",
    "useCase": "export outputs as JSON",
    "example": "terraform output -json",
    "keywords": [
      "terraform",
      "output",
      "json",
      "export",
      "outputs"
    ],
    "tags": [
      "terraform",
      "output",
      "json",
      "export",
      "outputs"
    ]
  },
  {
    "id": "extended-232",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform console",
    "description": "Evaluate Terraform expressions",
    "useCase": "evaluate Terraform expressions",
    "example": "terraform console",
    "keywords": [
      "terraform",
      "console",
      "evaluate",
      "expressions"
    ],
    "tags": [
      "terraform",
      "console",
      "evaluate",
      "expressions"
    ]
  },
  {
    "id": "extended-233",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "advanced",
    "command": "terraform force-unlock <lock-id>",
    "description": "Release a stale state lock",
    "useCase": "release a stale state lock",
    "example": "terraform force-unlock <lock-id>",
    "keywords": [
      "terraform",
      "force",
      "unlock",
      "lock",
      "release",
      "stale",
      "state"
    ],
    "tags": [
      "terraform",
      "force",
      "unlock",
      "lock",
      "release",
      "stale",
      "state"
    ]
  },
  {
    "id": "extended-234",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform workspace list",
    "description": "List workspaces",
    "useCase": "list workspaces",
    "example": "terraform workspace list",
    "keywords": [
      "terraform",
      "workspace",
      "list",
      "workspaces"
    ],
    "tags": [
      "terraform",
      "workspace",
      "list",
      "workspaces"
    ]
  },
  {
    "id": "extended-235",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform workspace select <name>",
    "description": "Switch workspace",
    "useCase": "switch workspace",
    "example": "terraform workspace select <name>",
    "keywords": [
      "terraform",
      "workspace",
      "select",
      "name",
      "switch"
    ],
    "tags": [
      "terraform",
      "workspace",
      "select",
      "name",
      "switch"
    ]
  },
  {
    "id": "extended-236",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform workspace new <name>",
    "description": "Create a workspace",
    "useCase": "create a workspace",
    "example": "terraform workspace new <name>",
    "keywords": [
      "terraform",
      "workspace",
      "name",
      "create"
    ],
    "tags": [
      "terraform",
      "workspace",
      "name",
      "create"
    ]
  },
  {
    "id": "extended-237",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform providers lock",
    "description": "Update dependency lock selections",
    "useCase": "update dependency lock selections",
    "example": "terraform providers lock",
    "keywords": [
      "terraform",
      "providers",
      "lock",
      "update",
      "dependency",
      "selections"
    ],
    "tags": [
      "terraform",
      "providers",
      "lock",
      "update",
      "dependency",
      "selections"
    ]
  },
  {
    "id": "extended-238",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "advanced",
    "command": "terraform init -upgrade",
    "description": "Upgrade providers and modules",
    "useCase": "upgrade providers and modules",
    "example": "terraform init -upgrade",
    "keywords": [
      "terraform",
      "init",
      "upgrade",
      "providers",
      "modules"
    ],
    "tags": [
      "terraform",
      "init",
      "upgrade",
      "providers",
      "modules"
    ]
  },
  {
    "id": "extended-239",
    "category": "Terraform",
    "subcategory": "Terraform",
    "level": "intermediate",
    "command": "terraform get -update",
    "description": "Update modules",
    "useCase": "update modules",
    "example": "terraform get -update",
    "keywords": [
      "terraform",
      "update",
      "modules"
    ],
    "tags": [
      "terraform",
      "update",
      "modules"
    ]
  },
  {
    "id": "extended-240",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm version",
    "description": "Show Helm version",
    "useCase": "show Helm version",
    "example": "helm version",
    "keywords": [
      "helm",
      "version",
      "show"
    ],
    "tags": [
      "helm",
      "version",
      "show"
    ]
  },
  {
    "id": "extended-241",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm repo list",
    "description": "List Helm repositories",
    "useCase": "list Helm repositories",
    "example": "helm repo list",
    "keywords": [
      "helm",
      "repo",
      "list",
      "repositories"
    ],
    "tags": [
      "helm",
      "repo",
      "list",
      "repositories"
    ]
  },
  {
    "id": "extended-242",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm repo update",
    "description": "Refresh chart indexes",
    "useCase": "refresh chart indexes",
    "example": "helm repo update",
    "keywords": [
      "helm",
      "repo",
      "update",
      "refresh",
      "chart",
      "indexes"
    ],
    "tags": [
      "helm",
      "repo",
      "update",
      "refresh",
      "chart",
      "indexes"
    ]
  },
  {
    "id": "extended-243",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm search repo <term>",
    "description": "Search chart repositories",
    "useCase": "search chart repositories",
    "example": "helm search repo <term>",
    "keywords": [
      "helm",
      "search",
      "repo",
      "term",
      "chart",
      "repositories"
    ],
    "tags": [
      "helm",
      "search",
      "repo",
      "term",
      "chart",
      "repositories"
    ]
  },
  {
    "id": "extended-244",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm show values <repo>/<chart>",
    "description": "Inspect chart default values",
    "useCase": "inspect chart default values",
    "example": "helm show values <repo>/<chart>",
    "keywords": [
      "helm",
      "show",
      "values",
      "repo",
      "chart",
      "inspect"
    ],
    "tags": [
      "helm",
      "show",
      "values",
      "repo",
      "chart",
      "inspect"
    ]
  },
  {
    "id": "extended-245",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm show chart <repo>/<chart>",
    "description": "Inspect chart metadata",
    "useCase": "inspect chart metadata",
    "example": "helm show chart <repo>/<chart>",
    "keywords": [
      "helm",
      "show",
      "chart",
      "repo",
      "inspect"
    ],
    "tags": [
      "helm",
      "show",
      "chart",
      "repo",
      "inspect"
    ]
  },
  {
    "id": "extended-246",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm template <release> <chart> -f values.yaml",
    "description": "Render a chart locally",
    "useCase": "render a chart locally",
    "example": "helm template <release> <chart> -f values.yaml",
    "keywords": [
      "helm",
      "template",
      "release",
      "chart",
      "values",
      "yaml",
      "render"
    ],
    "tags": [
      "helm",
      "template",
      "release",
      "chart",
      "values",
      "yaml",
      "render"
    ]
  },
  {
    "id": "extended-247",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm lint <chart>",
    "description": "Validate chart structure",
    "useCase": "validate chart structure",
    "example": "helm lint <chart>",
    "keywords": [
      "helm",
      "lint",
      "chart",
      "validate",
      "structure"
    ],
    "tags": [
      "helm",
      "lint",
      "chart",
      "validate",
      "structure"
    ]
  },
  {
    "id": "extended-248",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm dependency update <chart>",
    "description": "Update chart dependencies",
    "useCase": "update chart dependencies",
    "example": "helm dependency update <chart>",
    "keywords": [
      "helm",
      "dependency",
      "update",
      "chart",
      "dependencies"
    ],
    "tags": [
      "helm",
      "dependency",
      "update",
      "chart",
      "dependencies"
    ]
  },
  {
    "id": "extended-249",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm list -A --all",
    "description": "List all Helm releases",
    "useCase": "list all Helm releases",
    "example": "helm list -A --all",
    "keywords": [
      "helm",
      "list",
      "releases"
    ],
    "tags": [
      "helm",
      "list",
      "releases"
    ]
  },
  {
    "id": "extended-250",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm get values <release> -n <namespace>",
    "description": "Show release values",
    "useCase": "show release values",
    "example": "helm get values <release> -n <namespace>",
    "keywords": [
      "helm",
      "values",
      "release",
      "namespace",
      "show"
    ],
    "tags": [
      "helm",
      "values",
      "release",
      "namespace",
      "show"
    ]
  },
  {
    "id": "extended-251",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm get manifest <release> -n <namespace>",
    "description": "Inspect rendered manifests",
    "useCase": "inspect rendered manifests",
    "example": "helm get manifest <release> -n <namespace>",
    "keywords": [
      "helm",
      "manifest",
      "release",
      "namespace",
      "inspect",
      "rendered",
      "manifests"
    ],
    "tags": [
      "helm",
      "manifest",
      "release",
      "namespace",
      "inspect",
      "rendered",
      "manifests"
    ]
  },
  {
    "id": "extended-252",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "intermediate",
    "command": "helm get all <release> -n <namespace>",
    "description": "Show release information",
    "useCase": "show release information",
    "example": "helm get all <release> -n <namespace>",
    "keywords": [
      "helm",
      "release",
      "namespace",
      "show",
      "information"
    ],
    "tags": [
      "helm",
      "release",
      "namespace",
      "show",
      "information"
    ]
  },
  {
    "id": "extended-253",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "advanced",
    "command": "helm upgrade --install <release> <chart> -n <namespace> --create-namespace",
    "description": "Install or upgrade a release",
    "useCase": "install or upgrade a release",
    "example": "helm upgrade --install <release> <chart> -n <namespace> --create-namespace",
    "keywords": [
      "helm",
      "upgrade",
      "install",
      "release",
      "chart",
      "namespace",
      "create"
    ],
    "tags": [
      "helm",
      "upgrade",
      "install",
      "release",
      "chart",
      "namespace",
      "create"
    ]
  },
  {
    "id": "extended-254",
    "category": "Helm",
    "subcategory": "Helm",
    "level": "advanced",
    "command": "helm uninstall <release> -n <namespace>",
    "description": "Remove a Helm release",
    "useCase": "remove a Helm release",
    "example": "helm uninstall <release> -n <namespace>",
    "keywords": [
      "helm",
      "uninstall",
      "release",
      "namespace",
      "remove"
    ],
    "tags": [
      "helm",
      "uninstall",
      "release",
      "namespace",
      "remove"
    ]
  },
  {
    "id": "extended-255",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible --version",
    "description": "Show Ansible version",
    "useCase": "show Ansible version",
    "example": "ansible --version",
    "keywords": [
      "ansible",
      "version",
      "show"
    ],
    "tags": [
      "ansible",
      "version",
      "show"
    ]
  },
  {
    "id": "extended-256",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible-inventory --graph",
    "description": "Visualize inventory groups",
    "useCase": "visualize inventory groups",
    "example": "ansible-inventory --graph",
    "keywords": [
      "ansible",
      "inventory",
      "graph",
      "visualize",
      "groups"
    ],
    "tags": [
      "ansible",
      "inventory",
      "graph",
      "visualize",
      "groups"
    ]
  },
  {
    "id": "extended-257",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible-inventory --list",
    "description": "Export inventory as JSON",
    "useCase": "export inventory as JSON",
    "example": "ansible-inventory --list",
    "keywords": [
      "ansible",
      "inventory",
      "list",
      "export",
      "json"
    ],
    "tags": [
      "ansible",
      "inventory",
      "list",
      "export",
      "json"
    ]
  },
  {
    "id": "extended-258",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible all -m setup",
    "description": "Gather host facts",
    "useCase": "gather host facts",
    "example": "ansible all -m setup",
    "keywords": [
      "ansible",
      "setup",
      "gather",
      "host",
      "facts"
    ],
    "tags": [
      "ansible",
      "setup",
      "gather",
      "host",
      "facts"
    ]
  },
  {
    "id": "extended-259",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible all -m shell -a \"uptime\"",
    "description": "Run a shell command across hosts",
    "useCase": "run a shell command across hosts",
    "example": "ansible all -m shell -a \"uptime\"",
    "keywords": [
      "ansible",
      "shell",
      "uptime",
      "command",
      "across",
      "hosts"
    ],
    "tags": [
      "ansible",
      "shell",
      "uptime",
      "command",
      "across",
      "hosts"
    ]
  },
  {
    "id": "extended-260",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible all -m command -a \"df -h\"",
    "description": "Run a command across hosts",
    "useCase": "run a command across hosts",
    "example": "ansible all -m command -a \"df -h\"",
    "keywords": [
      "ansible",
      "command",
      "across",
      "hosts"
    ],
    "tags": [
      "ansible",
      "command",
      "across",
      "hosts"
    ]
  },
  {
    "id": "extended-261",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible-playbook site.yml --syntax-check",
    "description": "Validate playbook syntax",
    "useCase": "validate playbook syntax",
    "example": "ansible-playbook site.yml --syntax-check",
    "keywords": [
      "ansible",
      "playbook",
      "site",
      "syntax",
      "check",
      "validate"
    ],
    "tags": [
      "ansible",
      "playbook",
      "site",
      "syntax",
      "check",
      "validate"
    ]
  },
  {
    "id": "extended-262",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible-playbook site.yml --check --diff",
    "description": "Dry-run a playbook",
    "useCase": "dry-run a playbook",
    "example": "ansible-playbook site.yml --check --diff",
    "keywords": [
      "ansible",
      "playbook",
      "site",
      "check",
      "diff"
    ],
    "tags": [
      "ansible",
      "playbook",
      "site",
      "check",
      "diff"
    ]
  },
  {
    "id": "extended-263",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible-playbook site.yml --limit <host>",
    "description": "Run against one host",
    "useCase": "run against one host",
    "example": "ansible-playbook site.yml --limit <host>",
    "keywords": [
      "ansible",
      "playbook",
      "site",
      "limit",
      "host",
      "against"
    ],
    "tags": [
      "ansible",
      "playbook",
      "site",
      "limit",
      "host",
      "against"
    ]
  },
  {
    "id": "extended-264",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible-playbook site.yml --start-at-task \"<task>\"",
    "description": "Resume from a task",
    "useCase": "resume from a task",
    "example": "ansible-playbook site.yml --start-at-task \"<task>\"",
    "keywords": [
      "ansible",
      "playbook",
      "site",
      "start",
      "task",
      "resume"
    ],
    "tags": [
      "ansible",
      "playbook",
      "site",
      "start",
      "task",
      "resume"
    ]
  },
  {
    "id": "extended-265",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible-playbook site.yml --list-tasks",
    "description": "List playbook tasks",
    "useCase": "list playbook tasks",
    "example": "ansible-playbook site.yml --list-tasks",
    "keywords": [
      "ansible",
      "playbook",
      "site",
      "list",
      "tasks"
    ],
    "tags": [
      "ansible",
      "playbook",
      "site",
      "list",
      "tasks"
    ]
  },
  {
    "id": "extended-266",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible-vault view secrets.yml",
    "description": "Read encrypted vars",
    "useCase": "read encrypted vars",
    "example": "ansible-vault view secrets.yml",
    "keywords": [
      "ansible",
      "vault",
      "view",
      "secrets",
      "read",
      "encrypted",
      "vars"
    ],
    "tags": [
      "ansible",
      "vault",
      "view",
      "secrets",
      "read",
      "encrypted",
      "vars"
    ]
  },
  {
    "id": "extended-267",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible-vault edit secrets.yml",
    "description": "Edit encrypted vars",
    "useCase": "edit encrypted vars",
    "example": "ansible-vault edit secrets.yml",
    "keywords": [
      "ansible",
      "vault",
      "edit",
      "secrets",
      "encrypted",
      "vars"
    ],
    "tags": [
      "ansible",
      "vault",
      "edit",
      "secrets",
      "encrypted",
      "vars"
    ]
  },
  {
    "id": "extended-268",
    "category": "Ansible",
    "subcategory": "Ansible",
    "level": "intermediate",
    "command": "ansible-galaxy collection list",
    "description": "List installed collections",
    "useCase": "list installed collections",
    "example": "ansible-galaxy collection list",
    "keywords": [
      "ansible",
      "galaxy",
      "collection",
      "list",
      "installed",
      "collections"
    ],
    "tags": [
      "ansible",
      "galaxy",
      "collection",
      "list",
      "installed",
      "collections"
    ]
  },
  {
    "id": "extended-269",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "intermediate",
    "command": "gh auth status",
    "description": "Check GitHub CLI authentication",
    "useCase": "check GitHub CLI authentication",
    "example": "gh auth status",
    "keywords": [
      "github actions",
      "auth",
      "status",
      "check",
      "github",
      "authentication"
    ],
    "tags": [
      "auth",
      "status",
      "check",
      "github",
      "authentication"
    ]
  },
  {
    "id": "extended-270",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "intermediate",
    "command": "gh repo view --web",
    "description": "Open the current repository",
    "useCase": "open the current repository",
    "example": "gh repo view --web",
    "keywords": [
      "github actions",
      "repo",
      "view",
      "open",
      "current",
      "repository"
    ],
    "tags": [
      "repo",
      "view",
      "open",
      "current",
      "repository"
    ]
  },
  {
    "id": "extended-271",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "intermediate",
    "command": "gh workflow list",
    "description": "List workflows",
    "useCase": "list workflows",
    "example": "gh workflow list",
    "keywords": [
      "github actions",
      "workflow",
      "list",
      "workflows"
    ],
    "tags": [
      "workflow",
      "list",
      "workflows"
    ]
  },
  {
    "id": "extended-272",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "intermediate",
    "command": "gh workflow view <workflow>",
    "description": "Inspect a workflow",
    "useCase": "inspect a workflow",
    "example": "gh workflow view <workflow>",
    "keywords": [
      "github actions",
      "workflow",
      "view",
      "inspect"
    ],
    "tags": [
      "workflow",
      "view",
      "inspect"
    ]
  },
  {
    "id": "extended-273",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "intermediate",
    "command": "gh run view <run-id>",
    "description": "Inspect a run",
    "useCase": "inspect a run",
    "example": "gh run view <run-id>",
    "keywords": [
      "github actions",
      "view",
      "inspect"
    ],
    "tags": [
      "view",
      "inspect"
    ]
  },
  {
    "id": "extended-274",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "intermediate",
    "command": "gh run view <run-id> --log",
    "description": "Show workflow logs",
    "useCase": "show workflow logs",
    "example": "gh run view <run-id> --log",
    "keywords": [
      "github actions",
      "view",
      "show",
      "workflow",
      "logs"
    ],
    "tags": [
      "view",
      "show",
      "workflow",
      "logs"
    ]
  },
  {
    "id": "extended-275",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "intermediate",
    "command": "gh run watch <run-id>",
    "description": "Watch a run",
    "useCase": "watch a run",
    "example": "gh run watch <run-id>",
    "keywords": [
      "github actions",
      "watch"
    ],
    "tags": [
      "watch"
    ]
  },
  {
    "id": "extended-276",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "intermediate",
    "command": "gh workflow run <workflow> --ref <branch>",
    "description": "Dispatch a workflow",
    "useCase": "dispatch a workflow",
    "example": "gh workflow run <workflow> --ref <branch>",
    "keywords": [
      "github actions",
      "workflow",
      "branch",
      "dispatch"
    ],
    "tags": [
      "workflow",
      "branch",
      "dispatch"
    ]
  },
  {
    "id": "extended-277",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "intermediate",
    "command": "gh run rerun <run-id>",
    "description": "Rerun a workflow",
    "useCase": "rerun a workflow",
    "example": "gh run rerun <run-id>",
    "keywords": [
      "github actions",
      "rerun",
      "workflow"
    ],
    "tags": [
      "rerun",
      "workflow"
    ]
  },
  {
    "id": "extended-278",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "intermediate",
    "command": "gh run rerun <run-id> --failed",
    "description": "Rerun only failed jobs",
    "useCase": "rerun only failed jobs",
    "example": "gh run rerun <run-id> --failed",
    "keywords": [
      "github actions",
      "rerun",
      "failed",
      "only",
      "jobs"
    ],
    "tags": [
      "rerun",
      "failed",
      "only",
      "jobs"
    ]
  },
  {
    "id": "extended-279",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "intermediate",
    "command": "gh secret list",
    "description": "List repository secrets",
    "useCase": "list repository secrets",
    "example": "gh secret list",
    "keywords": [
      "github actions",
      "secret",
      "list",
      "repository",
      "secrets"
    ],
    "tags": [
      "secret",
      "list",
      "repository",
      "secrets"
    ]
  },
  {
    "id": "extended-280",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "intermediate",
    "command": "gh variable list",
    "description": "List repository variables",
    "useCase": "list repository variables",
    "example": "gh variable list",
    "keywords": [
      "github actions",
      "variable",
      "list",
      "repository",
      "variables"
    ],
    "tags": [
      "variable",
      "list",
      "repository",
      "variables"
    ]
  },
  {
    "id": "extended-281",
    "category": "GitHub Actions",
    "subcategory": "GitHub Actions",
    "level": "intermediate",
    "command": "gh api repos/<owner>/<repo>/actions/runs",
    "description": "Query workflow runs via API",
    "useCase": "query workflow runs via API",
    "example": "gh api repos/<owner>/<repo>/actions/runs",
    "keywords": [
      "github actions",
      "repos",
      "owner",
      "repo",
      "actions",
      "runs",
      "query",
      "workflow"
    ],
    "tags": [
      "repos",
      "owner",
      "repo",
      "actions",
      "runs",
      "query",
      "workflow"
    ]
  },
  {
    "id": "extended-282",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az devops configure --list",
    "description": "Review Azure DevOps CLI defaults",
    "useCase": "review Azure DevOps CLI defaults",
    "example": "az devops configure --list",
    "keywords": [
      "azure devops",
      "devops",
      "configure",
      "list",
      "review",
      "azure",
      "defaults"
    ],
    "tags": [
      "devops",
      "configure",
      "list",
      "review",
      "azure",
      "defaults"
    ]
  },
  {
    "id": "extended-283",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az devops project list -o table",
    "description": "List Azure DevOps projects",
    "useCase": "list Azure DevOps projects",
    "example": "az devops project list -o table",
    "keywords": [
      "azure devops",
      "devops",
      "project",
      "list",
      "table",
      "azure"
    ],
    "tags": [
      "devops",
      "project",
      "list",
      "table",
      "azure"
    ]
  },
  {
    "id": "extended-284",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az pipelines list -o table",
    "description": "List pipelines",
    "useCase": "list pipelines",
    "example": "az pipelines list -o table",
    "keywords": [
      "azure devops",
      "pipelines",
      "list",
      "table"
    ],
    "tags": [
      "pipelines",
      "list",
      "table"
    ]
  },
  {
    "id": "extended-285",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az pipelines show --id <pipeline-id>",
    "description": "Inspect a pipeline",
    "useCase": "inspect a pipeline",
    "example": "az pipelines show --id <pipeline-id>",
    "keywords": [
      "azure devops",
      "pipelines",
      "show",
      "pipeline",
      "inspect"
    ],
    "tags": [
      "pipelines",
      "show",
      "pipeline",
      "inspect"
    ]
  },
  {
    "id": "extended-286",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az pipelines run --id <pipeline-id>",
    "description": "Queue a pipeline",
    "useCase": "queue a pipeline",
    "example": "az pipelines run --id <pipeline-id>",
    "keywords": [
      "azure devops",
      "pipelines",
      "pipeline",
      "queue"
    ],
    "tags": [
      "pipelines",
      "pipeline",
      "queue"
    ]
  },
  {
    "id": "extended-287",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az pipelines runs list --pipeline-ids <pipeline-id> -o table",
    "description": "List recent runs",
    "useCase": "list recent runs",
    "example": "az pipelines runs list --pipeline-ids <pipeline-id> -o table",
    "keywords": [
      "azure devops",
      "pipelines",
      "runs",
      "list",
      "pipeline",
      "table"
    ],
    "tags": [
      "pipelines",
      "runs",
      "list",
      "pipeline",
      "table"
    ]
  },
  {
    "id": "extended-288",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az pipelines runs show --id <run-id>",
    "description": "Inspect a pipeline run",
    "useCase": "inspect a pipeline run",
    "example": "az pipelines runs show --id <run-id>",
    "keywords": [
      "azure devops",
      "pipelines",
      "runs",
      "show",
      "inspect",
      "pipeline"
    ],
    "tags": [
      "pipelines",
      "runs",
      "show",
      "inspect",
      "pipeline"
    ]
  },
  {
    "id": "extended-289",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az pipelines runs artifact list --run-id <run-id>",
    "description": "List run artifacts",
    "useCase": "list run artifacts",
    "example": "az pipelines runs artifact list --run-id <run-id>",
    "keywords": [
      "azure devops",
      "pipelines",
      "runs",
      "artifact",
      "list",
      "artifacts"
    ],
    "tags": [
      "pipelines",
      "runs",
      "artifact",
      "list",
      "artifacts"
    ]
  },
  {
    "id": "extended-290",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az pipelines variable-group list -o table",
    "description": "List variable groups",
    "useCase": "list variable groups",
    "example": "az pipelines variable-group list -o table",
    "keywords": [
      "azure devops",
      "pipelines",
      "variable",
      "group",
      "list",
      "table"
    ],
    "tags": [
      "pipelines",
      "variable",
      "group",
      "list",
      "table"
    ]
  },
  {
    "id": "extended-291",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az repos list -o table",
    "description": "List Azure Repos",
    "useCase": "list Azure Repos",
    "example": "az repos list -o table",
    "keywords": [
      "azure devops",
      "repos",
      "list",
      "table",
      "azure"
    ],
    "tags": [
      "repos",
      "list",
      "table",
      "azure"
    ]
  },
  {
    "id": "extended-292",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az repos show --repository <repo> -p <project>",
    "description": "Inspect a repository",
    "useCase": "inspect a repository",
    "example": "az repos show --repository <repo> -p <project>",
    "keywords": [
      "azure devops",
      "repos",
      "show",
      "repository",
      "repo",
      "project",
      "inspect"
    ],
    "tags": [
      "repos",
      "show",
      "repository",
      "repo",
      "project",
      "inspect"
    ]
  },
  {
    "id": "extended-293",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az repos pr list -p <project> -o table",
    "description": "List pull requests",
    "useCase": "list pull requests",
    "example": "az repos pr list -p <project> -o table",
    "keywords": [
      "azure devops",
      "repos",
      "list",
      "project",
      "table",
      "pull",
      "requests"
    ],
    "tags": [
      "repos",
      "list",
      "project",
      "table",
      "pull",
      "requests"
    ]
  },
  {
    "id": "extended-294",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az boards query --wiql \"SELECT [System.Id] FROM WorkItems\"",
    "description": "Run a work-item query",
    "useCase": "run a work-item query",
    "example": "az boards query --wiql \"SELECT [System.Id] FROM WorkItems\"",
    "keywords": [
      "azure devops",
      "boards",
      "query",
      "wiql",
      "select",
      "system",
      "from",
      "workitems"
    ],
    "tags": [
      "boards",
      "query",
      "wiql",
      "select",
      "system",
      "from",
      "workitems"
    ]
  },
  {
    "id": "extended-295",
    "category": "Azure DevOps",
    "subcategory": "Azure DevOps",
    "level": "intermediate",
    "command": "az devops invoke --area build --resource builds --route-parameters project=<project>",
    "description": "Call a DevOps REST endpoint",
    "useCase": "call a DevOps REST endpoint",
    "example": "az devops invoke --area build --resource builds --route-parameters project=<project>",
    "keywords": [
      "azure devops",
      "devops",
      "invoke",
      "area",
      "build",
      "resource",
      "builds",
      "route"
    ],
    "tags": [
      "devops",
      "invoke",
      "area",
      "build",
      "resource",
      "builds",
      "route"
    ]
  },
  {
    "id": "extended-296",
    "category": "Jenkins",
    "subcategory": "Jenkins",
    "level": "intermediate",
    "command": "curl -s http://<jenkins>/api/json",
    "description": "Check Jenkins API availability",
    "useCase": "check Jenkins API availability",
    "example": "curl -s http://<jenkins>/api/json",
    "keywords": [
      "jenkins",
      "curl",
      "http",
      "json",
      "check",
      "availability"
    ],
    "tags": [
      "curl",
      "http",
      "jenkins",
      "json",
      "check",
      "availability"
    ]
  },
  {
    "id": "extended-297",
    "category": "Jenkins",
    "subcategory": "Jenkins",
    "level": "intermediate",
    "command": "curl -s http://<jenkins>/job/<job>/api/json",
    "description": "Inspect a Jenkins job",
    "useCase": "inspect a Jenkins job",
    "example": "curl -s http://<jenkins>/job/<job>/api/json",
    "keywords": [
      "jenkins",
      "curl",
      "http",
      "json",
      "inspect"
    ],
    "tags": [
      "curl",
      "http",
      "jenkins",
      "json",
      "inspect"
    ]
  },
  {
    "id": "extended-298",
    "category": "Jenkins",
    "subcategory": "Jenkins",
    "level": "intermediate",
    "command": "curl -s http://<jenkins>/job/<job>/lastBuild/api/json",
    "description": "Inspect the latest build",
    "useCase": "inspect the latest build",
    "example": "curl -s http://<jenkins>/job/<job>/lastBuild/api/json",
    "keywords": [
      "jenkins",
      "curl",
      "http",
      "lastbuild",
      "json",
      "inspect",
      "latest"
    ],
    "tags": [
      "curl",
      "http",
      "jenkins",
      "lastbuild",
      "json",
      "inspect",
      "latest"
    ]
  },
  {
    "id": "extended-299",
    "category": "Jenkins",
    "subcategory": "Jenkins",
    "level": "intermediate",
    "command": "curl -s http://<jenkins>/job/<job>/<build>/consoleText",
    "description": "Fetch build console output",
    "useCase": "fetch build console output",
    "example": "curl -s http://<jenkins>/job/<job>/<build>/consoleText",
    "keywords": [
      "jenkins",
      "curl",
      "http",
      "build",
      "consoletext",
      "fetch"
    ],
    "tags": [
      "curl",
      "http",
      "jenkins",
      "build",
      "consoletext",
      "fetch"
    ]
  },
  {
    "id": "extended-300",
    "category": "Jenkins",
    "subcategory": "Jenkins",
    "level": "intermediate",
    "command": "curl -X POST http://<jenkins>/job/<job>/build",
    "description": "Trigger a Jenkins job",
    "useCase": "trigger a Jenkins job",
    "example": "curl -X POST http://<jenkins>/job/<job>/build",
    "keywords": [
      "jenkins",
      "curl",
      "post",
      "http",
      "build",
      "trigger"
    ],
    "tags": [
      "curl",
      "post",
      "http",
      "jenkins",
      "build",
      "trigger"
    ]
  },
  {
    "id": "extended-301",
    "category": "Jenkins",
    "subcategory": "Jenkins",
    "level": "advanced",
    "command": "curl -X POST http://<jenkins>/job/<job>/<build>/stop",
    "description": "Stop a Jenkins build",
    "useCase": "stop a Jenkins build",
    "example": "curl -X POST http://<jenkins>/job/<job>/<build>/stop",
    "keywords": [
      "jenkins",
      "curl",
      "post",
      "http",
      "build",
      "stop"
    ],
    "tags": [
      "curl",
      "post",
      "http",
      "jenkins",
      "build",
      "stop"
    ]
  },
  {
    "id": "extended-302",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "intermediate",
    "command": "aws configure list",
    "description": "Show AWS CLI configuration",
    "useCase": "show AWS CLI configuration",
    "example": "aws configure list",
    "keywords": [
      "aws cli",
      "configure",
      "list",
      "show",
      "configuration"
    ],
    "tags": [
      "configure",
      "list",
      "show",
      "configuration"
    ]
  },
  {
    "id": "extended-303",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "intermediate",
    "command": "aws ec2 describe-instances --filters Name=instance-state-name,Values=running",
    "description": "List running EC2 instances",
    "useCase": "list running EC2 instances",
    "example": "aws ec2 describe-instances --filters Name=instance-state-name,Values=running",
    "keywords": [
      "aws cli",
      "describe",
      "instances",
      "filters",
      "name",
      "instance",
      "state"
    ],
    "tags": [
      "describe",
      "instances",
      "filters",
      "name",
      "instance",
      "state"
    ]
  },
  {
    "id": "extended-304",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "intermediate",
    "command": "aws ec2 describe-security-groups --output table",
    "description": "Inspect security groups",
    "useCase": "inspect security groups",
    "example": "aws ec2 describe-security-groups --output table",
    "keywords": [
      "aws cli",
      "describe",
      "security",
      "groups",
      "output",
      "table",
      "inspect"
    ],
    "tags": [
      "describe",
      "security",
      "groups",
      "output",
      "table",
      "inspect"
    ]
  },
  {
    "id": "extended-305",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "intermediate",
    "command": "aws eks list-clusters",
    "description": "List EKS clusters",
    "useCase": "list EKS clusters",
    "example": "aws eks list-clusters",
    "keywords": [
      "aws cli",
      "list",
      "clusters"
    ],
    "tags": [
      "list",
      "clusters"
    ]
  },
  {
    "id": "extended-306",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "intermediate",
    "command": "aws eks describe-cluster --name <cluster>",
    "description": "Inspect an EKS cluster",
    "useCase": "inspect an EKS cluster",
    "example": "aws eks describe-cluster --name <cluster>",
    "keywords": [
      "aws cli",
      "describe",
      "cluster",
      "name",
      "inspect"
    ],
    "tags": [
      "describe",
      "cluster",
      "name",
      "inspect"
    ]
  },
  {
    "id": "extended-307",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "intermediate",
    "command": "aws eks update-kubeconfig --name <cluster> --region <region>",
    "description": "Configure kubectl for EKS",
    "useCase": "configure kubectl for EKS",
    "example": "aws eks update-kubeconfig --name <cluster> --region <region>",
    "keywords": [
      "aws cli",
      "update",
      "kubeconfig",
      "name",
      "cluster",
      "region",
      "configure"
    ],
    "tags": [
      "update",
      "kubeconfig",
      "name",
      "cluster",
      "region",
      "configure"
    ]
  },
  {
    "id": "extended-308",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "intermediate",
    "command": "aws s3 ls",
    "description": "List S3 buckets",
    "useCase": "list S3 buckets",
    "example": "aws s3 ls",
    "keywords": [
      "aws cli",
      "list",
      "buckets"
    ],
    "tags": [
      "list",
      "buckets"
    ]
  },
  {
    "id": "extended-309",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "intermediate",
    "command": "aws s3 ls s3://<bucket>/ --recursive --human-readable --summarize",
    "description": "Inspect S3 object usage",
    "useCase": "inspect S3 object usage",
    "example": "aws s3 ls s3://<bucket>/ --recursive --human-readable --summarize",
    "keywords": [
      "aws cli",
      "bucket",
      "recursive",
      "human",
      "readable",
      "summarize",
      "inspect",
      "object"
    ],
    "tags": [
      "bucket",
      "recursive",
      "human",
      "readable",
      "summarize",
      "inspect",
      "object"
    ]
  },
  {
    "id": "extended-310",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "intermediate",
    "command": "aws cloudwatch list-metrics",
    "description": "List CloudWatch metrics",
    "useCase": "list CloudWatch metrics",
    "example": "aws cloudwatch list-metrics",
    "keywords": [
      "aws cli",
      "cloudwatch",
      "list",
      "metrics"
    ],
    "tags": [
      "cloudwatch",
      "list",
      "metrics"
    ]
  },
  {
    "id": "extended-311",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "intermediate",
    "command": "aws logs describe-log-groups",
    "description": "List CloudWatch log groups",
    "useCase": "list CloudWatch log groups",
    "example": "aws logs describe-log-groups",
    "keywords": [
      "aws cli",
      "logs",
      "describe",
      "groups",
      "list",
      "cloudwatch"
    ],
    "tags": [
      "logs",
      "describe",
      "groups",
      "list",
      "cloudwatch"
    ]
  },
  {
    "id": "extended-312",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "intermediate",
    "command": "aws logs tail <log-group> --follow",
    "description": "Follow CloudWatch logs",
    "useCase": "follow CloudWatch logs",
    "example": "aws logs tail <log-group> --follow",
    "keywords": [
      "aws cli",
      "logs",
      "tail",
      "group",
      "follow",
      "cloudwatch"
    ],
    "tags": [
      "logs",
      "tail",
      "group",
      "follow",
      "cloudwatch"
    ]
  },
  {
    "id": "extended-313",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "intermediate",
    "command": "aws iam get-user",
    "description": "Inspect current IAM user",
    "useCase": "inspect current IAM user",
    "example": "aws iam get-user",
    "keywords": [
      "aws cli",
      "user",
      "inspect",
      "current"
    ],
    "tags": [
      "user",
      "inspect",
      "current"
    ]
  },
  {
    "id": "extended-314",
    "category": "AWS CLI",
    "subcategory": "AWS CLI",
    "level": "intermediate",
    "command": "aws route53 list-hosted-zones",
    "description": "List Route 53 zones",
    "useCase": "list Route 53 zones",
    "example": "aws route53 list-hosted-zones",
    "keywords": [
      "aws cli",
      "route53",
      "list",
      "hosted",
      "zones",
      "route"
    ],
    "tags": [
      "route53",
      "list",
      "hosted",
      "zones",
      "route"
    ]
  },
  {
    "id": "extended-315",
    "category": "GCP CLI",
    "subcategory": "GCP CLI",
    "level": "intermediate",
    "command": "gcloud version",
    "description": "Show gcloud version",
    "useCase": "show gcloud version",
    "example": "gcloud version",
    "keywords": [
      "gcp cli",
      "gcloud",
      "version",
      "show"
    ],
    "tags": [
      "gcloud",
      "version",
      "show"
    ]
  },
  {
    "id": "extended-316",
    "category": "GCP CLI",
    "subcategory": "GCP CLI",
    "level": "intermediate",
    "command": "gcloud auth list",
    "description": "List authenticated accounts",
    "useCase": "list authenticated accounts",
    "example": "gcloud auth list",
    "keywords": [
      "gcp cli",
      "gcloud",
      "auth",
      "list",
      "authenticated",
      "accounts"
    ],
    "tags": [
      "gcloud",
      "auth",
      "list",
      "authenticated",
      "accounts"
    ]
  },
  {
    "id": "extended-317",
    "category": "GCP CLI",
    "subcategory": "GCP CLI",
    "level": "intermediate",
    "command": "gcloud config list",
    "description": "Show active configuration",
    "useCase": "show active configuration",
    "example": "gcloud config list",
    "keywords": [
      "gcp cli",
      "gcloud",
      "config",
      "list",
      "show",
      "active",
      "configuration"
    ],
    "tags": [
      "gcloud",
      "config",
      "list",
      "show",
      "active",
      "configuration"
    ]
  },
  {
    "id": "extended-318",
    "category": "GCP CLI",
    "subcategory": "GCP CLI",
    "level": "intermediate",
    "command": "gcloud config set project <project>",
    "description": "Switch GCP project",
    "useCase": "switch GCP project",
    "example": "gcloud config set project <project>",
    "keywords": [
      "gcp cli",
      "gcloud",
      "config",
      "project",
      "switch"
    ],
    "tags": [
      "gcloud",
      "config",
      "project",
      "switch"
    ]
  },
  {
    "id": "extended-319",
    "category": "GCP CLI",
    "subcategory": "GCP CLI",
    "level": "intermediate",
    "command": "gcloud compute instances list",
    "description": "List Compute Engine instances",
    "useCase": "list Compute Engine instances",
    "example": "gcloud compute instances list",
    "keywords": [
      "gcp cli",
      "gcloud",
      "compute",
      "instances",
      "list",
      "engine"
    ],
    "tags": [
      "gcloud",
      "compute",
      "instances",
      "list",
      "engine"
    ]
  },
  {
    "id": "extended-320",
    "category": "GCP CLI",
    "subcategory": "GCP CLI",
    "level": "intermediate",
    "command": "gcloud compute instances describe <instance> --zone <zone>",
    "description": "Inspect a VM",
    "useCase": "inspect a VM",
    "example": "gcloud compute instances describe <instance> --zone <zone>",
    "keywords": [
      "gcp cli",
      "gcloud",
      "compute",
      "instances",
      "describe",
      "instance",
      "zone"
    ],
    "tags": [
      "gcloud",
      "compute",
      "instances",
      "describe",
      "instance",
      "zone"
    ]
  },
  {
    "id": "extended-321",
    "category": "GCP CLI",
    "subcategory": "GCP CLI",
    "level": "intermediate",
    "command": "gcloud container clusters list",
    "description": "List GKE clusters",
    "useCase": "list GKE clusters",
    "example": "gcloud container clusters list",
    "keywords": [
      "gcp cli",
      "gcloud",
      "container",
      "clusters",
      "list"
    ],
    "tags": [
      "gcloud",
      "container",
      "clusters",
      "list"
    ]
  },
  {
    "id": "extended-322",
    "category": "GCP CLI",
    "subcategory": "GCP CLI",
    "level": "intermediate",
    "command": "gcloud container clusters get-credentials <cluster> --region <region>",
    "description": "Configure kubectl for GKE",
    "useCase": "configure kubectl for GKE",
    "example": "gcloud container clusters get-credentials <cluster> --region <region>",
    "keywords": [
      "gcp cli",
      "gcloud",
      "container",
      "clusters",
      "credentials",
      "cluster",
      "region"
    ],
    "tags": [
      "gcloud",
      "container",
      "clusters",
      "credentials",
      "cluster",
      "region"
    ]
  },
  {
    "id": "extended-323",
    "category": "GCP CLI",
    "subcategory": "GCP CLI",
    "level": "intermediate",
    "command": "gcloud logging read \"severity>=ERROR\" --limit 50",
    "description": "Search recent GCP logs",
    "useCase": "search recent GCP logs",
    "example": "gcloud logging read \"severity>=ERROR\" --limit 50",
    "keywords": [
      "gcp cli",
      "gcloud",
      "logging",
      "read",
      "severity",
      "error",
      "limit",
      "search"
    ],
    "tags": [
      "gcloud",
      "logging",
      "read",
      "severity",
      "error",
      "limit",
      "search"
    ]
  },
  {
    "id": "extended-324",
    "category": "GCP CLI",
    "subcategory": "GCP CLI",
    "level": "intermediate",
    "command": "gcloud monitoring metrics list",
    "description": "List monitoring metrics",
    "useCase": "list monitoring metrics",
    "example": "gcloud monitoring metrics list",
    "keywords": [
      "gcp cli",
      "gcloud",
      "monitoring",
      "metrics",
      "list"
    ],
    "tags": [
      "gcloud",
      "monitoring",
      "metrics",
      "list"
    ]
  },
  {
    "id": "extended-325",
    "category": "GCP CLI",
    "subcategory": "GCP CLI",
    "level": "intermediate",
    "command": "gcloud artifacts repositories list",
    "description": "List Artifact Registry repositories",
    "useCase": "list Artifact Registry repositories",
    "example": "gcloud artifacts repositories list",
    "keywords": [
      "gcp cli",
      "gcloud",
      "artifacts",
      "repositories",
      "list",
      "artifact",
      "registry"
    ],
    "tags": [
      "gcloud",
      "artifacts",
      "repositories",
      "list",
      "artifact",
      "registry"
    ]
  },
  {
    "id": "extended-326",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "ip addr show",
    "description": "Inspect local network interfaces",
    "useCase": "inspect local network interfaces",
    "example": "ip addr show",
    "keywords": [
      "networking",
      "addr",
      "show",
      "inspect",
      "local",
      "network",
      "interfaces"
    ],
    "tags": [
      "addr",
      "show",
      "inspect",
      "local",
      "network",
      "interfaces"
    ]
  },
  {
    "id": "extended-327",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "ip -br addr",
    "description": "Show concise interface addresses",
    "useCase": "show concise interface addresses",
    "example": "ip -br addr",
    "keywords": [
      "networking",
      "addr",
      "show",
      "concise",
      "interface",
      "addresses"
    ],
    "tags": [
      "addr",
      "show",
      "concise",
      "interface",
      "addresses"
    ]
  },
  {
    "id": "extended-328",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "ip route get 8.8.8.8",
    "description": "See the route selected for a destination",
    "useCase": "see the route selected for a destination",
    "example": "ip route get 8.8.8.8",
    "keywords": [
      "networking",
      "route",
      "selected",
      "destination"
    ],
    "tags": [
      "route",
      "selected",
      "destination"
    ]
  },
  {
    "id": "extended-329",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "ip neigh",
    "description": "Inspect neighbor cache",
    "useCase": "inspect neighbor cache",
    "example": "ip neigh",
    "keywords": [
      "networking",
      "neigh",
      "inspect",
      "neighbor",
      "cache"
    ],
    "tags": [
      "neigh",
      "inspect",
      "neighbor",
      "cache"
    ]
  },
  {
    "id": "extended-330",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "ss -lntp",
    "description": "List listening TCP ports and processes",
    "useCase": "list listening TCP ports and processes",
    "example": "ss -lntp",
    "keywords": [
      "networking",
      "lntp",
      "list",
      "listening",
      "ports",
      "processes"
    ],
    "tags": [
      "lntp",
      "list",
      "listening",
      "ports",
      "processes"
    ]
  },
  {
    "id": "extended-331",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "ss -s",
    "description": "Show socket summary",
    "useCase": "show socket summary",
    "example": "ss -s",
    "keywords": [
      "networking",
      "show",
      "socket",
      "summary"
    ],
    "tags": [
      "show",
      "socket",
      "summary"
    ]
  },
  {
    "id": "extended-332",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "curl -I https://<host>",
    "description": "Inspect HTTP response headers",
    "useCase": "inspect HTTP response headers",
    "example": "curl -I https://<host>",
    "keywords": [
      "networking",
      "curl",
      "https",
      "host",
      "inspect",
      "http",
      "response",
      "headers"
    ],
    "tags": [
      "curl",
      "https",
      "host",
      "inspect",
      "http",
      "response",
      "headers"
    ]
  },
  {
    "id": "extended-333",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "curl -vk https://<host>",
    "description": "Debug TLS and HTTP connectivity",
    "useCase": "debug TLS and HTTP connectivity",
    "example": "curl -vk https://<host>",
    "keywords": [
      "networking",
      "curl",
      "https",
      "host",
      "debug",
      "http",
      "connectivity"
    ],
    "tags": [
      "curl",
      "https",
      "host",
      "debug",
      "http",
      "connectivity"
    ]
  },
  {
    "id": "extended-334",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "curl --connect-timeout 5 -v https://<host>",
    "description": "Debug connection establishment",
    "useCase": "debug connection establishment",
    "example": "curl --connect-timeout 5 -v https://<host>",
    "keywords": [
      "networking",
      "curl",
      "connect",
      "timeout",
      "https",
      "host",
      "debug",
      "connection"
    ],
    "tags": [
      "curl",
      "connect",
      "timeout",
      "https",
      "host",
      "debug",
      "connection"
    ]
  },
  {
    "id": "extended-335",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "dig +short <host>",
    "description": "Resolve a hostname",
    "useCase": "resolve a hostname",
    "example": "dig +short <host>",
    "keywords": [
      "networking",
      "short",
      "host",
      "resolve",
      "hostname"
    ],
    "tags": [
      "short",
      "host",
      "resolve",
      "hostname"
    ]
  },
  {
    "id": "extended-336",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "dig +trace <host>",
    "description": "Trace DNS delegation",
    "useCase": "trace DNS delegation",
    "example": "dig +trace <host>",
    "keywords": [
      "networking",
      "trace",
      "host",
      "delegation"
    ],
    "tags": [
      "trace",
      "host",
      "delegation"
    ]
  },
  {
    "id": "extended-337",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "nslookup <host>",
    "description": "Perform a DNS lookup",
    "useCase": "perform a DNS lookup",
    "example": "nslookup <host>",
    "keywords": [
      "networking",
      "nslookup",
      "host",
      "perform",
      "lookup"
    ],
    "tags": [
      "nslookup",
      "host",
      "perform",
      "lookup"
    ]
  },
  {
    "id": "extended-338",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "host <host>",
    "description": "Perform a simple DNS lookup",
    "useCase": "perform a simple DNS lookup",
    "example": "host <host>",
    "keywords": [
      "networking",
      "host",
      "perform",
      "simple",
      "lookup"
    ],
    "tags": [
      "host",
      "perform",
      "simple",
      "lookup"
    ]
  },
  {
    "id": "extended-339",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "traceroute <host>",
    "description": "Trace network path",
    "useCase": "trace network path",
    "example": "traceroute <host>",
    "keywords": [
      "networking",
      "traceroute",
      "host",
      "trace",
      "network",
      "path"
    ],
    "tags": [
      "traceroute",
      "host",
      "trace",
      "network",
      "path"
    ]
  },
  {
    "id": "extended-340",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "mtr -rw <host>",
    "description": "Combine ping and traceroute",
    "useCase": "combine ping and traceroute",
    "example": "mtr -rw <host>",
    "keywords": [
      "networking",
      "host",
      "combine",
      "ping",
      "traceroute"
    ],
    "tags": [
      "host",
      "combine",
      "ping",
      "traceroute"
    ]
  },
  {
    "id": "extended-341",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "ping -c 4 <host>",
    "description": "Check reachability",
    "useCase": "check reachability",
    "example": "ping -c 4 <host>",
    "keywords": [
      "networking",
      "ping",
      "host",
      "check",
      "reachability"
    ],
    "tags": [
      "ping",
      "host",
      "check",
      "reachability"
    ]
  },
  {
    "id": "extended-342",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "openssl s_client -connect <host>:443 -servername <host>",
    "description": "Inspect a TLS endpoint",
    "useCase": "inspect a TLS endpoint",
    "example": "openssl s_client -connect <host>:443 -servername <host>",
    "keywords": [
      "networking",
      "openssl",
      "client",
      "connect",
      "host",
      "servername",
      "inspect"
    ],
    "tags": [
      "openssl",
      "client",
      "connect",
      "host",
      "servername",
      "inspect"
    ]
  },
  {
    "id": "extended-343",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "tcpdump -ni any port 443",
    "description": "Capture HTTPS traffic",
    "useCase": "capture HTTPS traffic",
    "example": "tcpdump -ni any port 443",
    "keywords": [
      "networking",
      "tcpdump",
      "port",
      "capture",
      "https",
      "traffic"
    ],
    "tags": [
      "tcpdump",
      "port",
      "capture",
      "https",
      "traffic"
    ]
  },
  {
    "id": "extended-344",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "ethtool <interface>",
    "description": "Inspect NIC settings",
    "useCase": "inspect NIC settings",
    "example": "ethtool <interface>",
    "keywords": [
      "networking",
      "ethtool",
      "interface",
      "inspect",
      "settings"
    ],
    "tags": [
      "ethtool",
      "interface",
      "inspect",
      "settings"
    ]
  },
  {
    "id": "extended-345",
    "category": "Networking",
    "subcategory": "Networking",
    "level": "intermediate",
    "command": "arp -an",
    "description": "Inspect ARP table",
    "useCase": "inspect ARP table",
    "example": "arp -an",
    "keywords": [
      "networking",
      "inspect",
      "table"
    ],
    "tags": [
      "inspect",
      "table"
    ]
  },
  {
    "id": "extended-346",
    "category": "Nginx",
    "subcategory": "Nginx",
    "level": "intermediate",
    "command": "nginx -t",
    "description": "Validate Nginx configuration",
    "useCase": "validate Nginx configuration",
    "example": "nginx -t",
    "keywords": [
      "nginx",
      "validate",
      "configuration"
    ],
    "tags": [
      "nginx",
      "validate",
      "configuration"
    ]
  },
  {
    "id": "extended-347",
    "category": "Nginx",
    "subcategory": "Nginx",
    "level": "intermediate",
    "command": "nginx -T",
    "description": "Dump active Nginx configuration",
    "useCase": "dump active Nginx configuration",
    "example": "nginx -T",
    "keywords": [
      "nginx",
      "dump",
      "active",
      "configuration"
    ],
    "tags": [
      "nginx",
      "dump",
      "active",
      "configuration"
    ]
  },
  {
    "id": "extended-348",
    "category": "Nginx",
    "subcategory": "Nginx",
    "level": "intermediate",
    "command": "nginx -v",
    "description": "Show Nginx version",
    "useCase": "show Nginx version",
    "example": "nginx -v",
    "keywords": [
      "nginx",
      "show",
      "version"
    ],
    "tags": [
      "nginx",
      "show",
      "version"
    ]
  },
  {
    "id": "extended-349",
    "category": "Nginx",
    "subcategory": "Nginx",
    "level": "intermediate",
    "command": "nginx -V",
    "description": "Show Nginx build options",
    "useCase": "show Nginx build options",
    "example": "nginx -V",
    "keywords": [
      "nginx",
      "show",
      "build",
      "options"
    ],
    "tags": [
      "nginx",
      "show",
      "build",
      "options"
    ]
  },
  {
    "id": "extended-350",
    "category": "Nginx",
    "subcategory": "Nginx",
    "level": "intermediate",
    "command": "systemctl status nginx",
    "description": "Check Nginx status",
    "useCase": "check Nginx status",
    "example": "systemctl status nginx",
    "keywords": [
      "nginx",
      "systemctl",
      "status",
      "check"
    ],
    "tags": [
      "systemctl",
      "status",
      "nginx",
      "check"
    ]
  },
  {
    "id": "extended-351",
    "category": "Nginx",
    "subcategory": "Nginx",
    "level": "intermediate",
    "command": "systemctl reload nginx",
    "description": "Reload Nginx safely",
    "useCase": "reload Nginx safely",
    "example": "systemctl reload nginx",
    "keywords": [
      "nginx",
      "systemctl",
      "reload",
      "safely"
    ],
    "tags": [
      "systemctl",
      "reload",
      "nginx",
      "safely"
    ]
  },
  {
    "id": "extended-352",
    "category": "Nginx",
    "subcategory": "Nginx",
    "level": "intermediate",
    "command": "journalctl -u nginx --since \"30 min ago\"",
    "description": "Inspect recent Nginx logs",
    "useCase": "inspect recent Nginx logs",
    "example": "journalctl -u nginx --since \"30 min ago\"",
    "keywords": [
      "nginx",
      "journalctl",
      "since",
      "inspect",
      "recent",
      "logs"
    ],
    "tags": [
      "journalctl",
      "nginx",
      "since",
      "inspect",
      "recent",
      "logs"
    ]
  },
  {
    "id": "extended-353",
    "category": "Nginx",
    "subcategory": "Nginx",
    "level": "intermediate",
    "command": "tail -f /var/log/nginx/access.log",
    "description": "Follow access logs",
    "useCase": "follow access logs",
    "example": "tail -f /var/log/nginx/access.log",
    "keywords": [
      "nginx",
      "tail",
      "access",
      "follow",
      "logs"
    ],
    "tags": [
      "tail",
      "nginx",
      "access",
      "follow",
      "logs"
    ]
  },
  {
    "id": "extended-354",
    "category": "Nginx",
    "subcategory": "Nginx",
    "level": "intermediate",
    "command": "tail -f /var/log/nginx/error.log",
    "description": "Follow error logs",
    "useCase": "follow error logs",
    "example": "tail -f /var/log/nginx/error.log",
    "keywords": [
      "nginx",
      "tail",
      "error",
      "follow",
      "logs"
    ],
    "tags": [
      "tail",
      "nginx",
      "error",
      "follow",
      "logs"
    ]
  },
  {
    "id": "extended-355",
    "category": "Nginx",
    "subcategory": "Nginx",
    "level": "intermediate",
    "command": "curl -I http://127.0.0.1",
    "description": "Test local Nginx",
    "useCase": "test local Nginx",
    "example": "curl -I http://127.0.0.1",
    "keywords": [
      "nginx",
      "curl",
      "http",
      "test",
      "local"
    ],
    "tags": [
      "curl",
      "http",
      "test",
      "local",
      "nginx"
    ]
  },
  {
    "id": "extended-356",
    "category": "SSH",
    "subcategory": "SSH",
    "level": "intermediate",
    "command": "ssh -v user@host",
    "description": "Debug SSH connection",
    "useCase": "debug SSH connection",
    "example": "ssh -v user@host",
    "keywords": [
      "ssh",
      "user",
      "host",
      "debug",
      "connection"
    ],
    "tags": [
      "user",
      "host",
      "debug",
      "connection"
    ]
  },
  {
    "id": "extended-357",
    "category": "SSH",
    "subcategory": "SSH",
    "level": "intermediate",
    "command": "ssh -o ConnectTimeout=5 user@host",
    "description": "Fail fast on connection problems",
    "useCase": "fail fast on connection problems",
    "example": "ssh -o ConnectTimeout=5 user@host",
    "keywords": [
      "ssh",
      "connecttimeout",
      "user",
      "host",
      "fail",
      "fast",
      "connection",
      "problems"
    ],
    "tags": [
      "connecttimeout",
      "user",
      "host",
      "fail",
      "fast",
      "connection",
      "problems"
    ]
  },
  {
    "id": "extended-358",
    "category": "SSH",
    "subcategory": "SSH",
    "level": "intermediate",
    "command": "ssh-keygen -lf ~/.ssh/id_ed25519.pub",
    "description": "Show public-key fingerprint",
    "useCase": "show public-key fingerprint",
    "example": "ssh-keygen -lf ~/.ssh/id_ed25519.pub",
    "keywords": [
      "ssh",
      "keygen",
      "ed25519",
      "show",
      "public",
      "fingerprint"
    ],
    "tags": [
      "keygen",
      "ed25519",
      "show",
      "public",
      "fingerprint"
    ]
  },
  {
    "id": "extended-359",
    "category": "SSH",
    "subcategory": "SSH",
    "level": "intermediate",
    "command": "ssh-add -l",
    "description": "List SSH agent keys",
    "useCase": "list SSH agent keys",
    "example": "ssh-add -l",
    "keywords": [
      "ssh",
      "list",
      "agent",
      "keys"
    ],
    "tags": [
      "list",
      "agent",
      "keys"
    ]
  },
  {
    "id": "extended-360",
    "category": "SSH",
    "subcategory": "SSH",
    "level": "intermediate",
    "command": "ssh-add ~/.ssh/id_ed25519",
    "description": "Load a key into the SSH agent",
    "useCase": "load a key into the SSH agent",
    "example": "ssh-add ~/.ssh/id_ed25519",
    "keywords": [
      "ssh",
      "ed25519",
      "load",
      "into",
      "agent"
    ],
    "tags": [
      "ed25519",
      "load",
      "into",
      "agent"
    ]
  },
  {
    "id": "extended-361",
    "category": "SSH",
    "subcategory": "SSH",
    "level": "intermediate",
    "command": "scp -r ./dir user@host:/path",
    "description": "Copy a directory over SSH",
    "useCase": "copy a directory over SSH",
    "example": "scp -r ./dir user@host:/path",
    "keywords": [
      "ssh",
      "user",
      "host",
      "path",
      "copy",
      "directory",
      "over"
    ],
    "tags": [
      "user",
      "host",
      "path",
      "copy",
      "directory",
      "over"
    ]
  },
  {
    "id": "extended-362",
    "category": "SSH",
    "subcategory": "SSH",
    "level": "intermediate",
    "command": "rsync -avz -e ssh ./dir/ user@host:/path/",
    "description": "Synchronize files over SSH",
    "useCase": "synchronize files over SSH",
    "example": "rsync -avz -e ssh ./dir/ user@host:/path/",
    "keywords": [
      "ssh",
      "rsync",
      "user",
      "host",
      "path",
      "synchronize",
      "files",
      "over"
    ],
    "tags": [
      "rsync",
      "user",
      "host",
      "path",
      "synchronize",
      "files",
      "over"
    ]
  },
  {
    "id": "extended-363",
    "category": "SSH",
    "subcategory": "SSH",
    "level": "intermediate",
    "command": "ssh -L 8080:127.0.0.1:8080 user@host",
    "description": "Create a local SSH tunnel",
    "useCase": "create a local SSH tunnel",
    "example": "ssh -L 8080:127.0.0.1:8080 user@host",
    "keywords": [
      "ssh",
      "8080",
      "user",
      "host",
      "create",
      "local",
      "tunnel"
    ],
    "tags": [
      "8080",
      "user",
      "host",
      "create",
      "local",
      "tunnel"
    ]
  },
  {
    "id": "extended-364",
    "category": "SSH",
    "subcategory": "SSH",
    "level": "intermediate",
    "command": "ssh -o ServerAliveInterval=30 user@host",
    "description": "Keep long SSH sessions alive",
    "useCase": "keep long SSH sessions alive",
    "example": "ssh -o ServerAliveInterval=30 user@host",
    "keywords": [
      "ssh",
      "serveraliveinterval",
      "user",
      "host",
      "keep",
      "long",
      "sessions",
      "alive"
    ],
    "tags": [
      "serveraliveinterval",
      "user",
      "host",
      "keep",
      "long",
      "sessions",
      "alive"
    ]
  },
  {
    "id": "extended-365",
    "category": "TLS/OpenSSL",
    "subcategory": "TLS/OpenSSL",
    "level": "intermediate",
    "command": "openssl version -a",
    "description": "Show OpenSSL version",
    "useCase": "show OpenSSL version",
    "example": "openssl version -a",
    "keywords": [
      "tls/openssl",
      "openssl",
      "version",
      "show"
    ],
    "tags": [
      "openssl",
      "version",
      "show"
    ]
  },
  {
    "id": "extended-366",
    "category": "TLS/OpenSSL",
    "subcategory": "TLS/OpenSSL",
    "level": "intermediate",
    "command": "openssl s_client -connect <host>:443 -servername <host> -showcerts",
    "description": "Inspect certificate chain",
    "useCase": "inspect certificate chain",
    "example": "openssl s_client -connect <host>:443 -servername <host> -showcerts",
    "keywords": [
      "tls/openssl",
      "openssl",
      "client",
      "connect",
      "host",
      "servername",
      "showcerts"
    ],
    "tags": [
      "openssl",
      "client",
      "connect",
      "host",
      "servername",
      "showcerts"
    ]
  },
  {
    "id": "extended-367",
    "category": "TLS/OpenSSL",
    "subcategory": "TLS/OpenSSL",
    "level": "intermediate",
    "command": "openssl x509 -in cert.pem -noout -text",
    "description": "Inspect a certificate",
    "useCase": "inspect a certificate",
    "example": "openssl x509 -in cert.pem -noout -text",
    "keywords": [
      "tls/openssl",
      "openssl",
      "x509",
      "cert",
      "noout",
      "text",
      "inspect",
      "certificate"
    ],
    "tags": [
      "openssl",
      "x509",
      "cert",
      "noout",
      "text",
      "inspect",
      "certificate"
    ]
  },
  {
    "id": "extended-368",
    "category": "TLS/OpenSSL",
    "subcategory": "TLS/OpenSSL",
    "level": "intermediate",
    "command": "openssl x509 -in cert.pem -noout -dates",
    "description": "Check certificate dates",
    "useCase": "check certificate dates",
    "example": "openssl x509 -in cert.pem -noout -dates",
    "keywords": [
      "tls/openssl",
      "openssl",
      "x509",
      "cert",
      "noout",
      "dates",
      "check",
      "certificate"
    ],
    "tags": [
      "openssl",
      "x509",
      "cert",
      "noout",
      "dates",
      "check",
      "certificate"
    ]
  },
  {
    "id": "extended-369",
    "category": "TLS/OpenSSL",
    "subcategory": "TLS/OpenSSL",
    "level": "intermediate",
    "command": "openssl x509 -in cert.pem -noout -issuer -subject",
    "description": "Check certificate identity",
    "useCase": "check certificate identity",
    "example": "openssl x509 -in cert.pem -noout -issuer -subject",
    "keywords": [
      "tls/openssl",
      "openssl",
      "x509",
      "cert",
      "noout",
      "issuer",
      "subject",
      "check"
    ],
    "tags": [
      "openssl",
      "x509",
      "cert",
      "noout",
      "issuer",
      "subject",
      "check"
    ]
  },
  {
    "id": "extended-370",
    "category": "TLS/OpenSSL",
    "subcategory": "TLS/OpenSSL",
    "level": "intermediate",
    "command": "openssl x509 -in cert.pem -noout -fingerprint -sha256",
    "description": "Show certificate fingerprint",
    "useCase": "show certificate fingerprint",
    "example": "openssl x509 -in cert.pem -noout -fingerprint -sha256",
    "keywords": [
      "tls/openssl",
      "openssl",
      "x509",
      "cert",
      "noout",
      "fingerprint",
      "sha256",
      "show"
    ],
    "tags": [
      "openssl",
      "x509",
      "cert",
      "noout",
      "fingerprint",
      "sha256",
      "show"
    ]
  },
  {
    "id": "extended-371",
    "category": "TLS/OpenSSL",
    "subcategory": "TLS/OpenSSL",
    "level": "intermediate",
    "command": "openssl verify -CAfile ca.pem cert.pem",
    "description": "Verify a certificate",
    "useCase": "verify a certificate",
    "example": "openssl verify -CAfile ca.pem cert.pem",
    "keywords": [
      "tls/openssl",
      "openssl",
      "verify",
      "cafile",
      "cert",
      "certificate"
    ],
    "tags": [
      "openssl",
      "verify",
      "cafile",
      "cert",
      "certificate"
    ]
  },
  {
    "id": "extended-372",
    "category": "TLS/OpenSSL",
    "subcategory": "TLS/OpenSSL",
    "level": "intermediate",
    "command": "openssl req -new -newkey rsa:2048 -nodes -keyout key.pem -out csr.pem",
    "description": "Generate a CSR",
    "useCase": "generate a CSR",
    "example": "openssl req -new -newkey rsa:2048 -nodes -keyout key.pem -out csr.pem",
    "keywords": [
      "tls/openssl",
      "openssl",
      "newkey",
      "2048",
      "nodes",
      "keyout",
      "generate"
    ],
    "tags": [
      "openssl",
      "newkey",
      "2048",
      "nodes",
      "keyout",
      "generate"
    ]
  },
  {
    "id": "extended-373",
    "category": "TLS/OpenSSL",
    "subcategory": "TLS/OpenSSL",
    "level": "intermediate",
    "command": "openssl pkcs12 -info -in bundle.p12 -noout",
    "description": "Inspect a PKCS#12 bundle",
    "useCase": "inspect a PKCS#12 bundle",
    "example": "openssl pkcs12 -info -in bundle.p12 -noout",
    "keywords": [
      "tls/openssl",
      "openssl",
      "pkcs12",
      "info",
      "bundle",
      "noout",
      "inspect",
      "pkcs"
    ],
    "tags": [
      "openssl",
      "pkcs12",
      "info",
      "bundle",
      "noout",
      "inspect",
      "pkcs"
    ]
  },
  {
    "id": "extended-374",
    "category": "TLS/OpenSSL",
    "subcategory": "TLS/OpenSSL",
    "level": "intermediate",
    "command": "curl -vk https://<host>",
    "description": "Debug TLS negotiation",
    "useCase": "debug TLS negotiation",
    "example": "curl -vk https://<host>",
    "keywords": [
      "tls/openssl",
      "curl",
      "https",
      "host",
      "debug",
      "negotiation"
    ],
    "tags": [
      "curl",
      "https",
      "host",
      "debug",
      "negotiation"
    ]
  },
  {
    "id": "extended-375",
    "category": "Prometheus",
    "subcategory": "Prometheus",
    "level": "intermediate",
    "command": "curl -s http://<prometheus>:9090/-/healthy",
    "description": "Check Prometheus health",
    "useCase": "check Prometheus health",
    "example": "curl -s http://<prometheus>:9090/-/healthy",
    "keywords": [
      "prometheus",
      "curl",
      "http",
      "9090",
      "healthy",
      "check"
    ],
    "tags": [
      "curl",
      "http",
      "prometheus",
      "9090",
      "healthy",
      "check"
    ]
  },
  {
    "id": "extended-376",
    "category": "Prometheus",
    "subcategory": "Prometheus",
    "level": "intermediate",
    "command": "curl -s http://<prometheus>:9090/api/v1/status/buildinfo",
    "description": "Inspect Prometheus build information",
    "useCase": "inspect Prometheus build information",
    "example": "curl -s http://<prometheus>:9090/api/v1/status/buildinfo",
    "keywords": [
      "prometheus",
      "curl",
      "http",
      "9090",
      "status",
      "buildinfo",
      "inspect"
    ],
    "tags": [
      "curl",
      "http",
      "prometheus",
      "9090",
      "status",
      "buildinfo",
      "inspect"
    ]
  },
  {
    "id": "extended-377",
    "category": "Prometheus",
    "subcategory": "Prometheus",
    "level": "intermediate",
    "command": "curl -G http://<prometheus>:9090/api/v1/query --data-urlencode \"query=up\"",
    "description": "Run an instant PromQL query",
    "useCase": "run an instant PromQL query",
    "example": "curl -G http://<prometheus>:9090/api/v1/query --data-urlencode \"query=up\"",
    "keywords": [
      "prometheus",
      "curl",
      "http",
      "9090",
      "query",
      "data",
      "urlencode"
    ],
    "tags": [
      "curl",
      "http",
      "prometheus",
      "9090",
      "query",
      "data",
      "urlencode"
    ]
  },
  {
    "id": "extended-378",
    "category": "Prometheus",
    "subcategory": "Prometheus",
    "level": "intermediate",
    "command": "curl -G http://<prometheus>:9090/api/v1/query --data-urlencode \"query=ALERTS\"",
    "description": "Inspect active alerts",
    "useCase": "inspect active alerts",
    "example": "curl -G http://<prometheus>:9090/api/v1/query --data-urlencode \"query=ALERTS\"",
    "keywords": [
      "prometheus",
      "curl",
      "http",
      "9090",
      "query",
      "data",
      "urlencode"
    ],
    "tags": [
      "curl",
      "http",
      "prometheus",
      "9090",
      "query",
      "data",
      "urlencode"
    ]
  },
  {
    "id": "extended-379",
    "category": "Prometheus",
    "subcategory": "Prometheus",
    "level": "intermediate",
    "command": "curl -s http://<prometheus>:9090/api/v1/targets",
    "description": "Inspect scrape targets",
    "useCase": "inspect scrape targets",
    "example": "curl -s http://<prometheus>:9090/api/v1/targets",
    "keywords": [
      "prometheus",
      "curl",
      "http",
      "9090",
      "targets",
      "inspect",
      "scrape"
    ],
    "tags": [
      "curl",
      "http",
      "prometheus",
      "9090",
      "targets",
      "inspect",
      "scrape"
    ]
  },
  {
    "id": "extended-380",
    "category": "Prometheus",
    "subcategory": "Prometheus",
    "level": "intermediate",
    "command": "curl -s http://<prometheus>:9090/api/v1/rules",
    "description": "Inspect alerting rules",
    "useCase": "inspect alerting rules",
    "example": "curl -s http://<prometheus>:9090/api/v1/rules",
    "keywords": [
      "prometheus",
      "curl",
      "http",
      "9090",
      "rules",
      "inspect",
      "alerting"
    ],
    "tags": [
      "curl",
      "http",
      "prometheus",
      "9090",
      "rules",
      "inspect",
      "alerting"
    ]
  },
  {
    "id": "extended-381",
    "category": "Prometheus",
    "subcategory": "Prometheus",
    "level": "intermediate",
    "command": "curl -s http://<prometheus>:9090/api/v1/metadata",
    "description": "Inspect metric metadata",
    "useCase": "inspect metric metadata",
    "example": "curl -s http://<prometheus>:9090/api/v1/metadata",
    "keywords": [
      "prometheus",
      "curl",
      "http",
      "9090",
      "metadata",
      "inspect",
      "metric"
    ],
    "tags": [
      "curl",
      "http",
      "prometheus",
      "9090",
      "metadata",
      "inspect",
      "metric"
    ]
  },
  {
    "id": "extended-382",
    "category": "Grafana",
    "subcategory": "Grafana",
    "level": "intermediate",
    "command": "curl -s http://<grafana>:3000/api/health",
    "description": "Check Grafana health",
    "useCase": "check Grafana health",
    "example": "curl -s http://<grafana>:3000/api/health",
    "keywords": [
      "grafana",
      "curl",
      "http",
      "3000",
      "health",
      "check"
    ],
    "tags": [
      "curl",
      "http",
      "grafana",
      "3000",
      "health",
      "check"
    ]
  },
  {
    "id": "extended-383",
    "category": "Grafana",
    "subcategory": "Grafana",
    "level": "intermediate",
    "command": "curl -s http://<grafana>:3000/api/datasources",
    "description": "List data sources",
    "useCase": "list data sources",
    "example": "curl -s http://<grafana>:3000/api/datasources",
    "keywords": [
      "grafana",
      "curl",
      "http",
      "3000",
      "datasources",
      "list",
      "data"
    ],
    "tags": [
      "curl",
      "http",
      "grafana",
      "3000",
      "datasources",
      "list",
      "data"
    ]
  },
  {
    "id": "extended-384",
    "category": "Grafana",
    "subcategory": "Grafana",
    "level": "intermediate",
    "command": "curl -s http://<grafana>:3000/api/search",
    "description": "Search Grafana dashboards",
    "useCase": "search Grafana dashboards",
    "example": "curl -s http://<grafana>:3000/api/search",
    "keywords": [
      "grafana",
      "curl",
      "http",
      "3000",
      "search"
    ],
    "tags": [
      "curl",
      "http",
      "grafana",
      "3000",
      "search"
    ]
  },
  {
    "id": "extended-385",
    "category": "Grafana",
    "subcategory": "Grafana",
    "level": "intermediate",
    "command": "curl -s http://<grafana>:3000/api/org",
    "description": "Inspect the current organization",
    "useCase": "inspect the current organization",
    "example": "curl -s http://<grafana>:3000/api/org",
    "keywords": [
      "grafana",
      "curl",
      "http",
      "3000",
      "inspect",
      "current",
      "organization"
    ],
    "tags": [
      "curl",
      "http",
      "grafana",
      "3000",
      "inspect",
      "current",
      "organization"
    ]
  },
  {
    "id": "extended-386",
    "category": "Grafana",
    "subcategory": "Grafana",
    "level": "intermediate",
    "command": "curl -s http://<grafana>:3000/api/plugins",
    "description": "List installed plugins",
    "useCase": "list installed plugins",
    "example": "curl -s http://<grafana>:3000/api/plugins",
    "keywords": [
      "grafana",
      "curl",
      "http",
      "3000",
      "plugins",
      "list",
      "installed"
    ],
    "tags": [
      "curl",
      "http",
      "grafana",
      "3000",
      "plugins",
      "list",
      "installed"
    ]
  },
  {
    "id": "extended-387",
    "category": "Grafana",
    "subcategory": "Grafana",
    "level": "intermediate",
    "command": "grafana-cli plugins ls",
    "description": "List installed plugins locally",
    "useCase": "list installed plugins locally",
    "example": "grafana-cli plugins ls",
    "keywords": [
      "grafana",
      "plugins",
      "list",
      "installed",
      "locally"
    ],
    "tags": [
      "grafana",
      "plugins",
      "list",
      "installed",
      "locally"
    ]
  },
  {
    "id": "extended-388",
    "category": "PostgreSQL",
    "subcategory": "PostgreSQL",
    "level": "intermediate",
    "command": "psql -h <host> -U <user> -d <db>",
    "description": "Connect to PostgreSQL",
    "useCase": "connect to PostgreSQL",
    "example": "psql -h <host> -U <user> -d <db>",
    "keywords": [
      "postgresql",
      "psql",
      "host",
      "user",
      "connect"
    ],
    "tags": [
      "psql",
      "host",
      "user",
      "connect",
      "postgresql"
    ]
  },
  {
    "id": "extended-389",
    "category": "PostgreSQL",
    "subcategory": "PostgreSQL",
    "level": "intermediate",
    "command": "psql -c \"\\l\"",
    "description": "List PostgreSQL databases",
    "useCase": "list PostgreSQL databases",
    "example": "psql -c \"\\l\"",
    "keywords": [
      "postgresql",
      "psql",
      "list",
      "databases"
    ],
    "tags": [
      "psql",
      "list",
      "postgresql",
      "databases"
    ]
  },
  {
    "id": "extended-390",
    "category": "PostgreSQL",
    "subcategory": "PostgreSQL",
    "level": "intermediate",
    "command": "psql -c \"\\dt\"",
    "description": "List tables",
    "useCase": "list tables",
    "example": "psql -c \"\\dt\"",
    "keywords": [
      "postgresql",
      "psql",
      "list",
      "tables"
    ],
    "tags": [
      "psql",
      "list",
      "tables"
    ]
  },
  {
    "id": "extended-391",
    "category": "PostgreSQL",
    "subcategory": "PostgreSQL",
    "level": "intermediate",
    "command": "psql -c \"SELECT version();\"",
    "description": "Show PostgreSQL version",
    "useCase": "show PostgreSQL version",
    "example": "psql -c \"SELECT version();\"",
    "keywords": [
      "postgresql",
      "psql",
      "select",
      "version",
      "show"
    ],
    "tags": [
      "psql",
      "select",
      "version",
      "show",
      "postgresql"
    ]
  },
  {
    "id": "extended-392",
    "category": "PostgreSQL",
    "subcategory": "PostgreSQL",
    "level": "intermediate",
    "command": "psql -c \"SELECT now();\"",
    "description": "Check database server time",
    "useCase": "check database server time",
    "example": "psql -c \"SELECT now();\"",
    "keywords": [
      "postgresql",
      "psql",
      "select",
      "check",
      "database",
      "server",
      "time"
    ],
    "tags": [
      "psql",
      "select",
      "check",
      "database",
      "server",
      "time"
    ]
  },
  {
    "id": "extended-393",
    "category": "PostgreSQL",
    "subcategory": "PostgreSQL",
    "level": "intermediate",
    "command": "psql -c \"SELECT pid,usename,state,query FROM pg_stat_activity;\"",
    "description": "Inspect active sessions",
    "useCase": "inspect active sessions",
    "example": "psql -c \"SELECT pid,usename,state,query FROM pg_stat_activity;\"",
    "keywords": [
      "postgresql",
      "psql",
      "select",
      "usename",
      "state",
      "query",
      "from",
      "stat"
    ],
    "tags": [
      "psql",
      "select",
      "usename",
      "state",
      "query",
      "from",
      "stat"
    ]
  },
  {
    "id": "extended-394",
    "category": "PostgreSQL",
    "subcategory": "PostgreSQL",
    "level": "intermediate",
    "command": "psql -c \"SELECT pid,query_start,query FROM pg_stat_activity WHERE state<>'idle' ORDER BY query_start;\"",
    "description": "Find long-running queries",
    "useCase": "find long-running queries",
    "example": "psql -c \"SELECT pid,query_start,query FROM pg_stat_activity WHERE state<>'idle' ORDER BY query_start;\"",
    "keywords": [
      "postgresql",
      "psql",
      "select",
      "query",
      "start",
      "from",
      "stat"
    ],
    "tags": [
      "psql",
      "select",
      "query",
      "start",
      "from",
      "stat"
    ]
  },
  {
    "id": "extended-395",
    "category": "PostgreSQL",
    "subcategory": "PostgreSQL",
    "level": "intermediate",
    "command": "psql -c \"SELECT pg_size_pretty(pg_database_size(current_database()));\"",
    "description": "Check database size",
    "useCase": "check database size",
    "example": "psql -c \"SELECT pg_size_pretty(pg_database_size(current_database()));\"",
    "keywords": [
      "postgresql",
      "psql",
      "select",
      "size",
      "pretty",
      "database",
      "current"
    ],
    "tags": [
      "psql",
      "select",
      "size",
      "pretty",
      "database",
      "current"
    ]
  },
  {
    "id": "extended-396",
    "category": "PostgreSQL",
    "subcategory": "PostgreSQL",
    "level": "intermediate",
    "command": "psql -c \"SELECT * FROM pg_locks WHERE NOT granted;\"",
    "description": "Find waiting locks",
    "useCase": "find waiting locks",
    "example": "psql -c \"SELECT * FROM pg_locks WHERE NOT granted;\"",
    "keywords": [
      "postgresql",
      "psql",
      "select",
      "from",
      "locks",
      "where",
      "granted",
      "find"
    ],
    "tags": [
      "psql",
      "select",
      "from",
      "locks",
      "where",
      "granted",
      "find"
    ]
  },
  {
    "id": "extended-397",
    "category": "PostgreSQL",
    "subcategory": "PostgreSQL",
    "level": "intermediate",
    "command": "pg_dump -h <host> -U <user> -Fc <db> > backup.dump",
    "description": "Create a PostgreSQL backup",
    "useCase": "create a PostgreSQL backup",
    "example": "pg_dump -h <host> -U <user> -Fc <db> > backup.dump",
    "keywords": [
      "postgresql",
      "dump",
      "host",
      "user",
      "backup",
      "create"
    ],
    "tags": [
      "dump",
      "host",
      "user",
      "backup",
      "create",
      "postgresql"
    ]
  },
  {
    "id": "extended-398",
    "category": "PostgreSQL",
    "subcategory": "PostgreSQL",
    "level": "intermediate",
    "command": "pg_restore -d <db> backup.dump",
    "description": "Restore a PostgreSQL backup",
    "useCase": "restore a PostgreSQL backup",
    "example": "pg_restore -d <db> backup.dump",
    "keywords": [
      "postgresql",
      "restore",
      "backup",
      "dump"
    ],
    "tags": [
      "restore",
      "backup",
      "dump",
      "postgresql"
    ]
  },
  {
    "id": "extended-399",
    "category": "MySQL",
    "subcategory": "MySQL",
    "level": "intermediate",
    "command": "mysql -h <host> -u <user> -p",
    "description": "Connect to MySQL",
    "useCase": "connect to MySQL",
    "example": "mysql -h <host> -u <user> -p",
    "keywords": [
      "mysql",
      "host",
      "user",
      "connect"
    ],
    "tags": [
      "mysql",
      "host",
      "user",
      "connect"
    ]
  },
  {
    "id": "extended-400",
    "category": "MySQL",
    "subcategory": "MySQL",
    "level": "intermediate",
    "command": "mysql -e \"SHOW DATABASES;\"",
    "description": "List MySQL databases",
    "useCase": "list MySQL databases",
    "example": "mysql -e \"SHOW DATABASES;\"",
    "keywords": [
      "mysql",
      "show",
      "databases",
      "list"
    ],
    "tags": [
      "mysql",
      "show",
      "databases",
      "list"
    ]
  },
  {
    "id": "extended-401",
    "category": "MySQL",
    "subcategory": "MySQL",
    "level": "intermediate",
    "command": "mysql -e \"SHOW PROCESSLIST;\"",
    "description": "Inspect active sessions",
    "useCase": "inspect active sessions",
    "example": "mysql -e \"SHOW PROCESSLIST;\"",
    "keywords": [
      "mysql",
      "show",
      "processlist",
      "inspect",
      "active",
      "sessions"
    ],
    "tags": [
      "mysql",
      "show",
      "processlist",
      "inspect",
      "active",
      "sessions"
    ]
  },
  {
    "id": "extended-402",
    "category": "MySQL",
    "subcategory": "MySQL",
    "level": "intermediate",
    "command": "mysql -e \"SHOW FULL PROCESSLIST;\"",
    "description": "Inspect full active queries",
    "useCase": "inspect full active queries",
    "example": "mysql -e \"SHOW FULL PROCESSLIST;\"",
    "keywords": [
      "mysql",
      "show",
      "full",
      "processlist",
      "inspect",
      "active"
    ],
    "tags": [
      "mysql",
      "show",
      "full",
      "processlist",
      "inspect",
      "active"
    ]
  },
  {
    "id": "extended-403",
    "category": "MySQL",
    "subcategory": "MySQL",
    "level": "intermediate",
    "command": "mysql -e \"SHOW VARIABLES LIKE 'max_connections';\"",
    "description": "Check connection limit",
    "useCase": "check connection limit",
    "example": "mysql -e \"SHOW VARIABLES LIKE 'max_connections';\"",
    "keywords": [
      "mysql",
      "show",
      "variables",
      "like",
      "connections",
      "check",
      "connection"
    ],
    "tags": [
      "mysql",
      "show",
      "variables",
      "like",
      "connections",
      "check",
      "connection"
    ]
  },
  {
    "id": "extended-404",
    "category": "MySQL",
    "subcategory": "MySQL",
    "level": "intermediate",
    "command": "mysql -e \"SHOW STATUS LIKE 'Threads_connected';\"",
    "description": "Check connection count",
    "useCase": "check connection count",
    "example": "mysql -e \"SHOW STATUS LIKE 'Threads_connected';\"",
    "keywords": [
      "mysql",
      "show",
      "status",
      "like",
      "threads",
      "connected",
      "check"
    ],
    "tags": [
      "mysql",
      "show",
      "status",
      "like",
      "threads",
      "connected",
      "check"
    ]
  },
  {
    "id": "extended-405",
    "category": "MySQL",
    "subcategory": "MySQL",
    "level": "intermediate",
    "command": "mysql -e \"SHOW ENGINE INNODB STATUS\\G\"",
    "description": "Inspect InnoDB health and locks",
    "useCase": "inspect InnoDB health and locks",
    "example": "mysql -e \"SHOW ENGINE INNODB STATUS\\G\"",
    "keywords": [
      "mysql",
      "show",
      "engine",
      "innodb",
      "status",
      "inspect"
    ],
    "tags": [
      "mysql",
      "show",
      "engine",
      "innodb",
      "status",
      "inspect"
    ]
  },
  {
    "id": "extended-406",
    "category": "MySQL",
    "subcategory": "MySQL",
    "level": "intermediate",
    "command": "mysqldump -h <host> -u <user> -p <db> > backup.sql",
    "description": "Create a MySQL backup",
    "useCase": "create a MySQL backup",
    "example": "mysqldump -h <host> -u <user> -p <db> > backup.sql",
    "keywords": [
      "mysql",
      "mysqldump",
      "host",
      "user",
      "backup",
      "create"
    ],
    "tags": [
      "mysqldump",
      "host",
      "user",
      "backup",
      "create",
      "mysql"
    ]
  },
  {
    "id": "extended-407",
    "category": "MySQL",
    "subcategory": "MySQL",
    "level": "intermediate",
    "command": "mysql <db> < backup.sql",
    "description": "Restore a MySQL backup",
    "useCase": "restore a MySQL backup",
    "example": "mysql <db> < backup.sql",
    "keywords": [
      "mysql",
      "backup",
      "restore"
    ],
    "tags": [
      "mysql",
      "backup",
      "restore"
    ]
  },
  {
    "id": "extended-408",
    "category": "MySQL",
    "subcategory": "MySQL",
    "level": "intermediate",
    "command": "mysqlcheck -h <host> -u <user> -p --all-databases",
    "description": "Check MySQL databases",
    "useCase": "check MySQL databases",
    "example": "mysqlcheck -h <host> -u <user> -p --all-databases",
    "keywords": [
      "mysql",
      "mysqlcheck",
      "host",
      "user",
      "databases",
      "check"
    ],
    "tags": [
      "mysqlcheck",
      "host",
      "user",
      "databases",
      "check",
      "mysql"
    ]
  },
  {
    "id": "extended-409",
    "category": "Redis",
    "subcategory": "Redis",
    "level": "intermediate",
    "command": "redis-cli -h <host> info server",
    "description": "Inspect Redis server information",
    "useCase": "inspect Redis server information",
    "example": "redis-cli -h <host> info server",
    "keywords": [
      "redis",
      "host",
      "info",
      "server",
      "inspect"
    ],
    "tags": [
      "redis",
      "host",
      "info",
      "server",
      "inspect"
    ]
  },
  {
    "id": "extended-410",
    "category": "Redis",
    "subcategory": "Redis",
    "level": "intermediate",
    "command": "redis-cli -h <host> info memory",
    "description": "Inspect Redis memory usage",
    "useCase": "inspect Redis memory usage",
    "example": "redis-cli -h <host> info memory",
    "keywords": [
      "redis",
      "host",
      "info",
      "memory",
      "inspect"
    ],
    "tags": [
      "redis",
      "host",
      "info",
      "memory",
      "inspect"
    ]
  },
  {
    "id": "extended-411",
    "category": "Redis",
    "subcategory": "Redis",
    "level": "intermediate",
    "command": "redis-cli -h <host> info clients",
    "description": "Inspect Redis client connections",
    "useCase": "inspect Redis client connections",
    "example": "redis-cli -h <host> info clients",
    "keywords": [
      "redis",
      "host",
      "info",
      "clients",
      "inspect",
      "client"
    ],
    "tags": [
      "redis",
      "host",
      "info",
      "clients",
      "inspect",
      "client"
    ]
  },
  {
    "id": "extended-412",
    "category": "Redis",
    "subcategory": "Redis",
    "level": "intermediate",
    "command": "redis-cli -h <host> dbsize",
    "description": "Count keys in the current database",
    "useCase": "count keys in the current database",
    "example": "redis-cli -h <host> dbsize",
    "keywords": [
      "redis",
      "host",
      "dbsize",
      "count",
      "keys",
      "current",
      "database"
    ],
    "tags": [
      "redis",
      "host",
      "dbsize",
      "count",
      "keys",
      "current",
      "database"
    ]
  },
  {
    "id": "extended-413",
    "category": "Redis",
    "subcategory": "Redis",
    "level": "intermediate",
    "command": "redis-cli -h <host> slowlog get 20",
    "description": "Inspect recent slow commands",
    "useCase": "inspect recent slow commands",
    "example": "redis-cli -h <host> slowlog get 20",
    "keywords": [
      "redis",
      "host",
      "slowlog",
      "inspect",
      "recent",
      "slow",
      "commands"
    ],
    "tags": [
      "redis",
      "host",
      "slowlog",
      "inspect",
      "recent",
      "slow",
      "commands"
    ]
  },
  {
    "id": "extended-414",
    "category": "Redis",
    "subcategory": "Redis",
    "level": "intermediate",
    "command": "redis-cli -h <host> info replication",
    "description": "Inspect replication state",
    "useCase": "inspect replication state",
    "example": "redis-cli -h <host> info replication",
    "keywords": [
      "redis",
      "host",
      "info",
      "replication",
      "inspect",
      "state"
    ],
    "tags": [
      "redis",
      "host",
      "info",
      "replication",
      "inspect",
      "state"
    ]
  },
  {
    "id": "extended-415",
    "category": "Redis",
    "subcategory": "Redis",
    "level": "intermediate",
    "command": "redis-cli -h <host> --latency",
    "description": "Measure Redis latency",
    "useCase": "measure Redis latency",
    "example": "redis-cli -h <host> --latency",
    "keywords": [
      "redis",
      "host",
      "latency",
      "measure"
    ],
    "tags": [
      "redis",
      "host",
      "latency",
      "measure"
    ]
  },
  {
    "id": "extended-416",
    "category": "Container Registries",
    "subcategory": "Container Registries",
    "level": "intermediate",
    "command": "az acr list -o table",
    "description": "List Azure Container Registries",
    "useCase": "list Azure Container Registries",
    "example": "az acr list -o table",
    "keywords": [
      "container registries",
      "list",
      "table",
      "azure",
      "container",
      "registries"
    ],
    "tags": [
      "list",
      "table",
      "azure",
      "container",
      "registries"
    ]
  },
  {
    "id": "extended-417",
    "category": "Container Registries",
    "subcategory": "Container Registries",
    "level": "intermediate",
    "command": "az acr show -n <registry> -o table",
    "description": "Inspect an ACR",
    "useCase": "inspect an ACR",
    "example": "az acr show -n <registry> -o table",
    "keywords": [
      "container registries",
      "show",
      "registry",
      "table",
      "inspect"
    ],
    "tags": [
      "show",
      "registry",
      "table",
      "inspect"
    ]
  },
  {
    "id": "extended-418",
    "category": "Container Registries",
    "subcategory": "Container Registries",
    "level": "intermediate",
    "command": "az acr repository list -n <registry> -o table",
    "description": "List ACR repositories",
    "useCase": "list ACR repositories",
    "example": "az acr repository list -n <registry> -o table",
    "keywords": [
      "container registries",
      "repository",
      "list",
      "registry",
      "table",
      "repositories"
    ],
    "tags": [
      "repository",
      "list",
      "registry",
      "table",
      "repositories"
    ]
  },
  {
    "id": "extended-419",
    "category": "Container Registries",
    "subcategory": "Container Registries",
    "level": "intermediate",
    "command": "az acr repository show-tags -n <registry> --repository <repo> -o table",
    "description": "List image tags in ACR",
    "useCase": "list image tags in ACR",
    "example": "az acr repository show-tags -n <registry> --repository <repo> -o table",
    "keywords": [
      "container registries",
      "repository",
      "show",
      "tags",
      "registry",
      "repo",
      "table"
    ],
    "tags": [
      "repository",
      "show",
      "tags",
      "registry",
      "repo",
      "table"
    ]
  },
  {
    "id": "extended-420",
    "category": "Container Registries",
    "subcategory": "Container Registries",
    "level": "intermediate",
    "command": "az acr repository show-manifests -n <registry> --repository <repo> -o table",
    "description": "List image manifests",
    "useCase": "list image manifests",
    "example": "az acr repository show-manifests -n <registry> --repository <repo> -o table",
    "keywords": [
      "container registries",
      "repository",
      "show",
      "manifests",
      "registry",
      "repo",
      "table"
    ],
    "tags": [
      "repository",
      "show",
      "manifests",
      "registry",
      "repo",
      "table"
    ]
  },
  {
    "id": "extended-421",
    "category": "Container Registries",
    "subcategory": "Container Registries",
    "level": "intermediate",
    "command": "az acr login -n <registry>",
    "description": "Authenticate Docker to ACR",
    "useCase": "authenticate Docker to ACR",
    "example": "az acr login -n <registry>",
    "keywords": [
      "container registries",
      "login",
      "registry",
      "authenticate",
      "docker"
    ],
    "tags": [
      "login",
      "registry",
      "authenticate",
      "docker"
    ]
  },
  {
    "id": "extended-422",
    "category": "Container Registries",
    "subcategory": "Container Registries",
    "level": "intermediate",
    "command": "az acr check-health -n <registry>",
    "description": "Run ACR health diagnostics",
    "useCase": "run ACR health diagnostics",
    "example": "az acr check-health -n <registry>",
    "keywords": [
      "container registries",
      "check",
      "health",
      "registry",
      "diagnostics"
    ],
    "tags": [
      "check",
      "health",
      "registry",
      "diagnostics"
    ]
  },
  {
    "id": "extended-423",
    "category": "Container Registries",
    "subcategory": "Container Registries",
    "level": "intermediate",
    "command": "docker pull <registry>/<repo>:<tag>",
    "description": "Pull an image from a registry",
    "useCase": "pull an image from a registry",
    "example": "docker pull <registry>/<repo>:<tag>",
    "keywords": [
      "container registries",
      "docker",
      "pull",
      "registry",
      "repo",
      "image",
      "from"
    ],
    "tags": [
      "docker",
      "pull",
      "registry",
      "repo",
      "image",
      "from"
    ]
  },
  {
    "id": "extended-424",
    "category": "Container Registries",
    "subcategory": "Container Registries",
    "level": "advanced",
    "command": "docker push <registry>/<repo>:<tag>",
    "description": "Push an image to a registry",
    "useCase": "push an image to a registry",
    "example": "docker push <registry>/<repo>:<tag>",
    "keywords": [
      "container registries",
      "docker",
      "push",
      "registry",
      "repo",
      "image"
    ],
    "tags": [
      "docker",
      "push",
      "registry",
      "repo",
      "image"
    ]
  },
  {
    "id": "extended-425",
    "category": "Container Registries",
    "subcategory": "Container Registries",
    "level": "intermediate",
    "command": "docker manifest inspect <image>:<tag>",
    "description": "Inspect a multi-architecture manifest",
    "useCase": "inspect a multi-architecture manifest",
    "example": "docker manifest inspect <image>:<tag>",
    "keywords": [
      "container registries",
      "docker",
      "manifest",
      "inspect",
      "image",
      "multi",
      "architecture"
    ],
    "tags": [
      "docker",
      "manifest",
      "inspect",
      "image",
      "multi",
      "architecture"
    ]
  },
  {
    "id": "extended-426",
    "category": "Container Registries",
    "subcategory": "Container Registries",
    "level": "intermediate",
    "command": "crane ls <registry>/<repo>",
    "description": "List registry tags with crane",
    "useCase": "list registry tags with crane",
    "example": "crane ls <registry>/<repo>",
    "keywords": [
      "container registries",
      "crane",
      "registry",
      "repo",
      "list",
      "tags",
      "with"
    ],
    "tags": [
      "crane",
      "registry",
      "repo",
      "list",
      "tags",
      "with"
    ]
  },
  {
    "id": "extended-427",
    "category": "Container Registries",
    "subcategory": "Container Registries",
    "level": "intermediate",
    "command": "crane digest <registry>/<repo>:<tag>",
    "description": "Get an image digest with crane",
    "useCase": "get an image digest with crane",
    "example": "crane digest <registry>/<repo>:<tag>",
    "keywords": [
      "container registries",
      "crane",
      "digest",
      "registry",
      "repo",
      "image",
      "with"
    ],
    "tags": [
      "crane",
      "digest",
      "registry",
      "repo",
      "image",
      "with"
    ]
  },
  {
    "id": "extended-428",
    "category": "Container Registries",
    "subcategory": "Container Registries",
    "level": "intermediate",
    "command": "skopeo inspect docker://<registry>/<repo>:<tag>",
    "description": "Inspect a remote image without pulling",
    "useCase": "inspect a remote image without pulling",
    "example": "skopeo inspect docker://<registry>/<repo>:<tag>",
    "keywords": [
      "container registries",
      "skopeo",
      "inspect",
      "docker",
      "registry",
      "repo",
      "remote"
    ],
    "tags": [
      "skopeo",
      "inspect",
      "docker",
      "registry",
      "repo",
      "remote"
    ]
  },
  {
    "id": "extended-429",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "docker build --progress=plain .",
    "description": "Show verbose Docker build output",
    "useCase": "show verbose Docker build output",
    "example": "docker build --progress=plain .",
    "keywords": [
      "ci/cd troubleshooting",
      "docker",
      "build",
      "progress",
      "plain",
      "show",
      "verbose"
    ],
    "tags": [
      "docker",
      "build",
      "progress",
      "plain",
      "show",
      "verbose"
    ]
  },
  {
    "id": "extended-430",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "docker inspect <container> --format \"{{.State.ExitCode}}\"",
    "description": "Check container exit code",
    "useCase": "check container exit code",
    "example": "docker inspect <container> --format \"{{.State.ExitCode}}\"",
    "keywords": [
      "ci/cd troubleshooting",
      "docker",
      "inspect",
      "container",
      "format",
      "state",
      "exitcode",
      "check"
    ],
    "tags": [
      "docker",
      "inspect",
      "container",
      "format",
      "state",
      "exitcode",
      "check"
    ]
  },
  {
    "id": "extended-431",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "kubectl describe pod <pod> -n <namespace>",
    "description": "Inspect pod runtime details",
    "useCase": "inspect pod runtime details",
    "example": "kubectl describe pod <pod> -n <namespace>",
    "keywords": [
      "ci/cd troubleshooting",
      "kubectl",
      "describe",
      "namespace",
      "inspect",
      "runtime",
      "details"
    ],
    "tags": [
      "kubectl",
      "describe",
      "namespace",
      "inspect",
      "runtime",
      "details"
    ]
  },
  {
    "id": "extended-432",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get events -n <namespace> --sort-by=.lastTimestamp",
    "description": "Review namespace events",
    "useCase": "review namespace events",
    "example": "kubectl get events -n <namespace> --sort-by=.lastTimestamp",
    "keywords": [
      "ci/cd troubleshooting",
      "kubectl",
      "events",
      "namespace",
      "sort",
      "lasttimestamp",
      "review"
    ],
    "tags": [
      "kubectl",
      "events",
      "namespace",
      "sort",
      "lasttimestamp",
      "review"
    ]
  },
  {
    "id": "extended-433",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "kubectl rollout status deployment/<name> -n <namespace> --timeout=120s",
    "description": "Wait for deployment rollout",
    "useCase": "wait for deployment rollout",
    "example": "kubectl rollout status deployment/<name> -n <namespace> --timeout=120s",
    "keywords": [
      "ci/cd troubleshooting",
      "kubectl",
      "rollout",
      "status",
      "deployment",
      "name",
      "namespace",
      "timeout"
    ],
    "tags": [
      "kubectl",
      "rollout",
      "status",
      "deployment",
      "name",
      "namespace",
      "timeout"
    ]
  },
  {
    "id": "extended-434",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "gh run view <run-id> --log-failed",
    "description": "Inspect failed GitHub Actions logs",
    "useCase": "inspect failed GitHub Actions logs",
    "example": "gh run view <run-id> --log-failed",
    "keywords": [
      "ci/cd troubleshooting",
      "view",
      "failed",
      "inspect",
      "github",
      "actions",
      "logs"
    ],
    "tags": [
      "view",
      "failed",
      "inspect",
      "github",
      "actions",
      "logs"
    ]
  },
  {
    "id": "extended-435",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "az pipelines runs show --id <run-id>",
    "description": "Inspect an Azure DevOps run",
    "useCase": "inspect an Azure DevOps run",
    "example": "az pipelines runs show --id <run-id>",
    "keywords": [
      "ci/cd troubleshooting",
      "pipelines",
      "runs",
      "show",
      "inspect",
      "azure",
      "devops"
    ],
    "tags": [
      "pipelines",
      "runs",
      "show",
      "inspect",
      "azure",
      "devops"
    ]
  },
  {
    "id": "extended-436",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "helm template <release> <chart> -f values.yaml > rendered.yaml",
    "description": "Debug Helm rendering",
    "useCase": "debug Helm rendering",
    "example": "helm template <release> <chart> -f values.yaml > rendered.yaml",
    "keywords": [
      "ci/cd troubleshooting",
      "helm",
      "template",
      "release",
      "chart",
      "values",
      "yaml",
      "rendered"
    ],
    "tags": [
      "helm",
      "template",
      "release",
      "chart",
      "values",
      "yaml",
      "rendered"
    ]
  },
  {
    "id": "extended-437",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "terraform plan -no-color",
    "description": "Produce CI-friendly Terraform output",
    "useCase": "produce CI-friendly Terraform output",
    "example": "terraform plan -no-color",
    "keywords": [
      "ci/cd troubleshooting",
      "terraform",
      "plan",
      "color",
      "produce",
      "friendly",
      "output"
    ],
    "tags": [
      "terraform",
      "plan",
      "color",
      "produce",
      "friendly",
      "output"
    ]
  },
  {
    "id": "extended-438",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "ansible-playbook site.yml --check --diff",
    "description": "Dry-run configuration changes",
    "useCase": "dry-run configuration changes",
    "example": "ansible-playbook site.yml --check --diff",
    "keywords": [
      "ci/cd troubleshooting",
      "ansible",
      "playbook",
      "site",
      "check",
      "diff",
      "configuration",
      "changes"
    ],
    "tags": [
      "ansible",
      "playbook",
      "site",
      "check",
      "diff",
      "configuration",
      "changes"
    ]
  },
  {
    "id": "extended-439",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "npm ci",
    "description": "Install exact Node.js dependencies",
    "useCase": "install exact Node.js dependencies",
    "example": "npm ci",
    "keywords": [
      "ci/cd troubleshooting",
      "install",
      "exact",
      "node",
      "dependencies"
    ],
    "tags": [
      "install",
      "exact",
      "node",
      "dependencies"
    ]
  },
  {
    "id": "extended-440",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "npm test",
    "description": "Run the project test suite",
    "useCase": "run the project test suite",
    "example": "npm test",
    "keywords": [
      "ci/cd troubleshooting",
      "test",
      "project",
      "suite"
    ],
    "tags": [
      "test",
      "project",
      "suite"
    ]
  },
  {
    "id": "extended-441",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "python -m pip check",
    "description": "Check Python dependency compatibility",
    "useCase": "check Python dependency compatibility",
    "example": "python -m pip check",
    "keywords": [
      "ci/cd troubleshooting",
      "python",
      "check",
      "dependency",
      "compatibility"
    ],
    "tags": [
      "python",
      "check",
      "dependency",
      "compatibility"
    ]
  },
  {
    "id": "extended-442",
    "category": "CI/CD Troubleshooting",
    "subcategory": "CI/CD Troubleshooting",
    "level": "intermediate",
    "command": "curl -fsS https://<health-endpoint>",
    "description": "Fail a pipeline on a bad health response",
    "useCase": "fail a pipeline on a bad health response",
    "example": "curl -fsS https://<health-endpoint>",
    "keywords": [
      "ci/cd troubleshooting",
      "curl",
      "https",
      "health",
      "endpoint",
      "fail",
      "pipeline"
    ],
    "tags": [
      "curl",
      "https",
      "health",
      "endpoint",
      "fail",
      "pipeline"
    ]
  },
  {
    "id": "extended-443",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get pods -A --field-selector=status.phase=Pending",
    "description": "Find pending pods",
    "useCase": "find pending pods",
    "example": "kubectl get pods -A --field-selector=status.phase=Pending",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "pods",
      "field",
      "selector",
      "status",
      "phase",
      "pending"
    ],
    "tags": [
      "kubectl",
      "pods",
      "field",
      "selector",
      "status",
      "phase",
      "pending"
    ]
  },
  {
    "id": "extended-444",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get pods -A --field-selector=status.phase=Failed",
    "description": "Find failed pods",
    "useCase": "find failed pods",
    "example": "kubectl get pods -A --field-selector=status.phase=Failed",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "pods",
      "field",
      "selector",
      "status",
      "phase",
      "failed"
    ],
    "tags": [
      "kubectl",
      "pods",
      "field",
      "selector",
      "status",
      "phase",
      "failed"
    ]
  },
  {
    "id": "extended-445",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get pods -A | grep -Ei \"CrashLoopBackOff|ImagePullBackOff|ErrImagePull\"",
    "description": "Find common pod failure states",
    "useCase": "find common pod failure states",
    "example": "kubectl get pods -A | grep -Ei \"CrashLoopBackOff|ImagePullBackOff|ErrImagePull\"",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "pods",
      "grep",
      "crashloopbackoff",
      "imagepullbackoff",
      "errimagepull",
      "find"
    ],
    "tags": [
      "kubectl",
      "pods",
      "grep",
      "crashloopbackoff",
      "imagepullbackoff",
      "errimagepull",
      "find"
    ]
  },
  {
    "id": "extended-446",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl describe pod <pod> -n <namespace> | sed -n '/Events:/,$p'",
    "description": "Focus on pod events",
    "useCase": "focus on pod events",
    "example": "kubectl describe pod <pod> -n <namespace> | sed -n '/Events:/,$p'",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "describe",
      "namespace",
      "events",
      "focus"
    ],
    "tags": [
      "kubectl",
      "describe",
      "namespace",
      "events",
      "focus"
    ]
  },
  {
    "id": "extended-447",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl logs <pod> -n <namespace> --all-containers=true --tail=200",
    "description": "Collect logs from all containers",
    "useCase": "collect logs from all containers",
    "example": "kubectl logs <pod> -n <namespace> --all-containers=true --tail=200",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "logs",
      "namespace",
      "containers",
      "true",
      "tail",
      "collect"
    ],
    "tags": [
      "kubectl",
      "logs",
      "namespace",
      "containers",
      "true",
      "tail",
      "collect"
    ]
  },
  {
    "id": "extended-448",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl logs <pod> -n <namespace> -c <container> --previous",
    "description": "Read logs from a crashed container",
    "useCase": "read logs from a crashed container",
    "example": "kubectl logs <pod> -n <namespace> -c <container> --previous",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "logs",
      "namespace",
      "container",
      "previous",
      "read"
    ],
    "tags": [
      "kubectl",
      "logs",
      "namespace",
      "container",
      "previous",
      "read"
    ]
  },
  {
    "id": "extended-449",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get nodes -o wide",
    "description": "Check node readiness",
    "useCase": "check node readiness",
    "example": "kubectl get nodes -o wide",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "nodes",
      "wide",
      "check",
      "node",
      "readiness"
    ],
    "tags": [
      "kubectl",
      "nodes",
      "wide",
      "check",
      "node",
      "readiness"
    ]
  },
  {
    "id": "extended-450",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl describe node <node>",
    "description": "Inspect node pressure and conditions",
    "useCase": "inspect node pressure and conditions",
    "example": "kubectl describe node <node>",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "describe",
      "node",
      "inspect",
      "pressure"
    ],
    "tags": [
      "kubectl",
      "describe",
      "node",
      "inspect",
      "pressure"
    ]
  },
  {
    "id": "extended-451",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get pods -A -o wide --field-selector=spec.nodeName=<node>",
    "description": "List pods on a node",
    "useCase": "list pods on a node",
    "example": "kubectl get pods -A -o wide --field-selector=spec.nodeName=<node>",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "pods",
      "wide",
      "field",
      "selector",
      "spec",
      "nodename"
    ],
    "tags": [
      "kubectl",
      "pods",
      "wide",
      "field",
      "selector",
      "spec",
      "nodename"
    ]
  },
  {
    "id": "extended-452",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get endpoints -A",
    "description": "Check service endpoints",
    "useCase": "check service endpoints",
    "example": "kubectl get endpoints -A",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "endpoints",
      "check",
      "service"
    ],
    "tags": [
      "kubectl",
      "endpoints",
      "check",
      "service"
    ]
  },
  {
    "id": "extended-453",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get endpointslices -A",
    "description": "Inspect EndpointSlice data",
    "useCase": "inspect EndpointSlice data",
    "example": "kubectl get endpointslices -A",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "endpointslices",
      "inspect",
      "endpointslice",
      "data"
    ],
    "tags": [
      "kubectl",
      "endpointslices",
      "inspect",
      "endpointslice",
      "data"
    ]
  },
  {
    "id": "extended-454",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get ingress -A -o wide",
    "description": "Inspect ingress routing",
    "useCase": "inspect ingress routing",
    "example": "kubectl get ingress -A -o wide",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "ingress",
      "wide",
      "inspect",
      "routing"
    ],
    "tags": [
      "kubectl",
      "ingress",
      "wide",
      "inspect",
      "routing"
    ]
  },
  {
    "id": "extended-455",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get events -A --sort-by=.lastTimestamp | tail -100",
    "description": "Review latest cluster events",
    "useCase": "review latest cluster events",
    "example": "kubectl get events -A --sort-by=.lastTimestamp | tail -100",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "events",
      "sort",
      "lasttimestamp",
      "tail",
      "review",
      "latest"
    ],
    "tags": [
      "kubectl",
      "events",
      "sort",
      "lasttimestamp",
      "tail",
      "review",
      "latest"
    ]
  },
  {
    "id": "extended-456",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl top nodes",
    "description": "Check node saturation",
    "useCase": "check node saturation",
    "example": "kubectl top nodes",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "nodes",
      "check",
      "node",
      "saturation"
    ],
    "tags": [
      "kubectl",
      "nodes",
      "check",
      "node",
      "saturation"
    ]
  },
  {
    "id": "extended-457",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl top pods -A --containers",
    "description": "Check container saturation",
    "useCase": "check container saturation",
    "example": "kubectl top pods -A --containers",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "pods",
      "containers",
      "check",
      "container",
      "saturation"
    ],
    "tags": [
      "kubectl",
      "pods",
      "containers",
      "check",
      "container",
      "saturation"
    ]
  },
  {
    "id": "extended-458",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl auth can-i --list",
    "description": "Check effective RBAC permissions",
    "useCase": "check effective RBAC permissions",
    "example": "kubectl auth can-i --list",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "auth",
      "list",
      "check",
      "effective",
      "rbac",
      "permissions"
    ],
    "tags": [
      "kubectl",
      "auth",
      "list",
      "check",
      "effective",
      "rbac",
      "permissions"
    ]
  },
  {
    "id": "extended-459",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get --raw=/readyz?verbose",
    "description": "Check API server readiness",
    "useCase": "check API server readiness",
    "example": "kubectl get --raw=/readyz?verbose",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "readyz",
      "verbose",
      "check",
      "server",
      "readiness"
    ],
    "tags": [
      "kubectl",
      "readyz",
      "verbose",
      "check",
      "server",
      "readiness"
    ]
  },
  {
    "id": "extended-460",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get --raw=/livez?verbose",
    "description": "Check API server liveness",
    "useCase": "check API server liveness",
    "example": "kubectl get --raw=/livez?verbose",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "livez",
      "verbose",
      "check",
      "server",
      "liveness"
    ],
    "tags": [
      "kubectl",
      "livez",
      "verbose",
      "check",
      "server",
      "liveness"
    ]
  },
  {
    "id": "extended-461",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get lease -A",
    "description": "Inspect leader-election leases",
    "useCase": "inspect leader-election leases",
    "example": "kubectl get lease -A",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "lease",
      "inspect",
      "leader",
      "election",
      "leases"
    ],
    "tags": [
      "kubectl",
      "lease",
      "inspect",
      "leader",
      "election",
      "leases"
    ]
  },
  {
    "id": "extended-462",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl describe deployment/<name> -n <namespace>",
    "description": "Inspect rollout conditions",
    "useCase": "inspect rollout conditions",
    "example": "kubectl describe deployment/<name> -n <namespace>",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "describe",
      "deployment",
      "name",
      "namespace",
      "inspect",
      "rollout"
    ],
    "tags": [
      "kubectl",
      "describe",
      "deployment",
      "name",
      "namespace",
      "inspect",
      "rollout"
    ]
  },
  {
    "id": "extended-463",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get replicasets -n <namespace>",
    "description": "Inspect ReplicaSets",
    "useCase": "inspect ReplicaSets",
    "example": "kubectl get replicasets -n <namespace>",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "replicasets",
      "namespace",
      "inspect"
    ],
    "tags": [
      "kubectl",
      "replicasets",
      "namespace",
      "inspect"
    ]
  },
  {
    "id": "extended-464",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get jobs -A",
    "description": "List jobs",
    "useCase": "list jobs",
    "example": "kubectl get jobs -A",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "jobs",
      "list"
    ],
    "tags": [
      "kubectl",
      "jobs",
      "list"
    ]
  },
  {
    "id": "extended-465",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get cronjobs -A",
    "description": "List CronJobs",
    "useCase": "list CronJobs",
    "example": "kubectl get cronjobs -A",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "cronjobs",
      "list"
    ],
    "tags": [
      "kubectl",
      "cronjobs",
      "list"
    ]
  },
  {
    "id": "extended-466",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl describe pvc <pvc> -n <namespace>",
    "description": "Diagnose a PVC",
    "useCase": "diagnose a PVC",
    "example": "kubectl describe pvc <pvc> -n <namespace>",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "describe",
      "namespace",
      "diagnose"
    ],
    "tags": [
      "kubectl",
      "describe",
      "namespace",
      "diagnose"
    ]
  },
  {
    "id": "extended-467",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl get storageclass",
    "description": "List storage classes",
    "useCase": "list storage classes",
    "example": "kubectl get storageclass",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "storageclass",
      "list",
      "storage",
      "classes"
    ],
    "tags": [
      "kubectl",
      "storageclass",
      "list",
      "storage",
      "classes"
    ]
  },
  {
    "id": "extended-468",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl describe service <service> -n <namespace>",
    "description": "Diagnose service selectors and ports",
    "useCase": "diagnose service selectors and ports",
    "example": "kubectl describe service <service> -n <namespace>",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "describe",
      "service",
      "namespace",
      "diagnose"
    ],
    "tags": [
      "kubectl",
      "describe",
      "service",
      "namespace",
      "diagnose"
    ]
  },
  {
    "id": "extended-469",
    "category": "Kubernetes Troubleshooting",
    "subcategory": "Kubernetes Troubleshooting",
    "level": "intermediate",
    "command": "kubectl run debug --rm -it --image=curlimages/curl -- sh",
    "description": "Launch a temporary network debug pod",
    "useCase": "launch a temporary network debug pod",
    "example": "kubectl run debug --rm -it --image=curlimages/curl -- sh",
    "keywords": [
      "kubernetes troubleshooting",
      "kubectl",
      "debug",
      "image",
      "curlimages",
      "curl",
      "launch",
      "temporary"
    ],
    "tags": [
      "kubectl",
      "debug",
      "image",
      "curlimages",
      "curl",
      "launch",
      "temporary"
    ]
  },
  {
    "id": "extended-470",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "date; hostname; uptime; who",
    "description": "Capture basic host identity",
    "useCase": "capture basic host identity",
    "example": "date; hostname; uptime; who",
    "keywords": [
      "production incident playbooks",
      "date",
      "hostname",
      "uptime",
      "capture",
      "basic",
      "host",
      "identity"
    ],
    "tags": [
      "date",
      "hostname",
      "uptime",
      "capture",
      "basic",
      "host",
      "identity"
    ]
  },
  {
    "id": "extended-471",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "df -h; free -h; uptime",
    "description": "Capture disk memory and load",
    "useCase": "capture disk memory and load",
    "example": "df -h; free -h; uptime",
    "keywords": [
      "production incident playbooks",
      "free",
      "uptime",
      "capture",
      "disk",
      "memory",
      "load"
    ],
    "tags": [
      "free",
      "uptime",
      "capture",
      "disk",
      "memory",
      "load"
    ]
  },
  {
    "id": "extended-472",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "ss -lntp",
    "description": "Inventory listening services",
    "useCase": "inventory listening services",
    "example": "ss -lntp",
    "keywords": [
      "production incident playbooks",
      "lntp",
      "inventory",
      "listening",
      "services"
    ],
    "tags": [
      "lntp",
      "inventory",
      "listening",
      "services"
    ]
  },
  {
    "id": "extended-473",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "journalctl -p err -b --no-pager | tail -100",
    "description": "Review recent boot errors",
    "useCase": "review recent boot errors",
    "example": "journalctl -p err -b --no-pager | tail -100",
    "keywords": [
      "production incident playbooks",
      "journalctl",
      "pager",
      "tail",
      "review",
      "recent",
      "boot",
      "errors"
    ],
    "tags": [
      "journalctl",
      "pager",
      "tail",
      "review",
      "recent",
      "boot",
      "errors"
    ]
  },
  {
    "id": "extended-474",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "kubectl get nodes; kubectl get pods -A",
    "description": "Capture cluster health",
    "useCase": "capture cluster health",
    "example": "kubectl get nodes; kubectl get pods -A",
    "keywords": [
      "production incident playbooks",
      "kubectl",
      "nodes",
      "pods",
      "capture",
      "cluster",
      "health"
    ],
    "tags": [
      "kubectl",
      "nodes",
      "pods",
      "capture",
      "cluster",
      "health"
    ]
  },
  {
    "id": "extended-475",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "kubectl get events -A --sort-by=.lastTimestamp | tail -100",
    "description": "Capture recent cluster events",
    "useCase": "capture recent cluster events",
    "example": "kubectl get events -A --sort-by=.lastTimestamp | tail -100",
    "keywords": [
      "production incident playbooks",
      "kubectl",
      "events",
      "sort",
      "lasttimestamp",
      "tail",
      "capture",
      "recent"
    ],
    "tags": [
      "kubectl",
      "events",
      "sort",
      "lasttimestamp",
      "tail",
      "capture",
      "recent"
    ]
  },
  {
    "id": "extended-476",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "kubectl top nodes; kubectl top pods -A",
    "description": "Capture resource pressure",
    "useCase": "capture resource pressure",
    "example": "kubectl top nodes; kubectl top pods -A",
    "keywords": [
      "production incident playbooks",
      "kubectl",
      "nodes",
      "pods",
      "capture",
      "resource",
      "pressure"
    ],
    "tags": [
      "kubectl",
      "nodes",
      "pods",
      "capture",
      "resource",
      "pressure"
    ]
  },
  {
    "id": "extended-477",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "kubectl get deploy -A",
    "description": "Capture deployment state",
    "useCase": "capture deployment state",
    "example": "kubectl get deploy -A",
    "keywords": [
      "production incident playbooks",
      "kubectl",
      "deploy",
      "capture",
      "deployment",
      "state"
    ],
    "tags": [
      "kubectl",
      "deploy",
      "capture",
      "deployment",
      "state"
    ]
  },
  {
    "id": "extended-478",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "kubectl get ingress -A",
    "description": "Capture ingress state",
    "useCase": "capture ingress state",
    "example": "kubectl get ingress -A",
    "keywords": [
      "production incident playbooks",
      "kubectl",
      "ingress",
      "capture",
      "state"
    ],
    "tags": [
      "kubectl",
      "ingress",
      "capture",
      "state"
    ]
  },
  {
    "id": "extended-479",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "kubectl get svc -A",
    "description": "Capture service inventory",
    "useCase": "capture service inventory",
    "example": "kubectl get svc -A",
    "keywords": [
      "production incident playbooks",
      "kubectl",
      "capture",
      "service",
      "inventory"
    ],
    "tags": [
      "kubectl",
      "capture",
      "service",
      "inventory"
    ]
  },
  {
    "id": "extended-480",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "curl -fsS https://<health-endpoint>",
    "description": "Check an application health endpoint",
    "useCase": "check an application health endpoint",
    "example": "curl -fsS https://<health-endpoint>",
    "keywords": [
      "production incident playbooks",
      "curl",
      "https",
      "health",
      "endpoint",
      "check",
      "application"
    ],
    "tags": [
      "curl",
      "https",
      "health",
      "endpoint",
      "check",
      "application"
    ]
  },
  {
    "id": "extended-481",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "dig +short <hostname>; curl -I https://<hostname>",
    "description": "Check DNS and HTTP response",
    "useCase": "check DNS and HTTP response",
    "example": "dig +short <hostname>; curl -I https://<hostname>",
    "keywords": [
      "production incident playbooks",
      "short",
      "hostname",
      "curl",
      "https",
      "check",
      "http"
    ],
    "tags": [
      "short",
      "hostname",
      "curl",
      "https",
      "check",
      "http"
    ]
  },
  {
    "id": "extended-482",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "git rev-parse HEAD; git status --short",
    "description": "Record source revision",
    "useCase": "record source revision",
    "example": "git rev-parse HEAD; git status --short",
    "keywords": [
      "production incident playbooks",
      "parse",
      "head",
      "status",
      "short",
      "record",
      "source",
      "revision"
    ],
    "tags": [
      "parse",
      "head",
      "status",
      "short",
      "record",
      "source",
      "revision"
    ]
  },
  {
    "id": "extended-483",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "docker ps -a; docker stats --no-stream",
    "description": "Capture Docker workload state",
    "useCase": "capture Docker workload state",
    "example": "docker ps -a; docker stats --no-stream",
    "keywords": [
      "production incident playbooks",
      "docker",
      "stats",
      "stream",
      "capture",
      "workload"
    ],
    "tags": [
      "docker",
      "stats",
      "stream",
      "capture",
      "workload"
    ]
  },
  {
    "id": "extended-484",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "docker system df",
    "description": "Capture Docker disk pressure",
    "useCase": "capture Docker disk pressure",
    "example": "docker system df",
    "keywords": [
      "production incident playbooks",
      "docker",
      "system",
      "capture",
      "disk",
      "pressure"
    ],
    "tags": [
      "docker",
      "system",
      "capture",
      "disk",
      "pressure"
    ]
  },
  {
    "id": "extended-485",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "systemctl --failed",
    "description": "List failed systemd units",
    "useCase": "list failed systemd units",
    "example": "systemctl --failed",
    "keywords": [
      "production incident playbooks",
      "systemctl",
      "failed",
      "list",
      "systemd",
      "units"
    ],
    "tags": [
      "systemctl",
      "failed",
      "list",
      "systemd",
      "units"
    ]
  },
  {
    "id": "extended-486",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "ps aux --sort=-%cpu | head -20",
    "description": "Capture top CPU consumers",
    "useCase": "capture top CPU consumers",
    "example": "ps aux --sort=-%cpu | head -20",
    "keywords": [
      "production incident playbooks",
      "sort",
      "head",
      "capture",
      "consumers"
    ],
    "tags": [
      "sort",
      "head",
      "capture",
      "consumers"
    ]
  },
  {
    "id": "extended-487",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "ps aux --sort=-%mem | head -20",
    "description": "Capture top memory consumers",
    "useCase": "capture top memory consumers",
    "example": "ps aux --sort=-%mem | head -20",
    "keywords": [
      "production incident playbooks",
      "sort",
      "head",
      "capture",
      "memory",
      "consumers"
    ],
    "tags": [
      "sort",
      "head",
      "capture",
      "memory",
      "consumers"
    ]
  },
  {
    "id": "extended-488",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "tail -200 /var/log/syslog",
    "description": "Capture recent system log entries",
    "useCase": "capture recent system log entries",
    "example": "tail -200 /var/log/syslog",
    "keywords": [
      "production incident playbooks",
      "tail",
      "syslog",
      "capture",
      "recent",
      "system",
      "entries"
    ],
    "tags": [
      "tail",
      "syslog",
      "capture",
      "recent",
      "system",
      "entries"
    ]
  },
  {
    "id": "extended-489",
    "category": "Production Incident Playbooks",
    "subcategory": "Incident Response",
    "level": "intermediate",
    "command": "tar -czf incident-logs.tgz /var/log/<app>",
    "description": "Bundle application logs",
    "useCase": "bundle application logs",
    "example": "tar -czf incident-logs.tgz /var/log/<app>",
    "keywords": [
      "production incident playbooks",
      "incident",
      "logs",
      "bundle",
      "application"
    ],
    "tags": [
      "incident",
      "logs",
      "bundle",
      "application"
    ]
  }
];

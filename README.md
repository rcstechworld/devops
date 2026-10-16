# DHD-DevOps

DHD-DevOps is a static DevOps reference that combines a task-oriented command library with a broad **Application Hub**.

## Application Hub

The hub currently contains **57 applications** across:

- Messaging / Streaming — Kafka, Redpanda, RabbitMQ, Pulsar, NATS, ActiveMQ
- Search / Logging — Elasticsearch, OpenSearch, Kibana, Logstash, Fluent Bit, Fluentd, Loki
- Databases / Cache — Redis, Valkey, Memcached, PostgreSQL, MySQL, MariaDB, MongoDB, Cassandra, ClickHouse
- Monitoring / Observability — Prometheus, Grafana, Alertmanager, Jaeger, OpenTelemetry, VictoriaMetrics, Zabbix
- Proxy / Gateway — Nginx, HAProxy, Traefik, Envoy, Kong
- Storage — MinIO, Ceph
- CI/CD / DevOps — Jenkins, GitLab Runner, Argo CD, SonarQube, Nexus Repository, JFrog Artifactory
- Containers / Platform — Docker, containerd, Kubernetes, Helm, Rancher, K3s, kind, Minikube
- Security / Secrets — HashiCorp Vault, Keycloak, cert-manager
- Infrastructure — Terraform, Ansible, Packer, Consul

Each runbook provides a consistent path through:

1. Overview / prerequisites
2. Installation
3. Configuration
4. Start / stop / restart
5. Verification / health checks
6. Security / authentication / TLS
7. Daily operations
8. Logs / diagnostics
9. Monitoring
10. Backup / restore guidance
11. Upgrade / uninstall
12. Troubleshooting
13. Production checklist
14. Official documentation / official site

Environment tabs are explicit: Ubuntu/Debian, RHEL-family where applicable, Docker/Compose, Kubernetes, and Helm.

## Authenticity and safety

- Version-sensitive installation guidance is explicitly marked and points to official documentation.
- Commands use placeholders such as `<HOST>`, `<PASSWORD>`, `<VERSION>`, `<NAMESPACE>` and `<TOPIC>` rather than real secrets or infrastructure identifiers.
- Destructive operations are visibly warned in the UI.
- The site only displays/copies commands; it never executes commands against a host, cluster, cloud account, or database.
- Official documentation links are surfaced on every application.

Current official documentation was used as the source of truth for representative installation guidance, including Kubernetes/kubeadm, Docker Compose, Redis, PostgreSQL, Prometheus, Grafana and Redpanda. Always re-check the linked documentation before production installation because package repositories, supported versions and deployment methods change.

## Search

The global search understands both command and application intent. Examples:

```text
install kafka ubuntu
redis docker
rabbitmq create user
kafka consumer lag
elasticsearch health
postgres backup
kubernetes pod crash
docker clean
```

## My Daily Commands

- Add, edit, delete and copy personal commands.
- Add a normal library command to Daily.
- Add an application runbook step to Daily.
- Daily commands persist in browser `localStorage`.

## Run locally

Requires Node.js 18+ for tests.

```bash
npm test
python3 -m http.server 9099 --bind 127.0.0.1
```

Open `http://127.0.0.1:9099`.

## Project structure

- `index.html` — application shell and navigation
- `css/styles.css` — responsive dashboard and Application Hub UI
- `js/commands.js` — existing DevOps command library
- `js/search.js` — command search/ranking
- `js/daily.js` — browser-persistent Daily Commands
- `js/applications/schema.js` — runbook validation
- `js/applications/catalog.js` — application catalog and runbook content
- `js/applications/registry.js` — application lookup/category APIs
- `js/applications/search.js` — application/step natural-language search
- `js/applications/ui.js` — catalog/detail/runbook rendering
- `js/applications/daily.js` — runbook-to-Daily adapter
- `js/app.js` — dashboard orchestration
- `tests/` — schema, content, search, UI, safety and regression tests

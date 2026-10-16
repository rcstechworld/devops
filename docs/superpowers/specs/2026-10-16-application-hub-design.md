# DHD-DevOps Full Application Hub Design

## Goal
Add a first-class Application Hub to DHD-DevOps so users can find practical, production-oriented installation, configuration, verification, security, daily-operation, maintenance, and troubleshooting runbooks for a broad DevOps application catalog from one searchable interface.

## Scope
The hub is content-driven and static/client-side; it does not require a backend or database. The initial catalog covers major messaging, data, observability, proxy/gateway, storage, CI/CD, container/platform, security/secrets, and infrastructure applications. The catalog must be extensible without changing the rendering/search architecture.

### Initial catalog
- Messaging/Streaming: Kafka, Redpanda, RabbitMQ, Apache Pulsar, NATS, ActiveMQ
- Search/Logging: Elasticsearch, OpenSearch, Kibana, Logstash, Fluent Bit, Fluentd, Loki
- Databases/Cache: Redis, Valkey, Memcached, PostgreSQL, MySQL, MariaDB, MongoDB, Cassandra, ClickHouse
- Monitoring/Observability: Prometheus, Grafana, Alertmanager, Jaeger, OpenTelemetry, VictoriaMetrics, Zabbix
- Proxy/Gateway: Nginx, HAProxy, Traefik, Envoy, Kong
- Storage: MinIO, Ceph
- CI/CD/DevOps: Jenkins, GitLab Runner, Argo CD, SonarQube, Nexus Repository, JFrog Artifactory
- Containers/Platform: Docker, containerd, Kubernetes, Helm, Rancher, k3s, kind, Minikube
- Security/Secrets: HashiCorp Vault, Keycloak, cert-manager
- Infrastructure: Terraform, Ansible, Packer, Consul

The catalog may include additional high-value applications when official documentation and stable operational guidance are available.

## Runbook model
Every application uses a common structure:
1. Overview and prerequisites
2. Installation
3. Configuration
4. Start/stop/restart
5. Verification and health checks
6. Security/authentication/TLS where applicable
7. Daily operations
8. Logs and diagnostics
9. Monitoring
10. Backup/restore where applicable
11. Upgrade/uninstall
12. Troubleshooting/common errors
13. Production tips
14. Official documentation/reference links

Installation/environment variants are explicit rather than implied:
- Ubuntu/Debian
- RHEL-family where applicable
- Docker/Compose where applicable
- Kubernetes
- Helm where applicable

Each actionable step carries enough metadata for rendering a command card, copy action, warning, expected result, prerequisites, platform, and version/context notes.

## Search and Daily Commands integration
Application metadata and runbook steps participate in the same natural-language search experience as the existing command library. Search should understand intents such as `install kafka ubuntu`, `redis docker`, `rabbitmq create user`, `kafka consumer lag`, `elasticsearch health`, and `postgres backup`.

Runbook command cards expose a `Copy` action and an `Add to Daily` action. Application content must not break existing My Daily Commands persistence or command-library search.

## UI
Add an `Applications` top-level navigation area with category filtering and application cards. Opening an application shows its overview plus environment tabs and section navigation. The application detail view should make copyable commands prominent and keep long runbooks scannable.

## Data architecture
Use static JavaScript/JSON-style content modules under `js/applications/` with a small registry/index. Keep rendering, search, and data separate. Prefer many focused application data files or category files over one monolithic file. The runbook schema is stable and content additions should require only data changes.

Suggested application record:
- `id`, `name`, `category`, `icon`, `description`
- `environments`
- `sections`
- `relatedCommands`
- `docsUrl`
- `officialSiteUrl`
- optional `versionNotes`

Suggested step record:
- `id`, `title`, `command`
- `description`, `warning`
- `prerequisites`, `expectedOutput`
- `platform`, `method`, `version`
- `tags`, `keywords`

## Version and accuracy policy
Installation commands and version-specific behavior must not be presented as timeless facts. Content should identify platform/method and, when relevant, version context. Official project documentation is the source of truth for changing installation details. The UI should surface documentation links for verification.

## Safety/operational policy
Commands that can delete data, remove clusters, reset state, expose credentials, or otherwise cause destructive impact must be visibly marked with warnings. No real secrets should appear in examples. Examples should use placeholders such as `<PASSWORD>` and `<HOST>`.

## Compatibility
The feature must preserve the existing command library, search behavior, Daily Commands behavior, and static hosting. No backend is introduced for this feature.

## Testing
Use TDD. Tests must cover runbook schema validation, application registry/category coverage, environment filtering, natural-language search across applications and steps, warning propagation, copy/Add-to-Daily integration, rendering/navigation smoke behavior, and regression of the existing command/search functionality.

## Success criteria
- Users can discover the Applications section without losing access to existing commands.
- The initial catalog contains broad coverage across the categories above.
- Every listed application has a consistent runbook structure, with unavailable sections represented honestly rather than fabricated.
- Users can search by task instead of exact application/command names.
- Commands are copyable and can be added to Daily Commands.
- Destructive operations are clearly warned.
- The site remains fully static and works through the existing local static server workflow on port 9099.

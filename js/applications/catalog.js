import { REQUIRED_SECTIONS } from './schema.js';

const categories = [
  { id:'messaging', name:'Messaging / Streaming', icon:'📨' },
  { id:'search', name:'Search / Logging', icon:'🔎' },
  { id:'data', name:'Databases / Cache', icon:'🗄️' },
  { id:'observability', name:'Monitoring / Observability', icon:'📊' },
  { id:'proxy', name:'Proxy / Gateway', icon:'🌐' },
  { id:'storage', name:'Storage', icon:'🪣' },
  { id:'cicd', name:'CI/CD / DevOps', icon:'🚀' },
  { id:'platform', name:'Containers / Platform', icon:'☸️' },
  { id:'security', name:'Security / Secrets', icon:'🔐' },
  { id:'infra', name:'Infrastructure', icon:'🏗️' }
];

const defs = [
  ['messaging','kafka','Apache Kafka','📨','https://kafka.apache.org/','https://kafka.apache.org/documentation/','Event streaming platform',['ubuntu','rhel','docker','kubernetes','helm']],
  ['messaging','redpanda','Redpanda','🐼','https://www.redpanda.com/','https://docs.redpanda.com/','Kafka-compatible streaming platform',['ubuntu','docker','kubernetes','helm']],
  ['messaging','rabbitmq','RabbitMQ','🐇','https://www.rabbitmq.com/','https://www.rabbitmq.com/docs','Message broker with AMQP and protocol adapters',['ubuntu','rhel','docker','kubernetes','helm']],
  ['messaging','pulsar','Apache Pulsar','📨','https://pulsar.apache.org/','https://pulsar.apache.org/docs/','Distributed messaging and streaming platform',['docker','kubernetes','helm']],
  ['messaging','nats','NATS','📡','https://nats.io/','https://docs.nats.io/','Lightweight messaging system',['ubuntu','docker','kubernetes','helm']],
  ['messaging','activemq','Apache ActiveMQ','📨','https://activemq.apache.org/','https://activemq.apache.org/components/artemis/documentation/','Message broker for JMS and other protocols',['ubuntu','docker','kubernetes']],
  ['search','elasticsearch','Elasticsearch','🔎','https://www.elastic.co/elasticsearch','https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html','Distributed search and analytics engine',['ubuntu','rhel','docker','kubernetes','helm']],
  ['search','opensearch','OpenSearch','🔍','https://opensearch.org/','https://opensearch.org/docs/latest/','Open-source search and analytics suite',['linux','docker','kubernetes','helm']],
  ['search','kibana','Kibana','📈','https://www.elastic.co/kibana','https://www.elastic.co/docs/solutions/search/kibana','Visualization and UI for Elastic data',['docker','kubernetes','helm']],
  ['search','logstash','Logstash','🧰','https://www.elastic.co/logstash','https://www.elastic.co/guide/en/logstash/current/index.html','Data ingestion and transformation pipeline',['ubuntu','rhel','docker','kubernetes']],
  ['search','fluent-bit','Fluent Bit','🪶','https://fluentbit.io/','https://docs.fluentbit.io/','Lightweight log and telemetry processor',['linux','docker','kubernetes','helm']],
  ['search','fluentd','Fluentd','🪶','https://www.fluentd.org/','https://docs.fluentd.org/','Log collector and processor',['linux','docker','kubernetes','helm']],
  ['search','loki','Grafana Loki','📜','https://grafana.com/oss/loki/','https://grafana.com/docs/loki/latest/','Log aggregation system optimized for labels',['docker','kubernetes','helm']],
  ['data','redis','Redis','⚡','https://redis.io/','https://redis.io/docs/latest/','In-memory data store and cache',['ubuntu','rhel','docker','kubernetes','helm']],
  ['data','valkey','Valkey','🔑','https://valkey.io/','https://valkey.io/docs/','Open-source in-memory data store',['linux','docker','kubernetes','helm']],
  ['data','memcached','Memcached','🧠','https://memcached.org/','https://docs.memcached.org/','Distributed memory caching system',['ubuntu','rhel','docker']],
  ['data','postgresql','PostgreSQL','🐘','https://www.postgresql.org/','https://www.postgresql.org/docs/','Relational database system',['ubuntu','rhel','docker','kubernetes']],
  ['data','mysql','MySQL','🐬','https://www.mysql.com/','https://dev.mysql.com/doc/','Relational database system',['ubuntu','rhel','docker','kubernetes']],
  ['data','mariadb','MariaDB','🦭','https://mariadb.org/','https://mariadb.com/kb/en/documentation/','Open-source relational database',['ubuntu','rhel','docker','kubernetes']],
  ['data','mongodb','MongoDB','🍃','https://www.mongodb.com/','https://www.mongodb.com/docs/','Document database',['ubuntu','docker','kubernetes']],
  ['data','cassandra','Apache Cassandra','🗃️','https://cassandra.apache.org/','https://cassandra.apache.org/doc/','Distributed wide-column database',['linux','docker','kubernetes','helm']],
  ['data','clickhouse','ClickHouse','⚡','https://clickhouse.com/','https://clickhouse.com/docs/','Column-oriented analytical database',['linux','docker','kubernetes','helm']],
  ['observability','prometheus','Prometheus','📊','https://prometheus.io/','https://prometheus.io/docs/','Metrics monitoring and alerting system',['linux','docker','kubernetes','helm']],
  ['observability','grafana','Grafana','📈','https://grafana.com/','https://grafana.com/docs/grafana/latest/','Metrics, logs and traces visualization platform',['ubuntu','rhel','docker','kubernetes','helm']],
  ['observability','alertmanager','Alertmanager','🚨','https://prometheus.io/docs/alerting/latest/alertmanager/','https://prometheus.io/docs/alerting/latest/alertmanager/','Prometheus alert routing and notification service',['linux','docker','kubernetes','helm']],
  ['observability','jaeger','Jaeger','🔬','https://www.jaegertracing.io/','https://www.jaegertracing.io/docs/','Distributed tracing platform',['docker','kubernetes','helm']],
  ['observability','opentelemetry','OpenTelemetry','🔭','https://opentelemetry.io/','https://opentelemetry.io/docs/','Vendor-neutral telemetry framework',['linux','docker','kubernetes']],
  ['observability','victoriametrics','VictoriaMetrics','📉','https://victoriametrics.com/','https://docs.victoriametrics.com/','Time-series monitoring platform',['linux','docker','kubernetes','helm']],
  ['observability','zabbix','Zabbix','🖥️','https://www.zabbix.com/','https://www.zabbix.com/documentation/current/','Infrastructure monitoring platform',['ubuntu','rhel','docker','kubernetes']],
  ['proxy','nginx','Nginx','🌐','https://nginx.org/','https://nginx.org/en/docs/','Web server and reverse proxy',['ubuntu','rhel','docker','kubernetes']],
  ['proxy','haproxy','HAProxy','⚖️','https://www.haproxy.org/','https://www.haproxy.org/documentation/','TCP/HTTP load balancer and proxy',['ubuntu','rhel','docker','kubernetes']],
  ['proxy','traefik','Traefik','🚦','https://traefik.io/','https://doc.traefik.io/traefik/','Dynamic reverse proxy and ingress controller',['linux','docker','kubernetes','helm']],
  ['proxy','envoy','Envoy Proxy','🚪','https://www.envoyproxy.io/','https://www.envoyproxy.io/docs/','Cloud-native proxy',['linux','docker','kubernetes']],
  ['proxy','kong','Kong Gateway','🚪','https://konghq.com/','https://docs.konghq.com/','API gateway and service connectivity platform',['linux','docker','kubernetes','helm']],
  ['storage','minio','MinIO','🪣','https://min.io/','https://min.io/docs/minio/linux/index.html','S3-compatible object storage',['linux','docker','kubernetes','helm']],
  ['storage','ceph','Ceph','💾','https://ceph.io/','https://docs.ceph.com/','Distributed storage platform',['linux','kubernetes']],
  ['cicd','jenkins','Jenkins','🔨','https://www.jenkins.io/','https://www.jenkins.io/doc/','Automation server for CI/CD',['ubuntu','rhel','docker','kubernetes']],
  ['cicd','gitlab-runner','GitLab Runner','🏃','https://docs.gitlab.com/runner/','https://docs.gitlab.com/runner/','GitLab CI job runner',['linux','docker','kubernetes']],
  ['cicd','argo-cd','Argo CD','🚀','https://argo-cd.readthedocs.io/','https://argo-cd.readthedocs.io/en/stable/','GitOps continuous delivery for Kubernetes',['kubernetes','helm']],
  ['cicd','sonarqube','SonarQube','🔎','https://www.sonarsource.com/products/sonarqube/','https://docs.sonarsource.com/sonarqube-server/','Continuous code quality platform',['linux','docker','kubernetes']],
  ['cicd','nexus','Nexus Repository','📦','https://www.sonatype.com/products/repository-oss','https://help.sonatype.com/en/sonatype-nexus-repository.html','Artifact repository manager',['linux','docker','kubernetes']],
  ['cicd','artifactory','JFrog Artifactory','📦','https://jfrog.com/artifactory/','https://jfrog.com/help/r/jfrog-artifactory-documentation','Universal artifact repository',['linux','docker','kubernetes']],
  ['platform','docker','Docker','🐳','https://www.docker.com/','https://docs.docker.com/','Container runtime and tooling',['ubuntu','rhel','windows','macos']],
  ['platform','containerd','containerd','📦','https://containerd.io/','https://github.com/containerd/containerd/tree/main/docs','Industry-standard container runtime',['linux']],
  ['platform','kubernetes','Kubernetes','☸️','https://kubernetes.io/','https://kubernetes.io/docs/','Container orchestration platform',['linux','kubernetes']],
  ['platform','helm','Helm','⎈','https://helm.sh/','https://helm.sh/docs/','Kubernetes package manager',['linux','macos','windows']],
  ['platform','rancher','Rancher','🐮','https://www.rancher.com/','https://ranchermanager.docs.rancher.com/','Kubernetes management platform',['docker','kubernetes']],
  ['platform','k3s','K3s','☸️','https://k3s.io/','https://docs.k3s.io/','Lightweight Kubernetes distribution',['linux']],
  ['platform','kind','kind','🧪','https://kind.sigs.k8s.io/','https://kind.sigs.k8s.io/docs/user/','Kubernetes in Docker for local clusters',['linux','macos','windows']],
  ['platform','minikube','Minikube','🧪','https://minikube.sigs.k8s.io/','https://minikube.sigs.k8s.io/docs/','Local Kubernetes environment',['linux','macos','windows']],
  ['security','vault','HashiCorp Vault','🔐','https://www.vaultproject.io/','https://developer.hashicorp.com/vault/docs','Secrets management and identity platform',['linux','docker','kubernetes','helm']],
  ['security','keycloak','Keycloak','🛡️','https://www.keycloak.org/','https://www.keycloak.org/documentation','Identity and access management platform',['linux','docker','kubernetes','helm']],
  ['security','cert-manager','cert-manager','📜','https://cert-manager.io/','https://cert-manager.io/docs/','Kubernetes certificate automation',['kubernetes','helm']],
  ['infra','terraform','Terraform','🏗️','https://developer.hashicorp.com/terraform','https://developer.hashicorp.com/terraform/docs','Infrastructure as code tool',['linux','macos','windows']],
  ['infra','ansible','Ansible','⚙️','https://www.ansible.com/','https://docs.ansible.com/','Automation and configuration management',['ubuntu','rhel','macos']],
  ['infra','packer','Packer','📦','https://www.packer.io/','https://developer.hashicorp.com/packer/docs','Machine image automation tool',['linux','macos','windows']],
  ['infra','consul','HashiCorp Consul','🧭','https://www.consul.io/','https://developer.hashicorp.com/consul/docs','Service networking and discovery platform',['linux','docker','kubernetes']]
];

const core = {
  kafka: {
    installs:[
      ['ubuntu','apt','Install Java prerequisite','sudo apt-get update && sudo apt-get install -y openjdk-17-jre-headless','Use the Java version supported by the Kafka release you select.'],
      ['docker','docker','Run Kafka in a development container','docker run -d --name kafka -p 9092:9092 apache/kafka:<VERSION>','For production, use the official deployment guidance and persistent storage.'],
      ['kubernetes','helm','Use a Kafka Kubernetes distribution/operator','kubectl create namespace kafka','Choose and review the operator/chart from the Kafka project ecosystem before production use.']
    ],
    daily:[
      ['linux','kafka-topics','List topics','bin/kafka-topics.sh --bootstrap-server <BROKER>:9092 --list'],
      ['linux','kafka-consumer-groups','Check consumer lag','bin/kafka-consumer-groups.sh --bootstrap-server <BROKER>:9092 --describe --group <GROUP>'],
      ['linux','kafka-console-producer','Produce test messages','bin/kafka-console-producer.sh --bootstrap-server <BROKER>:9092 --topic <TOPIC>'],
      ['linux','kafka-console-consumer','Consume test messages','bin/kafka-console-consumer.sh --bootstrap-server <BROKER>:9092 --topic <TOPIC> --from-beginning']
    ]
  },
  redpanda:{ installs:[['docker','docker','Start Redpanda locally','docker run -d --name redpanda -p 8081:8081 -p 9092:9092 redpandadata/redpanda:<VERSION>','Use the Redpanda deployment documentation for production networking and storage.'],['kubernetes','helm','Install the Redpanda operator/chart','helm repo add redpanda https://charts.redpanda.com && helm repo update','Pin a chart version after reviewing the current compatibility matrix.']], daily:[['linux','rpk','Check cluster health','rpk cluster health --api-urls <ADMIN_API>'],['linux','rpk','List topics','rpk topic list --brokers <BROKER>:9092'],['linux','rpk','Consume a topic','rpk topic consume <TOPIC> --brokers <BROKER>:9092']]},
  rabbitmq:{ installs:[['ubuntu','apt','Install RabbitMQ from the official repository','See the RabbitMQ install guide for your Ubuntu release: https://www.rabbitmq.com/docs/install-debian','Repository setup changes by RabbitMQ/Erlang release; follow the current official guide.'],['docker','docker','Run RabbitMQ for development','docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:<VERSION>-management','Do not expose the management interface publicly without authentication and network controls.']], daily:[['linux','rabbitmqctl','List queues','rabbitmqctl list_queues name messages messages_ready messages_unacknowledged'],['linux','rabbitmqctl','List users','rabbitmqctl list_users'],['linux','rabbitmqctl','Check cluster status','rabbitmqctl cluster_status']]},
  elasticsearch:{ installs:[['docker','docker','Run Elasticsearch for a local test','docker network create elastic && docker run -d --name elasticsearch --net elastic -p 9200:9200 -e discovery.type=single-node -e xpack.security.enabled=false docker.elastic.co/elasticsearch/elasticsearch:<VERSION>','The disabled-security flag is for a local test only; production deployments must use the security configuration in Elastic documentation.']], daily:[['linux','curl','Check cluster health','curl -s http://<HOST>:9200/_cluster/health?pretty'],['linux','curl','List indices','curl -s http://<HOST>:9200/_cat/indices?v'],['linux','curl','Check node stats','curl -s http://<HOST>:9200/_nodes/stats?pretty']]},
  redis:{ installs:[['ubuntu','apt','Install Redis Open Source','sudo apt-get update && sudo apt-get install -y redis-server','For current repository setup and supported versions, verify the Redis Linux installation guide.'],['docker','docker','Run Redis with Docker','docker run -d --name redis -p 6379:6379 redis:<VERSION>','Add persistent storage and authentication before treating a container deployment as production.']], daily:[['linux','redis-cli','Check Redis health','redis-cli -h <HOST> ping'],['linux','redis-cli','Inspect memory usage','redis-cli -h <HOST> info memory'],['linux','redis-cli','List keyspace statistics','redis-cli -h <HOST> info keyspace'],['linux','redis-cli','Check connected clients','redis-cli -h <HOST> info clients']]},
  postgresql:{ installs:[['ubuntu','apt','Install PostgreSQL','sudo apt-get update && sudo apt-get install -y postgresql','Ubuntu packages may provide a different major version; use the PostgreSQL Apt Repository for a specific supported major.'],['docker','docker','Run PostgreSQL for development','docker run -d --name postgres -e POSTGRES_PASSWORD=<PASSWORD> -p 5432:5432 postgres:<VERSION>','Use a secret manager and persistent volume for production.']], daily:[['linux','psql','List databases','psql -h <HOST> -U <USER> -c "\\l"'],['linux','psql','List active sessions','psql -h <HOST> -U <USER> -c "select pid,usename,state,query from pg_stat_activity;"'],['linux','pg_dump','Backup one database','pg_dump -h <HOST> -U <USER> -Fc <DATABASE> > <DATABASE>.dump']]},
  prometheus:{ installs:[['docker','docker','Run Prometheus with persistent storage','docker volume create prometheus-data && docker run -d --name prometheus -p 9090:9090 -v prometheus-data:/prometheus prom/prometheus:<VERSION>','Official Prometheus docs recommend persistent storage for production upgrades.']], daily:[['linux','curl','Check Prometheus readiness','curl -fsS http://<HOST>:9090/-/ready'],['linux','curl','Check targets','curl -s http://<HOST>:9090/api/v1/targets'],['linux','promtool','Validate configuration','promtool check config prometheus.yml']]},
  grafana:{ installs:[['docker','docker','Run Grafana for development','docker run -d --name grafana -p 3000:3000 grafana/grafana:<VERSION>','Configure persistent storage and admin credentials for production.']], daily:[['linux','curl','Check Grafana health','curl -s http://<HOST>:3000/api/health'],['linux','curl','Check version endpoint','curl -s http://<HOST>:3000/api/health | jq'],['linux','grafana-cli','List installed plugins','grafana cli plugins ls']]},
  docker:{ installs:[['ubuntu','apt','Install Docker Engine','See the official Docker Engine installation guide for your Ubuntu release.','Do not use the convenience script blindly on production hosts.'],['rhel','dnf','Install Docker Engine','See the official Docker Engine installation guide for RHEL-family systems.','Repository/package names can change; follow current Docker documentation.']], daily:[['linux','docker','List running containers','docker ps'],['linux','docker','Inspect container','docker inspect <CONTAINER>'],['linux','docker','Show container logs','docker logs --tail 200 <CONTAINER>'],['linux','docker','Prune unused resources','docker system prune','WARNING: removes unused Docker objects; review the target host before running.']]},
  kubernetes:{ installs:[['linux','kubeadm','Install Kubernetes tools','Follow the official kubeadm installation guide for the Kubernetes minor version you intend to deploy.','Kubernetes repositories and supported versions are version-specific; do not copy an old repository URL.'],['linux','kubectl','Verify kubectl client','kubectl version --client','Keep kubectl within the supported version skew for your cluster.']], daily:[['linux','kubectl','List pods across namespaces','kubectl get pods -A -o wide'],['linux','kubectl','Check nodes','kubectl get nodes -o wide'],['linux','kubectl','Check failing pods','kubectl get pods -A --field-selector=status.phase!=Running'],['linux','kubectl','Inspect a workload','kubectl describe pod <POD> -n <NAMESPACE>']]},
  helm:{ installs:[['linux','script/package','Install Helm','Use the official Helm installation guide for your operating system.','Prefer a package manager or verified release artifact in controlled environments.']], daily:[['linux','helm','List releases','helm list -A'],['linux','helm','Inspect release values','helm get values <RELEASE> -n <NAMESPACE>'],['linux','helm','Render a chart locally','helm template <RELEASE> <CHART> -f values.yaml']]},
  nginx:{ installs:[['ubuntu','apt','Install Nginx','sudo apt-get update && sudo apt-get install -y nginx','Verify the package version and security updates for the target distribution.'],['docker','docker','Run Nginx','docker run -d --name nginx -p 8080:80 nginx:<VERSION>','Mount a controlled configuration and persistent logs for production.']], daily:[['linux','nginx','Validate configuration','sudo nginx -t'],['linux','systemctl','Check service status','sudo systemctl status nginx --no-pager'],['linux','journalctl','View recent errors','sudo journalctl -u nginx -n 100 --no-pager']]},
  terraform:{ installs:[['linux','package','Install Terraform','Follow the official Terraform install guide for your OS and desired version.','Pin Terraform versions in CI and production workflows.']], daily:[['linux','terraform','Validate configuration','terraform validate'],['linux','terraform','Preview changes','terraform plan'],['linux','terraform','Format configuration','terraform fmt -recursive']]},
  ansible:{ installs:[['ubuntu','apt','Install Ansible','sudo apt-get update && sudo apt-get install -y ansible','Distribution versions may lag upstream; use the official installation guide if a newer supported version is required.']], daily:[['linux','ansible','Check inventory','ansible-inventory --graph'],['linux','ansible','Run a connectivity test','ansible all -m ping'],['linux','ansible-playbook','Run a playbook check','ansible-playbook -i inventory site.yml --check']]}
};

function step(id,title,command,description,platform='linux',method='cli',extra={}) { return {id,title,command,description,platform,method,version:extra.version || 'Verify against current official documentation',tags:extra.tags || [],keywords:extra.keywords || [],warning:extra.warning || '',prerequisites:extra.prerequisites || [],expectedOutput:extra.expectedOutput || ''}; }
function note(id,title,noteText,platform='all',method='docs') { const s = step(id,title,'',noteText,platform,method,{tags:['documentation'],keywords:['install','configure','official docs'] ,expectedOutput:'Use the linked official documentation for the selected version.'}); s.note = noteText; return s; }
function makeApp(def) {
  const [category,id,name,icon,officialSiteUrl,docsUrl,description,environments] = def;
  const p = core[id] || {};
  const sections = Object.fromEntries(REQUIRED_SECTIONS.map(s => [s, []]));
  sections.overview = [note('overview','Scope and prerequisites',`${description}. Check the official documentation for supported versions, OS/Kubernetes compatibility, resource requirements, and release-specific changes.`)];
  sections.install = (p.installs || [
    [environments[0] || 'linux','official-docs','Install using the official guide','',`Start from the vendor's current installation guide: ${docsUrl}`]
  ]).map((x,i) => !String(x[3] || '').trim() ? note(`install-${i}`,x[2] || 'Installation guide',x[4] || docsUrl,x[0],x[1]) : step(`install-${i}`,x[2],x[3],x[4] || 'Follow the linked official installation guide.',x[0],x[1],{tags:['install'],keywords:['installation','setup']}));
  sections.configure = [note('configure-1','Configuration baseline',`Use the application's configuration reference before changing production defaults. Keep secrets in environment variables or a secret manager, not in source control.`,environments[0] || 'linux','config')];
  sections.lifecycle = [
    step('lifecycle-1','Start or enable the service',id === 'docker' ? 'docker start <CONTAINER>' : `sudo systemctl enable --now ${id}`, 'Use the native service manager or deployment controller for the selected installation method.', 'linux','service', {keywords:['start','enable','restart']}),
    step('lifecycle-2','Restart safely',id === 'kubernetes' ? 'kubectl rollout restart deployment/<DEPLOYMENT> -n <NAMESPACE>' : id === 'docker' ? 'docker restart <CONTAINER>' : `sudo systemctl restart ${id}`, 'Restart only after checking application-specific availability and persistence behavior.', 'linux','service', {keywords:['restart','service']})
  ];
  sections.verify = [
    step('verify-1','Verify process/service',id === 'docker' ? 'docker ps --filter name=<CONTAINER>' : id === 'kubernetes' ? 'kubectl get pods -A' : `sudo systemctl is-active ${id}`, 'Confirm the process is running before testing the application protocol.', 'linux','verify',{keywords:['health','status','verify']}),
    note('verify-2','Verify application endpoint',`Use the health/status endpoint or CLI documented at ${docsUrl}.`,'all','docs')
  ];
  sections.security = [note('security-1','Security baseline',`Do not expose management ports publicly. Configure authentication, TLS, network policy/firewall rules, least-privilege identities, and secret rotation using the official security documentation.`)];
  sections.daily = (p.daily || [
    [environments[0] || 'linux','cli','Inspect service status',id === 'docker' ? 'docker ps' : id === 'kubernetes' ? 'kubectl get pods -A' : `sudo systemctl status ${id} --no-pager`],
    [environments[0] || 'linux','logs','Inspect recent logs',id === 'docker' ? 'docker logs --tail 200 <CONTAINER>' : id === 'kubernetes' ? 'kubectl logs -n <NAMESPACE> <POD> --tail=200' : `sudo journalctl -u ${id} -n 200 --no-pager`]
  ]).map((x,i) => step(`daily-${i}`,x[2],x[3],`Common daily operation for ${name}. Confirm the exact command for your deployment method in the official documentation.`,x[0],x[1],{tags:['daily'],keywords:['daily operations','operations','status']}));
  sections.logs = [
    step('logs-1','Read recent logs',id === 'docker' ? 'docker logs --tail 200 <CONTAINER>' : id === 'kubernetes' ? 'kubectl logs -n <NAMESPACE> <POD> --tail=200' : `sudo journalctl -u ${id} -n 200 --no-pager`, 'Use application-native logs when available and correlate timestamps with monitoring.', 'linux','logs',{keywords:['logs','diagnostics']}),
    note('logs-2','Log locations',`Check the official documentation for log paths/containers and rotation behavior for your installation method.`)
  ];
  sections.monitoring = [note('monitoring-1','Monitoring baseline',`Monitor availability, CPU, memory, disk, connections, request/operation latency, errors, and application-specific saturation signals. Use the project's supported metrics/exporter integration.`)];
  sections.backup = [note('backup-1','Backup strategy',`Use the application's documented backup/export mechanism where applicable. Validate restore procedures regularly; do not treat filesystem copying of a live database as a generic backup method.`)];
  sections.upgrade = [
    note('upgrade-1','Upgrade planning',`Review the release notes, compatibility matrix, migration notes, and rollback procedure for the exact version before upgrading. Pin versions in production.`),
    note('upgrade-2','Uninstall / rollback',`Use the package manager, Helm, operator, or vendor uninstall procedure appropriate to the deployment method. Preserve data unless deletion is explicitly intended.`)
  ];
  sections.troubleshooting = [
    step('trouble-1','Service is down',id === 'docker' ? 'docker ps -a --filter name=<CONTAINER>' : id === 'kubernetes' ? 'kubectl get pods -A -o wide' : `sudo systemctl status ${id} --no-pager`, 'Confirm process state, inspect logs, verify configuration, then check dependencies and ports. Do not repeatedly restart without identifying the failure.', 'linux','diagnose',{tags:['troubleshooting'],keywords:['down','failed','not running']}),
    step('trouble-2','Port/connection problem','ss -lntp | grep <PORT>', 'Confirm the expected listener exists, then verify firewall, DNS, TLS, credentials, and client configuration.', 'linux','network',{tags:['troubleshooting'],keywords:['connection refused','port','network']})
  ];
  sections.production = [note('production-1','Production checklist',`Pin versions; persist data; restrict network access; enable authentication/TLS; centralize logs; expose metrics; configure backups; document restore; test upgrades; and define alert thresholds.`)];
  return { id,name,category,icon,description,environments,sections,relatedCommands:[],docsUrl,officialSiteUrl,versionNotes:'Version-sensitive installation and configuration details must be checked against the linked official documentation before production use.' };
}

export const applications = defs.map(makeApp);
export { categories };

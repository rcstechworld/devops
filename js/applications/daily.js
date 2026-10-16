export function addRunbookStepToDaily(step, application) {
  return {
    name: `${application.name}: ${step.title}`,
    command: step.command || step.note || step.description,
    category: `Application: ${categoryName(application.category)}`,
    description: step.description,
    tags: [application.id, application.category, ...(step.tags || []), ...(step.keywords || [])].filter(Boolean),
    sourceApplicationId: application.id,
    sourceStepId: step.id
  };
}
function categoryName(id){ return ({messaging:'Messaging / Streaming',search:'Search / Logging',data:'Databases / Cache',observability:'Monitoring / Observability',proxy:'Proxy / Gateway',storage:'Storage',cicd:'CI/CD / DevOps',platform:'Containers / Platform',security:'Security / Secrets',infra:'Infrastructure'})[id] || id; }

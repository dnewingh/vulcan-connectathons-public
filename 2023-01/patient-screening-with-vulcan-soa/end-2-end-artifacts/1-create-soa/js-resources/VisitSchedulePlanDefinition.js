var VisitSchedulePlanDefinition = JSON.parse(`
{
  "fullUrl": "urn:uuid:VisitSchedulePlanDefinition",
  "resource": {
      "resourceType": "PlanDefinition",
      "meta": {
        "tag": [
          {
            "code": "202301-vulcan-soa-dn"
          }
        ]
      },
      "title": "VisitSchedulePlanDefinition",
      "version": "Protocol #: SOA-WITH-ELLIE-001 v1.0",
      "status": "active",
      "action": [
        {
          "title": "ScreeningVisit",
          "definitionUri": "urn:uuid:ScreeningVisitPlanDefinition"
        },
        {
          "title": "BaselineVisit",
          "definitionUri": "urn:uuid:BaselineVisitPlanDefinition"
        }
      ]
    },
  "request": {
    "method": "POST",
    "url": "PlanDefinition"
  }
}
`);

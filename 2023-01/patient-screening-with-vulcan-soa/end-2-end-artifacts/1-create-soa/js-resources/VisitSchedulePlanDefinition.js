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
var BaselineVisitPlanDefinition = JSON.parse(`
{
    "fullUrl": "urn:uuid:BaselineVisitPlanDefinition",
    "resource": {
      "resourceType": "PlanDefinition",
      "meta": {
        "tag": [
          {
            "code": "202301-vulcan-soa-dn"
          }
        ]
      },
      "title": "BaselineVisitPlanDefinition",
      "status": "active",
      "action": [
        {
          "title": "Hematology",
          "definitionUri": "urn:uuid:HematologyActivityDefinition"
        }
      ]
    },
    "request": {
      "method": "POST",
      "url": "PlanDefinition"
    }
  }
`);
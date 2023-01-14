var ScreeningVisitPlanDefinition = JSON.parse(`
{
  "fullUrl": "urn:uuid:ScreeningVisitPlanDefinition",
  "resource": {
    "resourceType": "PlanDefinition",
    "meta": {
      "tag": [
        {
          "code": "202301-vulcan-soa-dn"
        }
      ]
    },
    "title": "ScreeningVisitPlanDefinition",
    "version": "Protocol #: SOA-WITH-ELLIE-001 v1.0",
    "status": "active",
    "action": [
      {
        "title": "Hematology",
        "definitionUri": "urn:uuid:HematologyActivityDefinition"
      },
      {
        "title": "Eligibility Assessment",
        "action": [
          {
            "title": "Medical Chart Review",
            "action": [
              {
                "title": "Inclusion #1: At least 18 years of age"
              },
              {
                "title": "Inclusion #2: Confirmed diagnosis of heart disease"
              }
            ]
          },
          {
            "title": "Screening Labs",
            "action": [
              {
                "title": "Inclusion #3: Normal cholesterol level (less than 200 mg/dL)"
              }
            ]
          }
        ]
      }
    ]
  },
  "request": {
    "method": "POST",
    "url": "PlanDefinition"
  }
}
`);

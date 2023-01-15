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
          "id": "ScreeningVisit",
          "title": "ScreeningVisit",
          "definitionUri": "urn:uuid:ScreeningVisitPlanDefinition"
        },
        {
          "id": "BaselineVisit",
          "title": "BaselineVisit",
          "definitionUri": "urn:uuid:BaselineVisitPlanDefinition",
          "relatedAction" : [
            {
              "extension" : [
                {
                  "url" : "http://hl7.org/fhir/uv/vulcan-schedule/StructureDefinition/AcceptableOffsetRangeSoa",
                  "valueRange" : {
                    "low" : {
                      "value" : 3,
                      "system" : "http://unitsofmeasure.org",
                      "code" : "d"
                    },
                    "high" : {
                      "value" : 7,
                      "system" : "http://unitsofmeasure.org",
                      "code" : "d"
                    }
                  }
                }
              ],
              "actionId" : "ScreeningVisit",
              "relationship" : "after",
              "offsetDuration" : {
                "value" : 5,
                "system" : "http://unitsofmeasure.org",
                "code" : "d"
              }
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

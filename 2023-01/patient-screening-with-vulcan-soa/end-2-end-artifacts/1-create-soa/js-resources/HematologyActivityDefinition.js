var HematologyActivityDefinition = JSON.parse(`
{
  "fullUrl": "urn:uuid:HematologyActivityDefinition",
  "resource": {
    "resourceType": "ActivityDefinition",
    "meta": {
      "tag": [
        {
          "code": "202301-vulcan-soa-dn"
        }
      ]
    },
    "title": "HematologyActivityDefinition",
    "status": "active",
    "kind": "ServiceRequest",
    "code": {
      "coding": [
        {
          "system": "http://loinc.org",
          "code": "2093-3",
          "display": "Cholesterol [Mass/volume] in Serum or Plasma"
        }
      ],
      "text": "Cholesterol, total"
    }
  },
  "request": {
    "method": "POST",
    "url": "ActivityDefinition"
  }
}
`);
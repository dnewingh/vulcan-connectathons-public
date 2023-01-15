# Introduction

This project contains various artifacts utilized for testing the *Patient Screening with Vulcan-SoA* use case.
- **end-2-end-artifacts**: contains sub-directories of mock resources .  Mock resources are organized into sub-directories, where each sub-directory maps to a test case outlined on sharepoint (https://phuseaccount.sharepoint.com/sites/InvestigatingtheuseofFHIRinClinicalResearch/Shared%20Documents/General/2023-1%20Connectathon/202301%20Patient%20Screening%20with%20Vulcan-SoA%20Test%20Script.xlsx?web=1)
- **legacy-data**: contains reference data from past work that may be useful for building end-2-end artifacts

# Staging Environment
https://happy-cliff-05ae6870f-5.eastus2.2.azurestaticapps.net/launch-selector

UN: FHIRTWO
PWD: EpicFhir11!

Example Patients
- Davis, Elijah John
- McGinnis, Warren James

# Connectathon Summary

## Key Activities
Extended patient screening SMART on FHIR app (Ellie) with two additional features
1. Verify study definition configuration against Vulcan-SoA prior to initiating patient screening
2. Display visit window based on Vulcan-SoA for scheduling next visit after completing patient screening

## Key Observations
- Connecting to a FHIR server to consume Vulcan-SoA resources is easy.  Especially compared to alternative study definition repositories which are implemented on non-FHIR stacks (i.e. DDF)
- Additional guidance in the IG would be helpful to clarify how Version should be propogated across child SoA resources
- Additional guidance in the IG would be helpful to clarify how to specify action.id and action.relatedAction.actionId
- Additional guidance in the IG would be helpful to clarify how common visit types / actitivies should be modelled in order to streamline consumption (i.e. should Eligiblity Assessment be free text PlanDefinition.actions, or a Questionnaire, or a Group, etc..)


# Introduction

This project contains various artifacts utilized for testing the *Patient Screening with Vulcan-SoA* use case.
- **end-2-end-artifacts**: contains sub-directories of mock resources .  Mock resources are organized into sub-directories, where each sub-directory maps to a test case outlined on sharepoint (https://phuseaccount.sharepoint.com/sites/InvestigatingtheuseofFHIRinClinicalResearch/Shared%20Documents/General/2023-1%20Connectathon/202301%20Patient%20Screening%20with%20Vulcan-SoA%20Test%20Script.xlsx?web=1)
- **legacy-data**: contains reference data from past work that may be useful for building end-2-end artifacts

# Staging Environment
https://vulcan.bioveras.com/

UN: FHIRTWO
PWD: EpicFhir11!

Example Patients
- McGinnis, Warren James
- Davis, Elijah John

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

## References
[CDASHIG](https://www.cdisc.org/standards/foundational/cdash) – has example annotated Case Report Forms; [Section 8.3.5](https://www.cdisc.org/system/files/members/standard/foundational/CDASHIG_v2.2.pdf) IE- Inclusion and Exclusion. The Knowledge base has downloadable examples with metadata somewhere.

[SDTMIG](https://www.cdisc.org/standards/foundational/sdtmig) – has Inclusion and Exclusion datasets in [Section 7.4.1](https://www.cdisc.org/system/files/members/standard/foundational/SDTMIG%20v3.4-FINAL_2022-07-21.pdf#%5B%7B%22num%22%3A1135%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C69%2C720%2C0%5D) . Section 7 Trial Design Model Datasets may be good to aid in understanding the Epochs, Trial Elements, and Study Cells (p. 406 has a good explanation). The figure I was telling you about must be in an article because I cannot locate it.

[CDISC Library](https://library.cdisc.org/) – has machine-readable CT, SDTM, & CDASH. 

[ODM-XML](https://www.cdisc.org/standards/data-exchange/odm) - ODM-XML is a vendor-neutral, platform-independent format for exchanging and archiving clinical and translational research data, along with their associated metadata, administrative data, reference data, and audit information. ODM-XML facilitates the regulatory-compliant acquisition, archival and exchange of metadata and data. It has become the language of choice for representing case report form content in many electronic data capture (EDC) tools. 
[CDISC Knowledge Base](https://www.cdisc.org/kb) has articles, examples collection, and eCRF Portal.

[CDISC CT](https://www.cdisc.org/standards/terminology/controlled-terminology) – has LB to LOINC mapping and Unit to UCUM mapping (notice the tabs.. it took me a while to see these).

[FHIR to CDISC Mapping](https://www.cdisc.org/standards/real-world-data/fhir-cdisc-joint-mapping-implementation-guide-v1-0) – CDISC link; [HL7 link](http://hl7.org/fhir/uv/cdisc-mapping/STU1/) – Each one serves a different purpose.

[Primer](https://www.cdisc.org/primer) – short get acquainted videos about CDISC standards.

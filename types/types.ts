export interface Step {
  id: string;
  name: string;
  commercialName: string;
  commercialNameEng: string;
  commercialDescription: string;
  commercialDescriptionEng: string;
  brand: Brand;
  status: Status;
  auditInformation: AuditInformation;
}

export interface Brand {
  id: string;
  name: string;
}

export interface Status {
  id: string;
  name: string;
}

export interface AuditInformation {
  creationUser: string;
  creationDate: string;
  modificationUser: string;
  modificationDate: string;
}

export interface ValidationDto {
  validationResult: ValidationResultDto;
}

export interface ValidationResultDto {
  isValid: boolean;
  validationErrors: ValidationError[];
}

export interface ValidationError {
  propertyName: string;
  errorMessage: string;
}

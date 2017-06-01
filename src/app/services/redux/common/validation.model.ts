import { ValidationDto } from '../../apis/dtos/validation.dto';
export interface Validation {
  property: string;
  message: string;
}

export function dtoToValidation(dto: ValidationDto): Validation[] {
  console.error('xx', dto);
  return dto.validationResult.validationErrors.map(error => ({
    property: error.propertyName,
    message: error.errorMessage
  }));
}

export interface InputElement {
  name: string;
  validity: any;
  type: string;
  value: string;
  checkValidity: () => boolean;
}

export interface InputMapper {
  [key: string]: {
    fieldName: string;
    requiredTxt: string;
    formatErrorTxt: string;
  };
}

interface ComputedInputElement {
  name: string;
  type: string;
  typeMismatch: boolean; //we use typeMismatch when format is incorrect(e.g. incorrect email)
  value: string;
  valid: boolean;
}

export interface FormValues {
  [fieldName: string]: {
    value: string;
    valid: boolean;
    typeMismatch: boolean;
    fieldName: string;
    requiredTxt: string;
    formatErrorTxt: string;
  };
}

export function reduceFormValues(
  formElements: InputElement[],
  inputMapper: InputMapper
): FormValues {
  const arrElements: any = Array.prototype.slice.call(formElements);
  const formValues: any = arrElements
    .filter((elem: InputElement) => elem.name.length > 0)
    .map((elem: InputElement) => {
      const { name, type, value } = elem;
      return {
        name,
        type,
        typeMismatch: elem.validity, //we use typeMismatch when format is incorrect(e.g. incorrect email)
        value,
        valid: elem.checkValidity()
      };
    })
    .reduce((acc: FormValues, currVal: ComputedInputElement) => {
      const { value, valid, typeMismatch } = currVal;
      const { fieldName, requiredTxt, formatErrorTxt } = inputMapper[
        currVal.name
      ];
      acc[currVal.name] = {
        value,
        valid,
        typeMismatch,
        fieldName,
        requiredTxt,
        formatErrorTxt
      };
      return acc;
    }, {} as any);
  return formValues;
}

export function checkAllFieldsValid(formValues: FormValues): boolean {
  return !Object.keys(formValues)
    .map(input => formValues[input])
    .some(field => !field.valid);
}

export interface InputElement {
  name: string;
  validity: any;
  type: string;
  value: string;
  checkValidity: () => boolean;
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
  };
}

export function reduceFormValues(formElements: InputElement[]): FormValues {
  const arrElements: any = Array.prototype.slice.call(formElements);
  const formValues: any = arrElements
    .filter((elem: InputElement) => elem.name.length > 0)
    .map((elem: InputElement) => {
      const { name, type, value } = elem;
      return {
        name,
        type,
        typeMismatch: elem.validity.typeMismatch, //we use typeMismatch when format is incorrect(e.g. incorrect email)
        value,
        valid: elem.checkValidity()
      };
    })
    .reduce((acc: FormValues, currVal: ComputedInputElement) => {
      const { value, valid, typeMismatch } = currVal;

      acc[currVal.name] = {
        value,
        valid,
        typeMismatch,
        fieldName: currVal.name
      };
      return acc;
    }, {} as any);
  return formValues;
}

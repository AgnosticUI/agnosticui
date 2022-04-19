export interface ClassesFromAttrsShape {
  additionalClassList: string[],
}

const throwError = (message: string) => {
  throw new Error(message);
}

export const pluckClassesFromAttrs = (attrs: any): ClassesFromAttrsShape => {
  let classes = Object.keys(attrs).find((item) => /^class$/i.test(item));
  let additionalClassList = [];
  if (classes) {
    let classList = attrs['class'];
    delete attrs['class'];
    classList = typeof classList === 'string' ? classList.split(' ') : throwError('Incorrect values passed for class list.')
    additionalClassList = classList;
  }

  return {
    additionalClassList: additionalClassList
  }
}


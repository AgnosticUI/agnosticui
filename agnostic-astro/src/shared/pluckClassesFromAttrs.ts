export interface ClassesFromAttrsShape {
  additionalClassList: string[],
}

const throwError = (message: string) => {
  throw new Error(message);
}

/**
 * Takes in Astro.props attrs and plucks out any class="foo bar baz" values
 * and deletes the class after so one can then apply {...attrs} after class:list
 * 
 * @param attrs
 * @returns ClassesFromAttrsShape
 */
export const pluckClassesFromAttrs = (attrs: any): ClassesFromAttrsShape => {
  let classes = Object.keys(attrs).find((item) => /^class$/i.test(item));
  let additionalClassList = [];
  if (classes) {
    let classList = attrs['class'];
    // Deleting the class prop here allows you to then use attrs for this sort of thing
    // <AgButton
    //   class:list={[
    //     'btn',
    //     {
    //       'btn-primary': mode == 'primary' ? true : false,
    //       ...
    //     },
    //     additionalClassList,
    //   ]}
    //   {...attrs}
    //
    delete attrs['class'];
    classList = typeof classList === 'string' ? classList.split(' ') : throwError('Incorrect values passed for class list.')
    additionalClassList = classList;
  }

  return {
    additionalClassList: additionalClassList
  }
}


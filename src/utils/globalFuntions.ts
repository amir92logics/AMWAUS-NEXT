export const getListOfTagsTextFromString = (_str: any, _regex: any, _tag: any) => {
                      debugger
  const val: any = [];
 const temp = _str.match(_regex);
 temp && temp.length > 0 && temp.map((item: any) => {
    val.push(item.replace(_tag, ''));
  });
  return val;
};

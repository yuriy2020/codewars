


function format(str, obj) {
  return str.replace(/{[^}]+}/g, (el) => {
    const key = el.slice(1, -1);
    return key in obj ? obj[key] : `{${key}}`;
  })
}

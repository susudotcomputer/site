const styles = (...cxs) =>
  cxs
    .filter(x => x !== undefined)
    .reduce((accum, item) => {
      return accum.concat(item);
    }, [])
    .join(' ');

export default styles;

export default (props) => {
  return Object.assign({}, {
    ...props.config,
  }, {
    extra: {
      ...props.config.extra,
      apiRoot: 'http://localhost:3000', // http://192.168.1.62:3000
    }
  });
}

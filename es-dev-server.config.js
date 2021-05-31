module.exports = {
  port: 8090,
  watch: true,
  nodeResolve: true,
  appIndex: './index.html',
  plugins: [
    {
      serve(context) {
        console.log('context path ', context);
        if (context.originalUrl === '/submission1') {
          // console.log('>>>> context ', context);
          context.response.status = 200;
          return { body: '<data></data>', type: 'xml' };
        }
        if (context.originalUrl === '/submission2') {
          // console.log('>>>> context ', context);
          context.response.status = 200;
          return { body: '<data><greeting>Hi from response</greeting></data>', type: 'xml' };
        }
        if (context.originalUrl === '/submission2?foo=bar') {
          // console.log('>>>> context ', context);
          context.response.status = 200;
          return {
            body: '<data><greeting>Hi from response - got params</greeting></data>',
            type: 'xml',
          };
        }
        if (context.originalUrl === '/submissionfails') {
          // console.log('>>>> context ', context);
          context.response.status = 200;
          return { body: '<data>', type: 'xml' };
        }
        return null;
      },
    },
  ],
  moduleDirs: ['node_modules', 'web_modules'],
};

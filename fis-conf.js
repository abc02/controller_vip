fis.match('/{script,components}/**.{js,jsx}', {
  isMod: true
});

fis.match('script/modules/common/views/manager_content.js', {
  isMod: false
});

fis.match('script/modules/login/views/login_content.js', {
    isMod: false
});

fis.match('script/modules/fixing/views/fixing_content.js', {
    isMod: false
});

fis.hook('commonjs');

fis.match('::package', {
    postpackager: fis.plugin('loader')
});

fis.match('{/{script,components}/**.js,*.jsx}', {
    parser: fis.plugin('babel-5.x', {
        sourceMaps: true
    }),
    rExt: '.js'
});

//此行以上内容随意改动会引发错误

fis.media('demo').match('*.js', {
    preprocessor: fis.plugin('define', {
        defines: {
        'process.env.NODE_ENV': JSON.stringify('prod')
        }
    })
}).match('*.{js,css,png}', { 
    useHash: true
})

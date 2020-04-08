// module.exports = {
//   outputDir: "docs",
//   assetsDir: "./",
//   publicPath: "/"
// };
//

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/resume/'
  : '/',
  outputDir: 'docs',
}

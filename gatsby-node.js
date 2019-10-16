// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
// exports.onCreateWebpackConfig = ({
//   stage,
//   rules,
//   loaders,
//   plugins,
//   actions,
// }) => {
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /\.less$/,
//           use:[{
//       loader: 'style-loader',
//     }, {
//       loader: 'css-loader', // translates CSS into CommonJS
//     }, {
//       loader: 'less-loader', // compiles Less to CSS
//      options: {
//        modifyVars: {
//          'primary-color': '#234544',
//          'link-color': '#1DA57A',
//          'border-radius-base': '2px',
//          // or
//         //  'hack': `true; @import "your-less-file-path.less";`, // Override with less file
//        },
//        javascriptEnabled: true,
//      },
//     }]
//         },
//       ],
//     },
//     plugins: [
//       plugins.define({
//         __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
//       }),
//     ],
//   })
// }

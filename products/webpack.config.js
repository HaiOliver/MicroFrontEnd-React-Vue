const HtmlWebpackPlugin = require('html-webpack-plugin');
// key here -> integrate -> container host
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
      mode :'development',
      // need devServer to show web
      devServer:{
            port: 8081,
      },
      plugins:[
            // instantiate plugin -> connect container folder
            new ModuleFederationPlugin({
                  name:"products",
                  filename:"remoteEntry.js",
                  exposes:{
                        './ProductsIndex':'./src/index.js'
                  },
                  shared:['faker']
            }),
            // config index.html always take right name of out put js file
            new HtmlWebpackPlugin({
                  // Link main.js to index.html
                  template: './public/index.html'
            })
      ]
}
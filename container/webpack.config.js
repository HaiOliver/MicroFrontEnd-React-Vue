const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
      mode :'development',
      // need devServer to show web
      devServer:{
            port: 8080,
      },
      plugins:[
            // !!! connect with product, cart
            // !! product expose in port 8081, cart expose at port 8082
            new ModuleFederationPlugin({
                  name:"container",
                  remotes:{
                        products: 'products@http://localhost:8081/remoteEntry.js',
                        cart:'cart@http://localhost:8082/remoteEntry.js'
                  }
            })
            ,
            // config index.html always take right name of out put js file
            new HtmlWebpackPlugin({
                  // Link main.js to index.html
                  template: './public/index.html'
            })
      ]
}
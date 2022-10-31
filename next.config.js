const path = require('path')
module.exports = {
    webpack(config) {

        config.module.rules.push({
            test: /\.svg/,
            issuer: /^((?!css).)*$/, // any non css package
            exclude: [{
              or: [
                  function(item){
                      return item.match(/.*report\.svg/) 
                  },
              ],
          }],
            use: ["next-image-loader"]
          });
    
        config.module.rules.push({
          test: /\.svg/,
          include: [{
            or: [
                function(item){
                    return item.match(/.*report\.svg/) 
                },
            ],
        }],
          use: ["@svgr/webpack"]
        });

        config.module.rules.push({
          test: /\.pdf/,
          use: ["file-loader"]
        });
     
        return config;
       }

       
  };
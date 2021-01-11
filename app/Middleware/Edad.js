'use strict'

const Response = require('@adonisjs/framework/src/Response')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Edad {

  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  
  async handle ({ request,response }, next) {

 
 if(request.header(edad)<=17)
 {return response.status(408).json({messaje:'No cumples el requisito de edad'})}
  
  await next()
  }
}

module.exports = Edad
 /*   const edad = request.post()
    if(request=edad<=17)
    {return abort(400,'La edad no es valida');}
    await next()
  }
 if($request->edad<=17)
  {return abort(400,'La edad no es valida');}
  return $next($request);

  
  */
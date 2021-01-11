'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class VerificEdad {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request,response,params }, next) {
  
    const {edad}=params
    if(edad<=17)
   {
     return response.status(408).json({messaje:'No cumples el requisito de edad'})
   }
  
  await next()
  }
}

module.exports = VerificEdad

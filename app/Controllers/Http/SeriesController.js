'use strict'

const { _validateGroupClosure } = require("@adonisjs/framework/src/Route/Manager")

const Database = use('Database')
const Series = use('App/Models/Series')
const validate = use('@adonisjs/validator/providers/ValidatorProvider')

class SeriesController {

 async ver(request,response)
{
    return await Database
      //.table('series')
      //.where('nombre', 'Lura Watson')
      //.first()
      //////////////////////
      .select('*').from('series')
////////////////
     /* await Database.select('*').from('series')*/
////////////////////

   /*   public function vista($id=null)
     {
     if($id)
      return response()->json(["coments"=>coments::find($id)],200);   
      return response()->json(["coments"=>coments::all()],200);   
     }*/
//////////////////
/*
     Route.get('/users', async ({ response }) => {
        response.json(await User.all())
      })*/
  
}

async mostrarTodas(request,response)
{
    const series = await Series.all()
    
    return series


}


async mostrarSerie({response, params:{id}})
{
    const series = await Series.find(id)

    if(series)
    {
     response.status(200).json({
            messsage : 'accion exitosa',
            data : series
        })

    }
    else{
        response.status(406).json({
            messsage: 'Serie no encontrada',
            id
        })
    }

}

/*async insert(request,response)
{
    const userId = await Database
    .insert({categoria: 'suspenso',nombre: 'Control Z', plataforma: 'netflix',puntuacion:'3'})
    .into('series')
    return ("inserto exitoso")


}*/
async insertar({request, response})
{
    //const series = await Series
    
    const rules = {
        nombre:'required',
        categoria:'required',
        plataforma:'required', 
        puntuacion:'required|number'
    }
    
    const { nombre, categoria, plataforma, puntuacion} = request.post()
    const serie = request.all()
   /* series.nombre = nombre
    series.categoria = categoria
    series.plataforma = plataforma
    series.puntuacion = puntuacion*/
    
    const validation = await validate(serie, rules)

    if(validation.fails())
    {
        return response.status(404).json({messsage:'accion no valida',explicacion:validation.messsage})}
  //  if(await series.create()){
    const newserie = await Series.create({ nombre, categoria, plataforma, puntuacion})
    response.status(200).json({
        messsage : 'registro guardado exitosamente',
        data : newserie
    })
/*}
else{ 
    response.status(406).json({
    messsage: 'Serie no encontrada',
    id
})}*/

}




async update({request, response, params:{ id } })
{
    const series = await Series.find(id)
    if(series)
    {
        const { nombre, categoria, plataforma, puntuacion} = request.post()

        series.nombre = nombre
        series.categoria = categoria
        series.plataforma = plataforma
        series.puntuacion = puntuacion

        await series.save()

        response.status(200).json({
            messsage : 'actualizacion exitosa',
            data : series
        })

    }
    else{
        response.status(406).json({
            messsage: 'Serie no encontrada',
            id
        })
    }

}

async elimina({request, response, params:{ id } })
{
    const series = await Series.find(id)
  
    if(series)
    {
    
        await series.delete()

        response.status(200).json({
            messsage : 'eliminacion exitosa',
            data : series
        })

    }
    else{
        response.status(406).json({
            messsage: 'Serie no encontrada',
            id
        })
    }

}


}

module.exports = SeriesController

import { validarDatosGenerales } from './validarDatosGenerales'
import { validarBaseDatos } from './validarBaseDatos'
import { validarElementoRed } from './validarElementoRed'
import { validarTransacciones } from './validarTransacciones'
import { validarGestionEventos } from './validarGestionEventos'
import { validarCausaRca } from './validarCausaRca'
import { validarDatosExtra } from './validarDatosExtra'

export function validarTodoFormulario(formulario) {
  const errores = []

  errores.push(...validarDatosGenerales(formulario.datosGenerales))
  errores.push(...validarBaseDatos(formulario))
  errores.push(...validarElementoRed('nodo', formulario))
  errores.push(...validarElementoRed('servicio', formulario))
  errores.push(...validarElementoRed('balanceador', formulario))
  errores.push(...validarElementoRed('servidor', formulario))
  errores.push(...validarTransacciones(formulario.transacciones))
  errores.push(...validarGestionEventos(formulario.gestionEventos))
  errores.push(...validarCausaRca(formulario.causaRca))
  errores.push(...validarDatosExtra(formulario.datosExtra))

  return errores
}

import { validarTextArea } from './utils/validarTextArea'
export function validarDatosGenerales(datos) {
  const errores = []

  // Fecha
  if (!datos.fecha) {
    errores.push('La fecha es obligatoria.')
  } else if (new Date(datos.fecha) > new Date()) {
    errores.push('La fecha no puede ser mayor a la actual.')
  }
  // Semana
  if (!datos.semana) errores.push('La semana es obligatoria.')

  // Ticket
  if (!datos.ticket) {
    errores.push('El ticket es obligatorio.')
  } else {
    if (!['INC', 'REQ', 'CRQ'].some((prefix) => datos.ticket.startsWith(prefix))) {
      errores.push('El ticket debe comenzar con INC, REQ o CRQ.')
    }
    if (datos.ticket.length !== 15) {
      errores.push('El ticket debe tener exactamente 15 caracteres.')
    }
  }

  // Tipo Afectación
  if (!datos.tipoAfectacion?.id) errores.push('Selecciona un tipo de afectación.')

  // Resumen
  const errResumen = validarTextArea(datos.resumen, 'Resumen')
  if (errResumen) errores.push(errResumen)

  // Impacto
  const errImpacto = validarTextArea(datos.impacto, 'Impacto')
  if (errImpacto) errores.push(errImpacto)

  return errores
}

export function validarDatosExtra(datosExtra) {
  const errores = []

  const seDebeValidar =
    datosExtra.cantidadTickets ||
    (datosExtra.analistaRegistro && Object.keys(datosExtra.analistaRegistro).length > 0)

  if (!seDebeValidar) return errores

  // cantidadTickets obligatorio y mayor a 0
  if (
    datosExtra.cantidadTickets === '' ||
    datosExtra.cantidadTickets === null ||
    Number(datosExtra.cantidadTickets) <= 0
  ) {
    errores.push('Debes ingresar una cantidad de tickets válida (mayor a 0).')
  }

  if (!datosExtra.analistaRegistro?.id) {
    errores.push('Debes seleccionar un analista de registro.')
  }

  return errores
}

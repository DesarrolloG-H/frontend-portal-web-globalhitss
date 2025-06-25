export function validarTransacciones(transacciones) {
  const errores = []

  if (!transacciones || transacciones.length === 0) {
    errores.push('Debes agregar al menos una transacción.')
    return errores
  }

  transacciones.forEach((t, index) => {
    const label = `Transacción ${index + 1}`

    if (!t.aplicacion?.id) errores.push(`${label}: Aplicación requerida.`)
    if (!t.transaccion?.id) errores.push(`${label}: Transacción requerida.`)
    if (!t.tipoTransaccion?.id) errores.push(`${label}: Tipo de transacción requerida.`)
    if (!t.plataformaAfectada?.id) errores.push(`${label}: Plataforma requerida.`)
    if (!t.torreImpactada?.id) errores.push(`${label}: Torre requerida.`)

    if (!t.horaInicioTransaccion) errores.push(`${label}: Hora de inicio requerida.`)
    if (!t.horaFinTransaccion) errores.push(`${label}: Hora de fin requerida.`)

    if (t.horaInicioTransaccion && t.horaFinTransaccion) {
      const inicio = new Date(t.horaInicioTransaccion)
      const fin = new Date(t.horaFinTransaccion)

      if (inicio >= fin) {
        errores.push(`${label}: Hora fin debe ser mayor que la hora inicio.`)
      }
    }
  })

  return errores
}

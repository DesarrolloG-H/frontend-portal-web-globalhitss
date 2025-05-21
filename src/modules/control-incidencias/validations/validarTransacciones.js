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
      const [h1, m1] = t.horaInicioTransaccion.split(':').map(Number)
      const [h2, m2] = t.horaFinTransaccion.split(':').map(Number)
      if (h1 * 60 + m1 >= h2 * 60 + m2) {
        errores.push(`${label}: Hora fin debe ser mayor que la hora inicio.`)
      }
    }
  })

  return errores
}

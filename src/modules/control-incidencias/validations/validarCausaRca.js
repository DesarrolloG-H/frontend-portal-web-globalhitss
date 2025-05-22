export function validarCausaRca(causaRca) {
  const errores = []

  const origen = causaRca.origen?.trim()
  const responsable = causaRca.responsableRca?.id

  // Si NO se llenó NADA, omitir validación
  const noHayNada = !origen && !causaRca.aplicaRCA && !responsable
  if (noHayNada) return errores

  // Si llenaron algo, validar correctamente
  if (!origen) {
    errores.push('Debes ingresar el origen del evento.')
  }

  if (causaRca.aplicaRCA && !responsable) {
    errores.push('Debes seleccionar un responsable RCA.')
  }

  return errores
}

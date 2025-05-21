export function validarCausaRca(causaRca) {
  const errores = []

  // Si no se llenó ningún campo, no aplica
  const seDebeValidar =
    causaRca.origen ||
    causaRca.aplicaRCA ||
    (causaRca.responsableRca && Object.keys(causaRca.responsableRca).length > 0)

  if (!seDebeValidar) return errores

  if (!causaRca.origen?.trim()) {
    errores.push('Debes ingresar el origen del evento.')
  }

  if (causaRca.aplicaRCA) {
    if (!causaRca.responsableRca?.id) {
      errores.push('Debes seleccionar un responsable RCA.')
    }
  }

  return errores
}

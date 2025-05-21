export function validarBaseDatos(formulario) {
  const errores = []

  const { baseDatosForm, baseDatos, horaInicioBdGlobal, horaFinBdGlobal } = formulario

  // Verificamos si se intenta llenar esta sección
  const seDebeValidar =
    baseDatos.length > 0 ||
    baseDatosForm.bd !== null ||
    horaInicioBdGlobal !== '' ||
    horaFinBdGlobal !== ''

  if (!seDebeValidar) {
    return errores // 🟢 No se llenó, así que no validamos nada
  }

  // 🔴 Validar si se intentó llenar
  if (!baseDatos.length === 0) {
    errores.push('Debes seleccionar una base de datos válida.')
  }

  if (!horaInicioBdGlobal) {
    errores.push('La hora de inicio para las bases de datos es obligatoria.')
  }

  if (!horaFinBdGlobal) {
    errores.push('La hora de fin para las bases de datos es obligatoria.')
  }

  if (horaInicioBdGlobal && horaFinBdGlobal) {
    const [h1, m1] = horaInicioBdGlobal.split(':').map(Number)
    const [h2, m2] = horaFinBdGlobal.split(':').map(Number)
    const inicio = h1 * 60 + m1
    const fin = h2 * 60 + m2
    if (fin <= inicio) {
      errores.push('La hora fin debe ser mayor a la hora inicio en bases de datos.')
    }
  }

  if (!baseDatos || baseDatos.length === 0) {
    errores.push('Debes agregar al menos una base de datos a la lista.')
  }

  return errores
}

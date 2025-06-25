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
    const inicio = new Date(horaInicioBdGlobal)
    const fin = new Date(horaFinBdGlobal)

    if (inicio >= fin) {
      errores.push('La hora fin de la Base de Datos debe ser mayor que la hora inicio.')
    }
  }

  if (!baseDatos || baseDatos.length === 0) {
    errores.push('Debes agregar al menos una base de datos a la lista.')
  }

  return errores
}

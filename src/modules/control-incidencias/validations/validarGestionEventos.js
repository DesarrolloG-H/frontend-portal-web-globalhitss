export function validarGestionEventos(gestionEventos) {
  const errores = []

  if (
    !gestionEventos.accionesRealizadas &&
    !gestionEventos.solucion &&
    !gestionEventos.leccionesAprendidas
  ) {
    // si no se llenó nada, asumimos que no aplica y no se valida
    return errores
  }

  if (!gestionEventos.accionesRealizadas?.trim()) {
    errores.push('Debes ingresar las acciones realizadas.')
  }

  if (!gestionEventos.solucion?.trim()) {
    errores.push('Debes ingresar la solución.')
  }

  if (!gestionEventos.leccionesAprendidas?.trim()) {
    errores.push('Debes ingresar las lecciones aprendidas.')
  }

  return errores
}

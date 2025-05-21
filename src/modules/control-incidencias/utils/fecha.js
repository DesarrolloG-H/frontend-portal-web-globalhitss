export function obtenerSemanaISO(fechaStr) {
  const fecha = new Date(fechaStr)
  const dia = fecha.getUTCDay() || 7
  fecha.setUTCDate(fecha.getUTCDate() + 4 - dia)
  const inicioAño = new Date(Date.UTC(fecha.getUTCFullYear(), 0, 1))
  const semana = Math.ceil(((fecha - inicioAño) / 86400000 + 1) / 7)
  return semana
}

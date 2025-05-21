/**
 * Valida un campo de texto según reglas comunes:
 * - Campo obligatorio
 * - Mínima longitud
 * - No solo caracteres especiales
 * - Sin etiquetas HTML
 *
 * @param {string} valor - El valor a validar.
 * @param {string} nombreCampo - Nombre del campo (para mensajes).
 * @param {number} minLength - Longitud mínima aceptada (default: 10).
 * @returns {string|null} - Mensaje de error o null si está válido.
 */
export function validarTextArea(valor, nombreCampo, minLength = 10) {
  const contieneEtiquetas = /<[^>]*>/g
  const soloEspeciales = /^[^a-zA-Z0-9]+$/
  const contieneTexto = /[a-zA-Z0-9]/

  if (!valor || valor.trim().length < minLength) {
    return `El campo "${nombreCampo}" debe tener al menos ${minLength} caracteres.`
  }

  if (!contieneTexto.test(valor)) {
    return `El campo "${nombreCampo}" debe contener texto válido.`
  }

  if (soloEspeciales.test(valor)) {
    return `El campo "${nombreCampo}" no puede contener solo caracteres especiales.`
  }

  if (contieneEtiquetas.test(valor)) {
    return `El campo "${nombreCampo}" no puede contener etiquetas HTML.`
  }

  return null
}

export function validarElementoRed(tipo, formulario) {
  const errores = []

  const storeKeyMap = {
    nodo: 'nodos',
    servicio: 'servicios',
    balanceador: 'balanceadores',
    servidor: 'servidores',
  }

  const horaGlobalMap = {
    nodo: {
      inicio: 'horaInicioNodoGlobal',
      fin: 'horaFinNodoGlobal',
    },
    servicio: {
      inicio: 'horaInicioServicioGlobal',
      fin: 'horaFinServicioGlobal',
    },
    balanceador: {
      inicio: 'horaInicioBalanceadorGlobal',
      fin: 'horaFinBalanceadorGlobal',
    },
    servidor: {
      inicio: 'horaInicioServidorGlobal',
      fin: 'horaFinServidorGlobal',
    },
  }

  const campo1 = tipo
  const campo2 =
    tipo === 'nodo'
      ? 'ipNodo'
      : tipo === 'servicio'
        ? 'ipServicio'
        : tipo === 'balanceador'
          ? 'nombreBalanceador'
          : tipo === 'servidor'
            ? 'nombreServidor'
            : null

  const lista = formulario[storeKeyMap[tipo]] || []
  const campo1Form = formulario[`${tipo}Form`]?.[campo1]
  const campo2Form = formulario[`${tipo}Form`]?.[campo2]

  const horaInicio = formulario[horaGlobalMap[tipo]?.inicio] || ''
  const horaFin = formulario[horaGlobalMap[tipo]?.fin] || ''

  const seDebeValidar = lista.length > 0 || campo1Form || campo2Form || horaInicio || horaFin

  if (!seDebeValidar) return errores

  if (!horaInicio) errores.push(`La hora de inicio de ${tipo} es obligatoria.`)
  if (!horaFin) errores.push(`La hora de fin de ${tipo} es obligatoria.`)

  if (horaInicio && horaFin) {
    const [h1, m1] = horaInicio.split(':').map(Number)
    const [h2, m2] = horaFin.split(':').map(Number)
    const t1 = h1 * 60 + m1
    const t2 = h2 * 60 + m2
    if (t2 <= t1) {
      errores.push(`La hora fin debe ser mayor a la hora inicio en ${tipo}.`)
    }
  }

  if (lista.length === 0) {
    errores.push(`Debes agregar al menos un ${tipo} a la lista.`)
  }

  return errores
}

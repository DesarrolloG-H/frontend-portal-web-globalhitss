export function generarPayload(formulario) {
  return {
    datosGenerales: {
      ...formulario.datosGenerales,
      tipoAfectacion: formulario.datosGenerales.tipoAfectacion?.id || null,
    },
    baseDatos: formulario.baseDatos.map((bd) => ({
      ...bd,
      horaInicioBd: formulario.horaInicioBdGlobal,
      horaFinBd: formulario.horaFinBdGlobal,
    })),
    nodos: formulario.nodos.map((n) => ({
      ...n,
      horaInicioNodo: formulario.horaInicioNodoGlobal,
      horaFinNodo: formulario.horaFinNodoGlobal,
    })),
    servicios: formulario.servicios.map((s) => ({
      ...s,
      horaInicioServicio: formulario.horaInicioServicioGlobal,
      horaFinServicio: formulario.horaFinServicioGlobal,
    })),
    balanceadores: formulario.balanceadores.map((b) => ({
      ...b,
      horaInicioBalanceador: formulario.horaInicioBalanceadorGlobal,
      horaFinBalanceador: formulario.horaFinBalanceadorGlobal,
    })),
    servidores: formulario.servidores.map((s) => ({
      ...s,
      horaInicioServidor: formulario.horaInicioServidorGlobal,
      horaFinServidor: formulario.horaFinServidorGlobal,
    })),
    causaRca: {
      ...formulario.causaRca,
      responsableRca: formulario.causaRca.responsableRca?.id || null,
    },
    transacciones: formulario.transacciones.map((t) => ({
      aplicacion: t.aplicacion?.id || null,
      transaccion: t.transaccion?.id || null,
      tipoTransaccion: t.tipoTransaccion?.id || null,
      plataformaAfectada: t.plataformaAfectada?.id || null,
      torreImpactada: t.torreImpactada?.id || null,
      horaInicioTransaccion: t.horaInicioTransaccion,
      horaFinTransaccion: t.horaFinTransaccion,
    })),
    gestionEventos: {
      ...formulario.gestionEventos,
    },
    datosExtra: {
      cantidadTickets: Number(formulario.datosExtra.cantidadTickets),
      analistaRegistro: formulario.datosExtra.analistaRegistro?.id || null,
    },
  }
}

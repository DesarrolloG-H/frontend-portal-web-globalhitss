import { toMySQLDatetime } from './formatDatetime'

export function generarPayload(formulario) {
  return {
    datosGenerales: {
      ...formulario.datosGenerales,
      tipoAfectacion: formulario.datosGenerales.tipoAfectacion?.id || null,
    },
    baseDatos: formulario.baseDatos.map((bd) => ({
      ...bd,
      horaInicioBd: formulario.horaInicioBdGlobal
        ? toMySQLDatetime(formulario.horaInicioBdGlobal)
        : null,
      horaFinBd: formulario.horaFinBdGlobal ? toMySQLDatetime(formulario.horaFinBdGlobal) : null,
    })),
    nodos: formulario.nodos.map((n) => ({
      ...n,
      horaInicioNodo: formulario.horaInicioNodoGlobal
        ? toMySQLDatetime(formulario.horaInicioNodoGlobal)
        : null,
      horaFinNodo: formulario.horaFinNodoGlobal
        ? toMySQLDatetime(formulario.horaFinNodoGlobal)
        : null,
    })),
    servicios: formulario.servicios.map((s) => ({
      ...s,
      horaInicioServicio: formulario.horaInicioServicioGlobal
        ? toMySQLDatetime(formulario.horaInicioServicioGlobal)
        : null,
      horaFinServicio: formulario.horaFinServicioGlobal
        ? toMySQLDatetime(formulario.horaFinServicioGlobal)
        : null,
    })),
    balanceadores: formulario.balanceadores.map((b) => ({
      ...b,
      horaInicioBalanceador: formulario.horaInicioBalanceadorGlobal
        ? toMySQLDatetime(formulario.horaInicioBalanceadorGlobal)
        : null,
      horaFinBalanceador: formulario.horaFinBalanceadorGlobal
        ? toMySQLDatetime(formulario.horaFinBalanceadorGlobal)
        : null,
    })),
    servidores: formulario.servidores.map((s) => ({
      ...s,
      horaInicioServidor: formulario.horaInicioServidorGlobal
        ? toMySQLDatetime(formulario.horaInicioServidorGlobal)
        : null,
      horaFinServidor: formulario.horaFinServidorGlobal
        ? toMySQLDatetime(formulario.horaFinServidorGlobal)
        : null,
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
      horaInicioTransaccion: t.horaInicioTransaccion
        ? toMySQLDatetime(t.horaInicioTransaccion)
        : null,
      horaFinTransaccion: t.horaFinTransaccion ? toMySQLDatetime(t.horaFinTransaccion) : null,
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

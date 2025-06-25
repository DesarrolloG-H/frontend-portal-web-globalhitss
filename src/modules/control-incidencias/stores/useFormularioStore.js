import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormularioStore = defineStore('formulario', () => {
  // DATOS GENERALES
  const datosGenerales = ref({
    fecha: '',
    semana: '',
    ticket: '',
    tipoAfectacion: null,
    resumen: '',
    impacto: '',
  })

  function setDatosGenerales(payload) {
    datosGenerales.value = { ...payload }
  }

  // BASE DE DATOS
  const baseDatosForm = ref({
    bd: null,
    // horaInicioBd: '',
    // horaFinBd: '',
  })
  const horaInicioBdGlobal = ref('')
  const horaFinBdGlobal = ref('')

  const baseDatos = ref([])

  function agregarBaseDato(item) {
    if (!item || Object.keys(item).length === 0) return

    const exists = baseDatos.value.some((x) =>
      Object.entries(item).every(([key, value]) => x[key] === value),
    )

    if (!exists) {
      baseDatos.value.push({ ...item })
    }
  }
  function eliminarBaseDato(item) {
    baseDatos.value = baseDatos.value.filter((x) =>
      Object.entries(item).some(([key, value]) => x[key] !== value),
    )
  }

  // INFRAESTRUCTURA
  const nodos = ref([])
  const nodoForm = ref({
    nodo: '',
    ipNodo: '',
    // horaInicioNodo: '',
    // horaFinNodo: '',
  })
  const horaInicioNodoGlobal = ref('')
  const horaFinNodoGlobal = ref('')

  const servicios = ref([])
  const servicioForm = ref({
    nombreServicio: '',
    ipServicio: '',
    // horaInicioServicio: '',
    // horaFinServicio: '',
  })
  const horaInicioServicioGlobal = ref('')
  const horaFinServicioGlobal = ref('')

  const balanceadores = ref([])
  const balanceadorForm = ref({
    balanceador: '',
    nombreBalanceador: '',
    // horaInicioBalanceador: '',
    // horaFinBalanceador: '',
  })
  const horaInicioBalanceadorGlobal = ref('')
  const horaFinBalanceadorGlobal = ref('')

  const servidores = ref([])
  const servidorForm = ref({
    servidor: '',
    nombreServidor: '',
    // horaInicioServidor: '',
    // horaFinServidor: '',
  })
  const horaInicioServidorGlobal = ref('')
  const horaFinServidorGlobal = ref('')

  // MAPEO
  const storeKeyMap = {
    nodo: 'nodos',
    servicio: 'servicios',
    balanceador: 'balanceadores',
    servidor: 'servidores',
  }

  // ✅ FUNCIONES GENÉRICAS
  function agregarElemento(tipo, item) {
    const key = storeKeyMap[tipo]
    if (!key || !item || Object.keys(item).length === 0) return

    const list = formulario[key]

    // Clonar el item para no mutar el original
    const fullItem = { ...item }

    // Agregar horas globales si aplica
    switch (tipo) {
      case 'nodo':
        fullItem.horaInicioNodo = horaInicioNodoGlobal.value
        fullItem.horaFinNodo = horaFinNodoGlobal.value
        break
      case 'servicio':
        fullItem.horaInicioServicio = horaInicioServicioGlobal.value
        fullItem.horaFinServicio = horaFinServicioGlobal.value
        break
      case 'balanceador':
        fullItem.horaInicioBalanceador = horaInicioBalanceadorGlobal.value
        fullItem.horaFinBalanceador = horaFinBalanceadorGlobal.value
        break
      case 'servidor':
        fullItem.horaInicioServidor = horaInicioServidorGlobal.value
        fullItem.horaFinServidor = horaFinServidorGlobal.value
        break
    }

    const exists = list.value.some((x) => Object.entries(item).every(([k, v]) => x[k] === v))

    if (!exists) {
      list.value.push({ ...item })
    }
  }

  function eliminarElemento(tipo, item) {
    const key = storeKeyMap[tipo]
    if (!key || !item) return

    const list = formulario[key]
    list.value = list.value.filter((x) => Object.entries(item).some(([k, v]) => x[k] !== v))
  }

  // CAUSA RCA

  const causaRca = ref({
    origen: '',
    aplicaRCA: true,
    responsableRca: null,
  })

  // TRANSACCIONES

  const transaccionForm = ref({
    aplicacion: null,
    transaccion: null,
    tipoTransaccion: null,
    plataformaAfectada: null,
    torreImpactada: null,
    horaInicioTransaccion: '',
    horaFinTransaccion: '',
  })

  const transacciones = ref([])

  function agregarTransaccion(item) {
    if (!item || Object.keys(item).length === 0) return

    const exists = transacciones.value.some((x) =>
      Object.entries(item).every(([key, value]) => x[key] === value),
    )

    if (!exists) {
      transacciones.value.push({ ...item })
    }
  }

  function eliminarTransaccion(item) {
    transacciones.value = transacciones.value.filter((x) =>
      Object.entries(item).some(([key, value]) => x[key] !== value),
    )
  }

  // GESTIÓN DE EVENTOS

  const gestionEventos = ref({
    accionesRealizadas: '',
    solucion: '',
    leccionesAprendidas: '',
  })

  // DATOS EXTRA

  const datosExtra = ref({
    cantidadTickets: 1,
    analistaRegistro: null,
  })

  const formulario = {
    nodos,
    servicios,
    balanceadores,
    servidores,
  }

  function $reset() {
    datosGenerales.value = {
      fecha: '',
      semana: '',
      ticket: '',
      tipoAfectacion: null,
      resumen: '',
      impacto: '',
    }
    baseDatosForm.value = { bd: null }
    baseDatos.value = []
    horaInicioBdGlobal.value = ''
    horaFinBdGlobal.value = ''

    nodoForm.value = { nodo: '', ipNodo: '' }
    nodos.value = []
    horaInicioNodoGlobal.value = ''
    horaFinNodoGlobal.value = ''

    servicioForm.value = { nombreServicio: '', ipServicio: '' }
    servicios.value = []
    horaInicioServicioGlobal.value = ''
    horaFinServicioGlobal.value = ''

    balanceadorForm.value = { balanceador: '', nombreBalanceador: '' }
    balanceadores.value = []
    horaInicioBalanceadorGlobal.value = ''
    horaFinBalanceadorGlobal.value = ''

    servidorForm.value = { servidor: '', nombreServidor: '' }
    servidores.value = []
    horaInicioServidorGlobal.value = ''
    horaFinServidorGlobal.value = ''

    causaRca.value = {
      origen: '',
      aplicaRCA: false,
      responsableRca: null,
    }

    transaccionForm.value = {
      aplicacion: null,
      transaccion: null,
      tipoTransaccion: null,
      plataformaAfectada: null,
      torreImpactada: null,
      horaInicioTransaccion: '',
      horaFinTransaccion: '',
    }
    transacciones.value = []

    gestionEventos.value = {
      accionesRealizadas: '',
      solucion: '',
      leccionesAprendidas: '',
    }

    datosExtra.value = {
      cantidadTickets: '',
      analistaRegistro: null,
    }
  }

  // RETURN
  return {
    datosGenerales,
    setDatosGenerales,

    baseDatosForm,
    baseDatos,
    horaInicioBdGlobal,
    horaFinBdGlobal,
    agregarBaseDato,
    eliminarBaseDato,

    nodoForm,
    servicioForm,
    balanceadorForm,
    servidorForm,

    nodos,
    servicios,
    balanceadores,
    servidores,

    horaInicioNodoGlobal,
    horaFinNodoGlobal,
    horaInicioServicioGlobal,
    horaFinServicioGlobal,
    horaInicioBalanceadorGlobal,
    horaFinBalanceadorGlobal,
    horaInicioServidorGlobal,
    horaFinServidorGlobal,

    agregarElemento,
    eliminarElemento,

    causaRca,

    transaccionForm,
    transacciones,
    agregarTransaccion,
    eliminarTransaccion,

    gestionEventos,

    datosExtra,
    $reset,
  }
})

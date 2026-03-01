// Árbol de conversación: cada nodo tiene mensaje y opciones 1-5 que llevan a otro nodo
export const CHAT_TREE = {
  root: {
    message: '¡Hola! Soy el asistente virtual de la Residencia Vivencias. Estoy aquí para ayudarlo. ¿En qué puedo asistirlo?\n\nEscribe:\n**1** Información sobre servicios\n**2** Actividades y eventos\n**3** Contacto con los responsables\n**4** Información sobre medicación o insumos\n**5** Otros',
    options: {
      '1': 'servicios',
      '2': 'actividades',
      '3': 'contacto',
      '4': 'medicacion',
      '5': 'otros',
    },
  },

  // === OPCIÓN 1: INFORMACIÓN SOBRE SERVICIOS ===
  servicios: {
    message: 'Ofrecemos una variedad de servicios, incluyendo:\n\n• Atención médica\n• Terapia física y ocupacional\n• Actividades recreativas\n• Comidas balanceadas\n• Apoyo emocional y psicológico\n\n¿Te gustaría saber más sobre alguno de estos servicios?\n\nEscribe:\n**1** Atención médica\n**2** Terapia física y ocupacional\n**3** Actividades recreativas\n**4** Comidas balanceadas\n**5** Apoyo emocional y psicológico\n**0** Volver al menú principal',
    options: {
      '1': 'servicios-medica',
      '2': 'servicios-terapia',
      '3': 'servicios-recreativas',
      '4': 'servicios-comidas',
      '5': 'servicios-apoyo',
      '0': 'root',
    },
  },
  'servicios-medica': {
    message: '**Atención médica**: Contamos con médicos y enfermeras disponibles las 24 horas para garantizar el cuidado de nuestros residentes.\n\nEscribe:\n**1** Volver a servicios\n**0** Volver al menú principal',
    options: { '1': 'servicios', '0': 'root' },
  },
  'servicios-terapia': {
    message: '**Terapia física y ocupacional**: Ofrecemos sesiones de kinesiología y terapia ocupacional para mantener la movilidad y autonomía de los residentes.\n\nEscribe:\n**1** Volver a servicios\n**0** Volver al menú principal',
    options: { '1': 'servicios', '0': 'root' },
  },
  'servicios-recreativas': {
    message: '**Actividades recreativas**: Organizamos talleres, juegos, música y otras actividades para el entretenimiento y bienestar de los residentes.\n\nEscribe:\n**1** Volver a servicios\n**0** Volver al menú principal',
    options: { '1': 'servicios', '0': 'root' },
  },
  'servicios-comidas': {
    message: '**Comidas balanceadas**: Ofrecemos desayuno, almuerzo, merienda y cena. Los menús están diseñados por nutricionistas y adaptados a necesidades dietéticas especiales.\n\nEscribe:\n**1** Volver a servicios\n**0** Volver al menú principal',
    options: { '1': 'servicios', '0': 'root' },
  },
  'servicios-apoyo': {
    message: '**Apoyo emocional y psicológico**: Brindamos acompañamiento emocional y contamos con profesionales de psicología para el bienestar mental de los residentes y sus familias.\n\nEscribe:\n**1** Volver a servicios\n**0** Volver al menú principal',
    options: { '1': 'servicios', '0': 'root' },
  },

  // === OPCIÓN 2: ACTIVIDADES Y EVENTOS ===
  actividades: {
    message: 'Esta semana tenemos las siguientes actividades programadas:\n\n• **Lunes y miércoles**: Taller de manualidades\n• **Martes**: Yoga\n• **Lunes a jueves**: Kinesiología\n• **Lunes a sábado**: Gimnasia para la tercera edad\n\nTambién se realizan festejos de cumpleaños.\n\nEscribe:\n**1** Más información sobre talleres\n**2** Información sobre cumpleaños y eventos\n**0** Volver al menú principal',
    options: {
      '1': 'actividades-talleres',
      '2': 'actividades-cumpleanos',
      '0': 'root',
    },
  },
  'actividades-talleres': {
    message: 'Los talleres de manualidades se realizan los lunes y miércoles por la tarde. Yoga los martes a las 10:00. Kinesiología de lunes a jueves según turnos. Gimnasia de lunes a sábado por la mañana.\n\nEscribe:\n**1** Volver a actividades\n**0** Volver al menú principal',
    options: { '1': 'actividades', '0': 'root' },
  },
  'actividades-cumpleanos': {
    message: 'Festejamos los cumpleaños de nuestros residentes con torta, música y la compañía de familiares. Las familias pueden coordinar con la administración para participar.\n\nEscribe:\n**1** Volver a actividades\n**0** Volver al menú principal',
    options: { '1': 'actividades', '0': 'root' },
  },

  // === OPCIÓN 3: CONTACTO CON LOS RESPONSABLES ===
  contacto: {
    message: '¿Te gustaría contactar con la administradora o el médico?\n\nEscribe:\n**1** Ver información de contacto\n**2** Enviar un mensaje a la administradora\n**3** Enviar un mensaje al médico\n**0** Volver al menú principal',
    options: {
      '1': 'contacto-info',
      '2': 'contacto-mensaje-admin',
      '3': 'contacto-mensaje-medico',
      '0': 'root',
    },
  },
  'contacto-info': {
    message: '**Información de contacto**:\n\n• Administración: +54 11 1234-5678\n• Email: info@residenciavivencias.com\n• Horario de atención: L-V 9:00 a 17:00\n\nEscribe:\n**1** Volver a contacto\n**0** Volver al menú principal',
    options: { '1': 'contacto', '0': 'root' },
  },
  'contacto-mensaje-admin': {
    message: 'Para enviar un mensaje a la administradora, por favor envía un email a admin@residenciavivencias.com o llama al +54 11 3773-5700.\n\nEscribe:\n**1** Volver a contacto\n**0** Volver al menú principal',
    options: { '1': 'contacto', '0': 'root' },
  },
  'contacto-mensaje-medico': {
    message: 'Para consultas médicas, por favor comunícate con la recepción al +54 11 1234-5678 y te derivarán con el médico de guardia.\n\nEscribe:\n**1** Volver a contacto\n**0** Volver al menú principal',
    options: { '1': 'contacto', '0': 'root' },
  },

  // === OPCIÓN 4: MEDICACIÓN O INSUMOS ===
  medicacion: {
    message: '¿Necesitas saber si tu familiar necesita algún insumo o medicamento?\n\nPor favor, envíanos la información del paciente (nombre completo) y te responderemos a la brevedad.\n\nEscribe:\n**1** Consultar sobre medicación\n**2** Consultar sobre insumos\n**0** Volver al menú principal',
    options: {
      '1': 'medicacion-consulta',
      '2': 'medicacion-insumos',
      '0': 'root',
    },
  },
  'medicacion-consulta': {
    message: 'Para consultar sobre medicación de un residente, envía un email a enfermeria@residenciavivencias.com indicando el nombre del paciente, o comunícate al +54 11 1234-5678.\n\nEscribe:\n**1** Volver a medicación\n**0** Volver al menú principal',
    options: { '1': 'medicacion', '0': 'root' },
  },
  'medicacion-insumos': {
    message: 'Para consultar sobre insumos necesarios (pañales, cremas, artículos de higiene, etc.), comunícate con la administración al +54 11 1234-5678 o por email a admin@residenciavivencias.com.\n\nEscribe:\n**1** Volver a medicación\n**0** Volver al menú principal',
    options: { '1': 'medicacion', '0': 'root' },
  },

  // === OPCIÓN 5: OTROS ===
  otros: {
    message: 'Claro, cuéntame, estoy aquí para ayudarte.\n\nEscribe:\n**1** Horarios de visita\n**2** Información general\n**3** Despedida\n**0** Volver al menú principal',
    options: {
      '1': 'otros-visitas',
      '2': 'otros-info',
      '3': 'despedida',
      '0': 'root',
    },
  },
  'otros-visitas': {
    message: '**Horario de visitas**: Todos los días de 10:00 a 20:00. Se recomienda avisar con anticipación para coordinar.\n\nEscribe:\n**1** Volver a otros\n**0** Volver al menú principal',
    options: { '1': 'otros', '0': 'root' },
  },
  'otros-info': {
    message: 'La Residencia Vivencias ofrece atención integral para adultos mayores en un ambiente cálido y familiar. Para más información, visita nuestra página o comunícate con nosotros.\n\nEscribe:\n**1** Volver a otros\n**0** Volver al menú principal',
    options: { '1': 'otros', '0': 'root' },
  },

  // === DESPEDIDA ===
  despedida: {
    message: 'Gracias por tu consulta. Si necesitas algo más, no dudes en escribirnos. ¡Que tengas un excelente día!\n\nEscribe:\n**0** Volver al menú principal',
    options: { '0': 'root' },
  },
}

export function getNode(nodeId) {
  return CHAT_TREE[nodeId] || CHAT_TREE.root
}

export function getResponse(userInput, currentNodeId) {
  const trimmed = String(userInput).trim()
  const node = getNode(currentNodeId)
  const nextId = node.options?.[trimmed]
  if (nextId) {
    const nextNode = getNode(nextId)
    return { nextNodeId: nextId, message: nextNode.message, options: nextNode.options }
  }
  return null
}

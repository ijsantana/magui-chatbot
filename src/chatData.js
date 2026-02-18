// Árbol de conversación: cada nodo tiene mensaje y opciones 1-4 que llevan a otro nodo
export const CHAT_TREE = {
  root: {
    message: '¡Hola! 👋 Bienvenido al chat. ¿En qué puedo ayudarte hoy?',
    options: {
      '1': 'ventas',
      '2': 'soporte',
      '3': 'informacion',
      '4': 'contacto',
    },
  },
  ventas: {
    message: 'Has elegido **Ventas**. ¿Qué te interesa?',
    options: {
      '1': 'ventas-productos',
      '2': 'ventas-precios',
      '3': 'ventas-ofertas',
      '4': 'root',
    },
  },
  'ventas-productos': {
    message: 'Nuestros productos principales: A, B y C. ¿Quieres más detalles de alguno?',
    options: {
      '1': 'ventas-producto-a',
      '2': 'ventas-producto-b',
      '3': 'ventas-producto-c',
      '4': 'ventas',
    },
  },
  'ventas-producto-a': {
    message: 'Producto A: calidad premium. ¿Algo más?',
    options: { '1': 'ventas', '2': 'root', '3': 'root', '4': 'root' },
  },
  'ventas-producto-b': {
    message: 'Producto B: mejor relación calidad-precio.',
    options: { '1': 'ventas', '2': 'root', '3': 'root', '4': 'root' },
  },
  'ventas-producto-c': {
    message: 'Producto C: ideal para empezar.',
    options: { '1': 'ventas', '2': 'root', '3': 'root', '4': 'root' },
  },
  'ventas-precios': {
    message: 'Consulta nuestros precios en la web. ¿Necesitas ayuda con algo más?',
    options: { '1': 'ventas', '2': 'root', '3': 'root', '4': 'root' },
  },
  'ventas-ofertas': {
    message: '¡Tenemos ofertas especiales esta semana! Escribe 1 para verlas.',
    options: { '1': 'ventas', '2': 'root', '3': 'root', '4': 'root' },
  },
  soporte: {
    message: 'Has elegido **Soporte**. ¿Cuál es tu consulta?',
    options: {
      '1': 'soporte-tecnico',
      '2': 'soporte-devoluciones',
      '3': 'soporte-pedido',
      '4': 'root',
    },
  },
  'soporte-tecnico': {
    message: 'Soporte técnico: nuestro equipo te contactará en menos de 24h.',
    options: { '1': 'soporte', '2': 'root', '3': 'root', '4': 'root' },
  },
  'soporte-devoluciones': {
    message: 'Para devoluciones, envía un email a devoluciones@ejemplo.com.',
    options: { '1': 'soporte', '2': 'root', '3': 'root', '4': 'root' },
  },
  'soporte-pedido': {
    message: 'Consulta el estado de tu pedido en "Mi cuenta" o escribe tu número de pedido.',
    options: { '1': 'soporte', '2': 'root', '3': 'root', '4': 'root' },
  },
  informacion: {
    message: '**Información**: horarios, ubicación, FAQs.',
    options: {
      '1': 'info-horarios',
      '2': 'info-ubicacion',
      '3': 'info-faq',
      '4': 'root',
    },
  },
  'info-horarios': {
    message: 'Horario: L-V 9:00 a 18:00, Sábados 10:00 a 14:00.',
    options: { '1': 'informacion', '2': 'root', '3': 'root', '4': 'root' },
  },
  'info-ubicacion': {
    message: 'Estamos en Calle Principal 123. ¡Te esperamos!',
    options: { '1': 'informacion', '2': 'root', '3': 'root', '4': 'root' },
  },
  'info-faq': {
    message: 'Preguntas frecuentes en nuestra web, sección Ayuda.',
    options: { '1': 'informacion', '2': 'root', '3': 'root', '4': 'root' },
  },
  contacto: {
    message: '**Contacto**: email hola@ejemplo.com, teléfono +34 600 000 000.',
    options: { '1': 'root', '2': 'root', '3': 'root', '4': 'root' },
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

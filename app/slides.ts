export type Slide = {
  title: string;
  subtitle?: string;
  bullets?: string[];
  timeline?: { time: string; activity: string }[];
  code?: string;
  visual?: string;
};

export const slides: Slide[] = [
  {
    title: "Escribir bien es pensar antes",
    subtitle: "Cómo organizar tus ideas para defender una posición académica",
    visual: "📝 Antes de escribir → Planificar → Redactar → Revisar → Texto sólido",
    bullets: [
      "La planeación es tu brújula antes de meterte a escribir.",
      "Un texto argumentativo no sale perfecto de la primera: requiere organización previa.",
      "Hoy aprenderás a estructurar tus ideas para que tu argumento sea fuerte y convincente."
    ]
  },
  {
    title: "¿Qué es un texto argumentativo?",
    bullets: [
      "Es uno de los escritos más comunes en ámbitos académicos e investigativos.",
      "Busca que un autor participe en discusiones y debates académicos mediante la formulación y defensa de un punto de vista.",
      "No solo informa o describe: propone una tesis y la sustenta con argumentos (razones, evidencias, datos).",
      "Su propósito es participar en conversaciones académicas donde se cuestiona y se argumenta sobre un tema específico."
    ]
  },
  {
    title: "¿Todos los ensayos son argumentativos?",
    bullets: [
      "Habitualmente se considera que los textos argumentativos son equivalentes a los ensayos. Pero: ¿en efecto, todo ensayo es un texto argumentativo?",
      "Un ensayo expositivo describe y explica un tema, pero NO sustenta ni defiende una posición.",
      "Un ensayo argumentativo sí propone una tesis y la justifica con argumentos deliberados.",
      "Diferencia clave: ¿el texto solo está ofreciendo información o está defendiendo una postura respecto a esa información?"
    ]
  },
  {
    title: "Tipos de ensayos",
    subtitle: "Según Oshima y Hogue",
    bullets: [
      "🔄 Cronológico: eventos en orden temporal (historia, biografías).",
      "⚡ Causa y efecto: qué causó algo y cuáles son sus consecuencias.",
      "⚔️ Comparativo: similitudes y diferencias entre dos cosas.",
      "💡 Argumentativo: defiende una posición mediante argumentos sustentados."
    ]
  },
  {
    title: "Solo el argumentativo defiende",
    bullets: [
      "El ensayo argumentativo propone una TESIS respecto a un asunto, problema o pregunta.",
      "esa tesis se sustenta mediante ARGUMENTOS razonados, no solo opiniones.",
      "Requiere deliberación académica: pensar por qué tu posición es válida y qué evidencia la respalda."
    ]
  },
  {
    title: "Qué caracteriza un texto argumentativo",
    bullets: [
      "Tesis clara: tu postura central sobre un objeto de estudio, problema o pregunta.",
      "Argumentos: proposiciones que ofrecen razones o pruebas a favor de tu tesis.",
      "Sustentación: basada en evidencias, datos, ejemplos y razonamientos válidos (no solo opinión).",
      "Contraargumentación: reconocimiento de posturas contrarias y respuesta razonada.",
      "Coherencia: cada elemento conecta con la tesis y con los otros argumentos."
    ]
  },
  {
    title: "El proceso antes de escribir",
    bullets: [
      "La construcción de textos argumentativos requiere un proceso previo: el diseño y ejecución de un plan de preescritura.",
      "Un plan de preescritura es una herramienta que permite aproximarse a la definición y articulación de los principales elementos que conformarán un escrito.",
      "No se escribe de manera improvisada, sino organizando primero: las ideas, los argumentos, las fuentes, la estructura lógica."
    ]
  },
  {
    title: "Pasos previos a la redacción",
    bullets: [
      "1️⃣ Elegir un tema relevante y debatible sobre el cual existan múltiples posturas.",
      "2️⃣ Indagar sobre el tema y delimitarlo: ¿qué aspecto específico abordará tu argumentación?",
      "3️⃣ Definir y revisar fuentes que sean académicas, pertinentes y fiables.",
      "4️⃣ Formular una tesis debatible, específica y sustentable.",
      "5️⃣ Esbozar los argumentos, premisas, conclusión y fuentes antes de escribir."
    ]
  },
  {
    title: "Ejemplo: Las universidades públicas deberían eliminar cualquier costo de matrícula",
    bullets: [
      "Tesis: El acceso a educación universitaria debe ser garantizado sin costo para estudiantes de instituciones públicas.",
      "Argumento 1: En otros países (en Alemania, por ejemplo) la educación superior pública es gratuita y funciona.",
      "Argumento 2: La mayoría de adolescentes en Colombia no pueden costear universidad; esto perpetúa desigualdad.",
      "Argumento 3: La educación es un derecho reconocido internacionalmente, no un producto de mercado.",
      "Contraargumento: Las universidades necesitan financiamiento. Respuesta: El Estado debería invertir en educación, no en lujos militares."
    ]
  },
  {
    title: "Estructura de la introducción",
    bullets: [
      "Contexto y tema: establece en qué contexto se inserta tu pregunta y define el tema específico.",
      "Problema o pregunta: plantea explícitamente qué busca tu texto resolver.",
      "Justificación: ¿por qué importa este tema en el contexto académico?",
      "Propósito: enuncia directo qué busca (defender, sustentar, demostrar, argumentar).",
      "Tesis clara: resume tu posición central en 1-2 oraciones.",
      "Vista previa: menciona brevemente cuáles serán tus argumentos principales."
    ]
  },
  {
    title: "Estructura de un argumento",
    bullets: [
      "Premisa 1: un hecho, dato o afirmación que sirve como base.",
      "Premisa 2: otra afirmación conectada lógicamente con la primera.",
      "Conclusión: la afirmación que se infiere de las premisas.",
      "Ejemplo: Premisa 1: 'El 85% de adolescentes de sectores populares no accede a universidad'. Premisa 2: 'Los aranceles son la barrera principal'. Conclusión: 'Eliminar aranceles reduciría esta brecha de desigualdad'."
    ]
  },
  {
    title: "Citas, evidencias y falacias",
    bullets: [
      "Sustenta con datos, estadísticas, ejemplos concretos y citas académicas confiables.",
      "Integra y explica: no basta insertar una cita; contextualiza cómo respalda tu argumento.",
      "Evita falacias: argumentos que parecen válidos pero tienen fallo lógico (ad hominem, falso dilema, etc.).",
      "Una premisa falsa debilita todo el argumento y tu credibilidad.",
      "Respeta normas de citación (APA, Chicago) para dar crédito a tus fuentes."
    ]
  },
  {
    title: "La conclusión: más que un resumen",
    bullets: [
      "Recapitula brevemente: problema, tesis, argumentos centrales.",
      "Refina tu tesis a la luz de lo que argumentaste, sin cambiarla radicalmente.",
      "Reconoce limitaciones: ¿qué preguntas quedan abiertas?",
      "Proyecta: sugiere líneas futuras de investigación o discusión.",
      "No repitas la introducción con otras palabras: cierra con perspectiva integrada."
    ]
  },
  {
    title: "El formato de planeación",
    bullets: [
      "Título: llamativo, específico, resume tu posición.",
      "Introducción: contexto, tema, problema, justificación, tesis, estructura.",
      "Desarrollo: al menos 3 argumentos con premisas, evidencias, conexión con tesis.",
      "Contraargumento: posturas contrarias y respuesta razonada.",
      "Conclusión: recapitulación y proyección.",
      "Bibliografía: todas las fuentes citadas según normas académicas."
    ]
  },
  {
    title: "¿Por qué planear antes de escribir?",
    visual: "✅ Ideas organizadas ✅ Coherencia clara ✅ Escritura rápida ✅ Argumentos sólidos",
    bullets: [
      "Organizas tus ideas estructuradamente en lugar de improvisar.",
      "No te pierdes en la redacción porque ya tienes claro adónde vas.",
      "Tu texto resulta más coherente porque los argumentos están conectados.",
      "Identificas si realmente tienes evidencia para cada planteo.",
      "Escribes más rápido y tu argumentación es más convincente."
    ]
  },
  {
    title: "Revisión y edición",
    bullets: [
      "Toma distancia: espera horas o días antes de revisar. Verás errores que no eras consciente.",
      "Revisa en capas: primero estructura/contenido, luego estilo, finalmente ortografía.",
      "Verifica formato: extensión, tipografía, sistema de citación.",
      "Lee en voz alta: detecta problemas de fluidez que los ojos no captan.",
      "Pide retroalimentación: otros ven lo que tú ya no ves después de reescribir tanto."
    ]
  },
  {
    title: "Checklist final",
    bullets: [
      "☐ Introducción clara con contexto, tema delimitado, problema, justificación y tesis.",
      "☐ Cada argumento: premisas claras, evidencias, conexión explícita con la tesis.",
      "☐ Contraargumento reconocido y respondido de forma razonada.",
      "☐ Conclusión recapitula y añade perspectiva (no solo repite).",
      "☐ Todas las fuentes citadas correctamente según normas académicas.",
      "☐ Coherencia, argumentación sólida, claridad, lenguaje académico sin errores."
    ]
  }
];

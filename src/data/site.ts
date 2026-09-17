export type Lang = 'es' | 'en';

export const WHATSAPP_NUMBER = '5491167581224';
export const CONTACT_EMAIL = 'maximilianofuentes@estudiofuentes.ar';
export const DOMAIN = 'estudiofuentes.ar';

export const whatsappMessage: Record<Lang, string> = {
  es: 'Hola Maximiliano, quiero automatizar un proceso en mi empresa.',
  en: "Hi Maximiliano, I'd like to automate a process in my company.",
};

export const mailtoSubject: Record<Lang, string> = {
  es: 'Consulta — automatización de procesos',
  en: 'Enquiry — process automation',
};

export interface Service {
  number: string;
  title: string;
  body: string;
}

export interface Step {
  kicker: string;
  title: string;
  body: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface SiteContent {
  htmlLang: string;
  path: string;
  otherPath: string;
  metaTitle: string;
  metaDescription: string;
  nav: {
    brand: string;
    servicios: string;
    proceso: string;
    contacto: string;
    toggleLabel: string;
    cta: string;
    menuLabel: string;
  };
  hero: {
    lines: [string, string, string];
    paragraph: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  statsLabel: string;
  stats: Stat[];
  services: {
    kicker: string;
    title: string;
    items: Service[];
  };
  process: {
    kicker: string;
    title: string;
    steps: Step[];
  };
  about: {
    kicker: string;
    title: string;
    body: string;
    photoAlt: string;
    photoPlaceholder: string;
  };
  banner: {
    lines: [string, string];
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    ctaLabel: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      detailLabel: string;
      detailPlaceholder: string;
      submit: string;
      pending: string;
      success: string;
      error: string;
      honeypotLabel: string;
    };
  };
  footer: string;
}

export const site: Record<Lang, SiteContent> = {
  es: {
    htmlLang: 'es',
    path: '/',
    otherPath: '/en',
    metaTitle: 'Estudio Fuentes — Agentes de IA, automatización y desarrollo a medida',
    metaDescription:
      'Estudio Fuentes diseña y construye agentes de IA, automatizaciones y sistemas a medida para negocios que quieren vender más con menos esfuerzo. Escribinos por WhatsApp.',
    nav: {
      brand: 'Estudio Fuentes',
      servicios: 'Servicios',
      proceso: 'Proceso',
      contacto: 'Contacto',
      toggleLabel: 'EN',
      cta: 'Hablemos por WhatsApp',
      menuLabel: 'Abrir menú',
    },
    hero: {
      lines: ['El trabajo repetitivo', 'no debería costarte', 'un sueldo por mes.'],
      paragraph:
        'Estudio Fuentes diseña y construye los sistemas que hacen crecer un negocio: agentes de IA que atienden y califican, automatizaciones que eliminan la carga manual, y desarrollo a medida que conecta todo lo que hoy vive en planillas sueltas. Menos horas perdidas, más ventas cerradas.',
      ctaPrimary: 'Hablemos por WhatsApp',
      ctaSecondary: 'Ver qué construimos',
    },
    statsLabel: 'Cómo trabajamos, en resumen',
    stats: [
      { number: '1 semana', label: 'Del diagnóstico al plan con números' },
      { number: '30 días', label: 'Primer sistema funcionando en producción' },
      { number: '24/7', label: 'Los agentes no duermen ni se toman vacaciones' },
      { number: 'Tuyo', label: 'Código, accesos y documentación quedan en tu poder' },
    ],
    services: {
      kicker: 'Servicios',
      title: 'Cinco frentes, un mismo objetivo: que el negocio venda más con menos esfuerzo.',
      items: [
        {
          number: '01',
          title: 'Agentes de IA',
          body: 'Asistentes que responden consultas, califican interesados, agendan reuniones y hacen seguimiento por WhatsApp, mail o web. Entrenados con tu información real y con reglas claras sobre cuándo pasar la conversación a una persona.',
        },
        {
          number: '02',
          title: 'Automatización de procesos',
          body: 'Presupuestos, facturación, altas de clientes, reportes, carga de datos entre sistemas. Identificamos las tareas que consumen horas todos los días y las convertimos en flujos que corren solos y avisan cuando algo falla.',
        },
        {
          number: '03',
          title: 'Sistemas y motores a medida',
          body: 'Cuando el software de estante no alcanza: paneles internos, motores de cotización y precios, buscadores, gestión de stock y pedidos. Construidos sobre tu operación, no sobre el promedio de la industria.',
        },
        {
          number: '04',
          title: 'Desarrollo web',
          body: 'Sitios y tiendas rápidos, claros y pensados para convertir. Sin plantillas recicladas, sin páginas que tardan en cargar y sin depender de nosotros para cambiar un texto.',
        },
        {
          number: '05',
          title: 'Analítica y dashboards',
          body: 'Tableros que muestran de dónde viene cada venta, qué cuesta cada canal y dónde se cae el embudo. Datos unificados de tus sistemas en una sola pantalla, actualizada sola, para decidir con números y no con intuición.',
        },
      ],
    },
    process: {
      kicker: 'Proceso',
      title: 'Cuatro pasos, y en cada uno sabés qué se hizo y qué sigue.',
      steps: [
        {
          kicker: 'Paso 01',
          title: 'Diagnóstico',
          body: 'Recorremos tu operación tarea por tarea y ponemos números: cuántas horas cuesta, cuánto se pierde, dónde está el cuello de botella.',
        },
        {
          kicker: 'Paso 02',
          title: 'Plan y prioridades',
          body: 'Un documento corto con lo que conviene hacer primero, el impacto esperado y el costo. Si algo no se paga solo, te lo decimos.',
        },
        {
          kicker: 'Paso 03',
          title: 'Construcción',
          body: 'Entregas parciales cada una o dos semanas, probadas con tu equipo. Nada se lanza sin que alguien de tu lado lo haya usado.',
        },
        {
          kicker: 'Paso 04',
          title: 'Escala y soporte',
          body: 'Medimos, ajustamos y sumamos el siguiente proceso. Capacitación y documentación incluidas para que el equipo no dependa de nadie.',
        },
      ],
    },
    about: {
      kicker: 'El estudio',
      title: 'Estudio Fuentes, por Maximiliano Fuentes',
      body: 'No vendemos horas ni informes. Trabajamos con pocos clientes a la vez, aprendemos su operación de verdad y dejamos sistemas que siguen funcionando cuando nos vamos. Si un proyecto no tiene un retorno claro, preferimos no tomarlo.',
      photoAlt: 'Foto del equipo o del espacio de trabajo de Estudio Fuentes',
      photoPlaceholder: 'Foto del equipo o del espacio de trabajo',
    },
    banner: {
      lines: ['Cada proceso manual', 'es plata quieta.'],
    },
    contact: {
      kicker: 'Contacto',
      title: 'Contanos qué te está frenando.',
      body: 'Escribinos en dos líneas cuál es el proceso que más tiempo te come. Respondemos con una primera lectura y, si tiene sentido, coordinamos una llamada de 30 minutos sin costo. La vía más rápida es WhatsApp.',
      ctaLabel: 'Escribir por WhatsApp',
      form: {
        nameLabel: 'Nombre y empresa',
        namePlaceholder: 'Ana Fuentes — Logística del Sur',
        emailLabel: 'Email',
        emailPlaceholder: 'ana@empresa.com',
        detailLabel: '¿Qué querés resolver?',
        detailPlaceholder: 'Cargamos 200 pedidos a mano por semana y perdemos consultas de WhatsApp.',
        submit: 'Enviar consulta',
        pending: 'Enviando…',
        success: 'Gracias — te respondemos dentro de las 24 h.',
        error: 'No pudimos enviarlo. Probá de nuevo o escribinos por WhatsApp.',
        honeypotLabel: 'Dejá este campo vacío',
      },
    },
    footer: 'Estudio Fuentes, por Maximiliano Fuentes — sistemas, agentes y desarrollo para negocios que quieren escalar.',
  },
  en: {
    htmlLang: 'en',
    path: '/en',
    otherPath: '/',
    metaTitle: 'Estudio Fuentes — AI agents, automation and custom development',
    metaDescription:
      'Estudio Fuentes designs and builds AI agents, automations and custom systems for businesses that want to sell more with less effort. Message us on WhatsApp.',
    nav: {
      brand: 'Estudio Fuentes',
      servicios: 'Services',
      proceso: 'Process',
      contacto: 'Contact',
      toggleLabel: 'ES',
      cta: 'Talk on WhatsApp',
      menuLabel: 'Open menu',
    },
    hero: {
      lines: ["Repetitive work", "shouldn't cost you", 'a salary a month.'],
      paragraph:
        "Estudio Fuentes designs and builds the systems that make a business grow: AI agents that answer and qualify, automations that remove manual load, and custom development that connects everything now living in scattered spreadsheets. Fewer hours lost, more deals closed.",
      ctaPrimary: 'Talk on WhatsApp',
      ctaSecondary: 'See what we build',
    },
    statsLabel: 'How we work, in short',
    stats: [
      { number: '1 week', label: 'From audit to a plan with numbers' },
      { number: '30 days', label: 'First system live in production' },
      { number: '24/7', label: "Agents don't sleep or take holidays" },
      { number: 'Yours', label: 'Code, access and documentation stay with you' },
    ],
    services: {
      kicker: 'Services',
      title: 'Five fronts, one goal: the business sells more with less effort.',
      items: [
        {
          number: '01',
          title: 'AI agents',
          body: 'Assistants that answer questions, qualify leads, book meetings and follow up over WhatsApp, email or your site. Trained on your real information, with clear rules on when to hand the conversation to a person.',
        },
        {
          number: '02',
          title: 'Process automation',
          body: 'Quotes, invoicing, client onboarding, reporting, moving data between systems. We find the tasks that eat hours every day and turn them into flows that run on their own and alert you when something breaks.',
        },
        {
          number: '03',
          title: 'Custom systems and engines',
          body: "When off-the-shelf software isn't enough: internal dashboards, quoting and pricing engines, search, stock and order management. Built around your operation, not around the industry average.",
        },
        {
          number: '04',
          title: 'Web development',
          body: 'Fast, clear sites and stores built to convert. No recycled templates, no pages that take seconds to load, and no depending on us to change a line of text.',
        },
        {
          number: '05',
          title: 'Analytics and dashboards',
          body: 'Dashboards that show where each sale comes from, what each channel costs and where the funnel leaks. Data unified from your systems into one screen that updates itself, so decisions run on numbers instead of instinct.',
        },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Four steps, and at every one you know what was done and what comes next.',
      steps: [
        {
          kicker: 'Step 01',
          title: 'Audit',
          body: 'We walk your operation task by task and put numbers on it: how many hours it costs, what gets lost, where the bottleneck sits.',
        },
        {
          kicker: 'Step 02',
          title: 'Plan and priorities',
          body: "A short document with what to do first, the expected impact and the cost. If something won't pay for itself, we say so.",
        },
        {
          kicker: 'Step 03',
          title: 'Build',
          body: 'Partial deliveries every week or two, tested with your team. Nothing ships until someone on your side has used it.',
        },
        {
          kicker: 'Step 04',
          title: 'Scale and support',
          body: "We measure, adjust and add the next process. Training and documentation included so the team doesn't depend on anyone.",
        },
      ],
    },
    about: {
      kicker: 'The studio',
      title: 'Estudio Fuentes, by Maximiliano Fuentes',
      body: "We don't sell hours or reports. We work with few clients at a time, learn their operation properly, and leave systems that keep running after we're gone. If a project has no clear return, we'd rather not take it.",
      photoAlt: 'Photo of the Estudio Fuentes team or workspace',
      photoPlaceholder: 'Photo of the team or the workspace',
    },
    banner: {
      lines: ['Every manual process', 'is money standing still.'],
    },
    contact: {
      kicker: 'Contact',
      title: "Tell us what's holding you back.",
      body: 'Write two lines about the process that eats most of your time. We reply with a first read and, if it makes sense, set up a free 30-minute call. WhatsApp is the fastest route.',
      ctaLabel: 'Message on WhatsApp',
      form: {
        nameLabel: 'Name and company',
        namePlaceholder: 'Ana Fuentes — Logística del Sur',
        emailLabel: 'Email',
        emailPlaceholder: 'ana@company.com',
        detailLabel: 'What do you want to solve?',
        detailPlaceholder: 'We enter 200 orders by hand every week and lose WhatsApp enquiries.',
        submit: 'Send enquiry',
        pending: 'Sending…',
        success: 'Thanks — we reply within 24 h.',
        error: "We couldn't send it. Try again or message us on WhatsApp.",
        honeypotLabel: 'Leave this field empty',
      },
    },
    footer: 'Estudio Fuentes, by Maximiliano Fuentes — systems, agents and development for businesses that want to scale.',
  },
};

"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Navbar
    "nav.services": "Servicios",
    "nav.cases": "Casos",
    "nav.about": "Sobre mí",
    "nav.process": "Proceso",
    "nav.start": "Comenzar",
    "nav.startProject": "Comenzar proyecto",
    "nav.location": "Colombia",
    "nav.phone": "+57 300 976 9468",
    "nav.email": "consulta@bonillahermes.com",

    // Hero
    "hero.transform": "Transformo",
    "hero.data": "datos",
    "hero.insights": "insights",
    "hero.opportunities": "oportunidades",
    "hero.decisions": "decisiones",
    "hero.intoPower": "en poder.",
    "hero.subtitle": "Data Science que revoluciona empresas.",
    "hero.subtitle2": "Resultados que hablan por sí solos.",
    "hero.startNow": "Comenzar ahora",
    "hero.viewCases": "Ver casos de éxito",
    "hero.verifiableResults": "Resultados verificables",
    "hero.precision": "Precisión",
    "hero.years": "Años",
    "hero.projects": "Proyectos",

    // Problems
    "problems.title": "¿Te suena",
    "problems.familiar": "familiar?",
    "problems.subtitle": "Una conversación que tengo a diario con empresarios.",
    "problems.user1": "Tengo muchos datos en mi empresa, pero no sé qué hacer con ellos...",
    "problems.bot1":
      "Entiendo perfectamente. El 73% de las empresas genera miles de puntos de información diarios - ventas, clientes, procesos, métricas - pero siguen tomando decisiones basándose en intuición.",
    "problems.user2": "Exacto. Y cada decisión importante se siente como una apuesta...",
    "problems.bot2":
      "Cada estrategia, cada inversión, cada cambio operativo sin datos es exactamente eso: una apuesta. No tienes forma de predecir el resultado hasta que ya es demasiado tarde. Una sola decisión equivocada puede costar millones en oportunidades perdidas.",
    "problems.user3": "Mi equipo pasa horas haciendo reportes manuales y análisis repetitivos...",
    "problems.bot3":
      "Tu talento humano se está perdiendo en trabajo que la IA puede automatizar. Reportes manuales, análisis repetitivos, clasificación de documentos. Cada hora manual es una hora menos de estrategia e innovación.",
    "problems.user4": "Y cuando finalmente tengo los reportes, los problemas ya ocurrieron...",
    "problems.bot4":
      "Siempre reaccionando, nunca anticipando. Los reportes llegan cuando los problemas ya ocurrieron. Las oportunidades se identifican cuando ya pasaron. El mercado se mueve a la velocidad de los datos, no de los reportes mensuales.",
    "problems.bot5":
      "Pero hay una mejor manera. He transformado estos mismos problemas en ventajas competitivas para empresas como HDI, el Senado de la República e Ipsos.",
    "problems.continuesInPerson": "Esta conversación continúa en persona...",
    "problems.verifiableResults": "Resultados Verificables",
    "problems.notPromises": "No son promesas.",
    "problems.areResults": "Son resultados.",
    "problems.lossReduction": "Reducción de pérdidas",
    "problems.fasterProcessing": "Más rápido",
    "problems.alwaysWorking": "Funcionando",
    "problems.discoverHow": "Descubre cómo",

    // Services
    "services.advanced": "Servicios de IA Avanzada",
    "services.title": "Soluciones de",
    "services.ai": "Inteligencia Artificial",
    "services.subtitle": "Servicios especializados que transforman datos en ventajas competitivas",
    "services.available": "Servicios Disponibles",
    "services.active": "ACTIVOS",
    "services.systemActive": "SISTEMA ACTIVO",
    "services.express.title": "Diagnóstico Express",
    "services.express.subtitle": "Análisis Rápido",
    "services.express.description":
      "Descubre el potencial oculto en tus datos con análisis rápido y preciso que revela oportunidades inmediatas.",
    "services.express.cta": "Iniciar Diagnóstico",
    "services.express.status": "Disponible",
    "services.complete.title": "Modelo Predictivo",
    "services.complete.subtitle": "IA en Producción",
    "services.complete.description":
      "Solución integral de inteligencia artificial lista para producción que transforma completamente tu operación.",
    "services.complete.cta": "Implementar Ahora",
    "services.complete.status": "Recomendado",
    "services.transformation.title": "Transformación IA",
    "services.transformation.subtitle": "Ecosistema Completo",
    "services.transformation.description":
      "Revolución completa de tu ecosistema de datos con inteligencia artificial avanzada y arquitectura escalable.",
    "services.transformation.cta": "Consultar Transformación",
    "services.transformation.status": "Premium",

    // Case Studies
    "cases.verified": "Casos Verificados",
    "cases.title": "Casos",
    "cases.verifiable": "verificables.",
    "cases.subtitle": "Resultados reales en empresas reales.",
    "cases.hdi.company": "HDI Seguros",
    "cases.hdi.title": "Optimización de Primas",
    "cases.hdi.description":
      "Modelo predictivo que redujo pérdidas por siniestralidad en 35% usando machine learning avanzado.",
    "cases.hdi.result": "Modelo funcionando 24/7 desde agosto 2023",
    "cases.senate.company": "Senado República",
    "cases.senate.title": "Automatización Legislativa",
    "cases.senate.description": "Sistema NLP que clasifica proyectos de ley automáticamente con 99% de precisión.",
    "cases.senate.result": "De 3 semanas a 3 minutos por ciclo legislativo",
    "cases.electoral.company": "Consultoría Electoral",
    "cases.electoral.title": "Predicción Electoral",
    "cases.electoral.description":
      "Análisis predictivo de comportamiento electoral con precisión superior a encuestas tradicionales.",
    "cases.electoral.result": "Superó todas las encuestas tradicionales",
    "cases.precision": "Precisión",
    "cases.savings": "Ahorro",
    "cases.lossReduction": "Reducción pérdidas",
    "cases.speed": "Velocidad",
    "cases.documents": "Documentos",
    "cases.voters": "Votantes",
    "cases.nextCompany": "¿Tu empresa podría ser la",
    "cases.next": "próxima?",
    "cases.transformationStarts": "Cada transformación comienza con una conversación.",
    "cases.startConversation": "Comenzar conversación",

    // Why Me
    "whyme.title": "Por qué puedes",
    "whyme.trustMe": "confiar en mí.",
    "whyme.subtitle": "No se trata de ser el mejor.",
    "whyme.subtitle2": "Se trata de ser el indicado para tu proyecto.",
    "whyme.realExperience": "Experiencia real.",
    "whyme.notJustTheory": "No solo teoría.",
    "whyme.workingModels": "Modelos que funcionan.",
    "whyme.alwaysOn": "24 horas, 7 días.",
    "whyme.speakYourLanguage": "Hablo tu idioma.",
    "whyme.andPython": "Y también Python.",
    "whyme.available": "Estoy disponible.",
    "whyme.inColombia": "En toda Colombia.",
    "whyme.rightTools": "Las herramientas correctas.",
    "whyme.provenTech": "Tecnología probada para resultados confiables.",
    "whyme.availableForProjects": "Disponible para nuevos proyectos",
    "whyme.yearsExperience": "Años de experiencia",
    "whyme.completedProjects": "Proyectos completados",
    "whyme.satisfiedClients": "Clientes satisfechos",
    "whyme.modelsWorking": "Modelos funcionando",
    "whyme.quote": "No busco ser tu proveedor de tecnología.",
    "whyme.quote2": "Busco ser tu socio en la transformación de tu negocio.",
    "whyme.knowMyProcess": "Conoce mi proceso",

    // Process
    "process.proven": "Metodología Probada",
    "process.title": "Mi Proceso de",
    "process.transformation": "Transformación",
    "process.subtitle": "Metodología estructurada y transparente que garantiza resultados excepcionales",
    "process.discovery": "Descubrimiento",
    "process.deepAnalysis": "Análisis Profundo",
    "process.proposal": "Propuesta",
    "process.personalizedStrategy": "Estrategia Personalizada",
    "process.execution": "Ejecución",
    "process.agileDevelopment": "Desarrollo Ágil",
    "process.delivery": "Entrega",
    "process.perpetualValue": "Valor Perpetuo",
    "process.free": "Gratuito",
    "process.included": "Incluido",
    "process.inProgress": "En Progreso",
    "process.guaranteed": "Garantizado",
    "process.readyToStart": "¿Listo para comenzar tu",
    "process.transformation2": "transformación?",
    "process.firstStepFree":
      "El primer paso es siempre gratuito. Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos.",
    "process.startProcess": "Iniciar Proceso",

    // About
    "about.beyondCode": "Más allá del código",
    "about.invisibleTech": "Creo que la mejor tecnología es invisible. Mi trabajo no es solo construir modelos, sino",
    "about.translateComplexity": "traducir complejidad en claridad",
    "about.convertData": "y convertir datos en historias que tu equipo pueda entender y actuar.",
    "about.agileManagement": "Me especializo en",
    "about.projectManagement": "gestión ágil de proyectos",
    "about.effectiveCommunication": ", comunicación efectiva con stakeholders y",
    "about.technicalLeadership": "liderazgo técnico",
    "about.uniteTeams": "que une equipos multidisciplinarios hacia objetivos comunes.",
    "about.whatDifferentiates": "Lo que realmente me diferencia",
    "about.clearCommunication": "Comunicación Clara",
    "about.explainAI": "Explico IA compleja en términos de negocio que cualquier CEO entiende",
    "about.expectationManagement": "Gestión de Expectativas",
    "about.promiseDeliver": "Prometo solo lo que puedo entregar, y entrego más de lo prometido",
    "about.agileMethodology": "Metodología Ágil",
    "about.shortSprints": "Sprints cortos, feedback constante, adaptación rápida a cambios",
    "about.strategicThinking": "Pensamiento Estratégico",
    "about.bigPicture": "Veo el panorama completo, no solo la solución técnica inmediata",
    "about.statistician": "Estadístico",
    "about.scrumMaster": "Scrum Master Certificado",
    "about.colombia": "Colombia",
    "about.philosophy": "Mi objetivo no es impresionarte con tecnología compleja, sino",
    "about.simplifyWorld": "simplificar tu mundo con soluciones que realmente funcionen.",

    // FAQ
    "faq.title": "Preguntas",
    "faq.frequent": "Frecuentes",
    "faq.subtitle": "Todo lo que necesitas saber para tomar la mejor decisión",
    "faq.search": "Buscar pregunta...",
    "faq.general": "General",
    "faq.process": "Proceso",
    "faq.results": "Resultados",
    "faq.investment": "Inversión",
    "faq.popular": "Popular",
    "faq.noResults": "No se encontraron preguntas que coincidan con tu búsqueda.",
    "faq.clearSearch": "Limpiar búsqueda",
    "faq.noQuestion": "¿No encuentras tu pregunta?",
    "faq.uniqueProject": "Cada proyecto es único. Hablemos directamente sobre tu situación específica.",
    "faq.freeConsultation": "Consulta Gratuita",

    // CTA
    "cta.available": "Consulta Estratégica Disponible",
    "cta.readyToTransform": "¿Listo para",
    "cta.transform": "transformar",
    "cta.yourBusiness": "tu negocio?",
    "cta.discoverAI": "Descubre cómo la inteligencia artificial puede revolucionar tu empresa.",
    "cta.firstConsultation": "Primera consulta completamente gratuita.",
    "cta.whatWeDiscover": "Lo que descubriremos juntos",
    "cta.completeEvaluation": "Evaluación completa de tu potencial",
    "cta.analyzeData": "Analizamos tus datos y procesos actuales",
    "cta.opportunities": "3 oportunidades de mejora identificadas",
    "cta.concreteIdeas": "Ideas concretas para optimizar tu negocio",
    "cta.personalizedROI": "ROI estimado personalizado",
    "cta.realProjection": "Proyección real del retorno de inversión",
    "cta.implementationStrategy": "Estrategia de implementación",
    "cta.stepByStep": "Plan paso a paso adaptado a tu empresa",
    "cta.scheduleConsultation": "Agendar Consulta Estratégica",
    "cta.free": "100% Gratuita",
    "cta.noCommitments": "Sin compromisos",
    "cta.thirtyMinutes": "30 minutos que pueden cambiar tu negocio",
    "cta.orContactDirectly": "o contacta directamente",
    "cta.whatsappDirect": "WhatsApp Directo",
    "cta.emailDirect": "Email Directo",

    // Footer
    "footer.transform": "Transformemos",
    "footer.yourBusiness": "tu negocio.",
    "footer.dataScience": "Data Science que genera resultados reales.",
    "footer.availableInColombia": "Disponible en toda Colombia. Conversemos sobre tu próximo proyecto.",
    "footer.startProject": "Comenzar Proyecto",
    "footer.whatsapp": "WhatsApp",
    "footer.navigation": "Navegación",
    "footer.contact": "Contacto",
    "footer.dataScienceSenior": "Data Scientist Senior",
    "footer.allRights": "Todos los derechos reservados",
    "footer.madeWithData": "Hecho con datos y café en Colombia",

    // WhatsApp
    "whatsapp.interested": "Hola Hermes, estoy interesado en tus servicios de Data Science",
  },
  en: {
    // Navbar
    "nav.services": "Services",
    "nav.cases": "Cases",
    "nav.about": "About me",
    "nav.process": "Process",
    "nav.start": "Get Started",
    "nav.startProject": "Start project",
    "nav.location": "Colombia",
    "nav.phone": "+57 300 976 9468",
    "nav.email": "consulta@bonillahermes.com",

    // Hero
    "hero.transform": "I transform",
    "hero.data": "data",
    "hero.insights": "insights",
    "hero.opportunities": "opportunities",
    "hero.decisions": "decisions",
    "hero.intoPower": "into power.",
    "hero.subtitle": "Data Science that revolutionizes companies.",
    "hero.subtitle2": "Results that speak for themselves.",
    "hero.startNow": "Start now",
    "hero.viewCases": "View success cases",
    "hero.verifiableResults": "Verifiable results",
    "hero.precision": "Precision",
    "hero.years": "Years",
    "hero.projects": "Projects",

    // Problems
    "problems.title": "Does this sound",
    "problems.familiar": "familiar?",
    "problems.subtitle": "A conversation I have daily with business owners.",
    "problems.user1": "I have lots of data in my company, but I don't know what to do with it...",
    "problems.bot1":
      "I understand perfectly. 73% of companies generate thousands of data points daily - sales, customers, processes, metrics - but still make decisions based on intuition.",
    "problems.user2": "Exactly. And every important decision feels like a gamble...",
    "problems.bot2":
      "Every strategy, every investment, every operational change without data is exactly that: a gamble. You have no way to predict the outcome until it's too late. A single wrong decision can cost millions in lost opportunities.",
    "problems.user3": "My team spends hours doing manual reports and repetitive analysis...",
    "problems.bot3":
      "Your human talent is being wasted on work that AI can automate. Manual reports, repetitive analysis, document classification. Every manual hour is one less hour of strategy and innovation.",
    "problems.user4": "And when I finally have the reports, the problems have already occurred...",
    "problems.bot4":
      "Always reacting, never anticipating. Reports arrive when problems have already occurred. Opportunities are identified when they've already passed. The market moves at the speed of data, not monthly reports.",
    "problems.bot5":
      "But there's a better way. I've transformed these same problems into competitive advantages for companies like HDI, the Senate of the Republic, and Ipsos.",
    "problems.continuesInPerson": "This conversation continues in person...",
    "problems.verifiableResults": "Verifiable Results",
    "problems.notPromises": "These are not promises.",
    "problems.areResults": "These are results.",
    "problems.lossReduction": "Loss reduction",
    "problems.fasterProcessing": "Faster",
    "problems.alwaysWorking": "Working",
    "problems.discoverHow": "Discover how",

    // Services
    "services.advanced": "Advanced AI Services",
    "services.title": "Artificial Intelligence",
    "services.ai": "Solutions",
    "services.subtitle": "Specialized services that transform data into competitive advantages",
    "services.available": "Available Services",
    "services.active": "ACTIVE",
    "services.systemActive": "SYSTEM ACTIVE",
    "services.express.title": "Express Diagnosis",
    "services.express.subtitle": "Rapid Analysis",
    "services.express.description":
      "Discover the hidden potential in your data with fast and accurate analysis that reveals immediate opportunities.",
    "services.express.cta": "Start Diagnosis",
    "services.express.status": "Available",
    "services.complete.title": "Predictive Model",
    "services.complete.subtitle": "AI in Production",
    "services.complete.description":
      "Comprehensive artificial intelligence solution ready for production that completely transforms your operation.",
    "services.complete.cta": "Implement Now",
    "services.complete.status": "Recommended",
    "services.transformation.title": "AI Transformation",
    "services.transformation.subtitle": "Complete Ecosystem",
    "services.transformation.description":
      "Complete revolution of your data ecosystem with advanced artificial intelligence and scalable architecture.",
    "services.transformation.cta": "Consult Transformation",
    "services.transformation.status": "Premium",

    // Case Studies
    "cases.verified": "Verified Cases",
    "cases.title": "Verifiable",
    "cases.verifiable": "cases.",
    "cases.subtitle": "Real results in real companies.",
    "cases.hdi.company": "HDI Insurance",
    "cases.hdi.title": "Premium Optimization",
    "cases.hdi.description": "Predictive model that reduced claims losses by 35% using advanced machine learning.",
    "cases.hdi.result": "Model running 24/7 since August 2023",
    "cases.senate.company": "Senate Republic",
    "cases.senate.title": "Legislative Automation",
    "cases.senate.description": "NLP system that automatically classifies bill projects with 99% accuracy.",
    "cases.senate.result": "From 3 weeks to 3 minutes per legislative cycle",
    "cases.electoral.company": "Electoral Consulting",
    "cases.electoral.title": "Electoral Prediction",
    "cases.electoral.description":
      "Predictive analysis of electoral behavior with accuracy superior to traditional polls.",
    "cases.electoral.result": "Outperformed all traditional polls",
    "cases.precision": "Precision",
    "cases.savings": "Savings",
    "cases.lossReduction": "Loss reduction",
    "cases.speed": "Speed",
    "cases.documents": "Documents",
    "cases.voters": "Voters",
    "cases.nextCompany": "Could your company be the",
    "cases.next": "next one?",
    "cases.transformationStarts": "Every transformation begins with a conversation.",
    "cases.startConversation": "Start conversation",

    // Why Me
    "whyme.title": "Why you can",
    "whyme.trustMe": "trust me.",
    "whyme.subtitle": "It's not about being the best.",
    "whyme.subtitle2": "It's about being the right one for your project.",
    "whyme.realExperience": "Real experience.",
    "whyme.notJustTheory": "Not just theory.",
    "whyme.workingModels": "Models that work.",
    "whyme.alwaysOn": "24 hours, 7 days.",
    "whyme.speakYourLanguage": "I speak your language.",
    "whyme.andPython": "And also Python.",
    "whyme.available": "I'm available.",
    "whyme.inColombia": "Throughout Colombia.",
    "whyme.rightTools": "The right tools.",
    "whyme.provenTech": "Proven technology for reliable results.",
    "whyme.availableForProjects": "Available for new projects",
    "whyme.yearsExperience": "Years of experience",
    "whyme.completedProjects": "Completed projects",
    "whyme.satisfiedClients": "Satisfied clients",
    "whyme.modelsWorking": "Models working",
    "whyme.quote": "I don't seek to be your technology provider.",
    "whyme.quote2": "I seek to be your partner in business transformation.",
    "whyme.knowMyProcess": "Know my process",

    // Process
    "process.proven": "Proven Methodology",
    "process.title": "My",
    "process.transformation": "Transformation Process",
    "process.subtitle": "Structured and transparent methodology that guarantees exceptional results",
    "process.discovery": "Discovery",
    "process.deepAnalysis": "Deep Analysis",
    "process.proposal": "Proposal",
    "process.personalizedStrategy": "Personalized Strategy",
    "process.execution": "Execution",
    "process.agileDevelopment": "Agile Development",
    "process.delivery": "Delivery",
    "process.perpetualValue": "Perpetual Value",
    "process.free": "Free",
    "process.included": "Included",
    "process.inProgress": "In Progress",
    "process.guaranteed": "Guaranteed",
    "process.readyToStart": "Ready to start your",
    "process.transformation2": "transformation?",
    "process.firstStepFree": "The first step is always free. Let's talk about how I can help you achieve your goals.",
    "process.startProcess": "Start Process",

    // About
    "about.beyondCode": "Beyond the code",
    "about.invisibleTech": "I believe the best technology is invisible. My job is not just to build models, but to",
    "about.translateComplexity": "translate complexity into clarity",
    "about.convertData": "and convert data into stories that your team can understand and act upon.",
    "about.agileManagement": "I specialize in",
    "about.projectManagement": "agile project management",
    "about.effectiveCommunication": ", effective communication with stakeholders, and",
    "about.technicalLeadership": "technical leadership",
    "about.uniteTeams": "that unites multidisciplinary teams toward common goals.",
    "about.whatDifferentiates": "What really differentiates me",
    "about.clearCommunication": "Clear Communication",
    "about.explainAI": "I explain complex AI in business terms that any CEO understands",
    "about.expectationManagement": "Expectation Management",
    "about.promiseDeliver": "I promise only what I can deliver, and deliver more than promised",
    "about.agileMethodology": "Agile Methodology",
    "about.shortSprints": "Short sprints, constant feedback, rapid adaptation to changes",
    "about.strategicThinking": "Strategic Thinking",
    "about.bigPicture": "I see the big picture, not just the immediate technical solution",
    "about.statistician": "Statistician",
    "about.scrumMaster": "Certified Scrum Master",
    "about.colombia": "Colombia",
    "about.philosophy": "My goal is not to impress you with complex technology, but to",
    "about.simplifyWorld": "simplify your world with solutions that really work.",

    // FAQ
    "faq.title": "Frequently Asked",
    "faq.frequent": "Questions",
    "faq.subtitle": "Everything you need to know to make the best decision",
    "faq.search": "Search question...",
    "faq.general": "General",
    "faq.process": "Process",
    "faq.results": "Results",
    "faq.investment": "Investment",
    "faq.popular": "Popular",
    "faq.noResults": "No questions found matching your search.",
    "faq.clearSearch": "Clear search",
    "faq.noQuestion": "Can't find your question?",
    "faq.uniqueProject": "Every project is unique. Let's talk directly about your specific situation.",
    "faq.freeConsultation": "Free Consultation",

    // CTA
    "cta.available": "Strategic Consultation Available",
    "cta.readyToTransform": "Ready to",
    "cta.transform": "transform",
    "cta.yourBusiness": "your business?",
    "cta.discoverAI": "Discover how artificial intelligence can revolutionize your company.",
    "cta.firstConsultation": "First consultation completely free.",
    "cta.whatWeDiscover": "What we'll discover together",
    "cta.completeEvaluation": "Complete evaluation of your potential",
    "cta.analyzeData": "We analyze your current data and processes",
    "cta.opportunities": "3 improvement opportunities identified",
    "cta.concreteIdeas": "Concrete ideas to optimize your business",
    "cta.personalizedROI": "Personalized estimated ROI",
    "cta.realProjection": "Real projection of return on investment",
    "cta.implementationStrategy": "Implementation strategy",
    "cta.stepByStep": "Step-by-step plan adapted to your company",
    "cta.scheduleConsultation": "Schedule Strategic Consultation",
    "cta.free": "100% Free",
    "cta.noCommitments": "No commitments",
    "cta.thirtyMinutes": "30 minutes that can change your business",
    "cta.orContactDirectly": "or contact directly",
    "cta.whatsappDirect": "Direct WhatsApp",
    "cta.emailDirect": "Direct Email",

    // Footer
    "footer.transform": "Let's transform",
    "footer.yourBusiness": "your business.",
    "footer.dataScience": "Data Science that generates real results.",
    "footer.availableInColombia": "Available throughout Colombia. Let's talk about your next project.",
    "footer.startProject": "Start Project",
    "footer.whatsapp": "WhatsApp",
    "footer.navigation": "Navigation",
    "footer.contact": "Contact",
    "footer.dataScienceSenior": "Senior Data Scientist",
    "footer.allRights": "All rights reserved",
    "footer.madeWithData": "Made with data and coffee in Colombia",

    // WhatsApp
    "whatsapp.interested": "Hello Hermes, I'm interested in your Data Science services",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

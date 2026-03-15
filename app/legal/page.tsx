import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aviso Legal y Política de Tratamiento de Datos — Hermes Bonilla",
  description:
    "Política de tratamiento de datos personales, aviso de privacidad y términos de uso del sitio web de Hermes Bonilla.",
}

export default function LegalPage() {
  return (
    <article className="py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-accent" />
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent">
              Legal
            </p>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Aviso legal y política de tratamiento de datos personales
          </h1>
          <p className="text-sm text-muted-foreground">
            Última actualización: marzo de 2026
          </p>
        </div>

        <div className="prose prose-sm max-w-none text-muted-foreground [&_h2]:text-foreground [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:mt-14 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:pl-5 [&_li]:mb-2 [&_li]:leading-relaxed [&_a]:text-accent [&_a]:underline">

          {/* ── 1. IDENTIFICACIÓN DEL RESPONSABLE ── */}
          <h2>1. Identificación del responsable</h2>
          <p>
            El presente sitio web es operado por <strong className="text-foreground">Hermes Bonilla</strong>,
            persona natural con domicilio en Bogotá, Colombia, quien actúa como responsable
            del tratamiento de datos personales en los términos de la Ley 1581 de 2012 y
            el Decreto 1377 de 2013.
          </p>
          <ul>
            <li><strong className="text-foreground">Sitio web:</strong> hermesbonilla.com</li>
            <li><strong className="text-foreground">Canal de contacto:</strong> WhatsApp +57 300 976 9468</li>
            <li><strong className="text-foreground">Domicilio:</strong> Bogotá D.C., Colombia</li>
          </ul>

          {/* ── 2. POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES ── */}
          <h2>2. Política de tratamiento de datos personales</h2>
          <p>
            En cumplimiento de la Ley Estatutaria 1581 de 2012, el Decreto Reglamentario
            1377 de 2013, y demás normas concordantes, Hermes Bonilla adopta la presente
            política para el tratamiento de datos personales.
          </p>

          <h3>2.1. Datos que se recopilan</h3>
          <p>
            A través de este sitio web y de los canales de contacto asociados, se podrán
            recopilar los siguientes datos personales, siempre con autorización previa del
            titular:
          </p>
          <ul>
            <li>Nombre completo</li>
            <li>Número de teléfono o WhatsApp</li>
            <li>Correo electrónico (cuando sea proporcionado voluntariamente)</li>
            <li>Nombre de la entidad u organización a la que pertenece</li>
            <li>Cargo o rol institucional</li>
            <li>Información relacionada con el proyecto o consulta realizada</li>
          </ul>

          <h3>2.2. Finalidades del tratamiento</h3>
          <p>Los datos personales recopilados serán utilizados exclusivamente para:</p>
          <ul>
            <li>Atender solicitudes, consultas y requerimientos del titular</li>
            <li>Gestionar la relación contractual o precontractual con el cliente</li>
            <li>Enviar información relevante sobre los servicios ofrecidos, previa autorización</li>
            <li>Cumplir con obligaciones legales y regulatorias aplicables</li>
            <li>Elaborar propuestas técnicas y comerciales solicitadas por el titular</li>
          </ul>

          <h3>2.3. Derechos de los titulares</h3>
          <p>
            De conformidad con el artículo 8 de la Ley 1581 de 2012, el titular de los
            datos personales tiene derecho a:
          </p>
          <ul>
            <li>Conocer, actualizar y rectificar sus datos personales</li>
            <li>Solicitar prueba de la autorización otorgada para el tratamiento</li>
            <li>Ser informado sobre el uso que se ha dado a sus datos personales</li>
            <li>Revocar la autorización y/o solicitar la supresión de sus datos, siempre que no exista un deber legal o contractual que lo impida</li>
            <li>Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley</li>
            <li>Acceder de forma gratuita a sus datos personales que hayan sido objeto de tratamiento</li>
          </ul>

          <h3>2.4. Procedimiento para ejercer derechos</h3>
          <p>
            El titular podrá ejercer cualquiera de sus derechos comunicándose a través del
            canal de contacto indicado en la sección 1 de este documento. Las solicitudes
            serán atendidas en un plazo máximo de diez (10) días hábiles contados a partir
            de la fecha de recibo. Cuando no fuere posible atender la solicitud dentro de
            dicho término, se informará al titular los motivos de la demora y la fecha en
            que se atenderá, la cual en ningún caso podrá superar los cinco (5) días hábiles
            siguientes al vencimiento del primer término.
          </p>

          <h3>2.5. Seguridad de la información</h3>
          <p>
            Hermes Bonilla adopta medidas técnicas, humanas y administrativas razonables
            para proteger los datos personales contra acceso no autorizado, pérdida,
            alteración o divulgación indebida. Sin embargo, ningún sistema de transmisión
            o almacenamiento digital es completamente seguro, por lo que no es posible
            garantizar la seguridad absoluta de la información.
          </p>

          <h3>2.6. Transferencia y transmisión de datos</h3>
          <p>
            Los datos personales no serán vendidos, cedidos ni compartidos con terceros,
            salvo en los siguientes casos:
          </p>
          <ul>
            <li>Cuando sea necesario para cumplir con una obligación legal</li>
            <li>Cuando medie autorización expresa del titular</li>
            <li>Cuando sea requerido por autoridad judicial o administrativa competente</li>
          </ul>

          <h3>2.7. Vigencia</h3>
          <p>
            Los datos personales serán conservados durante el tiempo que sea necesario para
            cumplir con las finalidades descritas en esta política, y serán eliminados cuando
            dejen de ser necesarios o cuando el titular solicite su supresión, salvo que
            exista un deber legal de conservación.
          </p>

          {/* ── 3. AVISO DE PRIVACIDAD ── */}
          <h2>3. Aviso de privacidad</h2>
          <p>
            Este sitio web no utiliza formularios de recolección de datos. La comunicación
            se realiza a través de WhatsApp, plataforma de terceros sujeta a sus propios
            términos y política de privacidad.
          </p>
          <p>
            Al iniciar una conversación a través de los enlaces de WhatsApp disponibles en
            este sitio, el usuario acepta voluntariamente compartir su número de teléfono
            y la información que decida proporcionar durante la conversación.
          </p>
          <p>
            Este sitio web puede utilizar herramientas de analítica (como Vercel Analytics)
            que recopilan datos de navegación de forma anónima y agregada, sin identificar
            personalmente a los visitantes. Estos datos se utilizan exclusivamente para
            mejorar el rendimiento y la experiencia del sitio.
          </p>

          {/* ── 4. TÉRMINOS DE USO ── */}
          <h2>4. Términos de uso del sitio web</h2>

          <h3>4.1. Propiedad intelectual</h3>
          <p>
            Todo el contenido publicado en este sitio web, incluyendo textos, diseño,
            logotipos, estructura y código fuente, es propiedad de Hermes Bonilla o se
            utiliza con la debida autorización, y está protegido por las normas colombianas
            e internacionales de propiedad intelectual y derechos de autor.
          </p>
          <p>
            Queda prohibida la reproducción total o parcial del contenido de este sitio
            sin autorización previa y escrita del titular.
          </p>

          <h3>4.2. Información publicada</h3>
          <p>
            La información contenida en este sitio web tiene carácter informativo y no
            constituye una oferta comercial vinculante. Las descripciones de servicios y
            plataformas representan las capacidades generales ofrecidas y pueden variar
            según las necesidades específicas de cada proyecto.
          </p>

          <h3>4.3. Enlaces a terceros</h3>
          <p>
            Este sitio puede contener enlaces a plataformas y sitios web de terceros
            (incluyendo WhatsApp, LinkedIn, GitHub y plataformas de demostración). Hermes
            Bonilla no es responsable del contenido, políticas de privacidad ni prácticas
            de estos sitios externos.
          </p>

          <h3>4.4. Limitación de responsabilidad</h3>
          <p>
            Hermes Bonilla no garantiza la disponibilidad ininterrumpida del sitio web ni
            la ausencia de errores en su contenido. El uso del sitio se realiza bajo la
            exclusiva responsabilidad del usuario.
          </p>

          {/* ── 5. LEY APLICABLE ── */}
          <h2>5. Ley aplicable y jurisdicción</h2>
          <p>
            Esta política se rige por las leyes de la República de Colombia. Cualquier
            controversia derivada de su interpretación o aplicación será sometida a la
            jurisdicción de los jueces y tribunales de Bogotá D.C., Colombia.
          </p>

          {/* ── 6. MODIFICACIONES ── */}
          <h2>6. Modificaciones</h2>
          <p>
            Hermes Bonilla se reserva el derecho de modificar esta política en cualquier
            momento. Las modificaciones entrarán en vigencia a partir de su publicación
            en este sitio web. Se recomienda revisar esta página periódicamente.
          </p>

          {/* Disclaimer */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              Este documento ha sido elaborado con fines informativos y como referencia
              general. Se recomienda su revisión por parte de un profesional del derecho
              para asegurar su adecuación a las circunstancias específicas del responsable
              del tratamiento.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

// EcpDashboard.tsx
// Dashboard interactivo — Encuesta de Cultura Politica 2023 (DANE)
// Datos estaticos en /public/data/ecp/

"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ReferenceLine,
} from "recharts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface KpiItem {
  id: string;
  label: string;
  valor: number;
  escala: string;
  interpretacion?: string;
}

interface KpisData {
  metadatos: {
    fecha_generacion: string;
    fuente: string;
    n_encuestados: number;
    codigo: string;
    version: string;
  };
  kpis: KpiItem[];
}

interface SimpleInstitItem {
  institucion: string;
  media: number;
}

interface ConfianzaData {
  metadatos: Record<string, unknown>;
  nacional: SimpleInstitItem[];
  por_region: Record<string, SimpleInstitItem[]>;
  por_generacion: Record<string, SimpleInstitItem[]>;
  por_sexo: Record<string, SimpleInstitItem[]>;
  por_educacion: Record<string, SimpleInstitItem[]>;
}

interface CorrupcionNacionalItem {
  variable: string;
  actor: string;
  media_ponderada: number;
  pct_muy_corrupto: number;
  pct_nada_corrupto: number;
  n_valido: number;
}

interface SimpleActorItem {
  actor: string;
  media: number;
}

interface CorrupcionData {
  metadatos: Record<string, unknown>;
  ranking: CorrupcionNacionalItem[];
  por_region: Record<string, SimpleActorItem[]>;
  por_generacion: Record<string, SimpleActorItem[]>;
}

interface Centroide {
  confianza_media: number;
  corrupcion_media: number;
  satisfaccion_demo: number;
  voz_politica: number;
  ideologia: number;
}

interface PerfilItem {
  cluster: number;
  nombre: string;
  n: number;
  pct: number;
  centroides: Centroide;
  distribucion_regional: Record<string, number>;
  distribucion_generacion: Record<string, number>;
  distribucion_educacion: Record<string, number>;
}

interface PerfilesData {
  metadatos: Record<string, unknown>;
  perfiles: PerfilItem[];
}

interface ConfianzaInterpersonalItem {
  grupo: string;
  media: number;
  pct_alta: number;
}

interface SatisfaccionVitalItem {
  dimension: string;
  media: number;
}

interface ToleranciaSocialItem {
  grupo: string;
  pct_rechazo: number;
}

interface CapitalSocialData {
  metadatos: Record<string, unknown>;
  confianza_interpersonal: ConfianzaInterpersonalItem[];
  satisfaccion_vital: SatisfaccionVitalItem[];
  tolerancia_social: ToleranciaSocialItem[];
  perfiles_interaccion: Array<{
    id: string;
    label: string;
    pct_nacional: number;
    por_region: Record<string, number>;
    por_generacion: Record<string, number>;
  }>;
}

interface IndicesSet {
  idx_confianza: number;
  idx_corrupcion: number;
  brecha_demo: number;
  idx_participacion_org: number;
  idx_conocimiento_mecanismos: number;
  idx_cs_bonding: number;
  idx_cs_bridging: number;
  idx_intolerancia: number;
}

interface IndicesData {
  metadatos: Record<string, unknown>;
  nacional: IndicesSet;
  por_region: Record<string, IndicesSet>;
  por_generacion: Record<string, IndicesSet>;
  por_sexo: Record<string, IndicesSet>;
  por_educacion: Record<string, IndicesSet>;
}

interface BloqueIdeologico {
  Izquierda: number;
  Centro: number;
  Derecha: number;
}

interface ElectoralSlice {
  pct_voto: number;
  ideologia_media: number;
  bloque_ideologico: BloqueIdeologico;
}

interface PredictorItem {
  predictor: string;
  ame: number;
  p_valor: number;
  direccion: string;
  sig: string;
}

interface ElectoralData {
  metadatos: Record<string, unknown>;
  nacional: ElectoralSlice & {
    pct_abstencion: number;
    pct_inscrito: number;
    pct_identifica_partido: number;
  };
  por_region: Record<string, ElectoralSlice>;
  por_generacion: Record<string, ElectoralSlice>;
  por_sexo: Record<string, ElectoralSlice>;
  regresion_logistica: {
    n_observaciones: number;
    pseudo_r2_mcfadden: number;
    nota: string;
    predictores_significativos: PredictorItem[];
  };
}

type Disagg = "nacional" | "generacion" | "sexo" | "educacion";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const COLORS = {
  cyan: "#06b6d4",
  violet: "#7c3aed",
  indigo: "#6366f1",
  sky: "#0ea5e9",
  amber: "#f59e0b",
  rose: "#f43f5e",
  emerald: "#10b981",
  slate: "#94a3b8",
  red: "#dc2626",
  blue: "#1d4ed8",
};

const PROFILE_COLORS: Record<number, string> = {
  0: COLORS.cyan,
  1: COLORS.slate,
  2: COLORS.red,
  3: COLORS.blue,
};

const REGION_TABS = [
  "Nacional",
  "Bogota",
  "Oriental",
  "Atlantica",
  "Central",
  "Pacifica",
];

const DISAGG_OPTIONS: { value: Disagg; label: string }[] = [
  { value: "nacional", label: "Nacional" },
  { value: "generacion", label: "Por generacion" },
  { value: "sexo", label: "Por sexo" },
  { value: "educacion", label: "Por educacion" },
];

const DISAGG_SUBTABS: Record<Disagg, string[]> = {
  nacional: [],
  generacion: [
    "Gen Z (18-27)",
    "Millennials (28-43)",
    "Gen X (44-59)",
    "Baby Boomers (60+)",
  ],
  sexo: ["Hombre", "Mujer"],
  educacion: ["Sin educacion", "Primaria", "Bachillerato", "Superior"],
};

const CENTROIDE_LABELS: Record<string, string> = {
  confianza_media: "Confianza",
  corrupcion_media: "Corrupcion",
  satisfaccion_demo: "Satisfaccion",
  voz_politica: "Voz politica",
  ideologia: "Ideologia",
};

const INDEX_META: Array<{
  key: keyof IndicesSet;
  label: string;
  max: number;
  unit: string;
}> = [
  { key: "idx_confianza", label: "Confianza institucional", max: 100, unit: "/100" },
  { key: "idx_corrupcion", label: "Percepcion de corrupcion", max: 100, unit: "/100" },
  { key: "brecha_demo", label: "Brecha aspiracional", max: 5, unit: "/5" },
  { key: "idx_participacion_org", label: "Participacion organizacional", max: 5, unit: "/5" },
  { key: "idx_conocimiento_mecanismos", label: "Conocimiento mecanismos civicos", max: 100, unit: "/100" },
  { key: "idx_cs_bonding", label: "Capital social bonding", max: 5, unit: "/5" },
  { key: "idx_cs_bridging", label: "Capital social bridging", max: 5, unit: "/5" },
  { key: "idx_intolerancia", label: "Intolerancia social", max: 13, unit: "/13" },
];

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function fmt(n: number, decimals = 1): string {
  return n.toFixed(decimals);
}

function barColor(
  value: number,
  neutral: number,
  good: string,
  bad: string
): string {
  return value >= neutral ? good : bad;
}

// ---------------------------------------------------------------------------
// Subcomponents
// ---------------------------------------------------------------------------

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl md:text-2xl font-semibold text-white mb-1">
      {children}
    </h2>
  );
}

function SectionSubtitle({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-slate-400 mb-6">{children}</p>;
}

function SkeletonBlock({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-xl bg-white/5 ${className}`} />
  );
}

function LoadingSkeleton() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 space-y-10">
      <div className="text-center space-y-3">
        <SkeletonBlock className="mx-auto h-8 w-96" />
        <SkeletonBlock className="mx-auto h-4 w-64" />
      </div>
      <SkeletonBlock className="h-12" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
        {Array.from({ length: 7 }).map((_, i) => (
          <SkeletonBlock key={i} className="h-28" />
        ))}
      </div>
      <SkeletonBlock className="h-32" />
      <SkeletonBlock className="h-96" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkeletonBlock className="h-80" />
        <SkeletonBlock className="h-80" />
      </div>
    </div>
  );
}

function ErrorState({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      <div className="text-rose-400 text-lg font-semibold mb-2">
        Error al cargar datos
      </div>
      <p className="text-slate-400 text-sm mb-6 max-w-md">{message}</p>
      <button
        onClick={onRetry}
        className="px-5 py-2.5 rounded-lg bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-500 transition-colors"
      >
        Reintentar
      </button>
    </div>
  );
}

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
        active
          ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
          : "bg-white/5 text-slate-400 border border-white/5 hover:border-white/20"
      }`}
    >
      {children}
    </button>
  );
}

// Global disaggregation filter
function DisaggFilter({
  disagg,
  setDisagg,
  subTab,
  setSubTab,
}: {
  disagg: Disagg;
  setDisagg: (d: Disagg) => void;
  subTab: string;
  setSubTab: (s: string) => void;
}) {
  const subtabs = DISAGG_SUBTABS[disagg];

  return (
    <GlassCard className="p-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mr-2">
          Desagregacion:
        </span>
        {DISAGG_OPTIONS.map((opt) => (
          <TabButton
            key={opt.value}
            active={disagg === opt.value}
            onClick={() => {
              setDisagg(opt.value);
              const subs = DISAGG_SUBTABS[opt.value];
              if (subs.length > 0) setSubTab(subs[0]);
            }}
          >
            {opt.label}
          </TabButton>
        ))}
      </div>
      {subtabs.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-white/5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mr-2">
            Grupo:
          </span>
          {subtabs.map((tab) => (
            <TabButton
              key={tab}
              active={subTab === tab}
              onClick={() => setSubTab(tab)}
            >
              {tab}
            </TabButton>
          ))}
        </div>
      )}
    </GlassCard>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function EcpDashboard() {
  const [kpisData, setKpisData] = useState<KpisData | null>(null);
  const [confianzaData, setConfianzaData] = useState<ConfianzaData | null>(
    null
  );
  const [corrupcionData, setCorrupcionData] = useState<CorrupcionData | null>(
    null
  );
  const [perfilesData, setPerfilesData] = useState<PerfilesData | null>(null);
  const [capitalData, setCapitalData] = useState<CapitalSocialData | null>(
    null
  );
  const [indicesData, setIndicesData] = useState<IndicesData | null>(null);
  const [electoralData, setElectoralData] = useState<ElectoralData | null>(
    null
  );

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Region tab for confianza (independent)
  const [regionTab, setRegionTab] = useState("Nacional");

  // Global disaggregation filter
  const [disagg, setDisagg] = useState<Disagg>("nacional");
  const [subTab, setSubTab] = useState("");

  // ---- Fetch ----
  const fetchAll = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchJson = (path: string) =>
        fetch(path).then((r) => {
          if (!r.ok) throw new Error(`${path}: ${r.status}`);
          return r.json();
        });

      const [kpis, confianza, corrupcion, perfiles, capital, indices, electoral] =
        await Promise.all([
          fetchJson("/data/ecp/kpis_nacionales.json"),
          fetchJson("/data/ecp/confianza_institucional.json"),
          fetchJson("/data/ecp/percepcion_corrupcion.json"),
          fetchJson("/data/ecp/perfiles_ciudadanos.json"),
          fetchJson("/data/ecp/capital_social.json"),
          fetchJson("/data/ecp/indices_compuestos.json"),
          fetchJson("/data/ecp/participacion_electoral.json"),
        ]);

      setKpisData(kpis);
      setConfianzaData(confianza);
      setCorrupcionData(corrupcion);
      setPerfilesData(perfiles);
      setCapitalData(capital);
      setIndicesData(indices);
      setElectoralData(electoral);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // ---- Derived data: confianza chart (region tab + disagg) ----

  const confianzaChartData = useMemo(() => {
    if (!confianzaData) return [];

    // Disagg filter takes precedence when not "nacional"
    if (disagg !== "nacional" && subTab) {
      const sourceMap =
        disagg === "generacion"
          ? confianzaData.por_generacion
          : disagg === "sexo"
          ? confianzaData.por_sexo
          : confianzaData.por_educacion;
      const items = sourceMap?.[subTab];
      if (!items) return [];
      return [...items]
        .sort((a, b) => b.media - a.media)
        .map((item) => ({
          institucion: item.institucion,
          media: item.media,
        }));
    }

    // Region tab (Nacional or specific region)
    const source =
      regionTab === "Nacional"
        ? confianzaData.nacional
        : confianzaData.por_region[regionTab];
    if (!source) return [];
    return [...source]
      .sort((a, b) => b.media - a.media)
      .map((item) => ({
        institucion: item.institucion,
        media: item.media,
      }));
  }, [confianzaData, regionTab, disagg, subTab]);

  // ---- Derived data: corrupcion chart (disagg) ----

  const corrupcionChartData = useMemo(() => {
    if (!corrupcionData) return [];

    if (disagg !== "nacional" && subTab) {
      let sourceMap: Record<string, SimpleActorItem[]> | undefined;
      if (disagg === "generacion") sourceMap = corrupcionData.por_generacion;
      else if (disagg === "sexo") sourceMap = undefined; // no por_sexo
      else sourceMap = undefined; // no por_educacion

      // Also check region for corrupcion
      if (!sourceMap) sourceMap = corrupcionData.por_region;

      const items = sourceMap?.[subTab];
      if (items) {
        return [...items]
          .sort((a, b) => b.media - a.media)
          .map((item) => ({
            actor: item.actor,
            media: item.media,
            pct_muy_corrupto: undefined as number | undefined,
            pct_nada_corrupto: undefined as number | undefined,
          }));
      }
    }

    return [...corrupcionData.ranking]
      .sort((a, b) => b.media_ponderada - a.media_ponderada)
      .map((item) => ({
        actor: item.actor,
        media: item.media_ponderada,
        pct_muy_corrupto: item.pct_muy_corrupto as number | undefined,
        pct_nada_corrupto: item.pct_nada_corrupto as number | undefined,
      }));
  }, [corrupcionData, disagg, subTab]);

  // ---- Derived data: indices ----

  const currentIndices = useMemo((): IndicesSet | null => {
    if (!indicesData) return null;
    if (disagg === "nacional") return indicesData.nacional;
    const sourceMap =
      disagg === "generacion"
        ? indicesData.por_generacion
        : disagg === "sexo"
        ? indicesData.por_sexo
        : indicesData.por_educacion;
    return sourceMap?.[subTab] ?? indicesData.nacional;
  }, [indicesData, disagg, subTab]);

  // ---- Derived data: electoral ----

  const currentElectoral = useMemo((): ElectoralSlice | null => {
    if (!electoralData) return null;
    if (disagg === "nacional") return electoralData.nacional;
    const sourceMap =
      disagg === "generacion"
        ? electoralData.por_generacion
        : disagg === "sexo"
        ? electoralData.por_sexo
        : undefined;
    return sourceMap?.[subTab] ?? electoralData.nacional;
  }, [electoralData, disagg, subTab]);

  const toleranciaFiltered = useMemo(() => {
    if (!capitalData) return [];
    return capitalData.tolerancia_social.filter((t) => t.pct_rechazo >= 5);
  }, [capitalData]);

  const brechaKpis = useMemo(() => {
    if (!kpisData) return null;
    const democracia = kpisData.kpis.find(
      (k) => k.id === "importancia_democracia"
    );
    const voz = kpisData.kpis.find((k) => k.id === "voz_politica");
    if (!democracia || !voz) return null;
    return { democracia, voz };
  }, [kpisData]);

  const forestPlotData = useMemo(() => {
    if (!electoralData) return [];
    return [...electoralData.regresion_logistica.predictores_significativos].sort(
      (a, b) => Math.abs(b.ame) - Math.abs(a.ame)
    );
  }, [electoralData]);

  // ---- Render ----

  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorState message={error} onRetry={fetchAll} />;
  if (
    !kpisData ||
    !confianzaData ||
    !corrupcionData ||
    !perfilesData ||
    !capitalData ||
    !indicesData ||
    !electoralData
  )
    return null;

  return (
    <div className="bg-[#0a0a0f] text-white">
      {/* ================================================================ */}
      {/* HEADER */}
      {/* ================================================================ */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 via-transparent to-violet-600/10" />
        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
              Cultura{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Politica
              </span>{" "}
              Colombia 2023
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mb-4">
              Analisis de microdatos ECP — DANE ·{" "}
              {kpisData.metadatos.n_encuestados.toLocaleString("es-CO")}{" "}
              encuestados
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-slate-500 bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
              <span>Fuente: {kpisData.metadatos.codigo}</span>
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span>Generado: {kpisData.metadatos.fecha_generacion}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 space-y-16">
        {/* ================================================================ */}
        {/* GLOBAL DISAGGREGATION FILTER */}
        {/* ================================================================ */}
        <DisaggFilter
          disagg={disagg}
          setDisagg={setDisagg}
          subTab={subTab}
          setSubTab={setSubTab}
        />

        {/* ================================================================ */}
        {/* KPI CARDS */}
        {/* ================================================================ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7"
        >
          {kpisData.kpis.map((kpi) => (
            <motion.div key={kpi.id} variants={itemVariants}>
              <GlassCard className="text-center h-full flex flex-col justify-between">
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2 leading-tight">
                  {kpi.label}
                </p>
                <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {kpi.escala === "%"
                    ? `${fmt(kpi.valor, 1)}%`
                    : fmt(kpi.valor, kpi.valor % 1 === 0 ? 0 : 2)}
                </p>
                <p className="font-mono text-[10px] text-slate-500">
                  {kpi.escala !== "%" && `Escala ${kpi.escala}`}
                </p>
                {kpi.interpretacion && (
                  <p className="text-[10px] text-slate-500 mt-1 leading-tight">
                    {kpi.interpretacion}
                  </p>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* ================================================================ */}
        {/* BRECHA DEMOCRATICA */}
        {/* ================================================================ */}
        {brechaKpis && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard>
              <SectionTitle>La brecha democratica</SectionTitle>
              <SectionSubtitle>
                Los colombianos valoran la democracia pero no sienten que su voz
                cuente
              </SectionSubtitle>
              <div className="space-y-6 max-w-3xl">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm text-slate-300">
                      Importancia de vivir en democracia
                    </span>
                    <span className="font-mono text-lg font-bold text-cyan-400">
                      {fmt(brechaKpis.democracia.valor, 2)}/5
                    </span>
                  </div>
                  <div className="h-4 w-full rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${(brechaKpis.democracia.valor / 5) * 100}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                  <span className="font-mono text-xs tracking-widest text-amber-400 uppercase">
                    Brecha aspiracional
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
                </div>
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm text-slate-300">
                      Percepcion de influencia politica
                    </span>
                    <span className="font-mono text-lg font-bold text-rose-400">
                      {fmt(brechaKpis.voz.valor, 2)}/5
                    </span>
                  </div>
                  <div className="h-4 w-full rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-rose-600 to-rose-400"
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${(brechaKpis.voz.valor / 5) * 100}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* ================================================================ */}
        {/* CONFIANZA INSTITUCIONAL */}
        {/* ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard>
            <SectionTitle>Confianza institucional</SectionTitle>
            <SectionSubtitle>
              Media ponderada en escala 1-5. Linea punteada = punto neutro (3.0)
              {disagg !== "nacional" && (
                <span className="ml-2 text-cyan-400">
                  — Filtrando por: {subTab}
                </span>
              )}
            </SectionSubtitle>
            {/* Region tabs (only when disagg is nacional) */}
            {disagg === "nacional" && (
              <div className="flex flex-wrap gap-2 mb-6">
                {REGION_TABS.map((tab) => (
                  <TabButton
                    key={tab}
                    active={regionTab === tab}
                    onClick={() => setRegionTab(tab)}
                  >
                    {tab}
                  </TabButton>
                ))}
              </div>
            )}
            <div className="h-[480px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={confianzaChartData}
                  layout="vertical"
                  margin={{ top: 0, right: 60, bottom: 0, left: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.04)"
                    horizontal={false}
                  />
                  <XAxis
                    type="number"
                    domain={[1, 4]}
                    tick={{ fill: "#64748b", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    type="category"
                    dataKey="institucion"
                    width={160}
                    tick={{ fill: "#cbd5e1", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <ReferenceLine
                    x={3}
                    stroke="#f59e0b"
                    strokeDasharray="4 4"
                    strokeOpacity={0.6}
                  />
                  <RechartsTooltip
                    content={({ active, payload }) => {
                      if (!active || !payload?.length) return null;
                      const d = payload[0].payload;
                      return (
                        <div className="rounded-lg border border-white/10 bg-[#0f0f1a]/95 backdrop-blur-md px-3 py-2 text-xs shadow-xl">
                          <p className="text-white font-medium mb-1">
                            {d.institucion}
                          </p>
                          <p className="text-cyan-400">
                            Media: {fmt(d.media, 3)}
                          </p>
                        </div>
                      );
                    }}
                    cursor={{ fill: "rgba(255,255,255,0.03)" }}
                  />
                  <Bar dataKey="media" radius={[0, 4, 4, 0]} barSize={18}>
                    {confianzaChartData.map((item, idx) => (
                      <Cell
                        key={idx}
                        fill={barColor(
                          item.media,
                          3,
                          COLORS.cyan,
                          COLORS.violet
                        )}
                        fillOpacity={0.85}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </motion.div>

        {/* ================================================================ */}
        {/* PERCEPCION DE CORRUPCION */}
        {/* ================================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard>
            <SectionTitle>Percepcion de corrupcion</SectionTitle>
            <SectionSubtitle>
              Media ponderada en escala 1-5. Mayor valor = mayor percepcion de
              corrupcion
              {disagg !== "nacional" && (
                <span className="ml-2 text-cyan-400">
                  — Filtrando por: {subTab}
                </span>
              )}
            </SectionSubtitle>
            <div className="h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={corrupcionChartData}
                  layout="vertical"
                  margin={{ top: 0, right: 60, bottom: 0, left: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.04)"
                    horizontal={false}
                  />
                  <XAxis
                    type="number"
                    domain={[1, 5]}
                    tick={{ fill: "#64748b", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    type="category"
                    dataKey="actor"
                    width={200}
                    tick={{ fill: "#cbd5e1", fontSize: 11 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <ReferenceLine
                    x={3}
                    stroke="#f59e0b"
                    strokeDasharray="4 4"
                    strokeOpacity={0.6}
                  />
                  <RechartsTooltip
                    content={({ active, payload }) => {
                      if (!active || !payload?.length) return null;
                      const d = payload[0].payload;
                      return (
                        <div className="rounded-lg border border-white/10 bg-[#0f0f1a]/95 backdrop-blur-md px-3 py-2 text-xs shadow-xl">
                          <p className="text-white font-medium mb-1">
                            {d.actor}
                          </p>
                          <p className="text-amber-400">
                            Media: {fmt(d.media, 3)}
                          </p>
                          {d.pct_muy_corrupto != null && (
                            <>
                              <p className="text-rose-400">
                                Muy corrupto: {d.pct_muy_corrupto}%
                              </p>
                              <p className="text-emerald-400">
                                Nada corrupto: {d.pct_nada_corrupto}%
                              </p>
                            </>
                          )}
                        </div>
                      );
                    }}
                    cursor={{ fill: "rgba(255,255,255,0.03)" }}
                  />
                  <Bar
                    dataKey="media"
                    radius={[0, 4, 4, 0]}
                    barSize={22}
                  >
                    {corrupcionChartData.map((item, idx) => (
                      <Cell
                        key={idx}
                        fill={
                          item.media >= 3.7
                            ? COLORS.rose
                            : item.media >= 3.5
                            ? COLORS.amber
                            : COLORS.indigo
                        }
                        fillOpacity={0.85}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </GlassCard>
        </motion.div>

        {/* ================================================================ */}
        {/* PERFILES CIUDADANOS */}
        {/* ================================================================ */}
        <div>
          <SectionTitle>Perfiles ciudadanos</SectionTitle>
          <SectionSubtitle>
            Segmentacion por k-means sobre 5 dimensiones politicas
          </SectionSubtitle>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {perfilesData.perfiles.map((perfil) => {
              const color = PROFILE_COLORS[perfil.cluster] ?? COLORS.slate;
              const radarData = Object.entries(perfil.centroides).map(
                ([key, val]) => ({
                  dimension: CENTROIDE_LABELS[key] || key,
                  valor: val,
                  fullMark: key === "ideologia" ? 10 : 5,
                })
              );

              // Choose distribution based on disagg
              const distData =
                disagg === "generacion"
                  ? perfil.distribucion_generacion
                  : disagg === "educacion"
                  ? perfil.distribucion_educacion
                  : perfil.distribucion_regional;
              const distLabel =
                disagg === "generacion"
                  ? "Distribucion generacional"
                  : disagg === "educacion"
                  ? "Distribucion por educacion"
                  : "Distribucion regional";

              return (
                <motion.div key={perfil.cluster} variants={itemVariants}>
                  <GlassCard className="h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                          <h3 className="text-base font-semibold text-white">
                            {perfil.nombre}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-500">
                          {perfil.n.toLocaleString("es-CO")} personas
                        </p>
                      </div>
                      <div className="text-right">
                        <p
                          className="text-2xl font-bold font-mono"
                          style={{ color }}
                        >
                          {perfil.pct}%
                        </p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                          de la muestra
                        </p>
                      </div>
                    </div>

                    <div className="h-48 -mx-2">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={radarData} outerRadius="70%">
                          <PolarGrid
                            stroke="rgba(255,255,255,0.08)"
                            gridType="polygon"
                          />
                          {/* @ts-expect-error recharts v3 React types mismatch */}
                          <PolarAngleAxis
                            dataKey="dimension"
                            tick={{ fill: "#94a3b8", fontSize: 10 }}
                          />
                          <PolarRadiusAxis
                            domain={[0, 5]}
                            tick={false}
                            axisLine={false}
                          />
                          <Radar
                            dataKey="valor"
                            stroke={color}
                            fill={color}
                            fillOpacity={0.2}
                            strokeWidth={2}
                          />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="mt-3 pt-3 border-t border-white/5">
                      <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">
                        {distLabel}
                      </p>
                      <div className="flex gap-2">
                        {distData &&
                          Object.entries(distData).map(([key, pct]) => (
                            <div key={key} className="flex-1 text-center">
                              <div className="text-xs font-mono text-slate-300">
                                {pct}%
                              </div>
                              <div className="text-[9px] text-slate-500 truncate">
                                {key}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ================================================================ */}
        {/* INDICES COMPUESTOS */}
        {/* ================================================================ */}
        {currentIndices && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Indices compuestos de cultura politica</SectionTitle>
            <SectionSubtitle>
              Medidas sinteticas construidas desde los microdatos
              {disagg !== "nacional" && (
                <span className="ml-2 text-cyan-400">
                  — Filtrando por: {subTab}
                </span>
              )}
            </SectionSubtitle>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {INDEX_META.map((meta) => {
                const value = currentIndices[meta.key];
                const pct = (value / meta.max) * 100;
                const colorBar =
                  meta.key === "idx_corrupcion" || meta.key === "idx_intolerancia"
                    ? pct > 50
                      ? COLORS.rose
                      : COLORS.amber
                    : pct > 60
                    ? COLORS.cyan
                    : pct > 30
                    ? COLORS.indigo
                    : COLORS.violet;

                return (
                  <GlassCard key={meta.key} className="text-center">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-3 leading-tight">
                      {meta.label}
                    </p>
                    <p className="text-2xl font-bold text-white mb-1">
                      {fmt(value, meta.max <= 5 ? 2 : 1)}
                    </p>
                    <p className="font-mono text-[10px] text-slate-500 mb-3">
                      {meta.unit}
                    </p>
                    <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${Math.min(pct, 100)}%`,
                          backgroundColor: colorBar,
                        }}
                      />
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ================================================================ */}
        {/* CAPITAL SOCIAL */}
        {/* ================================================================ */}
        <div>
          <SectionTitle>Capital social</SectionTitle>
          <SectionSubtitle>
            Confianza interpersonal, satisfaccion vital y tolerancia social
          </SectionSubtitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Panel A — Confianza interpersonal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <GlassCard className="h-full">
                <h3 className="text-sm font-semibold text-white mb-1">
                  Confianza interpersonal
                </h3>
                <p className="text-[10px] text-slate-500 mb-4">
                  Media 1-5. Patron: familismo intenso
                </p>
                <div className="space-y-3">
                  {capitalData.confianza_interpersonal.map((item) => (
                    <div key={item.grupo}>
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-xs text-slate-300">
                          {item.grupo}
                        </span>
                        <span className="font-mono text-xs text-cyan-400">
                          {fmt(item.media, 2)}
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${(item.media / 5) * 100}%`,
                            backgroundColor:
                              item.media >= 4
                                ? COLORS.cyan
                                : item.media >= 3
                                ? COLORS.indigo
                                : item.media >= 2
                                ? COLORS.violet
                                : COLORS.slate,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            {/* Panel B — Tolerancia social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <GlassCard className="h-full">
                <h3 className="text-sm font-semibold text-white mb-1">
                  Tolerancia social
                </h3>
                <p className="text-[10px] text-slate-500 mb-4">
                  % que rechazaria a este grupo como vecino
                </p>
                <div className="h-[260px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={toleranciaFiltered}
                      layout="vertical"
                      margin={{ top: 0, right: 40, bottom: 0, left: 0 }}
                    >
                      <XAxis
                        type="number"
                        tick={{ fill: "#64748b", fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                        unit="%"
                      />
                      <YAxis
                        type="category"
                        dataKey="grupo"
                        width={100}
                        tick={{ fill: "#cbd5e1", fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <RechartsTooltip
                        content={({ active, payload }) => {
                          if (!active || !payload?.length) return null;
                          const d = payload[0].payload as ToleranciaSocialItem;
                          return (
                            <div className="rounded-lg border border-white/10 bg-[#0f0f1a]/95 backdrop-blur-md px-3 py-2 text-xs shadow-xl">
                              <p className="text-white font-medium mb-0.5">
                                {d.grupo}
                              </p>
                              <p className="text-cyan-400">
                                {fmt(d.pct_rechazo, 1)}%
                              </p>
                            </div>
                          );
                        }}
                        cursor={{ fill: "rgba(255,255,255,0.03)" }}
                      />
                      <Bar
                        dataKey="pct_rechazo"
                        radius={[0, 4, 4, 0]}
                        barSize={16}
                      >
                        {toleranciaFiltered.map((item, idx) => (
                          <Cell
                            key={idx}
                            fill={
                              item.pct_rechazo >= 40
                                ? COLORS.rose
                                : item.pct_rechazo >= 20
                                ? COLORS.amber
                                : COLORS.indigo
                            }
                            fillOpacity={0.85}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-[9px] text-slate-600 mt-2 leading-relaxed">
                  Nota: no implica aceptacion activa del resto de grupos.
                  Pregunta ECP: &quot;Le molestaria tener como vecino
                  a...&quot;
                </p>
              </GlassCard>
            </motion.div>

            {/* Panel C — Satisfaccion vital */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlassCard className="h-full">
                <h3 className="text-sm font-semibold text-white mb-1">
                  Satisfaccion vital
                </h3>
                <p className="text-[10px] text-slate-500 mb-4">
                  Media 1-5 por dimension
                </p>
                <div className="space-y-5">
                  {capitalData.satisfaccion_vital.map((item) => (
                    <div key={item.dimension}>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-sm text-slate-300">
                          {item.dimension}
                        </span>
                        <span className="font-mono text-lg font-bold text-cyan-400">
                          {fmt(item.media, 2)}
                        </span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${(item.media / 5) * 100}%`,
                            backgroundColor:
                              item.media >= 4
                                ? COLORS.emerald
                                : item.media >= 3.5
                                ? COLORS.cyan
                                : COLORS.amber,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* PARTICIPACION ELECTORAL */}
        {/* ================================================================ */}
        {currentElectoral && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>
              Comportamiento electoral — Presidenciales 2022
            </SectionTitle>
            <SectionSubtitle>
              Voto declarado, ideologia y distribucion de bloques
              {disagg !== "nacional" && (
                <span className="ml-2 text-cyan-400">
                  — Filtrando por: {subTab}
                </span>
              )}
            </SectionSubtitle>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {/* Voto */}
              <GlassCard className="text-center">
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                  Voto declarado
                </p>
                <p className="text-3xl font-bold text-cyan-400">
                  {fmt(currentElectoral.pct_voto, 1)}%
                </p>
              </GlassCard>

              {/* Ideologia */}
              <GlassCard className="text-center">
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                  Ideologia media
                </p>
                <p className="text-3xl font-bold text-white">
                  {fmt(currentElectoral.ideologia_media, 2)}
                </p>
                <p className="font-mono text-[10px] text-slate-500">
                  Escala 1-10 (1=izq, 10=der)
                </p>
              </GlassCard>

              {/* Bloques */}
              <GlassCard>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-3">
                  Bloques ideologicos
                </p>
                {currentElectoral.bloque_ideologico && (
                  <div className="space-y-2">
                    {(
                      [
                        {
                          key: "Izquierda" as const,
                          color: COLORS.rose,
                        },
                        {
                          key: "Centro" as const,
                          color: COLORS.slate,
                        },
                        {
                          key: "Derecha" as const,
                          color: COLORS.blue,
                        },
                      ] as const
                    ).map(({ key, color }) => (
                      <div key={key}>
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="text-xs text-slate-300">{key}</span>
                          <span
                            className="font-mono text-xs font-bold"
                            style={{ color }}
                          >
                            {currentElectoral.bloque_ideologico[key]}%
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${currentElectoral.bloque_ideologico[key]}%`,
                              backgroundColor: color,
                              opacity: 0.85,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </GlassCard>
            </div>

            {/* Forest plot — regresion logistica */}
            <GlassCard>
              <h3 className="text-base font-semibold text-white mb-1">
                Que predice votar vs. abstenerse
              </h3>
              <p className="text-xs text-slate-400 mb-1">
                Regresion logistica sobre{" "}
                {electoralData.regresion_logistica.n_observaciones.toLocaleString(
                  "es-CO"
                )}{" "}
                inscritos. Pseudo R&sup2; McFadden ={" "}
                {electoralData.regresion_logistica.pseudo_r2_mcfadden}
              </p>
              <p className="text-[10px] text-slate-500 mb-6">
                {electoralData.regresion_logistica.nota}
              </p>
              <div className="h-[420px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={forestPlotData}
                    layout="vertical"
                    margin={{ top: 0, right: 70, bottom: 20, left: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,0.04)"
                      horizontal={false}
                    />
                    <XAxis
                      type="number"
                      tick={{ fill: "#64748b", fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                      label={{
                        value: "Efecto marginal promedio — cambio en Pr(votar)",
                        position: "bottom",
                        fill: "#64748b",
                        fontSize: 10,
                        offset: 0,
                      }}
                    />
                    <YAxis
                      type="category"
                      dataKey="predictor"
                      width={190}
                      tick={{ fill: "#cbd5e1", fontSize: 11 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <ReferenceLine
                      x={0}
                      stroke="#64748b"
                      strokeDasharray="3 3"
                    />
                    <RechartsTooltip
                      content={({ active, payload }) => {
                        if (!active || !payload?.length) return null;
                        const d = payload[0].payload as PredictorItem;
                        return (
                          <div className="rounded-lg border border-white/10 bg-[#0f0f1a]/95 backdrop-blur-md px-3 py-2 text-xs shadow-xl">
                            <p className="text-white font-medium mb-1">
                              {d.predictor}
                            </p>
                            <p className="text-cyan-400">
                              AME: {d.ame > 0 ? "+" : ""}
                              {fmt(d.ame, 4)}
                            </p>
                            <p className="text-slate-400">
                              p-valor: {d.p_valor} {d.sig}
                            </p>
                          </div>
                        );
                      }}
                      cursor={{ fill: "rgba(255,255,255,0.03)" }}
                    />
                    <Bar dataKey="ame" radius={[0, 4, 4, 0]} barSize={16}>
                      {forestPlotData.map((item, idx) => (
                        <Cell
                          key={idx}
                          fill={
                            item.direccion === "vota_mas"
                              ? COLORS.cyan
                              : COLORS.rose
                          }
                          fillOpacity={0.85}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </GlassCard>
          </motion.div>
        )}

        {/* ================================================================ */}
        {/* FOOTER */}
        {/* ================================================================ */}
        <div className="border-t border-white/5 pt-10 text-center space-y-4">
          <p className="text-xs text-slate-500 max-w-3xl mx-auto leading-relaxed">
            Datos procesados a partir de los microdatos anonimizados de la
            Encuesta de Cultura Politica 2023, publicados por el DANE (Direccion
            de Metodologia y Produccion Estadistica). Los indices compuestos y
            la segmentacion por perfiles fueron calculados con medias ponderadas
            y clustering k-means. Esta visualizacion no modifica ni interpreta
            editorialmente los datos — su proposito es facilitar el acceso
            ciudadano a informacion publica.
          </p>
          <div className="flex items-center justify-center gap-4 text-xs">
            <a
              href="https://microdatos.dane.gov.co/catalog/883/get-microdata"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Microdatos DANE
            </a>
            <span className="text-slate-700">|</span>
            <a
              href="https://www.dane.gov.co/index.php/estadisticas-por-tema/gobierno/cultura-politica"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              Fuente oficial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

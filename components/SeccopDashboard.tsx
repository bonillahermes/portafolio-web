// SecopDashboard.tsx
// Dashboard interactivo de contratación pública — SECOP II
//
// Dependencias:
//   pnpm add recharts react-simple-maps d3-scale
//   pnpm add -D @types/d3-scale @types/react-simple-maps

"use client";

import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
  LineChart,
  Line,
  Area,
  AreaChart,
} from "recharts";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface DeptRow {
  departamento: string;
  total_contratos: string;
  valor_total: string;
}

interface ModalRow {
  modalidad_de_contratacion: string;
  total: string;
  valor?: string;
}

interface EstadoRow {
  estado_contrato: string;
  total: string;
}

interface ContratistaRow {
  proveedor_adjudicado: string;
  total_contratos: string;
  valor_total: string;
}

interface EjecucionRow {
  departamento: string;
  valor_contratado: string;
  valor_pagado: string;
}

interface PymeRow {
  es_pyme: string;
  total: string;
  valor: string;
}

interface DestinoRow {
  destino_gasto: string;
  total: string;
  valor: string;
}

interface TendenciaRow {
  mes: string;
  total: string;
  valor: string;
}

interface EntidadRow {
  nombre_entidad: string;
  total_contratos: string;
  valor_total: string;
}

interface MapTooltipData {
  name: string;
  contratos: number;
  valor: number;
  x: number;
  y: number;
}

interface Filters {
  year: string;
  departamento: string;
  modalidad: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const BASE_URL = "https://www.datos.gov.co/resource/jbjy-vk9h.json";
const GEO_URL =
  "https://gist.githubusercontent.com/john-guerra/43c7656821069d00dcbc/raw/be6a6e239cd5b5b803c6e7c2ec405b793a9064dd/Colombia.geo.json";

const YEAR_OPTIONS = [
  { value: "2026", label: "2026" },
  { value: "2025", label: "2025" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
];

const COLORS = {
  cyan: "#06b6d4",
  violet: "#7c3aed",
  indigo: "#6366f1",
  sky: "#0ea5e9",
  fuchsia: "#d946ef",
  emerald: "#10b981",
  amber: "#f59e0b",
  rose: "#f43f5e",
};

const BAR_COLORS = [
  COLORS.cyan,
  COLORS.violet,
  COLORS.indigo,
  COLORS.sky,
  COLORS.fuchsia,
  COLORS.emerald,
  COLORS.amber,
  COLORS.rose,
];

const CHART_COLORS = [COLORS.cyan, COLORS.violet, COLORS.indigo];

const GEO_TO_API: Record<string, string> = {
  "SANTAFE DE BOGOTA D.C": "DISTRITO CAPITAL DE BOGOTA",
  "ARCHIPIELAGO DE SAN ANDRES PROVIDENCIA Y SANTA CATALINA":
    "SAN ANDRES, PROVIDENCIA Y SANTA CATALINA",
};

const MONTH_NAMES = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function buildWhere(filters: Filters): string {
  const clauses: string[] = [];
  const y = filters.year;
  clauses.push(
    `fecha_de_firma >= '${y}-01-01T00:00:00.000' AND fecha_de_firma < '${Number(y) + 1}-01-01T00:00:00.000'`
  );
  if (filters.departamento) {
    clauses.push(`departamento = '${filters.departamento}'`);
  }
  if (filters.modalidad) {
    clauses.push(`modalidad_de_contratacion = '${filters.modalidad}'`);
  }
  return clauses.join(" AND ");
}

function buildUrl(params: Record<string, string>, filters: Filters): string {
  const url = new URL(BASE_URL);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  url.searchParams.set("$where", buildWhere(filters));
  return url.toString();
}

function formatCOP(value: number): string {
  if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}B COP`;
  if (value >= 1e9) return `$${(value / 1e9).toFixed(1)} mil M COP`;
  if (value >= 1e6) return `$${(value / 1e6).toFixed(0)}M COP`;
  return `$${value.toLocaleString("es-CO")} COP`;
}

function formatBillones(value: number): string {
  return (value / 1e12).toFixed(2);
}

function normalize(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .trim();
}

function pct(a: number, b: number): string {
  if (b === 0) return "0%";
  return `${((a / b) * 100).toFixed(1)}%`;
}

// ---------------------------------------------------------------------------
// Subcomponents
// ---------------------------------------------------------------------------

function Skeleton({
  className = "",
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`animate-pulse rounded bg-white/10 ${className}`}
      style={style}
      aria-hidden
    />
  );
}

function KpiSkeleton() {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
      <Skeleton className="mb-3 h-3 w-24" />
      <Skeleton className="mb-2 h-8 w-32" />
      <Skeleton className="h-3 w-16" />
    </div>
  );
}

function ChartSkeleton({ height = "h-72" }: { height?: string }) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md ${height}`}
    >
      <Skeleton className="mb-4 h-4 w-40" />
      <div className="flex h-[calc(100%-2rem)] items-end gap-2 pt-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton
            key={i}
            className="flex-1"
            style={
              { height: `${30 + Math.random() * 60}%` } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px flex-1 bg-white/10" />
      <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
        {children}
      </h3>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
}

function CustomTooltip({
  active,
  payload,
  label,
  formatter,
}: {
  active?: boolean;
  payload?: Array<{ value: number; name: string; dataKey?: string }>;
  label?: string;
  formatter?: (v: number, name?: string) => string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-white/10 bg-[#0a0a0f]/95 px-3 py-2 text-xs text-slate-200 shadow-xl backdrop-blur-md">
      <p className="mb-1 font-mono text-[10px] uppercase tracking-wider text-slate-400">
        {label}
      </p>
      {payload.map((entry, i) => (
        <p key={i} className="font-semibold text-cyan-400">
          {formatter
            ? formatter(entry.value, entry.dataKey)
            : entry.value.toLocaleString("es-CO")}
        </p>
      ))}
    </div>
  );
}

function FilterSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 backdrop-blur-md outline-none transition focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-[#0a0a0f]">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function IndicatorCard({
  label,
  value,
  sub,
  color = "text-cyan-400",
}: {
  label: string;
  value: string;
  sub: string;
  color?: string;
}) {
  return (
    <GlassCard>
      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
        {label}
      </p>
      <p className={`mt-1 text-xl font-bold ${color} md:text-2xl`}>{value}</p>
      <p className="mt-1 text-xs text-slate-500">{sub}</p>
    </GlassCard>
  );
}

// ---------------------------------------------------------------------------
// Main Component
// ---------------------------------------------------------------------------

export default function SecopDashboard() {
  // ---- Data state ----
  const [deptData, setDeptData] = useState<DeptRow[]>([]);
  const [modalData, setModalData] = useState<ModalRow[]>([]);
  const [estadoData, setEstadoData] = useState<EstadoRow[]>([]);
  const [contratistaData, setContratistaData] = useState<ContratistaRow[]>([]);
  const [ejecucionData, setEjecucionData] = useState<EjecucionRow[]>([]);
  const [pymeData, setPymeData] = useState<PymeRow[]>([]);
  const [destinoData, setDestinoData] = useState<DestinoRow[]>([]);
  const [tendenciaData, setTendenciaData] = useState<TendenciaRow[]>([]);
  const [entidadData, setEntidadData] = useState<EntidadRow[]>([]);
  const [geoData, setGeoData] = useState<GeoJSON.FeatureCollection | null>(
    null
  );

  // Filter dropdown options
  const [deptOptions, setDeptOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [modalOptions, setModalOptions] = useState<
    { value: string; label: string }[]
  >([]);

  // UI state
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [updatedAt, setUpdatedAt] = useState("");
  const [mapTooltip, setMapTooltip] = useState<MapTooltipData | null>(null);
  const [tablePage, setTablePage] = useState(0);
  const [tableSearch, setTableSearch] = useState("");

  // Filters
  const [filters, setFilters] = useState<Filters>({
    year: "2025",
    departamento: "",
    modalidad: "",
  });

  const ROWS_PER_PAGE = 5;
  const isFirstLoad = useRef(true);

  // ---- Fetch ----
  const fetchData = useCallback(async (f: Filters, isInitial: boolean) => {
    if (isInitial) setLoading(true);
    else setRefreshing(true);
    setError(null);

    try {
      const dataQueries = [
        // 0: dept aggregation
        buildUrl(
          {
            $select:
              "departamento,count(*) AS total_contratos,sum(valor_del_contrato) AS valor_total",
            $group: "departamento",
            $order: "valor_total DESC",
            $limit: "40",
          },
          f
        ),
        // 1: modalidad with valor
        buildUrl(
          {
            $select:
              "modalidad_de_contratacion,count(*) AS total,sum(valor_del_contrato) AS valor",
            $group: "modalidad_de_contratacion",
            $order: "total DESC",
            $limit: "10",
          },
          f
        ),
        // 2: estado
        buildUrl(
          {
            $select: "estado_contrato,count(*) AS total",
            $group: "estado_contrato",
            $order: "total DESC",
          },
          f
        ),
        // 3: contratistas
        buildUrl(
          {
            $select:
              "proveedor_adjudicado,count(*) AS total_contratos,sum(valor_del_contrato) AS valor_total",
            $group: "proveedor_adjudicado",
            $order: "valor_total DESC",
            $limit: "20",
          },
          f
        ),
        // 4: ejecucion presupuestal
        buildUrl(
          {
            $select:
              "departamento,sum(valor_del_contrato) AS valor_contratado,sum(valor_pagado) AS valor_pagado",
            $group: "departamento",
            $order: "valor_contratado DESC",
            $limit: "15",
          },
          f
        ),
        // 5: pyme
        buildUrl(
          {
            $select:
              "es_pyme,count(*) AS total,sum(valor_del_contrato) AS valor",
            $group: "es_pyme",
            $order: "total DESC",
          },
          f
        ),
        // 6: destino gasto
        buildUrl(
          {
            $select:
              "destino_gasto,count(*) AS total,sum(valor_del_contrato) AS valor",
            $group: "destino_gasto",
            $order: "valor DESC",
          },
          f
        ),
        // 7: tendencia mensual
        buildUrl(
          {
            $select:
              "date_trunc_ym(fecha_de_firma) AS mes,count(*) AS total,sum(valor_del_contrato) AS valor",
            $group: "mes",
            $order: "mes ASC",
          },
          f
        ),
        // 8: top entidades
        buildUrl(
          {
            $select:
              "nombre_entidad,count(*) AS total_contratos,sum(valor_del_contrato) AS valor_total",
            $group: "nombre_entidad",
            $order: "valor_total DESC",
            $limit: "10",
          },
          f
        ),
      ];

      const fetches = dataQueries.map((url) => fetch(url));
      if (isInitial) fetches.push(fetch(GEO_URL));

      const responses = await Promise.all(fetches);
      for (let i = 0; i < responses.length; i++) {
        if (!responses[i].ok) {
          const body = await responses[i].text().catch(() => "");
          throw new Error(
            `Query ${i + 1} fallo — HTTP ${responses[i].status}: ${body.slice(0, 200)}`
          );
        }
      }

      const results = await Promise.all(responses.map((r) => r.json()));

      setDeptData(results[0] as DeptRow[]);
      setModalData(results[1] as ModalRow[]);
      setEstadoData(results[2] as EstadoRow[]);
      setContratistaData(results[3] as ContratistaRow[]);
      setEjecucionData(results[4] as EjecucionRow[]);
      setPymeData(results[5] as PymeRow[]);
      setDestinoData(results[6] as DestinoRow[]);
      setTendenciaData(results[7] as TendenciaRow[]);
      setEntidadData(results[8] as EntidadRow[]);
      setTablePage(0);

      if (isInitial) {
        setGeoData(results[9] as GeoJSON.FeatureCollection);
        const dept = results[0] as DeptRow[];
        const modal = results[1] as ModalRow[];
        setDeptOptions(
          dept
            .filter((d) => d.departamento && d.departamento !== "No Definido")
            .map((d) => ({ value: d.departamento, label: d.departamento }))
        );
        setModalOptions(
          modal.map((m) => ({
            value: m.modalidad_de_contratacion,
            label:
              m.modalidad_de_contratacion.length > 40
                ? m.modalidad_de_contratacion.slice(0, 38) + "..."
                : m.modalidad_de_contratacion,
          }))
        );
      }

      setUpdatedAt(
        new Date().toLocaleDateString("es-CO", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "No se pudieron cargar los datos del SECOP II."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchData(filters, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }
    fetchData(filters, false);
  }, [filters, fetchData]);

  // ---- Filter handlers ----
  const updateFilter = useCallback((key: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({ year: "2025", departamento: "", modalidad: "" });
  }, []);

  const hasActiveFilters =
    filters.departamento !== "" || filters.modalidad !== "";

  // ---- Derived: KPIs ----
  const totalContratos = useMemo(
    () => deptData.reduce((sum, d) => sum + Number(d.total_contratos), 0),
    [deptData]
  );
  const valorTotal = useMemo(
    () => deptData.reduce((sum, d) => sum + Number(d.valor_total), 0),
    [deptData]
  );
  const numDepartamentos = useMemo(() => deptData.length, [deptData]);
  const numModalidades = useMemo(() => modalData.length, [modalData]);

  // ---- Derived: Transparency indicators ----
  const tasaEjecucion = useMemo(() => {
    const contratado = ejecucionData.reduce(
      (s, d) => s + Number(d.valor_contratado),
      0
    );
    const pagado = ejecucionData.reduce(
      (s, d) => s + Number(d.valor_pagado),
      0
    );
    return { contratado, pagado, pct: contratado > 0 ? pagado / contratado : 0 };
  }, [ejecucionData]);

  const ratioDirecta = useMemo(() => {
    const directa = modalData.find(
      (m) =>
        m.modalidad_de_contratacion.toLowerCase().includes("directa") &&
        !m.modalidad_de_contratacion.toLowerCase().includes("ofertas")
    );
    const totalAll = modalData.reduce((s, m) => s + Number(m.total), 0);
    const directaCount = directa ? Number(directa.total) : 0;
    const directaValor = directa ? Number(directa.valor ?? 0) : 0;
    return {
      count: directaCount,
      total: totalAll,
      pctCount: totalAll > 0 ? directaCount / totalAll : 0,
      valor: directaValor,
      pctValor: valorTotal > 0 ? directaValor / valorTotal : 0,
    };
  }, [modalData, valorTotal]);

  const pymeStats = useMemo(() => {
    const si = pymeData.find((p) => p.es_pyme === "Si");
    const totalAll = pymeData.reduce((s, p) => s + Number(p.total), 0);
    const valorAll = pymeData.reduce((s, p) => s + Number(p.valor), 0);
    const pymeCount = si ? Number(si.total) : 0;
    const pymeValor = si ? Number(si.valor) : 0;
    return {
      count: pymeCount,
      total: totalAll,
      pctCount: totalAll > 0 ? pymeCount / totalAll : 0,
      valor: pymeValor,
      valorTotal: valorAll,
      pctValor: valorAll > 0 ? pymeValor / valorAll : 0,
    };
  }, [pymeData]);

  const concentracion = useMemo(() => {
    const top5 = contratistaData.slice(0, 5);
    const top5Valor = top5.reduce((s, c) => s + Number(c.valor_total), 0);
    return {
      top5Valor,
      pct: valorTotal > 0 ? top5Valor / valorTotal : 0,
    };
  }, [contratistaData, valorTotal]);

  const valorPromedio = useMemo(() => {
    return totalContratos > 0 ? valorTotal / totalContratos : 0;
  }, [valorTotal, totalContratos]);

  const destinoStats = useMemo(() => {
    const inversion = destinoData.find((d) =>
      d.destino_gasto.toLowerCase().includes("inversi")
    );
    const funcionamiento = destinoData.find((d) =>
      d.destino_gasto.toLowerCase().includes("funcionamiento")
    );
    const totalValor = destinoData.reduce((s, d) => s + Number(d.valor), 0);
    return {
      inversionValor: inversion ? Number(inversion.valor) : 0,
      funcionamientoValor: funcionamiento ? Number(funcionamiento.valor) : 0,
      totalValor,
      pctInversion:
        totalValor > 0 && inversion
          ? Number(inversion.valor) / totalValor
          : 0,
    };
  }, [destinoData]);

  // ---- Derived: Chart data ----
  const deptChartData = useMemo(
    () =>
      deptData.slice(0, 10).map((d) => ({
        name:
          d.departamento.length > 18
            ? d.departamento.slice(0, 16) + "..."
            : d.departamento,
        fullName: d.departamento,
        valor: Number(d.valor_total),
        contratos: Number(d.total_contratos),
      })),
    [deptData]
  );

  const modalChartData = useMemo(
    () =>
      modalData.map((m) => ({
        name:
          m.modalidad_de_contratacion.length > 22
            ? m.modalidad_de_contratacion.slice(0, 20) + "..."
            : m.modalidad_de_contratacion,
        fullName: m.modalidad_de_contratacion,
        total: Number(m.total),
      })),
    [modalData]
  );

  const estadoChartData = useMemo(
    () =>
      estadoData.map((e) => ({
        name: e.estado_contrato,
        value: Number(e.total),
      })),
    [estadoData]
  );

  const contratistaChartData = useMemo(
    () =>
      contratistaData.slice(0, 10).map((c) => ({
        name:
          c.proveedor_adjudicado.length > 30
            ? c.proveedor_adjudicado.slice(0, 28) + "..."
            : c.proveedor_adjudicado,
        fullName: c.proveedor_adjudicado,
        valor: Number(c.valor_total),
        contratos: Number(c.total_contratos),
      })),
    [contratistaData]
  );

  const tendenciaChartData = useMemo(
    () =>
      tendenciaData.map((t) => {
        const d = new Date(t.mes);
        return {
          name: `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear().toString().slice(2)}`,
          contratos: Number(t.total),
          valor: Number(t.valor),
        };
      }),
    [tendenciaData]
  );

  const ejecucionChartData = useMemo(
    () =>
      ejecucionData
        .filter((d) => d.departamento && d.departamento !== "No Definido")
        .slice(0, 10)
        .map((d) => {
          const contratado = Number(d.valor_contratado);
          const pagado = Number(d.valor_pagado);
          return {
            name:
              d.departamento.length > 16
                ? d.departamento.slice(0, 14) + "..."
                : d.departamento,
            tasa: contratado > 0 ? (pagado / contratado) * 100 : 0,
          };
        }),
    [ejecucionData]
  );

  const entidadChartData = useMemo(
    () =>
      entidadData.slice(0, 10).map((e) => ({
        name:
          e.nombre_entidad.length > 28
            ? e.nombre_entidad.slice(0, 26) + "..."
            : e.nombre_entidad,
        fullName: e.nombre_entidad,
        valor: Number(e.valor_total),
        contratos: Number(e.total_contratos),
      })),
    [entidadData]
  );

  // ---- Map ----
  const deptLookup = useMemo(() => {
    const map = new Map<string, { contratos: number; valor: number }>();
    deptData.forEach((d) => {
      map.set(normalize(d.departamento), {
        contratos: Number(d.total_contratos),
        valor: Number(d.valor_total),
      });
    });
    return map;
  }, [deptData]);

  const colorScale = useMemo(() => {
    const values = deptData.map((d) => Number(d.valor_total));
    const max = Math.max(...values, 1);
    return scaleLinear<string>().domain([0, max]).range(["#1a1a2e", "#06b6d4"]);
  }, [deptData]);

  const handleGeoMouseEnter = useCallback(
    (geo: GeoJSON.Feature, evt: React.MouseEvent) => {
      const geoName =
        (geo.properties as Record<string, string>)?.NOMBRE_DPT ?? "";
      const name = GEO_TO_API[geoName] ?? normalize(geoName);
      const data = deptLookup.get(name);
      setMapTooltip({
        name: geoName,
        contratos: data?.contratos ?? 0,
        valor: data?.valor ?? 0,
        x: evt.clientX,
        y: evt.clientY,
      });
    },
    [deptLookup]
  );

  const handleGeoMouseLeave = useCallback(() => {
    setMapTooltip(null);
  }, []);

  const handleGeoClick = useCallback(
    (geo: GeoJSON.Feature) => {
      const geoName =
        (geo.properties as Record<string, string>)?.NOMBRE_DPT ?? "";
      const normalizedGeo = GEO_TO_API[geoName] ?? normalize(geoName);
      const match = deptData.find(
        (d) => normalize(d.departamento) === normalizedGeo
      );
      if (match) {
        const isSame = filters.departamento === match.departamento;
        updateFilter("departamento", isSame ? "" : match.departamento);
      }
    },
    [deptData, filters.departamento, updateFilter]
  );

  // ---- Table ----
  const filteredContratistas = useMemo(() => {
    if (!tableSearch.trim()) return contratistaData;
    const q = tableSearch.toLowerCase();
    return contratistaData.filter((c) =>
      c.proveedor_adjudicado.toLowerCase().includes(q)
    );
  }, [contratistaData, tableSearch]);

  const pagedContratistas = useMemo(() => {
    const start = tablePage * ROWS_PER_PAGE;
    return filteredContratistas.slice(start, start + ROWS_PER_PAGE);
  }, [filteredContratistas, tablePage]);

  const totalPages = Math.ceil(filteredContratistas.length / ROWS_PER_PAGE);

  // ---- Render helpers ----
  const fadeClass = `transition-opacity duration-300 ${refreshing ? "opacity-50" : ""}`;

  // ---- Render: Error ----
  if (error && !deptData.length) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <GlassCard className="mx-auto max-w-lg bg-[#0a0a0f]">
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-rose-400">
            Error al cargar datos
          </p>
          <p className="text-sm text-slate-300">{error}</p>
          <button
            onClick={() => fetchData(filters, true)}
            className="mt-4 rounded-lg bg-cyan-500/20 px-4 py-2 text-sm text-cyan-400 transition hover:bg-cyan-500/30"
          >
            Reintentar
          </button>
        </GlassCard>
      </section>
    );
  }

  // ---- Render: Loading ----
  if (loading) {
    return (
      <section className="mx-auto max-w-6xl space-y-8 px-4 py-12">
        <div className="space-y-3 text-center">
          <Skeleton className="mx-auto h-6 w-72" />
          <Skeleton className="mx-auto h-4 w-48" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <KpiSkeleton key={i} />
          ))}
        </div>
        <Skeleton className="h-96 w-full rounded-xl" />
        <div className="grid gap-6 md:grid-cols-2">
          <ChartSkeleton />
          <ChartSkeleton />
        </div>
      </section>
    );
  }

  // ---- Render: Dashboard ----
  return (
    <section
      className="relative mx-auto max-w-6xl space-y-10 px-4 py-12"
      style={{ backgroundColor: "#0a0a0f", color: "#f8fafc" }}
    >
      {/* Refreshing indicator */}
      <AnimatePresence>
        {refreshing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none fixed inset-0 z-40 flex items-start justify-center pt-32"
          >
            <div className="rounded-full border border-cyan-500/30 bg-[#0a0a0f]/90 px-4 py-2 backdrop-blur-md">
              <p className="animate-pulse font-mono text-xs text-cyan-400">
                Actualizando datos...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==== HEADER ==== */}
      <header className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-900/30 via-violet-900/20 to-transparent p-8 text-center backdrop-blur-md">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-violet-500/10"
          aria-hidden
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-2xl font-bold tracking-tight md:text-3xl"
        >
          Observatorio de Contratación Pública — SECOP II
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative mt-2 text-sm text-slate-400"
        >
          Datos en tiempo real — Fuente: datos.gov.co
        </motion.p>
        <div className="relative mt-3 flex items-center justify-center gap-3">
          {updatedAt && (
            <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-400">
              Actualizado: {updatedAt}
            </span>
          )}
          <button
            onClick={() => fetchData(filters, false)}
            disabled={refreshing}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-400 transition hover:border-cyan-500/30 hover:text-cyan-400 disabled:opacity-40"
          >
            <svg
              className={`h-3 w-3 ${refreshing ? "animate-spin" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refrescar
          </button>
        </div>
      </header>

      {/* ==== FILTERS ==== */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <GlassCard>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
            <FilterSelect
              label="Periodo"
              value={filters.year}
              onChange={(v) => updateFilter("year", v)}
              options={YEAR_OPTIONS}
            />
            <FilterSelect
              label="Departamento"
              value={filters.departamento}
              onChange={(v) => updateFilter("departamento", v)}
              options={deptOptions}
              placeholder="Todos los departamentos"
            />
            <FilterSelect
              label="Modalidad"
              value={filters.modalidad}
              onChange={(v) => updateFilter("modalidad", v)}
              options={modalOptions}
              placeholder="Todas las modalidades"
            />
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="self-end rounded-lg border border-rose-500/20 bg-rose-500/10 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-rose-400 transition hover:bg-rose-500/20"
              >
                Limpiar filtros
              </button>
            )}
          </div>
          {hasActiveFilters && (
            <div className="mt-3 flex flex-wrap gap-2">
              {filters.departamento && (
                <span className="inline-flex items-center gap-1 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-[10px] text-cyan-400">
                  {filters.departamento}
                  <button
                    onClick={() => updateFilter("departamento", "")}
                    className="ml-0.5 hover:text-white"
                  >
                    x
                  </button>
                </span>
              )}
              {filters.modalidad && (
                <span className="inline-flex items-center gap-1 rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 text-[10px] text-violet-400">
                  {filters.modalidad.length > 30
                    ? filters.modalidad.slice(0, 28) + "..."
                    : filters.modalidad}
                  <button
                    onClick={() => updateFilter("modalidad", "")}
                    className="ml-0.5 hover:text-white"
                  >
                    x
                  </button>
                </span>
              )}
            </div>
          )}
        </GlassCard>
      </motion.div>

      {/* ==== KPI CARDS ==== */}
      <div className={`grid grid-cols-2 gap-4 md:grid-cols-4 ${fadeClass}`}>
        {[
          {
            label: "Total contratos",
            value: totalContratos.toLocaleString("es-CO"),
            sub: "consultados",
          },
          {
            label: "Valor total",
            value: `$${formatBillones(valorTotal)}B`,
            sub: "billones COP",
          },
          {
            label: "Departamentos",
            value: numDepartamentos.toString(),
            sub: "con contratos",
          },
          {
            label: "Modalidades",
            value: numModalidades.toString(),
            sub: "detectadas",
          },
        ].map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.5 }}
          >
            <GlassCard>
              <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                {kpi.label}
              </p>
              <p className="mt-1 text-2xl font-bold text-cyan-400 md:text-3xl">
                {kpi.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{kpi.sub}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* ==== INDICADORES DE TRANSPARENCIA ==== */}
      <SectionLabel>Indicadores de transparencia</SectionLabel>

      <div className={`grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6 ${fadeClass}`}>
        <IndicatorCard
          label="Tasa de ejecución"
          value={pct(tasaEjecucion.pagado, tasaEjecucion.contratado)}
          sub="pagado vs contratado"
          color={
            tasaEjecucion.pct < 0.3
              ? "text-amber-400"
              : tasaEjecucion.pct < 0.6
                ? "text-cyan-400"
                : "text-emerald-400"
          }
        />
        <IndicatorCard
          label="Contratación directa"
          value={pct(ratioDirecta.count, ratioDirecta.total)}
          sub={`${ratioDirecta.count.toLocaleString("es-CO")} contratos`}
          color={ratioDirecta.pctCount > 0.7 ? "text-rose-400" : "text-cyan-400"}
        />
        <IndicatorCard
          label="Directa por valor"
          value={pct(ratioDirecta.valor, valorTotal)}
          sub={formatCOP(ratioDirecta.valor)}
          color={ratioDirecta.pctValor > 0.5 ? "text-rose-400" : "text-cyan-400"}
        />
        <IndicatorCard
          label="Participación PYME"
          value={pct(pymeStats.count, pymeStats.total)}
          sub={`${pymeStats.count.toLocaleString("es-CO")} contratos`}
          color={pymeStats.pctCount < 0.1 ? "text-amber-400" : "text-emerald-400"}
        />
        <IndicatorCard
          label="Concentración top 5"
          value={pct(concentracion.top5Valor, valorTotal)}
          sub="del valor total"
          color={concentracion.pct > 0.5 ? "text-rose-400" : "text-cyan-400"}
        />
        <IndicatorCard
          label="Valor promedio"
          value={formatCOP(valorPromedio)}
          sub="por contrato"
        />
      </div>

      {/* Inversion vs Funcionamiento */}
      <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${fadeClass}`}>
        <GlassCard>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-slate-400">
            Destino del gasto
          </p>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="text-emerald-400">Inversion</span>
                <span className="font-mono text-emerald-400">
                  {pct(destinoStats.inversionValor, destinoStats.totalValor)}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-emerald-400 transition-all duration-500"
                  style={{
                    width: `${destinoStats.pctInversion * 100}%`,
                  }}
                />
              </div>
              <p className="mt-1 text-[10px] text-slate-600">
                {formatCOP(destinoStats.inversionValor)}
              </p>
            </div>
            <div className="flex-1">
              <div className="mb-1 flex items-center justify-between text-xs">
                <span className="text-amber-400">Funcionamiento</span>
                <span className="font-mono text-amber-400">
                  {pct(
                    destinoStats.funcionamientoValor,
                    destinoStats.totalValor
                  )}
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-amber-400 transition-all duration-500"
                  style={{
                    width: `${destinoStats.totalValor > 0 ? (destinoStats.funcionamientoValor / destinoStats.totalValor) * 100 : 0}%`,
                  }}
                />
              </div>
              <p className="mt-1 text-[10px] text-slate-600">
                {formatCOP(destinoStats.funcionamientoValor)}
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Ejecucion por departamento */}
        <GlassCard>
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-slate-400">
            Tasa de ejecución por departamento
          </p>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart
              data={ejecucionChartData}
              layout="vertical"
              margin={{ left: 5, right: 20, top: 0, bottom: 0 }}
            >
              <XAxis
                type="number"
                domain={[0, 100]}
                tickFormatter={(v: number) => `${v}%`}
                tick={{ fill: "#94a3b8", fontSize: 9 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                dataKey="name"
                type="category"
                width={100}
                tick={{ fill: "#94a3b8", fontSize: 8 }}
                axisLine={false}
                tickLine={false}
              />
              <RechartsTooltip
                content={
                  <CustomTooltip
                    formatter={(v) => `${v.toFixed(1)}%`}
                  />
                }
                cursor={{ fill: "rgba(16,185,129,0.08)" }}
              />
              <Bar dataKey="tasa" radius={[0, 4, 4, 0]} maxBarSize={14}>
                {ejecucionChartData.map((d, i) => (
                  <Cell
                    key={i}
                    fill={
                      d.tasa < 30
                        ? COLORS.rose
                        : d.tasa < 60
                          ? COLORS.amber
                          : COLORS.emerald
                    }
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* ==== TENDENCIA MENSUAL ==== */}
      <SectionLabel>Tendencia mensual</SectionLabel>

      <div className={fadeClass}>
        <GlassCard>
          <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400">
              Contratos y valor por mes — {filters.year}
            </h3>
            <div className="flex gap-4 text-[10px]">
              <span className="flex items-center gap-1">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: COLORS.cyan }}
                />
                Contratos
              </span>
              <span className="flex items-center gap-1">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: COLORS.violet }}
                />
                Valor
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart
              data={tendenciaChartData}
              margin={{ left: 10, right: 20, top: 10, bottom: 5 }}
            >
              <defs>
                <linearGradient id="gradContratos" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={COLORS.cyan} stopOpacity={0.3} />
                  <stop offset="95%" stopColor={COLORS.cyan} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradValor" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={COLORS.violet}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor={COLORS.violet}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.05)"
              />
              <XAxis
                dataKey="name"
                tick={{ fill: "#94a3b8", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                yAxisId="left"
                tick={{ fill: "#94a3b8", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v: number) =>
                  v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v.toString()
                }
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: "#94a3b8", fontSize: 10 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v: number) =>
                  v >= 1e12
                    ? `${(v / 1e12).toFixed(0)}B`
                    : `${(v / 1e9).toFixed(0)}mM`
                }
              />
              <RechartsTooltip
                content={
                  <CustomTooltip
                    formatter={(v, name) =>
                      name === "valor"
                        ? formatCOP(v)
                        : v.toLocaleString("es-CO")
                    }
                  />
                }
              />
              <Area
                yAxisId="left"
                type="monotone"
                dataKey="contratos"
                stroke={COLORS.cyan}
                strokeWidth={2}
                fill="url(#gradContratos)"
              />
              <Area
                yAxisId="right"
                type="monotone"
                dataKey="valor"
                stroke={COLORS.violet}
                strokeWidth={2}
                fill="url(#gradValor)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* ==== MAPA ==== */}
      <SectionLabel>Distribución geográfica</SectionLabel>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className={fadeClass}
      >
        <GlassCard className="relative">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400">
              Mapa de calor — Valor contratado por departamento
            </h3>
            <p className="font-mono text-[10px] text-slate-600">
              Click en un departamento para filtrar
            </p>
          </div>

          <div className="relative mx-auto" style={{ maxWidth: 600 }}>
            {geoData && (
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 1800, center: [-73.5, 4.5] }}
                width={600}
                height={600}
                style={{ width: "100%", height: "auto" }}
              >
                <ZoomableGroup>
                  <Geographies geography={geoData}>
                    {({ geographies }) =>
                      geographies.map((geo) => {
                        const geoName =
                          (geo.properties as Record<string, string>)
                            ?.NOMBRE_DPT ?? "";
                        const apiName =
                          GEO_TO_API[geoName] ?? normalize(geoName);
                        const data = deptLookup.get(apiName);
                        const isSelected =
                          filters.departamento &&
                          normalize(filters.departamento) === apiName;
                        const fillColor = isSelected
                          ? COLORS.violet
                          : data
                            ? colorScale(data.valor)
                            : "#1a1a2e";

                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={fillColor}
                            stroke={isSelected ? "#fff" : "#0a0a0f"}
                            strokeWidth={isSelected ? 1.5 : 0.5}
                            onMouseEnter={(evt) =>
                              handleGeoMouseEnter(
                                geo,
                                evt as unknown as React.MouseEvent
                              )
                            }
                            onMouseLeave={handleGeoMouseLeave}
                            onClick={() => handleGeoClick(geo)}
                            style={{
                              hover: {
                                fill: COLORS.cyan,
                                stroke: "#fff",
                                strokeWidth: 1,
                                outline: "none",
                                cursor: "pointer",
                              },
                              default: { outline: "none" },
                              pressed: { outline: "none" },
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>
            )}

            <AnimatePresence>
              {mapTooltip && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="pointer-events-none fixed z-50 rounded-lg border border-white/10 bg-[#0a0a0f]/95 px-3 py-2 text-xs shadow-xl backdrop-blur-md"
                  style={{ left: mapTooltip.x + 12, top: mapTooltip.y - 40 }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                    {mapTooltip.name}
                  </p>
                  <p className="text-cyan-400">
                    {mapTooltip.contratos.toLocaleString("es-CO")} contratos
                  </p>
                  <p className="text-violet-400">
                    {formatCOP(mapTooltip.valor)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mx-auto mt-4 flex max-w-xs items-center gap-2 text-[10px] text-slate-400">
            <span>Menor</span>
            <div
              className="h-2 flex-1 rounded-full"
              style={{
                background: "linear-gradient(to right, #1a1a2e, #06b6d4)",
              }}
            />
            <span>Mayor valor</span>
          </div>
        </GlassCard>
      </motion.div>

      {/* ==== CHARTS ==== */}
      <SectionLabel>Análisis por dimensión</SectionLabel>

      <div className={`grid gap-6 md:grid-cols-2 ${fadeClass}`}>
        {/* Top departamentos */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="h-full">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-400">
              Top 10 departamentos — Valor contratado
            </h3>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart
                data={deptChartData}
                layout="vertical"
                margin={{ left: 10, right: 20, top: 5, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.05)"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  tickFormatter={(v: number) =>
                    v >= 1e12
                      ? `${(v / 1e12).toFixed(0)}B`
                      : `${(v / 1e9).toFixed(0)}mM`
                  }
                  tick={{ fill: "#94a3b8", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={110}
                  tick={{ fill: "#94a3b8", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <RechartsTooltip
                  content={<CustomTooltip formatter={(v) => formatCOP(v)} />}
                  cursor={{ fill: "rgba(6,182,212,0.08)" }}
                />
                <Bar dataKey="valor" radius={[0, 4, 4, 0]} maxBarSize={20}>
                  {deptChartData.map((_, i) => (
                    <Cell
                      key={i}
                      fill={CHART_COLORS[i % CHART_COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>

        {/* Modalidad */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="h-full">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-400">
              Contratos por modalidad
            </h3>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart
                data={modalChartData}
                margin={{ left: 5, right: 20, top: 5, bottom: 60 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.05)"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  tick={{ fill: "#94a3b8", fontSize: 9 }}
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: "#94a3b8", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <RechartsTooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "rgba(124,58,237,0.08)" }}
                />
                <Bar dataKey="total" radius={[4, 4, 0, 0]} maxBarSize={36}>
                  {modalChartData.map((_, i) => (
                    <Cell
                      key={i}
                      fill={CHART_COLORS[i % CHART_COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>

        {/* Top contratistas */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="h-full">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-400">
              Top 10 contratistas — Valor contratado
            </h3>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart
                data={contratistaChartData}
                layout="vertical"
                margin={{ left: 10, right: 20, top: 5, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.05)"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  tickFormatter={(v: number) =>
                    v >= 1e12
                      ? `${(v / 1e12).toFixed(0)}B`
                      : `${(v / 1e9).toFixed(0)}mM`
                  }
                  tick={{ fill: "#94a3b8", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={180}
                  tick={{ fill: "#94a3b8", fontSize: 9 }}
                  axisLine={false}
                  tickLine={false}
                />
                <RechartsTooltip
                  content={<CustomTooltip formatter={(v) => formatCOP(v)} />}
                  cursor={{ fill: "rgba(6,182,212,0.08)" }}
                />
                <Bar dataKey="valor" radius={[0, 4, 4, 0]} maxBarSize={18}>
                  {contratistaChartData.map((_, i) => (
                    <Cell
                      key={i}
                      fill={CHART_COLORS[i % CHART_COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>

        {/* Estado del contrato */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="h-full">
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-400">
              Distribución por estado del contrato
            </h3>
            <ResponsiveContainer width="100%" height={340}>
              <BarChart
                data={estadoChartData}
                layout="vertical"
                margin={{ left: 10, right: 20, top: 5, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.05)"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  tick={{ fill: "#94a3b8", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={120}
                  tick={{ fill: "#94a3b8", fontSize: 9 }}
                  axisLine={false}
                  tickLine={false}
                />
                <RechartsTooltip
                  content={<CustomTooltip />}
                  cursor={{ fill: "rgba(124,58,237,0.08)" }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={20}>
                  {estadoChartData.map((_, i) => (
                    <Cell
                      key={i}
                      fill={BAR_COLORS[i % BAR_COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>
      </div>

      {/* ==== TOP ENTIDADES ==== */}
      <SectionLabel>Entidades contratantes</SectionLabel>

      <div className={fadeClass}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-slate-400">
              Top 10 entidades por valor contratado
            </h3>
            <ResponsiveContainer width="100%" height={360}>
              <BarChart
                data={entidadChartData}
                layout="vertical"
                margin={{ left: 10, right: 20, top: 5, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.05)"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  tickFormatter={(v: number) =>
                    v >= 1e12
                      ? `${(v / 1e12).toFixed(0)}B`
                      : `${(v / 1e9).toFixed(0)}mM`
                  }
                  tick={{ fill: "#94a3b8", fontSize: 10 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={180}
                  tick={{ fill: "#94a3b8", fontSize: 9 }}
                  axisLine={false}
                  tickLine={false}
                />
                <RechartsTooltip
                  content={<CustomTooltip formatter={(v) => formatCOP(v)} />}
                  cursor={{ fill: "rgba(6,182,212,0.08)" }}
                />
                <Bar dataKey="valor" radius={[0, 4, 4, 0]} maxBarSize={18}>
                  {entidadChartData.map((_, i) => (
                    <Cell
                      key={i}
                      fill={CHART_COLORS[i % CHART_COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>
      </div>

      {/* ==== TABLE ==== */}
      <SectionLabel>Detalle de contratistas</SectionLabel>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className={fadeClass}
      >
        <GlassCard>
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400">
              Top contratistas
            </h3>
            <div className="relative">
              <input
                type="text"
                value={tableSearch}
                onChange={(e) => {
                  setTableSearch(e.target.value);
                  setTablePage(0);
                }}
                placeholder="Buscar contratista..."
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 pl-8 text-xs text-slate-200 placeholder-slate-600 outline-none transition focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 sm:w-64"
              />
              <svg
                className="absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-[10px] uppercase tracking-widest text-slate-400">
                  <th className="px-3 py-2 font-mono font-medium">#</th>
                  <th className="px-3 py-2 font-mono font-medium">
                    Contratista
                  </th>
                  <th className="px-3 py-2 text-right font-mono font-medium">
                    N. Contratos
                  </th>
                  <th className="px-3 py-2 text-right font-mono font-medium">
                    Valor Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {pagedContratistas.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-3 py-6 text-center text-xs text-slate-500"
                    >
                      {tableSearch
                        ? "Sin resultados para esa búsqueda."
                        : "Sin datos disponibles."}
                    </td>
                  </tr>
                ) : (
                  pagedContratistas.map((c, i) => (
                    <tr
                      key={i}
                      className="border-b border-white/5 transition-colors hover:bg-white/5"
                    >
                      <td className="px-3 py-2 font-mono text-[10px] text-slate-600">
                        {tablePage * ROWS_PER_PAGE + i + 1}
                      </td>
                      <td className="max-w-[200px] truncate px-3 py-2 text-xs text-slate-200 md:max-w-none">
                        {c.proveedor_adjudicado}
                      </td>
                      <td className="px-3 py-2 text-right font-mono text-xs text-cyan-400">
                        {Number(c.total_contratos).toLocaleString("es-CO")}
                      </td>
                      <td className="px-3 py-2 text-right font-mono text-xs text-violet-400">
                        {formatCOP(Number(c.valor_total))}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {totalPages > 1 && (
            <div className="mt-3 flex items-center justify-between">
              <p className="font-mono text-[10px] text-slate-600">
                {filteredContratistas.length} resultado
                {filteredContratistas.length !== 1 ? "s" : ""}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTablePage((p) => Math.max(0, p - 1))}
                  disabled={tablePage === 0}
                  className="rounded border border-white/10 px-2 py-1 text-xs text-slate-400 transition hover:bg-white/10 disabled:opacity-30"
                >
                  Anterior
                </button>
                <span className="font-mono text-[10px] text-slate-500">
                  {tablePage + 1} / {totalPages}
                </span>
                <button
                  onClick={() =>
                    setTablePage((p) => Math.min(totalPages - 1, p + 1))
                  }
                  disabled={tablePage === totalPages - 1}
                  className="rounded border border-white/10 px-2 py-1 text-xs text-slate-400 transition hover:bg-white/10 disabled:opacity-30"
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
        </GlassCard>
      </motion.div>

      {/* ==== FOOTER ==== */}
      <footer className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md">
        <p className="text-xs leading-relaxed text-slate-400">
          Los datos provienen directamente de la API pública del SECOP II a
          través de datos.gov.co. Esta visualización no modifica ni interpreta
          los datos — su propósito es facilitar el control ciudadano.
        </p>
        <a
          href="https://www.datos.gov.co/Gastos-Gubernamentales/SECOP-II-Contratos/jbjy-vk9h"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block font-mono text-[10px] uppercase tracking-widest text-cyan-400 underline underline-offset-2 transition hover:text-cyan-300"
        >
          Ver fuente oficial en datos.gov.co
        </a>
      </footer>
    </section>
  );
}

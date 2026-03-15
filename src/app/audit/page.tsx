"use client";

import { auditData } from "@/lib/audit-data";
import { ScoreCircle } from "@/components/audit/score-circle";
import { CategoryCard } from "@/components/audit/category-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertCircle,
  AlertTriangle,
  Info,
  Globe,
  Calendar,
  CheckCircle2,
  Clock,
  BarChart3,
} from "lucide-react";

const addressedInRedesign = [
  "SEO meta tags",
  "Structured data",
  "Sitemap",
  "Image optimization (via next/image)",
  "Responsive design",
  "Component consistency",
  "Footer added",
  "Alt text fixed",
];

const planned = [
  "Analytics",
  "Privacy policy",
  "Terms of service",
  "Cookie consent",
  "CSP headers",
  "Error monitoring",
];

export default function AuditPage() {
  const allFindings = auditData.categories.flatMap((c) => c.findings);
  const criticalCount = allFindings.filter(
    (f) => f.severity === "critical"
  ).length;
  const warningCount = allFindings.filter(
    (f) => f.severity === "warning"
  ).length;
  const infoCount = allFindings.filter((f) => f.severity === "info").length;

  const uiCategories = auditData.categories.filter((c) => c.type === "ui");
  const nonUiCategories = auditData.categories.filter(
    (c) => c.type === "non-ui"
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center gap-8">
            <div>
              <Badge className="bg-green-600/20 text-green-400 mb-4">
                <BarChart3 className="size-3" />
                Site Audit Report
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
                Website Health Score
              </h1>
              <div className="flex items-center justify-center gap-4 text-slate-400 text-sm">
                <span className="flex items-center gap-1.5">
                  <Globe className="size-4" />
                  {auditData.siteUrl}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="size-4" />
                  {auditData.auditDate}
                </span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <ScoreCircle
                score={auditData.overallScore}
                size={220}
                strokeWidth={14}
                label="Overall Score"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="container mx-auto px-4 -mt-4 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            label="Total Findings"
            value={allFindings.length}
            icon={<BarChart3 className="size-5" />}
            color="text-slate-300"
            bg="bg-slate-800/80"
          />
          <StatCard
            label="Critical"
            value={criticalCount}
            icon={<AlertCircle className="size-5" />}
            color="text-red-400"
            bg="bg-red-950/50"
          />
          <StatCard
            label="Warnings"
            value={warningCount}
            icon={<AlertTriangle className="size-5" />}
            color="text-yellow-400"
            bg="bg-yellow-950/50"
          />
          <StatCard
            label="Info"
            value={infoCount}
            icon={<Info className="size-5" />}
            color="text-blue-400"
            bg="bg-blue-950/50"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Audit Categories
          </h2>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all">
                All ({auditData.categories.length})
              </TabsTrigger>
              <TabsTrigger value="ui">
                UI ({uiCategories.length})
              </TabsTrigger>
              <TabsTrigger value="non-ui">
                Non-UI ({nonUiCategories.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="space-y-4">
                {auditData.categories.map((category) => (
                  <CategoryCard key={category.name} category={category} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="ui">
              <div className="space-y-4">
                {uiCategories.map((category) => (
                  <CategoryCard key={category.name} category={category} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="non-ui">
              <div className="space-y-4">
                {nonUiCategories.map((category) => (
                  <CategoryCard key={category.name} category={category} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Remediation Roadmap
          </h2>
          <p className="text-muted-foreground mb-8">
            Tracking which audit findings are addressed in the redesign
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <CheckCircle2 className="size-5" />
                  Addressed in Redesign
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {addressedInRedesign.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="size-4 text-green-600 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-800">
                  <Clock className="size-5" />
                  Planned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {planned.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <Clock className="size-4 text-yellow-600 shrink-0" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
  color,
  bg,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  bg: string;
}) {
  return (
    <div
      className={`${bg} border border-white/10 rounded-xl p-4 flex items-center gap-3 backdrop-blur-sm`}
    >
      <div className={color}>{icon}</div>
      <div>
        <div className={`text-2xl font-bold ${color}`}>{value}</div>
        <div className="text-xs text-slate-400">{label}</div>
      </div>
    </div>
  );
}

"use client";

import { Badge } from "@/components/ui/badge";
import type { Finding } from "@/lib/audit-data";
import { AlertTriangle, AlertCircle, Info, Lightbulb } from "lucide-react";

const severityConfig = {
  critical: {
    color: "bg-red-600 text-white",
    icon: AlertCircle,
    label: "Critical",
  },
  warning: {
    color: "bg-yellow-500 text-white",
    icon: AlertTriangle,
    label: "Warning",
  },
  info: {
    color: "bg-blue-500 text-white",
    icon: Info,
    label: "Info",
  },
} as const;

export function FindingItem({ finding }: { finding: Finding }) {
  const config = severityConfig[finding.severity];
  const Icon = config.icon;

  return (
    <div className="border-l-2 border-slate-200 pl-4 py-3">
      <div className="flex items-start gap-2">
        <Badge className={`${config.color} shrink-0`}>
          <Icon className="size-3" />
          {config.label}
        </Badge>
        <h4 className="font-medium text-sm leading-snug">{finding.title}</h4>
      </div>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {finding.description}
      </p>
      <div className="mt-2 flex items-start gap-2 rounded-md bg-green-50 p-3 text-sm text-green-800">
        <Lightbulb className="size-4 shrink-0 mt-0.5" />
        <span>{finding.recommendation}</span>
      </div>
    </div>
  );
}

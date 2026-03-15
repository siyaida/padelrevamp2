"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FindingItem } from "./finding-item";
import type { Category } from "@/lib/audit-data";
import { ChevronDown, ChevronUp } from "lucide-react";

function getScoreBadgeClass(score: number): string {
  if (score >= 80) return "bg-green-600 text-white";
  if (score >= 60) return "bg-yellow-500 text-white";
  return "bg-red-600 text-white";
}

export function CategoryCard({ category }: { category: Category }) {
  const [expanded, setExpanded] = useState(false);
  const criticalCount = category.findings.filter(
    (f) => f.severity === "critical"
  ).length;

  return (
    <Card className="overflow-hidden">
      <CardHeader
        className="cursor-pointer select-none"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <CardTitle className="text-base">{category.name}</CardTitle>
            <Badge
              className={`${category.type === "ui" ? "bg-slate-800 text-white" : "bg-slate-500 text-white"}`}
            >
              {category.type === "ui" ? "UI" : "Non-UI"}
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Badge className={getScoreBadgeClass(category.score)}>
              {category.score}/100
            </Badge>
            <span className="text-xs text-muted-foreground">
              {category.findings.length} finding
              {category.findings.length !== 1 ? "s" : ""}
              {criticalCount > 0 && (
                <span className="text-red-600 font-medium">
                  {" "}
                  ({criticalCount} critical)
                </span>
              )}
            </span>
            {expanded ? (
              <ChevronUp className="size-4 text-muted-foreground" />
            ) : (
              <ChevronDown className="size-4 text-muted-foreground" />
            )}
          </div>
        </div>
      </CardHeader>
      {expanded && (
        <CardContent>
          <div className="space-y-4">
            {category.findings.map((finding, i) => (
              <FindingItem key={i} finding={finding} />
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  );
}

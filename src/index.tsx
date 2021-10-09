import React from "react";

export default function Recond({ methods, conditions, defaultValue }: { methods: object; conditions: object; defaultValue: any }): React.FC | any {
  if (typeof methods !== "object" || typeof conditions !== "object") {
    return "";
  }

  let k = null;
  for (const [key, cond] of Object.entries(conditions)) {
    if (cond) {
      k = typeof methods[key] === "function" ? key : "";
      break;
    }
  }

  if (!k && defaultValue) return typeof defaultValue === "function" ? defaultValue.call() : defaultValue;
  if (!k) return "";
  return methods[k]();
}

"use client";

import { useState, useTransition } from "react";
import { maskCnpj } from "@/utils/cnpjMask";

export default function CnpjForm() {
  const [cnpj, setCnpj] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    startTransition(async () => {
      const res = await fetch("/api/cnpj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cnpj }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "Erro ao salvar CNPJ");
        return;
      }

      setCnpj("");
      setSuccess(true);
    });
  }

  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-sm border border-zinc-200">
      <h1 className="text-lg font-semibold text-zinc-900">
        Cadastro de CNPJ
      </h1>

      <p className="text-sm text-zinc-500 mt-1 mb-6">
        Informe apenas o CNPJ da empresa
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-zinc-600 mb-1">
            CNPJ
          </label>

          <input
            type="text"
            placeholder="00.000.000/0000-00"
            value={cnpj}
            onChange={(e) => setCnpj(maskCnpj(e.target.value))}
            disabled={isPending}
            required
            className="w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm
                        focus:outline-none focus:ring-2 focus:ring-zinc-900
                        disabled:bg-zinc-100 text-gray-900"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-zinc-900 py-2 text-sm font-medium text-white
                      transition hover:bg-zinc-800 disabled:opacity-50"
        >
          {isPending ? "Salvando..." : "Salvar CNPJ"}
        </button>

        {error && (
          <p className="text-xs text-red-500">{error}</p>
        )}

        {success && (
          <p className="text-xs text-emerald-600">
            CNPJ cadastrado com sucesso
          </p>
        )}
      </form>
    </div>
  );
}

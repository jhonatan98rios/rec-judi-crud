"use client";

import { useState } from "react";

function formatCNPJ(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .slice(0, 18);
}

function unmask(value: string) {
  return value.replace(/\D/g, "");
}

export default function Contact() {
  const [cnpj, setCnpj] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [processNumber, setProcessNumber] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cnpj: unmask(cnpj),
          name,
          email,
          processNumber: processNumber || null,
          consent,
        }),
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      setSuccess(true);
      setCnpj("");
      setName("");
      setEmail("");
      setProcessNumber("");
      setConsent(false);
    } catch (err) {
      setError("Não foi possível enviar seus dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contato" className="bg-white text-slate-900">
      <div className="max-w-xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold text-center">
          Solicite contato de um escritório especializado
        </h2>

        <p className="mt-6 text-center text-slate-600">
          Seus dados serão compartilhados com advogados e escritórios
          especializados em recuperação judicial e falência.
        </p>

        <form onSubmit={handleSubmit} className="mt-12 space-y-6">
          {/* CNPJ */}
          <div>
            <label className="block text-sm font-medium">CNPJ</label>
            <input
              required
              value={cnpj}
              onChange={(e) => setCnpj(formatCNPJ(e.target.value))}
              placeholder="00.000.000/0000-00"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          {/* Nome */}
          <div>
            <label className="block text-sm font-medium">
              Nome do responsável
            </label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome completo"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">
              Email para contato
            </label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@empresa.com"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          {/* Número do processo (opcional) */}
          <div>
            <label className="block text-sm font-medium">
              Número do processo{" "}
              <span className="text-slate-500 font-normal">(opcional)</span>
            </label>
            <input
              value={processNumber}
              onChange={(e) => setProcessNumber(e.target.value)}
              placeholder="0000000-00.0000.0.00.0000"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          {/* Consentimento */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
            />
            <label className="text-sm text-slate-600 leading-relaxed">
              Autorizo o compartilhamento dos meus dados com escritórios de
              advocacia e profissionais especializados para fins de contato
              comercial.
            </label>
          </div>

          {/* Feedback */}
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          {success && (
            <p className="text-sm text-green-600">
              Dados enviados com sucesso. Em breve um escritório poderá entrar
              em contato.
            </p>
          )}

          {/* Botão */}
          <button
            type="submit"
            disabled={!consent || loading}
            className="w-full bg-blue-700 hover:bg-blue-800 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-medium py-4 rounded-md transition"
          >
            {loading ? "Enviando..." : "Receber contato"}
          </button>
        </form>
      </div>
    </section>
  );
}

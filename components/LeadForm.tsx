"use client";

export default function LeadForm() {
  return (
    <section className="bg-white border-t border-slate-200">
      <div className="max-w-xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold text-slate-900 text-center">
          Entre em contato
        </h2>

        <p className="mt-4 text-center text-slate-600">
          Preencha os dados abaixo e retornaremos o contato de forma confidencial.
        </p>

        <form className="mt-10 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              CNPJ
            </label>
            <input
              type="text"
              placeholder="00.000.000/0000-00"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Nome do responsável
            </label>
            <input
              type="text"
              placeholder="Nome completo"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email para contato
            </label>
            <input
              type="email"
              placeholder="email@empresa.com"
              className="mt-2 w-full rounded-md border border-slate-300 px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 rounded-md transition"
          >
            Solicitar contato
          </button>

          <p className="text-xs text-slate-500 text-center mt-4">
            Seus dados serão tratados com confidencialidade.
          </p>
        </form>
      </div>
    </section>
  );
}

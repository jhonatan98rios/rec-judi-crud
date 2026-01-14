export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />

      <div className="relative max-w-6xl mx-auto px-6 py-28">
        <span className="text-sm uppercase tracking-widest text-blue-400">
          Recuperação Empresarial
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
          Há caminhos antes da falência.
          <br />
          <span className="text-blue-400">
            E eles precisam ser tomados com responsabilidade.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg text-slate-300">
          Atuamos na conexão entre empresas em crise, advogados especializados e
          profissionais de reestruturação para construir soluções jurídicas e
          financeiras viáveis.
        </p>

        <div className="mt-10">
          <a
            href="#contato"
            className="inline-flex items-center rounded-md bg-blue-600 px-8 py-4 text-white font-medium hover:bg-blue-700 transition"
          >
            Solicitar contato confidencial
          </a>
        </div>
      </div>
    </section>
  );
}

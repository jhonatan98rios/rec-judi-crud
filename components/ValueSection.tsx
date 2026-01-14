export default function ValueSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Para quem é esta plataforma?
          </h2>

          <ul className="mt-6 space-y-4 text-slate-600">
            <li>• Empresas em processo de falência ou recuperação judicial</li>
            <li>• Advogados e escritórios especializados em reestruturação</li>
            <li>• Administradores judiciais</li>
            <li>• Consultores financeiros e jurídicos</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Nosso objetivo
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            Facilitar o contato entre empresas em momentos críticos e
            profissionais qualificados, criando oportunidades de recuperação,
            renegociação e reorganização de forma ética e transparente.
          </p>
        </div>
      </div>
    </section>
  );
}

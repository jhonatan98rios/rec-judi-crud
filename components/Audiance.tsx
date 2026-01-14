export default function Audience() {
  return (
    <section className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-semibold">
            Para empresas
          </h2>
          <p className="mt-6 text-slate-300">
            Organizações que enfrentam dificuldades financeiras e buscam uma
            solução jurídica responsável antes do colapso.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold">
            Para advogados e escritórios
          </h2>
          <p className="mt-6 text-slate-300">
            Profissionais especializados em recuperação judicial e falência que
            desejam receber demandas qualificadas.
          </p>
        </div>
      </div>
    </section>
  );
}

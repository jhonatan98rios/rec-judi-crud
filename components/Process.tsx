export default function Process() {
  return (
    <section className="bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-14">
          Como atuamos
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Análise confidencial",
              desc: "Entendimento do cenário jurídico e financeiro da empresa.",
            },
            {
              title: "Conexão estratégica",
              desc: "Encaminhamento para profissionais adequados ao perfil do caso.",
            },
            {
              title: "Acompanhamento inicial",
              desc: "Suporte nos primeiros passos da reorganização.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-slate-800 rounded-xl p-8 bg-slate-900"
            >
              <h3 className="text-xl font-medium">{item.title}</h3>
              <p className="mt-4 text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

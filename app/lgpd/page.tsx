export default function LGPDPage() {
  return (
    <main className="bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-semibold">
          LGPD – Lei Geral de Proteção de Dados
        </h1>

        <p className="mt-6 text-slate-600">
          Informações sobre o tratamento de dados pessoais conforme a Lei nº
          13.709/2018 (LGPD).
        </p>

        <section className="mt-12 space-y-10 text-slate-700 leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Compromisso com a proteção de dados
            </h2>
            <p className="mt-4">
              Esta plataforma atua em conformidade com a Lei Geral de Proteção de
              Dados (LGPD), adotando práticas transparentes e responsáveis no
              tratamento de dados pessoais e empresariais fornecidos pelos
              usuários.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Quem é o controlador dos dados
            </h2>
            <p className="mt-4">
              O controlador dos dados é o responsável pelas decisões referentes
              ao tratamento das informações coletadas por meio desta plataforma,
              incluindo sua finalidade e forma de compartilhamento.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Quais dados são tratados
            </h2>
            <p className="mt-4">
              Os dados tratados podem incluir:
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>CNPJ</li>
              <li>Nome do responsável legal ou representante</li>
              <li>Email para contato</li>
              <li>Número de processo judicial (quando informado)</li>
              <li>Registro de consentimento</li>
              <li>Dados técnicos como IP, data e hora de envio</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Finalidade do tratamento
            </h2>
            <p className="mt-4">
              O tratamento dos dados pessoais ocorre exclusivamente para:
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>
                Compartilhamento das informações com escritórios de advocacia e
                profissionais especializados
              </li>
              <li>
                Permitir contato comercial entre o titular e terceiros
                interessados
              </li>
              <li>
                Cumprimento de obrigações legais e regulatórias
              </li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Base legal do tratamento
            </h2>
            <p className="mt-4">
              O tratamento dos dados é realizado com base no consentimento do
              titular, nos termos do artigo 7º, inciso I, da LGPD, fornecido de
              forma livre, informada e inequívoca.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              6. Compartilhamento com terceiros
            </h2>
            <p className="mt-4">
              Os dados poderão ser compartilhados com escritórios de advocacia,
              advogados, consultores e outros profissionais especializados,
              exclusivamente para as finalidades descritas nesta página.
            </p>

            <p className="mt-4">
              Não realizamos o compartilhamento de dados para finalidades
              incompatíveis ou não relacionadas ao objeto da plataforma.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              7. Direitos do titular dos dados
            </h2>
            <p className="mt-4">
              Nos termos do artigo 18 da LGPD, o titular dos dados pode solicitar:
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Confirmação da existência de tratamento</li>
              <li>Acesso aos dados</li>
              <li>Correção de dados incompletos ou desatualizados</li>
              <li>Anonimização, bloqueio ou exclusão</li>
              <li>Portabilidade dos dados, quando aplicável</li>
              <li>Revogação do consentimento</li>
            </ul>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              8. Retenção dos dados
            </h2>
            <p className="mt-4">
              Os dados pessoais serão armazenados pelo período necessário para
              cumprir as finalidades para as quais foram coletados ou conforme
              exigido por obrigações legais.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              9. Medidas de segurança
            </h2>
            <p className="mt-4">
              Adotamos medidas técnicas e administrativas razoáveis para proteger
              os dados pessoais contra acessos não autorizados, vazamentos,
              perdas ou alterações indevidas.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              10. Canal de atendimento ao titular
            </h2>
            <p className="mt-4">
              Para exercer seus direitos previstos na LGPD ou esclarecer dúvidas
              sobre o tratamento de dados, entre em contato pelo email:
            </p>

            <p className="mt-2 font-medium">
              dpo@seudominio.com
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-semibold">
          Política de Privacidade e Uso de Dados
        </h1>

        <p className="mt-6 text-slate-600">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <section className="mt-12 space-y-10 text-slate-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Objetivo desta Política
            </h2>
            <p className="mt-4">
              Esta Política de Privacidade descreve como os dados pessoais e
              empresariais fornecidos pelos usuários são coletados, utilizados,
              armazenados e compartilhados, em conformidade com a Lei Geral de
              Proteção de Dados (Lei nº 13.709/2018 – LGPD).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              2. Dados coletados
            </h2>
            <p className="mt-4">
              Coletamos apenas os dados necessários para viabilizar o contato
              entre empresas e profissionais especializados em recuperação
              judicial e falência.
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>CNPJ da empresa</li>
              <li>Nome do responsável</li>
              <li>Email para contato</li>
              <li>
                Número do processo judicial (quando informado de forma opcional)
              </li>
              <li>Registro de consentimento</li>
              <li>Informações técnicas, como data, hora e endereço IP</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Finalidade do uso dos dados
            </h2>
            <p className="mt-4">
              Os dados coletados têm como finalidade exclusiva:
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>
                Compartilhamento das informações com escritórios de advocacia,
                advogados e profissionais especializados
              </li>
              <li>
                Possibilitar o contato comercial entre as partes interessadas
              </li>
              <li>
                Gestão interna de leads e melhoria dos serviços oferecidos
              </li>
              <li>
                Cumprimento de obrigações legais e regulatórias
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Compartilhamento de dados
            </h2>
            <p className="mt-4">
              Ao aceitar esta Política e enviar seus dados por meio do formulário
              do site, o usuário autoriza expressamente o compartilhamento das
              informações fornecidas com terceiros, especificamente escritórios
              de advocacia, advogados e consultores especializados em
              recuperação judicial e falência, para fins de contato comercial.
            </p>

            <p className="mt-4">
              Não comercializamos dados para finalidades alheias ao objeto desta
              plataforma.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Base legal para o tratamento
            </h2>
            <p className="mt-4">
              O tratamento dos dados pessoais é realizado com base no
              consentimento do titular, conforme previsto no artigo 7º, inciso I
              da LGPD.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              6. Armazenamento e segurança
            </h2>
            <p className="mt-4">
              Os dados são armazenados em ambientes seguros e controlados,
              adotando medidas técnicas e administrativas adequadas para
              protegê-los contra acessos não autorizados, perda ou uso indevido.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              7. Direitos do titular
            </h2>
            <p className="mt-4">
              O titular dos dados pode, a qualquer momento:
            </p>

            <ul className="mt-4 list-disc list-inside space-y-2">
              <li>Solicitar confirmação da existência de tratamento</li>
              <li>Acessar, corrigir ou atualizar seus dados</li>
              <li>Solicitar a exclusão dos dados, quando aplicável</li>
              <li>Revogar o consentimento</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              8. Retenção dos dados
            </h2>
            <p className="mt-4">
              Os dados serão mantidos apenas pelo tempo necessário para cumprir
              as finalidades descritas nesta Política ou conforme exigido por
              obrigações legais.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              9. Alterações nesta Política
            </h2>
            <p className="mt-4">
              Esta Política de Privacidade pode ser atualizada a qualquer
              momento. Recomendamos a revisão periódica deste conteúdo.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              10. Contato
            </h2>
            <p className="mt-4">
              Para dúvidas, solicitações ou exercício de direitos relacionados
              ao tratamento de dados, entre em contato pelo email:
            </p>

            <p className="mt-2 font-medium">
              contato@seudominio.com
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

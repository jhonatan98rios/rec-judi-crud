export function parseCnpj(doc: any) {
  const data = doc.data || {};

  return {
    id: doc._id.toString(),
    cnpj: doc.cnpj,
    status: doc.status,

    razaoSocial: data.razao_social || "-",
    nomeFantasia: data.nome_fantasia || "-",

    municipio: data.municipio || "-",
    uf: data.uf || "-",

    situacao: data.descricao_situacao_cadastral || "-",

    createdAt: doc.createdAt?.toISOString().slice(0, 10),
    processedAt: doc.processedAt?.toISOString().slice(0, 10),
  };
}

type Row = {
  id: string;
  cnpj: string;
  status: string;
  razaoSocial: string;
  nomeFantasia: string;
  municipio: string;
  uf: string;
  situacao: string;
  createdAt?: string;
  processedAt?: string;
};

export function CnpjTable({ rows }: { rows: Row[] }) {
  return (
    <div className="overflow-x-auto border rounded">
      <table className="w-full text-sm">
        <thead className="bg-zinc-100">
          <tr>
            <Th>CNPJ</Th>
            <Th>Status</Th>
            <Th>Razão Social</Th>
            <Th>Fantasia</Th>
            <Th>Cidade</Th>
            <Th>UF</Th>
            <Th>Situação</Th>
            <Th>Criado</Th>
            <Th>Processado</Th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-t">
              <Td>{row.cnpj}</Td>
              <Td>
                <StatusBadge status={row.status} />
              </Td>
              <Td>{row.razaoSocial}</Td>
              <Td>{row.nomeFantasia}</Td>
              <Td>{row.municipio}</Td>
              <Td>{row.uf}</Td>
              <Td>{row.situacao}</Td>
              <Td>{row.createdAt}</Td>
              <Td>{row.processedAt}</Td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Th({ children }: { children: React.ReactNode }) {
  return (
    <th className="px-3 py-2 text-left font-medium text-zinc-700">
      {children}
    </th>
  );
}

function Td({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-3 py-2 whitespace-nowrap">
      {children}
    </td>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    pending: "bg-zinc-200 text-zinc-800",
    active: "bg-emerald-100 text-emerald-700",
    closed: "bg-red-100 text-red-700",
    recovery: "bg-yellow-100 text-yellow-800",
    "not-found": "bg-zinc-300 text-zinc-700",
  };

  return (
    <span
      className={`px-2 py-0.5 rounded text-xs font-medium ${
        map[status] || "bg-zinc-200"
      }`}
    >
      {status}
    </span>
  );
}

import { CnpjTable } from "@/components/table";
import { connectMongo } from "@/lib/mongodb";
import { CnpjModel } from "@/models/Cnpj";
import { parseCnpj } from "@/utils/parse";


const PAGE_SIZE = 30;

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function CnpjsPage({ searchParams }: Props) {
  const { page } = await searchParams;

  const currentPage = Math.max(Number(page) || 1, 1);
  const skip = (currentPage - 1) * PAGE_SIZE;

  await connectMongo();

  const [items, total] = await Promise.all([
    CnpjModel.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(PAGE_SIZE)
      .lean(),

    CnpjModel.countDocuments(),
  ]);

  const rows = items.map(parseCnpj);
  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-xl font-semibold">CNPJs</h1>

      <CnpjTable rows={rows} />

      <Pagination page={currentPage} totalPages={totalPages} />
    </main>
  );
}

function Pagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  return (
    <div className="flex gap-2 items-center text-sm">
      {page > 1 && (
        <a
          href={`/cnpjs?page=${page - 1}`}
          className="px-3 py-1 border rounded"
        >
          Anterior
        </a>
      )}

      <span>
        Página {page} de {totalPages}
      </span>

      {page < totalPages && (
        <a
          href={`/cnpjs?page=${page + 1}`}
          className="px-3 py-1 border rounded"
        >
          Próxima
        </a>
      )}
    </div>
  );
}

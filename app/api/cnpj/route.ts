import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongodb";
import { CnpjModel } from "@/models/Cnpj";

export async function POST(req: Request) {
  try {
    const { cnpj } = await req.json();

    if (!cnpj) {
      return NextResponse.json(
        { message: "CNPJ é obrigatório" },
        { status: 400 }
      );
    }

    const normalizedCnpj = cnpj.replace(/\D/g, "");

    if (normalizedCnpj.length !== 14) {
      return NextResponse.json(
        { message: "CNPJ inválido" },
        { status: 400 }
      );
    }

    await connectMongo();

    await CnpjModel.create({
      cnpj: normalizedCnpj,
      // status será automaticamente "PENDING"
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    // Evita erro feio de duplicidade
    if (err.code === 11000) {
      return NextResponse.json(
        { message: "CNPJ já cadastrado" },
        { status: 409 }
      );
    }

    console.error(err);
    return NextResponse.json(
      { message: "Erro interno" },
      { status: 500 }
    );
  }
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  async function handleSubmit(
    e: React.FormEvent,
  ) {
    e.preventDefault();

    try {
      const data = await login(
        email,
        password,
      );

      localStorage.setItem(
        "token",
        data.accessToken,
      );

      router.push("/dashboard");
    } catch (error: any) {
        console.log(error);
        console.log(error.response?.data);

        alert(
            error.response?.data?.message ||
            "Erro ao fazer login"
        );
        }
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-80"
      >
        <h1 className="text-2xl font-bold">
          API Sentinel
        </h1>

        <input
          className="border p-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          className="border p-2 rounded"
          placeholder="Senha"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="bg-black text-white p-2 rounded"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
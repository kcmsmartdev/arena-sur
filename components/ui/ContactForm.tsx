"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import Link from "next/link";

import { LuChevronDown } from "react-icons/lu";

type Status = "idle" | "sending" | "success" | "error";
type FieldName = "nombre" | "correo" | "telefono" | "mensaje" | "privacidad";
type Errors = Partial<Record<FieldName, string>>;

const FIELD_ORDER: FieldName[] = [
  "nombre",
  "correo",
  "telefono",
  "mensaje",
  "privacidad",
];

const services = [
  "Compra y venta de minerales",
  "Acopio de minerales",
  "Procesamiento de minerales",
  "Otro",
];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[+\d\s()-]{7,}$/;

function validate(data: FormData): Errors {
  const get = (key: string) => String(data.get(key) ?? "").trim();
  const errors: Errors = {};

  if (get("nombre").length < 2) errors.nombre = "Escribe tu nombre.";
  if (!emailRe.test(get("correo")))
    errors.correo = "Escribe un correo válido.";
  if (get("telefono") && !phoneRe.test(get("telefono")))
    errors.telefono = "Revisa el número de teléfono.";
  if (get("mensaje").length < 10)
    errors.mensaje = "Cuéntanos un poco más (mínimo 10 caracteres).";
  if (data.get("privacidad") !== "on")
    errors.privacidad = "Debes aceptar la política de privacidad.";

  return errors;
}

const fieldClass =
  "w-full rounded-2xl border-2 border-primary/25 bg-white-warm px-4 py-3 font-body text-base text-dark transition-colors duration-200 ease-out placeholder:text-dark/60 hover:border-primary/50 focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-invalid:border-red-700 motion-reduce:transition-none";

function Field({
  id,
  label,
  optional,
  error,
  children,
}: {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-body text-sm font-semibold text-dark">
        {label}
        {optional && (
          <span className="font-normal text-dark/70"> (opcional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="font-body text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const found = validate(data);
    setErrors(found);

    const firstInvalid = FIELD_ORDER.find((name) => found[name]);
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      // TODO: conecta con tu backend (route handler, server action, Resend, etc.)
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!res.ok) throw new Error("Error al enviar");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-4xl bg-white p-8 lg:p-10"
      >
        <h2 className="font-heading text-3xl font-bold tracking-tight text-primary">
          Mensaje enviado
        </h2>
        <p className="max-w-md font-body text-base leading-relaxed text-dark/80">
          Gracias por escribirnos. Nuestro equipo se pondrá en contacto contigo.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 rounded-4xl border-2 border-primary px-6 py-3 font-body text-sm font-semibold text-primary transition-[background-color,color,transform] duration-200 ease-out hover:bg-primary hover:text-white-warm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary active:scale-[0.97] motion-reduce:transition-none"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const describedBy = (name: FieldName) =>
    errors[name] ? `${name}-error` : undefined;
  const invalid = (name: FieldName) => (errors[name] ? true : undefined);

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-busy={status === "sending"}
      className="flex flex-col gap-6 rounded-4xl bg-white p-6 sm:p-8 lg:p-10"
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Field id="nombre" label="Nombre completo" error={errors.nombre}>
          <input
            id="nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            required
            aria-invalid={invalid("nombre")}
            aria-describedby={describedBy("nombre")}
            className={fieldClass}
          />
        </Field>

        <Field id="empresa" label="Empresa" optional>
          <input
            id="empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            className={fieldClass}
          />
        </Field>

        <Field id="correo" label="Correo electrónico" error={errors.correo}>
          <input
            id="correo"
            name="correo"
            type="email"
            autoComplete="email"
            required
            aria-invalid={invalid("correo")}
            aria-describedby={describedBy("correo")}
            className={fieldClass}
          />
        </Field>

        <Field
          id="telefono"
          label="Teléfono o WhatsApp"
          optional
          error={errors.telefono}
        >
          <input
            id="telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            aria-invalid={invalid("telefono")}
            aria-describedby={describedBy("telefono")}
            className={fieldClass}
          />
        </Field>
      </div>

      <Field id="servicio" label="Servicio de interés" optional>
        <div className="relative">
          <select
            id="servicio"
            name="servicio"
            defaultValue=""
            className={`${fieldClass} appearance-none pr-12`}
          >
            <option value="">Selecciona una opción</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          <LuChevronDown
            aria-hidden
            className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-primary"
          />
        </div>
      </Field>

      <Field id="mensaje" label="Mensaje" error={errors.mensaje}>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          aria-invalid={invalid("mensaje")}
          aria-describedby={describedBy("mensaje")}
          className={`${fieldClass} resize-y`}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <label className="flex items-start gap-3 font-body text-sm leading-relaxed text-dark/80">
          <input
            type="checkbox"
            name="privacidad"
            aria-invalid={invalid("privacidad")}
            aria-describedby={describedBy("privacidad")}
            className="mt-0.5 size-5 shrink-0 accent-primary"
          />
          <span>
            He leído y acepto la{" "}
            <Link
              href="/politica-de-privacidad"
              className="font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4"
            >
              política de privacidad
            </Link>
            .
          </span>
        </label>
        {errors.privacidad && (
          <p
            id="privacidad-error"
            className="font-body text-sm text-red-700"
          >
            {errors.privacidad}
          </p>
        )}
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-2xl border-2 border-red-700 px-4 py-3 font-body text-sm text-red-700"
        >
          No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por
          WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-4xl border-2 border-footer bg-accent px-8 py-4 font-body text-base font-semibold text-footer transition-[background-color,transform] duration-200 ease-out hover:bg-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-footer active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none sm:w-fit"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>
    </form>
  );
}
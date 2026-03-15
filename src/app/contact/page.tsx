"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+216 23 456 789",
    href: "tel:+21623456789",
  },
  {
    icon: Mail,
    title: "Email",
    value: "nextconsulttn@gmail.com",
    href: "mailto:nextconsulttn@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value:
      "Nouveau Club, 7 Rue du Royaume d'Arabie Saoudite, Tunis, Tunisie",
    href: null,
  },
];

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email.";
    }
    if (formData.phone && !/^[+\d\s()-]{7,}$/.test(formData.phone)) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (!formData.message.trim()) errs.message = "Message is required.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Where to <span className="text-green-400">Find Us</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Have a question or want to get in touch? We&apos;d love to hear from
            you.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          {/* Contact Info Cards */}
          <div className="mb-16 grid gap-6 sm:grid-cols-3">
            {contactInfo.map((info) => (
              <Card key={info.title} className="border-0 bg-slate-50 shadow-sm">
                <CardContent className="flex flex-col items-center gap-3 pt-2 text-center">
                  <div className="flex size-12 items-center justify-center rounded-full bg-green-50">
                    <info.icon className="size-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {info.title}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-base text-slate-600 transition-colors hover:text-green-600"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-base text-slate-600">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Send Us a Message
              </h2>
              <p className="mt-2 text-base text-slate-600">
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center gap-4 rounded-xl bg-green-50 p-10 text-center">
                  <CheckCircle className="size-12 text-green-600" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Message Sent!
                  </h3>
                  <p className="text-base text-slate-600">
                    Thank you for reaching out. We&apos;ll get back to you
                    shortly.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", phone: "", message: "" });
                    }}
                    className="mt-2 bg-green-600 text-white hover:bg-green-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      aria-invalid={!!errors.name}
                      className="mt-1.5 h-11"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      aria-invalid={!!errors.email}
                      className="mt-1.5 h-11"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+216 XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      aria-invalid={!!errors.phone}
                      className="mt-1.5 h-11"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      aria-invalid={!!errors.message}
                      className="mt-1.5"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="h-11 w-full bg-green-600 text-white hover:bg-green-700 sm:w-auto sm:min-w-[160px]"
                  >
                    <Send className="mr-2 size-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Our Location
              </h2>
              <p className="mt-2 text-base text-slate-600">
                Nouveau Club, 7 Rue du Royaume d&apos;Arabie Saoudite, Tunis,
                Tunisie
              </p>
              <div className="mt-8 flex h-80 items-center justify-center rounded-xl bg-slate-100 lg:h-[400px]">
                <div className="text-center">
                  <MapPin className="mx-auto size-10 text-slate-400" />
                  <p className="mt-3 text-sm text-slate-500">
                    Interactive map coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

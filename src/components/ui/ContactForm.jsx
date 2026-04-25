import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion, AnimatePresence } from "framer-motion";

function Form({ onReset }) {
  const [state, handleSubmit] = useForm("mwvazpok");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Booking",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full rounded-lg border border-border bg-bg-elevated px-4 py-3 text-sm text-text-primary placeholder-text-muted transition-all duration-normal focus:border-accent-gold focus:outline-none focus:ring-1 focus:ring-accent-gold";

  return (
    <AnimatePresence mode="wait">
      {state.succeeded ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-accent-gold/30 bg-accent-gold/5 p-8 text-center"
        >
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent-gold/10">
            <svg
              className="h-7 w-7 text-accent-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <h3 className="font-serif text-2xl font-bold">
            Takk for din henvendelse!
          </h3>
          <p className="mt-2 text-text-secondary">
            Vi tar kontakt med deg så snart som mulig.
          </p>
          <button
            onClick={onReset}
            className="mt-6 text-sm text-accent-gold underline underline-offset-4 transition-colors hover:text-accent-gold-light"
          >
            Send en ny melding
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-text-secondary"
              >
                Navn *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ditt navn"
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-text-secondary"
              >
                E-post *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="din@epost.no"
                className={inputClasses}
              />
              <ValidationError
                field="email"
                errors={state.errors}
                className="mt-1 text-sm text-accent-rose-light"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-text-secondary"
              >
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+47"
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-text-secondary"
              >
                Emne *
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className={inputClasses}
              >
                <option value="Booking">Booking</option>
                <option value="Sangtimer">Sangtimer</option>
                <option value="Presse">Presse</option>
                <option value="Annet">Annet</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-text-secondary"
            >
              Melding *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Skriv din melding her..."
              className={`${inputClasses} resize-none`}
            />
            <ValidationError
              field="message"
              errors={state.errors}
              className="mt-1 text-sm text-accent-rose-light"
            />
          </div>

          <ValidationError
            errors={state.errors}
            className="text-sm text-accent-rose-light"
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full rounded-lg bg-gradient-to-r from-accent-gold-dark via-accent-gold to-accent-gold-light px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-bg transition-all duration-normal hover:shadow-lg hover:shadow-accent-gold/20 disabled:opacity-50"
          >
            {state.submitting ? "Sender..." : "Send melding"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

export default function ContactForm() {
  const [formKey, setFormKey] = useState(0);
  return <Form key={formKey} onReset={() => setFormKey((k) => k + 1)} />;
}

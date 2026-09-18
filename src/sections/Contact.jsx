import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useForm, ValidationError } from "@formspree/react";

import { SectionWrapper } from "../hoc";
import cvPdfUrl from "../../Moamen_Alaa_Software_Engineer_CV.pdf?url";

const contactDetails = [
  { label: "Location", value: "Cairo, Egypt", icon: "location" },
  {
    label: "Email",
    value: "moemenatia4@gmail.com",
    href: "mailto:moemenatia4@gmail.com",
    icon: "email",
  },
  {
    label: "Call",
    value: "+20 100 433 1573",
    href: "tel:+201004331573",
    icon: "phone",
  },
  {
    label: "CV",
    value: "Click to download",
    href: cvPdfUrl,
    download: true,
    icon: "download",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/moamen-atia-b5773821a/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/moamen_3laa/",
  },
  {
    label: "GitHub",
    href: "https://github.com/moemen03",
  },
];

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const formspreeFormId = "xzezzzob";

function ContactIcon({ name }) {
  const paths = {
    location: (
      <>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
    phone: (
      <path d="M8.5 3.5 6.2 4.7c-1 .5-1.4 1.6-1 2.6 2.1 5.2 6.3 9.4 11.5 11.5 1 .4 2.1 0 2.6-1l1.2-2.3-4.2-2-1.2 1.8c-2.8-1.4-5-3.6-6.4-6.4l1.8-1.2-2-4.2Z" />
    ),
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 20h14" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

ContactIcon.propTypes = {
  name: PropTypes.oneOf(["location", "email", "phone", "download"]).isRequired,
};

function ContactDetail({ detail, index }) {
  const content = (
    <>
      <span className={`contact-detail-icon contact-detail-icon--${index}`}>
        <ContactIcon name={detail.icon} />
      </span>
      <span className="contact-detail-copy">
        <strong>{detail.label}</strong>
        <span>{detail.value}</span>
      </span>
    </>
  );

  if (!detail.href) {
    return <div className="contact-detail">{content}</div>;
  }

  return (
    <a
      className="contact-detail"
      href={detail.href}
      download={detail.download || undefined}
    >
      {content}
    </a>
  );
}

ContactDetail.propTypes = {
  detail: PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    href: PropTypes.string,
    download: PropTypes.bool,
    icon: PropTypes.oneOf(["location", "email", "phone", "download"]).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [state, submitToFormspree, resetFormspree] = useForm(formspreeFormId);

  useEffect(() => {
    if (state.succeeded) {
      setForm(initialForm);
    }
  }, [state.succeeded]);

  const handleChange = ({ target: { name, value } }) => {
    if (state.succeeded) {
      resetFormspree();
    }

    setForm((current) => ({ ...current, [name]: value }));
  };

  const status = state.succeeded
    ? {
        type: "success",
        message: "Message sent. Thanks — I’ll get back to you soon.",
      }
    : state.errors
      ? {
          type: "error",
          message: "The message could not be sent. Please check the form and try again.",
        }
      : state.submitting
        ? { type: "loading", message: "Sending your message…" }
        : { type: "idle", message: "" };

  return (
    <div className="contact-showcase section-glass">
      <div className="contact-intro">
        <p className="contact-eyebrow"><span /> Contact</p>
        <h2>
          Let&apos;s make something <em>amazing</em> together.
        </h2>
        <p className="contact-invitation">
          Start by <a href="mailto:moemenatia4@gmail.com">saying hi</a>
        </p>

        <div className="contact-details" aria-label="Contact details">
          {contactDetails.map((detail, index) => (
            <ContactDetail key={detail.label} detail={detail} index={index} />
          ))}
        </div>

        <nav className="contact-socials" aria-label="Social profiles">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{social.label}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          ))}
        </nav>
      </div>

      <form className="contact-form" onSubmit={submitToFormspree}>
        <div className="contact-form-row">
          <label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              autoComplete="name"
              maxLength={80}
              required
            />
            <ValidationError
              className="contact-field-error"
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </label>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              autoComplete="email"
              maxLength={160}
              required
            />
            <ValidationError
              className="contact-field-error"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </label>
        </div>

        <label>
          <span>Subject</span>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            maxLength={140}
            required
          />
          <ValidationError
            className="contact-field-error"
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </label>

        <label>
          <span>Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={7}
            maxLength={5000}
            required
          />
          <ValidationError
            className="contact-field-error"
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </label>

        <label className="contact-honeypot" aria-hidden="true">
          Website
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>

        <button
          className="contact-submit"
          type="submit"
          disabled={state.submitting}
        >
          <span>{state.submitting ? "Sending…" : "Send Message"}</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m5 12 14-7-5 14-2.5-5.5L5 12Z" />
          </svg>
        </button>

        <p
          className={`contact-status contact-status--${status.type}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      </form>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");

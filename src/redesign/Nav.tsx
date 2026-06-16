import { useEffect, useState } from "react";
import "./Nav.scss";

const links = [
  { href: "#about",   label: "Художник" },
  { href: "#works",   label: "Работы" },
  { href: "#series",  label: "Серии" },
  { href: "#process", label: "Процесс" },
  { href: "#contact", label: "Контакты" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("is-menu-open", open);
    return () => document.body.classList.remove("is-menu-open");
  }, [open]);

  // Close the overlay on hash change / link click.
  const close = () => setOpen(false);

  return (
    <>
      <nav className="nav" aria-label="Основное">
        <a className="nav__logo" href="#hero" onClick={close}>
          С. Юрьева
        </a>

        <ul className="nav__list">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a className="nav__cta" href="#contact">Написать</a>

        <button
          className="nav__burger"
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="nav-overlay"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>

      <div id="nav-overlay" className="nav-overlay" role="dialog" aria-modal="true">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
      </div>
    </>
  );
};

export { Nav };

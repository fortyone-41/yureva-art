import HeroImage from "../images/galery/scenery/oil/13.jpg";
import "./Contact.scss";

/**
 * CONTACT — закрывает скролл-петлю.
 * Снизу секции — та же иконическая картина, что и в hero, но с другой
 * стороны: вверху бумага, внизу проступает живопись.
 *
 * Контакты взяты из существующего src/pages/header/contacts/contacts.tsx —
 * это реальные адреса из репозитория, не выдумка.
 */

// Реальные ссылки из src/pages/header/contacts/contacts.tsx
const IG_URL = "https://instagram.com/yureva_painter";
const VK_URL = "https://vk.com/yureva_sv1968";
const WA_URL = "https://api.whatsapp.com/send/?phone=79811890747";
// Телефон вытащен из WA-ссылки выше — отображаем человекочитаемо.
const PHONE_DISPLAY = "+7 981 189-07-47";
const PHONE_HREF = "tel:+79811890747";

const Contact = () => {
  const year = new Date().getFullYear();

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__bg" aria-hidden="true">
        <img src={HeroImage} alt="" loading="lazy" decoding="async" />
      </div>

      <div className="contact__inner">
        <p className="contact__eyebrow">Контакты</p>

        <h2 id="contact-title" className="contact__heading">
          <span>До</span>
          <span>встречи</span>
        </h2>

        <div className="contact__cards">
          <a className="contact__email" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>

          <p className="contact__note">
            принимаю заказы, приглашения на выставки и записи на мастер-классы
          </p>

          <ul className="contact__socials" aria-label="Соцсети">
            <li>
              <a href={VK_URL} aria-label="ВКонтакте" target="_blank" rel="noreferrer">
                {/* VK */}
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3 7c.3 6 3.4 9.5 8.5 9.5h.3v-3.4c1.9.2 3.3 1.5 3.9 3.4h2.7c-.7-2.8-2.7-4.3-4-4.9 1.3-.8 3.1-2.6 3.5-5.6h-2.4c-.5 2.4-2.1 4.1-3.7 4.4V7H9.4v3c-1.6-.4-3.7-2.3-3.8-3z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href={IG_URL} aria-label="Instagram" target="_blank" rel="noreferrer">
                {/* Instagram */}
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17" cy="7" r="1" fill="currentColor" />
                </svg>
              </a>
            </li>
            <li>
              <a href={WA_URL} aria-label="WhatsApp" target="_blank" rel="noreferrer">
                {/* WhatsApp */}
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M20 12a8 8 0 0 1-12 6.9L4 20l1.2-3.8A8 8 0 1 1 20 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 9.5c.2 2 1.6 3.4 3.5 3.7l.8-1 1.8 1c-.4 1-1.5 1.5-2.6 1.2-2.2-.5-3.7-2-4.2-4.2-.3-1.1.2-2.2 1.2-2.6l1 1.8-1 .8z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact__foot">
          <span className="contact__foot-name">Светлана Юрьева</span>
          <span>© {year}</span>
        </div>
      </div>
    </section>
  );
};

export { Contact };

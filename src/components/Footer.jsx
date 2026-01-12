import React from "react";
import styled from "styled-components";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* MARKA BLOĞU */}
        <FooterSection className="brand-section">
          <FooterLogo>NEOS</FooterLogo>
          <FooterDesc>
            Adımlarınızda konforu hissedin. Teknoloji ve estetiğin kusursuz birleşimi.
          </FooterDesc>

          <SocialIcons>
            <SocialIcon
              href="https://www.instagram.com/neos_ayakkabi/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </SocialIcon>
          </SocialIcons>
        </FooterSection>

        {/* SAYFALAR */}
        <FooterSection>
          <FooterTitle>Keşfet</FooterTitle>
          <FooterLink href="/">Anasayfa</FooterLink>
          <FooterLink href="/hikayemiz">Hikayemiz</FooterLink>
          <FooterLink href="/tasarim">Tasarım Felsefemiz</FooterLink>
          <FooterLink href="/koleksiyon">Koleksiyon</FooterLink>
          <FooterLink href="/iletisim">İletişim</FooterLink>
        </FooterSection>

        {/* İLETİŞİM BİLGİLERİ */}
        <FooterSection className="contact-section">
          <FooterTitle>İletişim</FooterTitle>

          <ContactItem>
            <Mail />
            <span>ayakkabineos@gmail.com</span>
          </ContactItem>

          <ContactItem>
            <Phone />
            <span>0 (232) 436 45 27</span>
          </ContactItem>

          <ContactItem>
            <Phone />
            <span>0 (532) 200 39 78 – 0 (549) 600 92 70</span>
          </ContactItem>

          <ContactItem>
            <MapPin />
            <span>
              Egemenlik Mah. 6134 Sokak No:2/C
              <br />
              Bornova / İzmir
            </span>
          </ContactItem>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>© 2026 Neos Ayakkabı. Tüm hakları saklıdır.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

/* ============ STYLED COMPONENTS ============ */

const FooterContainer = styled.footer`
  background: rgba(232, 223, 213, 0.9);
  color: #2a2a2a;
  padding: 36px 0 0;
  margin-top: 60px;

  @media (max-width: 640px) {
    padding: 26px 0 0;
    margin-top: 44px;
  }
`;

const FooterContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 5%;
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 992px) {
    grid-template-columns: 1.4fr 1fr;
    gap: 18px;
  }

  /* MOBİL: TEK KOLON, SIKI */
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 0 4%;
    margin-bottom: 18px;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  &.brand-section p {
    max-width: 240px;
    line-height: 1.35;
  }

  /* MOBİLDE İLETİŞİM 2x2 GRID */
  &.contact-section {
    @media (max-width: 640px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 10px;
      row-gap: 6px;
      align-items: flex-start;

      h4 {
        grid-column: 1 / -1;
        margin-bottom: 2px;
      }
    }
  }
`;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: 900;
  color: #1a1a1a;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
`;

const FooterDesc = styled.p`
  color: #3a3a3a;
  font-size: 0.84rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 4px;
`;

const SocialIcon = styled.a`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  transition: all 0.25s ease;
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover {
    background: #8b7355;
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

const FooterTitle = styled.h4`
  font-size: 0.85rem;
  font-weight: 800;
  color: #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 2px;
`;

const FooterLink = styled.a`
  color: #3a3a3a;
  text-decoration: none;
  font-size: 0.8rem;
  line-height: 1.2;
  padding: 0;
  width: fit-content;
  transition: all 0.25s ease;

  &:hover {
    color: #1a1a1a;
    transform: translateX(4px);
  }

  &:active {
    transform: translateX(2px) scale(0.98);
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;
  color: #3a3a3a;
  font-size: 0.8rem;
  line-height: 1.2;

  svg {
    color: #8b7355;
    width: 14px;
    height: 14px;
    flex-shrink: 0;
    margin-top: 1px;
  }

  span {
    word-break: break-word;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  padding: 14px 0;
  text-align: center;

  p {
    color: #3a3a3a;
    font-size: 0.75rem;
    opacity: 0.75;
  }
`;

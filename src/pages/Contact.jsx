import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Contact = () => {
  return (
    <PageWrapper>
      <Navbar />

      <ContactSection>
        <HeaderArea>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            BİZİMLE İLETİŞİME GEÇİN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Technical + Cozy + Fashion felsefemizle her adımda yanınızdayız. <br />
            Sorularınız ve geri bildirimleriniz için bize her zaman ulaşabilirsiniz.
          </motion.p>
        </HeaderArea>

        <ContentGrid>
          {/* SOL BLOK – İLETİŞİM KARTLARI & HARİTA */}
          <LeftColumn>
            <InfoCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <InfoRow>
                <IconBubble>
                  <Mail size={18} />
                </IconBubble>
                <div>
                  <Label> DESTEK</Label>
                  <Value>neosayakkabi@gmail.com</Value>
                </div>
              </InfoRow>

              <Divider />

              <InfoRow>
                <IconBubble>
                  <Phone size={18} />
                </IconBubble>
                <div>
                  <Label>TELEFON</Label>
                  <Value>0 (232) 436 45 27</Value>
                </div>
              </InfoRow>

              <Divider />

              <InfoRow>
                <IconBubble>
                  <Phone size={18} />
                </IconBubble>
                <div>
                  <Label>GSM</Label>
                  <Value>0 (532) 200 39 78 – 0 (549) 600 92 70</Value>
                </div>
              </InfoRow>

              <Divider />

              <InfoRow>
                <IconBubble>
                  <MapPin size={18} />
                </IconBubble>
                <div>
                  <Label>ATÖLYE &amp; MAĞAZA</Label>
                  <Value>Egemenlik Mah. 6134 Sokak No:2/C</Value>
                  <Value>Bornova / İzmir</Value>
                </div>
              </InfoRow>

              <Divider />

              <InfoRow>
                <IconBubble>
                  <Clock size={18} />
                </IconBubble>
                <div>
                  <Label>ÇALIŞMA SAATLERİ</Label>
                  <Value>Pzt – Cmt: 08:00 – 19:00</Value>
                </div>
              </InfoRow>
            </InfoCard>

            <MapWrapper
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Bornova konumuna yakın bir Google Maps embed (istersen değiştirirsin) */}
              <iframe
                title="Konum"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.523364328996!2d27.23909857572539!3d38.429378571827684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b96338d1423f9b%3A0x9aa61d6824bfd841!2sEgemenlik%2C%206134.%20Sk.%20No%3A2%20D%3Ac%2C%2035070%20Bornova%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1768295610154!5m2!1str!2str"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              <MapBadge
                as="a"
                href="https://maps.google.com/?q=Egemenlik+Mah.+6134+Sokak+No:2%2FC+Bornova+İzmir"

                target="_blank"
                rel="noopener noreferrer"
              >
                KONUMU AÇ
              </MapBadge>

            </MapWrapper>
          </LeftColumn>

          {/* SAĞ BLOK – FORM */}
          <RightColumn
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FormTitle>Mesaj Gönderin</FormTitle>

            <Form
              action="https://formspree.io/f/xreegevg" // <-- buraya kendi Formspree ID'ni gir
              method="POST"
            >
              <FieldGroup>
                <Label>AD SOYAD</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Adınız ve soyadınız"
                  required
                />
              </FieldGroup>

              <FieldGroup>
                <Label>E-POSTA ADRESİ</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="ornek@mail.com"
                  required
                />
              </FieldGroup>



              <FieldGroup>
                <Label>MESAJINIZ</Label>
                <Textarea
                  name="message"
                  rows="5"
                  placeholder="Size nasıl yardımcı olabiliriz?"
                  required
                />
              </FieldGroup>

              <ButtonRow>
                <SubmitButton type="submit">
                  GÖNDER <span>➝</span>
                </SubmitButton>
              </ButtonRow>

              <SmallText>
                İletişim formu aracılığıyla gönderdiğiniz bilgiler yalnızca size geri
                dönüş yapabilmek için kullanılacaktır.
              </SmallText>
            </Form>
          </RightColumn>
        </ContentGrid>
      </ContactSection>

      <Footer />
    </PageWrapper>
  );
};

export default Contact;


/* ========== STYLED COMPONENTS ========== */

const PageWrapper = styled.div`
  width: 100%;
  background: #f7f3f0;
`;
const MapBadge = styled.a`
  position: absolute;
  left: 18px;
  bottom: 16px;
  background: rgba(17, 24, 39, 0.85);
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(17, 24, 39, 1);
    transform: translateY(-1px);
  }
`;

const ContactSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 150px 8% 110px;


  @media (max-width: 992px) {
    padding: 180px 6% 90px;
  }
`;

const HeaderArea = styled.div`
  text-align: left;
  margin-bottom: 48px;

  h1 {
    font-size: clamp(2.1rem, 4vw, 2.8rem);
    font-weight: 900;
    color: #111827;
    letter-spacing: 0.04em;
    margin-bottom: 10px;
  }

  p {
    color: #6b7280;
    font-size: 0.98rem;
    line-height: 1.7;
    max-width: 520px;
  }

  @media (max-width: 768px) {
    text-align: center;

    p {
      margin: 0 auto;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
  gap: 32px;
  align-items: flex-start;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const InfoCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 24px;
  padding: 28px 26px;
  box-shadow: 0 10px 35px rgba(15, 23, 42, 0.06);
  border: 1px solid #f1f5f9;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`;

const IconBubble = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: #faf5ef;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b5a48d;
  flex-shrink: 0;
`;

const Label = styled.div`
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #9ca3af;
  margin-bottom: 4px;
`;

const Value = styled.div`
  font-size: 0.9rem;
  color: #111827;
  font-weight: 600;
`;

const Divider = styled.div`
  height: 1px;
  background: #f3f4f6;
  margin: 16px 0;
`;

const MapWrapper = styled(motion.div)`
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 10px 35px rgba(15, 23, 42, 0.08);
  border: 1px solid #e5e7eb;

  iframe {
    border: 0;
    width: 100%;
    height: 260px;

    @media (max-width: 480px) {
      height: 220px;
    }
  }
`;



const RightColumn = styled(motion.div)`
  background: #ffffff;
  border-radius: 24px;
  padding: 28px 26px 30px;
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.07);
  border: 1px solid #f1f5f9;

  @media (max-width: 768px) {
    padding: 24px 20px 26px;
  }
`;

const FormTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 18px;
  color: #111827;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const InputBase = styled.input`
  width: 100%;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  padding: 12px 14px;
  font-size: 0.92rem;
  outline: none;
  background: #f9fafb;
  transition: all 0.2s ease;

  &:focus {
    border-color: #b5a48d;
    box-shadow: 0 0 0 1px rgba(181, 164, 141, 0.3);
    background: #ffffff;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Input = styled(InputBase).attrs({ as: "input" })``;

const Select = styled.select`
  ${InputBase.componentStyle.rules}
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, #9ca3af 50%),
    linear-gradient(135deg, #9ca3af 50%, transparent 50%);
  background-position: calc(100% - 18px) calc(50% - 3px),
    calc(100% - 13px) calc(50% + 3px);
  background-size: 7px 7px, 7px 7px;
  background-repeat: no-repeat;
`;

const Textarea = styled.textarea`
  ${InputBase.componentStyle.rules}
  resize: vertical;
  min-height: 120px;
`;

const ButtonRow = styled.div`
  margin-top: 8px;
`;

const SubmitButton = styled.button`
  width: 100%;
  border-radius: 999px;
  border: none;
  background: #b58b5a;
  color: #ffffff;
  padding: 13px 22px;
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.25s ease;

  span {
    font-size: 1.05rem;
  }

  &:hover {
    background: #9a7347;
    transform: translateY(-1px);
    box-shadow: 0 12px 30px rgba(148, 98, 52, 0.25);
  }

  &:active {
    transform: translateY(0px) scale(0.99);
    box-shadow: none;
  }
`;

const SmallText = styled.p`
  margin-top: 10px;
  font-size: 0.75rem;
  color: #9ca3af;
  line-height: 1.5;
`;

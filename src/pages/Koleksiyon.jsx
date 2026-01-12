// src/pages/Koleksiyon.jsx
import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/** Ortak resim component'i – hepsi lazy yüklenecek */
const NeosImage = ({ className, style, ...rest }) => (
  <img
    loading="lazy"
    decoding="async"
    className={className}
    style={{ display: "block", ...style }}
    {...rest}
  />
);

const Koleksiyon = () => {
  // Buradaki diziye sadece kendi resim path'lerini ve metinlerini uyarlaman yeterli.
  const products = [
    {
      id: 1,
      name: "Çocuk Siyah Termal Bot",
      desc: "Gün boyu sıcaklık ve hafiflik için tasarlandı.",
      image: "/images/koleksiyon1.png", // kendi ismini kullan
    },
    {
      id: 2,
      name: "Kadın Kahverengi NEOS",
      desc: "Şehir stiline uyum sağlayan, kaymaz tabanlı model.",
      image: "/images/koleksiyon2.png",
    },
    {
      id: 3,
      name: "Krem Cozy Model",
      desc: "Yumuşak iç astarıyla maksimum konfor.",
      image: "/images/koleksiyon3.png",
    },
    // İstersen daha fazla ürün ekle
  ];

  return (
    <Page>
      <Navbar />

      <Main>
        <Header>
          <Overline>ÖNE ÇIKAN MODELLER</Overline>
          <Title>NEOS KOLEKSİYONU</Title>
          <Subtitle>
            Her adımda konfor, her detayda mühendislik. Farklı hava koşulları
            ve stiller için tasarlanan seçili NEOS modelleri.
          </Subtitle>
        </Header>

        <Grid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ImageFrame>
                {/* Bot görseli – kırpmasın diye contain + alt tarafa biraz ağırlık */}
                <BootImage
                  src={product.image}
                  alt={product.name}
                />
              </ImageFrame>

              <CardBody>
                <ProductName>{product.name}</ProductName>
                <ProductDesc>{product.desc}</ProductDesc>
              </CardBody>
            </ProductCard>
          ))}
        </Grid>
      </Main>

      <Footer />
    </Page>
  );
};

export default Koleksiyon;

/* ================== STYLES ================== */

const Page = styled.div`
  background: #fdfaf7;
  min-height: 100vh;
`;

const Main = styled.main`
  padding: 120px 10% 90px;

  @media (max-width: 768px) {
    padding: 100px 6% 70px;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 48px;
`;

const Overline = styled.div`
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #b98c5b;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Title = styled.h1`
  font-size: clamp(2.1rem, 4vw, 2.8rem);
  font-weight: 900;
  letter-spacing: 0.12em;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  max-width: 640px;
  margin: 0 auto;
  font-size: 0.98rem;
  line-height: 1.8;
  color: #6b7280;
`;

/* GRID */

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 34px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;


const ProductCard = styled.article`
  background: #f5ede0;
  border-radius: 32px;
  padding: 20px 18px 22px;
  box-shadow: 0 14px 40px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
`;

/* Dış çerçeve (gördüğün krem + noktalı yapı) */
const ImageFrame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2 / 3;   /* daha editorial */
  border-radius: 26px;
  background: #f9f5ee;
  overflow: hidden;
  padding: 12px;
  margin-bottom: 16px;

  &::before {
    content: "";
    position: absolute;
    inset: 10px;
    border-radius: 20px;
    border: 2px dotted rgba(148, 124, 96, 0.35);
    pointer-events: none;
  }
`;


/* Asıl bot görseli */
const BootImage = styled(NeosImage)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 85%;
`;


/* Kart metinleri */

const CardBody = styled.div`
  margin-top: 18px;
`;

const ProductName = styled.h3`
  font-size: 1rem;
  font-weight: 800;
  color: #1f2933;
  margin-bottom: 6px;
`;

const ProductDesc = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.6;
`;

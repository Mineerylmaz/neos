import React, { useState } from "react";
import styled from "styled-components";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        {/* LOGO */}
        <Logo to="/">
          <LogoImg src="/images/navbar.webp" alt="NEOS" />

        </Logo>

        <NavLinks className={isOpen ? "active" : ""}>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            Anasayfa
          </NavLink>
          <NavLink to="/hikayemiz" onClick={() => setIsOpen(false)}>
            Hikayemiz
          </NavLink>
          <NavLink to="/tasarim" onClick={() => setIsOpen(false)}>
            Tasarım Felsefemiz
          </NavLink>
          <NavLink to="/koleksiyon" onClick={() => setIsOpen(false)}>
            Koleksiyon
          </NavLink>
          <NavLink to="/iletisim" onClick={() => setIsOpen(false)}>
            İletişim
          </NavLink>
        </NavLinks>

        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MenuButton>
      </NavContainer>

      {isOpen && <Overlay onClick={() => setIsOpen(false)} />}
    </Nav>
  );
};

export default Navbar;

/* ============ STYLED COMPONENTS ============ */

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: auto;
  background: rgba(232, 223, 213, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(181, 164, 141, 0.2);
  box-shadow: 0 2px 16px rgba(139, 115, 85, 0.06);
`;

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 8px 6%;           /* 14px → 8px  => navbar şişmesin */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 968px) {
    padding: 4px 5%;         /* mobile’da daha az padding */
  }
`;

/* LOGO GÖRSELİ */
const LogoImg = styled.img`
  height: 40px;              /* desktop için makul boy */
  width: auto;
  object-fit: contain;
  display: block;

  @media (max-width: 968px) {
    height: 48px;            /* mobile’da bilinçli olarak daha büyük */
  }

  @media (max-width: 520px) {
    height: 52px;            /* çok küçük ekranlarda biraz daha büyüsün */
  }
`;


/* LOGO WRAPPER */
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`;

/* LOGO GÖRSELİ */


/* İstersen yazılı kısmı tamamen kaldırabilirsin */
const LogoText = styled.span`
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #1a1a1a;

  @media (max-width: 968px) {
    font-size: 0.95rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 36px;
  align-items: center;

  @media (max-width: 968px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;
    max-width: 320px;
    height: 100vh;
    background: linear-gradient(135deg, #e8dfd5 0%, #d4c4b0 100%);
    flex-direction: column;
    padding: 100px 30px 40px;
    gap: 24px;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: -5px 0 30px rgba(0, 0, 0, 0.15);
    overflow-y: auto;

    &.active {
      transform: translateX(0);
    }
  }

  @media (max-width: 480px) {
    width: 85%;
  }
`;

const NavLink = styled(Link)`
  color: #3a3a3a;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  position: relative;
  padding: 3px 0;
  transition: color 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: #8b7355;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #8b7355;
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 968px) {
    font-size: 1.1rem;
    width: 100%;
    padding: 12px 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.25);
    text-align: center;

    &::after {
      display: none;
    }

    &:hover {
      background: rgba(139, 115, 85, 0.2);
      transform: translateX(4px);
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: #1a1a1a;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.25s ease;
  z-index: 1001;

  &:hover {
    background: rgba(139, 115, 85, 0.25);
  }

  @media (max-width: 968px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Overlay = styled.div`
  @media (max-width: 968px) {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

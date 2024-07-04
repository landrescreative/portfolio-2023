import React from "react";
import styled from "styled-components";
import Contact from "../../components/ui/sections/Contact";
import { useTranslation } from "react-i18next";

// Images
import mockup from "../../components/assets/veravitalize.webp";
import mockup2 from "../../components/assets/mockup-vera.webp";

const CaseStudyTemplate = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Content>
        <Section>
          <SectionTitle> {t("veraVitalizeMision")} </SectionTitle>
          <ProjectDescription>{t("veraVitalizeMisionP")}</ProjectDescription>
        </Section>
        <ImageBetweenSections src={mockup2} alt="Mockup" />

        <Section>
          <SectionTitle>{t("veraVitalizeObjetive")}</SectionTitle>
          <ProjectGoals>{t("veraVitalizeObjetiveP")}</ProjectGoals>
        </Section>
        <ImageBetweenSections src={mockup2} alt="Mockup 2" />

        <Section>
          <SectionTitle>{t("veraVitalizeProcess")}</SectionTitle>
          <DesignProcess>{t("veraVitalizeProcessP")}</DesignProcess>
        </Section>
        <ImageBetweenSections src={mockup} alt="Mockup" />

        <Section>
          <SectionTitle>{t("veraVitalizeResult")}</SectionTitle>
          <ProjectResults>{t("veraVitalizeResultP")}</ProjectResults>
        </Section>
        <ImageBetweenSections src={mockup2} alt="Mockup 2" />

        <Section>
          <SectionTitle>Wiframes & Mockups</SectionTitle>
        </Section>
        <ImageBetweenSections src={mockup2} alt="Mockup 2" />
        {/* Agregar más secciones según sea necesario */}
      </Content>
      <Contact></Contact>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  text-align: center;
  padding: 5rem 0;
  width: 80%;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0;
`;

const ProjectDescription = styled.p`
  font-size: 20px;
  color: #666;
  line-height: 1.5;
`;

const ProjectGoals = styled.p`
  font-size: 20px;
  color: #666;
  line-height: 1.5;
`;

const DesignProcess = styled.p`
  font-size: 20px;
  color: #666;
  line-height: 1.5;
`;

const ImageBetweenSections = styled.img`
  width: 100%;
  aspect-ratio: 16/10;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ProjectResults = styled.p`
  font-size: 20px;
  color: #666;
  line-height: 1.5;
`;

const Testimonial = styled.p`
  font-size: 20px;
  color: #666;
  line-height: 1.5;
`;

const ContactInfo = styled.div`
  margin-top: 40px;
`;

const ContactTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
`;

const ContactDetails = styled.p`
  font-size: 20px;
  color: #666;
  line-height: 1.5;
`;

const ContactEmail = styled.span`
  margin-left: 5px;
  font-weight: 700;
`;

const ContactPhone = styled.span`
  margin-left: 5px;
`;

export default CaseStudyTemplate;

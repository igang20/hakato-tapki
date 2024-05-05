import BigCard from "../components/BigCard/BigCard";
import CardsSection from "../components/CardsSection/CardsSection";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import data from "../data/cards";

export default function SearchVacancy() {
  return(
    <ContentWrapper>
          <CardsSection data={data} />
          <BigCard data={data} />
    </ContentWrapper>
  ) 
}

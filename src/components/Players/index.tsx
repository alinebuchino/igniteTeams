import { Header } from "@components/Header";
import { Container } from "./styles";
import { SubHeader } from "@components/SubHeader";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <SubHeader
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
    </Container>
  );
}

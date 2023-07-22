import { Header } from "@components/Header";
import { Container } from "./styles";
import { SubHeader } from "@components/SubHeader";

export function Groups() {
  return (
    <Container>
      <Header />
      <SubHeader title="Turmas" subtitle="Jogue com a sua turma" />
    </Container>
  );
}

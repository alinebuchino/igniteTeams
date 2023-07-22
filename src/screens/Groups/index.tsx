import { Header } from "@components/Header";
import { Container } from "./styles";
import { SubHeader } from "@components/SubHeader";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />
      <SubHeader title="Turmas" subtitle="Jogue com a sua turma" />

      <GroupCard title="Galera do Ignite" />
    </Container>
  );
}

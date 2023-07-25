import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { SubHeader } from "@components/SubHeader";
import { Button } from "@components/Button";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <SubHeader
          title="Nova turma"
          subtitle="Crie a tuma para adicionar as pessoas"
        />
        <Button title="Criar" />
      </Content>
    </Container>
  );
}

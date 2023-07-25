import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { SubHeader } from "@components/SubHeader";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

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
        <Input />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}

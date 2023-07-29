import { Header } from "@components/Header";
import { Container, Form } from "./styles";
import { SubHeader } from "@components/SubHeader";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <SubHeader
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <Filter title="Time A" />
    </Container>
  );
}

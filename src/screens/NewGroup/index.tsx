import { Header } from "@components/Header";
import { Container, Content, Icon } from "./styles";
import { SubHeader } from "@components/SubHeader";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "@storage/group/groupCreate";
import { Alert } from "react-native";
import { AppError } from "@utils/AppError";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const navigation = useNavigation();

  async function handleNew() {
    try {
      if (group.trim().length === 0) {
        Alert.alert("Nova Turma", "Informe o nome da turma.");
      }
      await groupCreate(group);
      navigation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Turma", error.message);
      } else {
        Alert.alert("Nova Turma", "Não foi possível criar uma nova turma");
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />
        <SubHeader
          title="Nova turma"
          subtitle="Crie a tuma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setGroup} />
        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
}

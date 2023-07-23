import { Header } from "@components/Header";
import { Container } from "./styles";
import { SubHeader } from "@components/SubHeader";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { FlatList } from "react-native";

export function Groups() {
  const [groups, setGroups] = useState(["Galera da Rocket"]);

  return (
    <Container>
      <Header />
      <SubHeader title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
}

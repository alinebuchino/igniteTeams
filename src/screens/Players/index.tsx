import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { SubHeader } from "@components/SubHeader";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayersCard } from "@components/PlayersCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [playes, setPlayes] = useState([]);

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

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{playes.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={playes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayersCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time!" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 70 }, // para conseguir afastar o ultimo elemento do final
          playes.length === 0 && { flex: 1 }, // para conseguir deixar a mensagem do ListEmpty no centro
        ]}
      />

      <Button title="Remover turma" type="SECONDARY" />
    </Container>
  );
}

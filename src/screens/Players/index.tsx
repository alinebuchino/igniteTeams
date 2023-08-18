import { useState } from "react";
import { Alert, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

import { Header } from "@components/Header";
import { SubHeader } from "@components/SubHeader";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { PlayersCard } from "@components/PlayersCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { AppError } from "@utils/AppError";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";

type RouteParams = {
  group: string;
};

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [playes, setPlayes] = useState([]);
  const route = useRoute();
  const { group } = route.params as RouteParams;

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert("Participantes", "Informe o nome da pessoa.");
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      const players = await playersGetByGroup(group);
      console.log(players);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Participantes", error.message);
      } else {
        console.log(error);
        Alert.alert(
          "Participantes",
          "Não foi possível adicionar o participante."
        );
      }
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <SubHeader title={group} subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          onChangeText={setNewPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
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

import { Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "./theme";

export const OPTIONS_BREED = [
    {
        id: 'archives',
        name: 'Arquivos',
        image: <Entypo name="archive" size={30} color="#272727" />,
        imageSelected: <Entypo name="archive" size={30} color={COLORS.white} />,
        blocked: false,
    },
    {
        id: 'favoritos',
        name: 'Favoritos',
        image: <MaterialIcons name="favorite" size={30} color="#000" />,
        imageSelected: <MaterialIcons name="favorite" size={30} color={COLORS.white} />,
        blocked: false,
    },
    {
        id: 'quiz',
        name: 'Quiz',
        image: <Ionicons name="md-game-controller" size={30} color="#000" />,
        imageSelected: <Ionicons name="md-game-controller" size={30} color={COLORS.white} />,
        blocked: false,
    },
    {
        id: 'jogos',
        name: 'Jogos',
        // image: <MaterialCommunityIcons name="pig-variant" size={30} color="#030303" />,
        image: <Entypo name="lock" size={24} color="#030303" />,
        imageSelected: <MaterialCommunityIcons name="pig-variant" size={30} color={COLORS.white} />,
        blocked: true,
    },
    {
        id: 'online',
        name: 'Jogos online',
        // image: <FontAwesome5 name="user-friends" size={24} color="#030303" />,
        image: <Entypo name="lock" size={24} color="#030303" />,
        imageSelected: <FontAwesome5 name="user-friends" size={30} color={COLORS.white} />,
        blocked: true,
    },
];
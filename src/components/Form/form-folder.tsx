import { useState } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

import { IFolder, IPars } from "../../context/context";
import { COLORS } from "../../../constants/theme";

interface FormFolderProps {
    folder?: IFolder;
    onSubmit(pars: IPars): void;
};

export const FormFolder = ({
    folder,
    onSubmit
}: FormFolderProps) => {
    const [description, setDescription] = useState<string>(folder?.text || '');

    const handleSubmit = () => {
        const pars: IPars = {
            id: uuid().toString(),
            text: description,
            type: 'folder',
            createdAt: new Date(),
            updatedAt: new Date(),
            quantityArchives: 0,
            path: ''
        };

        onSubmit(pars);
    };

    return (
        <View style={styles.form}>
            {!folder?.id && (
                <View style={styles.contentTextInput} >
                    <Text style={{ fontSize: 15, marginLeft: 5 }} >Nome da Pasta</Text>
                </View>
            )}
            <TextInput
                value={description}
                placeholder="Nome da Pasta"
                onChangeText={setDescription}
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.textInput}
            />
            <TouchableOpacity onPress={handleSubmit} style={{ justifyContent: 'center', alignSelf: 'center', width: 200, height: 60 }}>
                <View style={styles.contentAddFolderButton}>
                    {folder?.id ? (
                        <Text style={{ fontSize: 18, color: COLORS.white }}>Salvar</Text>
                    ) : (
                        <Text style={{ fontSize: 18, color: COLORS.white }}>Criar</Text>
                    )}
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        width: '100%',
        paddingHorizontal: 15,
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentTextInput: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 5
    },
    textInput: {
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        paddingVertical: Platform.OS === 'ios' ? 15 : 0,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        fontSize: 17,
        shadowColor: '#828282',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    contentAddFolderButton: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6a2194',
        borderRadius: 20,
        marginTop: 40
    },
});
import { useState, useContext, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { ScrollView, TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { v4 as uuid } from "uuid";
import { COLORS } from "../../../constants/theme";
import * as ImagePicker from 'expo-image-picker';
import _ from "lodash";
import { Entypo } from "@expo/vector-icons";
import { createCard } from "../../actions/card";
import { MobileContext } from "../../context/context";
import useAddModal from "../../hooks/use-add-modal";

interface IImage {
    front: string;
    back: string;
};

interface IValuesForm {
    text: string;
    title: string;
    images: IImage;
    response: string;
}

export const FormCard = () => {

    const { path } = useContext(MobileContext);
    const { onClose } = useAddModal();

    const [images, setImages] = useState<IImage>({
        front: '',
        back: ''
    });
    const [sideCard, setSideCard] = useState<'front' | 'back'>('front');

    const { control, handleSubmit, formState: { errors }, getValues, setValue, } = useForm<IValuesForm>({
        defaultValues: {
            title: '',
            images: {
                front: '',
                back: '',
            },
            response: ''
        }
    });

    const onSubmit = (data: IValuesForm) => {
        createCard({
            id: uuid(),
            title: data.title,
            response: data.response,
            type: 'card',
            text: data.text,
            frontImage: data.images.front,
            backImage: data.images.back,
        }, path);

        onClose();
    };

    const pickImage = async (type: 'front' | 'back') => {
        // No permissions request is necessary for launching the image library
        const res = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            allowsMultipleSelection: false,
            aspect: [3, 3],
            quality: 1,
        });

        const newImages = getValues().images;

        if (!_.isNull(res.assets)) {
            newImages[type] = res.assets[0].uri;
        }

        setImages(newImages);
        setValue('images', newImages);
    };

    return (
        <View style={styles.form}>
            <ScrollView>
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholderTextColor="#b4b4b4"
                            placeholder="Nome do card"
                        />
                    )}
                    name="text"
                />
                {errors.text && <Text style={{ color: '#bd0505', fontSize: 16, marginTop: 5 }} >This is required.</Text>}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholderTextColor="#b4b4b4"
                            placeholder="Titulo do Card"
                        />
                    )}
                    name="title"
                />
                {errors.title && <Text style={{ color: '#bd0505', fontSize: 16, marginTop: 5 }} >This is required.</Text>}
                <Controller
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholderTextColor="#b4b4b4"
                            placeholder="Resposta"
                        />
                    )}
                    name="response"
                />
                {errors.response && <Text style={{ color: '#bd0505', fontSize: 16, marginTop: 5 }} >This is required.</Text>}
                <View style={styles.contentImages}>
                    <Text style={{ fontSize: 16 }}>Frente</Text>
                    <View style={styles.contentViewImages}>
                        <TouchableOpacity
                            onPress={() => pickImage('front')}
                            style={styles.addPhoto}>
                            <Entypo name="plus" size={30} color='#140974' />
                        </TouchableOpacity>
                        <View key={images.front} style={styles.image}>
                            {images.front && (
                                <Image
                                    source={{ uri: images.front }}
                                    style={{
                                        width: 80,
                                        height: 70
                                    }}
                                    resizeMode="contain"
                                />
                            )}
                        </View>
                    </View>
                </View>
                <View style={styles.contentImages}>
                    <Text style={{ fontSize: 16 }}>Verso</Text>
                    <View style={styles.contentViewImages}>
                        <TouchableOpacity
                            onPress={() => pickImage('back')}
                            style={styles.addPhoto}>
                            <Entypo name="plus" size={30} color='#140974' />
                        </TouchableOpacity>
                        <View key={images.back} style={styles.image}>
                            {images.back && (
                                <Image
                                    source={{ uri: images.back }}
                                    style={{
                                        width: 80,
                                        height: 70
                                    }}
                                    resizeMode="contain"
                                />
                            )}
                        </View>
                    </View>
                </View>
                <View style={styles.contentCard}>
                    <Text style={{ fontSize: 18 }}>Card</Text>
                    <Text style={{ fontSize: 16 }}>{sideCard === 'front' ? 'Frente' : 'Verso'}</Text>
                    <View style={styles.cards}>
                        <Pressable style={styles.card} onPress={() => sideCard === 'front' ? setSideCard('back') : setSideCard('front')}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                {images[sideCard] && (
                                    <View key={images[sideCard]} style={styles.image}>
                                        <Image
                                            source={{ uri: images[sideCard] }}
                                            style={{
                                                width: 80,
                                                height: 70
                                            }}
                                            resizeMode="contain"
                                        />
                                    </View>
                                )}
                                <Text>{sideCard === 'front' ? getValues('title') : getValues('response')}</Text>
                            </View>
                        </Pressable>
                    </View>
                </View>
                <Pressable onPress={handleSubmit(onSubmit)} style={styles.buttonCreate}>
                    <Text style={styles.textButtonCreate}>Criar</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        width: '100%',
        height: 400,
        paddingHorizontal: 15,
        paddingVertical: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        paddingVertical: 15,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: COLORS.white,
        paddingHorizontal: 15,
        shadowColor: '#828282',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    contentImages: {
        width: '100%',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    image: {
        width: 80,
        borderRadius: 3,
        marginTop: 10,
        height: 70,

    },
    contentViewImages: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    addPhoto: {
        width: 80,
        height: 70,
        borderWidth: 1,
        borderColor: '#2f0480',
        borderStyle: 'dashed',
        borderRadius: 1,
        justifyContent: 'center',
        alignItems: 'center',

        marginTop: 10,
    },
    contentCard: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 20,
    },
    cards: {
        width: '100%',
        height: 200,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        width: '100%',
        height: 200,
        borderWidth: 1,
        borderColor: '#2f0480',
        borderStyle: 'dashed',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonCreate: {
        width: '100%',
        height: 50,
        backgroundColor: '#3f0072',
        borderRadius: 10,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButtonCreate: {
        fontSize: 18,
        color: COLORS.white
    },
});

import { useState } from "react";

// Hook form
import { useForm, Controller } from "react-hook-form";

// Components react and libs
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

// Icons
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'

// Styles CSS
import { styles } from './styles';
import { COLORS, FONTS } from "../../../constants/theme";
import { useNavigation } from "@react-navigation/native";

interface IValuesForm {
    email: string;
    password: string;
}

export const SignIn = () => {
    const [isChecked, setChecked] = useState(false);

    const navigation: any = useNavigation();

    const { control, formState: { errors } } = useForm<IValuesForm>({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = (data: IValuesForm) => console.log(data);

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.headerContent}>
                    <Text style={FONTS.h1}>Sign In</Text>
                </View>
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
                            placeholderTextColor={COLORS.blue_100}
                            placeholder="E-mail"
                        />
                    )}
                    name="email"
                />
                {errors.email && <Text>This is required.</Text>}
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
                            placeholderTextColor={COLORS.blue_100}
                            placeholder="Password"
                        />
                    )}
                    name="password"
                />
                {errors.password && <Text>This is required.</Text>}
                <View>
                    <View style={styles.contentForgot}>
                        <View style={styles.contentCheckbox}>
                            <Checkbox color={COLORS.pink_500} style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
                            <Text style={styles.text}>Remember me</Text>
                        </View>
                        <Text style={styles.text}>Forgot Password ?</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.divider}>
                    <View style={styles.line} />
                    <Text style={styles.text}>or</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.contentSocials}>
                    <FontAwesome5 name="facebook" size={30} color={COLORS.blue_input} />
                    <Entypo name="google--with-circle" size={30} color={COLORS.blue_input} />
                    <Entypo name="twitter-with-circle" size={30} color={COLORS.blue_input} />
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.text}>
                    Dont have an account ?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{ color: COLORS.pink_500 }}> Create new one</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
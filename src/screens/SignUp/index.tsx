
import { useState } from "react";

// Hook form
import { useForm, Controller } from "react-hook-form";

// Components react and libs
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Checkbox from 'expo-checkbox';

// Styles CSS
import { styles } from './styles';
import { COLORS, FONTS } from "../../../constants/theme";
import { useNavigation } from "@react-navigation/native";

interface IValuesForm {
    email: string;
    username: string;
    password: string;
    passwordConfirm: string;
}

export const SignUp = () => {
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
                    <Text style={FONTS.h1}>Sign Up</Text>
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
                            placeholder="Username"
                        />
                    )}
                    name="username"
                />
                {errors.username && <Text>This is required.</Text>}
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
                            placeholder="Repeat Password"
                        />
                    )}
                    name="passwordConfirm"
                />
                {errors.passwordConfirm && <Text>This is required.</Text>}
                <View>
                    <View style={styles.contentForgot}>
                        <View style={styles.contentCheckbox}>
                            <Checkbox color={COLORS.pink_500} style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
                            <Text style={styles.textCheckbox}>By signing up you accept the
                                <Text style={styles.strongText}> Term of service </Text>
                                and
                                <Text style={styles.strongText}> Privacy Policy</Text>
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={[styles.text, { textAlign: 'center' }]}>
                    Already have an account ?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={{ color: COLORS.pink_500 }}> Sign in</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
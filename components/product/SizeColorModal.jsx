// SizeColorModal.js
import React, {useState} from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../constants/index';

const SizeColorModal = ({visible, onClose, onSubmit}) => {
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const handleSizePress = (size) => {
        setSelectedSize(size);
    };

    const handleColorPress = (color) => {
        setSelectedColor(color);
    };

    const handleSubmit = () => {
        if (selectedSize && selectedColor) {
            onSubmit(selectedSize, selectedColor);
            onClose();
        }
    };

    return (
        <Modal transparent={true} visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Select Size:</Text>
                    <View style={styles.optionsRow}>
                        {['Small', 'Medium', 'Large'].map((size) => (
                            <TouchableOpacity
                                key={size}
                                style={[
                                    styles.optionButton,
                                    selectedSize === size && styles.selectedOption,
                                ]}
                                onPress={() => handleSizePress(size)}>
                                <Text>{size}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Text style={styles.modalTitle}>Select Color:</Text>
                    <View style={styles.optionsRow}>
                        {['Red', 'Blue', 'Green'].map((color) => (
                            <TouchableOpacity
                                key={color}
                                style={[
                                    styles.optionButton,
                                    selectedColor === color && styles.selectedOption,
                                ]}
                                onPress={() => handleColorPress(color)}>
                                <Text>{color}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={handleSubmit}>
                        <Text style={styles.submitButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    optionsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    optionButton: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.primary,
    },
    selectedOption: {
        backgroundColor: COLORS.primary,
    },
    submitButton: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SizeColorModal;

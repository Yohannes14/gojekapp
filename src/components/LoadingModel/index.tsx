import { Colors } from "@/config/Colors";
import { LoadingModalProps } from "@/types/Components";
import { ActivityIndicator, Modal, View, StyleSheet } from "react-native";

const LoadingModal: React.FC<LoadingModalProps> = ({ visible }) => {
    return (
        <Modal transparent visible={visible}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <ActivityIndicator size="large" color={Colors.button.primary} />
                </View>
            </View>
        </Modal>
    )
}

export default LoadingModal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 100,
        height: 100,
        backgroundColor: Colors.common.white,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

});

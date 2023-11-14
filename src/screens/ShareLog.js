import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ShareLog = ({ isVisible, onClose, onShare }) => (
  <Modal
    animationType="slide"
    transparent={true}
    visible={isVisible}
    onRequestClose={onClose}
  >
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Custom Share Options</Text>
      {/* Add your custom share options here */}
      <TouchableOpacity onPress={onShare}>
        <Text style={styles.shareText}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.closeText}>Close</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ShareLog;

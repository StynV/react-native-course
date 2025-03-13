import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

const InstructionText = ({ children, style }) => (
  <Text style={[styles.instructionText, style]}>{children}</Text>
);

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});

export default InstructionText;

import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({
  primaryText: {
    color: "red",
    fontSize: 30,
    fontWeight: "800",
  },
});

export const buttonStyles = StyleSheet.create({
  fullButton: {
    width: width - 10,
    height: 45,
    borderRadius: 12,
    borderEndEndRadius: 12,
    padding: 8,
  },
});

export const boxStyles = StyleSheet.create({
  flexBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const modalStyles = StyleSheet.create({
  container: {
    flex: 1,
    height:200,
    justifyContent: "center", 
  },
  top: {
    position: "absolute",
    top: 0,
    backgroundColor: "green",
    width: width,
    marginHorizontal: "auto",
    left: "50%",
    transform: [{ translateX: -55 }],
  },
  centeredBox: {
    position: "absolute",
    width:"98%",
    left: "50%", // Move the left edge to 50% of parent width
    transform: [{ translateX: "-50%" }], // Shift it back by 50% of its own width
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
  },
});

export const preStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mediaAttachmentItem: {
    height: 300,
    width: width - 40,
    padding: 2,
  },
  colContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

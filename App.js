import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Box =({backgroundColor, tittle, text, time}) =>{
  return (
    <View style={[styles.box,{backgroundColor}]}>
      <Text style={styles.tittle}>
        {tittle}
      </Text>
      <Text style={styles.text}>
        {text}
      </Text >
      <Text style={styles.time}>
        {time}
      </Text >
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Thông báo</Text>
      <Box backgroundColor="#c5d5e5" tittle="Bước 1 Xác định nhu cầu khách hàng" text="Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00" time="20/8/2020, 6:00 "></Box>
      <Box backgroundColor="#c5d5e5" tittle="Bạn có khách hàng mới!" text="Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay." time="20/8/2020, 6:00 "></Box>
      <Box backgroundColor="white" tittle="Khách hàng được chia sẻ bị trùng" text="Rất tiếc khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng" time="20/8/2020, 6:00 "></Box>
      <Box backgroundColor="#c5d5e5" tittle="Khách hàng được thêm bị trùng" text="Rất tiếc khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng" time="20/8/2020, 6:00 "></Box>
      <Box backgroundColor="white" tittle="Công việc sắp đến hạn trong hôm nay" text="Bạn có 17 công việc sắp đến hạn trong hôm naynay" time="20/8/2020, 6:00 "></Box>
      <Box backgroundColor="white" tittle="Công việc đã quá hạn" text="Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc" time="20/8/2020, 6:00 "></Box>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center"
  },
  label: {
    fontWeight: "bold",
    fontSize: 25,
    paddingTop:50,
    marginBottom:40
  },
  box: {
    width: "100%",
    height:100,
    justifyContent: "center",
    paddingLeft:40,
    margin: 1
  },
  tittle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  text: {
    color: "black",
    paddingRight:40
  },
  time: {
    color: "gray"
  }
});

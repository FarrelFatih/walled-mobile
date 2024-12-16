import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const Home = () => {
  const transactions = [
    {
      id: "1",
      name: "Adityo Gizwanda",
      type: "Transfer",
      amount: "- 75.000,00",
      date: "08 December 2024",
      isPositive: false,
    },
    {
      id: "2",
      name: "Adityo Gizwanda",
      type: "Topup",
      amount: "+ 75.000,00",
      date: "08 December 2024",
      isPositive: true,
    },
    {
      id: "3",
      name: "Adityo Gizwanda",
      type: "Transfer",
      amount: "- 75.000,00",
      date: "08 December 2024",
      isPositive: false,
    },
  ];

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionDetails}>
        <View style={styles.profilePicture} />
        <View>
          <Text style={styles.transactionName}>{item.name}</Text>
          <Text style={styles.transactionType}>{item.type}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
      </View>
      <Text
        style={[
          styles.transactionAmount,
          { color: item.isPositive ? "green" : "red" },
        ]}
      >
        {item.amount}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://via.placeholder.com/50" }}
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.greeting}>Chelsea Immanuela</Text>
          <Text style={styles.subGreeting}>Personal Account</Text>
        </View>
        <Text style={styles.weatherIcon}>☀️</Text>
      </View>

      {/* Account Info */}
      <View style={styles.accountInfo}>
        <Text style={styles.sectionTitle}>Good Morning, Chelsea</Text>
        <Text style={styles.sectionSubtitle}>
          Check all your incoming and outgoing transactions here
        </Text>
        <View style={styles.accountDetails}>
          <Text style={styles.accountNumberLabel}>Account No.</Text>
          <Text style={styles.accountNumber}>100899</Text>
        </View>

        <View style={styles.balanceContainer}>
          <View>
            <Text style={styles.balanceLabel}>Balance</Text>
            <Text style={styles.balanceValue}>Rp 10.000.000</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>➤</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Transaction History */}
      <View style={styles.transactionHistory}>
        <Text style={styles.transactionHistoryTitle}>Transaction History</Text>
        <FlatList
          data={transactions}
          renderItem={renderTransaction}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subGreeting: {
    fontSize: 14,
    color: "gray",
  },
  weatherIcon: {
    marginLeft: "auto",
    fontSize: 20,
  },
  accountInfo: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 15,
  },
  accountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  accountNumberLabel: {
    fontSize: 14,
    color: "gray",
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: "bold",
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceLabel: {
    fontSize: 14,
    color: "gray",
  },
  balanceValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  actionButtons: {
    flexDirection: "row",
  },
  actionButton: {
    backgroundColor: "#00A896",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  transactionHistory: {
    marginTop: 20,
  },
  transactionHistoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 10,
  },
  transactionDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#ddd",
    marginRight: 10,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionType: {
    fontSize: 14,
    color: "gray",
  },
  transactionDate: {
    fontSize: 12,
    color: "gray",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;

// import ArticleCarousel from "@/components/ArticlesCarousel";
// import { articles } from "@/constants/articles";
// import { icons } from "@/constants/icons";
// import { Link } from "expo-router";
// import {
//   FlatList,
//   Image,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   ActivityIndicator,
//   View,
// } from "react-native";
// import { useState } from "react";
// import { askOpenAI } from "../../services/openAIService";
// import { askGemini, analyzeJournalEmotion } from "../../services/geminiService";

// export default function Index() {
//   const [query, setQuery] = useState("");
//   const [response, setResponse] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [emotionScore, setEmotionScore] = useState<number | null>(null);
//   const [emotionExplanation, setEmotionExplanation] = useState("");

//   const handleSubmit = async () => {
//     if (!query.trim()) return;

//     setLoading(true);
//     setEmotionScore(null);
//     setEmotionExplanation("");

//     try {
//       const emotionAnalysis = await analyzeJournalEmotion(query);

//       setEmotionScore(emotionAnalysis.score);
//       setEmotionExplanation(emotionAnalysis.explanation);

//       const generalResponse = await askGemini(query);
//       setResponse(generalResponse);
//     } catch (error: unknown) {
//       if (error instanceof Error) {
//         setResponse(`Error: ${error.message}`);
//       } else {
//         setResponse("An unknown error occurred");
//       }

//       setEmotionScore(null);
//       setEmotionExplanation("");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.navbar}>
//         <Image source={icons.logo3} resizeMode="contain" style={styles.logo} />
//         <View style={styles.profile}>
//           <Image
//             source={icons.kiel}
//             resizeMode="cover"
//             style={styles.profilePicture}
//           />
//           <View style={styles.textSection}>
//             <Text style={styles.name}>Hi, Matt</Text>
//             <Text style={styles.text}>How's Your Day?</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.content}>
//         <Text style={styles.subTitle}>How's your mood level?</Text>
//         <Image source={icons.statistic} style={styles.statistic} />
//       </View>
//       <View style={styles.content}>
//         <Text style={styles.subTitle}>Goals Ahead</Text>
//         <View style={styles.goal}>
//           <Image source={icons.createGoal} style={styles.createGoal} />
//           <View style={styles.goalText}>
//             <Text>Don't forget to create your goals.</Text>
//             <Link style={styles.linkGoal} href={"/goal"}>
//               Create Goals
//             </Link>
//           </View>
//         </View>
//       </View>
//       <View style={styles.articlecontent}>
//         <View style={styles.articles}>
//           <Text>Read New Articles</Text>
//           <Link style={styles.readAll} href={"/articles"}>
//             Read All
//           </Link>
//         </View>
//         <ArticleCarousel />
//       </View>

//       <View style={styles.aiSection}>
//         <Text style={styles.aiTitle}>MindCare Journal</Text>

//         {emotionScore !== null && (
//           <View style={styles.emotionContainer}>
//             <Text style={styles.emotionScoreLabel}>Emotion Score:</Text>
//             <View
//               style={[
//                 styles.emotionScoreBadge,
//                 emotionScore < -1
//                   ? styles.veryNegative
//                   : emotionScore < 0
//                   ? styles.negative
//                   : emotionScore === 0
//                   ? styles.neutral
//                   : emotionScore <= 1
//                   ? styles.positive
//                   : styles.veryPositive,
//               ]}
//             >
//               <Text style={styles.emotionScoreText}>{emotionScore}</Text>
//             </View>
//             {emotionExplanation ? (
//               <Text style={styles.emotionExplanation}>
//                 {emotionExplanation}
//               </Text>
//             ) : null}
//           </View>
//         )}

//         {response ? (
//           <View style={styles.responseContainer}>
//             <Text style={styles.responseText}>{response}</Text>
//           </View>
//         ) : null}

//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Write your journal entry here..."
//             value={query}
//             onChangeText={setQuery}
//             multiline
//             numberOfLines={4}
//           />

//           <TouchableOpacity
//             style={[styles.button, !query.trim() && styles.buttonDisabled]}
//             onPress={handleSubmit}
//             disabled={loading || !query.trim()}
//           >
//             {loading ? (
//               <ActivityIndicator color="#fff" size="small" />
//             ) : (
//               <Text style={styles.buttonText}>Submit</Text>
//             )}
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     paddingBottom: 30,
//   },
//   navbar: {
//     backgroundColor: "#57A6E0",
//     height: 190,
//     width: "100%",
//     borderBottomLeftRadius: 32,
//     borderBottomRightRadius: 32,
//   },
//   logo: {
//     marginTop: 20,
//     marginLeft: 20,
//     width: 160,
//     height: 56,
//   },
//   profile: {
//     display: "flex",
//     flexDirection: "row",
//     gap: 20,
//   },
//   profilePicture: {
//     marginTop: 0,
//     marginLeft: 20,
//     width: 100,
//     height: 100,
//     borderRadius: 599,
//   },
//   textSection: {
//     width: "100%",
//   },
//   name: {
//     width: "100%",
//     fontSize: 32,
//     fontFamily: "Poppins_600SemiBold",
//   },
//   text: {
//     fontSize: 16,
//     fontFamily: "Poppins_400Regular",
//     transform: [{ translateY: -10 }],
//   },
//   content: {
//     justifyContent: "center",
//     marginTop: 20,
//     marginHorizontal: 25,
//     alignItems: "center",
//   },
//   articlecontent: {
//     justifyContent: "center",
//     marginTop: 20,
//     marginLeft: 25,
//     alignItems: "center",
//   },
//   subTitle: {
//     width: "100%",
//   },
//   statistic: {
//     marginTop: 20,
//     width: 170,
//     height: 170,
//   },
//   createGoal: {
//     width: 43,
//     height: 59,
//   },
//   goal: {
//     display: "flex",
//     flexDirection: "row",
//     borderRadius: 16,
//     borderWidth: 0.5,
//     paddingHorizontal: 20,
//     paddingVertical: 20,
//     width: "100%",
//     gap: 12,
//   },
//   goalText: {
//     display: "flex",
//     justifyContent: "center",
//   },
//   linkGoal: {
//     fontFamily: "Poppins_600SemiBold",
//     textDecorationLine: "underline",
//   },
//   articles: {
//     width: "100%",
//     display: "flex",
//     flexDirection: "row",
//     paddingRight: 25,
//     justifyContent: "space-between",
//   },
//   readAll: {
//     textDecorationLine: "underline",
//   },
//   aiSection: {
//     marginTop: 30,
//     marginHorizontal: 25,
//     borderTopWidth: 1,
//     borderTopColor: "#e0e0e0",
//     paddingTop: 20,
//   },
//   aiTitle: {
//     fontSize: 18,
//     fontFamily: "Poppins_600SemiBold",
//     marginBottom: 15,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginTop: 10,
//   },
//   input: {
//     flex: 1,
//     backgroundColor: "#f0f0f0",
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     fontSize: 16,
//     maxHeight: 120,
//     textAlignVertical: "top",
//   },
//   button: {
//     marginLeft: 12,
//     backgroundColor: "#57A6E0",
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonDisabled: {
//     backgroundColor: "#a0a0a0",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   responseContainer: {
//     backgroundColor: "#f8f8f8",
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 15,
//     borderWidth: 1,
//     borderColor: "#e0e0e0",
//   },
//   responseText: {
//     fontSize: 16,
//     lineHeight: 24,
//     fontFamily: "Poppins_400Regular",
//   },
//   emotionContainer: {
//     marginBottom: 15,
//     padding: 16,
//     backgroundColor: "#f0f7ff",
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: "#d0e0f0",
//   },
//   emotionScoreLabel: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   emotionScoreBadge: {
//     alignSelf: "flex-start",
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 20,
//     marginBottom: 12,
//   },
//   emotionScoreText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#fff",
//   },
//   emotionExplanation: {
//     fontSize: 16,
//     lineHeight: 22,
//   },
//   veryNegative: {
//     backgroundColor: "#d32f2f",
//   },
//   negative: {
//     backgroundColor: "#f57c00",
//   },
//   neutral: {
//     backgroundColor: "#757575",
//   },
//   positive: {
//     backgroundColor: "#7cb342",
//   },
//   veryPositive: {
//     backgroundColor: "#00897b",
//   },
// });

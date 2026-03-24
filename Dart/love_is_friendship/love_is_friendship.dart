int wordsToMarks(String s) {
  final List<String> letters = List.generate(
    26,
    (i) => String.fromCharCode(97 + i),
  );
  final Map<String, int> alphabetMap = Map.fromIterables(
    letters,
    List.generate(26, (i) => i + 1),
  );
  return s.split("").map((e) => alphabetMap[e] ?? 0).reduce((a, b) => a + b);
}

void main() {
  print(wordsToMarks("attitude"));
  print(wordsToMarks("friends"));
  print(wordsToMarks("family"));
}

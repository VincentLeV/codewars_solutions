num sum(List<num> arr) {
  return arr.isEmpty ? 0 : arr.reduce((a, b) => a + b);
}

num main() {
  return sum([]);
  // return sum([1, 5.2, 4, 0, -1]);
}

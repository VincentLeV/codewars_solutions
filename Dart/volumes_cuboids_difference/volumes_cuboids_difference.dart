int findDifference(List<int> a, List<int> b) {
  return ((a.isEmpty ? 0 : a.reduce((a, b) => a * b)) -
          (b.isEmpty ? 0 : b.reduce((a, b) => a * b)))
      .abs();
}

void main() {
  print(findDifference([], [5, 4, 1]));
  print(findDifference([2, 2, 3], [5, 4, 1]));
}

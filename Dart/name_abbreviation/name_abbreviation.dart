String abbrevName(String name) {
  return name.splitMapJoin(
    " ",
    onMatch: (str) => ".",
    onNonMatch: (str) => str[0].toUpperCase(),
  );
}

String main() {
  // return abbrevName("Sam Harris");
  return abbrevName("john doe");
}

// [prettierx] test script notice:
// This test script runs for test files in another directory,
// **not** on any files in *this* directory.

const dirPath = `${__dirname}/../../template`;

run_spec(dirPath, ["babel", "babel-flow"], {
  // [prettierx] test with --paren-spacing
  spaceInParens: true,
  arrayBracketSpacing: true,
  computedPropertySpacing: true,
  templateCurlySpacing: true,
  trailingComma: "none", // ("Standard JS")
});

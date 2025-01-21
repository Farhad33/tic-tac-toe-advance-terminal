
export function getUserInput(question) {
  return new Promise((resolve) => {
    process.stdout.write(question)
    process.stdin.once('data', (data) => {
      resolve(data.toString().trim())
    });
  });
}
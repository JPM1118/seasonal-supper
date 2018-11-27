import imgApiCall from "./imgApiCall";
async function test() {
  let picture = await imgApiCall("carrot");
  await console.log(`picture:${picture}`);
  return await picture;
}
test();

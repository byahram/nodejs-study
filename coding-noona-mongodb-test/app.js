const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
  const database = client.db("firstDB");
  const users = database.collection("users");
  const inventory = database.collection("inventory");
  const students = database.collection("students");

  // 단일 삽입
  //   const userData = await users.insertOne({ name: "noona", age: 17 });
  //   console.log("result", userData);

  // 복수 삽입
  //   const userList = [
  //     { name: "철수", age: 30 },
  //     { name: "jessica", age: 25 },
  //   ];
  //   const userListResult = await users.insertMany(userList);
  //   console.log("result", userListResult);

  // 불러오기
  //   const findUser = await users.findOne({ age: { $gt: 20 } });
  //   console.log("result", findUser);

  // 업데이트
  //   const updateUser = await users.updateOne(
  //     { name: "noona" },
  //     { $set: { age: 18 } }
  //   );
  //   console.log("result", updateUser);

  // 삭제
  //   const deleteUser = await users.deleteMany({ age: { $gt: 20 } });
  //   console.log("result", deleteUser);
  //   const userData = await users
  //     .find({ name: "noona" })
  //     .project({ _id: 0 }) // {name: 1}
  //     .toArray();
  //   console.log("result", userData);

  //   HW 숙제
  // 문제 1. inserttOne
  //   const inventList = await inventory.insertOne({
  //     item: "canvas",
  //     qty: 100,
  //     tags: ["cotton"],
  //     size: { h: 28, w: 35.5, uom: "cm" },
  //   });
  //   console.log("result", inventList);

  // 문제 2. insertMany
  //   const inventList = [
  //     {
  //       item: "journal",
  //       qty: 25,
  //       tags: ["blank", "red"],
  //       size: { h: 14, w: 21, uom: "cm" },
  //     },
  //     {
  //       item: "mat",
  //       qty: 85,
  //       tags: ["gray"],
  //       size: { h: 27.9, w: 35.5, uom: "cm" },
  //     },
  //     {
  //       item: "mousepad",
  //       qty: 25,
  //       tags: ["gel", "blue"],
  //       size: { h: 19, w: 22.85, uom: "cm" },
  //     },
  //   ];
  //   const InventoryResult = await inventory.insertMany(inventList);
  //   console.log("result", InventoryResult);

  // 문제3. find: inventory에 저장된 모든 데이터를 읽어오자
  //   const findInventory = await inventory.find().toArray();
  //   console.log("result", findInventory);

  // 문제 4. status가 D인 데이터를 찾아라
  //   const inventList = [
  //     {
  //       item: "journal",
  //       qty: 25,
  //       size: { h: 14, w: 21, uom: "cm" },
  //       status: "A",
  //     },
  //     {
  //       item: "notebook",
  //       qty: 50,
  //       size: { h: 8.5, w: 11, uom: "in" },
  //       status: "A",
  //     },
  //     {
  //       item: "paper",
  //       qty: 100,
  //       size: { h: 8.5, w: 11, uom: "in" },
  //       status: "D",
  //     },
  //     {
  //       item: "planner",
  //       qty: 75,
  //       size: { h: 22.85, w: 30, uom: "cm" },
  //       status: "D",
  //     },
  //     {
  //       item: "postcard",
  //       qty: 45,
  //       size: { h: 10, w: 15.25, uom: "cm" },
  //       status: "A",
  //     },
  //   ];
  //   const InventoryResult = await inventory.insertMany(inventList);
  //   const findInventory = await inventory.find({ status: "D" }).toArray();
  //   console.log("result", findInventory);

  // 문제 5. : status가 'A’이고 qty가 50인 데이터를 찾아라
  //   const findInventory = await inventory
  //     .find({ status: "D", qty: 50 })
  //     .toArray();
  //   console.log("result", findInventory);

  // 문제 6. 쿼리 $in 사용해보기 : status가 A 또는 B인 데이터를 찾자
  //   const findInventory = await inventory
  //     .find({ status: { $in: ["A", "B"] } })
  //     .toArray();
  //   console.log("result", findInventory);

  // 문제 7. $lt : status가 A이고 qty가 30보다 작은 데이터를 찾자
  //   const findInventory = await inventory
  //     .find({ status: "A", qty: { $lt: 30 } })
  //     .toArray();
  //   console.log("result", findInventory);

  // 문제 8. $or : status가 A이거나 qty가 30보다 작은 데이터를 찾자
  //   const findInventory = await inventory
  //     .find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] })
  //     .toArray();
  //   console.log("result", findInventory);

  // 문제 9. nested field : size 에 uom이 in 인 데이터를 찾자
  //   const findInventory = await inventory.find({ "size.uom": "in" }).toArray();
  //   console.log("result", findInventory);

  // 문제 10. size에 h가 10을 초과하는 데이터를 찾자
  //   const findInventory = await inventory
  //     .find({ "size.h": { $gt: 10 } })
  //     .toArray();
  //   console.log("result", findInventory);

  // 문제 11. updateOne : id가 3인 학생에게 test3 의 점수를 98로 세팅
  //   const studentList = [
  //     {
  //       _id: 1,
  //       test1: 95,
  //       test2: 92,
  //       test3: 90,
  //       modified: new Date("01/05/2020"),
  //     },
  //     {
  //       _id: 2,
  //       test1: 98,
  //       test2: 100,
  //       test3: 102,
  //       modified: new Date("01/05/2020"),
  //     },
  //     { _id: 3, test1: 95, test2: 110, modified: new Date("01/04/2020") },
  //   ];
  //   const studentResult = await students.insertMany(studentList);
  //   const updateStudent = await students.updateOne(
  //     { _id: 3 },
  //     { $set: { test3: 98 } }
  //   );
  //   console.log("result", updateStudent);

  // 문제 12. updateMany : 모든데이터의 test1의 점수를 0으로 세팅하고 status:"modified"라는 필드를 추가
  //   const updateStudent = await students.updateMany({}, [
  //     { $set: { status: "Modified", test1: 0 } },
  //   ]);
  //   console.log("result", updateStudent);

  // 문제 13. deleteOne : test2점수가 92점인 학생을 삭제
  //   const deleteStudent = await students.deleteOne({ test2: 92 });
  //   console.log("result", deleteStudent);

  // 문제 14. deleteMany : test1의 점수가 0인 학생들을 삭제
  const deleteStudent = await students.deleteMany({ test1: 0 });
  console.log("result", deleteStudent);
}
run();
